/**
 * AgriLink - Browser Bundle DOM Simulation Verification
 * Verifies that bundle.js executes cleanly in browser environments and that
 * language switching, view navigation, and sample loading work without errors.
 */

import fs from 'fs';
import path from 'path';

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

console.log('🌱 Starting AgriLink Standalone Browser Bundle Simulation...\n');

// Set up mock window and document environment
global.window = global;
const mockElements = {};
global.document = {
    readyState: 'complete',
    documentElement: { lang: 'mr' },
    body: { className: '', appendChild: () => {} },
    getElementById: (id) => {
        if (!mockElements[id]) {
            mockElements[id] = {
                id,
                style: {},
                classList: { add: () => {}, remove: () => {}, contains: () => false },
                value: '',
                textContent: '',
                innerHTML: '',
                placeholder: '',
                appendChild: () => {},
                addEventListener: () => {}
            };
        }
        return mockElements[id];
    },
    querySelectorAll: () => [],
    querySelector: () => ({ textContent: '', style: {} }),
    createElement: () => ({ style: {}, classList: { add: () => {} }, appendChild: () => {}, remove: () => {} }),
    addEventListener: () => {}
};
global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
};
global.scrollTo = () => {};
global.speechSynthesis = {
    cancel: () => {},
    speak: () => {},
    getVoices: () => [
        { lang: 'mr-IN', name: 'Marathi' },
        { lang: 'hi-IN', name: 'Hindi' },
        { lang: 'en-IN', name: 'English' }
    ]
};
global.SpeechSynthesisUtterance = function(text) {
    this.text = text;
};

try {
    const bundlePath = path.resolve('bundle.js');
    const bundleCode = fs.readFileSync(bundlePath, 'utf-8');
    
    // Evaluate bundle.js in the global scope
    const executeBundle = new Function(bundleCode);
    executeBundle();

    console.log('1. Testing Bundle Global Function Exports on window:');
    assert(typeof window.updateLanguage === 'function', 'window.updateLanguage is defined and callable');
    assert(typeof window.navigateTo === 'function', 'window.navigateTo is defined and callable');
    assert(typeof window.loadSampleCrop === 'function', 'window.loadSampleCrop is defined and callable');
    assert(typeof window.applyMarketIntelFilters === 'function', 'window.applyMarketIntelFilters is defined and callable');
    assert(typeof window.renderMarketIntel === 'function', 'window.renderMarketIntel is defined and callable');
    assert(typeof window.openOfficialCertificate === 'function', 'window.openOfficialCertificate is defined and callable');
    assert(typeof window.closeOfficialCertificate === 'function', 'window.closeOfficialCertificate is defined and callable');
    assert(typeof window.openHowCalculatedModal === 'function', 'window.openHowCalculatedModal is defined and callable');
    assert(typeof window.closeHowCalculatedModal === 'function', 'window.closeHowCalculatedModal is defined and callable');
    assert(typeof window.readMarketIntelAloud === 'function', 'window.readMarketIntelAloud is defined and callable');
    assert(typeof window.readQualityAloud === 'function', 'window.readQualityAloud is defined and callable');
    assert(typeof window.readAdviceAloud === 'function', 'window.readAdviceAloud is defined and callable');

    console.log('\n2. Testing Language Switching Across All 3 Languages:');
    window.updateLanguage('English');
    assert(document.documentElement.lang === 'en', 'English set documentElement.lang to "en"');
    assert(document.body.className === 'lang-en', 'English set body.className to "lang-en"');

    window.updateLanguage('Hindi (हिंदी)');
    assert(document.documentElement.lang === 'hi', 'Hindi set documentElement.lang to "hi"');
    assert(document.body.className === 'lang-hindi', 'Hindi set body.className to "lang-hindi"');

    window.updateLanguage('Marathi (मराठी)');
    assert(document.documentElement.lang === 'mr', 'Marathi set documentElement.lang to "mr"');
    assert(document.body.className === 'lang-marathi', 'Marathi set body.className to "lang-marathi"');

    console.log('\n3. Testing View Navigation Routing:');
    window.navigateTo('viewMarketIntel');
    assert(true, 'navigateTo viewMarketIntel executed successfully');

    window.navigateTo('viewDashboard');
    assert(true, 'navigateTo viewDashboard executed successfully');

    console.log('\n4. Testing 1-Click Sample Produce Generator:');
    window.loadSampleCrop('Tomato');
    assert(true, 'loadSampleCrop Tomato executed without error');
    window.loadSampleCrop('Onion');
    assert(true, 'loadSampleCrop Onion executed without error');

    console.log('\n5. Testing Net Realization Formula Modal Open & Close:');
    window.openHowCalculatedModal();
    const modalEl = document.getElementById('modalHowCalculated');
    assert(modalEl && modalEl.style.display === 'flex', 'openHowCalculatedModal opens modal with display: flex');
    window.closeHowCalculatedModal();
    assert(modalEl && modalEl.style.display === 'none', 'closeHowCalculatedModal closes modal with display: none');

} catch (err) {
    console.error('❌ Bundle execution error:', err);
    failed++;
}

console.log('\n==========================================');
console.log(`Suite Completed: ${passed} passed, ${failed} failed.`);
if (failed === 0) {
    console.log('🎉 BUNDLE EXECUTION & GLOBAL BINDINGS FULLY VERIFIED!');
} else {
    process.exit(1);
}
