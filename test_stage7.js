/**
 * KisanTrust - Stage 7 Automated Verification Suite
 * Connected Ecosystem: Role-Based Access Control, Admin Portal, Moderation Queues,
 * Trust System, Audit Trail, Post-Transaction Ratings & Notification Engine
 */

import { AuthService, DEMO_ACCOUNTS } from './src/services/authService.js';
import { User, FarmerProfile, BuyerProfileRecord, USER_ROLES, ACCOUNT_STATUS, VERIFICATION_STATUS } from './src/models/User.js';
import { VerificationService } from './src/services/verificationService.js';
import { LotModerationService } from './src/services/lotModerationService.js';
import { RatingService } from './src/services/ratingService.js';
import { RiskService } from './src/services/riskService.js';
import { AuditService } from './src/services/auditService.js';
import { NotificationService } from './src/services/notificationService.js';
import { AnalyticsService } from './src/services/analyticsService.js';
import { DigitalAgriculturalLot } from './src/models/Lot.js';
import { FarmerRatingRecord, BuyerRatingRecord } from './src/models/Rating.js';
import { RISK_FLAG_TYPES } from './src/models/RiskFlag.js';
import { AUDIT_ACTIONS } from './src/models/AuditLog.js';
import { NOTIFICATION_TYPES } from './src/models/Notification.js';

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

console.log('🌱 Starting KisanTrust Stage 7 Automated Verification Suite...\n');

async function runStage7Tests() {
    // ==========================================
    // 1. Role-Based Access Control & User Models
    // ==========================================
    console.log('1. Testing Role-Based Access Control (RBAC) & Security Boundaries:');

    assert(USER_ROLES.FARMER === 'farmer', 'Farmer role defined');
    assert(USER_ROLES.BUYER === 'buyer', 'Buyer role defined');
    assert(USER_ROLES.ADMIN === 'admin', 'Admin role defined');
    assert(USER_ROLES.SUPER_ADMIN === 'super_admin', 'Super Admin role defined');

    // Test Farmer Profile separation (Private vs Public)
    const farmerUser = new User({
        userId: 'TEST-FARMER-01',
        name: 'दत्तात्रेय पाटील',
        role: USER_ROLES.FARMER,
        email: 'dattatrey@gmail.com',
        phone: '9822112233'
    });
    const farmerProfile = new FarmerProfile({
        userId: farmerUser.userId,
        name: farmerUser.name,
        phone: farmerUser.phone,
        aadhaarNumber: '1234-5678-9012',
        landRecordGatNumber: 'GAT-142',
        village: 'Niphad',
        district: 'Nashik',
        farmSizeAcres: 4.5,
        primaryCrops: ['Tomato', 'Onion']
    });

    const publicFarmerView = farmerProfile.toPublicView();
    assert(publicFarmerView.name === farmerUser.name, 'Public farmer view shows name');
    assert(publicFarmerView.village === 'Niphad', 'Public farmer view shows village');
    assert(publicFarmerView.aadhaarNumber === undefined, 'Public farmer view strictly hides Aadhaar number (Privacy Boundary)');
    assert(publicFarmerView.landRecordGatNumber === undefined, 'Public farmer view strictly hides Land Record identifier');

    // Test Buyer Profile separation (Private vs Public)
    const buyerProfile = new BuyerProfileRecord({
        userId: 'TEST-BUYER-01',
        companyName: 'सह्याद्री फूड्स प्रा. लि.',
        buyerType: 'Food Processor',
        gstin: '27AABCS1429B1Z',
        panNumber: 'AABCS1429B',
        contactPerson: 'अमित जोशी',
        contactPhone: '9822334455',
        hubLocation: 'Nashik Agro Park'
    });
    const publicBuyerView = buyerProfile.toPublicView();
    assert(publicBuyerView.companyName === 'सह्याद्री फूड्स प्रा. लि.', 'Public buyer view displays company name');
    assert(publicBuyerView.gstin === '27AABCS1429B1Z', 'Public buyer view displays GSTIN for trust');
    assert(publicBuyerView.panNumber === undefined, 'Public buyer view strictly hides internal PAN number');

    // Test RBAC Check Functions
    const adminUser = new User({ userId: 'ADM-01', name: 'पूजा देशमुख', role: USER_ROLES.ADMIN });
    const superAdminUser = new User({ userId: 'SADM-01', name: 'विक्रम शिंदे', role: USER_ROLES.SUPER_ADMIN });

    assert(AuthService.hasAdminPrivileges(adminUser) === true, 'Admin has admin privileges');
    assert(AuthService.hasAdminPrivileges(superAdminUser) === true, 'Super Admin has admin privileges');
    assert(AuthService.hasAdminPrivileges(farmerUser) === false, 'Farmer does not have admin privileges');
    assert(AuthService.isSuperAdmin(superAdminUser) === true, 'Super Admin is recognized');
    assert(AuthService.isSuperAdmin(adminUser) === false, 'Ordinary Admin is not Super Admin');

    // ==========================================
    // 2. Farmer & Buyer Verification Workflows
    // ==========================================
    console.log('\n2. Testing Verification Workflows & User Suspensions (VerificationService):');

    await VerificationService.submitFarmerProfile(farmerProfile);
    let farmerQueue = await VerificationService.getFarmerVerificationQueue();
    assert(farmerQueue.some(f => f.userId === farmerProfile.userId), 'New farmer profile queued for verification');

    // Test Request Changes
    await VerificationService.requestFarmerChanges(farmerProfile.userId, 'कृपया स्पष्ट ७/१२ उतारा अपलोड करा.');
    let updatedFarmer = await VerificationService.getUserById(farmerProfile.userId);
    assert(updatedFarmer.verificationStatus === VERIFICATION_STATUS.CHANGES_REQUIRED, 'Farmer status transitioned to CHANGES_REQUIRED');

    // Test Approve Farmer
    await VerificationService.approveFarmer(farmerProfile.userId);
    updatedFarmer = await VerificationService.getUserById(farmerProfile.userId);
    assert(updatedFarmer.verificationStatus === VERIFICATION_STATUS.VERIFIED, 'Farmer successfully verified and approved');

    // Test User Suspension & Reactivation
    await VerificationService.suspendUser(farmerProfile.userId, 'Dispute non-compliance');
    updatedFarmer = await VerificationService.getUserById(farmerProfile.userId);
    assert(updatedFarmer.accountStatus === ACCOUNT_STATUS.SUSPENDED, 'User account successfully suspended');

    await VerificationService.reactivateUser(farmerProfile.userId);
    updatedFarmer = await VerificationService.getUserById(farmerProfile.userId);
    assert(updatedFarmer.accountStatus === ACCOUNT_STATUS.ACTIVE, 'User account successfully reactivated');

    // Test Buyer Verification
    await VerificationService.submitBuyerProfile(buyerProfile);
    let buyerQueue = await VerificationService.getBuyerVerificationQueue();
    assert(buyerQueue.some(b => b.userId === buyerProfile.userId), 'New buyer profile queued for verification');

    await VerificationService.approveBuyer(buyerProfile.userId);
    let updatedBuyer = await VerificationService.getUserById(buyerProfile.userId);
    assert(updatedBuyer.verificationStatus === VERIFICATION_STATUS.VERIFIED, 'Buyer successfully verified and approved');

    // ==========================================
    // 3. Lot Moderation & Automated Pre-Check
    // ==========================================
    console.log('\n3. Testing Automated Lot Pre-Checks & Moderation Queue (LotModerationService):');

    const validLot = new DigitalAgriculturalLot({
        lotId: 'LOT-TEST-701',
        cropType: 'Tomato',
        quantity: 1500,
        overallQualityGrade: 'Grade A',
        freshnessScore: 92,
        harvestDate: '2026-08-31',
        exteriorPhotos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg']
    });

    const preCheckResult = await LotModerationService.preCheckLot(validLot);
    assert(preCheckResult.passed === true, 'Automated pre-check passed for valid lot');
    assert(preCheckResult.score >= 80, `Pre-check score is high (${preCheckResult.score}/100)`);

    // Test Pre-Check Rejection on missing data
    const invalidLotData = {
        lotId: 'LOT-TEST-702',
        cropType: '',
        quantity: 0,
        exteriorPhotos: []
    };
    const invalidPreCheck = await LotModerationService.preCheckLot(invalidLotData);
    assert(invalidPreCheck.passed === false, 'Automated pre-check rejected invalid lot');
    assert(invalidPreCheck.errors.length >= 2, 'Pre-check identified missing crop and quantity errors');

    // Test Submission and Moderation
    await LotModerationService.submitLotForVerification(validLot);
    let reviewQueue = await LotModerationService.getLotsForReview();
    assert(reviewQueue.some(l => l.lotId === validLot.lotId), 'Submitted lot is in review queue');

    // Test Request Changes
    await LotModerationService.requestLotChanges(validLot.lotId, 'फोटो अधिक स्पष्ट प्रकाशात घ्या.');
    let moderatedLot = await LotModerationService.getLotById(validLot.lotId);
    assert(moderatedLot.moderationStatus === 'CHANGES_REQUIRED', 'Lot moderation status set to CHANGES_REQUIRED');

    // Test Publish Approved Lot
    await LotModerationService.publishLot(validLot.lotId);
    moderatedLot = await LotModerationService.getLotById(validLot.lotId);
    assert(moderatedLot.moderationStatus === 'APPROVED', 'Lot moderation status set to APPROVED');
    assert(moderatedLot.status === 'PUBLISHED', 'Lot status set to PUBLISHED');

    // ==========================================
    // 4. Post-Transaction Bidirectional Ratings
    // ==========================================
    console.log('\n4. Testing Bidirectional Post-Transaction Ratings (RatingService):');

    const farmerRating = new FarmerRatingRecord({
        transactionId: 'TXN-701',
        farmerId: 'FARMER-NIPHAD-001',
        buyerId: 'BUYER-001',
        produceQualityScore: 5,
        quantityAccuracyScore: 5,
        packagingScore: 4,
        deliveryScore: 5,
        comments: 'उत्कृष्ट गुणवत्ता, ग्रेड A माल.'
    });

    assert(farmerRating.calculateWeightedScore() >= 4.5, `Farmer weighted score computed (${farmerRating.calculateWeightedScore()}/5.0)`);
    await RatingService.submitFarmerRating(farmerRating);

    const farmerRatingSummary = await RatingService.getFarmerRatingSummary('FARMER-NIPHAD-001');
    assert(farmerRatingSummary.averageRating >= 4.0, `Farmer average rating is ${farmerRatingSummary.averageRating}/5.0`);
    assert(farmerRatingSummary.totalReviews >= 1, 'Farmer total reviews incremented');

    const buyerRating = new BuyerRatingRecord({
        transactionId: 'TXN-701',
        buyerId: 'BUYER-001',
        farmerId: 'FARMER-NIPHAD-001',
        paymentTimelinessScore: 5,
        communicationScore: 5,
        reliabilityScore: 5,
        comments: 'वेळेत पूर्ण पेमेंट केले.'
    });

    assert(buyerRating.calculateWeightedScore() === 100, `Buyer weighted score computed (${buyerRating.calculateWeightedScore()}/100)`);
    await RatingService.submitBuyerRating(buyerRating);

    const buyerTrustSummary = await RatingService.getBuyerTrustScoreSummary('BUYER-001');
    assert(buyerTrustSummary.trustScore >= 90, `Buyer trust score computed (${buyerTrustSummary.trustScore}/100)`);
    assert(buyerTrustSummary.tier === 'HIGHLY_TRUSTED', 'Buyer categorized as HIGHLY_TRUSTED');

    // ==========================================
    // 5. Fraud Detection & Risk Flags
    // ==========================================
    console.log('\n5. Testing Risk & Fraud Detection Center (RiskService):');

    const flag = await RiskService.flagDuplicateImages({
        lotId: 'LOT-999',
        farmerId: 'FARMER-999',
        duplicateLotId: 'LOT-101',
        confidenceScore: 0.95
    });

    assert(flag.flagType === 'DUPLICATE_IMAGES' || flag.flagType === RISK_FLAG_TYPES.DUPLICATE_IMAGES.code, 'Duplicate image risk flag created');
    assert(flag.severity === 'HIGH', 'Duplicate image flagged with HIGH severity');

    let activeFlags = await RiskService.getActiveRiskFlags();
    assert(activeFlags.some(f => f.flagId === flag.flagId), 'Risk flag retrieved from active queue');

    await RiskService.resolveRiskFlag(flag.flagId, 'Verified legitimate distinct batch');
    activeFlags = await RiskService.getActiveRiskFlags();
    assert(!activeFlags.some(f => f.flagId === flag.flagId), 'Resolved risk flag cleared from active queue');

    // ==========================================
    // 6. Audit Logging & In-App Notifications
    // ==========================================
    console.log('\n6. Testing Tamper-Proof Audit Logging & In-App Notification Dispatch:');

    await AuditService.logAction({
        action: AUDIT_ACTIONS.APPROVE_LOT,
        performedBy: 'ADM-01',
        performedByName: 'पूजा देशमुख',
        targetEntityType: 'LOT',
        targetEntityId: 'LOT-TEST-701',
        previousStatus: 'PENDING_REVIEW',
        newStatus: 'APPROVED',
        reason: 'Passed 4-angle visual inspection and AI quality validation'
    });

    const recentLogs = await AuditService.getAuditLogs(10);
    const createdLog = recentLogs.find(l => l.targetEntityId === 'LOT-TEST-701' || l.targetId === 'LOT-TEST-701') || recentLogs[0];
    assert(recentLogs.length >= 1, 'Audit log recorded and retrieved');
    assert(createdLog && (createdLog.action === AUDIT_ACTIONS.APPROVE_LOT || createdLog.action === 'LOT_APPROVED'), 'Audit log preserves action type');
    assert(createdLog && (createdLog.performedByName === 'पूजा देशमुख' || createdLog.adminName === 'पूजा देशमुख'), 'Audit log preserves admin identity');

    // Notification Tests
    await NotificationService.sendNotification({
        userId: farmerUser.userId,
        type: NOTIFICATION_TYPES.VERIFICATION_UPDATE,
        title: 'खाते पडताळणी मंजूर',
        message: 'अभिनंदन! आपले शेतकरी खाते सत्यापित झाले आहे.'
    });

    const userNotifs = await NotificationService.getUserNotifications(farmerUser.userId);
    assert(userNotifs.length >= 1, 'In-app notification delivered to user inbox');
    assert(userNotifs[0].read === false, 'Notification is initially unread');

    const unreadCount = await NotificationService.getUnreadCount(farmerUser.userId);
    assert(unreadCount >= 1, `Unread badge count is ${unreadCount}`);

    await NotificationService.markAllAsRead(farmerUser.userId);
    const zeroUnread = await NotificationService.getUnreadCount(farmerUser.userId);
    assert(zeroUnread === 0, 'All notifications marked as read');

    // ==========================================
    // 7. Platform Analytics Overview
    // ==========================================
    console.log('\n7. Testing Platform Operational Analytics (AnalyticsService):');

    const metrics = await AnalyticsService.getPlatformOverviewMetrics();
    assert(typeof metrics.pendingFarmerVerifications === 'number', 'Aggregates pending farmer verifications');
    assert(typeof metrics.pendingBuyerVerifications === 'number', 'Aggregates pending buyer verifications');
    assert(typeof metrics.lotsAwaitingReview === 'number', 'Aggregates lots awaiting review');
    assert(typeof metrics.activeTransactionsCount === 'number', 'Aggregates active transactions count');
    assert(typeof metrics.openDisputes === 'number', 'Aggregates open disputes count');

    console.log('\n==========================================');
    console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
    if (failed === 0) {
        console.log('🎉 ALL STAGE 7 CONNECTED ECOSYSTEM & ADMIN PORTAL TESTS PASSED SUCCESSFULLY!\n');
    } else {
        console.error(`⚠️ ${failed} tests failed in Stage 7 suite.\n`);
        process.exit(1);
    }
}

runStage7Tests().catch(err => {
    console.error('Stage 7 Test Suite Execution Error:', err);
    process.exit(1);
});
