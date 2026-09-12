const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The user mentions double symbols at places.
// E.g., `<span>✨</span> <span id="sampleLotsTitleText">✨ 1-Click Sample Produce Loaders:</span>`
html = html.replace(/<span>✨<\/span>\s*<span id="sampleLotsTitleText">✨/g, '<span>✨</span> <span id="sampleLotsTitleText">');
html = html.replace(/📸\s*<span id="captureCutBtnText">📷/g, '📸 <span id="captureCutBtnText">');
html = html.replace(/⏭️\s*<span id="skipCutBtnText">⏭️/g, '⏭️ <span id="skipCutBtnText">');
html = html.replace(/<span>🔐<\/span>\s*<span id="navLoginBtnText">🔐/g, '<span>🔐</span> <span id="navLoginBtnText">');
html = html.replace(/<span>📸<\/span>\s*<span id="openLiveCameraBtnText">📸/g, '<span>📸</span> <span id="openLiveCameraBtnText">');
html = html.replace(/<span>📁<\/span>\s*<span id="selectPhotosBtnText">📁/g, '<span>📁</span> <span id="selectPhotosBtnText">');
html = html.replace(/<span>📦<\/span>\s*<span id="dashActiveLotsTitle">📦/g, '<span>📦</span> <span id="dashActiveLotsTitle">');
html = html.replace(/<span>✨<\/span>\s*<span id="dashAssessBtnText">✨/g, '<span>✨</span> <span id="dashAssessBtnText">');

// Are there any in app.js? (e.g. dynamic translations)
let appjs = fs.readFileSync('app.js', 'utf8');
appjs = appjs.replace(/"✨ ✨ 1-Click Sample Produce Loaders:"/g, '"✨ 1-Click Sample Produce Loaders:"');
appjs = appjs.replace(/"📷 Capture \/ Upload Cut Slice \(तुकडा\/काप फोटो घ्या\)"/g, '"Capture / Upload Cut Slice (तुकडा/काप फोटो घ्या)"');
appjs = appjs.replace(/"⏭️ Skip Cut Check & Proceed to Pricing"/g, '"Skip Cut Check & Proceed to Pricing"');
appjs = appjs.replace(/"📸 थेट कॅमेऱ्याने ४ कोन स्कॅन करा \(Live Camera\)"/g, '"थेट कॅमेऱ्याने ४ कोन स्कॅन करा (Live Camera)"');
appjs = appjs.replace(/"📁 गॅलरीतून ४ फोटो निवडा \(Upload Files\)"/g, '"गॅलरीतून ४ फोटो निवडा (Upload Files)"');
appjs = appjs.replace(/"✨ गुणवत्ता तपासा"/g, '"गुणवत्ता तपासा"');

fs.writeFileSync('index.html', html);
fs.writeFileSync('app.js', appjs);
console.log('Fixed double symbols in index.html and app.js');
