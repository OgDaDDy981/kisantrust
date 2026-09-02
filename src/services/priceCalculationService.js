/**
 * KisanTrust - Net Realization Calculation Engine (Stage 2)
 * Computes explainable, itemized net farm-gate realizations.
 * Transparent formula:
 *   Base Market Price
 *   + Quality Adjustment (Grade A/B/C)
 *   + Buyer Demand Index
 *   - Transport Cost
 *   - Storage / Handling Cost
 *   = Estimated Net Realization
 */

import { TransportEstimationService } from './transportEstimationService.js';

export class PriceCalculationService {
    /**
     * Calculates transparent net realization breakdown for a lot
     * @param {Object} params
     * @param {number} params.baseMarketPrice APMC modal benchmark in ₹/kg
     * @param {string} [params.qualityGrade="Grade A"] 'Grade A' | 'Grade B' | 'Grade C'
     * @param {number} [params.freshnessScore=90] 0-100 score from quality inspection
     * @param {number} [params.quantityKg=500] Lot weight in kg
     * @param {number} [params.distanceKm=30] Distance to market in km
     * @param {number} [params.arrivalVolumeTons=150] Daily market arrivals in tons
     * @param {string} [params.marketName="APMC Mandi"]
     * @returns {Object} Comprehensive itemized price calculation
     */
    static calculateNetRealization({
        baseMarketPrice = 34.0,
        qualityGrade = "Grade A",
        freshnessScore = 90,
        quantityKg = 500,
        distanceKm = 30,
        arrivalVolumeTons = 150,
        marketName = "APMC Mandi"
    }) {
        const base = Number(baseMarketPrice) || 30.0;
        const weight = Number(quantityKg) || 500;

        // 1. Quality Adjustment (Grade A/B/C)
        let qualityAdjustmentValue = 0.0;
        let qualityExplanation = "";
        let qualityBasis = "";

        if (qualityGrade === "Grade A") {
            qualityAdjustmentValue = Number((base * 0.10).toFixed(2)); // +10% premium
            qualityBasis = "Grade A Premium (+10% on modal base for export/retail uniformity)";
            qualityExplanation = `Visual and internal grading confirmed Grade A (${freshnessScore}% freshness), qualifying for premium wholesale pricing.`;
        } else if (qualityGrade === "Grade B") {
            qualityAdjustmentValue = 0.0;
            qualityBasis = "Standard Market Grade (0% adjustment)";
            qualityExplanation = `Good commercial grade matching standard APMC mandi modal specifications.`;
        } else {
            qualityAdjustmentValue = -Number((base * 0.15).toFixed(2)); // -15% penalty
            qualityBasis = "Grade C Sorting Allowance (-15% discount for minor surface blemishes)";
            qualityExplanation = `Lower uniformity and minor cosmetic defects require standard discount for rapid clearance.`;
        }

        // 2. Buyer Demand Index (Market Tightness)
        // High volume arrivals slightly depress demand index; moderate arrivals boost it
        let demandAdjustmentValue = 0.0;
        let demandExplanation = "";

        if (arrivalVolumeTons < 100) {
            demandAdjustmentValue = Number((base * 0.04).toFixed(2)); // +4% strong demand
            demandExplanation = "High buyer competition due to low daily arrivals in target mandi (+4%).";
        } else if (arrivalVolumeTons <= 250) {
            demandAdjustmentValue = Number((base * 0.02).toFixed(2)); // +2% steady demand
            demandExplanation = "Steady retail and processor demand matching regular daily supply (+2%).";
        } else {
            demandAdjustmentValue = 0.0;
            demandExplanation = "Heavy daily arrivals in mandi; standard spot market pricing applies.";
        }

        // 3. Transport Cost from TransportEstimationService
        const transportData = TransportEstimationService.calculateTransportCost({
            distanceKm,
            quantityKg: weight
        });
        const transportCostPerKg = transportData.costPerKg;

        // 4. Storage & Handling Cost
        const storageCostPerKg = 0.40; // ₹0.40/kg standard loading, weighing & APMC cess

        // 5. Estimated Net Realization
        const estimatedNetRealizationPerKg = Number(
            Math.max(1.0, base + qualityAdjustmentValue + demandAdjustmentValue - transportCostPerKg - storageCostPerKg).toFixed(2)
        );

        const totalLotEstimatedNetWorth = Number((estimatedNetRealizationPerKg * weight).toFixed(2));

        return {
            marketName,
            baseMarketPrice: {
                value: base,
                unit: "₹/kg",
                source: "Agmarknet APMC Modal Rate",
                explanation: `Prevailing benchmark price recorded at ${marketName}.`
            },
            qualityAdjustment: {
                value: qualityAdjustmentValue,
                unit: "₹/kg",
                source: qualityBasis,
                explanation: qualityExplanation
            },
            demandAdjustment: {
                value: demandAdjustmentValue,
                unit: "₹/kg",
                source: "Market Demand & Arrival Index",
                explanation: demandExplanation
            },
            transportCost: {
                value: transportCostPerKg,
                unit: "₹/kg",
                source: transportData.calculationBasis,
                explanation: `Estimated transport over ${distanceKm} km for ${weight} kg lot (${transportData.vehicleType}).`,
                totalLotCost: transportData.totalLotTransportCost
            },
            storageCost: {
                value: storageCostPerKg,
                unit: "₹/kg",
                source: "Standard APMC cess & handling",
                explanation: "Mandatory loading, unloading, weighing, and mandi yard handling fees."
            },
            estimatedNetRealization: {
                value: estimatedNetRealizationPerKg,
                unit: "₹/kg",
                source: "KisanTrust Deterministic Realization Engine",
                explanation: "Estimated net farm-gate payout per kg after all quality adjustments and logistics deductions."
            },
            totalLotEstimatedNetWorth: {
                value: totalLotEstimatedNetWorth,
                unit: "₹",
                quantityKg: weight,
                explanation: `Total estimated net realization for the entire ${weight} kg lot.`
            },
            disclaimer: "Estimated market opportunity. Actual market realization may vary based on spot auction bidding."
        };
    }
}
