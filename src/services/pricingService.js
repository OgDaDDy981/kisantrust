/**
 * AgriLink - Transparent Price Architecture & Estimation Service
 * Implements deterministic calculation formula without arbitrary or guaranteed claims:
 * 
 * Estimated Net Realization = Base Market Price
 *                            + Quality Premium
 *                            + Buyer Demand Premium
 *                            - Transport Cost
 *                            - Storage Cost
 */

export class PricingService {
    /**
     * Calculates transparent estimated net realization
     * @param {Object} params
     * @param {string} params.cropType
     * @param {string} params.qualityGrade 'Grade A' | 'Grade B' | 'Grade C'
     * @param {number} params.quantityKg Lot weight in kg
     * @param {number} [params.distanceKm=35] Distance to primary market hub in km
     * @returns {Object} Transparent price breakdown
     */
    static calculatePriceEstimate({ cropType = 'Tomato', qualityGrade = 'Grade A', quantityKg = 500, distanceKm = 35 }) {
        // Base market benchmark by crop type (Standard APMC modal baseline)
        let baseMarketPrice = 34.0;
        const cropLower = cropType.toLowerCase();
        
        if (cropLower.includes('onion')) {
            baseMarketPrice = 28.0;
        } else if (cropLower.includes('potato')) {
            baseMarketPrice = 22.0;
        } else if (cropLower.includes('tomato')) {
            baseMarketPrice = 34.0;
        } else if (cropLower.includes('carrot')) {
            baseMarketPrice = 30.0;
        } else if (cropLower.includes('cabbage')) {
            baseMarketPrice = 18.0;
        }

        // Quality Premium based on Grade
        let qualityPremium = 0.0;
        if (qualityGrade === 'Grade A') {
            qualityPremium = Number((baseMarketPrice * 0.10).toFixed(2)); // +10% for Grade A export/retail standard
        } else if (qualityGrade === 'Grade B') {
            qualityPremium = 0.0; // Standard modal rate
        } else {
            qualityPremium = -Number((baseMarketPrice * 0.15).toFixed(2)); // -15% discount for Grade C / sorting defects
        }

        // Buyer Demand Premium (active bulk purchase demand in hub)
        const demandPremium = Number((baseMarketPrice * 0.03).toFixed(2)); // +3% local demand index

        // Transparent Logistics / Transport Cost (approx ₹0.06 per km per kg)
        const transportCost = Number((Math.min(distanceKm, 200) * 0.06).toFixed(2));

        // Storage / Handling Cost (standard ₹0.30 - ₹0.50/kg)
        const storageCost = 0.40;

        // Estimated Net Realization (Farmer Net Payout per kg)
        const estimatedNetRealization = Number(
            Math.max(1, baseMarketPrice + qualityPremium + demandPremium - transportCost - storageCost).toFixed(2)
        );

        const totalLotValue = Number((estimatedNetRealization * quantityKg).toFixed(2));

        return {
            cropType,
            qualityGrade,
            quantityKg,
            baseMarketPrice,
            qualityPremium,
            demandPremium,
            transportCost,
            storageCost,
            estimatedNetRealization,
            totalLotValue,
            currency: '₹',
            formulaExplanation: `Estimated Net Realization = Base Market Price (₹${baseMarketPrice}) + Quality Premium (+₹${qualityPremium}) + Demand Index (+₹${demandPremium}) - Transport Cost (-₹${transportCost}) - Storage (-₹${storageCost})`
        };
    }
}
