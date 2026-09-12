/**
 * AgriLink - Stage 2 Automated Verification Suite
 * Market Intelligence, Mandi Normalization, Transport Estimation & Net Realization Engine
 */

import { TransportEstimationService } from '../src/services/transportEstimationService.js';
import { MarketDataService } from '../src/services/marketDataService.js';
import { PriceCalculationService } from '../src/services/priceCalculationService.js';
import { MarketComparisonService } from '../src/services/marketComparisonService.js';
import { MarketTrendService } from '../src/services/marketTrendService.js';

console.log('🌱 Starting AgriLink Stage 2 Automated Verification Suite...\n');

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
// 1. Transport Estimation Service Tests
// ==========================================
console.log('1. Testing TransportEstimationService:');
const distLasalgaon = TransportEstimationService.getEstimatedDistanceKm("Nashik", "Lasalgaon APMC");
assert(distLasalgaon === 28, 'Accurate road distance to Lasalgaon APMC (28 km)');

const distVashi = TransportEstimationService.getEstimatedDistanceKm("Nashik", "Vashi APMC (Navi Mumbai)");
assert(distVashi === 185, 'Accurate road distance to Vashi APMC (185 km)');

const transportSmall = TransportEstimationService.calculateTransportCost({ distanceKm: 28, quantityKg: 500 });
assert(transportSmall.costPerKg > 0, 'Transport cost per kg computed for small lot');
assert(transportSmall.isEstimated === true, 'Transport output clearly flagged as estimated');

const transportBulk = TransportEstimationService.calculateTransportCost({ distanceKm: 185, quantityKg: 5000 });
assert(transportBulk.vehicleType.includes('10-Ton'), 'Automatically selects Heavy Truck for bulk 5-ton lot');

// ==========================================
// 2. Market Data Service & Agmarknet Normalization
// ==========================================
console.log('\n2. Testing MarketDataService Normalization & Hierarchy:');
// Simulate raw Agmarknet record from data.gov.in (in ₹/quintal)
const rawAgmarknetRecord = {
    state: "Maharashtra",
    district: "Pune",
    market: "Pune APMC (Gultekdi)",
    commodity: "Tomato",
    variety: "Hybrid",
    arrival_date: "2026-08-30",
    min_price: "2800", // ₹2800/quintal
    max_price: "3800", // ₹3800/quintal
    modal_price: "3500", // ₹3500/quintal
    arrivals_in_qtl: "1600"
};

const normalized = MarketDataService.normalizeMandiRecord(rawAgmarknetRecord, "live");
assert(normalized.modalPricePerKg === 35.0, 'Correctly converted ₹3500/quintal to ₹35.00/kg');
assert(normalized.minPricePerKg === 28.0, 'Correctly converted ₹2800/quintal to ₹28.00/kg');
assert(normalized.maxPricePerKg === 38.0, 'Correctly converted ₹3800/quintal to ₹38.00/kg');
assert(normalized.dataStatus === "live", 'Data status correctly tagged as live');

const fetchedPrices = await MarketDataService.fetchMandiPrices("Tomato", "Maharashtra", "Nashik");
assert(Array.isArray(fetchedPrices) && fetchedPrices.length >= 3, 'Fetched 3+ normalized mandi records via fallback hierarchy');
assert(['live', 'cached', 'demo'].includes(fetchedPrices[0].dataStatus), 'Data status adheres to valid taxonomy');

// ==========================================
// 3. Price Calculation Service (Net Realization)
// ==========================================
console.log('\n3. Testing PriceCalculationService (Itemized Net Formula):');
const calcGradeA = PriceCalculationService.calculateNetRealization({
    baseMarketPrice: 34.0,
    qualityGrade: "Grade A",
    freshnessScore: 94,
    quantityKg: 1000,
    distanceKm: 28,
    arrivalVolumeTons: 150,
    marketName: "Lasalgaon APMC"
});

assert(calcGradeA.baseMarketPrice.value === 34.0, 'Base market price is ₹34.00/kg');
assert(calcGradeA.qualityAdjustment.value === 3.40, 'Grade A premium is +₹3.40/kg (+10%)');
assert(calcGradeA.qualityAdjustment.source.includes('Grade A Premium'), 'Quality adjustment source is documented');
assert(calcGradeA.transportCost.value > 0, 'Transport cost deduction is present and documented');
assert(calcGradeA.storageCost.value === 0.40, 'Storage/handling fee is standard ₹0.40/kg');
assert(calcGradeA.totalLotEstimatedNetWorth.value === Number((calcGradeA.estimatedNetRealization.value * 1000).toFixed(2)), 'Total lot net value equals net realization * 1000kg');
assert(calcGradeA.disclaimer.includes('Estimated market opportunity'), 'Includes non-guaranteed disclaimer');

// Grade C test
const calcGradeC = PriceCalculationService.calculateNetRealization({
    baseMarketPrice: 34.0,
    qualityGrade: "Grade C",
    freshnessScore: 68,
    quantityKg: 1000,
    distanceKm: 28,
    marketName: "Lasalgaon APMC"
});
assert(calcGradeC.qualityAdjustment.value === -5.10, 'Grade C applies explainable -15% sorting allowance');
assert(calcGradeC.estimatedNetRealization.value < calcGradeA.estimatedNetRealization.value, 'Grade C realization is lower than Grade A');

// ==========================================
// 4. Market Comparison Service (Net Realization Ranking)
// ==========================================
console.log('\n4. Testing MarketComparisonService (Ranking by Net Realization, NOT Raw Price):');
const comparison = await MarketComparisonService.compareMarketsForLot({
    cropType: "Tomato",
    qualityGrade: "Grade A",
    freshnessScore: 92,
    quantityKg: 1000,
    farmerDistrict: "Nashik"
});

assert(comparison.totalMandisCompared >= 3, 'Compared 3+ mandis');
assert(comparison.recommendedMandi !== null, 'Identified recommended mandi');

// Verify that mandis are sorted descending by estimatedNetRealizationPerKg
let isProperlySorted = true;
for (let i = 0; i < comparison.rankedMandis.length - 1; i++) {
    if (comparison.rankedMandis[i].estimatedNetRealizationPerKg < comparison.rankedMandis[i + 1].estimatedNetRealizationPerKg) {
        isProperlySorted = false;
        break;
    }
}
assert(isProperlySorted, 'Mandis are strictly ranked in descending order of ESTIMATED NET REALIZATION');
assert(comparison.explanation.length > 20, 'Generates actionable explanation of the market advantage');

// ==========================================
// 5. Market Trend Service
// ==========================================
console.log('\n5. Testing MarketTrendService (7-Day & 30-Day Trends):');
const trends = await MarketTrendService.getCropPriceTrends("Tomato", "Pune APMC (Gultekdi)", 35.0);
assert(trends.currentPrice === 35.0, 'Current price matches benchmark');
assert(typeof trends.change7d === 'number', '7-day price delta computed');
assert(typeof trends.change7dPct === 'number', '7-day percentage change computed');
assert(['RISING', 'STABLE', 'FALLING'].includes(trends.direction), 'Direction is RISING, STABLE, or FALLING');
assert(trends.sevenDaySeries.length === 7, 'Includes 7-day historical series');
assert(trends.thirtyDaySeries.length === 31, 'Includes 30-day historical series');

console.log(`\n==========================================`);
console.log(`Suite Completed: ${passedTests} passed, ${failedTests} failed.`);
if (failedTests === 0) {
    console.log(`🎉 ALL STAGE 2 VERIFICATION TESTS PASSED SUCCESSFULLY!`);
} else {
    process.exit(1);
}
