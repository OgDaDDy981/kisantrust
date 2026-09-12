/**
 * AgriLink - Phase 3 Automated Verification Suite
 * Tests Market Price Comparison, Multi-Parameter Filtering, Min/Modal/Max Range,
 * Road Distance Calculation, Data Freshness Badging, and Summary Spread Metrics.
 */

import { MarketComparisonService } from '../src/services/marketComparisonService.js';
import { MarketDataService, DATA_STATUS } from '../src/services/marketDataService.js';

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

console.log('🌱 Starting AgriLink Phase 3 Automated Verification Suite...\n');

console.log('1. Testing Multi-Mandi Price Comparison & Ranking:');
const comparison = await MarketComparisonService.compareMarketsForLot({
    cropType: "Tomato",
    farmerDistrict: "Nashik",
    qualityGrade: "Grade A",
    freshnessScore: 92,
    quantityKg: 1000
});

assert(comparison.totalMandisCompared > 0, 'Successfully compared multiple mandis for Tomato');
assert(comparison.rankedMandis.length === comparison.totalMandisCompared, 'Ranked mandis list matches total compared');
assert(comparison.recommendedMandi !== null, 'Identified top recommended mandi based on net realization');

// Verify ordering: top mandi has highest or equal net realization compared to next
for (let i = 0; i < comparison.rankedMandis.length - 1; i++) {
    const current = comparison.rankedMandis[i];
    const next = comparison.rankedMandis[i + 1];
    assert(current.estimatedNetRealizationPerKg >= next.estimatedNetRealizationPerKg, 
        `Mandi ranking order is strictly descending by net realization (${current.marketName}: ₹${current.estimatedNetRealizationPerKg} >= ${next.marketName}: ₹${next.estimatedNetRealizationPerKg})`);
}

console.log('\n2. Testing Price Ranges (Min, Modal, Max) & Units (kg and qtl):');
const topMandi = comparison.rankedMandis[0];
assert(topMandi.modalPricePerKg > 0, 'Modal price per kg is positive');
assert(topMandi.minPricePerKg <= topMandi.modalPricePerKg, 'Min price <= Modal price per kg');
assert(topMandi.maxPricePerKg >= topMandi.modalPricePerKg, 'Max price >= Modal price per kg');
assert(topMandi.modalPricePerQtl === topMandi.modalPricePerKg * 100, 'Modal price per quintal is exactly 100x kg price');
assert(topMandi.arrivalVolumeTons > 0, 'Arrival volume is tracked in tons');
assert(topMandi.distanceKm > 0, 'Distance from farmer origin is calculated');

console.log('\n3. Testing Data Source & Status Integrity (No Fake Live Claims):');
assert(['live', 'cached', 'demo'].includes(topMandi.dataStatus), 'Every record contains explicit dataStatus');
assert(topMandi.dataStatusLabel !== undefined && topMandi.dataStatusLabel.length > 0, 'Human readable dataStatusLabel exists');
assert(topMandi.freshness !== undefined && typeof topMandi.freshness.isLive === 'boolean', 'Structured freshness metadata is attached');
assert(topMandi.source !== undefined && topMandi.source.length > 0, 'Explicit data source attribution is present');

console.log('\n4. Testing Multi-Parameter Filtering (District & Commodity):');
const filteredByDistrict = await MarketComparisonService.compareMarketsForLot({
    cropType: "Tomato",
    farmerDistrict: "Nashik",
    filters: { district: "Nashik" }
});

assert(filteredByDistrict.rankedMandis.every(m => m.district.toLowerCase().includes('nashik')), 
    'District filter strictly limits results to Nashik district');

const onionComparison = await MarketComparisonService.compareMarketsForLot({
    cropType: "Onion",
    farmerDistrict: "Nashik"
});

assert(onionComparison.rankedMandis.every(m => m.commodity.toLowerCase().includes('onion')), 
    'Commodity filter strictly limits results to Onion');

console.log('\n5. Testing Summary Metrics & Regional Price Spread:');
const summary = comparison.summaryMetrics;
assert(summary.maxModal >= summary.minModal, 'Summary Max Modal >= Min Modal');
assert(summary.avgModal > 0, 'Summary Average Modal is computed');
assert(summary.spreadAmount === Number((summary.maxModal - summary.minModal).toFixed(2)), 'Price Spread Amount is exactly (Max - Min)');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 3 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
