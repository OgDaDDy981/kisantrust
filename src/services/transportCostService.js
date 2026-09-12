/**
 * AgriLink - Transport Cost & Route Calculation Service
 * Computes transparent, itemized road freight expenses based on distance, quantity, and vehicle fleet options.
 * Differentiates between Partial LTL (Less-Than-Truckload) and Full FTL (Full-Truckload) economics.
 */

import { TransportEstimationService } from './transportEstimationService.js';

export class TransportCostService {
    /**
     * Estimates road distance between farmer location and destination market
     * @param {string} originDistrict e.g. "Nashik"
     * @param {string} destinationMarket e.g. "Vashi APMC (Navi Mumbai)"
     * @returns {number} Estimated distance in km
     */
    static getEstimatedDistanceKm(originDistrict = "Nashik", destinationMarket = "Vashi APMC (Navi Mumbai)") {
        return TransportEstimationService.getEstimatedDistanceKm(originDistrict, destinationMarket);
    }

    /**
     * Calculates transparent transport cost breakdown for a lot
     * @param {Object} params
     * @param {number} params.distanceKm Distance in km
     * @param {number} [params.quantityKg=500] Lot weight in kg
     * @param {string} [params.vehicleType='auto'] Vehicle type selection
     * @param {boolean} [params.isPooled=false] Whether using shared/pooled freight
     * @returns {Object} Transport cost calculation breakdown
     */
    static calculateTransportCost({ distanceKm = 30, quantityKg = 500, vehicleType = 'auto', isPooled = false }) {
        const baseEstimate = TransportEstimationService.calculateTransportCost({
            distanceKm,
            quantityKg,
            vehicleType
        });

        if (isPooled) {
            // Shared 10-Ton pooling delivers ~55-70% savings on freight per kg
            const pooledCostPerKg = Number(Math.max(0.40, baseEstimate.costPerKg * 0.40).toFixed(2));
            const pooledTotal = Number((pooledCostPerKg * quantityKg).toFixed(2));
            const savings = Number((baseEstimate.totalLotTransportCost - pooledTotal).toFixed(2));
            const savingsPct = Number((((baseEstimate.costPerKg - pooledCostPerKg) / baseEstimate.costPerKg) * 100).toFixed(1));

            return {
                ...baseEstimate,
                isPooled: true,
                individualCostPerKg: baseEstimate.costPerKg,
                individualTotalCost: baseEstimate.totalLotTransportCost,
                costPerKg: pooledCostPerKg,
                totalLotTransportCost: pooledTotal,
                freightSavingsAmount: savings,
                savingsPercentage: savingsPct,
                calculationBasis: `Shared 10-Ton Pooled Freight (${savingsPct}% discount vs single trip)`
            };
        }

        return {
            ...baseEstimate,
            isPooled: false,
            freightSavingsAmount: 0,
            savingsPercentage: 0
        };
    }

    /**
     * Alias for calculateTransportCost
     */
    static calculateFreight(params) {
        return this.calculateTransportCost(params);
    }

    /**
     * Explains the calculation basis in transparent terms
     * @param {Object} estimate
     * @returns {string} Human-readable explanation
     */
    static getExplanation(estimate) {
        if (estimate.isPooled) {
            return `Pooled 10-Ton freight rate @ ₹${estimate.costPerKg}/kg over ${estimate.distanceKm} km (Saving ₹${estimate.freightSavingsAmount} vs solo transport).`;
        }
        return `Standard road freight (${estimate.vehicleType}) for ${estimate.quantityKg} kg over ${estimate.distanceKm} km @ approx ₹${estimate.costPerKg}/kg.`;
    }
}
