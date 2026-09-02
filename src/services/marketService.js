/**
 * KisanTrust - Market Intelligence Service
 * Provides mandi benchmarks, modal price trends, and best market comparisons.
 */

import { firebaseService } from './firebaseService.js';

export class MarketService {
    /**
     * Get market snapshot for farmer dashboard
     * @param {string} cropType
     * @returns {Promise<Object>}
     */
    static async getMarketSnapshot(cropType = 'Tomato') {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('mandiBenchmarks')).get();
        const mandis = snap.docs.map(d => d.data());
        
        const filtered = mandis.filter(m => m.cropType.toLowerCase() === cropType.toLowerCase());
        const list = filtered.length > 0 ? filtered : mandis;

        // Sort by highest modal price
        const sorted = [...list].sort((a, b) => b.modalPricePerKg - a.modalPricePerKg);
        const bestMarket = sorted[0] || {
            mandiName: "Vashi APMC (Navi Mumbai)",
            district: "Mumbai",
            modalPricePerKg: 38.0,
            estimatedLogisticsCostPerKg: 2.6,
            priceTrend: "RISING"
        };

        const estimatedNet = Number((bestMarket.modalPricePerKg - bestMarket.estimatedLogisticsCostPerKg).toFixed(2));

        return {
            bestCurrentMarket: bestMarket.mandiName,
            bestMarketDistrict: bestMarket.district,
            highestListedPrice: bestMarket.modalPricePerKg,
            estimatedNetValue: estimatedNet,
            priceTrend: bestMarket.priceTrend,
            totalMandisMonitored: list.length,
            allBenchmarks: list,
            isDemoData: true // Flag clearly indicating structured demo data for Stage 1
        };
    }

    /**
     * Get active selling opportunities
     * @param {string} cropType
     * @returns {Promise<Object>}
     */
    static async getSellingOpportunities(cropType = 'Tomato') {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('buyerDemands')).get();
        const demands = snap.docs.map(d => d.data());
        
        const matchingDemands = demands.filter(d => 
            d.requiredCrop.toLowerCase() === cropType.toLowerCase() && d.status === 'ACTIVE'
        );

        return {
            demandLevel: matchingDemands.length >= 2 ? "High (तीव्र मागणी)" : "Moderate (मध्यम)",
            potentialBuyersCount: matchingDemands.length > 0 ? matchingDemands.length : 3,
            recommendedAction: "Direct selling through verified FPO or bulk processor offers the highest net margin after transport.",
            demands: matchingDemands.length > 0 ? matchingDemands : demands,
            isDemoData: true
        };
    }
}
