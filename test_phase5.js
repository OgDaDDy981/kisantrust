/**
 * KisanTrust - Phase 5 Automated Verification Suite
 * Tests Listing Market Insights ("Before You Publish"), Real-Time Dynamic Updates,
 * Expected Net Price Range by Grade, Active Buyer Demand, and Logistics Context.
 */

import { PriceAnalysisService } from './src/services/priceAnalysisService.js';
import { BuyerService } from './src/services/buyerService.js';
import { QualityService } from './src/services/qualityService.js';
import { firebaseService } from './src/services/firebaseService.js';
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

console.log('🌱 Starting KisanTrust Phase 5 Automated Verification Suite...\n');

console.log('1. Testing Before You Publish Insights Payload (Tomato):');
const tomatoInsights = await PriceAnalysisService.getListingMarketInsights({
    cropType: 'Tomato',
    quantityKg: 500,
    farmerDistrict: 'Nashik'
});

assert(tomatoInsights.cropType === 'Tomato', 'Correct commodity identified');
assert(tomatoInsights.topMandi.modalPrice > 0, 'Top mandi modal price is positive');
assert(tomatoInsights.topMandi.name.length > 0, 'Top mandi name is present');
assert(tomatoInsights.topMandi.distanceKm > 0, 'Distance from origin is calculated');

console.log('\n2. Testing Expected Net Realization by Quality Grade:');
const grades = tomatoInsights.gradeNetEstimates;
assert(grades.gradeA > grades.gradeB, `Grade A net (₹${grades.gradeA}/kg) > Grade B net (₹${grades.gradeB}/kg)`);
assert(grades.gradeB > grades.gradeC, `Grade B net (₹${grades.gradeB}/kg) > Grade C net (₹${grades.gradeC}/kg)`);
assert(grades.gradeC > 0, 'Grade C net is positive');

console.log('\n3. Testing Active Buyer Demand Context:');
const buyerDemand = tomatoInsights.activeBuyerDemand;
assert(typeof buyerDemand.buyerCount === 'number', 'Buyer count is tracked');
assert(buyerDemand.buyerCount > 0, 'Found active verified buyers for Tomato');
assert(buyerDemand.topOfferedPrice > 0, `Top offered buyer price is ₹${buyerDemand.topOfferedPrice}/kg`);
assert(buyerDemand.topBuyerName.length > 0, `Top buyer identified: ${buyerDemand.topBuyerName}`);

console.log('\n4. Testing Logistics & Smart Pooling Freight Context:');
const logContext = tomatoInsights.logisticsContext;
assert(logContext.soloTransportCostPerKg > 0, 'Solo transport cost per kg calculated');
assert(logContext.pooledTransportCostPerKg > 0, 'Pooled transport cost per kg calculated');
assert(logContext.pooledTransportCostPerKg < logContext.soloTransportCostPerKg, 'Pooled freight is cheaper than solo freight');
assert(logContext.logisticsSavingsPercent > 50, `Pooled logistics delivers ${logContext.logisticsSavingsPercent}% freight savings`);

console.log('\n5. Testing Data Freshness & Source Transparency:');
const fresh = tomatoInsights.dataFreshness;
assert(['live', 'cached', 'demo'].includes(fresh.status), `Data status is valid taxonomy: ${fresh.status}`);
assert(fresh.statusLabel.length > 0, `Data status label exists: ${fresh.statusLabel}`);
assert(fresh.source.length > 0, `Explicit data source attribution: ${fresh.source}`);

console.log('\n6. Testing Multi-Commodity Dynamic Updates (Onion & Potato):');
const onionInsights = await PriceAnalysisService.getListingMarketInsights({
    cropType: 'Onion',
    quantityKg: 1000,
    farmerDistrict: 'Nashik'
});
assert(onionInsights.cropType === 'Onion', 'Dynamic crop switch to Onion verified');
assert(onionInsights.topMandi.modalPrice > 0, 'Onion mandi benchmark loaded');

const potatoInsights = await PriceAnalysisService.getListingMarketInsights({
    cropType: 'Potato',
    quantityKg: 800,
    farmerDistrict: 'Nashik'
});
assert(potatoInsights.cropType === 'Potato', 'Dynamic crop switch to Potato verified');
assert(potatoInsights.topMandi.modalPrice > 0, 'Potato mandi benchmark loaded');

console.log('\n7. Verifying 3-Step Wizard & Lot Persistence Preservation:');
const testLot = new DigitalAgriculturalLot({
    lotId: `LOT-TEST-${Date.now().toString().slice(-4)}`,
    cropType: 'Tomato',
    variety: 'Himsona',
    quantity: 500,
    harvestDate: '2026-08-31',
    overallQualityGrade: 'Grade A',
    freshnessScore: 94,
    netPricePerKg: 36.5,
    farmerId: 'FARMER-NIPHAD-001',
    farmerName: 'रमेश पाटील'
});

await firebaseService.saveLot(testLot.toFirestore());
const savedLots = await firebaseService.getLots();
const found = savedLots.find(l => l.lotId === testLot.lotId);
assert(found !== undefined, 'Lot creation and persistence continues to work seamlessly');
assert(found.cropType === 'Tomato', 'Saved lot preserves cropType');
assert(found.netPricePerKg === 36.5, 'Saved lot preserves calculated net price');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 5 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
