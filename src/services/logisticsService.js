/**
 * KisanTrust - Logistics Decision Support & Freight Estimator (Stage 5)
 * Provides transparent transport options, transit time estimations, and pooled logistics savings.
 * Grounded in commercial road freight benchmarks across Western India / Maharashtra corridors.
 */

import { TransportEstimationService } from './transportEstimationService.js';

export const VEHICLE_FLEET_SPECIFICATIONS = [
    {
        typeId: 'PICKUP_1T',
        transportType: '1-Ton Mini Pickup (Mahindra Bolero / Tata Ace)',
        capacityKg: 1000,
        baseRatePerKm: 14,
        loadingFee: 200,
        unloadingFee: 200,
        averageSpeedKmH: 40,
        temperatureControlled: false,
        bestFor: 'Small individual farm lots (< 1,000 kg) & nearby local APMCs (< 50 km)'
    },
    {
        typeId: 'LCV_3_5T',
        transportType: '3.5-Ton Eicher Light Commercial Truck',
        capacityKg: 3500,
        baseRatePerKm: 26,
        loadingFee: 400,
        unloadingFee: 400,
        averageSpeedKmH: 45,
        temperatureControlled: false,
        bestFor: 'Medium agricultural lots or small group pooling (1,000 - 3,500 kg)'
    },
    {
        typeId: 'REEFER_COLD_3T',
        transportType: 'Cold-Chain Reefer Van (8°C - 12°C Controlled)',
        capacityKg: 3000,
        baseRatePerKm: 38,
        loadingFee: 500,
        unloadingFee: 500,
        averageSpeedKmH: 50,
        temperatureControlled: true,
        bestFor: 'Export Grade A produce, ripe tomatoes, berries, and high-value perishables'
    },
    {
        typeId: 'FTL_10T',
        transportType: '10-Ton Heavy Multi-Axle Truck (Full Truck Load - FTL)',
        capacityKg: 10000,
        baseRatePerKm: 42,
        loadingFee: 800,
        unloadingFee: 800,
        averageSpeedKmH: 45,
        temperatureControlled: false,
        bestFor: 'Smart Village Pooling clusters (5,000 - 10,000 kg) for maximum freight savings'
    }
];

export class LogisticsService {
    /**
     * Get all available logistics options for a lot
     * @param {Object} params
     * @param {number} params.distanceKm
     * @param {number} params.quantityKg
     * @param {string} [params.cropType="Tomato"]
     * @param {boolean} [params.requiresColdChain=false]
     * @returns {Array<Object>} List of evaluated logistics options
     */
    static getAvailableLogisticsOptions({ distanceKm = 40, quantityKg = 500, cropType = 'Tomato', requiresColdChain = false }) {
        return VEHICLE_FLEET_SPECIFICATIONS.map(vehicle => {
            const runningCost = distanceKm * vehicle.baseRatePerKm;
            const totalFreightCost = runningCost + vehicle.loadingFee + vehicle.unloadingFee;
            
            // Cost per kg allocated to this lot
            const effectivePayloadKg = Math.min(vehicle.capacityKg, Math.max(quantityKg, 300));
            const costPerKg = Number((totalFreightCost / effectivePayloadKg).toFixed(2));
            
            const estimatedHours = Number((distanceKm / vehicle.averageSpeedKmH).toFixed(1));
            const isPayloadCompatible = quantityKg <= vehicle.capacityKg;
            const isRecommended = (
                (quantityKg <= 1000 && vehicle.typeId === 'PICKUP_1T') ||
                (quantityKg > 1000 && quantityKg <= 3500 && vehicle.typeId === 'LCV_3_5T') ||
                (quantityKg > 3500 && vehicle.typeId === 'FTL_10T') ||
                (requiresColdChain && vehicle.typeId === 'REEFER_COLD_3T')
            );

            return {
                typeId: vehicle.typeId,
                transportType: vehicle.transportType,
                capacityKg: vehicle.capacityKg,
                estimatedCostPerKg: costPerKg,
                totalFreightCost,
                estimatedTravelTimeHours: estimatedHours,
                pickupCompatibility: isPayloadCompatible ? 'COMPATIBLE' : 'OVER_CAPACITY',
                temperatureControlled: vehicle.temperatureControlled,
                isRecommended,
                bestFor: vehicle.bestFor,
                dataSource: 'ESTIMATED_COMMERCIAL_ROAD_FREIGHT'
            };
        });
    }

    /**
     * Compare Individual Transport vs Pooled Logistics
     * @param {number} distanceKm
     * @param {number} lotQuantityKg
     * @returns {Object} Comparative logistics savings analysis
     */
    static compareIndividualVsPooledLogistics(distanceKm, lotQuantityKg) {
        const individual = this.getAvailableLogisticsOptions({ distanceKm, quantityKg: lotQuantityKg })
            .find(o => o.typeId === 'PICKUP_1T') || { estimatedCostPerKg: 2.50, totalFreightCost: 1250 };

        // 10-Ton pooled truckload freight distributed across full 10,000kg
        const ftlTotal = (distanceKm * 42) + 1600;
        const pooledRatePerKg = Number((ftlTotal / 10000).toFixed(2));
        const pooledCostForLot = Number((pooledRatePerKg * lotQuantityKg).toFixed(2));
        const individualCostForLot = Number((individual.estimatedCostPerKg * lotQuantityKg).toFixed(2));

        const savingsRupees = Number((individualCostForLot - pooledCostForLot).toFixed(2));
        const savingsPercent = Number(Math.round(((individual.estimatedCostPerKg - pooledRatePerKg) / individual.estimatedCostPerKg) * 100));

        return {
            individual: {
                ratePerKg: individual.estimatedCostPerKg,
                totalCost: individualCostForLot,
                vehicleType: '1-Ton Solo Pickup'
            },
            pooled: {
                ratePerKg: pooledRatePerKg,
                totalCost: pooledCostForLot,
                vehicleType: '10-Ton Shared FTL Truck'
            },
            savingsRupees,
            savingsPercent,
            formulaExplanation: `Individual Cost (${lotQuantityKg}kg @ ₹${individual.estimatedCostPerKg}/kg = ₹${individualCostForLot}) - Shared Cost (${lotQuantityKg}kg @ ₹${pooledRatePerKg}/kg = ₹${pooledCostForLot}) = ₹${savingsRupees} Net Savings (${savingsPercent}%).`
        };
    }
}
