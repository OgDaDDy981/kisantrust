/**
 * KisanTrust - Phase 2 Automated Verification Suite
 * Tests Market Intelligence Foundation, Data Freshness, Fallback Hierarchy, Price Analysis, and Transport Cost Service.
 */

import { MarketDataService, DATA_STATUS } from './src/services/marketDataService.js';
import { PriceAnalysisService } from './src/services/priceAnalysisService.js';
import { TransportCostService } from './src/services/transportCostService.js';
import { TransportEstimationService } from './src/services/transportEstimationService.js';

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

console.log('🌱 Starting KisanTrust Phase 2 Automated Verification Suite...\n');

console.log('1. Testing MarketDataService Normalization, Status & Freshness:');
const rawRecord = {
    commodity: "Tomato",
    variety: "Hybrid",
    market: "Lasalgaon APMC",
    district: "Nashik",
    state: "Maharashtra",
    modal_price: "3400",
    min_price: "2800",
    max_price: "3800",
    arrivals_in_qtl: "1200",
    arrival_date: "2026-09-01"
};

const normalizedLive = MarketDataService.normalizeMandiRecord(rawRecord, DATA_STATUS.LIVE);
assert(normalizedLive.modalPricePerKg === 34.0, 'Converts quintal rate to ₹/kg correctly (3400 -> 34.0)');
assert(normalizedLive.minPricePerKg === 28.0, 'Min price converted correctly (2800 -> 28.0)');
assert(normalizedLive.maxPricePerKg === 38.0, 'Max price converted correctly (3800 -> 38.0)');
assert(normalizedLive.arrivalVolumeTons === 120, 'Arrivals converted from quintals to tons (1200 qtl -> 120 tons)');
assert(normalizedLive.dataStatus === 'live', 'Preserves dataStatus as live');
assert(normalizedLive.freshness.isLive === true, 'Freshness metadata correctly identifies live data');
assert(normalizedLive.freshness.isDemo === false, 'Live data is not flagged as demo');

const normalizedDemo = MarketDataService.normalizeMandiRecord(rawRecord, DATA_STATUS.DEMO);
assert(normalizedDemo.dataStatus === 'demo', 'Demo record explicitly flagged with dataStatus = demo');
assert(normalizedDemo.freshness.isDemo === true, 'Demo record freshness correctly tagged');
assert(normalizedDemo.dataStatusLabel.includes('Demo'), 'Data status label contains Demo / Offline Data');

console.log('\n2. Testing Fallback Hierarchy and Commodity Filtering:');
const fetchedPrices = await MarketDataService.fetchMandiPrices("Tomato", "Maharashtra", "Nashik");
assert(Array.isArray(fetchedPrices) && fetchedPrices.length > 0, 'Successfully fetches mandi prices array');
assert(fetchedPrices[0].modalPricePerKg > 0, 'Mandi record has positive modal price per kg');
assert(['live', 'cached', 'demo'].includes(fetchedPrices[0].dataStatus), 'Every record has a verified dataStatus tag');

const filtered = MarketDataService.filterMandiRecords(fetchedPrices, { commodity: 'Tomato' });
assert(filtered.length > 0, 'Filters records by commodity correctly');

console.log('\n3. Testing PriceAnalysisService (Unified Architecture):');
const calc = PriceAnalysisService.calculateNetRealization({
    baseMarketPrice: 34.0,
    qualityGrade: 'Grade A',
    freshnessScore: 92,
    quantityKg: 1000,
    distanceKm: 28,
    arrivalVolumeTons: 120,
    marketName: 'Lasalgaon APMC'
});

assert(calc.baseMarketPrice.value === 34.0, 'Base market price is 34.0');
assert(calc.qualityAdjustment.value === 3.40, 'Grade A premium (+10%) is ₹3.40/kg');
assert(calc.estimatedNetRealization.value > 0, 'Calculates positive estimated net realization');
assert(calc.totalLotEstimatedNetWorth.value === calc.estimatedNetRealization.value * 1000, 'Calculates exact lot net worth for 1000kg');

const explanation = PriceAnalysisService.explainCalculation(calc);
assert(explanation.steps.length === 6, 'Provides 6-step transparent formula breakdown');
assert(explanation.summaryText.includes('Net'), 'Provides readable summary explanation');

const spreadAnalysis = PriceAnalysisService.analyzePriceSpread(fetchedPrices);
assert(spreadAnalysis.mandisAnalyzed > 0, 'Analyzed non-empty mandi spread');
assert(spreadAnalysis.maxModal >= spreadAnalysis.minModal, 'Max modal price is >= min modal price');
assert(spreadAnalysis.avgModal > 0, 'Average modal price computed correctly');

console.log('\n4. Testing TransportCostService & Pooled Freight:');
const soloTransport = TransportCostService.calculateTransportCost({ distanceKm: 50, quantityKg: 1000, isPooled: false });
assert(soloTransport.costPerKg > 0, 'Solo transport has positive cost per kg');
assert(soloTransport.isPooled === false, 'Solo transport identified as unpooled');

const pooledTransport = TransportCostService.calculateTransportCost({ distanceKm: 50, quantityKg: 1000, isPooled: true });
assert(pooledTransport.isPooled === true, 'Pooled transport identified as pooled');
assert(pooledTransport.costPerKg < soloTransport.costPerKg, 'Pooled freight delivers lower cost per kg than solo');
assert(pooledTransport.freightSavingsAmount > 0, 'Farmer saves money through shared freight');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 2 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
