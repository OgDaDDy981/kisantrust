/**
 * AgriLink - Smart Village Pooling & Aggregation Service (Stage 4)
 * Enables smallholder farmers in the same village cluster to aggregate compatible produce,
 * unlock high-volume bulk buyer purchase orders, and save 50–60% on shared road freight.
 */

import { firebaseService } from './firebaseService.js';
import { PoolingCluster } from '../models/Pooling.js';
import { mockPoolingClusters } from '../data/mockMandis.js';
import { TransportEstimationService } from './transportEstimationService.js';

export class PoolingService {
    /**
     * Seed initial pooling clusters in Firestore
     */
    static async initializePoolingData() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('poolingClusters')).get();
        if (snap.empty) {
            for (const cluster of mockPoolingClusters) {
                const p = new PoolingCluster(cluster);
                await (await firebaseService.db.collection('poolingClusters')).doc(p.clusterId).set(p.toFirestore());
            }
        }
    }

    /**
     * Get active pooling clusters, optionally filtered by crop
     * @param {string} [cropType]
     * @returns {Promise<Array<PoolingCluster>>}
     */
    static async getActiveClusters(cropType = null) {
        await this.initializePoolingData();
        const snap = await (await firebaseService.db.collection('poolingClusters')).get();
        let list = snap.docs
            .map(d => new PoolingCluster(d.data()))
            .filter(c => c.status === 'GATHERING' || c.status === 'OPEN_FOR_JOINING');

        if (cropType && cropType.toLowerCase() !== 'all') {
            const cLower = cropType.toLowerCase();
            list = list.filter(c => c.cropType.toLowerCase() === cLower || c.cropType.toLowerCase().includes(cLower));
        }

        return list.sort((a, b) => b.savingsPercentage - a.savingsPercentage);
    }

    /**
     * Discover compatible lots for potential village pooling
     * @param {Object} lot DigitalAgriculturalLot
     * @param {string} [taluka="Niphad"]
     * @returns {Promise<{ compatibleLotsCount: number, totalPooledPotentialKg: number, eligibleClusters: Array<PoolingCluster> }>}
     */
    static async discoverCompatibleLots(lot, taluka = "Niphad") {
        await this.initializePoolingData();
        const allClusters = await this.getActiveClusters(lot.cropType);
        
        // Find matching cluster in the same area
        const eligibleClusters = allClusters.filter(c => 
            c.cropType.toLowerCase() === lot.cropType.toLowerCase() &&
            (c.targetCapacityKg - c.currentPooledKg) >= (lot.quantity || 500)
        );

        return {
            compatibleLotsCount: eligibleClusters.reduce((acc, c) => acc + c.participatingFarmersCount, 0),
            totalPooledPotentialKg: eligibleClusters.reduce((acc, c) => acc + c.currentPooledKg, 0),
            eligibleClusters
        };
    }

    /**
     * Calculate logistics savings from village aggregation
     * @param {Object} params
     * @param {number} params.distanceKm
     * @param {number} params.lotQuantityKg
     * @returns {{ individualCostTotal: number, pooledCostTotal: number, totalSavingsRupees: number, savingsPercent: number }}
     */
    static calculateLogisticsSavings({ distanceKm = 180, lotQuantityKg = 500 }) {
        // Individual transport: 1-Ton Pickup @ ₹14/km -> ₹2.52/kg for 180km
        const individualRate = TransportEstimationService.calculateTransportCost({
            distanceKm,
            quantityKg: lotQuantityKg
        }).costPerKg;

        // Pooled transport: 10-Ton Truckload @ ₹42/km spread over 10,000kg -> ₹0.75/kg
        const pooledRate = Number(Math.max(0.60, (distanceKm * 42) / 10000).toFixed(2));

        const individualCostTotal = Number((individualRate * lotQuantityKg).toFixed(2));
        const pooledCostTotal = Number((pooledRate * lotQuantityKg).toFixed(2));
        const totalSavingsRupees = Number((individualCostTotal - pooledCostTotal).toFixed(2));
        const savingsPercent = Number(Math.round(((individualRate - pooledRate) / individualRate) * 100));

        return {
            individualRatePerKg: individualRate,
            pooledRatePerKg: pooledRate,
            individualCostTotal,
            pooledCostTotal,
            totalSavingsRupees,
            savingsPercent
        };
    }

    /**
     * Join an active pooling cluster
     * @param {string} clusterId
     * @param {Object} lot DigitalAgriculturalLot
     * @returns {Promise<PoolingCluster>}
     */
    static async joinPoolingCluster(clusterId, lot) {
        await this.initializePoolingData();
        const docRef = (await firebaseService.db.collection('poolingClusters')).doc(clusterId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Cluster ${clusterId} not found`);

        const cluster = new PoolingCluster(doc.data());
        const addedQty = Number(lot.quantity) || 500;
        const newTotalKg = cluster.currentPooledKg + addedQty;
        const newFarmerCount = cluster.participatingFarmersCount + 1;

        // Add anonymized lot summary to protect farmer privacy
        const lotSummary = {
            lotId: lot.lotId,
            village: lot.approximateLocation?.village || 'Niphad Village Hub',
            quantityKg: addedQty,
            qualityGrade: lot.overallQualityGrade,
            joinedAt: new Date().toISOString()
        };

        const updatedLots = [...cluster.participatingLots, lotSummary];
        const nextStatus = newTotalKg >= cluster.targetCapacityKg ? 'FULL_READY_TO_DISPATCH' : 'GATHERING';

        await docRef.update({
            currentPooledKg: newTotalKg,
            participatingFarmersCount: newFarmerCount,
            participatingLots: updatedLots,
            status: nextStatus,
            updatedAt: new Date().toISOString()
        });

        // Mark lot status as POOLED
        await firebaseService.updateLot(lot.lotId, { status: 'POOLED' });

        return new PoolingCluster({
            ...cluster,
            currentPooledKg: newTotalKg,
            participatingFarmersCount: newFarmerCount,
            participatingLots: updatedLots,
            status: nextStatus
        });
    }

    /**
     * Create a new village pooling cluster
     * @param {Object} clusterData
     * @returns {Promise<PoolingCluster>}
     */
    static async createPoolingCluster(clusterData) {
        await this.initializePoolingData();
        const cluster = new PoolingCluster(clusterData);
        await (await firebaseService.db.collection('poolingClusters')).doc(cluster.clusterId).set(cluster.toFirestore());
        return cluster;
    }
}
