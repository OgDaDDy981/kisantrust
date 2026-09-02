/**
 * KisanTrust - Smart Village Pooling & Aggregation Domain Models (Stage 4)
 */

export class PoolingCluster {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.clusterId = data.clusterId || `POOL-${new Date().getFullYear()}-${Date.now().toString().slice(-4)}`;
        this.hubVillage = data.hubVillage || 'Niphad / Pimpalgaon Hub';
        this.taluka = data.taluka || 'Niphad';
        this.district = data.district || 'Nashik';
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || 'Himsona / Hybrid';
        this.overallQualityGrade = data.overallQualityGrade || 'Grade A';
        
        // Capacity metrics
        this.targetCapacityKg = Number(data.targetCapacityKg) || 10000; // e.g. 10-Ton Eicher / Heavy Truck
        this.currentPooledKg = Number(data.currentPooledKg) || 3500;
        this.participatingFarmersCount = Number(data.participatingFarmersCount) || 4;
        
        // Linked lots (stores anonymized summary for privacy: lotId, quantityKg, village)
        this.participatingLots = Array.isArray(data.participatingLots) ? data.participatingLots : [];

        // Destination & Buyer Linkage
        this.destinationMarket = data.destinationMarket || 'Vashi APMC (Navi Mumbai)';
        this.destinationBuyerDemandId = data.destinationBuyerDemandId || null;
        this.buyerName = data.buyerName || 'Sahyadri Agro Processing';

        // Logistics & Savings Breakdown
        this.individualFreightPerKg = Number(data.individualFreightPerKg) || 2.40; // 1-Ton Pickup rate
        this.pooledFreightPerKg = Number(data.pooledFreightPerKg) || 0.95;       // 10-Ton Full Truckload rate
        this.savingsPercentage = Number(data.savingsPercentage || 
            Math.round(((this.individualFreightPerKg - this.pooledFreightPerKg) / this.individualFreightPerKg) * 100)
        );

        // Status & Lifecycle: 'GATHERING' | 'FULL_READY_TO_DISPATCH' | 'IN_TRANSIT' | 'DELIVERED' | 'EXPIRED'
        this.status = data.status || 'GATHERING';
        this.dispatchDate = data.dispatchDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            clusterId: this.clusterId,
            hubVillage: this.hubVillage,
            taluka: this.taluka,
            district: this.district,
            cropType: this.cropType,
            variety: this.variety,
            overallQualityGrade: this.overallQualityGrade,
            targetCapacityKg: this.targetCapacityKg,
            currentPooledKg: this.currentPooledKg,
            participatingFarmersCount: this.participatingFarmersCount,
            participatingLots: this.participatingLots,
            destinationMarket: this.destinationMarket,
            destinationBuyerDemandId: this.destinationBuyerDemandId,
            buyerName: this.buyerName,
            individualFreightPerKg: this.individualFreightPerKg,
            pooledFreightPerKg: this.pooledFreightPerKg,
            savingsPercentage: this.savingsPercentage,
            status: this.status,
            dispatchDate: this.dispatchDate,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
