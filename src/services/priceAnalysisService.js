/**
 * AgriLink - Price Analysis Service (Stage 2 Foundation)
 * Unified architectural entry point for all price calculations, net realization analysis,
 * regional price spread comparison, and transparent formula explanations.
 */

import { PriceCalculationService } from './priceCalculationService.js';
import { MarketTrendService } from './marketTrendService.js';
import { PricePredictionService } from './pricePredictionService.js';
import { MarketComparisonService } from './marketComparisonService.js';
import { BuyerService } from './buyerService.js';
import { TransportCostService } from './transportCostService.js';
import { OpportunityComparisonService } from './opportunityComparisonService.js';

export class PriceAnalysisService {
    /**
     * Calculates transparent itemized net realization for an agricultural lot
     * @param {Object} params
     * @param {number} params.baseMarketPrice Prevailing APMC benchmark in ₹/kg
     * @param {string} [params.qualityGrade="Grade A"] 'Grade A' | 'Grade B' | 'Grade C'
     * @param {number} [params.freshnessScore=90] Freshness percentage (0 - 100)
     * @param {number} [params.quantityKg=500] Lot weight in kg
     * @param {number} [params.distanceKm=30] Distance in km
     * @param {number} [params.arrivalVolumeTons=150] Market arrivals in tons
     * @param {string} [params.marketName="APMC Mandi"]
     * @returns {Object} Comprehensive itemized price calculation
     */
    static calculateNetRealization(params) {
        return PriceCalculationService.calculateNetRealization(params);
    }

    /**
     * Analyzes price spread across multiple normalized mandi records
     * @param {Array<Object>} mandiRecords
     * @returns {Object} Spread analysis
     */
    static analyzePriceSpread(mandiRecords = []) {
        if (!Array.isArray(mandiRecords) || mandiRecords.length === 0) {
            return {
                minModal: 0,
                maxModal: 0,
                avgModal: 0,
                spreadAmount: 0,
                spreadPercentage: 0,
                highestMarket: 'N/A',
                lowestMarket: 'N/A',
                mandisAnalyzed: 0
            };
        }

        const modalPrices = mandiRecords.map(m => m.modalPricePerKg || 0);
        const minModal = Math.min(...modalPrices);
        const maxModal = Math.max(...modalPrices);
        const sum = modalPrices.reduce((acc, p) => acc + p, 0);
        const avgModal = Number((sum / modalPrices.length).toFixed(2));
        const spread = Number((maxModal - minModal).toFixed(2));
        const spreadPct = minModal > 0 ? Number(((spread / minModal) * 100).toFixed(1)) : 0;

        const highestMarket = mandiRecords.find(m => (m.modalPricePerKg || 0) === maxModal)?.market || 'N/A';
        const lowestMarket = mandiRecords.find(m => (m.modalPricePerKg || 0) === minModal)?.market || 'N/A';

        return {
            minModal,
            maxModal,
            avgModal,
            spreadAmount: spread,
            spreadPercentage: spreadPct,
            highestMarket,
            lowestMarket,
            mandisAnalyzed: mandiRecords.length
        };
    }

    /**
     * Fetches and analyzes price trend velocity (7-day and 30-day)
     * @param {string} commodity
     * @param {string} marketName
     * @param {number} currentModalPrice
     * @returns {Promise<Object>}
     */
    static async getPriceTrends(commodity, marketName, currentModalPrice) {
        return MarketTrendService.getCropPriceTrends(commodity, marketName, currentModalPrice);
    }

    /**
     * Forecasts explainable price opportunity range with uncertainty intervals
     * @param {Object} params
     * @returns {Promise<Object>}
     */
    static async forecastPriceOpportunity(params) {
        return PricePredictionService.forecastPriceRange(params);
    }

    /**
     * Compares all regional mandis and ranks by net realization
     * @param {Object} params
     * @returns {Promise<Object>}
     */
    static async compareMarketsForLot(params) {
        return MarketComparisonService.compareMarketsForLot(params);
    }

    /**
     * Returns a clear step-by-step mathematical explanation of how Net Realization is computed
     * @param {Object} calc Output from calculateNetRealization
     * @returns {Object} Human-readable breakdown
     */
    static explainCalculation(calc) {
        const base = calc.baseMarketPrice.value;
        const qual = calc.qualityAdjustment.value;
        const dem = calc.demandAdjustment.value;
        const trans = calc.transportCost.value;
        const stor = calc.storageCost.value;
        const net = calc.estimatedNetRealization.value;

        return {
            formula: "Estimated Net Realization = Base Market Price + Quality Adjustment + Buyer Demand Index - Transport Cost - Storage/Handling Fee",
            steps: [
                { step: 1, name: "Base Benchmark", formula: `₹${base.toFixed(2)}/kg`, note: calc.baseMarketPrice.source },
                { step: 2, name: "Quality Adjustment", formula: `${qual >= 0 ? '+' : ''}₹${qual.toFixed(2)}/kg`, note: calc.qualityAdjustment.source },
                { step: 3, name: "Buyer Demand Index", formula: `${dem >= 0 ? '+' : ''}₹${dem.toFixed(2)}/kg`, note: calc.demandAdjustment.source },
                { step: 4, name: "Transport Deduction", formula: `-₹${trans.toFixed(2)}/kg`, note: calc.transportCost.source },
                { step: 5, name: "Storage & Mandi Cess", formula: `-₹${stor.toFixed(2)}/kg`, note: calc.storageCost.source },
                { step: 6, name: "Final Estimated Net Realization", formula: `₹${net.toFixed(2)}/kg`, note: "Net Farm-Gate Payout per kg" }
            ],
            summaryText: `Base Rate ₹${base.toFixed(2)} ${qual >= 0 ? '+' : ''}${qual.toFixed(2)} (Quality) ${dem >= 0 ? '+' : ''}${dem.toFixed(2)} (Demand) - ${trans.toFixed(2)} (Transport) - ${stor.toFixed(2)} (Handling) = ₹${net.toFixed(2)}/kg Net.`
        };
    }

    /**
     * Comprehensive contextual insights for farmers before publishing / creating a lot
     * @param {Object} params
     * @param {string} [params.cropType="Tomato"]
     * @param {number} [params.quantityKg=500]
     * @param {string} [params.farmerDistrict="Nashik"]
     * @returns {Promise<Object>} Before You Publish Insights Payload
     */
    static async getListingMarketInsights({ cropType = "Tomato", quantityKg = 500, farmerDistrict = "Nashik" } = {}) {
        const comparison = await MarketComparisonService.compareMarketsForLot({
            cropType,
            farmerDistrict,
            qualityGrade: 'Grade A',
            quantityKg,
            freshnessScore: 92
        });

        const activeDemands = await BuyerService.getActiveDemands(cropType);
        const buyerCount = activeDemands.length;
        let topOfferedPrice = 0;
        let topBuyerName = 'None';
        let farmGatePickupAvailable = false;

        if (buyerCount > 0) {
            topOfferedPrice = Math.max(...activeDemands.map(d => d.offeredPricePerKg || 0));
            const topDemand = activeDemands.find(d => (d.offeredPricePerKg || 0) === topOfferedPrice);
            topBuyerName = topDemand ? topDemand.buyerName : 'Verified Buyer';
            farmGatePickupAvailable = activeDemands.some(d => d.pickupProvided);
        }

        const topMandi = comparison.recommendedMandi || (comparison.rankedMandis && comparison.rankedMandis[0]) || {
            modalPricePerKg: 34.0,
            marketName: 'Lasalgaon APMC',
            minPricePerKg: 28.0,
            maxPricePerKg: 38.0,
            distanceKm: 28
        };

        const soloTransport = TransportCostService.calculateFreight({
            distanceKm: topMandi.distanceKm || 30,
            quantityKg,
            isPooled: false
        });

        const pooledTransport = TransportCostService.calculateFreight({
            distanceKm: topMandi.distanceKm || 30,
            quantityKg,
            isPooled: true
        });

        const baseModal = topMandi.modalPricePerKg || 34.0;
        const transportDeduction = soloTransport.costPerKg;

        const gradeARate = Number(Math.max(0, (baseModal * 1.10) - transportDeduction - 0.40).toFixed(2));
        const gradeBRate = Number(Math.max(0, (baseModal * 1.00) - transportDeduction - 0.40).toFixed(2));
        const gradeCRate = Number(Math.max(0, (baseModal * 0.85) - transportDeduction - 0.40).toFixed(2));

        return {
            cropType,
            quantityKg,
            farmerDistrict,
            topMandi: {
                name: topMandi.marketName,
                modalPrice: baseModal,
                minPrice: topMandi.minPricePerKg || baseModal * 0.85,
                maxPrice: topMandi.maxPricePerKg || baseModal * 1.15,
                distanceKm: topMandi.distanceKm || 30
            },
            gradeNetEstimates: {
                gradeA: gradeARate,
                gradeB: gradeBRate,
                gradeC: gradeCRate
            },
            activeBuyerDemand: {
                buyerCount,
                topOfferedPrice,
                topBuyerName,
                farmGatePickupAvailable
            },
            logisticsContext: {
                soloTransportCostPerKg: soloTransport.costPerKg,
                pooledTransportCostPerKg: pooledTransport.costPerKg,
                logisticsSavingsPercent: soloTransport.costPerKg > 0 ? Number((((soloTransport.costPerKg - pooledTransport.costPerKg) / soloTransport.costPerKg) * 100).toFixed(0)) : 0
            },
            dataFreshness: {
                status: comparison?.summaryMetrics?.primaryDataStatus || 'demo',
                statusLabel: comparison?.summaryMetrics?.primaryDataStatusLabel || 'Demo / Benchmark Data',
                source: topMandi.source || 'APMC Daily Yard Benchmark'
            }
        };
    }

    /**
     * Compares all 4 selling pathways side-by-side for an agricultural lot (Phase 9)
     * @param {Object} params
     * @returns {Promise<Object>} Side-by-side 4-way comparison matrix
     */
    static async compareSellingPathways(params) {
        return OpportunityComparisonService.compareSellingPathways(params);
    }
}
