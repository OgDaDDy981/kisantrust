/**
 * KisanTrust - Phase 7 Automated Verification Suite
 * Tests Opportunity Score & Recommendations Engine, 6-Factor Weights,
 * 4 Actionable Decision Routes, Transparent "Why This Recommendation" Justifications,
 * and Multilingual Grounded Explanations (Marathi, Hindi, English).
 */

import { RecommendationService } from './src/services/recommendationService.js';
import { GeminiAdvisoryService } from './src/services/geminiAdvisoryService.js';
import { DigitalAgriculturalLot } from './src/models/Lot.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ PASS: ${message}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${message}`);
        failed++;
    }
}

console.log('🌱 Starting KisanTrust Phase 7 Automated Verification Suite...\n');

console.log('1. Testing 6-Factor Opportunity Score Breakdown & Weights:');
const lot = new DigitalAgriculturalLot({
    lotId: 'LOT-PHASE7-01',
    cropType: 'Tomato',
    variety: 'Himsona',
    quantity: 500,
    overallQualityGrade: 'Grade A',
    freshnessScore: 94,
    harvestDate: '2026-08-31'
});

const rec = await RecommendationService.generateRecommendation({ lot, farmerDistrict: 'Nashik' });

assert(typeof rec.opportunityScore === 'number' && rec.opportunityScore >= 0 && rec.opportunityScore <= 100, `Opportunity score in valid range: ${rec.opportunityScore}/100`);

const fb = rec.factorBreakdown;
assert(fb.netRealization.weightPercent === 25, 'Net Realization weight is 25%');
assert(fb.marketOpportunity.weightPercent === 25, 'Market Opportunity weight is 25%');
assert(fb.buyerDemand.weightPercent === 20, 'Buyer Demand weight is 20%');
assert(fb.logisticsEfficiency.weightPercent === 10, 'Logistics Efficiency weight is 10%');
assert(fb.qualityAdvantage.weightPercent === 10, 'Quality Advantage weight is 10%');
assert(fb.shelfLifeSafety.weightPercent === 10, 'Shelf-Life Safety weight is 10%');

const totalWeight = fb.netRealization.weightPercent + fb.marketOpportunity.weightPercent + fb.buyerDemand.weightPercent + fb.logisticsEfficiency.weightPercent + fb.qualityAdvantage.weightPercent + fb.shelfLifeSafety.weightPercent;
assert(totalWeight === 100, `Sum of factor weights is exactly 100% (${totalWeight}%)`);

console.log('\n2. Testing Transparent "Why This Recommendation" Section:');
const why = rec.whyThisRecommendation;
assert(why !== undefined, 'whyThisRecommendation object exists');
assert(typeof why.coreJustification === 'string' && why.coreJustification.length > 0, `Core justification: "${why.coreJustification.slice(0, 45)}..."`);
assert(Array.isArray(why.keyAdvantages) && why.keyAdvantages.length > 0, `Key advantages listed (${why.keyAdvantages.length} items)`);
assert(Array.isArray(why.riskSafeguards) && why.riskSafeguards.length > 0, `Risk safeguards listed (${why.riskSafeguards.length} items)`);

console.log('\n3. Testing Actionable Decision Routes:');
console.log(`  Current lot recommended action: ${rec.recommendedAction} (${rec.actionTitle})`);
assert(['SELL_TO_VERIFIED_BUYER', 'SELL_NOW', 'WAIT', 'JOIN_TRANSPORT_POOL', 'SELL_TO_ANOTHER_MARKET'].includes(rec.recommendedAction), 'Valid actionable decision route');

console.log('\n4. Testing Critical Spoilage Gate (Forced SELL_NOW):');
const agedLot = new DigitalAgriculturalLot({
    lotId: 'LOT-AGED-01',
    cropType: 'Tomato',
    quantity: 500,
    overallQualityGrade: 'Grade B',
    freshnessScore: 45,
    harvestDate: '2026-08-20'
});

const agedRec = await RecommendationService.generateRecommendation({ lot: agedLot, farmerDistrict: 'Nashik' });
assert(agedRec.recommendedAction === 'SELL_NOW', 'Aged produce strictly triggers immediate sell action');
assert(agedRec.actionTitle.includes('तातडीने') || agedRec.actionTitle.includes('Sell Now') || agedRec.actionTitle.includes('Urgent'), 'Action title emphasizes urgent sell');

console.log('\n5. Testing Grounded Multilingual Explanations:');
const marathiAdvice = await GeminiAdvisoryService.generateFarmerExplanation({
    recommendation: rec,
    lot,
    language: 'Marathi (मराठी)'
});
assert(marathiAdvice.adviceText.length > 0, 'Generated natural Marathi advice text');
assert(marathiAdvice.actionKeyPoints.length > 0, 'Generated Marathi action key points');

const hindiAdvice = await GeminiAdvisoryService.generateFarmerExplanation({
    recommendation: rec,
    lot,
    language: 'Hindi (हिंदी)'
});
assert(hindiAdvice.adviceText.length > 0, 'Generated natural Hindi advice text');

const englishAdvice = await GeminiAdvisoryService.generateFarmerExplanation({
    recommendation: rec,
    lot,
    language: 'English'
});
assert(englishAdvice.adviceText.length > 0, 'Generated natural English advice text');

console.log('\n6. Testing Parameter Flexibility (getSellingRecommendation alias):');
const aliasRec = await RecommendationService.getSellingRecommendation({
    cropType: 'Tomato',
    quantityKg: 500,
    qualityGrade: 'Grade A',
    freshnessScore: 94
});
assert(aliasRec.opportunityScore > 0, 'getSellingRecommendation returns valid opportunity score');
assert(aliasRec.estimatedNetRealizationPerKg > 0, 'getSellingRecommendation returns valid net realization');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 7 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
