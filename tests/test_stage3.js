/**
 * KisanTrust - Stage 3 Automated Verification Suite
 * Buyer Profiles, Demands, Deterministic Matching Engine & Multi-Round Negotiations
 */

import { BuyerProfile, BuyerDemand, NegotiationRecord } from '../src/models/Buyer.js';
import { BuyerService } from '../src/services/buyerService.js';
import { MatchingService } from '../src/services/matchingService.js';
import { NegotiationService } from '../src/services/negotiationService.js';
import { DigitalAgriculturalLot } from '../src/models/Lot.js';

console.log('🌱 Starting KisanTrust Stage 3 Automated Verification Suite...\n');

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
// 1. Buyer & Demand Domain Model Tests
// ==========================================
console.log('1. Testing Buyer Domain Models:');
const profile = new BuyerProfile({
    companyName: 'Sahyadri Agro Processing',
    companyType: 'Food Processor',
    reliabilityScore: 4.9
});
assert(profile.companyType === 'Food Processor', 'Buyer company type is Food Processor');
assert(profile.reliabilityScore === 4.9, 'Buyer reliability score preserved');

const demand = new BuyerDemand({
    cropType: 'Tomato',
    minQualityGrade: 'Grade A',
    requiredQuantityKg: 10000,
    offeredPricePerKg: 37.5,
    pickupProvided: true
});
assert(demand.cropType === 'Tomato', 'Demand crop type is Tomato');
assert(demand.pickupProvided === true, 'Pickup provided flag preserved');
assert(demand.status === 'ACTIVE', 'Initial demand status is ACTIVE');

// ==========================================
// 2. Deterministic Matching Engine Tests
// ==========================================
console.log('\n2. Testing Deterministic Matching Engine (MatchingService):');
const lotTomatoA = new DigitalAgriculturalLot({
    cropType: 'Tomato',
    overallQualityGrade: 'Grade A',
    quantity: 1000,
    freshnessScore: 94
});

const lotOnionA = new DigitalAgriculturalLot({
    cropType: 'Onion',
    overallQualityGrade: 'Grade A',
    quantity: 1000,
    freshnessScore: 90
});

// Test Hard Gate: Incompatible Crop
const evalMismatch = MatchingService.evaluateMatch(lotOnionA, demand, 'Nashik');
assert(evalMismatch.matchScore === 0, 'Incompatible crop yields 0% match score');
assert(evalMismatch.isCompatible === false, 'Flagged as incompatible');
assert(evalMismatch.warnings[0].includes('जुळत नाही'), 'Provides explainable incompatibility reason');

// Test Grade A Match with Farm-gate Pickup
const evalGradeA = MatchingService.evaluateMatch(lotTomatoA, demand, 'Nashik');
assert(evalGradeA.matchScore >= 80, `Grade A lot matches Grade A demand with high score (${evalGradeA.matchScore}%)`);
assert(evalGradeA.transportCostPerKg === 0, 'Farm-gate pickup sets transport deduction to ₹0.00/kg');
assert(evalGradeA.estimatedNetRealization > 35, `Net realization is high (₹${evalGradeA.estimatedNetRealization}/kg)`);
assert(evalGradeA.reasons.length >= 2, 'Generates explainable match reasons');
assert(typeof evalGradeA.factorBreakdown.quality === 'number', 'Includes factor breakdown');

// Test Grade B Lot against Grade A Demand (Penalty & Warning)
const lotTomatoB = new DigitalAgriculturalLot({
    cropType: 'Tomato',
    overallQualityGrade: 'Grade B',
    quantity: 1000,
    freshnessScore: 78
});
const evalGradeB = MatchingService.evaluateMatch(lotTomatoB, demand, 'Nashik');
assert(evalGradeB.matchScore < evalGradeA.matchScore, 'Grade B lot gets lower match score than Grade A');
assert(evalGradeB.warnings.some(w => w.includes('Grade B')), 'Generates quality mismatch warning');

// ==========================================
// 3. Buyer Service & Demand Management Tests
// ==========================================
console.log('\n3. Testing BuyerService Persistence & Ranking:');
await BuyerService.initializeBuyerData();

const createdDemand = await BuyerService.createBuyerDemand({
    buyerName: 'BigBasket Wholesale Hub',
    companyType: 'Retailer',
    cropType: 'Potato',
    requiredQuantityKg: 15000,
    minQualityGrade: 'Grade B',
    offeredPricePerKg: 24.0,
    preferredLocation: 'Pune / Nashik',
    maxSourcingDistanceKm: 150
});
assert(createdDemand.demandId.startsWith('DEM-'), 'Buyer demand created with persistent ID');

const activeDemands = await BuyerService.getActiveDemands('Potato');
assert(activeDemands.some(d => d.demandId === createdDemand.demandId), 'Newly created demand retrieved from Firestore collection');

const rankedMatches = await BuyerService.matchBuyersForLot(lotTomatoA, 'Nashik');
assert(Array.isArray(rankedMatches) && rankedMatches.length >= 2, 'Ranked multiple active buyer opportunities');
assert(rankedMatches[0].matchScore >= rankedMatches[1].matchScore, 'Buyers are sorted in descending order of Opportunity Compatibility Score');

// ==========================================
// 4. Multi-Round Negotiation Service Tests
// ==========================================
console.log('\n4. Testing Multi-Round Negotiation & Automatic Transaction Creation:');
const neg = await NegotiationService.initiateNegotiation({
    lot: lotTomatoA,
    demand: demand,
    proposedPrice: 38.0,
    notes: 'Farmer requested ₹38/kg for certified export-grade lot.'
});

assert(neg.negotiationId.startsWith('NEG-'), 'Negotiation record created with unique ID');
assert(neg.status === 'FARMER_COUNTEROFFER', 'Initial state is FARMER_COUNTEROFFER');
assert(neg.currentAgreedPrice === 38.0, 'Farmer proposed price is ₹38.00/kg');
assert(neg.history.length === 1, 'History contains initial proposal');

// Submit Buyer Counter Revision
const revisedNeg = await NegotiationService.submitCounterOffer(
    neg.negotiationId,
    'BUYER',
    37.5,
    'Buyer revised offer to ₹37.50/kg with guaranteed farm-gate pickup.'
);
assert(revisedNeg.status === 'BUYER_REVISION', 'Negotiation status updated to BUYER_REVISION');
assert(revisedNeg.currentAgreedPrice === 37.5, 'Agreed price updated to ₹37.50/kg');
assert(revisedNeg.history.length === 2, 'History tracks multi-round interaction');

// Accept Offer -> Automatically Creates Transaction & Settles
const acceptResult = await NegotiationService.acceptOffer(neg.negotiationId, 'FARMER');
assert(acceptResult.negotiation.status === 'ACCEPTED', 'Negotiation status transitioned to ACCEPTED');
assert(acceptResult.transaction !== null, 'Official TransactionRecord created automatically');
assert(acceptResult.transaction.agreedPricePerKg === 37.5, 'Transaction rate matches final agreed negotiation price');
assert(acceptResult.transaction.totalAmount === 37500, 'Total transaction amount calculated accurately (1000kg * ₹37.5 = ₹37,500)');
assert(acceptResult.transaction.paymentMilestone === 'ESCROW_LOCKED', 'Payment milestone set to ESCROW_LOCKED');

console.log(`\n==========================================`);
console.log(`Suite Completed: ${passedTests} passed, ${failedTests} failed.`);
if (failedTests === 0) {
    console.log(`🎉 ALL STAGE 3 VERIFICATION TESTS PASSED SUCCESSFULLY!`);
} else {
    process.exit(1);
}
