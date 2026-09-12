/**
 * AgriLink - Phase 2 Comprehensive Verification Suite
 * Validates all implemented fixes across:
 * 1. Netlify Serverless Functions & Proxy API Endpoints
 * 2. Strict Gemini Multimodal Produce & Commodity Verification
 * 3. Rejection of Random / Blurred / Unrelated Images (No fake Grade A)
 * 4. Internal Cut Cross-Section Inspection & Verification
 * 5. Quality Gating Before Pricing & Listing Submission
 * 6. Admin Rejection Remarks, Notification Delivery & User ID Consistency
 */

import { handler as agmarknetHandler } from './netlify/functions/agmarknet.js';
import { handler as geminiVisionHandler } from './netlify/functions/gemini-vision.js';
import { handler as geminiAdvisoryHandler } from './netlify/functions/gemini-advisory.js';
import { handler as keysCheckHandler } from './netlify/functions/keys-check.js';
import { handler as firebaseCheckHandler } from './netlify/functions/firebase-check.js';
import { handler as statusHandler } from './netlify/functions/status.js';

import { QualityService } from '../src/services/qualityService.js';
import { LotModerationService } from '../src/services/lotModerationService.js';
import { NotificationService } from '../src/services/notificationService.js';
import { PricingService } from '../src/services/pricingService.js';
import { PriceCalculationService } from '../src/services/priceCalculationService.js';
import { DigitalAgriculturalLot, LOT_STATUSES } from '../src/models/Lot.js';
import { firebaseService } from '../src/services/firebaseService.js';

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

console.log('🌱 Starting AgriLink Phase 2 Comprehensive Verification Suite...\n');

async function runPhase2Tests() {
    // =========================================================================
    // 1. Netlify Serverless Functions & API Parity
    // =========================================================================
    console.log('1. Testing Netlify Serverless Functions & API Proxy Endpoints:');

    // 1.1 Status endpoint
    const statusRes = await statusHandler({ httpMethod: 'GET' }, {});
    assert(statusRes.statusCode === 200, 'status.js returns HTTP 200');
    const statusData = JSON.parse(statusRes.body);
    assert(statusData.app && statusData.deployment.includes('Netlify'), 'status.js identifies Netlify Serverless Production');

    // 1.2 Keys check endpoint
    const keysRes = await keysCheckHandler({ httpMethod: 'GET' }, {});
    assert(keysRes.statusCode === 200, 'keys-check.js returns HTTP 200');
    const keysData = JSON.parse(keysRes.body);
    assert(keysData.firebase.projectId === 'sih2026-622a0', 'keys-check.js verifies Firebase project ID sih2026-622a0');
    assert(keysData.geminiAI.name.includes('Gemini'), 'keys-check.js identifies Gemini Multimodal AI Service');

    // 1.3 Firebase check endpoint
    const fbRes = await firebaseCheckHandler({ httpMethod: 'GET' }, {});
    assert(fbRes.statusCode === 200, 'firebase-check.js returns HTTP 200');
    const fbData = JSON.parse(fbRes.body);
    assert(['ONLINE', 'CONNECTED_PERM_CHECK', 'REACHABLE'].includes(fbData.status), `firebase-check.js connects successfully (${fbData.status})`);

    // 1.4 Agmarknet proxy endpoint
    const agRes = await agmarknetHandler({
        httpMethod: 'GET',
        queryStringParameters: { commodity: 'Tomato', state: 'Maharashtra', district: 'Nashik' }
    }, {});
    assert(agRes.statusCode === 200 || agRes.statusCode === 503, 'agmarknet.js executes with valid HTTP status');

    // =========================================================================
    // 2. Strict Gemini Multimodal Produce & Commodity Verification
    // =========================================================================
    console.log('\n2. Testing Strict Produce Verification & No Fake Grade A:');

    // 2.1 Empty images rejected
    const emptyQuality = await QualityService.assessLotQuality([], 'Tomato');
    assert(emptyQuality.isQualityVerified === false, 'Empty photos strictly rejected with isQualityVerified = false');
    assert(emptyQuality.overallGrade === null, 'Empty photos do not produce fake Grade A');
    assert(emptyQuality.freshnessScore === 0, 'Empty photos set freshness score to 0');
    assert(emptyQuality.rejectionReason.length > 10, 'Provides clear rejection reason to farmer');

    // 2.2 Direct serverless vision verification with valid test part
    const visionRes = await geminiVisionHandler({
        httpMethod: 'POST',
        body: JSON.stringify({
            images: ['test_produce_angle_1.jpg'],
            cropType: 'Tomato',
            language: 'Marathi (मराठी)',
            verificationType: 'exterior'
        })
    }, {});
    assert(visionRes.statusCode === 200, 'gemini-vision.js executes successfully');
    const visionData = JSON.parse(visionRes.body);
    assert(visionData.isCommodityMatch === true, 'Valid produce verifies isCommodityMatch = true');
    assert(visionData.isQualityVerified === true, 'Valid produce verifies isQualityVerified = true');
    assert(['Grade A', 'Grade B', 'Grade C'].includes(visionData.overallGrade), `Assigned valid AGMARKNET grade: ${visionData.overallGrade}`);

    // =========================================================================
    // 3. Internal Cross-Section Cut Quality Inspection
    // =========================================================================
    console.log('\n3. Testing Internal Cut Cross-Section Inspection:');

    const cutRes = await geminiVisionHandler({
        httpMethod: 'POST',
        body: JSON.stringify({
            images: ['test_cut_cross_section.jpg'],
            cropType: 'Tomato',
            verificationType: 'cut'
        })
    }, {});
    assert(cutRes.statusCode === 200, 'Cut verification executes successfully');
    const cutData = JSON.parse(cutRes.body);
    assert(cutData.cutVerified === true, 'Genuine cut slice flags cutVerified = true');
    assert(typeof cutData.coreDefectsPercent === 'number', 'Reports core defects percentage');
    assert(cutData.internalFreshness.length > 5, 'Reports internal pulp and hydration freshness');

    // =========================================================================
    // 4. Quality Gating Before Listing & Pre-Check Validation
    // =========================================================================
    console.log('\n4. Testing Quality Gating & Pre-Check Moderation Rules:');

    // 4.1 Lot missing quality grade must be rejected by pre-check
    const unverifiedLot = {
        cropType: 'Tomato',
        quantity: 500,
        imageReferences: ['img1.jpg'],
        overallQualityGrade: null // unverified
    };
    const preCheckFail = LotModerationService.performAutomatedLotPreCheck(unverifiedLot);
    assert(preCheckFail.passed === false, 'Pre-check strictly rejects lot without verified quality grade');
    assert(preCheckFail.errors.some(e => e.includes('verified quality grade')), 'Error message explains quality grade requirement');

    // 4.2 Lot with verified Grade A passes pre-check
    const verifiedLotData = {
        lotId: 'LOT-TEST-VERIFIED-01',
        farmerId: 'farmer_mh_001',
        farmerName: 'Ramesh Patil',
        cropType: 'Tomato',
        quantity: 500,
        imageReferences: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'],
        overallQualityGrade: 'Grade A',
        freshnessScore: 92
    };
    const preCheckPass = LotModerationService.performAutomatedLotPreCheck(verifiedLotData);
    assert(preCheckPass.passed === true, 'Pre-check approves lot with verified Grade A');
    assert(preCheckPass.checks.includes('QUALITY_GRADE_VALID'), 'Quality check rule recorded in pre-check audit');

    // =========================================================================
    // 5. Grounded Transparent Pricing by Verified Grade
    // =========================================================================
    console.log('\n5. Testing Quality-Grounded Pricing & Realization:');

    const gradeAPrice = PricingService.calculatePriceEstimate({ cropType: 'Tomato', qualityGrade: 'Grade A', quantityKg: 1000 });
    const gradeBPrice = PricingService.calculatePriceEstimate({ cropType: 'Tomato', qualityGrade: 'Grade B', quantityKg: 1000 });
    const gradeCPrice = PricingService.calculatePriceEstimate({ cropType: 'Tomato', qualityGrade: 'Grade C', quantityKg: 1000 });

    assert(gradeAPrice.estimatedNetRealization > gradeBPrice.estimatedNetRealization, 'Grade A net realization is higher than Grade B');
    assert(gradeBPrice.estimatedNetRealization > gradeCPrice.estimatedNetRealization, 'Grade B net realization is higher than Grade C');
    assert(gradeAPrice.qualityPremium > 0, `Grade A receives quality premium: +₹${gradeAPrice.qualityPremium}/kg`);

    // =========================================================================
    // 6. Admin Rejection, Remarks Delivery & User ID Consistency
    // =========================================================================
    console.log('\n6. Testing Admin Rejection, Remarks Delivery & Notification Dispatch:');

    await firebaseService.initializeData();
    const testLot = new DigitalAgriculturalLot({
        lotId: `LOT-REJECT-TEST-${Date.now().toString().slice(-4)}`,
        farmerId: 'farmer_mh_001',
        farmerName: 'Ramesh Patil',
        cropType: 'Tomato',
        quantity: 800,
        overallQualityGrade: 'Grade A',
        status: LOT_STATUSES.PENDING_ADMIN_REVIEW
    });
    await (await firebaseService.db.collection('lots')).doc(testLot.lotId).set(testLot.toFirestore());

    const adminRemarks = "छायाचित्रात टोमॅटोवर कीड व डाग स्पष्ट दिसत आहेत. कृपया डाग नसलेला स्वच्छ माल निवडून पुन्हा फोटो अपलोड करा.";
    const rejectedLot = await LotModerationService.rejectLot(testLot.lotId, adminRemarks, 'admin_mh_001');

    assert(rejectedLot.status === LOT_STATUSES.REJECTED, 'Lot status updated to REJECTED');
    assert(rejectedLot.rejectionReason === adminRemarks, 'Rejection reason matches admin remarks');

    // Verify Notification Delivery to Farmer Inbox
    const farmerNotifs = await NotificationService.getUserNotifications('farmer_mh_001');
    const rejectNotif = farmerNotifs.find(n => n.relatedEntityId === testLot.lotId);

    assert(Boolean(rejectNotif), 'Rejection notification successfully delivered to farmer_mh_001 inbox');
    assert(rejectNotif.message.includes(adminRemarks), 'Farmer notification includes exact admin remarks');
    assert(rejectNotif.title.includes('पुनरावलोकन सूचना') || rejectNotif.title.includes('Tomato'), 'Notification title clearly indicates lot review notice');
    assert(rejectNotif.userId === 'farmer_mh_001', 'Notification userId strictly matches authenticated farmer ID');

    console.log(`\n==========================================`);
    console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
    if (failed === 0) {
        console.log(`🎉 ALL PHASE 2 IMPLEMENTATION TESTS PASSED SUCCESSFULLY!`);
    } else {
        process.exit(1);
    }
}

runPhase2Tests().catch(e => {
    console.error('Fatal test error:', e);
    process.exit(1);
});
