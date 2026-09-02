/**
 * KisanTrust - Phase 10 Automated Verification Suite
 * Tests Price Trends & Forecast Foundation:
 * - Historical moving averages (7-day / 30-day)
 * - Regional arrival pressure (volume impact)
 * - Seasonality indicators
 * - Short-term forecast (3-5 days) with confidence band (Min - Expected - Max)
 * - Transparent explanations without fake precision.
 */

import { MarketTrendService } from './src/services/marketTrendService.js';
import { PricePredictionService } from './src/services/pricePredictionService.js';

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

console.log('🌱 Starting KisanTrust Phase 10 Automated Verification Suite...\n');

console.log('1. Testing Historical Moving Averages & Trend Velocity:');
const trend = await MarketTrendService.getTrendForCrop('Tomato', 'Pune APMC (Gultekdi)');
assert(trend.sevenDayAvg > 0, `7-day moving average calculated (₹${trend.sevenDayAvg}/kg)`);
assert(trend.thirtyDayAvg > 0, `30-day moving average calculated (₹${trend.thirtyDayAvg}/kg)`);
assert(['RISING', 'STABLE', 'FALLING'].includes(trend.trendDirection), `Valid trend direction: ${trend.trendDirection}`);
assert(trend.sevenDaySeries.length === 7, '7-day daily time-series array exists');
assert(trend.thirtyDaySeries.length >= 30, '30-day historical series exists');

console.log('\n2. Testing Regional Arrival Pressure Impact:');
const highSupply = PricePredictionService.evaluateArrivalPressure(220, 100);
assert(highSupply.pressureLevel === 'HIGH_SUPPLY_PRESSURE', 'High arrival volume (>160%) flagged as HIGH_SUPPLY_PRESSURE');
assert(highSupply.priceImpactPerKg < 0, `High supply applies downward price pressure (${highSupply.priceImpactPerKg} ₹/kg)`);

const tightSupply = PricePredictionService.evaluateArrivalPressure(50, 100);
assert(tightSupply.pressureLevel === 'TIGHT_SUPPLY_SUPPORT', 'Low arrival volume (<65%) flagged as TIGHT_SUPPLY_SUPPORT');
assert(tightSupply.priceImpactPerKg > 0, `Tight supply provides upward price support (+${tightSupply.priceImpactPerKg} ₹/kg)`);

const balancedSupply = PricePredictionService.evaluateArrivalPressure(105, 100);
assert(balancedSupply.pressureLevel === 'BALANCED_SUPPLY', 'Normal volume flagged as BALANCED_SUPPLY');
assert(balancedSupply.priceImpactPerKg === 0, 'Balanced supply has neutral 0.00 price impact');

console.log('\n3. Testing Crop Seasonality Indicators:');
const tomatoHarvest = PricePredictionService.getSeasonalityIndicator('Tomato', 8); // September (Kharif)
assert(tomatoHarvest.stage === 'PEAK_HARVEST', 'Tomato in Sep correctly identifies PEAK_HARVEST stage');
assert(tomatoHarvest.seasonalIndex <= 1.0, 'Peak harvest seasonal index reflects ample supply');

const onionLean = PricePredictionService.getSeasonalityIndicator('Onion', 9); // October (Pre-Kharif lean)
assert(onionLean.stage === 'OFF_SEASON_LEAN', 'Onion in Oct correctly identifies OFF_SEASON_LEAN stage');
assert(onionLean.seasonalIndex > 1.0, 'Off-season seasonal index reflects price premium');

console.log('\n4. Testing Grounded 5-Day Forecast & Dynamic Confidence Band:');
const forecast5d = await PricePredictionService.forecastPriceRange({
    cropType: 'Tomato',
    marketName: 'Pune APMC (Gultekdi)',
    currentPrice: 34.0,
    arrivalVolumeTons: 130,
    horizonDays: 5
});

assert(forecast5d.predictionStatus === 'Estimated', 'Prediction status is explicitly Estimated (No fake live/certainty claims)');
assert(forecast5d.isGrounded === true, 'Forecast is marked grounded in APMC time series and arrival volume models');
assert(forecast5d.forecastHorizonDays === 5, 'Forecast horizon set to 5 days');
assert(forecast5d.sevenDayMovingAvg > 0, `Preserves 7-day moving average (₹${forecast5d.sevenDayMovingAvg}/kg)`);
assert(forecast5d.thirtyDayMovingAvg > 0, `Preserves 30-day moving average (₹${forecast5d.thirtyDayMovingAvg}/kg)`);
assert(forecast5d.centerExpectedPrice > 0, `Calculates center expected price (₹${forecast5d.centerExpectedPrice}/kg)`);

const range = forecast5d.expectedOpportunityRange;
assert(range.min > 0, `Min predicted price is positive (₹${range.min}/kg)`);
assert(range.max >= range.min, `Max predicted price (₹${range.max}) >= Min predicted price (₹${range.min})`);
assert(forecast5d.centerExpectedPrice >= range.min && forecast5d.centerExpectedPrice <= range.max, 'Center expected price lies within confidence band');
assert(forecast5d.confidencePercent >= 65 && forecast5d.confidencePercent <= 95, `Confidence percentage within realistic bounds (${forecast5d.confidencePercent}%)`);
assert(typeof forecast5d.confidenceLevel === 'string', `Confidence level label: ${forecast5d.confidenceLevel}`);

console.log('\n5. Testing Transparency & Data Limitations:');
assert(Array.isArray(forecast5d.historicalDataLimitations), 'Explicit historical limitations array provided');
assert(forecast5d.historicalDataLimitations.length >= 3, 'Includes 3+ explicit disclaimer assumptions');
assert(forecast5d.explanation.length > 20, 'Includes grounded explanatory rationale');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 10 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
