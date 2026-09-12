/**
 * AgriLink - Intelligent Selling Decision Recommendation Engine (Stage 4)
 * Deterministically evaluates whether the farmer should:
 * - SELL NOW (आत्ताच विका)
 * - WAIT (काही दिवस थांबा)
 * - SELL TO ANOTHER MARKET (दुसऱ्या मंडईत विका)
 * - SELL TO A VERIFIED BUYER (थेट खरेदीदाराला विका)
 * 
 * Computes a transparent 6-factor Opportunity Score (0 - 100%).
 */

import { CropKnowledgeService } from '../data/cropKnowledge.js';
import { PricePredictionService } from './pricePredictionService.js';
import { MarketComparisonService } from './marketComparisonService.js';
import { BuyerService } from './buyerService.js';

export class RecommendationService {
    /**
     * Evaluates all agricultural, market, buyer, and logistics factors to produce a deterministic selling recommendation
     * @param {Object} params
     * @param {Object} params.lot DigitalAgriculturalLot
     * @param {string} [params.farmerDistrict="Nashik"]
     * @returns {Promise<Object>} Explainable Decision Recommendation Record
     */
    static async generateRecommendation({ lot, farmerDistrict = "Nashik" }) {
        const crop = lot.cropType || "Tomato";
        const grade = lot.overallQualityGrade || "Grade A";
        const quantity = Number(lot.quantity) || 500;
        const freshness = Number(lot.freshnessScore) || 90;
        const harvestDate = lot.harvestDate || new Date().toISOString().split('T')[0];

        // 1. Evaluate Spoilage & Shelf-Life Risk
        const spoilage = CropKnowledgeService.evaluateSpoilageRisk(crop, freshness, harvestDate);

        // 2. Fetch Multi-Mandi Comparisons
        const comparison = await MarketComparisonService.compareMarketsForLot({
            cropType: crop,
            qualityGrade: grade,
            freshnessScore: freshness,
            quantityKg: quantity,
            farmerDistrict
        });

        const bestMandi = comparison.recommendedMandi || {
            marketName: "Lasalgaon APMC",
            modalPricePerKg: 34.0,
            rawModalPricePerKg: 34.0,
            estimatedNetRealizationPerKg: 32.5,
            transportCostPerKg: 1.1,
            distanceKm: 28
        };

        const currentMandiPrice = bestMandi.modalPricePerKg || bestMandi.rawModalPricePerKg || 34.0;

        // 3. Fetch Forecasted Price Trend
        const forecast = await PricePredictionService.forecastPriceRange({
            cropType: crop,
            marketName: bestMandi.marketName,
            currentPrice: currentMandiPrice,
            horizonDays: Math.min(5, Math.max(2, spoilage.safeHoldingDaysRemaining))
        });

        // 4. Fetch Matched Verified Buyer Opportunities
        const matchedBuyers = await BuyerService.matchBuyersForLot(lot, farmerDistrict);
        const topBuyer = (matchedBuyers && matchedBuyers.length > 0) ? matchedBuyers[0] : null;

        // 5. DETERMINISTIC DECISION LOGIC
        let recommendedAction = "SELL_NOW";
        let actionTitle = "आत्ताच विक्री करा (Sell Now)";
        let primaryReason = "सध्या बाजारात चांगला भाव उपलब्ध असून टिकवण क्षमतेनुसार त्वरित विक्री करणे फायदेशीर आहे.";
        const rationaleFactors = [];

        // Rule A: Spoilage / Shelf-Life Critical Gate
        if (spoilage.riskLevel === "CRITICAL" || spoilage.safeHoldingDaysRemaining <= 2) {
            recommendedAction = "SELL_NOW";
            actionTitle = "तातडीने विक्री करा (Urgent: Spoilage Risk)";
            primaryReason = `पिकाची सुरक्षित टिकवण क्षमता केवळ ${spoilage.safeHoldingDaysRemaining} दिवस शिल्लक आहे. नुकसान टाळण्यासाठी तात्काळ विक्री करा.`;
            rationaleFactors.push(`⚠️ उच्च नासाडी धोका (${spoilage.spoilageRiskPercent}% Spoilage Risk).`);
        }
        // Rule B: High-Value Verified Buyer Offer Outperforms Mandi
        else if (topBuyer && topBuyer.estimatedNetRealization > bestMandi.estimatedNetRealizationPerKg) {
            const extraGain = Number((topBuyer.estimatedNetRealization - bestMandi.estimatedNetRealizationPerKg).toFixed(2));
            recommendedAction = "SELL_TO_VERIFIED_BUYER";
            actionTitle = "थेट सत्यापित खरेदीदाराला विका (Sell to Verified Buyer)";
            primaryReason = `खरेदीदार ${topBuyer.buyerName} कडून मंडईपेक्षा ₹${extraGain}/kg जास्त निव्वळ प्राप्ती मिळत आहे.`;
            rationaleFactors.push(`🤝 थेट खरेदीदार ऑफर: ₹${topBuyer.offeredPricePerKg}/kg (निव्वळ प्राप्ती: ₹${topBuyer.estimatedNetRealization}/kg).`);
            if (topBuyer.pickupProvided) {
                rationaleFactors.push(`🚚 शेतावर थेट पिकअप (Farm-gate Pickup) - वाहतूक खर्च ₹०.`);
            }
        }
        // Rule C: Price Momentum is Rising AND Shelf Life is Safe
        else if (forecast.scenarioDirection === "RISING_MOMENTUM" && spoilage.safeHoldingDaysRemaining >= 6 && forecast.dailyVelocityPerKg >= 0.5) {
            const potentialGain = Number((forecast.centerExpectedPrice - (bestMandi.modalPricePerKg || bestMandi.rawModalPricePerKg || 34.0)).toFixed(2));
            recommendedAction = "WAIT";
            actionTitle = "३-४ दिवस थांबा (Hold / Wait)";
            primaryReason = `मंडईत वाढता भाव कल (+₹${forecast.dailyVelocityPerKg}/दिवस) असून पिकाची टिकवण क्षमता ${spoilage.safeHoldingDaysRemaining} दिवस सुरक्षित आहे.`;
            rationaleFactors.push(`📈 अंदाजे संभाव्य भाव कक्षा: ${forecast.expectedOpportunityRange.formatted}.`);
            rationaleFactors.push(`✨ पिकाचा ताजेपणा ${freshness}% असल्याने होल्डिंग करणे सुरक्षित आहे.`);
        }
        // Rule D: Pooling Opportunity (Lot <= 3000kg and Distant APMC / Buyer is profitable with pooling)
        else if (quantity <= 3000 && comparison.rankedMandis.length > 1 && bestMandi.distanceKm > 40 && comparison.summary?.maxModalPrice > (currentMandiPrice + 3.0)) {
            recommendedAction = "JOIN_TRANSPORT_POOL";
            actionTitle = "स्मार्ट वाहतूक पूलिंगमध्ये सहभागी व्हा (Join Transport Pool)";
            primaryReason = `१०-टन शेअर्ड ट्रकमधून ${bestMandi.marketName} ला माल पाठवल्यास वाहतूक खर्चात ६०% बचत होऊन जास्तीचा नफा मिळतो.`;
            rationaleFactors.push(`🚚 १०-टन पूलिंगने वाहतूक खर्चात ₹१.५०/kg बचत.`);
            rationaleFactors.push(`🏛️ दूरच्या बाजारातील उच्च दर: ₹${bestMandi.modalPricePerKg || bestMandi.rawModalPricePerKg}/kg.`);
        }
        // Rule E: Alternative Major APMC Outperforms Local Mandi Significantly
        else if (comparison.rankedMandis.length > 1 && bestMandi.distanceKm > 50 && (bestMandi.estimatedNetRealizationPerKg - comparison.rankedMandis[1].estimatedNetRealizationPerKg) >= 2.5) {
            recommendedAction = "SELL_TO_ANOTHER_MARKET";
            actionTitle = `दुसऱ्या प्रमुख मंडईत पाठवा (${bestMandi.marketName})`;
            primaryReason = `स्थानिक बाजारापेक्षा ${bestMandi.marketName} मध्ये वाहतूक वजा जाता ₹${(bestMandi.estimatedNetRealizationPerKg - comparison.rankedMandis[1].estimatedNetRealizationPerKg).toFixed(2)}/kg जास्त नफा मिळतो.`;
            rationaleFactors.push(`🏛️ सर्वोत्तम निव्वळ प्राप्ती: ₹${bestMandi.estimatedNetRealizationPerKg}/kg (${bestMandi.marketName}).`);
        }
        // Default Rule: Sell at Best Available Current Market
        else {
            recommendedAction = "SELL_NOW";
            actionTitle = "सध्याच्या सर्वोत्तम बाजारात विका (Sell Now)";
            primaryReason = `सध्याचा भाव स्थिर असून तात्काळ विक्री केल्यास वाहतूक आणि साठवणूक खर्चात बचत होते.`;
            rationaleFactors.push(`🏛️ सर्वोत्तम चालू मंडई: ${bestMandi.marketName} (₹${bestMandi.estimatedNetRealizationPerKg}/kg Net).`);
        }

        // 6. WEIGHTED OPPORTUNITY SCORE CALCULATION
        // Net Realization: 25%, Market Opportunity: 25%, Buyer Demand: 20%, Logistics Efficiency: 10%, Quality Advantage: 10%, Shelf-Life Safety: 10%
        const mandiModal = bestMandi.modalPricePerKg || bestMandi.rawModalPricePerKg || 34.0;
        const marketScore = Number(Math.min(100, Math.max(30, (mandiModal / 35.0) * 85)).toFixed(1));
        const buyerScore = topBuyer ? (topBuyer.matchScore || 85) : 50;
        const netRealizationRate = recommendedAction === "SELL_TO_VERIFIED_BUYER" 
            ? (topBuyer?.estimatedNetRealization || 36.5) 
            : (bestMandi.estimatedNetRealizationPerKg || 33.0);
        const netScore = Number(Math.min(100, Math.max(30, (netRealizationRate / 33.0) * 85)).toFixed(1));
        const qualityScore = grade === "Grade A" ? 95 : grade === "Grade B" ? 75 : 45;
        const logisticsScore = (topBuyer && topBuyer.pickupProvided) 
            ? 100 
            : (recommendedAction === "JOIN_TRANSPORT_POOL" ? 90 : Number(Math.max(40, 100 - (bestMandi.distanceKm * 0.3)).toFixed(1)));
        const shelfLifeScore = Number(Math.max(20, 100 - (spoilage.spoilageRiskPercent || 10)).toFixed(1));

        const opportunityScore = Number((
            (netScore * 0.25) +
            (marketScore * 0.25) +
            (buyerScore * 0.20) +
            (logisticsScore * 0.10) +
            (qualityScore * 0.10) +
            (shelfLifeScore * 0.10)
        ).toFixed(1));

        const totalExpectedNetPayout = Number((netRealizationRate * quantity).toFixed(2));

        const whyThisRecommendation = {
            coreJustification: primaryReason,
            keyAdvantages: rationaleFactors,
            riskSafeguards: [
                `पिकाची सुरक्षित टिकवण क्षमता: ${spoilage.safeHoldingDaysRemaining || 6} दिवस`,
                `नासाडी धोका पातळी: ${spoilage.riskLevel || 'LOW'}`
            ],
            factorWeights: {
                netRealization: 25,
                marketOpportunity: 25,
                buyerDemand: 20,
                logisticsEfficiency: 10,
                qualityAdvantage: 10,
                shelfLifeSafety: 10
            }
        };

        return {
            recommendedAction,
            actionTitle,
            primaryReason,
            opportunityScore,
            estimatedNetRealizationPerKg: netRealizationRate,
            totalExpectedNetPayout,
            rationaleFactors,
            whyThisRecommendation,
            factorBreakdown: {
                netRealization: { weightPercent: 25, score: netScore },
                marketOpportunity: { weightPercent: 25, score: marketScore },
                buyerDemand: { weightPercent: 20, score: buyerScore },
                logisticsEfficiency: { weightPercent: 10, score: logisticsScore },
                qualityAdvantage: { weightPercent: 10, score: qualityScore },
                shelfLifeSafety: { weightPercent: 10, score: shelfLifeScore }
            },
            holdingRecommendation: {
                safeHoldingDays: spoilage.safeHoldingDaysRemaining || 6,
                spoilageRiskLevel: spoilage.riskLevel || 'कमी',
                expectedPriceRange: {
                    min: Number((currentMandiPrice * 0.95).toFixed(1)),
                    max: Number((currentMandiPrice * 1.12).toFixed(1))
                }
            },
            bestMandi,
            topBuyer,
            forecast,
            spoilage,
            disclaimer: "Opportunity score and decision recommendations are deterministic estimations based on current APMC mandi rates, verified buyer purchase orders, and post-harvest shelf-life guidelines."
        };
    }

    /**
     * Alias for flexible parameter invocation
     */
    static async getSellingRecommendation(params) {
        if (params.lot) {
            return this.generateRecommendation({ lot: params.lot, farmerDistrict: params.farmerDistrict });
        }
        const lot = {
            cropType: params.cropType || 'Tomato',
            quantity: params.quantityKg || 500,
            overallQualityGrade: params.qualityGrade || 'Grade A',
            freshnessScore: params.freshnessScore || 90,
            harvestDate: params.harvestDate || new Date().toISOString().split('T')[0]
        };
        return this.generateRecommendation({ lot, farmerDistrict: params.farmerDistrict || 'Nashik' });
    }
}
