/**
 * AgriLink - Stage 4 Automated Verification Suite
 * Decision Recommendation Engine, Price Prediction, Gemini Advisory, and Smart Village Pooling
 */

import { CropKnowledgeService } from '../src/data/cropKnowledge.js';
import { PricePredictionService } from '../src/services/pricePredictionService.js';
import { RecommendationService } from '../src/services/recommendationService.js';
import { GeminiAdvisoryService } from '../src/services/geminiAdvisoryService.js';
import { PoolingService } from '../src/services/poolingService.js';
import { DigitalAgriculturalLot } from '../src/models/Lot.js';

console.log('🌱 Starting AgriLink Stage 4 Automated Verification Suite...\n');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ PASS: ${message}`);
        passedTests++;
    } else {
        console.error(`  ❌ FAIL: ${message}`);
        failedTests++;
    }
}

// ==========================================
// 1. Structured Crop Knowledge Tests
// ==========================================
console.log('1. Testing CropKnowledgeService & Spoilage Evaluation:');
const tomatoInfo = CropKnowledgeService.getCropInfo('Tomato');
assert(tomatoInfo !== null, 'Retrieved structured knowledge for Tomato');
assert(tomatoInfo.typicalShelfLifeDays === 8, 'Tomato typical shelf-life is 8 days');
assert(tomatoInfo.sourceMetadata.authority.includes('ICAR'), 'Source metadata cites ICAR/NHB authority');

const freshSpoilage = CropKnowledgeService.evaluateSpoilageRisk('Tomato', 95, new Date().toISOString().split('T')[0]);
assert(freshSpoilage.riskLevel === 'LOW', 'Freshly harvested lot has LOW spoilage risk');
assert(freshSpoilage.safeHoldingDaysRemaining >= 6, 'Safe holding window is 6+ days');

const oldDate = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
const criticalSpoilage = CropKnowledgeService.evaluateSpoilageRisk('Tomato', 60, oldDate);
assert(criticalSpoilage.riskLevel === 'CRITICAL', 'Aged lot correctly flagged with CRITICAL spoilage risk');

// ==========================================
// 2. Explainable Price Opportunity Forecasting
// ==========================================
console.log('\n2. Testing PricePredictionService (Forecast & Uncertainty Intervals):');
const forecast = await PricePredictionService.forecastPriceRange({
    cropType: 'Tomato',
    marketName: 'Pune APMC',
    currentPrice: 34.0,
    horizonDays: 5
});

assert(forecast.predictionStatus === 'Estimated', 'Prediction status clearly labeled as Estimated');
assert(typeof forecast.expectedOpportunityRange.min === 'number', 'Forecast includes minimum bound');
assert(typeof forecast.expectedOpportunityRange.max === 'number', 'Forecast includes maximum bound');
assert(forecast.expectedOpportunityRange.max >= forecast.expectedOpportunityRange.min, 'Max bound >= Min bound');
assert(forecast.uncertaintyBandPerKg > 0, 'Uncertainty band is explicitly computed');
assert(forecast.historicalDataLimitations.length >= 2, 'Historical data limitations are clearly documented');

// ==========================================
// 3. Deterministic Decision Recommendation Engine
// ==========================================
console.log('\n3. Testing RecommendationService (Deterministic Actions & Opportunity Score):');
const freshLot = new DigitalAgriculturalLot({
    cropType: 'Tomato',
    overallQualityGrade: 'Grade A',
    quantity: 1000,
    freshnessScore: 94
});

const rec = await RecommendationService.generateRecommendation({
    lot: freshLot,
    farmerDistrict: 'Nashik'
});

assert(['SELL_TO_VERIFIED_BUYER', 'SELL_NOW', 'WAIT', 'SELL_TO_ANOTHER_MARKET'].includes(rec.recommendedAction), 'Generates valid deterministic recommendation action');
assert(rec.opportunityScore >= 50 && rec.opportunityScore <= 100, `Opportunity score is within valid range (${rec.opportunityScore}/100)`);
assert(rec.factorBreakdown.marketOpportunity.weightPercent === 25, 'Market opportunity weighted at 25%');
assert(rec.factorBreakdown.buyerDemand.weightPercent === 20, 'Buyer demand weighted at 20%');
assert(rec.factorBreakdown.netRealization.weightPercent === 25, 'Net realization weighted at 25%');
assert(rec.factorBreakdown.qualityAdvantage.weightPercent === 10, 'Quality advantage weighted at 10%');
assert(rec.factorBreakdown.logisticsEfficiency.weightPercent === 10, 'Logistics efficiency weighted at 10%');
assert(rec.factorBreakdown.shelfLifeSafety.weightPercent === 10, 'Shelf-life safety weighted at 10%');

// Test Critical Spoilage Gate -> Forces SELL_NOW
const dyingLot = new DigitalAgriculturalLot({
    cropType: 'Tomato',
    overallQualityGrade: 'Grade C',
    quantity: 1000,
    freshnessScore: 50,
    harvestDate: oldDate
});
const recSpoiled = await RecommendationService.generateRecommendation({
    lot: dyingLot,
    farmerDistrict: 'Nashik'
});
assert(recSpoiled.recommendedAction === 'SELL_NOW', 'Critical spoilage risk strictly triggers SELL_NOW');
assert(recSpoiled.actionTitle.includes('तात्काळ') || recSpoiled.actionTitle.includes('तातडीने') || recSpoiled.actionTitle.includes('Sell Now'), 'Action title emphasizes urgent sell');

// ==========================================
// 4. Gemini Multilingual Advisory Layer
// ==========================================
console.log('\n4. Testing GeminiAdvisoryService (Grounded Multilingual Advisory):');
const marathiAdvice = await GeminiAdvisoryService.generateFarmerExplanation({
    recommendation: rec,
    lot: freshLot,
    language: 'Marathi (मराठी)'
});
assert(marathiAdvice.adviceText.length > 20, 'Generated Marathi explanation');
assert(marathiAdvice.actionKeyPoints.length >= 2, 'Includes actionable key points');

const hindiAdvice = await GeminiAdvisoryService.generateFarmerExplanation({
    recommendation: rec,
    lot: freshLot,
    language: 'Hindi (हिंदी)'
});
assert(hindiAdvice.adviceText.length > 20, 'Generated Hindi explanation');

const englishAdvice = await GeminiAdvisoryService.generateFarmerExplanation({
    recommendation: rec,
    lot: freshLot,
    language: 'English'
});
assert(englishAdvice.adviceText.length > 20, 'Generated English explanation');

// ==========================================
// 5. Smart Village Pooling & Freight Savings
// ==========================================
console.log('\n5. Testing PoolingService (Aggregation & Logistics Savings):');
await PoolingService.initializePoolingData();

const clusters = await PoolingService.getActiveClusters('Tomato');
assert(Array.isArray(clusters) && clusters.length >= 1, 'Active village pooling clusters retrieved');

const savings = PoolingService.calculateLogisticsSavings({ distanceKm: 185, lotQuantityKg: 1000 });
assert(savings.savingsPercent >= 50, `Pooled 10-Ton freight delivers ${savings.savingsPercent}% logistics cost savings`);
assert(savings.totalSavingsRupees > 0, `Farmer saves ₹${savings.totalSavingsRupees} on freight`);

// Test joining pool
const initialCount = clusters[0].participatingFarmersCount;
const initialKg = clusters[0].currentPooledKg;
const joinedCluster = await PoolingService.joinPoolingCluster(clusters[0].clusterId, freshLot);
assert(joinedCluster.currentPooledKg === initialKg + 1000, 'Cluster pooled weight increased by lot quantity');
assert(joinedCluster.participatingFarmersCount === initialCount + 1, 'Participating farmer count incremented');
assert(joinedCluster.participatingLots.some(l => l.lotId === freshLot.lotId), 'Lot recorded in cluster ledger');

console.log(`\n==========================================`);
console.log(`Suite Completed: ${passedTests} passed, ${failedTests} failed.`);
if (failedTests === 0) {
    console.log(`🎉 ALL STAGE 4 VERIFICATION TESTS PASSED SUCCESSFULLY!`);
} else {
    process.exit(1);
}
