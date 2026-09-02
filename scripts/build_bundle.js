/**
 * KisanTrust - Bundler Script
 * Bundles all ES modules into a self-contained browser bundle (bundle.js)
 * that works across file:// protocol (direct double click) as well as http:// servers.
 */

import fs from 'fs';
import path from 'path';

console.log('📦 Starting KisanTrust standalone bundle build...');

// Automatic .env file reader for bundle build
const envVars = {};
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
            const key = trimmed.slice(0, eqIdx).trim();
            const val = trimmed.slice(eqIdx + 1).trim();
            envVars[key] = val;
            if (!process.env[key]) {
                process.env[key] = val;
            }
        }
    }
}

const filesToBundle = [
    'src/utils/i18n.js',
    'src/config/envConfig.js',
    'src/config/firebaseConfig.js',
    'src/models/User.js',
    'src/models/AuditLog.js',
    'src/models/Notification.js',
    'src/models/RiskFlag.js',
    'src/models/Rating.js',
    'src/models/Lot.js',
    'src/models/Market.js',
    'src/models/Buyer.js',
    'src/models/Pooling.js',
    'src/models/Transaction.js',
    'src/models/Dispute.js',
    'src/data/mockLots.js',
    'src/data/mockMandis.js',
    'src/data/mockBuyers.js',
    'src/data/cropKnowledge.js',
    'src/data/mockTransactions.js',
    'src/data/mockDisputes.js',
    'src/data/mockAdminData.js',
    'src/services/firebaseService.js',
    'src/services/notificationService.js',
    'src/services/auditService.js',
    'src/services/riskService.js',
    'src/services/ratingService.js',
    'src/services/qualityService.js',
    'src/services/pricingService.js',
    'src/services/marketService.js',
    'src/services/transportEstimationService.js',
    'src/services/transportCostService.js',
    'src/services/marketDataService.js',
    'src/services/priceCalculationService.js',
    'src/services/opportunityComparisonService.js',
    'src/services/priceAnalysisService.js',
    'src/services/marketComparisonService.js',
    'src/services/marketTrendService.js',
    'src/services/pricePredictionService.js',
    'src/services/recommendationService.js',
    'src/services/geminiAdvisoryService.js',
    'src/services/buyerService.js',
    'src/services/matchingService.js',
    'src/services/negotiationService.js',
    'src/services/poolingService.js',
    'src/services/logisticsService.js',
    'src/services/storageService.js',
    'src/services/transactionService.js',
    'src/services/verificationService.js',
    'src/services/lotModerationService.js',
    'src/services/analyticsService.js',
    'src/services/trustScoreService.js',
    'src/services/disputeService.js',
    'src/services/authService.js'
];

let bundleContent = `/**
 * KisanTrust Standalone Browser Bundle
 * Works seamlessly on file:/// (direct Explorer launch) and http:// web servers.
 * Auto-generated on ${new Date().toISOString()}
 */
(function() {
    'use strict';
    
    // Dynamic runtime environment configuration (injected via server or local config)
    window.__ENV__ = window.__ENV__ || {};
`;

function stripImportsAndExports(code) {
    // 1. Normalize line endings to LF
    code = code.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    
    // 2. Remove all import statements (single-line and multi-line)
    code = code.replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '');
    code = code.replace(/import\s+['"][^'"]+['"];?/g, '');
    code = code.replace(/^\s*import\s+[^;]+;\s*$/gm, '');

    // 3. Transform exports into plain declarations
    code = code.replace(/^\s*export\s+default\s+class\s+/gm, 'class ');
    code = code.replace(/^\s*export\s+default\s+function\s+/gm, 'function ');
    code = code.replace(/^\s*export\s+default\s+async\s+function\s+/gm, 'async function ');
    code = code.replace(/^\s*export\s+default\s+[^;]+;\s*$/gm, '');
    code = code.replace(/^\s*export\s+const\s+/gm, 'const ');
    code = code.replace(/^\s*export\s+let\s+/gm, 'let ');
    code = code.replace(/^\s*export\s+var\s+/gm, 'var ');
    code = code.replace(/^\s*export\s+async\s+function\s+/gm, 'async function ');
    code = code.replace(/^\s*export\s+function\s+/gm, 'function ');
    code = code.replace(/^\s*export\s+class\s+/gm, 'class ');
    code = code.replace(/^\s*export\s*\{[^}]*\};?\s*$/gm, '');

    // Catch any remaining export keywords
    code = code.replace(/\bexport\s+const\s+/g, 'const ');
    code = code.replace(/\bexport\s+let\s+/g, 'let ');
    code = code.replace(/\bexport\s+var\s+/g, 'var ');
    code = code.replace(/\bexport\s+class\s+/g, 'class ');
    code = code.replace(/\bexport\s+function\s+/g, 'function ');
    code = code.replace(/\bexport\s+async\s+function\s+/g, 'async function ');
    code = code.replace(/\bexport\s+default\s+/g, '');

    return code;
}

for (const relPath of filesToBundle) {
    const fullPath = path.resolve(relPath);
    let code = fs.readFileSync(fullPath, 'utf-8');
    code = stripImportsAndExports(code);
    bundleContent += `\n// --- MODULE: ${relPath} ---\n` + code + '\n';
}

// Now read and bundle app.js
let appCode = fs.readFileSync(path.resolve('app.js'), 'utf-8');
appCode = stripImportsAndExports(appCode);
bundleContent += `\n// --- MAIN APPLICATION CONTROLLER ---\n` + appCode + '\n';

// Attach public APIs to window
bundleContent += `
    // Expose Global Handlers on window
    window.navigateTo = navigateTo;
    window.updateLanguage = updateLanguage;
    window.applyDOMTranslations = applyDOMTranslations;
    window.attachAllEventListeners = attachAllEventListeners;
    window.goToLotStep = goToLotStep;
    window.runQualityAnalysis = runQualityAnalysis;
    window.proceedToPricing = proceedToPricing;
    window.saveDigitalLot = saveDigitalLot;
    window.acceptOfferFromStep3 = acceptOfferFromStep3;
    window.renderMarketIntel = renderMarketIntel;
    window.applyMarketIntelFilters = applyMarketIntelFilters;
    window.renderBuyerMarket = renderBuyerMarket;
    window.renderSmartPooling = renderSmartPooling;
    window.renderTransactionsList = renderTransactionsList;
    window.updateCropVarieties = updateCropVarieties;
    window.updateBeforePublishInsights = updateBeforePublishInsights;
    window.switchAdminTab = switchAdminTab;
    window.renderAdminPortal = renderAdminPortal;
    window.toggleNotificationDrawer = toggleNotificationDrawer;
    window.inspectFarmer = inspectFarmer;
    window.inspectBuyer = inspectBuyer;
    window.inspectLot = inspectLot;
    window.inspectDispute = inspectDispute;
    window.inspectUser = inspectUser;
    window.openBuyerRatingDialog = openBuyerRatingDialog;
    window.openFarmerRatingDialog = openFarmerRatingDialog;
    window.speakText = speakText;
    window.readQualityAloud = readQualityAloud;
    window.readAdviceAloud = readAdviceAloud;
    window.loadSampleCrop = loadSampleCrop;
    window.shareLotOnWhatsApp = shareLotOnWhatsApp;
    window.openOfficialCertificate = openOfficialCertificate;
    window.closeOfficialCertificate = closeOfficialCertificate;
    window.openHowCalculatedModal = openHowCalculatedModal;
    window.closeHowCalculatedModal = closeHowCalculatedModal;
    window.initKisanTrustApp = initKisanTrustApp;

    // Ensure initialization runs immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initKisanTrustApp);
    } else {
        initKisanTrustApp();
    }
})();
`;

fs.writeFileSync('bundle.js', bundleContent, 'utf-8');
console.log('✅ bundle.js successfully generated! Size:', (fs.statSync('bundle.js').size / 1024).toFixed(1), 'KB');
