/**
 * AgriLink - Phase 8 Automated Verification Suite
 * Tests Trust & Verification Enhancement:
 * Farmer Verification (Aadhaar, Land Record), Buyer Verification (GSTIN, License, Payment History),
 * Trust Score 5-Factor Breakdown, Verified Produce Badges, and Transparent Trust Signals.
 */

import { TrustScoreService, TRUST_TIERS } from '../src/services/trustScoreService.js';
import { VerificationService } from '../src/services/verificationService.js';
import { RatingService } from '../src/services/ratingService.js';
import { FarmerProfile, BuyerProfileRecord, VERIFICATION_STATUS } from '../src/models/User.js';
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

console.log('🌱 Starting AgriLink Phase 8 Automated Verification Suite...\n');

console.log('1. Testing Farmer Verification Badges & Credentials:');
const verifiedFarmer = new FarmerProfile({
    userId: 'FARMER-NIPHAD-001',
    name: 'रमेश मारुती पाटील',
    village: 'Niphad',
    district: 'Nashik',
    verified: true,
    verificationStatus: VERIFICATION_STATUS.VERIFIED,
    totalTransactionsCompleted: 18,
    farmerRating: 4.9
});

const publicFarmer = verifiedFarmer.getPublicProfile();
assert(publicFarmer.verificationStatus === VERIFICATION_STATUS.VERIFIED, 'Farmer verified status is active');
assert(publicFarmer.farmerRating === 4.9, 'Farmer verified rating is 4.9/5.0');
assert(publicFarmer.isEstablished === true, 'Farmer is categorized as Established (>3 deals)');

console.log('\n2. Testing Farmer Trust Score Breakdown (calculateFarmerTrustScore):');
const farmerTrust = TrustScoreService.calculateFarmerTrustScore({
    aadhaarVerified: true,
    landRecordVerified: true,
    verificationStatus: 'VERIFIED',
    produceQualityAccuracy: 96,
    totalLotsSold: 18,
    farmerRating: 4.9
});

assert(farmerTrust.overallScore >= 90, `Farmer trust score in Highly Trusted tier (${farmerTrust.overallScore}/100)`);
assert(farmerTrust.tier === 'Highly Trusted', `Farmer tier is ${farmerTrust.tier}`);
assert(farmerTrust.factorBreakdown.idVerification.score === 100, 'Aadhaar + 7/12 Land Record awarded 100%');
assert(farmerTrust.factorBreakdown.qualityAccuracy.score === 96, 'Produce quality grading accuracy is 96%');
assert(farmerTrust.factorBreakdown.fulfillmentRate.score === 98, 'Fulfillment rate is 98%');

console.log('\n3. Testing Buyer Verification & Trust Breakdown (calculateAgriLinkScore):');
const buyerProfile = new BuyerProfileRecord({
    userId: 'BUYER-SAHYADRI-01',
    companyName: 'Sahyadri Agro Processing Hub',
    buyerType: 'Food Processor',
    gstin: '27AABCS1429B1Z',
    verified: true,
    verificationStatus: VERIFICATION_STATUS.VERIFIED,
    documentsVerified: true,
    onTimePaymentPercentage: 98.5,
    avgPaymentDelayDays: 0.2,
    totalTransactionsCompleted: 142,
    totalDisputesRaised: 1,
    defaultedTransactions: 0,
    farmerRating: 4.9
});

const buyerTrust = TrustScoreService.calculateAgriLinkScore(buyerProfile);
assert(buyerTrust.overallScore >= 90, `Buyer achieved Highly Trusted score (${buyerTrust.overallScore}/100)`);
assert(buyerTrust.tier === 'Highly Trusted', 'Buyer categorized as Highly Trusted');
assert(buyerTrust.metrics.onTimePaymentPercentage === 98.5, 'On-time payment percentage is 98.5%');
assert(buyerTrust.metrics.successfulTransactionsCount === 142, '142 successful transactions verified');
assert(buyerTrust.metrics.disputeCount === 1, 'Dispute history accurately tracked (1 dispute)');

const bFb = buyerTrust.factorBreakdown;
assert(bFb.verification.weight === '20%', 'Document verification weighted at 20%');
assert(bFb.completion.weight === '25%', 'Deal completion weighted at 25%');
assert(bFb.paymentReliability.weight === '25%', 'On-time payment weighted at 25%');
assert(bFb.disputeFreeRatio.weight === '15%', 'Dispute-free ratio weighted at 15%');
assert(bFb.farmerSatisfaction.weight === '15%', 'Farmer satisfaction weighted at 15%');

console.log('\n4. Testing Unverified / New Buyer Trust Scoring (Caution Tier):');
const newBuyer = new BuyerProfileRecord({
    userId: 'BUYER-NEW-01',
    companyName: 'New Trader Hub',
    verified: false,
    verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION,
    documentsVerified: false,
    onTimePaymentPercentage: 60,
    avgPaymentDelayDays: 5,
    totalTransactionsCompleted: 2,
    totalDisputesRaised: 1,
    farmerRating: 3.2
});

const newBuyerTrust = TrustScoreService.calculateAgriLinkScore(newBuyer);
assert(newBuyerTrust.overallScore < 70, `Unverified buyer receives caution score: ${newBuyerTrust.overallScore}/100`);
assert(newBuyerTrust.tier === 'Caution' || newBuyerTrust.tier === 'Moderate Risk', `Assigned appropriate risk tier: ${newBuyerTrust.tier}`);

console.log('\n5. Testing Verified Produce Badge (AI Quality Checked Lot):');
const verifiedLot = new DigitalAgriculturalLot({
    lotId: 'LOT-NIPHAD-AI-01',
    cropType: 'Tomato',
    variety: 'Himsona Hybrid',
    quantity: 1000,
    overallQualityGrade: 'Grade A',
    freshnessScore: 95
});

assert(verifiedLot.verifiedProduceBadge !== undefined, 'Verified produce badge attached to lot');
assert(verifiedLot.verifiedProduceBadge.isAiQualityChecked === true, 'Flagged as AI Quality Checked');
assert(verifiedLot.verifiedProduceBadge.visualGrade === 'Grade A', 'Certified Grade A badge');
assert(verifiedLot.verifiedProduceBadge.freshnessScore === 95, '95% Freshness verified');
assert(verifiedLot.toFirestore().verifiedProduceBadge !== undefined, 'toFirestore preserves verified produce badge');

console.log('\n6. Testing Verification Workflow Engine (VerificationService):');
const pendingQueue = await VerificationService.getFarmerVerificationQueue();
assert(Array.isArray(pendingQueue), 'Farmer verification queue retrieved');

const buyerQueue = await VerificationService.getBuyerVerificationQueue();
assert(Array.isArray(buyerQueue), 'Buyer verification queue retrieved');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 8 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
