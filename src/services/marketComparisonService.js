/**
 * KisanTrust - Market Comparison & Intelligent Routing Service (Stage 3)
 * Compares multiple APMC Mandis across Maharashtra & neighboring agricultural centers.
 * Displays transparent Min, Modal, Max prices, road distance, data source, and freshness.
 * Ranks markets based on ESTIMATED NET REALIZATION (accounting for road distance and transport).
 */

import { MarketDataService, DATA_STATUS } from './marketDataService.js';
import { PriceCalculationService } from './priceCalculationService.js';
import { TransportEstimationService } from './transportEstimationService.js';

export class MarketComparisonService {
    /**
     * Compares all candidate markets for an agricultural commodity with optional filtering
     * @param {Object} params
     * @param {string} [params.cropType="Tomato"] e.g. "Tomato", "Onion"
     * @param {string} [params.variety="All"]
     * @param {string} [params.state="Maharashtra"]
     * @param {string} [params.farmerDistrict="Nashik"]
     * @param {string} [params.qualityGrade="Grade A"]
     * @param {number} [params.freshnessScore=90]
     * @param {number} [params.quantityKg=1000]
     * @param {Object} [params.filters={}] Additional filters (district, market, etc.)
     * @returns {Promise<Object>} Comparison result with ranked mandis and summary statistics
     */
    static async compareMarketsForLot({
        cropType = "Tomato",
        variety = "All",
        state = "Maharashtra",
        farmerDistrict = "Nashik",
        qualityGrade = "Grade A",
        freshnessScore = 90,
        quantityKg = 1000,
        filters = {}
    }) {
        // 1. Fetch normalized mandi prices for the crop
        const rawMandiRecords = await MarketDataService.fetchMandiPrices(cropType, state, farmerDistrict);

        // 2. Apply optional filters
        const activeFilters = {
            ...filters,
            variety: variety !== 'All' ? variety : filters.variety
        };
        const mandiRecords = MarketDataService.filterMandiRecords(rawMandiRecords, activeFilters);

        // 3. Evaluate net realization and comparison metrics for every mandi
        const comparisons = mandiRecords.map(mandi => {
            const distanceKm = TransportEstimationService.getEstimatedDistanceKm(farmerDistrict, mandi.market);
            
            const calculation = PriceCalculationService.calculateNetRealization({
                baseMarketPrice: mandi.modalPricePerKg,
                qualityGrade,
                freshnessScore,
                quantityKg,
                distanceKm,
                arrivalVolumeTons: mandi.arrivalVolumeTons,
                marketName: mandi.market
            });

            return {
                marketName: mandi.market,
                commodity: mandi.commodity,
                variety: mandi.variety,
                district: mandi.district,
                state: mandi.state,
                arrivalDate: mandi.date,
                distanceKm: distanceKm,
                minPricePerKg: mandi.minPricePerKg,
                modalPricePerKg: mandi.modalPricePerKg,
                maxPricePerKg: mandi.maxPricePerKg,
                minPricePerQtl: Number((mandi.minPricePerKg * 100).toFixed(0)),
                modalPricePerQtl: Number((mandi.modalPricePerKg * 100).toFixed(0)),
                maxPricePerQtl: Number((mandi.maxPricePerKg * 100).toFixed(0)),
                arrivalVolumeTons: mandi.arrivalVolumeTons,
                transportCostPerKg: calculation.transportCost.value,
                storageCostPerKg: calculation.storageCost.value,
                qualityAdjustmentPerKg: calculation.qualityAdjustment.value,
                demandAdjustmentPerKg: calculation.demandAdjustment.value,
                estimatedNetRealizationPerKg: calculation.estimatedNetRealization.value,
                totalLotNetWorth: calculation.totalLotEstimatedNetWorth.value,
                dataStatus: mandi.dataStatus,
                dataStatusLabel: mandi.dataStatusLabel,
                source: mandi.source,
                freshness: mandi.freshness,
                calculationDetails: calculation
            };
        });

        // 4. Sort mandis strictly by Estimated Net Realization (Highest Net First!)
        const rankedMandis = [...comparisons].sort((a, b) => 
            b.estimatedNetRealizationPerKg - a.estimatedNetRealizationPerKg
        );

        const recommendedMandi = rankedMandis[0] || null;
        const worstMandi = rankedMandis[rankedMandis.length - 1] || null;

        // Calculate spread and advantage
        let netAdvantageTotal = 0;
        let explanation = "";

        if (recommendedMandi && worstMandi && recommendedMandi !== worstMandi) {
            netAdvantageTotal = Number((recommendedMandi.totalLotNetWorth - worstMandi.totalLotNetWorth).toFixed(2));
            explanation = `By choosing ${recommendedMandi.marketName} (Net: ₹${recommendedMandi.estimatedNetRealizationPerKg}/kg) over ${worstMandi.marketName} (Net: ₹${worstMandi.estimatedNetRealizationPerKg}/kg), you gain an estimated ₹${netAdvantageTotal.toLocaleString('en-IN')} extra for your ${quantityKg} kg lot after transport.`;
        } else if (recommendedMandi) {
            explanation = `${recommendedMandi.marketName} yields the highest estimated net realization at ₹${recommendedMandi.estimatedNetRealizationPerKg}/kg.`;
        }

        // Summary metrics across mandis
        const modalPrices = rankedMandis.map(m => m.modalPricePerKg);
        const minModal = modalPrices.length > 0 ? Math.min(...modalPrices) : 0;
        const maxModal = modalPrices.length > 0 ? Math.max(...modalPrices) : 0;
        const avgModal = modalPrices.length > 0 ? Number((modalPrices.reduce((a, b) => a + b, 0) / modalPrices.length).toFixed(2)) : 0;

        return {
            cropType,
            variety,
            quantityKg,
            farmerDistrict,
            recommendedMandi,
            rankedMandis,
            rankings: rankedMandis.map((m, idx) => ({
                ...m,
                mandiName: m.marketName,
                recommendationBadge: idx === 0 ? 'सर्वोत्तम निव्वळ प्राप्ती (Top Net)' : (idx === 1 ? 'पर्यायी बाजार (Alternative)' : 'स्थानिक पर्याय (Standard)')
            })),
            recommended: recommendedMandi ? {
                ...recommendedMandi,
                mandiName: recommendedMandi.marketName
            } : null,
            totalMandisCompared: rankedMandis.length,
            netAdvantageTotal,
            explanation,
            summaryMetrics: {
                minModal,
                maxModal,
                avgModal,
                spreadAmount: Number((maxModal - minModal).toFixed(2)),
                primaryDataStatus: recommendedMandi ? recommendedMandi.dataStatus : DATA_STATUS.DEMO,
                primaryDataStatusLabel: recommendedMandi ? recommendedMandi.dataStatusLabel : 'Demo / Offline Data'
            },
            comparisonDate: new Date().toISOString()
        };
    }

    /**
     * Backward-compatible alias for existing UI consumers
     */
    static async getComparisonForCrop(cropType = "Tomato", quantityKg = 1000, freshnessScore = 92, qualityGrade = "Grade A", farmerDistrict = "Nashik") {
        return this.compareMarketsForLot({
            cropType,
            quantityKg,
            freshnessScore,
            qualityGrade,
            farmerDistrict
        });
    }
}
