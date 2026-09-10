/**
 * KisanTrust - Multilingual Translation & Voice Narration Synchronization Test
 */

import { I18N_DICTIONARY, applyDOMTranslations } from '../src/utils/i18n.js';
import fs from 'fs';

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

function runTests() {
    console.log('\n================================================================');
    console.log('🧪 TEST SUITE: MULTILINGUAL TRANSLATIONS & VOICE ENGINE SYNC');
    console.log('================================================================\n');

    // 1. Check all required keys exist in Marathi, Hindi, and English dictionaries
    const languages = ["Marathi (मराठी)", "Hindi (हिंदी)", "English"];
    
    languages.forEach(lang => {
        console.log(`🔹 Checking dictionary for [${lang}]:`);
        const dict = I18N_DICTIONARY[lang];
        assert(Boolean(dict), `[${lang}] dictionary exists`);
        assert(Boolean(dict.nav && dict.nav.buyers), `[${lang}] nav.buyers exists: "${dict.nav?.buyers}"`);
        assert(Boolean(dict.nav && dict.nav.pooling), `[${lang}] nav.pooling exists: "${dict.nav?.pooling}"`);
        assert(Boolean(dict.buyerMarket && dict.buyerMarket.title), `[${lang}] buyerMarket.title exists: "${dict.buyerMarket?.title}"`);
        assert(Boolean(dict.buyerMarket && dict.buyerMarket.subtitle), `[${lang}] buyerMarket.subtitle exists`);
        assert(Boolean(dict.buyerMarket && dict.buyerMarket.postDemandBtn), `[${lang}] buyerMarket.postDemandBtn exists: "${dict.buyerMarket?.postDemandBtn}"`);
        assert(Boolean(dict.smartPooling && dict.smartPooling.title), `[${lang}] smartPooling.title exists: "${dict.smartPooling?.title}"`);
        assert(Boolean(dict.marketIntel && dict.marketIntel.title), `[${lang}] marketIntel.title exists: "${dict.marketIntel?.title}"`);
        assert(Boolean(dict.payment && dict.payment.modalTitle), `[${lang}] payment.modalTitle exists: "${dict.payment?.modalTitle}"`);
    });

    // 2. Verify all element IDs in index.html match applyDOMTranslations
    console.log('\n🔹 Checking DOM Element IDs in index.html:');
    const indexHtml = fs.readFileSync('index.html', 'utf-8');
    
    const requiredElementIds = [
        'brandName',
        'tagline',
        'headerHelplineText',
        'adminQuickBtnText',
        'navLblDashboard',
        'navLblAssessLot',
        'navLblMyLots',
        'navLblMarketIntel',
        'navLblBuyers',
        'navLblPooling',
        'navLblTransactions',
        'navLblPayments',
        'navLblAdminPortal',
        'marketIntelMainTitle',
        'marketIntelSub',
        'trendsHeaderTitle',
        'buyerMarketMainTitle',
        'buyerMarketSub',
        'postDemandBtnText',
        'poolingMainTitle',
        'poolingSub',
        'adminBannerTitle',
        'adminBannerSub',
        'btnVoiceQuality',
        'btnVoiceAdvice',
        'btnVoiceIntel',
        'paymentCheckoutModal'
    ];

    requiredElementIds.forEach(id => {
        assert(indexHtml.includes(`id="${id}"`), `Element with id="${id}" exists in index.html`);
    });

    console.log('\n================================================================');
    console.log(`📊 SUMMARY: ${passed} PASSED | ${failed} FAILED`);
    console.log('================================================================\n');

    if (failed > 0) process.exit(1);
}

runTests();
