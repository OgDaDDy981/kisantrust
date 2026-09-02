/**
 * KisanTrust - Stage 1 Automated Verification Suite
 */

import { QualityService } from './src/services/qualityService.js';
import { PricingService } from './src/services/pricingService.js';
import { DigitalAgriculturalLot } from './src/models/Lot.js';
import { I18N_DICTIONARY, SUPPORTED_LANGUAGES } from './src/utils/i18n.js';
import { mockMandiBenchmarks, mockBuyerDemands, mockPoolingClusters } from './src/data/mockMandis.js';

console.log('🌱 Starting KisanTrust Stage 1 Automated Verification Suite...\n');

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
// 1. Digital Agricultural Lot Model Verification
// ==========================================
console.log('1. Testing DigitalAgriculturalLot Data Model:');
const sampleLot = new DigitalAgriculturalLot({
    lotId: 'LOT-TEST-001',
    farmerId: 'farmer_mh_001',
    farmerName: 'Ramesh Patil',
    cropType: 'Tomato',
    variety: 'Himsona',
    quantity: 500,
    unit: 'kg'
});

assert(sampleLot.lotId === 'LOT-TEST-001', 'Lot ID is preserved');
assert(sampleLot.farmerLocation.district === 'Nashik', 'Approximate privacy-safe location is present');
assert(sampleLot.overallQualityGrade === 'Grade A', 'Default quality grade is Grade A');
assert(sampleLot.status === 'LISTED', 'Initial status is LISTED');
const firestoreData = sampleLot.toFirestore();
assert(typeof firestoreData === 'object' && firestoreData.lotId === 'LOT-TEST-001', 'Serializes cleanly for Firestore');

// ==========================================
// 2. Quality Grading Service Verification
// ==========================================
console.log('\n2. Testing QualityService Normalized Output:');
const qualityAssessment = await QualityService.assessLotQuality(['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'], 'Tomato');
assert(qualityAssessment.freshnessScore >= 70 && qualityAssessment.freshnessScore <= 100, 'Freshness score is within valid range (0-100)');
assert(['Grade A', 'Grade B', 'Grade C'].includes(qualityAssessment.visualGrade), 'Visual grade is normalized (Grade A/B/C)');
assert(qualityAssessment.estimatedShelfLifeDays > 0, 'Estimated shelf life in days is calculated');

const cutAssessment = await QualityService.assessCutVerification('cut.jpg', 'Tomato');
assert(cutAssessment.cutVerified === true, 'Cut verification flags as verified');

// ==========================================
// 3. Transparent Pricing Architecture Verification
// ==========================================
console.log('\n3. Testing PricingService (Transparent Formula Verification):');
const priceResult = PricingService.calculatePriceEstimate({
    cropType: 'Tomato',
    qualityGrade: 'Grade A',
    quantityKg: 500,
    distanceKm: 35
});

assert(priceResult.baseMarketPrice === 34.0, 'Base market APMC price is 34.00');
assert(priceResult.qualityPremium === 3.4, 'Grade A premium (+10%) is 3.40');
assert(priceResult.demandPremium === 1.02, 'Demand index (+3%) is 1.02');
assert(priceResult.transportCost === 2.1, 'Transport cost (35km * 0.06) is 2.10');
assert(priceResult.storageCost === 0.40, 'Storage/handling cost is 0.40');

// Net formula check: Base + Quality + Demand - Transport - Storage
const expectedNet = Number((34.0 + 3.4 + 1.02 - 2.1 - 0.40).toFixed(2)); // 35.92
assert(priceResult.estimatedNetRealization === expectedNet, `Estimated Net Realization matches exact formula: ₹${expectedNet}/kg`);
assert(priceResult.totalLotValue === Number((expectedNet * 500).toFixed(2)), 'Total lot value calculated accurately');

// Grade C penalty check
const priceResultGradeC = PricingService.calculatePriceEstimate({
    cropType: 'Tomato',
    qualityGrade: 'Grade C',
    quantityKg: 500,
    distanceKm: 35
});
assert(priceResultGradeC.qualityPremium < 0, 'Grade C applies penalty rather than arbitrary bonus');
assert(priceResultGradeC.estimatedNetRealization < priceResult.estimatedNetRealization, 'Grade C net payout is lower than Grade A');

// ==========================================
// 4. Multilingual Dictionary Verification
// ==========================================
console.log('\n4. Testing Multilingual Dictionaries (Marathi, Hindi, English):');
assert(SUPPORTED_LANGUAGES.includes('Marathi (मराठी)'), 'Marathi is a priority supported language');
assert(SUPPORTED_LANGUAGES.includes('Hindi (हिंदी)'), 'Hindi is a priority supported language');
assert(SUPPORTED_LANGUAGES.includes('English'), 'English is a supported language');

for (const lang of SUPPORTED_LANGUAGES) {
    const dict = I18N_DICTIONARY[lang];
    assert(dict && dict.brand && dict.tagline, `Language '${lang}' has brand and tagline defined`);
    assert(dict.nav.dashboard && dict.nav.assessLot, `Language '${lang}' has navigation terms defined`);
}

// ==========================================
// 5. Seed Datasets Verification
// ==========================================
console.log('\n5. Testing Mock APMC Mandis, Buyers & Pooling Clusters:');
assert(mockMandiBenchmarks.length >= 4, 'Mandi benchmarks contain 4+ APMC mandis');
assert(mockBuyerDemands.length >= 3, 'Buyer demands contain 3+ verified buyers');
assert(mockPoolingClusters.length >= 2, 'Pooling clusters contain 2+ village hubs');

console.log(`\n==========================================`);
console.log(`Suite Completed: ${passedTests} passed, ${failedTests} failed.`);
if (failedTests === 0) {
    console.log(`🎉 ALL STAGE 1 VERIFICATION TESTS PASSED SUCCESSFULLY!`);
} else {
    process.exit(1);
}
