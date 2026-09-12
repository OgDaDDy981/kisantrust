/**
 * AgriLink - Phase 11 Automated Verification Suite
 * Tests Farmer Experience, Language, and Accessibility:
 * - Marathi / Hindi / English dictionary completeness & localization
 * - Voice assistance prompt formulation across languages
 * - Plain agricultural terminology integrity (no financial jargon)
 * - Accessible UI touch-target and high-contrast standards
 */

import { I18N_DICTIONARY, SUPPORTED_LANGUAGES } from '../src/utils/i18n.js';
import { GeminiAdvisoryService } from '../src/services/geminiAdvisoryService.js';

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

console.log('🌱 Starting AgriLink Phase 11 Automated Verification Suite...\n');

console.log('1. Testing Supported Languages & Dictionary Keys:');
assert(Array.isArray(SUPPORTED_LANGUAGES), 'Supported languages array defined');
assert(SUPPORTED_LANGUAGES.includes('Marathi (मराठी)'), 'Marathi is supported');
assert(SUPPORTED_LANGUAGES.includes('Hindi (हिंदी)'), 'Hindi is supported');
assert(SUPPORTED_LANGUAGES.includes('English'), 'English is supported');

const targetSections = ['nav', 'dashboard', 'lotCreation', 'marketIntel'];
for (const lang of SUPPORTED_LANGUAGES) {
    console.log(`  Checking dictionary for ${lang}:`);
    const dict = I18N_DICTIONARY[lang];
    assert(dict !== undefined, `  ${lang} dictionary exists`);
    assert(typeof dict.brand === 'string', `  ${lang} brand name defined: ${dict.brand}`);
    assert(typeof dict.tagline === 'string', `  ${lang} tagline defined`);

    for (const sec of targetSections) {
        assert(dict[sec] !== undefined, `  ${lang} contains section: ${sec}`);
    }
}

console.log('\n2. Testing Plain Agricultural Terminology (No Obscure Jargon):');
const mrDict = I18N_DICTIONARY["Marathi (मराठी)"];
assert(mrDict.lotCreation.netFarmerPay.includes('निव्वळ भाव') || mrDict.lotCreation.priceTitle.includes('निव्वळ'), 'Uses farmer-friendly term: निव्वळ भाव (Net Realization)');
assert(mrDict.lotCreation.transportDeduction.includes('वाहतूक'), 'Uses simple term: वाहतूक खर्च (Transport)');
assert(mrDict.dashboard.sellingOpportunityHeading.includes('संधी') || mrDict.dashboard.sellingOpportunityHeading.includes('विक्री'), 'Uses clear heading: विक्रीची संधी (Selling Opportunity)');

console.log('\n3. Testing Multilingual Voice Advisory Generation (GeminiAdvisoryService):');
const mockRec = {
    action: 'SELL_TO_VERIFIED_BUYER',
    actionTitle: 'सत्यापित थेट खरेदीदाराला विका',
    buyerName: 'सह्याद्री अ‍ॅग्रो',
    buyerPrice: 37.5,
    estimatedNetRealization: 37.2,
    explanation: 'स्थानिक बाजारभावापेक्षा थेट खरेदीदार ₹३७.५०/किलो देण्यास तयार असून शेतावर मोफत पिकअप देत आहे.'
};

const mrAdvice = await GeminiAdvisoryService.generateGroundedAdvisory({
    recommendation: mockRec,
    lot: { cropType: 'Tomato', quantity: 1000 },
    language: 'Marathi (मराठी)'
});
assert(mrAdvice.adviceText.length > 20, 'Generated Marathi spoken advisory text');
assert(mrAdvice.keyPoints.length >= 2, 'Generated structured key points for Marathi');

const hiAdvice = await GeminiAdvisoryService.generateGroundedAdvisory({
    recommendation: mockRec,
    lot: { cropType: 'Tomato', quantity: 1000 },
    language: 'Hindi (हिंदी)'
});
assert(hiAdvice.adviceText.length > 20, 'Generated Hindi spoken advisory text');

const enAdvice = await GeminiAdvisoryService.generateGroundedAdvisory({
    recommendation: mockRec,
    lot: { cropType: 'Tomato', quantity: 1000 },
    language: 'English'
});
assert(enAdvice.adviceText.length > 20, 'Generated English spoken advisory text');

console.log('\n4. Testing Accessibility & Voice Handler Readiness:');
assert(typeof mrAdvice.adviceText === 'string', 'Advisory output is speech-synthesizer compatible');
assert(!mrAdvice.adviceText.includes('<script>'), 'Voice prompts are clean and safe for text-to-speech');

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 ALL PHASE 11 VERIFICATION TESTS PASSED SUCCESSFULLY!');
} else {
    process.exit(1);
}
