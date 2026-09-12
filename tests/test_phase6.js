/**
 * AgriLink - Phase 6 Automated Verification Suite
 * Tests Smart Buyer Requirements, Demand Posting, Variety Preferences,
 * Price Ranges, Delivery Hubs, and Explainable Matching (Quality, Quantity, Logistics, Price Fit).
 */

import { BuyerService } from '../src/services/buyerService.js';
import { MatchingService } from '../src/services/matchingService.js';
import { BuyerDemand, BuyerProfile } from '../src/models/Buyer.js';
import { DigitalAgriculturalLot } from '../src/models/Lot.js';

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

console.log('🌱 Starting AgriLink Phase 6 Automated Verification Suite...\n');

console.log('1. Testing Smart Buyer Demand Model & Parameter Support:');
const demand = new BuyerDemand({
    demandId: 'DEM-TEST-001',
    buyerId: 'BUYER-SAHYADRI-01',
    buyerName: 'Sahyadri Agro Processing Hub',
    companyType: 'Food Processor',
    cropType: 'Tomato',
    varietyPreference: 'Himsona Hybrid',
    minQualityGrade: 'Grade A',
    requiredQuantityKg: 10000,
    requiredDeliveryDate: '2026-09-08',
    offeredPricePerKg: 37.5,
    minOfferedPricePerKg: 36.0,
    maxOfferedPricePerKg: 39.5,
    deliveryHub: 'Nashik / Niphad Hub',
    preferredLocation: 'Nashik / Niphad Hub',
    pickupProvided: true,
    reliabilityScore: 4.9
});

assert(demand.cropType === 'Tomato', 'Commodity specified: Tomato');
assert(demand.varietyPreference === 'Himsona Hybrid', 'Variety preference supported: Himsona Hybrid');
assert(demand.minQualityGrade === 'Grade A', 'Min quality grade required: Grade A');
assert(demand.requiredQuantityKg === 10000, 'Target quantity specified: 10,000 kg');
assert(demand.requiredDeliveryDate === '2026-09-08', 'Required delivery date set');
assert(demand.offeredPricePerKg === 37.5, 'Target offer price set: ₹37.50/kg');
assert(demand.minOfferedPricePerKg === 36.0 && demand.maxOfferedPricePerKg === 39.5, 'Price range supported: ₹36.0 - ₹39.5/kg');
assert(demand.deliveryHub === 'Nashik / Niphad Hub', 'Buying delivery hub specified');
assert(demand.pickupProvided === true, 'Farm-gate pickup flagged');

console.log('\n2. Testing Serialization & Firestore Persistence:');
const firestoreData = demand.toFirestore();
assert(firestoreData.varietyPreference === 'Himsona Hybrid', 'toFirestore preserves varietyPreference');
assert(firestoreData.deliveryHub === 'Nashik / Niphad Hub', 'toFirestore preserves deliveryHub');
assert(firestoreData.minOfferedPricePerKg === 36.0, 'toFirestore preserves min price');
assert(firestoreData.maxOfferedPricePerKg === 39.5, 'toFirestore preserves max price');

console.log('\n3. Testing Explainable Match: High Compatibility (Grade A Lot vs Grade A Demand):');
const lotA = new DigitalAgriculturalLot({
    lotId: 'LOT-NIPHAD-01',
    cropType: 'Tomato',
    variety: 'Himsona Hybrid',
    quantity: 1000,
    overallQualityGrade: 'Grade A',
    freshnessScore: 95,
    expectedSellingDate: '2026-09-04',
    farmerLocation: { district: 'Nashik', taluka: 'Niphad' }
});

const matchA = MatchingService.evaluateMatch(lotA, demand, 'Nashik');
assert(matchA.isCompatible === true, 'Match marked as compatible');
assert(matchA.matchScore >= 85, `High match score achieved: ${matchA.matchScore}%`);
assert(matchA.matchDetails.qualityFit.status === 'EXACT_MATCH' || matchA.matchDetails.qualityFit.status === 'EXCEEDS', 'Quality fit correctly evaluated');
assert(matchA.matchDetails.quantityFit.status === 'FULL_LOT_COVERED', '100% of farmer lot accommodated in demand');
assert(matchA.matchDetails.logisticsFit.status === 'FARM_GATE_PICKUP', 'Logistics identifies zero-cost farmgate pickup');
assert(matchA.matchDetails.priceFit.estimatedNetRealization > 35.0, `Attractive net realization: ₹${matchA.matchDetails.priceFit.estimatedNetRealization}/kg`);

console.log('\n4. Testing Explainable Match: Non-Match / Quality Disqualification (Grade C Lot):');
const lotC = new DigitalAgriculturalLot({
    lotId: 'LOT-NIPHAD-03',
    cropType: 'Tomato',
    variety: 'Standard',
    quantity: 1000,
    overallQualityGrade: 'Grade C',
    freshnessScore: 68,
    expectedSellingDate: '2026-09-04',
    farmerLocation: { district: 'Nashik' }
});

const matchC = MatchingService.evaluateMatch(lotC, demand, 'Nashik');
assert(matchC.warnings.length > 0, 'Generates clear warning for grade disparity');
assert(matchC.matchDetails.qualityFit.status === 'BELOW_TARGET', 'Identifies quality grade below target');
assert(matchC.matchScore < matchA.matchScore, `Grade C score (${matchC.matchScore}%) < Grade A score (${matchA.matchScore}%)`);

console.log('\n5. Testing Incompatible Hard Gates (Crop Mismatch):');
const onionLot = new DigitalAgriculturalLot({
    lotId: 'LOT-ONION-01',
    cropType: 'Onion',
    quantity: 2000,
    overallQualityGrade: 'Grade A',
    farmerLocation: { district: 'Nashik' }
});

const cropMismatch = MatchingService.evaluateMatch(onionLot, demand, 'Nashik');
assert(cropMismatch.isCompatible === false, 'Crop mismatch is strictly flagged incompatible');
assert(cropMismatch.matchScore === 0, 'Crop mismatch receives 0 match score');
assert(cropMismatch.warnings.some(w => w.includes('Incompatible Crop') || w.includes('जुळत नाही')), 'Clear crop incompatibility explanation');

console.log('\n6. Testing Ranking & Buyer Discovery Integration:');
const activeDemands = await BuyerService.getActiveDemands('Tomato');
assert(activeDemands.length > 0, 'Active buyer demands retrieved for Tomato');

const rankedMatches = MatchingService.rankBuyersForLot(lotA, activeDemands, 'Nashik');
assert(rankedMatches.length > 0, 'Ranked buyer matches found for farmer lot');
assert(rankedMatches[0].matchScore >= rankedMatches[rankedMatches.length - 1].matchScore, 'Matches are strictly ranked in descending order');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 6 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
