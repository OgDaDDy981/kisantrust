/**
 * AgriLink - Phase 9 Automated Verification Suite
 * Tests 4-Pathway Offer and Opportunity Comparison:
 * - Option A: Local Mandi
 * - Option B: Distant Major APMC
 * - Option C: Verified Buyer (Direct Deal)
 * - Option D: Smart Pooled Logistics Route
 * Verifies gross price (kg/qtl), transport cost, handling/cess, net realization,
 * total lot payout, payment timeline, and risk level.
 */

import { OpportunityComparisonService } from '../src/services/opportunityComparisonService.js';
import { PriceAnalysisService } from '../src/services/priceAnalysisService.js';

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

console.log('🌱 Starting AgriLink Phase 9 Automated Verification Suite...\n');

console.log('1. Testing 4-Pathway Comparison Engine (Tomato, 500kg):');
const comparison = await OpportunityComparisonService.compareSellingPathways({
    cropType: 'Tomato',
    quantityKg: 500,
    qualityGrade: 'Grade A',
    freshnessScore: 94,
    farmerDistrict: 'Nashik'
});

assert(comparison.options.localMandi !== undefined, 'Option A (Local Mandi) generated');
assert(comparison.options.distantMandi !== undefined, 'Option B (Distant Major APMC) generated');
assert(comparison.options.verifiedBuyer !== undefined, 'Option C (Verified Buyer) generated');
assert(comparison.options.smartPooling !== undefined, 'Option D (Smart Pooled Logistics) generated');

console.log('\n2. Testing Comprehensive Metric Fields on All 4 Options:');
const optKeys = ['localMandi', 'distantMandi', 'verifiedBuyer', 'smartPooling'];
for (const key of optKeys) {
    const opt = comparison.options[key];
    console.log(`  Testing ${opt.titleEn}:`);
    assert(opt.grossPricePerKg > 0, `  Gross price per kg is positive (₹${opt.grossPricePerKg})`);
    assert(opt.grossPricePerQtl === opt.grossPricePerKg * 100, `  Gross price per qtl is exactly 100x kg price (₹${opt.grossPricePerQtl})`);
    assert(typeof opt.transportCostPerKg === 'number', `  Transport cost per kg tracked (₹${opt.transportCostPerKg})`);
    assert(typeof opt.handlingCessPerKg === 'number', `  Handling / cess per kg tracked (₹${opt.handlingCessPerKg})`);
    assert(typeof opt.storageHoldingCostPerKg === 'number', `  Storage / holding cost per kg tracked (₹${opt.storageHoldingCostPerKg})`);
    assert(opt.netRealizationPerKg > 0, `  Net realization per kg is positive (₹${opt.netRealizationPerKg})`);
    assert(opt.totalLotPayout > 0, `  Total lot payout is positive (₹${opt.totalLotPayout})`);
    assert(typeof opt.paymentTimeline === 'string' && opt.paymentTimeline.length > 0, `  Payment timeline specified: ${opt.paymentTimeline}`);
    assert(['LOW', 'LOW_MEDIUM', 'MEDIUM', 'MEDIUM_HIGH', 'HIGH'].includes(opt.riskLevel), `  Valid risk level: ${opt.riskLevel}`);
}

console.log('\n3. Testing Pathway Comparative Logic & Rankings:');
const ranked = comparison.rankedOptions;
assert(ranked.length === 4, 'All 4 options ranked in comparative matrix');
assert(ranked[0].netRealizationPerKg >= ranked[1].netRealizationPerKg, 'Ranking order strictly descending by net realization');
assert(ranked[1].netRealizationPerKg >= ranked[2].netRealizationPerKg, 'Ranking order strictly descending by net realization');
assert(ranked[2].netRealizationPerKg >= ranked[3].netRealizationPerKg, 'Ranking order strictly descending by net realization');

const best = comparison.bestOption;
assert(best !== undefined, `Identified best option: ${best.titleEn} (₹${best.netRealizationPerKg}/kg)`);

console.log('\n4. Testing Differential Net Gain Analysis:');
const summary = comparison.comparisonSummary;
assert(summary.bestNetPerKg >= summary.baselineNetPerKg, `Best net (₹${summary.bestNetPerKg}) >= baseline local mandi net (₹${summary.baselineNetPerKg})`);
assert(summary.netGainPerKg >= 0, `Calculates positive net gain over local mandi: +₹${summary.netGainPerKg}/kg`);
assert(summary.totalLotNetGain >= 0, `Calculates total extra payout on lot: +₹${summary.totalLotNetGain}`);

console.log('\n5. Testing PriceAnalysisService Architectural Integration:');
const unifiedComparison = await PriceAnalysisService.compareSellingPathways({
    cropType: 'Onion',
    quantityKg: 2000,
    qualityGrade: 'Grade A',
    freshnessScore: 90
});
assert(unifiedComparison.cropType === 'Onion', 'PriceAnalysisService returns comparison for Onion');
assert(unifiedComparison.rankedOptions.length === 4, 'PriceAnalysisService returns all 4 ranked options');
assert(unifiedComparison.bestOption.netRealizationPerKg > 0, 'PriceAnalysisService best option has positive net price');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 9 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
