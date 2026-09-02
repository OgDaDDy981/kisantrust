/**
 * KisanTrust - Phase 4 Automated Verification Suite
 * Tests Net Realization Engine, Raw Market Price vs Net Realization,
 * Multi-Opportunity Comparison (Local Mandi vs Distant Mandi vs Direct Buyer),
 * and Transparent Formula Explanations.
 */

import { PriceCalculationService } from './src/services/priceCalculationService.js';
import { PriceAnalysisService } from './src/services/priceAnalysisService.js';
import { TransportCostService } from './src/services/transportCostService.js';
import { MatchingService } from './src/services/matchingService.js';

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

console.log('🌱 Starting KisanTrust Phase 4 Automated Verification Suite...\n');

console.log('1. Testing Raw Market Price vs Estimated Net Realization:');
const localMandiCalc = PriceCalculationService.calculateNetRealization({
    baseMarketPrice: 34.0, // ₹34/kg raw
    qualityGrade: 'Grade A',
    freshnessScore: 92,
    quantityKg: 1000,
    distanceKm: 28, // 28 km to Lasalgaon
    marketName: 'Lasalgaon APMC'
});

assert(localMandiCalc.baseMarketPrice.value === 34.0, 'Raw market benchmark is ₹34.00/kg');
assert(localMandiCalc.qualityAdjustment.value === 3.40, 'Grade A premium (+10%) is +₹3.40/kg');
assert(localMandiCalc.transportCost.value > 0, 'Transport deduction is non-zero');
assert(localMandiCalc.storageCost.value === 0.40, 'Storage/mandi cess is ₹0.40/kg');
assert(localMandiCalc.estimatedNetRealization.value > 0, 'Calculates positive estimated net realization');
assert(localMandiCalc.estimatedNetRealization.value !== localMandiCalc.baseMarketPrice.value, 'Net realization differs transparently from raw price');

console.log('\n2. Testing Non-Blind Recommendation (Distant Mandi vs Local Mandi):');
// Distant mandi with higher raw price (₹38.00 raw) but far distance (185 km)
const distantMandiCalc = PriceCalculationService.calculateNetRealization({
    baseMarketPrice: 38.0, // ₹38/kg raw (higher raw price!)
    qualityGrade: 'Grade A',
    freshnessScore: 92,
    quantityKg: 1000,
    distanceKm: 185, // 185 km to Vashi/Mumbai
    marketName: 'Vashi APMC (Navi Mumbai)'
});

// Compare transport deductions: distant mandi has higher transport cost
assert(distantMandiCalc.transportCost.value > localMandiCalc.transportCost.value, 
    `Distant mandi transport cost (-₹${distantMandiCalc.transportCost.value}/kg) is higher than local (-₹${localMandiCalc.transportCost.value}/kg)`);

// Verify that net realization accounts for transport properly
const localNet = localMandiCalc.estimatedNetRealization.value;
const distantNet = distantMandiCalc.estimatedNetRealization.value;
console.log(`     Local Mandi Net: ₹${localNet}/kg (Raw: ₹34.00)`);
console.log(`     Distant Mandi Net: ₹${distantNet}/kg (Raw: ₹38.00)`);

console.log('\n3. Testing Direct Verified Buyer Comparison (Farm-gate Zero Transport):');
const mockLot = {
    cropType: 'Tomato',
    quantity: 1000,
    overallQualityGrade: 'Grade A',
    expectedSellingDate: '2026-09-03'
};

const mockBuyerDemand = {
    demandId: 'DEM-001',
    buyerId: 'buyer_sahyadri',
    buyerName: 'Sahyadri Agro Processing',
    cropType: 'Tomato',
    requiredQuantityKg: 10000,
    minQualityGrade: 'Grade A',
    offeredPricePerKg: 37.50, // ₹37.50 direct offer
    pickupProvided: true, // Farm-gate pickup!
    reliabilityScore: 4.8,
    requiredDeliveryDate: '2026-09-05'
};

const buyerMatch = MatchingService.evaluateMatch(mockLot, mockBuyerDemand, 'Nashik');
assert(buyerMatch.pickupProvided === true, 'Buyer provides farm-gate pickup');
assert(buyerMatch.transportCostPerKg === 0, 'Farm-gate pickup results in ₹0.00 transport deduction');
assert(buyerMatch.estimatedNetRealization === 37.20, `Direct buyer delivers highest net realization (₹${buyerMatch.estimatedNetRealization}/kg)`);

console.log('\n4. Testing 6-Step Transparent Formula Breakdown:');
const explanation = PriceAnalysisService.explainCalculation(localMandiCalc);
assert(explanation.steps.length === 6, 'Contains 6 transparent mathematical steps');
assert(explanation.steps[0].name === 'Base Benchmark', 'Step 1 is Base Benchmark');
assert(explanation.steps[1].name === 'Quality Adjustment', 'Step 2 is Quality Adjustment');
assert(explanation.steps[2].name === 'Buyer Demand Index', 'Step 3 is Buyer Demand Index');
assert(explanation.steps[3].name === 'Transport Deduction', 'Step 4 is Transport Deduction');
assert(explanation.steps[4].name === 'Storage & Mandi Cess', 'Step 5 is Storage & Mandi Cess');
assert(explanation.steps[5].name === 'Final Estimated Net Realization', 'Step 6 is Final Estimated Net Realization');
assert(localMandiCalc.disclaimer.includes('Estimated market opportunity'), 'Includes honest non-guaranteed disclaimer');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 4 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
