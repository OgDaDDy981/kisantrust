/**
 * KisanTrust - Application Controller (Stage 7: Connected Ecosystem, Admin Portal & Trust System)
 * AI-Powered Market Intelligence and Trusted Farm-to-Buyer Network
 */

import { firebaseService } from './src/services/firebaseService.js';
import { QualityService } from './src/services/qualityService.js';
import { PricingService } from './src/services/pricingService.js';
import { MarketService } from './src/services/marketService.js';
import { TransactionService } from './src/services/transactionService.js';
import { MarketDataService } from './src/services/marketDataService.js';
import { PriceCalculationService } from './src/services/priceCalculationService.js';
import { PriceAnalysisService } from './src/services/priceAnalysisService.js';
import { MarketComparisonService } from './src/services/marketComparisonService.js';
import { MarketTrendService } from './src/services/marketTrendService.js';
import { TransportEstimationService } from './src/services/transportEstimationService.js';
import { BuyerService } from './src/services/buyerService.js';
import { MatchingService } from './src/services/matchingService.js';
import { NegotiationService } from './src/services/negotiationService.js';
import { RecommendationService } from './src/services/recommendationService.js';
import { GeminiAdvisoryService } from './src/services/geminiAdvisoryService.js';
import { PoolingService } from './src/services/poolingService.js';
import { PricePredictionService } from './src/services/pricePredictionService.js';
import { CropKnowledgeService } from './src/data/cropKnowledge.js';
import { TrustScoreService } from './src/services/trustScoreService.js';
import { DisputeService } from './src/services/disputeService.js';
import { AuthService, DEMO_ACCOUNTS } from './src/services/authService.js';
import { VerificationService } from './src/services/verificationService.js';
import { LotModerationService } from './src/services/lotModerationService.js';
import { RatingService } from './src/services/ratingService.js';
import { AuditService } from './src/services/auditService.js';
import { RiskService } from './src/services/riskService.js';
import { NotificationService } from './src/services/notificationService.js';
import { AnalyticsService } from './src/services/analyticsService.js';
import { DigitalAgriculturalLot } from './src/models/Lot.js';
import { User, FarmerProfile, BuyerProfileRecord, USER_ROLES, ACCOUNT_STATUS, VERIFICATION_STATUS } from './src/models/User.js';
import { AuditLogRecord, AUDIT_ACTIONS } from './src/models/AuditLog.js';
import { NotificationRecord, NOTIFICATION_TYPES } from './src/models/Notification.js';
import { RiskFlagRecord, RISK_FLAG_TYPES } from './src/models/RiskFlag.js';
import { I18N_DICTIONARY, SUPPORTED_LANGUAGES, applyDOMTranslations } from './src/utils/i18n.js';

// Crop Varieties Map for Dynamic Selection
export const CROP_VARIETIES_MAP = {
    'Tomato': [
        'हिमसोना संकरित (Himsona Hybrid)',
        'अभिनव (Abhinav / Syngenta)',
        'साहो ३२५१ (Saho 3251)',
        'रुची (Ruchi Tomato)',
        'देशी / गावरान (Desi Gavran)'
    ],
    'Onion': [
        'नाशिक लाल (Nashik Red)',
        'भीमा सुपर (Bhima Super)',
        'भीमा शक्ती (Bhima Shakti)',
        'पुणे फुर्सुंगी (Pune Fursungi)',
        'गावरान कांदा (Gavran Red)'
    ],
    'Potato': [
        'कुफरी पुखराज (Kufri Pukhraj)',
        'कुफरी ज्योती (Kufri Jyoti)',
        'कुफरी चिप्सोना (Kufri Chipsona)',
        'कुफरी बहार (Kufri Bahar)'
    ],
    'Carrot': [
        'पुसा रुधिरा (Pusa Rudhira)',
        'सुपर रेड (Super Red Kuroda)',
        'पुसा केसर (Pusa Kesar)',
        'ऑरेंज गाजर (Nantes Orange)'
    ],
    'Cabbage': [
        'गोल्डन एकर (Golden Acre)',
        'प्राईड ऑफ इंडिया (Pride of India)',
        'कावेरी संकरित (Kaveri Hybrid)',
        'ग्रीन कोबी (Green Express)'
    ]
};

// Application State
const AppState = {
    currentView: 'viewDashboard',
    currentLotStep: 1,
    selectedLang: "English", // Default priority 1
    selectedCropFilter: "Tomato",
    selectedBuyerCropFilter: "All",
    uploadedFiles: [],
    currentQualityAnalysis: null,
    currentCutAnalysis: null,
    currentPriceEstimate: null,
    currentMarketComparison: null,
    currentMatchedBuyers: [],
    currentRecommendation: null,
    currentGeminiAdvisory: null,
    currentLotDraft: null,
    activeNegotiation: null,
    latestTransaction: null,
    activeDisputeTxn: null,
    activeAdminTab: 'adminSectionOverview',
    activeInspectItem: null,
    activeRatingTxn: null
};

// UI Helper: Show Toast Notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

// UI Helper: Loading Overlay
function showLoading(text) {
    const overlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');
    if (loadingText) loadingText.textContent = text;
    if (overlay) overlay.style.display = 'flex';
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.style.display = 'none';
}

// UI Helper: Sync Authentication UI State
function syncAuthUI() {
    const user = AuthService.getCurrentUser();
    
    // Toggle body class for role-based visibility
    const role = user?.role || 'farmer';
    if (document?.body?.classList) {
        document.body.classList.remove('role-farmer', 'role-buyer', 'role-customer', 'role-admin', 'role-super_admin');
        document.body.classList.add('role-' + role);
    }

    const roleBadge = document.getElementById('userRoleBadge');
    const loginBtn = document.getElementById('navLoginBtn');
    const roleIcon = document.getElementById('userRoleIcon');
    const roleDisplay = document.getElementById('userRoleDisplay');
    const adminQuickBtn = document.getElementById('navAdminQuickBtn');
    const adminNavTab = document.getElementById('navAdminPortal');
    const notifBadge = document.getElementById('notifBadgeCount');

    if (user) {
        if (roleBadge) roleBadge.style.display = 'inline-flex';
        if (loginBtn) loginBtn.style.display = 'none';

        if (roleIcon) {
            if (user.role === 'admin') roleIcon.textContent = '🛡️';
            else if (user.role === 'super_admin') roleIcon.textContent = '⚡';
            else if (user.role === 'buyer') roleIcon.textContent = '🏢';
            else if (user.role === 'customer') roleIcon.textContent = '🛒';
            else roleIcon.textContent = '👨‍🌾';
        }

        if (roleDisplay) {
            const isEng = AppState.selectedLang === "English";
            const isHin = AppState.selectedLang === "Hindi (हिंदी)";
            let roleLabel = user.role.toUpperCase();
            if (user.role === 'customer') roleLabel = isEng ? 'CUSTOMER' : (isHin ? 'ग्राहक' : 'ग्राहक');
            else if (user.role === 'buyer') roleLabel = isEng ? 'BUYER' : (isHin ? 'खरीदार' : 'खरेदीदार');
            else if (user.role === 'farmer') roleLabel = isEng ? 'FARMER' : (isHin ? 'किसान' : 'शेतकरी');
            else if (user.role === 'admin') roleLabel = isEng ? 'ADMIN' : (isHin ? 'एडमिन' : 'अ‍ॅडमिन');

            let displayName = user.displayName || user.name;
            if (isEng && displayName.includes('(')) {
                const enMatch = displayName.match(/\(([^)]+)\)/);
                if (enMatch) displayName = enMatch[1].replace(/-\s*Consumer/i, '').trim();
            }
            roleDisplay.textContent = `${displayName} (${roleLabel})`;
        }

        // Show/hide admin tabs and quick buttons
        const isAdmin = user.role === 'admin' || user.role === 'super_admin';
        if (adminQuickBtn) adminQuickBtn.style.display = isAdmin ? 'inline-flex' : 'none';
        if (adminNavTab) adminNavTab.style.display = isAdmin ? 'inline-flex' : 'none';

        // Update notification count
        NotificationService.getUnreadCount(user.userId).then(count => {
            if (notifBadge) {
                notifBadge.textContent = count;
                notifBadge.style.display = count > 0 ? 'inline-flex' : 'none';
            }
        });
    } else {
        if (roleBadge) roleBadge.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'inline-flex';
        if (adminQuickBtn) adminQuickBtn.style.display = 'none';
        if (adminNavTab) adminNavTab.style.display = 'none';
        if (notifBadge) notifBadge.style.display = 'none';
    }
}

// Live Backend Telemetry Dispatcher (Non-blocking)
function sendTelemetryEvent(type, payload = {}) {
    if (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http')) {
        try {
            fetch('/api/telemetry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type,
                    user: AuthService.getCurrentUser()?.displayName || 'Farmer (Ramesh Patil)',
                    timestamp: new Date().toISOString(),
                    ...payload
                })
            }).catch(() => {});
        } catch (e) {}
    }
}

// View Navigation Router
function navigateTo(viewId) {
    document.querySelectorAll('.app-view').forEach(view => {
        view.classList.remove('active');
        view.style.display = 'none';
    });

    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
        targetView.style.display = 'block';
        AppState.currentView = viewId;
    }

    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === viewId) {
            btn.classList.add('active');
        }
    });

    if (viewId === 'viewDashboard') renderDashboard();
    else if (viewId === 'viewMyLots') renderMyLots();
    else if (viewId === 'viewMarketIntel') renderMarketIntel(AppState.selectedCropFilter);
    else if (viewId === 'viewBuyerMarket') renderBuyerMarket(AppState.selectedBuyerCropFilter);
    else if (viewId === 'viewSmartPooling') renderSmartPooling();
    else if (viewId === 'viewTransactions') renderTransactionsList();
    else if (viewId === 'viewAdminPortal') renderAdminPortal();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.navigateTo = navigateTo;

// =========================================================================
// VOICE ASSIST ENGINE (Multilingual Web Speech API for Marathi, Hindi, English)
// =========================================================================
let currentUtterance = null;
let availableSpeechVoices = [];

function refreshSpeechVoices() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.speechSynthesis.getVoices === 'function') {
        availableSpeechVoices = window.speechSynthesis.getVoices() || [];
    }
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    refreshSpeechVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = refreshSpeechVoices;
    }
}

function getMatchingSpeechVoice(targetLangCode) {
    if (!availableSpeechVoices.length) refreshSpeechVoices();

    if (targetLangCode === 'mr-IN' || targetLangCode === 'mr') {
        // Look for Marathi voice first, then Hindi (since both share Devanagari script and Indian pronunciation)
        return availableSpeechVoices.find(v => v.lang === 'mr-IN' || v.lang === 'mr' || (v.lang && v.lang.toLowerCase().includes('marathi')) || (v.name && v.name.toLowerCase().includes('marathi')))
            || availableSpeechVoices.find(v => v.lang === 'hi-IN' || v.lang === 'hi' || (v.name && v.name.toLowerCase().includes('hindi')) || (v.name && v.name.includes('हिन्दी')))
            || availableSpeechVoices.find(v => (v.lang && v.lang.includes('IN')) || (v.name && v.name.toLowerCase().includes('india')));
    } else if (targetLangCode === 'hi-IN' || targetLangCode === 'hi') {
        return availableSpeechVoices.find(v => v.lang === 'hi-IN' || v.lang === 'hi' || (v.name && v.name.toLowerCase().includes('hindi')) || (v.name && v.name.includes('हिन्दी')))
            || availableSpeechVoices.find(v => (v.lang && v.lang.includes('IN')) || (v.name && v.name.toLowerCase().includes('india')));
    } else {
        // English
        return availableSpeechVoices.find(v => (v.lang === 'en-IN' || v.lang === 'en_IN') || (v.lang && v.lang.startsWith('en') && (v.name && (v.name.toLowerCase().includes('india') || v.name.toLowerCase().includes('indian')))))
            || availableSpeechVoices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || (v.lang && v.lang.startsWith('en')));
    }
}

function speakText(text, btnElement = null) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        showToast('⚠️ आपल्या ब्राऊझरमध्ये व्हॉइस सपोर्ट उपलब्ध नाही.', 'warning');
        return;
    }

    window.speechSynthesis.cancel();

    if (btnElement && btnElement.classList.contains('speaking')) {
        btnElement.classList.remove('speaking');
        return;
    }

    const isMarathi = AppState.selectedLang && (AppState.selectedLang.includes('Marathi') || AppState.selectedLang.includes('मराठी'));
    const isHindi = AppState.selectedLang && (AppState.selectedLang.includes('Hindi') || AppState.selectedLang.includes('हिंदी'));
    const isEnglish = !isMarathi && !isHindi;

    let targetLangCode = 'en-IN';
    let langLabel = 'English';
    if (isMarathi) {
        targetLangCode = 'mr-IN';
        langLabel = 'मराठी (Marathi)';
    } else if (isHindi) {
        targetLangCode = 'hi-IN';
        langLabel = 'हिंदी (Hindi)';
    }

    const cleanText = text.replace(/<[^>]*>?/gm, '').replace(/[#*_`]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = targetLangCode;

    const matchedVoice = getMatchingSpeechVoice(targetLangCode);
    if (matchedVoice) {
        utterance.voice = matchedVoice;
    }

    utterance.rate = 0.90; // Slower, highly articulate tempo for clarity
    utterance.pitch = 1.0;

    if (btnElement) {
        btnElement.classList.add('speaking');
        utterance.onend = () => btnElement.classList.remove('speaking');
        utterance.onerror = () => btnElement.classList.remove('speaking');
    }

    showToast(isEnglish ? `🔊 Playing audio in English...` : `🔊 आवाज सुरू: ${langLabel}...`, 'info');

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
}

function readQualityAloud() {
    const btn = document.getElementById('btnVoiceQuality');
    const qualityBadge = document.getElementById('qualityBadge')?.textContent || 'Grade A';
    const aiDesc = document.getElementById('aiDescription')?.textContent || '';
    
    const isMarathi = AppState.selectedLang && (AppState.selectedLang.includes('Marathi') || AppState.selectedLang.includes('मराठी'));
    const isHindi = AppState.selectedLang && (AppState.selectedLang.includes('Hindi') || AppState.selectedLang.includes('हिंदी'));

    let speechPrompt = '';
    if (isMarathi) {
        speechPrompt = `पिकाची गुणवत्ता तपासणी पूर्ण झाली आहे. पिकाचा दर्जा आहे ${qualityBadge}. ${aiDesc}`;
    } else if (isHindi) {
        speechPrompt = `फसल की गुणवत्ता जांच पूरी हो गई है। फसल का ग्रेड है ${qualityBadge}. ${aiDesc}`;
    } else {
        speechPrompt = `Crop quality assessment completed. Produce grade is ${qualityBadge}. ${aiDesc}`;
    }

    speakText(speechPrompt, btn);
}
window.readQualityAloud = readQualityAloud;

function readAdviceAloud() {
    const btn = document.getElementById('btnVoiceAdvice');
    const adviceText = document.getElementById('geminiMitraText')?.textContent || '';
    const decisionBadge = document.getElementById('decisionActionBadge')?.textContent || '';
    
    const isMarathi = AppState.selectedLang && (AppState.selectedLang.includes('Marathi') || AppState.selectedLang.includes('मराठी'));
    const isHindi = AppState.selectedLang && (AppState.selectedLang.includes('Hindi') || AppState.selectedLang.includes('हिंदी'));

    let speechPrompt = '';
    if (isMarathi) {
        speechPrompt = `किसान ट्रस्ट AI सल्ला: ${decisionBadge}. ${adviceText}`;
    } else if (isHindi) {
        speechPrompt = `किसान ट्रस्ट AI सलाह: ${decisionBadge}. ${adviceText}`;
    } else {
        speechPrompt = `KisanTrust AI Advisory: ${decisionBadge}. ${adviceText}`;
    }

    speakText(speechPrompt, btn);
}
window.readAdviceAloud = readAdviceAloud;

function readMarketIntelAloud() {
    const btn = document.getElementById('btnVoiceIntel');
    const crop = AppState.selectedIntelCrop || 'Tomato';
    const maxModal = document.getElementById('summaryMaxModal')?.textContent || '';
    const maxMarket = document.getElementById('summaryMaxMarket')?.textContent || '';
    const tipText = document.getElementById('intelAdvantageBox')?.textContent || '';
    
    const isMarathi = AppState.selectedLang && (AppState.selectedLang.includes('Marathi') || AppState.selectedLang.includes('मराठी'));
    const isHindi = AppState.selectedLang && (AppState.selectedLang.includes('Hindi') || AppState.selectedLang.includes('हिंदी'));

    let speechPrompt = '';
    if (isMarathi) {
        speechPrompt = `${crop} पिकासाठी सर्वोच्च बाजारभाव ${maxMarket} येथे ${maxModal} प्रति किलो आहे. ${tipText}`;
    } else if (isHindi) {
        speechPrompt = `${crop} फसल के लिए सबसे उच्चतम मंडी भाव ${maxMarket} में ${maxModal} प्रति किलो है. ${tipText}`;
    } else {
        speechPrompt = `For ${crop}, the highest market rate is ${maxModal} per kg at ${maxMarket}. ${tipText}`;
    }

    speakText(speechPrompt, btn);
}
window.readMarketIntelAloud = readMarketIntelAloud;

// =========================================================================
// 1-CLICK SAMPLE LOT GENERATOR (SVG Photorealistic Harvest Visuals)
// =========================================================================
function generateSampleProduceSvg(crop, angleLabel, color, accentColor) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="240" viewBox="0 0 300 240">
        <defs>
            <radialGradient id="grad_${crop}_${angleLabel.replace(/\s+/g, '')}" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stop-color="${accentColor}" />
                <stop offset="70%" stop-color="${color}" />
                <stop offset="100%" stop-color="#1A2E05" />
            </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="#F1F5F9" rx="12" />
        <circle cx="150" cy="115" r="75" fill="url(#grad_${crop}_${angleLabel.replace(/\s+/g, '')})" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.15))" />
        <path d="M140 40 Q150 25 160 38 Q155 48 150 50 Z" fill="#15803D" />
        <path d="M150 48 Q165 42 175 48 Q165 54 150 50 Z" fill="#16A34A" />
        <path d="M150 48 Q135 42 125 48 Q135 54 150 50 Z" fill="#16A34A" />
        <rect x="20" y="195" width="260" height="32" rx="6" fill="#0F172A" opacity="0.85" />
        <text x="150" y="216" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">
            ${crop} • ${angleLabel} (✓ Verified)
        </text>
    </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function loadSampleCrop(cropType) {
    const cropSelect = document.getElementById('inputCropType');
    if (cropSelect) {
        cropSelect.value = cropType;
        updateCropVarieties(cropType);
    }

    const qtyInput = document.getElementById('inputQuantity');
    if (qtyInput) qtyInput.value = cropType === 'Tomato' ? 500 : (cropType === 'Onion' ? 1000 : 800);

    let colors = { color: '#EF4444', accent: '#FCA5A5' };
    if (cropType === 'Onion') colors = { color: '#DC2626', accent: '#F87171' };
    if (cropType === 'Potato') colors = { color: '#D97706', accent: '#FDE68A' };

    const sampleImages = [
        generateSampleProduceSvg(cropType, 'Angle 1 Top View', colors.color, colors.accent),
        generateSampleProduceSvg(cropType, 'Angle 2 Side Profile', colors.color, colors.accent),
        generateSampleProduceSvg(cropType, 'Angle 3 Stem Apex', colors.color, colors.accent),
        generateSampleProduceSvg(cropType, 'Angle 4 Calyx Base', colors.color, colors.accent)
    ];

    AppState.uploadedFiles = sampleImages;

    // Update UI
    const emptyState = document.getElementById('emptyState');
    const uploadedState = document.getElementById('uploadedState');
    const uploadActions = document.getElementById('uploadActions');
    const photoCount = document.getElementById('photoCount');
    const imageGrid = document.getElementById('imageGrid');

    if (emptyState) emptyState.style.display = 'none';
    if (uploadedState) uploadedState.style.display = 'block';
    if (uploadActions) uploadActions.style.display = 'flex';
    if (photoCount) photoCount.textContent = '4';

    if (imageGrid) {
        imageGrid.innerHTML = sampleImages.map((src, idx) => `
            <div class="image-preview" style="position:relative; border-radius:8px; overflow:hidden; border:2px solid #86EFAC;">
                <img src="${src}" alt="Sample ${cropType}" style="width:100%; height:110px; object-fit:cover;">
                <span style="position:absolute; bottom:4px; left:4px; background:rgba(0,0,0,0.7); color:#FFF; font-size:10px; font-weight:bold; padding:2px 6px; border-radius:4px;">
                    कोन ${idx + 1}
                </span>
            </div>
        `).join('');
    }

    showToast(`✅ ${cropType} नमुना लॉट (४ फोटो) लोड करण्यात आला!`, 'success');
}

// =========================================================================
// WHATSAPP SHARE GENERATOR
// =========================================================================
function shareLotOnWhatsApp() {
    const cropType = document.getElementById('inputCropType')?.value || 'Tomato';
    const variety = document.getElementById('inputVariety')?.value || 'Standard';
    const quantity = document.getElementById('inputQuantity')?.value || '500';
    const netPrice = document.getElementById('farmerPrice')?.textContent || '₹ 36.00';
    const lotValue = document.getElementById('totalLotValueDisplay')?.textContent || '₹ 18,000';
    const grade = AppState.currentQualityAnalysis?.overallGrade || 'Grade A';
    const freshness = AppState.currentQualityAnalysis?.freshnessScore || 94;

    const message = `🌾 *किसान ट्रस्ट (KisanTrust) प्रमाणित शेती लॉट* 🌾\n\n` +
        `📦 *पीक:* ${cropType} (${variety})\n` +
        `⚖️ *वजन:* ${quantity} kg\n` +
        `🌟 *प्रमाणित दर्जा:* ${grade} (${freshness}% ताजेपणा)\n` +
        `💰 *अंदाजे निव्वळ प्राप्ती:* ${netPrice} / kg\n` +
        `💵 *एकूण मूल्य:* ${lotValue}\n` +
        `🚚 *वाहतूक:* गाव पूलिंगद्वारे ६०% बचत उपलब्ध\n\n` +
        `🛡️ *सत्यापित डिजिटल पावती पाहण्यासाठी लिंक:* https://kisantrust.org/verify/LOT-2026-089101\n` +
        `_KisanTrust - Know Your Crop. Know Its Worth. Know Where to Sell._`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// =========================================================================
// OFFICIAL CERTIFICATE MODAL
// =========================================================================
function openOfficialCertificate() {
    const cropType = document.getElementById('inputCropType')?.value || 'Tomato';
    const variety = document.getElementById('inputVariety')?.value || 'हिमसोना संकरित';
    const quantity = document.getElementById('inputQuantity')?.value || '500';
    const harvestDate = document.getElementById('inputHarvestDate')?.value || '2026-08-29';
    const netPrice = document.getElementById('farmerPrice')?.textContent || '₹ 36.00';
    const totalWorth = document.getElementById('totalLotValueDisplay')?.textContent || '₹ 18,000';
    const grade = AppState.currentQualityAnalysis?.overallGrade || 'Grade A';
    const freshness = AppState.currentQualityAnalysis?.freshnessScore || 94;

    const certLotId = document.getElementById('certLotId');
    if (certLotId) certLotId.textContent = `LOT-2026-${Date.now().toString().slice(-6)}`;

    const certCropVariety = document.getElementById('certCropVariety');
    if (certCropVariety) certCropVariety.textContent = `${cropType} (${variety})`;

    const certGrade = document.getElementById('certGrade');
    if (certGrade) certGrade.textContent = `${grade} (${freshness}% ताजेपणा)`;

    const certQty = document.getElementById('certQuantity');
    if (certQty) certQty.textContent = `${quantity} किलो (${quantity} kg)`;

    const certHarvest = document.getElementById('certHarvestShelf');
    if (certHarvest) certHarvest.textContent = `${harvestDate} (८ दिवस सुरक्षित शेल्फ लाइफ)`;

    const certNetRate = document.getElementById('certNetRate');
    if (certNetRate) certNetRate.textContent = `${netPrice} / किलो`;

    const certTotal = document.getElementById('certTotalValue');
    if (certTotal) certTotal.textContent = totalWorth;

    // Add thumbnails
    const strip = document.getElementById('certImageStrip');
    if (strip && AppState.uploadedFiles.length > 0) {
        strip.innerHTML = AppState.uploadedFiles.slice(0, 4).map((img, i) => `
            <div style="border:1px solid #CBD5E1; border-radius:6px; overflow:hidden;">
                <img src="${img}" style="width:100%; height:70px; object-fit:cover;">
                <div style="font-size:10px; text-align:center; background:#F1F5F9; color:#475569; padding:2px;">कोन ${i + 1}</div>
            </div>
        `).join('');
    }

    const modal = document.getElementById('officialCertModal');
    if (modal) modal.style.display = 'flex';
}

function closeOfficialCertificate() {
    const modal = document.getElementById('officialCertModal');
    if (modal) modal.style.display = 'none';
}

// Language Normalizer Helper
function normalizeLanguage(lang) {
    if (!lang) return "Marathi (मराठी)";
    if (lang === "English" || lang.includes("English") || lang === "en") return "English";
    if (lang === "Hindi (हिंदी)" || lang.includes("Hindi") || lang.includes("हिंदी") || lang === "hi") return "Hindi (हिंदी)";
    return "Marathi (मराठी)";
}

// Language Switcher Handler
function updateLanguage(rawLang) {
    const lang = normalizeLanguage(rawLang);
    AppState.selectedLang = lang;
    document.documentElement.lang = lang === "Marathi (मराठी)" ? "mr" : (lang === "Hindi (हिंदी)" ? "hi" : "en");
    document.body.className = lang === "Marathi (मराठी)" ? "lang-marathi" : (lang === "Hindi (हिंदी)" ? "lang-hindi" : "lang-en");

    // Sync header dropdown
    const headerLang = document.getElementById('headerLangSelect');
    if (headerLang && headerLang.value !== lang) {
        headerLang.value = lang;
    }

    // Sync sidebar language buttons
    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.dataset.lang === lang || normalizeLanguage(btn.dataset.lang) === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Apply comprehensive DOM translation
    applyDOMTranslations(lang);
    syncAuthUI();

    // Refresh current view with updated language
    if (AppState.currentView === 'viewDashboard') renderDashboard();
    else if (AppState.currentView === 'viewMyLots') renderMyLots();
    else if (AppState.currentView === 'viewMarketIntel') renderMarketIntel(AppState.selectedCropFilter);
    else if (AppState.currentView === 'viewBuyerMarket') renderBuyerMarket(AppState.selectedBuyerCropFilter);
    else if (AppState.currentView === 'viewSmartPooling') renderSmartPooling();
    else if (AppState.currentView === 'viewTransactions') renderTransactionsList();
    else if (AppState.currentView === 'viewAdminPortal') renderAdminPortal();

    sendTelemetryEvent('LANGUAGE_CHANGED', { language: lang });
}

// Crop Varieties Selector Updater
function updateCropVarieties(crop) {
    const varietySelect = document.getElementById('inputVariety');
    if (!varietySelect) return;

    varietySelect.innerHTML = '';
    const varieties = CROP_VARIETIES_MAP[crop] || ['मानक वाण (Standard Quality Variety)'];
    varieties.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v;
        opt.textContent = v;
        varietySelect.appendChild(opt);
    });

    const qty = parseFloat(document.getElementById('inputQuantity')?.value) || 500;
    updateBeforePublishInsights(crop, qty);
}

// Phase 5: Before You Publish Contextual Market Insights Updater
async function updateBeforePublishInsights(cropType = 'Tomato', quantityKg = 500) {
    try {
        const crop = cropType || document.getElementById('inputCropType')?.value || 'Tomato';
        const qty = quantityKg || parseFloat(document.getElementById('inputQuantity')?.value) || 500;
        const insights = await PriceAnalysisService.getListingMarketInsights({
            cropType: crop,
            quantityKg: qty,
            farmerDistrict: 'Nashik'
        });

        // 1. Update Mandi Rate Block
        const mandiRateElem = document.getElementById('bpMandiRate');
        const mandiNameElem = document.getElementById('bpMandiName');
        if (mandiRateElem) mandiRateElem.textContent = `₹ ${insights.topMandi.modalPrice.toFixed(2)}/kg`;
        if (mandiNameElem) mandiNameElem.textContent = `${insights.topMandi.name} (${insights.topMandi.distanceKm} किमी)`;

        // 2. Update Expected Net by Grade Block
        const gradeAElem = document.getElementById('bpGradeARate');
        const gradeBElem = document.getElementById('bpGradeBRate');
        if (gradeAElem) gradeAElem.textContent = `Grade A: ₹ ${insights.gradeNetEstimates.gradeA.toFixed(2)}/kg`;
        if (gradeBElem) gradeBElem.textContent = `Grade B: ₹ ${insights.gradeNetEstimates.gradeB.toFixed(2)}/kg • C: ₹ ${insights.gradeNetEstimates.gradeC.toFixed(2)}/kg`;

        // 3. Update Active Buyer Demand Block
        const buyerDemandElem = document.getElementById('bpBuyerDemand');
        const topOfferElem = document.getElementById('bpTopOffer');
        if (buyerDemandElem) {
            buyerDemandElem.textContent = insights.activeBuyerDemand.buyerCount > 0
                ? `${insights.activeBuyerDemand.buyerCount} खरेदीदार उपलब्ध`
                : `मंडी लिलाव प्राधान्य`;
        }
        if (topOfferElem) {
            topOfferElem.textContent = insights.activeBuyerDemand.topOfferedPrice > 0
                ? `सर्वोच्च ऑफर: ₹ ${insights.activeBuyerDemand.topOfferedPrice.toFixed(2)}/kg (${insights.activeBuyerDemand.topBuyerName.split(' ')[0]})`
                : `स्थानिक APMC लिलाव उपलब्ध`;
        }

        // 4. Update Logistics Block
        const transportCostElem = document.getElementById('bpTransportCost');
        const transportSavingsElem = document.getElementById('bpTransportSavings');
        if (transportCostElem) {
            transportCostElem.textContent = `₹ ${insights.logisticsContext.pooledTransportCostPerKg.toFixed(2)}/kg (पूलिंग)`;
        }
        if (transportSavingsElem) {
            transportSavingsElem.textContent = insights.logisticsContext.logisticsSavingsPercent > 0
                ? `स्मार्ट पूलिंगने ${insights.logisticsContext.logisticsSavingsPercent}% बचत शक्य`
                : `प्रमाणित व्यावसायिक वाहतूक दर`;
        }

        // 5. Update Status Pill
        const statusPill = document.getElementById('beforePublishStatusPill');
        if (statusPill) {
            const st = insights.dataFreshness.status;
            let badgeClass = st === 'live' ? 'live' : (st === 'cached' ? 'cached' : 'demo');
            let badgeIcon = st === 'live' ? '🟢' : (st === 'cached' ? '🟡' : '🔵');
            statusPill.innerHTML = `<span class="data-status-pill ${badgeClass}" style="font-size:0.72rem; padding:2px 8px;">${badgeIcon} ${insights.dataFreshness.statusLabel}</span>`;
        }
    } catch (err) {
        console.error('Error updating before publish insights:', err);
    }
}

// =========================================================================
// VIEW 1: FARMER DASHBOARD
// =========================================================================

async function renderDashboard() {
    const lots = await firebaseService.getLots();
    const activeLots = (lots || []).filter(l => l.status === 'LISTED' || l.status === 'MATCHED' || l.status === 'POOLED' || l.moderationStatus === 'APPROVED');

    const lotsContainer = document.getElementById('dashLotsContainer');
    if (lotsContainer) {
        if (activeLots.length === 0) {
            lotsContainer.innerHTML = `<div style="grid-column:1/-1; padding:20px; text-align:center; color:#777;">सध्या कोणताही सक्रिय शेती लॉट नाही. वरील 'नवीन पीक लॉट तपासा' कार्डावर क्लिक करा.</div>`;
        } else {
            lotsContainer.innerHTML = activeLots.slice(0, 3).map(lot => `
                <div class="dash-lot-card" onclick="navigateTo('viewMyLots')" style="cursor:pointer; background:#FFF; border:1px solid #E2E8F0; border-radius:10px; padding:12px; margin-bottom:8px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <strong style="font-size:1.05rem; color:var(--leaf-deep);">${lot.cropType}</strong>
                            <div style="font-size:0.8rem; color:#666;">${lot.quantity} kg • ${lot.variety || 'Standard'}</div>
                        </div>
                        <span class="opp-badge high" style="background:#E8F5E9; color:#1B5E20;">
                            ${lot.overallQualityGrade || 'Grade A'} (${lot.freshnessScore || 92}%)
                        </span>
                    </div>
                    <div style="margin-top:8px; display:flex; justify-content:space-between; font-size:0.85rem;">
                        <span>स्थिती: <strong>${lot.moderationStatus || 'APPROVED'}</strong></span>
                        <span style="color:var(--leaf-deep); font-weight:800;">₹${lot.netPricePerKg || 28.5}/kg</span>
                    </div>
                </div>
            `).join('');
        }
    }

    // Market snapshot for Nashik Tomato
    const mandiComp = await MarketComparisonService.getComparisonForCrop('Tomato', 500, 94, 'Grade A');
    if (mandiComp && mandiComp.recommended) {
        const topMandi = mandiComp.recommended;
        const bestMandiElem = document.getElementById('snapBestMarketName');
        const modalPriceElem = document.getElementById('snapHighestPrice');
        const netRealizationElem = document.getElementById('snapNetValue');

        if (bestMandiElem) bestMandiElem.textContent = topMandi.mandiName;
        if (modalPriceElem) modalPriceElem.textContent = `₹ ${topMandi.modalPricePerKg.toFixed(2)}`;
        if (netRealizationElem) netRealizationElem.textContent = `₹ ${topMandi.estimatedNetRealizationPerKg.toFixed(2)} / किलो`;
    }
}

// =========================================================================
// VIEW 2: LOT QUALITY & VALUATION WIZARD
// =========================================================================

function goToLotStep(step) {
    AppState.currentLotStep = step;
    const step1 = document.getElementById('step1Section');
    const step2 = document.getElementById('step2Section');
    const step3 = document.getElementById('step3Section');
    const p1 = document.getElementById('progressStep1');
    const p2 = document.getElementById('progressStep2');
    const p3 = document.getElementById('progressStep3');
    const c1 = document.getElementById('connector1');
    const c2 = document.getElementById('connector2');

    if (step1) step1.style.display = step === 1 ? 'block' : 'none';
    if (step2) step2.style.display = step === 2 ? 'block' : 'none';
    if (step3) step3.style.display = step === 3 ? 'block' : 'none';

    if (p1) p1.className = `progress-step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`;
    if (p2) p2.className = `progress-step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`;
    if (p3) p3.className = `progress-step ${step >= 3 ? 'active' : ''}`;
    if (c1) c1.className = `connector-line ${step >= 2 ? 'active' : ''}`;
    if (c2) c2.className = `connector-line ${step >= 3 ? 'active' : ''}`;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function runQualityAnalysis() {
    const cropType = document.getElementById('inputCropType')?.value || 'Tomato';
    const variety = document.getElementById('inputVariety')?.value || 'हिमसोना संकरित';
    const quantity = parseFloat(document.getElementById('inputQuantity')?.value) || 500;
    const harvestDate = document.getElementById('inputHarvestDate')?.value || new Date().toISOString().split('T')[0];

    const alertBox = document.getElementById('qualityRejectionAlert');
    const alertMsg = document.getElementById('rejectionAlertMessage');

    // 1. Enforce that farmer has uploaded or captured photos
    if (!AppState.uploadedFiles || AppState.uploadedFiles.length === 0) {
        if (alertBox && alertMsg) {
            alertMsg.textContent = `कृपया गुणवत्ता प्रमाणीकरणासाठी आपल्या ${cropType} शेतमालाचे ४ फोटो थेट कॅमेऱ्याने स्कॅन करा किंवा गॅलरीतून निवडा. (Please capture or upload 4 photos of your harvest.)`;
            alertBox.style.display = 'block';
            alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        showToast(`⚠️ कृपया आधी शेतमालाचे ४ फोटो जोडा.`, 'warning');
        return;
    }

    if (alertBox) alertBox.style.display = 'none';
    showLoading('🔍 Google Gemini Multimodal Vision द्वारे उत्पादनाची सत्यता व गुणवत्ता तपासत आहे...');

    let quality = null;
    try {
        quality = await QualityService.assessLotQuality(AppState.uploadedFiles, cropType, AppState.selectedLang || 'English');
    } catch (err) {
        console.error('Quality assessment error:', err);
    }

    hideLoading();

    // STRICT PRODUCE & COMMODITY VERIFICATION: Reject non-crops, mismatch, blur, or unverified items!
    if (!quality || quality.isCommodityMatch === false || quality.isQualityVerified === false) {
        AppState.currentQualityAnalysis = null;
        const detected = quality?.detectedProduce || 'Unrelated / Unclear Object';
        const reason = quality?.rejectionReason || `अपलोड केलेला फोटो ${cropType} शी जुळत नाही (AI द्वारे आढळले: "${detected}"). कृपया आपल्या प्रत्यक्ष शेतमालाचे स्पष्ट, पुरेसा प्रकाश असलेले फोटो काढून पुन्हा प्रयत्न करा.`;

        if (alertBox && alertMsg) {
            alertMsg.textContent = reason;
            alertBox.style.display = 'block';
            alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        const uploadBox = document.getElementById('uploadedState');
        if (uploadBox) {
            uploadBox.style.border = '2px dashed #EF4444';
            uploadBox.style.background = '#FEF2F2';
        }

        showToast(`⚠️ गुणवत्ता तपासणी नाकारली: ${detected}`, 'error');
        return; // Strictly block progression to Step 2!
    }

    // Quality Successfully Verified
    if (alertBox) alertBox.style.display = 'none';
    AppState.currentQualityAnalysis = quality;

    const uploadBox = document.getElementById('uploadedState');
    if (uploadBox) {
        uploadBox.style.border = '2px solid #22C55E';
        uploadBox.style.background = '#F0FDF4';
    }

    // Populate Step 2 AI Insight Screen
    const aiDesc = document.getElementById('aiDescription');
    const badge = document.getElementById('qualityBadge');
    if (aiDesc) {
        const defectsStr = (quality.defectsIdentified && quality.defectsIdentified.length > 0) ? `\n• AI निरीक्षण: ${quality.defectsIdentified.join(', ')}` : '';
        aiDesc.textContent = `${cropType} (${variety}) — प्रमाणित दर्जा: ${quality.overallGrade || 'Grade A'} | ताजेपणा: ${quality.freshnessScore || 92}% | पृष्ठभाग दोष: ${quality.surfaceDefectsPercent || 2}% | शेल्फ लाइफ: ${quality.shelfLifeDays || 8} दिवस.${defectsStr}\n${quality.description || ''}`;
    }
    if (badge) {
        badge.textContent = `दर्जा: ${quality.overallGrade || 'Grade A'} (${quality.freshnessScore || 92}% ताजेपणा)`;
        badge.className = `quality-badge ${(quality.overallGrade || 'Grade A').toLowerCase().replace(' ', '-')}`;
    }

    showToast(`✅ ${cropType} ची गुणवत्ता प्रमाणित: ${quality.overallGrade} (${quality.freshnessScore}% Fresh)`, 'success');
    goToLotStep(2);
}

async function proceedToPricing() {
    const cropType = document.getElementById('inputCropType')?.value || 'Tomato';
    const variety = document.getElementById('inputVariety')?.value || 'हिमसोना संकरित';
    const quantity = parseFloat(document.getElementById('inputQuantity')?.value) || 500;
    const harvestDate = document.getElementById('inputHarvestDate')?.value || new Date().toISOString().split('T')[0];

    if (!AppState.currentQualityAnalysis || !AppState.currentQualityAnalysis.isQualityVerified) {
        showToast('⚠️ शेतमालाची गुणवत्ता तपासणी पूर्ण केल्याशिवाय भाव निश्चित करता येत नाही.', 'error');
        goToLotStep(1);
        return;
    }

    showLoading('📊 पारदर्शक भाव आणि बाजार शिफारस तयार करत आहे...');

    const qualityGrade = AppState.currentQualityAnalysis.overallGrade || 'Grade A';
    const freshnessScore = AppState.currentQualityAnalysis.freshnessScore || 92;
    const isCutVerified = Boolean(AppState.currentCutAnalysis && AppState.currentCutAnalysis.cutVerified);

    try {
        AppState.currentPriceEstimate = await PriceCalculationService.calculateTransparentPrice({
            cropType,
            quantityKg: quantity,
            qualityGrade,
            freshnessScore,
            isCutVerified,
            originTaluka: 'Niphad'
        });

        AppState.currentMarketComparison = await MarketComparisonService.getComparisonForCrop(cropType, quantity, freshnessScore, qualityGrade);
        AppState.currentMatchedBuyers = await BuyerService.matchBuyersForLot({
            cropType,
            quantityKg: quantity,
            qualityGrade,
            freshnessScore
        });

        AppState.currentRecommendation = await RecommendationService.getSellingRecommendation({
            cropType,
            quantityKg: quantity,
            qualityGrade,
            freshnessScore,
            mandiComparison: AppState.currentMarketComparison,
            matchedBuyers: AppState.currentMatchedBuyers
        });

        AppState.currentGeminiAdvisory = await GeminiAdvisoryService.generateGroundedAdvisory({
            cropType,
            variety,
            quantityKg: quantity,
            qualityGrade,
            freshnessScore,
            harvestDate,
            priceEstimate: AppState.currentPriceEstimate,
            recommendation: AppState.currentRecommendation,
            matchedBuyers: AppState.currentMatchedBuyers
        });
    } catch (err) {
        console.error('Pricing calculation error:', err);
    }

    hideLoading();

    const pe = AppState.currentPriceEstimate || {
        apmcBenchmarkBase: 34.0,
        qualityAdjustment: 3.4,
        demandAdjustment: 1.0,
        transportDeduction: 2.0,
        storageHandlingDeduction: 0.4,
        estimatedNetRealizationPerKg: 36.0,
        totalLotValue: (36.0 * quantity)
    };

    // Populate Price Summary UI
    const mktPrice = document.getElementById('marketPrice');
    const frmrPrice = document.getElementById('farmerPrice');
    const totVal = document.getElementById('totalLotValueDisplay');
    const bdBase = document.getElementById('bdBase');
    const bdQuality = document.getElementById('bdQuality');
    const bdDemand = document.getElementById('bdDemand');
    const bdTransport = document.getElementById('bdTransport');
    const bdStorage = document.getElementById('bdStorage');
    const bdTotal = document.getElementById('bdTotal');

    if (mktPrice) mktPrice.textContent = `₹ ${pe.apmcBenchmarkBase.toFixed(2)}`;
    if (frmrPrice) frmrPrice.textContent = `₹ ${pe.estimatedNetRealizationPerKg.toFixed(2)}`;
    if (totVal) totVal.textContent = `एकूण मूल्य: ₹ ${pe.totalLotValue.toLocaleString('en-IN')}`;
    if (bdBase) bdBase.textContent = `₹ ${pe.apmcBenchmarkBase.toFixed(2)}`;
    if (bdQuality) bdQuality.textContent = `${pe.qualityAdjustment >= 0 ? '+' : ''}₹ ${pe.qualityAdjustment.toFixed(2)}`;
    if (bdDemand) bdDemand.textContent = `+₹ ${pe.demandAdjustment.toFixed(2)}`;
    if (bdTransport) bdTransport.textContent = `-₹ ${pe.transportDeduction.toFixed(2)}`;
    if (bdStorage) bdStorage.textContent = `-₹ ${pe.storageHandlingDeduction.toFixed(2)}`;
    if (bdTotal) bdTotal.textContent = `₹ ${pe.estimatedNetRealizationPerKg.toFixed(2)}`;

    // Populate Decision & Advisory
    const rec = AppState.currentRecommendation;
    if (rec) {
        const actionBadge = document.getElementById('decisionActionBadge');
        const scoreBadge = document.getElementById('decisionOpportunityScore');
        const safeDays = document.getElementById('safeHoldingDaysVal');
        const riskVal = document.getElementById('spoilageRiskVal');
        const forecastVal = document.getElementById('forecastRangeVal');

        if (actionBadge) actionBadge.textContent = rec.actionTitle || '🤝 थेट सत्यापित खरेदीदाराला विका';
        if (scoreBadge) scoreBadge.textContent = `${rec.opportunityScore || 94} / 100`;
        if (safeDays) safeDays.textContent = `🌱 ${rec.holdingRecommendation?.safeHoldingDays || 6} दिवस सुरक्षित`;
        if (riskVal) riskVal.textContent = `🛡️ ${rec.holdingRecommendation?.spoilageRiskLevel || 'कमी'}`;
        if (forecastVal) forecastVal.textContent = `₹ ${rec.holdingRecommendation?.expectedPriceRange?.min || 34} – ₹ ${rec.holdingRecommendation?.expectedPriceRange?.max || 38} / kg`;
    }

    const advisory = AppState.currentGeminiAdvisory;
    if (advisory) {
        const textElem = document.getElementById('geminiMitraText');
        const pointsList = document.getElementById('geminiKeyPointsList');
        if (textElem) textElem.textContent = advisory.adviceText || advisory.explanation || 'आपल्या उत्कृष्ट पिकासाठी थेट खरेदीदार उपलब्ध आहे.';
        const points = advisory.actionKeyPoints || advisory.keyActionPoints || [];
        if (pointsList && points.length > 0) {
            pointsList.innerHTML = points.map(pt => `<li>✓ ${pt}</li>`).join('');
        }
    }

    // Render Mandi Comparison in Step 3
    renderStep3MandiComparison(AppState.currentMarketComparison);

    goToLotStep(3);
}

function renderStep3MandiComparison(comparison) {
    const tableBody = document.getElementById('step3ComparisonTableBody');
    const tipBox = document.getElementById('step3AdvantageTip');
    if (!tableBody || !comparison || !comparison.rankings) return;

    tableBody.innerHTML = comparison.rankings.map((m, idx) => `
        <tr style="${idx === 0 ? 'background:#E8F5E9; font-weight:800;' : ''}">
            <td>${m.mandiName} ${idx === 0 ? '⭐' : ''}</td>
            <td>${m.distanceKm} km</td>
            <td>₹ ${m.modalPricePerKg}</td>
            <td style="color:#C62828;">-₹ ${m.transportCostPerKg}</td>
            <td style="color:#1B5E20; font-size:1.05rem;">₹ ${m.estimatedNetRealizationPerKg}</td>
            <td>₹ ${m.totalLotNetRealization.toLocaleString('en-IN')}</td>
            <td><span class="opp-badge high">${m.recommendationBadge}</span></td>
        </tr>
    `).join('');

    if (tipBox && comparison.recommended) {
        tipBox.innerHTML = `💡 <strong>सर्वोत्तम बाजारपेठ:</strong> ${comparison.recommended.mandiName} (${comparison.recommended.distanceKm} किमी) - वाहतूक खर्च वजा जाता सर्वाधिक निव्वळ प्राप्ती ₹${comparison.recommended.estimatedNetRealizationPerKg}/kg देईल.`;
    }
}

async function saveDigitalLot() {
    const cropType = document.getElementById('inputCropType')?.value || 'Tomato';
    const variety = document.getElementById('inputVariety')?.value || 'हिमसोना संकरित';
    const quantity = parseFloat(document.getElementById('inputQuantity')?.value) || 500;
    const harvestDate = document.getElementById('inputHarvestDate')?.value || new Date().toISOString().split('T')[0];
    const currentUser = AuthService.getCurrentUser();

    if (!AppState.currentQualityAnalysis || !AppState.currentQualityAnalysis.isQualityVerified) {
        showToast('⚠️ शेतमालाची गुणवत्ता प्रमाणीकरण आधी पूर्ण करणे आवश्यक आहे.', 'error');
        goToLotStep(1);
        return;
    }

    showLoading('💾 डिजिटल शेती लॉट तपासणी व सादर करत आहे...');

    const netRate = AppState.currentPriceEstimate ? AppState.currentPriceEstimate.estimatedNetRealizationPerKg : 36.0;
    const totalVal = AppState.currentPriceEstimate ? AppState.currentPriceEstimate.totalLotValue : (netRate * quantity);

    const farmerId = currentUser ? (currentUser.userId || currentUser.uid) : 'farmer_mh_001';
    const farmerName = currentUser ? (currentUser.displayName || currentUser.name) : 'रमेश मारुती पाटील';

    const lot = new DigitalAgriculturalLot({
        lotId: `LOT-${Date.now().toString().slice(-6)}`,
        farmerId: farmerId,
        farmerName: farmerName,
        farmerPhone: currentUser ? (currentUser.phone || '9822456789') : '9822456789',
        farmerTaluka: 'Niphad',
        farmerDistrict: 'Nashik',
        cropType,
        variety,
        quantity,
        harvestDate,
        overallQualityGrade: AppState.currentQualityAnalysis.overallGrade,
        freshnessScore: AppState.currentQualityAnalysis.freshnessScore,
        estimatedShelfLifeDays: AppState.currentQualityAnalysis.shelfLifeDays || 7,
        exteriorPhotos: AppState.uploadedFiles,
        internalQualityAnalysis: AppState.currentCutAnalysis ? {
            cutVerified: AppState.currentCutAnalysis.cutVerified,
            internalFreshness: AppState.currentCutAnalysis.internalFreshness,
            moistureContent: AppState.currentCutAnalysis.moistureContent,
            coreDefectsPercent: AppState.currentCutAnalysis.coreDefectsPercent,
            cutImageUrl: AppState.currentCutAnalysis.cutImageUrl
        } : null,
        netPricePerKg: netRate,
        totalLotValue: totalVal,
        status: LOT_STATUSES.PENDING_ADMIN_REVIEW,
        moderationStatus: 'PENDING_ADMIN_REVIEW'
    });

    const preCheck = await LotModerationService.preCheckLot(lot);
    if (!preCheck.passed) {
        hideLoading();
        showToast(`⚠️ लॉट तपासणी त्रुटी: ${preCheck.errors.join(', ')}`, 'warning');
        return;
    }

    const saved = await LotModerationService.submitLotForVerification(lot);
    AppState.currentLotDraft = saved;
    hideLoading();

    showToast('🎉 डिजिटल लॉट सुरक्षितपणे जतन करण्यात आला व मॉडरेटरकडे सादर झाला!', 'success');
    navigateTo('viewMyLots');
}

async function acceptOfferFromStep3() {
    const cropType = document.getElementById('inputCropType')?.value || 'Tomato';
    const variety = document.getElementById('inputVariety')?.value || 'हिमसोना संकरित';
    const quantity = parseFloat(document.getElementById('inputQuantity')?.value) || 500;
    const netPrice = AppState.currentPriceEstimate ? AppState.currentPriceEstimate.estimatedNetRealizationPerKg : 36.0;
    const totalVal = AppState.currentPriceEstimate ? AppState.currentPriceEstimate.totalLotValue : (netPrice * quantity);
    const lotId = `LOT-${Date.now().toString().slice(-6)}`;

    showLoading('🤝 थेट खरेदीदारासोबत सौदा सुरू करत आहे...');
    
    const lot = new DigitalAgriculturalLot({
        lotId,
        cropType,
        variety,
        quantity,
        netPricePerKg: netPrice,
        totalLotValue: totalVal,
        overallQualityGrade: AppState.currentQualityAnalysis?.overallGrade || 'Grade A',
        freshnessScore: AppState.currentQualityAnalysis?.freshnessScore || 94
    });

    const demands = await BuyerService.getActiveDemands(cropType);
    const matchedDemand = demands.length > 0 ? demands[0] : {
        buyerId: 'BUYER-001',
        buyerName: 'सह्याद्री फार्म्स पोस्ट-हार्म्वेस्ट प्रा. लि.',
        buyerType: 'Food Processor & Exporter',
        offeredPricePerKg: netPrice
    };

    try {
        const txn = await TransactionService.createTransactionFromNegotiation({
            lot,
            demand: matchedDemand,
            agreedPricePerKg: netPrice,
            quantityKg: quantity
        });
        AppState.latestTransaction = txn;
    } catch (e) {
        console.error('Txn create error:', e);
    }

    hideLoading();

    const txAmount = document.getElementById('txAmount');
    const txQuality = document.getElementById('txQuality');
    const txLotId = document.getElementById('txLotId');
    const txModal = document.getElementById('transactionComplete');

    if (txAmount) txAmount.textContent = `₹ ${totalVal.toLocaleString('en-IN')}`;
    if (txQuality) txQuality.textContent = `${lot.overallQualityGrade} (${lot.freshnessScore}% ताजेपणा)`;
    if (txLotId) txLotId.textContent = lotId;
    if (txModal) txModal.style.display = 'block';

    showToast('🎉 खरेदीदारासोबत थेट सौदा निश्चित झाला!', 'success');
}

// =========================================================================
// VIEW 3: MY DIGITAL LOTS
// =========================================================================

async function renderMyLots() {
    const container = document.getElementById('fullLotsContainer');
    if (!container) return;

    showLoading('📦 आपले डिजिटल शेती लॉट्स लोड करत आहे...');
    const lots = await firebaseService.getLots();
    hideLoading();

    if (!lots || lots.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; padding:30px; text-align:center; color:#777;">आपल्याकडे सध्या कोणतेही डिजिटल लॉट्स नाहीत. 'नवीन लॉट तयार करा' वर क्लिक करा.</div>`;
        return;
    }

    container.innerHTML = lots.map(lot => `
        <div class="custom-card" style="margin-bottom:var(--s4);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
                <div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <h3 style="margin:0; color:var(--leaf-deep); font-size:1.2rem;">${lot.cropType} (${lot.variety || 'Standard'})</h3>
                        <span class="status-pill ${lot.moderationStatus === 'APPROVED' ? 'verified' : (lot.moderationStatus === 'REJECTED' ? 'rejected' : 'pending')}">
                            ${lot.moderationStatus || 'APPROVED'}
                        </span>
                    </div>
                    <div style="font-size:0.85rem; color:#666; margin-top:4px;">
                        लॉट आयडी: <strong>${lot.lotId}</strong> • प्रमाण: <strong>${lot.quantity} kg</strong> • काढणी तारीख: <strong>${lot.harvestDate}</strong>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:1.3rem; font-weight:900; color:var(--leaf-deep);">₹ ${lot.netPricePerKg || 28.5} / kg</div>
                    <div style="font-size:0.8rem; color:#777;">एकूण मूल्य: ₹ ${(lot.totalLotValue || (lot.quantity * (lot.netPricePerKg || 28.5))).toLocaleString('en-IN')}</div>
                </div>
            </div>

            <div class="inspect-image-strip" style="margin:12px 0;">
                ${(lot.exteriorPhotos || []).slice(0, 4).map(img => `<img src="${img}" class="inspect-image-thumb" alt="Harvest Photo" style="width:75px; height:75px; object-fit:cover; border-radius:6px;">`).join('')}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #eee; padding-top:10px; margin-top:8px;">
                <span style="font-size:0.85rem; color:#555;">
                    दर्जा: <strong>${lot.overallQualityGrade || 'Grade A'} (${lot.freshnessScore || 92}% ताजेपणा)</strong>
                </span>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-secondary" onclick="navigateTo('viewMarketIntel')" style="padding:6px 12px; font-size:0.82rem;">📊 भाव तपासा</button>
                    <button class="btn btn-primary" onclick="navigateTo('viewBuyerMarket')" style="padding:6px 12px; font-size:0.82rem;">🤝 खरेदीदार शोधा</button>
                </div>
            </div>
        </div>
    `).join('');
}

// =========================================================================
// VIEW 4: MARKET INTELLIGENCE & MANDI COMPARISON
// =========================================================================

async function applyMarketIntelFilters() {
    await renderMarketIntel(AppState.selectedCropFilter || 'Tomato');
}

async function renderMarketIntel(cropType = 'Tomato') {
    AppState.selectedCropFilter = cropType;

    // Read filter toolbar values
    const districtFilter = document.getElementById('marketDistrictFilter')?.value || 'All';
    const gradeFilter = document.getElementById('marketGradeFilter')?.value || 'Grade A';
    const farmerOrigin = document.getElementById('marketFarmerOrigin')?.value || 'Nashik';

    // Update active pill state
    document.querySelectorAll('#cropFilterPills .crop-pill-btn').forEach(btn => {
        if (btn.dataset.crop === cropType) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    showLoading(`📊 ${cropType} बाजारभाव आणि मंडी विश्लेषण लोड करत आहे...`);

    const filters = districtFilter !== 'All' ? { district: districtFilter } : {};
    const comparison = await MarketComparisonService.compareMarketsForLot({
        cropType,
        farmerDistrict: farmerOrigin,
        qualityGrade: gradeFilter,
        quantityKg: 1000,
        freshnessScore: 92,
        filters
    });

    const trends = await MarketTrendService.getTrendForCrop(cropType);
    const topModalPrice = comparison?.summaryMetrics?.avgModal || 34.0;
    const topArrivals = comparison?.recommendedMandi?.arrivalVolumeTons || 120;
    const forecast = await PricePredictionService.forecastPriceRange({
        cropType,
        currentPrice: topModalPrice,
        arrivalVolumeTons: topArrivals,
        horizonDays: 5
    });
    hideLoading();

    // 1. Update Data Status Header Badges
    const statusContainer = document.getElementById('marketDataStatusContainer');
    const freshnessText = document.getElementById('marketDataFreshnessText');
    const summaryDataStatus = document.getElementById('summaryDataStatus');
    const summaryMandisCount = document.getElementById('summaryMandisCount');

    const primaryStatus = comparison?.summaryMetrics?.primaryDataStatus || 'demo';
    const primaryStatusLabel = comparison?.summaryMetrics?.primaryDataStatusLabel || 'Demo / Offline Data';

    if (statusContainer) {
        let badgeClass = 'demo';
        let badgeIcon = '🔵';
        if (primaryStatus === 'live') {
            badgeClass = 'live';
            badgeIcon = '🟢';
        } else if (primaryStatus === 'cached') {
            badgeClass = 'cached';
            badgeIcon = '🟡';
        }
        statusContainer.innerHTML = `<span class="data-status-pill ${badgeClass}" id="marketDataStatusBadge">${badgeIcon} ${primaryStatusLabel}</span>`;
    }

    if (freshnessText && comparison.recommendedMandi) {
        const fresh = comparison.recommendedMandi.freshness;
        freshnessText.textContent = `🕒 माहिती स्थिती: ${fresh ? fresh.relativeLabel : 'APMC Benchmark'}`;
    }

    // 2. Update Market Summary Statistics Cards
    const summaryMaxModal = document.getElementById('summaryMaxModal');
    const summaryMaxMarket = document.getElementById('summaryMaxMarket');
    const summaryMinModal = document.getElementById('summaryMinModal');
    const summaryMinMarket = document.getElementById('summaryMinMarket');
    const summarySpread = document.getElementById('summarySpread');
    const summaryAvgModal = document.getElementById('summaryAvgModal');

    if (comparison && comparison.summaryMetrics) {
        const metrics = comparison.summaryMetrics;
        const maxMandi = comparison.rankedMandis.find(m => m.modalPricePerKg === metrics.maxModal);
        const minMandi = comparison.rankedMandis.find(m => m.modalPricePerKg === metrics.minModal);

        if (summaryMaxModal) summaryMaxModal.textContent = `₹ ${metrics.maxModal.toFixed(2)}/kg`;
        if (summaryMaxMarket) summaryMaxMarket.textContent = maxMandi ? `${maxMandi.marketName}` : '--';

        if (summaryMinModal) summaryMinModal.textContent = `₹ ${metrics.minModal.toFixed(2)}/kg`;
        if (summaryMinMarket) summaryMinMarket.textContent = minMandi ? `${minMandi.marketName}` : '--';

        if (summarySpread) summarySpread.textContent = `₹ ${metrics.spreadAmount.toFixed(2)}/kg`;
        if (summaryAvgModal) summaryAvgModal.textContent = `सरासरी भाव: ₹ ${metrics.avgModal.toFixed(2)}/kg`;

        if (summaryDataStatus) summaryDataStatus.textContent = primaryStatus.toUpperCase() === 'LIVE' ? '🟢 LIVE DATA' : (primaryStatus.toUpperCase() === 'CACHED' ? '🟡 CACHED DATA' : '🔵 DEMO / OFFLINE');
        if (summaryMandisCount) summaryMandisCount.textContent = `${comparison.totalMandisCompared} मंड्यांची थेट तुलना`;
    }

    // 3. Render Enriched Mandi Comparison Table
    const tableBody = document.getElementById('marketIntelTableBody');
    if (tableBody) {
        if (!comparison.rankedMandis || comparison.rankedMandis.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color:#777;">निवडलेल्या फिल्टर निकषांनुसार कोणतीही मंडी उपलब्ध नाही. कृपया जिल्हा किंवा पीक बदला.</td></tr>`;
        } else {
            tableBody.innerHTML = comparison.rankedMandis.map((m, idx) => {
                const isTop = idx === 0;
                let statusPillClass = m.dataStatus === 'live' ? 'background:#DCFCE7; color:#166534; border:1px solid #86EFAC;' :
                                      (m.dataStatus === 'cached' ? 'background:#FEF9C3; color:#854D0E; border:1px solid #FDE047;' :
                                      'background:#E0F2FE; color:#075985; border:1px solid #BAE6FD;');
                let statusText = m.dataStatus === 'live' ? '🟢 Live Data' : (m.dataStatus === 'cached' ? '🟡 Cached' : '🔵 Demo Data');

                return `
                    <tr style="${isTop ? 'background:#F0FDF4; font-weight:700;' : ''}">
                        <td>
                            <div style="font-weight:800; color:#1F2937;">${m.marketName} ${isTop ? '<span style="color:#16A34A; font-size:0.8rem; background:#DCFCE7; padding:2px 6px; border-radius:10px;">⭐ सर्वोत्तम</span>' : ''}</div>
                            <div style="font-size:0.75rem; color:#6B7280;">${m.district}, ${m.state} • ${m.variety || 'Standard'}</div>
                        </td>
                        <td style="color:#4B5563; font-weight:600;">
                            ${m.distanceKm} km
                        </td>
                        <td>
                            <div style="font-weight:900; color:#111827; font-size:1.05rem;">₹ ${m.modalPricePerKg.toFixed(2)}/kg</div>
                            <div style="font-size:0.72rem; color:#6B7280;">(₹${m.minPricePerKg.toFixed(1)} - ₹${m.maxPricePerKg.toFixed(1)} • ₹${m.modalPricePerQtl}/qtl)</div>
                        </td>
                        <td>
                            <span style="font-size:0.82rem; color:#374151; font-weight:600;">${m.arrivalVolumeTons} Tons</span>
                        </td>
                        <td style="color:#DC2626; font-weight:700;">
                            -₹ ${m.transportCostPerKg.toFixed(2)}/kg
                        </td>
                        <td>
                            <div style="color:#15803D; font-size:1.15rem; font-weight:900;">₹ ${m.estimatedNetRealizationPerKg.toFixed(2)}/kg</div>
                            <div style="font-size:0.72rem; color:#166534;">एकूण लॉट: ₹ ${m.totalLotNetWorth.toLocaleString('en-IN')}</div>
                        </td>
                        <td>
                            <span style="display:inline-block; padding:3px 8px; border-radius:12px; font-size:0.72rem; font-weight:700; ${statusPillClass}" title="${m.source}">
                                ${statusText}
                            </span>
                        </td>
                    </tr>
                `;
            }).join('');
        }
    }

    // 4. Recommendation Callout
    const tipBox = document.getElementById('intelAdvantageBox');
    if (tipBox && comparison && comparison.recommendedMandi) {
        tipBox.innerHTML = `💡 <strong>शेतकरी शिफारस:</strong> ${comparison.explanation}`;
    }

    // 5. Render Price Trends & Grounded Forecast
    const trendsContainer = document.getElementById('trendStatsGrid');
    if (trendsContainer && trends && forecast) {
        trendsContainer.innerHTML = `
            <div class="trend-stat-card">
                <div class="stat-label">७-दिवसीय सरासरी (7-Day Moving Avg)</div>
                <div class="stat-val">₹ ${forecast.sevenDayMovingAvg.toFixed(2)}/kg</div>
                <div class="stat-note">${trends.trendDirection === 'RISING' ? `📈 वाढता कल (+${trends.trendPercentage || 4.2}%)` : (trends.trendDirection === 'FALLING' ? `📉 घटणारा कल (${trends.trendPercentage}%)` : '⚖️ स्थिर बाजार भाव')}</div>
            </div>
            <div class="trend-stat-card">
                <div class="stat-label">३०-दिवसीय सरासरी (30-Day Benchmark)</div>
                <div class="stat-val">₹ ${forecast.thirtyDayMovingAvg.toFixed(2)}/kg</div>
                <div class="stat-note">हंगाम: <strong>${forecast.seasonality?.stageMr || 'नियमित आवक'}</strong></div>
            </div>
            <div class="trend-stat-card" style="border:1.5px solid #86EFAC; background:#F0FDF4;">
                <div class="stat-label" style="color:#166534; font-weight:800;">अपेक्षित पुढील ५ दिवस (5-Day Outlook)</div>
                <div class="stat-val" style="color:#15803D;">₹ ${forecast.expectedOpportunityRange.min} – ₹ ${forecast.expectedOpportunityRange.max} <span style="font-size:0.8rem; font-weight:600;">/kg</span></div>
                <div class="stat-note" style="color:#166534;">🎯 विश्वासार्हता: <strong>${forecast.confidencePercent}% (${forecast.confidenceLevel})</strong> • ${forecast.arrivalPressure?.pressureLevelMr || 'संतुलित आवक'}</div>
            </div>
        `;
    }
}

// =========================================================================
// VIEW 5: VERIFIED BUYER MARKETPLACE
// =========================================================================

async function renderBuyerMarket(cropFilter = 'All') {
    AppState.selectedBuyerCropFilter = cropFilter;

    // Update active pill state
    document.querySelectorAll('#buyerCropFilterPills .crop-pill-btn').forEach(btn => {
        if (btn.dataset.crop === cropFilter) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    const container = document.getElementById('buyerDemandsGrid');
    if (!container) return;

    const isEng = AppState.selectedLang === "English";
    const isHin = AppState.selectedLang === "Hindi (हिंदी)";

    const labels = {
        loading: isEng ? "Loading active buyer demands..." : (isHin ? "क्रेता मांगें लोड हो रही हैं..." : "खरेदीदार मागण्या लोड करत आहे..."),
        noDemands: isEng ? `Currently no active buyer demands found for ${cropFilter === 'All' ? 'selected crops' : cropFilter}.` : (isHin ? `वर्तमान में ${cropFilter === 'All' ? '' : cropFilter} के लिए खरीदार मांगें उपलब्ध नहीं हैं.` : `सध्या ${cropFilter === 'All' ? '' : cropFilter} पिकासाठी खरेदीदार मागण्या उपलब्ध नाहीत.`),
        cropVariety: isEng ? "🌾 Crop / Variety:" : (isHin ? "🌾 फसल / किस्म:" : "🌾 पीक / वाण:"),
        allVarieties: isEng ? "All Varieties" : (isHin ? "सभी किस्में" : "सर्व वाण"),
        minGrade: isEng ? "🎯 Min Quality:" : (isHin ? "🎯 न्यूनतम ग्रेड:" : "🎯 किमान दर्जा:"),
        reqQty: isEng ? "📦 Required Qty:" : (isHin ? "📦 आवश्यक मात्रा:" : "📦 आवश्यक वजन:"),
        delivery: isEng ? "📅 Delivery:" : (isHin ? "📅 डिलीवरी:" : "📅 डिलिव्हरी:"),
        offeredRate: isEng ? "💰 Offered Rate:" : (isHin ? "💰 ऑफर दर:" : "💰 ऑफर दर:"),
        pickupFarm: isEng ? "🚚 Direct Farmgate Pickup" : (isHin ? "🚚 खेत से सीधा पिकअप" : "🚚 शेतावर थेट पिकअप"),
        hubDelivery: isEng ? "📍 Hub Delivery" : (isHin ? "📍 हब डिलीवरी" : "📍 हब डिलिव्हरी"),
        match: isEng ? "Match" : (isHin ? "मिलान" : "जुळणी"),
        trust: isEng ? "Trust" : (isHin ? "Trust" : "Trust"),
        whyProfitable: isEng ? "✅ Why this match is profitable:" : (isHin ? "✅ यह सौदा क्यों फायदेमंद है?" : "✅ ही जुळणी का फायदेशीर आहे?"),
        mismatch: isEng ? "⚠️ Compatibility Notice:" : (isHin ? "⚠️ मिलान विसंगति:" : "⚠️ जुळणीतील विसंगती:"),
        qualityPrefix: isEng ? "Quality:" : (isHin ? "गुणवत्ता:" : "दर्जा:"),
        logisticsPrefix: isEng ? "Logistics:" : (isHin ? "परिवहन:" : "वाहतूक:"),
        netPrefix: isEng ? "Net Realization:" : (isHin ? "निव्वळ प्राप्ती:" : "निव्वळ प्राप्ती:"),
        totalPrefix: isEng ? "Total:" : (isHin ? "कुल:" : "एकूण:"),
        qualityFitDefault: isEng ? "Meets certified grading criteria" : (isHin ? "प्रमाणित ग्रेड मानदंड" : "प्रमाणित प्रतवारी"),
        logisticsFitDefault: isEng ? "Within direct pickup radius" : (isHin ? "स्थानीय क्लस्टर पिकअप" : "स्थानिक कक्षेत"),
        btnNegotiate: isEng ? "📝 Negotiate" : (isHin ? "📝 बातचीत करें" : "📝 वाटाघाटी करा"),
        btnInstantDeal: isEng ? "✅ Instant Deal" : (isHin ? "✅ सीधा सौदा करें" : "✅ थेट सौदा करा"),
        btnEscrowPay: isEng ? "💳 Escrow Pay" : (isHin ? "💳 एस्क्रो भुगतान" : "💳 एस्क्रो पे")
    };

    showLoading(labels.loading);
    const demands = await BuyerService.getActiveDemands(cropFilter);
    hideLoading();

    if (!demands || demands.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; padding:30px; text-align:center; color:#777;">${labels.noDemands}</div>`;
        return;
    }

    const currentLot = AppState.currentLotDraft || new DigitalAgriculturalLot({
        cropType: cropFilter === 'All' ? 'Tomato' : cropFilter,
        variety: 'Himsona',
        quantity: 500,
        overallQualityGrade: 'Grade A',
        freshnessScore: 92
    });

    container.innerHTML = demands.map(d => {
        const evalResult = MatchingService.evaluateMatch(currentLot, d, 'Nashik');
        const isMatch = evalResult.isCompatible;
        const details = evalResult.matchDetails || {};

        const minPrice = d.minOfferedPricePerKg || d.offeredPricePerKg;
        const maxPrice = d.maxOfferedPricePerKg || (d.offeredPricePerKg + 2.0);
        const priceRangeDisplay = maxPrice > minPrice ? `₹ ${minPrice.toFixed(2)} - ₹ ${maxPrice.toFixed(2)}/kg` : `₹ ${d.offeredPricePerKg.toFixed(2)}/kg`;

        const pickupBadge = d.pickupProvided
            ? `<span style="background:#DCFCE7; color:#166534; font-size:0.72rem; padding:2px 6px; border-radius:4px; font-weight:700;">${labels.pickupFarm}</span>`
            : `<span style="background:#F3F4F6; color:#4B5563; font-size:0.72rem; padding:2px 6px; border-radius:4px; font-weight:700;">${labels.hubDelivery} (${evalResult.distanceKm} km)</span>`;

        return `
            <div class="buyer-opp-card" style="border: 1px solid ${isMatch ? '#86EFAC' : '#E5E7EB'}; background: ${isMatch ? '#FAFCF8' : '#FFF'};">
                <div class="section-header-row" style="margin-bottom:8px;">
                    <div>
                        <h3 style="font-size:1.15rem; color:var(--leaf-deep); margin:0;">${d.buyerName}</h3>
                        <span style="font-size:0.8rem; color:#666;">${d.companyType || d.buyerType} • ${d.preferredLocation || d.deliveryHub || d.hubLocation || 'Nashik'}</span>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px;">
                        <span class="trust-score-badge highly-trusted" style="font-size:0.75rem;">
                            🛡️ ${labels.trust} ${d.trustScore || (d.reliabilityScore ? ((d.reliabilityScore/5)*100).toFixed(0) : 94)}/100
                        </span>
                        <span class="match-score-pill ${evalResult.matchScore >= 80 ? 'high-match' : (evalResult.matchScore >= 60 ? 'med-match' : 'low-match')}" style="font-size:0.75rem;">
                            🎯 ${evalResult.matchScore}% ${labels.match}
                        </span>
                    </div>
                </div>

                <!-- Structured Requirements Grid -->
                <div class="demand-meta-box" style="margin:10px 0; background:#FFF; border:1px solid #E5E7EB; border-radius:8px; padding:10px; font-size:0.82rem;">
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                        <div><strong>${labels.cropVariety}</strong> ${d.cropType} (${d.varietyPreference || d.variety || labels.allVarieties})</div>
                        <div><strong>${labels.minGrade}</strong> <span style="font-weight:700; color:#1E40AF;">${d.minQualityGrade}+</span></div>
                        <div><strong>${labels.reqQty}</strong> ${Number(d.requiredQuantityKg).toLocaleString('en-IN')} kg</div>
                        <div><strong>${labels.delivery}</strong> ${d.requiredDeliveryDate}</div>
                    </div>
                    <div style="margin-top:6px; padding-top:6px; border-top:1px dashed #E5E7EB; display:flex; justify-content:space-between; align-items:center;">
                        <div><strong>${labels.offeredRate}</strong> <span style="color:#1B5E20; font-weight:900; font-size:1rem;">₹ ${d.offeredPricePerKg}/kg</span> <span style="font-size:0.72rem; color:#6B7280;">(${priceRangeDisplay})</span></div>
                        ${pickupBadge}
                    </div>
                </div>

                <!-- Match Reason Explainer -->
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:8px; font-size:0.76rem; margin-bottom:10px;">
                    <div style="font-weight:700; color:#166534; margin-bottom:3px;">
                        ${isMatch ? labels.whyProfitable : labels.mismatch}
                    </div>
                    <div style="color:#15803D; line-height:1.4;">
                        • ${labels.qualityPrefix} ${details.qualityFit ? details.qualityFit.explanation : labels.qualityFitDefault}<br>
                        • ${labels.logisticsPrefix} ${details.logisticsFit ? details.logisticsFit.explanation : labels.logisticsFitDefault}<br>
                        • ${labels.netPrefix} ₹ ${evalResult.estimatedNetRealization.toFixed(2)}/kg (${labels.totalPrefix} ₹ ${evalResult.totalLotNetValue.toLocaleString('en-IN')})
                    </div>
                </div>

                <div style="display:flex; gap:8px; margin-top:8px;">
                    <button class="btn btn-secondary" onclick="window.openNegotiationForDemand('${d.demandId}')" style="flex:1; padding:8px; font-size:0.82rem;">
                        ${labels.btnNegotiate}
                    </button>
                    <button class="btn btn-primary" onclick="window.quickAcceptDealForDemand('${d.demandId}')" style="flex:1; padding:8px; font-size:0.82rem;">
                        ${labels.btnInstantDeal}
                    </button>
                    <button class="btn btn-primary" onclick="window.openPaymentCheckoutForLot({ lotId: '${d.demandId}', cropType: '${d.cropType}', quantityKg: ${d.requiredQuantityKg || 500}, pricePerKg: ${d.offeredPricePerKg || 35.0}, farmerName: 'Ramesh Patil', buyerName: '${d.buyerName}' })" style="padding:8px 10px; font-size:0.82rem; background:#059669; border-color:#059669;">
                        ${labels.btnEscrowPay}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Negotiation Handlers
window.openNegotiationForDemand = async function(demandId) {
    const demands = await BuyerService.getActiveDemands();
    const demand = demands.find(d => d.demandId === demandId);
    if (!demand) return;

    const lot = AppState.currentLotDraft || new DigitalAgriculturalLot({
        cropType: demand.cropType,
        overallQualityGrade: demand.minQualityGrade || 'Grade A',
        quantity: 500,
        freshnessScore: 92
    });

    showLoading('🤝 वाटाघाटी कक्ष उघडत आहे...');
    AppState.activeNegotiation = await NegotiationService.initiateNegotiation({
        lot,
        demand,
        proposedPrice: demand.offeredPricePerKg
    });
    hideLoading();

    document.getElementById('negBuyerNameDisplay').textContent = demand.buyerName;
    document.getElementById('negCropDisplay').textContent = lot.cropType;
    document.getElementById('negQtyDisplay').textContent = `${lot.quantity} kg`;
    document.getElementById('negGradeDisplay').textContent = lot.overallQualityGrade;
    document.getElementById('counterOfferPriceInput').value = demand.offeredPricePerKg;
    document.getElementById('negTotalPayoutDisplay').textContent = `₹ ${(demand.offeredPricePerKg * lot.quantity).toLocaleString('en-IN')}`;

    renderNegotiationTimeline(AppState.activeNegotiation);
    document.getElementById('negotiationModal').style.display = 'flex';
};

window.quickAcceptDealForDemand = async function(demandId) {
    const demands = await BuyerService.getActiveDemands();
    const demand = demands.find(d => d.demandId === demandId);
    if (!demand) return;

    const lot = AppState.currentLotDraft || new DigitalAgriculturalLot({
        cropType: demand.cropType,
        overallQualityGrade: demand.minQualityGrade || 'Grade A',
        quantity: 500,
        freshnessScore: 92
    });

    showLoading('🤝 थेट सौदा निश्चित करत आहे...');
    try {
        const txn = await TransactionService.createTransactionFromNegotiation({
            lot,
            demand,
            agreedPricePerKg: demand.offeredPricePerKg,
            quantityKg: lot.quantity
        });
        AppState.latestTransaction = txn;
        hideLoading();
        showToast('🎉 सौदा निश्चित झाला! व्यवहार पावती तयार करण्यात आली आहे.', 'success');
        navigateTo('viewTransactions');
    } catch (e) {
        hideLoading();
        showToast('सौदा तयार करताना त्रुटी आली', 'warning');
    }
};

function renderNegotiationTimeline(negotiation) {
    const container = document.getElementById('negotiationTimelineContainer');
    if (!container || !negotiation || !negotiation.timeline) return;

    container.innerHTML = negotiation.timeline.map(item => `
        <div class="neg-history-item ${item.sender}">
            <div style="font-size:0.75rem; color:#666;">${item.sender === 'farmer' ? '👨‍🌾 शेतकरी' : '🏢 खरेदीदार'} • ${item.timestamp}</div>
            <div style="font-size:0.95rem; font-weight:800; color:var(--soil-deep);">${item.message}</div>
        </div>
    `).join('');
}

// =========================================================================
// VIEW 6: SMART VILLAGE POOLING
// =========================================================================

async function renderSmartPooling() {
    const container = document.getElementById('poolingClustersGrid');
    if (!container) return;

    const isEng = AppState.selectedLang === "English";
    const isHin = AppState.selectedLang === "Hindi (हिंदी)";

    const labels = {
        loading: isEng ? "Loading village freight pools..." : (isHin ? "ग्राम परिवहन पूल लोड हो रहे हैं..." : "गाव पातळीवरील पूलिंग लोड करत आहे..."),
        noPools: isEng ? "No active pooling clusters at the moment." : (isHin ? "वर्तमान में कोई सक्रिय पूलिंग क्लस्टर नहीं है." : "सध्या सक्रिय पूलिंग क्लस्टर्स उपलब्ध नाहीत."),
        readyStatus: isEng ? "🚚 Ready for Dispatch" : (isHin ? "🚚 रवानगी के लिए तैयार" : "🚚 रवाना होण्यास तयार"),
        poolingStatus: isEng ? "⏳ Aggregating Farmers" : (isHin ? "⏳ किसान जुड़ाव जारी" : "⏳ शेतकरी जोडणी सुरू"),
        savingsTitle: isEng ? "Shared Freight Savings" : (isHin ? "सामूहिक मालभाड़ा बचत" : "सामायिक वाहतूक बचत"),
        savingsSuffix: isEng ? "SAVINGS" : (isHin ? "बचत" : "बचत"),
        individual: isEng ? "Individual:" : (isHin ? "व्यक्तिगत:" : "वैयक्तिक:"),
        pooledRate: isEng ? "Pooled Rate:" : (isHin ? "पूलिंग दर:" : "पूलिंग दर:"),
        filledCap: isEng ? "Capacity Filled" : (isHin ? "भरी गई क्षमता" : "भरलेली क्षमता"),
        destMarket: isEng ? "Destination Mandi / Buyer:" : (isHin ? "गंतव्य मंडी / खरीदार:" : "गंतव्य बाजार / खरेदीदार:"),
        joinedFarmers: isEng ? "Participating Farmers:" : (isHin ? "शामिल किसान:" : "सहभागी शेतकरी:"),
        farmersSuffix: isEng ? "farmers joined" : (isHin ? "किसान जुड़े" : "शेतकरी जोडले गेले"),
        dispatchDate: isEng ? "Expected Dispatch:" : (isHin ? "अनुमानित रवानगी तिथि:" : "अपेक्षित रवानगी तारीख:"),
        btnJoin: isEng ? "🚜 Join This Village Pool" : (isHin ? "🚜 इस पूलिंग समूह में शामिल हों" : "🚜 या पूलिंग गटामध्ये सामील व्हा")
    };

    showLoading(labels.loading);
    const clusters = await PoolingService.getActiveClusters();
    hideLoading();

    if (!clusters || clusters.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; padding:30px; text-align:center; color:#777;">${labels.noPools}</div>`;
        return;
    }

    container.innerHTML = clusters.map(c => {
        const fillPct = Math.min(100, Math.round((c.currentPooledKg / c.targetCapacityKg) * 100));
        const isReady = c.status === 'FULL_READY_TO_DISPATCH';

        return `
            <div class="pool-cluster-card">
                <div>
                    <div class="section-header-row">
                        <div>
                            <h3 style="font-size:1.15rem; color:var(--soil-deep); margin:0;">🚜 ${c.hubVillage}</h3>
                            <span style="font-size:0.8rem; color:#666;">Taluka: ${c.taluka} • ${c.cropType} (${c.overallQualityGrade})</span>
                        </div>
                        <span class="opp-badge high" style="background:${isReady ? '#E8F5E9' : '#FFF8E1'}; color:${isReady ? '#2E7D32' : '#F57F17'};">
                            ${isReady ? labels.readyStatus : labels.poolingStatus}
                        </span>
                    </div>

                    <div class="savings-banner">
                        <div>
                            <span style="font-size:0.75rem; color:#2E7D32; font-weight:800; text-transform:uppercase;">${labels.savingsTitle}</span>
                            <div class="savings-pct-huge">${c.savingsPercentage}% ${labels.savingsSuffix}</div>
                        </div>
                        <div style="text-align:right;">
                            <div style="font-size:0.75rem; color:#555;">${labels.individual} <span style="color:#C62828; text-decoration:line-through;">₹${c.individualFreightPerKg}/kg</span></div>
                            <div style="font-size:0.95rem; font-weight:900; color:#1B5E20;">${labels.pooledRate} ₹${c.pooledFreightPerKg}/kg</div>
                        </div>
                    </div>

                    <div class="pool-progress-container">
                        <div style="display:flex; justify-content:space-between; font-size:0.82rem; font-weight:700;">
                            <span>${labels.filledCap} (${fillPct}%)</span>
                            <span>${c.currentPooledKg.toLocaleString('en-IN')} / ${c.targetCapacityKg.toLocaleString('en-IN')} kg</span>
                        </div>
                        <div class="pool-progress-bar">
                            <div class="pool-progress-fill" style="width:${fillPct}%;"></div>
                        </div>
                    </div>

                    <div class="demand-meta-box">
                        <div><strong>${labels.destMarket}</strong> ${c.destinationMarket}</div>
                        <div><strong>${labels.joinedFarmers}</strong> ${c.participatingFarmersCount} ${labels.farmersSuffix}</div>
                        <div><strong>${labels.dispatchDate}</strong> ${c.dispatchDate}</div>
                    </div>
                </div>

                <div style="margin-top:var(--s4);">
                    <button class="btn btn-primary" onclick="window.joinVillagePool('${c.clusterId}')" style="width:100%;">
                        ${labels.btnJoin}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

window.joinVillagePool = async function(clusterId) {
    const lot = AppState.currentLotDraft || new DigitalAgriculturalLot({
        cropType: 'Tomato',
        overallQualityGrade: 'Grade A',
        quantity: 500,
        freshnessScore: 92
    });

    showLoading('🚜 पूलिंग गटामध्ये सामील होत आहे...');
    try {
        await PoolingService.joinPoolingCluster(clusterId, lot);
        hideLoading();
        showToast('🎉 आपण यशस्वीरित्या पूलिंग गटामध्ये सामील झाला आहात!', 'success');
        renderSmartPooling();
    } catch (e) {
        hideLoading();
        showToast('पूलिंगमध्ये सामील होताना त्रुटी आली', 'warning');
    }
};

// =========================================================================
// VIEW 7: TRANSACTIONS LEDGER & RATINGS
// =========================================================================

async function renderTransactionsList() {
    const container = document.getElementById('transactionsListContainer');
    if (!container) return;

    showLoading('📜 व्यवहार इतिहास व पावत्या लोड करत आहे...');
    const txns = await TransactionService.getTransactions();
    hideLoading();

    if (!txns || txns.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:#777;">सध्या कोणताही व्यवहार उपलब्ध नाही.</div>`;
        return;
    }

    container.innerHTML = txns.map(t => {
        const currentUser = AuthService.getCurrentUser();
        const isFarmer = !currentUser || currentUser.role === 'farmer';
        const canRateBuyer = isFarmer && !t.farmerRated;
        const canRateFarmer = !isFarmer && !t.buyerRated;

        return `
            <div class="custom-card" style="margin-bottom:var(--s4);">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
                    <div>
                        <div style="display:flex; align-items:center; gap:8px;">
                            <h3 style="margin:0; color:var(--leaf-deep); font-size:1.15rem;">व्यवहार क्र. ${t.transactionId}</h3>
                            <span class="status-pill ${t.status === 'COMPLETED' ? 'completed' : 'pending'}">
                                ${t.status}
                            </span>
                        </div>
                        <div style="font-size:0.85rem; color:#666; margin-top:4px;">
                            खरेदीदार: <strong>${t.buyerName}</strong> • शेतकरी: <strong>${t.farmerName}</strong>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:1.3rem; font-weight:900; color:var(--leaf-deep);">₹ ${(t.totalAmount || 28500).toLocaleString('en-IN')}</div>
                        <div style="font-size:0.8rem; color:#777;">${t.quantityKg} kg • ₹${t.agreedPricePerKg}/kg</div>
                    </div>
                </div>

                <div class="demand-meta-box" style="margin:12px 0;">
                    <div><strong>पेमेंट स्थिती:</strong> <span class="status-pill ${t.paymentStatus === 'COMPLETED' ? 'completed' : (t.paymentStatus === 'DELAYED' ? 'delayed' : 'pending')}">${t.paymentStatus || 'COMPLETED'}</span></div>
                    <div><strong>पेमेंट देय तारीख:</strong> ${t.paymentDueDate || 'Immediate'}</div>
                    <div><strong>तारीख:</strong> ${t.createdAt ? new Date(t.createdAt).toLocaleDateString('mr-IN') : '2026-08-31'}</div>
                </div>

                <div style="display:flex; justify-content:flex-end; gap:8px; border-top:1px solid #eee; padding-top:10px; margin-top:8px;">
                    ${canRateBuyer ? `
                        <button class="btn btn-secondary" onclick="window.openFarmerRatingDialog('${t.transactionId}')" style="padding:6px 12px; font-size:0.82rem;">
                            ⭐ खरेदीदाराला रेटिंग द्या
                        </button>
                    ` : ''}
                    ${canRateFarmer ? `
                        <button class="btn btn-secondary" onclick="window.openBuyerRatingDialog('${t.transactionId}')" style="padding:6px 12px; font-size:0.82rem;">
                            ⭐ शेतकऱ्याला रेटिंग द्या
                        </button>
                    ` : ''}
                    <button class="btn btn-primary" onclick="alert('डिजिटल पावती डाउनलोड होत आहे: ' + '${t.transactionId}')" style="padding:6px 12px; font-size:0.82rem;">
                        📄 पावती डाउनलोड करा
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// =========================================================================
// VIEW 8: DEDICATED ADMIN PORTAL & SUB-PANES
// =========================================================================

async function renderAdminPortal() {
    const user = AuthService.getCurrentUser();
    const adminDisplay = document.getElementById('adminActiveUserDisplay');
    if (adminDisplay && user) {
        adminDisplay.textContent = `अधिकारी: ${user.name} (${user.role.toUpperCase()})`;
    }

    // Refresh active pane
    switchAdminTab(AppState.activeAdminTab || 'adminSectionOverview');
}

function switchAdminTab(tabId) {
    AppState.activeAdminTab = tabId;

    // Update pill buttons
    document.querySelectorAll('.admin-subnav-btn').forEach(btn => {
        if (btn.dataset.adminTab === tabId) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Update panes
    document.querySelectorAll('.admin-tab-pane').forEach(pane => {
        if (pane.id === tabId) {
            pane.classList.add('active');
            pane.style.display = 'block';
        } else {
            pane.classList.remove('active');
            pane.style.display = 'none';
        }
    });

    if (tabId === 'adminSectionOverview') renderAdminOverview();
    else if (tabId === 'adminSectionFarmers') renderAdminFarmers();
    else if (tabId === 'adminSectionBuyers') renderAdminBuyers();
    else if (tabId === 'adminSectionLots') renderAdminLots();
    else if (tabId === 'adminSectionDemands') renderAdminDemands();
    else if (tabId === 'adminSectionUsers') renderAdminUsers();
    else if (tabId === 'adminSectionPayments') renderAdminPayments();
    else if (tabId === 'adminSectionDisputes') renderAdminDisputes();
    else if (tabId === 'adminSectionRisk') renderAdminRisk();
    else if (tabId === 'adminSectionAudit') renderAdminAudit();
}

// 1. Admin Overview
async function renderAdminOverview() {
    const metricsGrid = document.getElementById('adminMetricsGrid');
    if (!metricsGrid) return;

    showLoading('📊 प्रशासकीय आकडेवारी लोड करत आहे...');
    const stats = await AnalyticsService.getPlatformOverviewMetrics();
    hideLoading();

    // Update subnav badges
    const bFarmers = document.getElementById('badgePendingFarmers');
    const bBuyers = document.getElementById('badgePendingBuyers');
    const bLots = document.getElementById('badgePendingLots');
    const bDemands = document.getElementById('badgePendingDemands');
    const bDisputes = document.getElementById('badgePendingDisputes');
    const bRisk = document.getElementById('badgePendingRisk');

    if (bFarmers) bFarmers.textContent = stats.pendingFarmerVerifications;
    if (bBuyers) bBuyers.textContent = stats.pendingBuyerVerifications;
    if (bLots) bLots.textContent = stats.lotsAwaitingReview;
    if (bDemands) bDemands.textContent = stats.demandsAwaitingReview;
    if (bDisputes) bDisputes.textContent = stats.openDisputes;
    if (bRisk) bRisk.textContent = stats.activeRiskFlags;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    metricsGrid.innerHTML = `
        <div class="admin-metric-card urgent" onclick="switchAdminTab('adminSectionFarmers')" style="cursor:pointer;">
            <div class="admin-metric-card-header">
                <span class="admin-metric-icon">👨‍🌾</span>
                <span class="status-pill pending">${adm.thVerification}</span>
            </div>
            <div class="admin-metric-value">${stats.pendingFarmerVerifications}</div>
            <div class="admin-metric-label">${adm.tabFarmers}</div>
        </div>

        <div class="admin-metric-card warning" onclick="switchAdminTab('adminSectionBuyers')" style="cursor:pointer;">
            <div class="admin-metric-card-header">
                <span class="admin-metric-icon">🏢</span>
                <span class="status-pill pending">${adm.thVerification}</span>
            </div>
            <div class="admin-metric-value">${stats.pendingBuyerVerifications}</div>
            <div class="admin-metric-label">${adm.tabBuyers}</div>
        </div>

        <div class="admin-metric-card info" onclick="switchAdminTab('adminSectionLots')" style="cursor:pointer;">
            <div class="admin-metric-card-header">
                <span class="admin-metric-icon">📦</span>
                <span class="status-pill pending">${adm.tabLots}</span>
            </div>
            <div class="admin-metric-value">${stats.lotsAwaitingReview}</div>
            <div class="admin-metric-label">${adm.tabLots}</div>
        </div>

        <div class="admin-metric-card success" onclick="switchAdminTab('adminSectionPayments')" style="cursor:pointer;">
            <div class="admin-metric-card-header">
                <span class="admin-metric-icon">💳</span>
                <span class="status-pill completed">${adm.thPaymentStatus}</span>
            </div>
            <div class="admin-metric-value">${stats.activeTransactionsCount}</div>
            <div class="admin-metric-label">${adm.tabPayments}</div>
        </div>

        <div class="admin-metric-card urgent" onclick="switchAdminTab('adminSectionDisputes')" style="cursor:pointer;">
            <div class="admin-metric-card-header">
                <span class="admin-metric-icon">⚠️</span>
                <span class="status-pill rejected">${adm.thDisputeId}</span>
            </div>
            <div class="admin-metric-value">${stats.openDisputes}</div>
            <div class="admin-metric-label">${adm.tabDisputes}</div>
        </div>

        <div class="admin-metric-card warning" onclick="switchAdminTab('adminSectionRisk')" style="cursor:pointer;">
            <div class="admin-metric-card-header">
                <span class="admin-metric-icon">🚨</span>
                <span class="status-pill warning">${adm.thSeverity}</span>
            </div>
            <div class="admin-metric-value">${stats.activeRiskFlags}</div>
            <div class="admin-metric-label">${adm.tabRisk}</div>
        </div>
    `;
}

// 2. Farmer Verification Queue
async function renderAdminFarmers() {
    const container = document.getElementById('adminFarmersListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabFarmers || '👨‍🌾 Loading Farmers Queue...');
    const queue = await VerificationService.getFarmerVerificationQueue();
    hideLoading();

    if (queue.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:#777;">${adm.emptyNoFarmers}</div>`;
        return;
    }

    container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${adm.thName}</th>
                        <th>${adm.thContact}</th>
                        <th>${adm.thVillage}</th>
                        <th>${adm.thFarmSize}</th>
                        <th>${adm.thStatus}</th>
                        <th>${adm.thAction}</th>
                    </tr>
                </thead>
                <tbody>
                    ${queue.map(f => `
                        <tr>
                            <td><strong>${f.name || f.userId}</strong></td>
                            <td>${f.phone || '9822456789'}</td>
                            <td>${f.village || 'Niphad'}, ${f.district || 'Nashik'}</td>
                            <td>${f.farmSizeAcres || 3.5} Acres</td>
                            <td><span class="status-pill pending">${f.verificationStatus || 'PENDING_VERIFICATION'}</span></td>
                            <td>
                                <div class="admin-action-btn-group">
                                    <button class="btn-mini btn-mini-primary" onclick="window.inspectFarmer('${f.userId}')">${adm.btnInspect}</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// 3. Buyer Verification Queue
async function renderAdminBuyers() {
    const container = document.getElementById('adminBuyersListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabBuyers || '🏢 Loading Buyers Queue...');
    const queue = await VerificationService.getBuyerVerificationQueue();
    hideLoading();

    if (queue.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:#777;">${adm.emptyNoBuyers}</div>`;
        return;
    }

    container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${adm.thCompany}</th>
                        <th>${adm.thBuyerCategory}</th>
                        <th>${adm.thGstin}</th>
                        <th>${adm.thLocation}</th>
                        <th>${adm.thStatus}</th>
                        <th>${adm.thAction}</th>
                    </tr>
                </thead>
                <tbody>
                    ${queue.map(b => `
                        <tr>
                            <td><strong>${b.companyName || b.buyerName || b.userId}</strong></td>
                            <td>${b.buyerType || 'Food Processor'}</td>
                            <td><code>${b.gstin || '27AABCS1429B1Z'}</code></td>
                            <td>${b.hubLocation || 'Nashik Hub'}</td>
                            <td><span class="status-pill pending">${b.verificationStatus || 'PENDING_VERIFICATION'}</span></td>
                            <td>
                                <div class="admin-action-btn-group">
                                    <button class="btn-mini btn-mini-primary" onclick="window.inspectBuyer('${b.userId || b.buyerId}')">${adm.btnInspect}</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// 4. Lot Moderation Queue
async function renderAdminLots() {
    const container = document.getElementById('adminLotsListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabLots || '📦 Loading Lot Moderation Queue...');
    const queue = await LotModerationService.getLotsForReview();
    hideLoading();

    if (queue.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:#777;">${adm.emptyNoLots}</div>`;
        return;
    }

    container.innerHTML = queue.map(l => `
        <div class="custom-card" style="margin-bottom:var(--s3);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                    <h4 style="margin:0; color:var(--leaf-deep); font-size:1.1rem;">${l.cropType} (${l.variety || 'Standard'}) • ${l.quantity} kg</h4>
                    <div style="font-size:0.85rem; color:#666; margin-top:2px;">
                        ${adm.thFarmer}: <strong>${l.farmerName}</strong> • ${adm.thDate}: <strong>${l.harvestDate}</strong>
                    </div>
                </div>
                <span class="status-pill pending">${l.moderationStatus || 'PENDING_REVIEW'}</span>
            </div>

            <div class="inspect-image-strip" style="margin:10px 0;">
                ${(l.exteriorPhotos || []).slice(0, 4).map(img => `<img src="${img}" class="inspect-image-thumb" alt="Exterior">`).join('')}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #eee; padding-top:8px;">
                <span style="font-size:0.85rem;">
                    AI Grade: <strong>${l.overallQualityGrade || 'Grade A'}</strong> • Freshness: <strong>${l.freshnessScore || 92}%</strong>
                </span>
                <div class="admin-action-btn-group">
                    <button class="btn-mini btn-mini-primary" onclick="window.inspectLot('${l.lotId}')">${adm.btnModerate}</button>
                </div>
            </div>
        </div>
    `).join('');
}

// 5. Buyer Demands Queue
async function renderAdminDemands() {
    const container = document.getElementById('adminDemandsListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabDemands || '📋 Loading Demands Queue...');
    const demands = await LotModerationService.getDemandsForReview();
    hideLoading();

    if (demands.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:#777;">${adm.emptyNoDemands}</div>`;
        return;
    }

    container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${adm.thBuyer}</th>
                        <th>${adm.thCrop}</th>
                        <th>${adm.thQuantity}</th>
                        <th>${adm.thOfferedPrice}</th>
                        <th>${adm.thStatus}</th>
                        <th>${adm.thAction}</th>
                    </tr>
                </thead>
                <tbody>
                    ${demands.map(d => `
                        <tr>
                            <td><strong>${d.buyerName}</strong></td>
                            <td>${d.cropType} (${d.minQualityGrade}+)</td>
                            <td>${d.requiredQuantityKg} kg</td>
                            <td style="color:#1B5E20; font-weight:800;">₹ ${d.offeredPricePerKg}/kg</td>
                            <td><span class="status-pill pending">${d.moderationStatus || 'PENDING_REVIEW'}</span></td>
                            <td>
                                <div class="admin-action-btn-group">
                                    <button class="btn-mini btn-mini-primary" onclick="LotModerationService.approveDemand('${d.demandId}').then(() => renderAdminDemands())">${adm.btnApprove}</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// 6. User Management
async function renderAdminUsers(searchTerm = '') {
    const container = document.getElementById('adminUsersListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabUsers || '👥 Loading Users...');
    let users = await VerificationService.getAllUsers();
    hideLoading();

    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        users = users.filter(u => 
            (u.name && u.name.toLowerCase().includes(term)) ||
            (u.email && u.email.toLowerCase().includes(term)) ||
            (u.phone && u.phone.includes(term))
        );
    }

    container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${adm.thName}</th>
                        <th>${adm.thRole}</th>
                        <th>${adm.thContact}</th>
                        <th>${adm.thAccountStatus}</th>
                        <th>${adm.thVerification}</th>
                        <th>${adm.thAction}</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.map(u => `
                        <tr>
                            <td><strong>${u.name || u.displayName}</strong></td>
                            <td><span class="status-pill ${u.role === 'admin' || u.role === 'super_admin' ? 'verified' : (u.role === 'buyer' ? 'pending' : 'completed')}">${(u.role || 'farmer').toUpperCase()}</span></td>
                            <td>${u.phone || u.email || 'N/A'}</td>
                            <td><span class="status-pill ${u.accountStatus === 'ACTIVE' ? 'completed' : 'suspended'}">${u.accountStatus}</span></td>
                            <td><span class="status-pill ${u.verificationStatus === 'VERIFIED' ? 'verified' : 'pending'}">${u.verificationStatus}</span></td>
                            <td>
                                <div class="admin-action-btn-group">
                                    <button class="btn-mini btn-mini-primary" onclick="window.inspectUser('${u.userId}')">${adm.btnManage}</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// 7. Payment Monitoring
async function renderAdminPayments() {
    const container = document.getElementById('adminPaymentsListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabPayments || '💳 Loading Payments...');
    const txns = await TransactionService.getTransactions();
    hideLoading();

    container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${adm.thTxnId}</th>
                        <th>${adm.thBuyer}</th>
                        <th>${adm.thFarmer}</th>
                        <th>${adm.thAmount}</th>
                        <th>${adm.thPaymentStatus}</th>
                        <th>${adm.thDelay}</th>
                    </tr>
                </thead>
                <tbody>
                    ${txns.map(t => `
                        <tr>
                            <td><code>${t.transactionId}</code></td>
                            <td>${t.buyerName}</td>
                            <td>${t.farmerName}</td>
                            <td style="font-weight:800; color:#1B5E20;">₹ ${(t.totalAmount || 28500).toLocaleString('en-IN')}</td>
                            <td><span class="status-pill ${t.paymentStatus === 'COMPLETED' ? 'completed' : (t.paymentStatus === 'DELAYED' ? 'delayed' : 'pending')}">${t.paymentStatus || 'COMPLETED'}</span></td>
                            <td>${t.delayDurationHours > 0 ? `<span style="color:#DC2626; font-weight:800;">${t.delayDurationHours} hrs</span>` : '0 hrs (On-Time)'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// 8. Dispute Center
async function renderAdminDisputes() {
    const container = document.getElementById('adminDisputesListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabDisputes || '⚠️ Loading Disputes...');
    const disputes = await DisputeService.getDisputes();
    hideLoading();

    if (disputes.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:#777;">${adm.emptyNoDisputes}</div>`;
        return;
    }

    container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${adm.thDisputeId}</th>
                        <th>${adm.thClaimant}</th>
                        <th>${adm.thCategory}</th>
                        <th>${adm.thStatus}</th>
                        <th>${adm.thDate}</th>
                        <th>${adm.thAction}</th>
                    </tr>
                </thead>
                <tbody>
                    ${disputes.map(d => `
                        <tr>
                            <td><code>${d.disputeId}</code></td>
                            <td>${d.raisedByName || d.raisedBy} (${d.claimantRole || 'Farmer'})</td>
                            <td>${d.category}</td>
                            <td><span class="status-pill ${d.status === 'RESOLVED' ? 'completed' : 'rejected'}">${d.status}</span></td>
                            <td>${d.createdAt ? new Date(d.createdAt).toLocaleDateString() : '2026-08-31'}</td>
                            <td>
                                <div class="admin-action-btn-group">
                                    <button class="btn-mini btn-mini-primary" onclick="window.inspectDispute('${d.disputeId}')">${adm.btnOpenCase}</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// 9. Risk Flags Center
async function renderAdminRisk() {
    const container = document.getElementById('adminRiskListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabRisk || '🚨 Loading Risk Flags...');
    const flags = await RiskService.getActiveRiskFlags();
    hideLoading();

    if (flags.length === 0) {
        container.innerHTML = `<div style="padding:30px; text-align:center; color:#777;">${adm.emptyNoRisk}</div>`;
        return;
    }

    container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${adm.thFlagId}</th>
                        <th>${adm.thCategory}</th>
                        <th>${adm.thTarget}</th>
                        <th>${adm.thSeverity}</th>
                        <th>${adm.thDetails}</th>
                        <th>${adm.thAction}</th>
                    </tr>
                </thead>
                <tbody>
                    ${flags.map(f => `
                        <tr>
                            <td><code>${f.flagId}</code></td>
                            <td><strong>${f.flagType}</strong></td>
                            <td>${f.targetUserId}</td>
                            <td><span class="status-pill ${f.severity === 'HIGH' ? 'high-risk' : 'warning'}">${f.severity}</span></td>
                            <td>${f.details || 'Suspicious behavior detected'}</td>
                            <td>
                                <div class="admin-action-btn-group">
                                    <button class="btn-mini btn-mini-primary" onclick="RiskService.resolveRiskFlag('${f.flagId}', 'Reviewed and cleared by Admin').then(() => renderAdminRisk())">${adm.btnResolveFlag}</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// 10. Audit Logs
async function renderAdminAudit() {
    const container = document.getElementById('adminAuditListContainer');
    if (!container) return;

    const dict = I18N_DICTIONARY[AppState.selectedLang] || I18N_DICTIONARY["Marathi (मराठी)"];
    const adm = dict.adminPortal;

    showLoading(adm.tabAudit || '📜 Loading Audit Logs...');
    const logs = await AuditService.getAuditLogs(30);
    hideLoading();

    container.innerHTML = `
        <div class="admin-table-wrapper">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>${adm.thTimestamp}</th>
                        <th>${adm.thAdmin}</th>
                        <th>${adm.thAction}</th>
                        <th>${adm.thTarget}</th>
                        <th>${adm.thReason}</th>
                    </tr>
                </thead>
                <tbody>
                    ${logs.map(l => `
                        <tr>
                            <td style="font-size:0.75rem; color:#666;">${new Date(l.timestamp).toLocaleTimeString()}</td>
                            <td><strong>${l.performedByName || l.performedBy}</strong></td>
                            <td><span class="status-pill verified">${l.action}</span></td>
                            <td><code>${l.targetEntityId}</code></td>
                            <td>${l.reason || 'Administrative decision'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// =========================================================================
// ADMIN INSPECTION MODALS & ACTIONS
// =========================================================================

window.inspectFarmer = async function(userId) {
    const users = await VerificationService.getAllUsers();
    const user = users.find(u => u.userId === userId) || {
        userId,
        name: 'रमेश मारुती पाटील',
        phone: '9822456789',
        village: 'Niphad',
        district: 'Nashik',
        farmSizeAcres: 3.5,
        primaryCrops: ['Tomato', 'Onion'],
        verificationStatus: 'PENDING_VERIFICATION'
    };

    AppState.activeInspectItem = user;
    const body = document.getElementById('adminFarmerModalBody');
    if (body) {
        body.innerHTML = `
            <div class="demand-meta-box">
                <div><strong>नाव:</strong> ${user.name}</div>
                <div><strong>मोबाईल:</strong> ${user.phone || '9822456789'}</div>
                <div><strong>गाव व जिल्हा:</strong> ${user.village || 'Niphad'}, ${user.district || 'Nashik'}</div>
                <div><strong>शेती क्षेत्र:</strong> ${user.farmSizeAcres || 3.5} Acres</div>
                <div><strong>प्रमुख पिके:</strong> ${(user.primaryCrops || ['Tomato']).join(', ')}</div>
            </div>
            <div class="inspect-box" style="margin-top:10px;">
                <h4>📄 ओळख व जमीन पुरावे (Documents)</h4>
                <div style="font-size:0.85rem; color:#444;">
                    ✓ आधार कार्ड: <code>XXXXXXXX4912</code> (प्रमाणित)<br>
                    ✓ ७/१२ उतारा / जमीन महसूल नोंद: <code>GAT-NO-142/NIPHAD</code> (प्रमाणित)
                </div>
            </div>
        `;
    }

    document.getElementById('adminFarmerModal').style.display = 'flex';
};

window.inspectBuyer = async function(userId) {
    const queue = await VerificationService.getBuyerVerificationQueue();
    const buyer = queue.find(b => b.userId === userId || b.buyerId === userId) || {
        userId,
        companyName: 'सह्याद्री अ‍ॅग्रो प्रोसेसिंग प्रा. लि.',
        buyerType: 'Food Processor',
        gstin: '27AABCS1429B1Z',
        hubLocation: 'Nashik Agro Mega Park'
    };

    AppState.activeInspectItem = buyer;
    const body = document.getElementById('adminBuyerModalBody');
    if (body) {
        body.innerHTML = `
            <div class="demand-meta-box">
                <div><strong>कंपनी / पेढी नाव:</strong> ${buyer.companyName}</div>
                <div><strong>खरेदीदार प्रकार:</strong> ${buyer.buyerType}</div>
                <div><strong>GSTIN / परवाना क्र.:</strong> <code>${buyer.gstin}</code></div>
                <div><strong>संकलन केंद्र:</strong> ${buyer.hubLocation}</div>
            </div>
            <div class="inspect-box" style="margin-top:10px;">
                <h4>🏢 व्यावसायिक पडताळणी</h4>
                <div style="font-size:0.85rem; color:#444;">
                    ✓ GSTN Active Status: <strong>VALID</strong><br>
                    ✓ FSSAI फूड लायसन्स: <code>11520038000192</code>
                </div>
            </div>
        `;
    }

    document.getElementById('adminBuyerModal').style.display = 'flex';
};

window.inspectLot = async function(lotId) {
    const lots = await firebaseService.getLots();
    const lot = lots.find(l => l.lotId === lotId) || {
        lotId,
        farmerId: 'farmer_mh_001',
        farmerName: 'रमेश पाटील',
        cropType: 'Tomato',
        variety: 'Himsona',
        quantity: 1000,
        harvestDate: '2026-08-30',
        overallQualityGrade: 'Grade A',
        freshnessScore: 94,
        exteriorPhotos: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400']
    };

    AppState.activeInspectItem = lot;
    const body = document.getElementById('adminLotModalBody');
    if (body) {
        body.innerHTML = `
            <div class="demand-meta-box">
                <div><strong>लॉट आयडी:</strong> ${lot.lotId}</div>
                <div><strong>पिकाचा तपशील:</strong> ${lot.cropType} (${lot.variety || 'Standard'}) • ${lot.quantity} kg</div>
                <div><strong>शेतकरी:</strong> ${lot.farmerName}</div>
                <div><strong>काढणी तारीख:</strong> ${lot.harvestDate}</div>
            </div>

            <h4 style="margin:10px 0 4px 0; color:var(--leaf-deep);">📸 ४-कोनांचे फोटो व अंतर्गत कट तपासणी</h4>
            <div class="inspect-image-strip">
                ${(lot.exteriorPhotos || []).slice(0, 4).map(img => `<img src="${img}" class="inspect-image-thumb" alt="Lot Image">`).join('')}
            </div>

            <div class="inspect-grid-2col">
                <div class="inspect-box">
                    <h4>✨ AI गुणवत्ता विश्लेषण</h4>
                    <div style="font-size:0.85rem;">
                        दर्जा: <strong>${lot.overallQualityGrade || 'Grade A'}</strong><br>
                        ताजेपणा: <strong>${lot.freshnessScore || 94}%</strong><br>
                        किड / डाग प्रमाण: <strong>0% (दोषमुक्त)</strong>
                    </div>
                </div>
                <div class="inspect-box">
                    <h4>🚨 फसवणूक / डुप्लिकेट पडताळणी</h4>
                    <div style="font-size:0.85rem; color:#1B5E20;">
                        ✓ फोटो मूळ आहेत (No Duplicate)<br>
                        ✓ जिओ-टॅग व टाइमस्टॅम्प प्रमाणित
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById('adminLotModal').style.display = 'flex';
};

window.inspectDispute = async function(disputeId) {
    const disputes = await DisputeService.getDisputes();
    const dispute = disputes.find(d => d.disputeId === disputeId) || {
        disputeId,
        raisedBy: 'FARMER-NIPHAD-001',
        raisedByName: 'रमेश मारुती पाटील',
        claimantRole: 'Farmer',
        category: 'QUALITY_MISMATCH',
        description: 'खरेदीदाराने मालाचा दर्जा प्रमाणित Grade A असतानाही ग्रेड B चा दर लावून पेमेंट कमी केले.',
        certifiedGradeBaseline: 'Grade A',
        lotId: 'LOT-981042'
    };

    AppState.activeInspectItem = dispute;
    const body = document.getElementById('adminDisputeModalBody');
    if (body) {
        body.innerHTML = `
            <div class="demand-meta-box">
                <div><strong>वाद आयडी:</strong> ${dispute.disputeId}</div>
                <div><strong>तक्रारदार:</strong> ${dispute.raisedByName || dispute.raisedBy} (${dispute.claimantRole})</div>
                <div><strong>तक्रारीचा प्रकार:</strong> ${dispute.category}</div>
            </div>

            <div class="evidence-card-box" style="margin-top:10px;">
                <div class="evidence-header">
                    <span>🛡️ प्रमाणित मूळ डिजिटल लॉट गुणवत्ता बेसलाइन (Baseline Evidence)</span>
                    <span class="status-pill verified">✓ Blockchain / Tamper-Proof</span>
                </div>
                <div class="evidence-grid-mini">
                    <div class="evidence-item-mini">
                        <div style="color:#777; font-size:0.72rem;">मूळ प्रमाणित दर्जा</div>
                        <strong>${dispute.certifiedGradeBaseline || 'Grade A (94% ताजेपणा)'}</strong>
                    </div>
                    <div class="evidence-item-mini">
                        <div style="color:#777; font-size:0.72rem;">काढणी तारीख</div>
                        <strong>2026-08-29</strong>
                    </div>
                    <div class="evidence-item-mini">
                        <div style="color:#777; font-size:0.72rem;">अंतर्गत कट तपासणी</div>
                        <strong>Verified No Defect</strong>
                    </div>
                </div>
            </div>

            <div class="inspect-box" style="margin-top:10px;">
                <h4>तक्रारदाराचे म्हणणे:</h4>
                <p style="font-size:0.85rem; margin:0; color:#333;">${dispute.description}</p>
            </div>
        `;
    }

    document.getElementById('adminDisputeModal').style.display = 'flex';
};

window.inspectUser = async function(userId) {
    const users = await VerificationService.getAllUsers();
    const user = users.find(u => u.userId === userId) || {
        userId,
        name: 'रमेश मारुती पाटील',
        role: 'farmer',
        accountStatus: 'ACTIVE',
        verificationStatus: 'VERIFIED',
        adminNotes: []
    };

    AppState.activeInspectItem = user;
    const body = document.getElementById('adminUserModalBody');
    if (body) {
        body.innerHTML = `
            <div class="demand-meta-box">
                <div><strong>युझर आयडी:</strong> ${user.userId}</div>
                <div><strong>नाव:</strong> ${user.name}</div>
                <div><strong>भूमिका:</strong> ${user.role.toUpperCase()}</div>
                <div><strong>खाते स्थिती:</strong> <span class="status-pill ${user.accountStatus === 'ACTIVE' ? 'completed' : 'suspended'}">${user.accountStatus}</span></div>
            </div>

            <div class="inspect-box" style="margin-top:10px;">
                <h4>📝 अंतर्गत प्रशासकीय नोंदी (Admin Internal Notes)</h4>
                ${(user.adminNotes || []).length > 0 ? user.adminNotes.map(n => `
                    <div style="font-size:0.82rem; padding:4px 0; border-bottom:1px dashed #eee;">
                        • ${n.note} <span style="color:#888;">(${new Date(n.timestamp).toLocaleDateString('mr-IN')})</span>
                    </div>
                `).join('') : '<div style="font-size:0.82rem; color:#888;">कोणतीही अंतर्गत नोंद नाही.</div>'}
            </div>
        `;
    }

    const suspendBtn = document.getElementById('adminToggleSuspendBtn');
    if (suspendBtn) {
        suspendBtn.textContent = user.accountStatus === 'ACTIVE' ? '⛔ खाते निलंबित करा' : '✅ खाते पुन्हा सक्रिय करा';
    }

    document.getElementById('adminUserModal').style.display = 'flex';
};

// =========================================================================
// NOTIFICATION DRAWER CONTROLLER
// =========================================================================

function toggleNotificationDrawer() {
    const drawer = document.getElementById('notificationDrawer');
    if (!drawer) return;

    if (drawer.style.display === 'none' || !drawer.style.display) {
        renderNotifications();
        drawer.style.display = 'flex';
    } else {
        drawer.style.display = 'none';
    }
}

async function renderNotifications() {
    const container = document.getElementById('notificationListContainer');
    if (!container) return;

    const user = AuthService.getCurrentUser();
    if (!user) {
        container.innerHTML = `<div style="padding:20px; text-align:center; color:#777;">सूचना पाहण्यासाठी कृपया लॉगिन करा.</div>`;
        return;
    }

    const userId = user.userId || user.uid || 'farmer_mh_001';
    const notifs = await NotificationService.getUserNotifications(userId);
    if (notifs.length === 0) {
        container.innerHTML = `<div style="padding:20px; text-align:center; color:#777;">कोणतीही नवीन सूचना नाही.</div>`;
        return;
    }

    container.innerHTML = notifs.map(n => `
        <div class="notification-item ${n.read ? '' : 'unread'} ${n.priority === 'HIGH' || n.type === 'LOT_REJECTED' ? 'priority-high' : ''}" onclick="NotificationService.markAsRead('${n.notificationId}').then(() => { renderNotifications(); syncAuthUI(); })">
            <div class="notification-item-title">
                <span>${n.title}</span>
                ${!n.read ? '<span style="font-size:0.7rem; color:#1B5E20; font-weight:800;">NEW</span>' : ''}
            </div>
            <div class="notification-item-msg" style="white-space: pre-line; line-height: 1.45; margin-top: 4px;">${n.message}</div>
            <div class="notification-item-time">${new Date(n.createdAt).toLocaleTimeString('mr-IN', { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    `).join('');
}

// =========================================================================
// POST-TRANSACTION RATINGS CONTROLLER
// =========================================================================

window.openBuyerRatingDialog = function(txnId) {
    document.getElementById('rateFarmerTxnId').value = txnId;
    document.getElementById('rateFarmerTxnDisplay').textContent = txnId;
    document.getElementById('buyerRateFarmerModal').style.display = 'flex';
};

window.openFarmerRatingDialog = function(txnId) {
    document.getElementById('rateBuyerTxnId').value = txnId;
    document.getElementById('rateBuyerTxnDisplay').textContent = txnId;
    document.getElementById('farmerRateBuyerModal').style.display = 'flex';
};

function openHowCalculatedModal() {
    const modal = document.getElementById('modalHowCalculated');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeHowCalculatedModal() {
    const modal = document.getElementById('modalHowCalculated');
    if (modal) {
        modal.style.display = 'none';
    }
}

window.openHowCalculatedModal = openHowCalculatedModal;
window.closeHowCalculatedModal = closeHowCalculatedModal;

// =========================================================================
// DOM CONTENT LOADED INITIALIZATION & EVENT BINDINGS
// =========================================================================

function attachAllEventListeners() {
    if (window._eventListenersAttached) return;
    window._eventListenersAttached = true;
    console.log('🌾 KisanTrust Initializing Event Handlers...');

    // Navigation Tab Clicks
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const viewId = btn.dataset.view;
            if (viewId) navigateTo(viewId);
        });
    });

    // Sidebar Language Option Clicks
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang) {
                updateLanguage(lang);
                showToast(`🌐 भाषा बदलली: ${lang}`, 'info');
            }
        });
    });

    // Header Language Dropdown Change
    document.getElementById('headerLangSelect')?.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
        showToast(`🌐 भाषा बदलली: ${e.target.value}`, 'info');
    });

    // Notification Bell Click
    document.getElementById('navNotifBtn')?.addEventListener('click', () => {
        toggleNotificationDrawer();
    });

    document.getElementById('closeNotificationDrawerBtn')?.addEventListener('click', () => {
        document.getElementById('notificationDrawer').style.display = 'none';
    });

    document.getElementById('notifMarkAllReadBtn')?.addEventListener('click', async () => {
        const user = AuthService.getCurrentUser();
        if (user) {
            await NotificationService.markAllAsRead(user.userId);
            renderNotifications();
            syncAuthUI();
        }
    });

    // Admin Quick Switcher Button
    document.getElementById('navAdminQuickBtn')?.addEventListener('click', () => {
        navigateTo('viewAdminPortal');
    });

    // Admin Subnav Pills Click
    document.getElementById('adminSubNav')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.admin-subnav-btn');
        if (btn && btn.dataset.adminTab) {
            switchAdminTab(btn.dataset.adminTab);
        }
    });

    // Admin User Search Input
    document.getElementById('adminUserSearchInput')?.addEventListener('input', (e) => {
        renderAdminUsers(e.target.value);
    });

    // Admin Inspection Modal Closers
    document.getElementById('closeAdminFarmerModalBtn')?.addEventListener('click', () => {
        document.getElementById('adminFarmerModal').style.display = 'none';
    });
    document.getElementById('closeAdminBuyerModalBtn')?.addEventListener('click', () => {
        document.getElementById('adminBuyerModal').style.display = 'none';
    });
    document.getElementById('closeAdminLotModalBtn')?.addEventListener('click', () => {
        document.getElementById('adminLotModal').style.display = 'none';
    });
    document.getElementById('closeAdminDisputeModalBtn')?.addEventListener('click', () => {
        document.getElementById('adminDisputeModal').style.display = 'none';
    });
    document.getElementById('admDisputeCloseBtn')?.addEventListener('click', () => {
        document.getElementById('adminDisputeModal').style.display = 'none';
    });
    document.getElementById('closeAdminUserModalBtn')?.addEventListener('click', () => {
        document.getElementById('adminUserModal').style.display = 'none';
    });
    document.getElementById('adminCloseUserModalBtn')?.addEventListener('click', () => {
        document.getElementById('adminUserModal').style.display = 'none';
    });

    // Admin Action Buttons: Farmer
    document.getElementById('admFarmerApproveBtn')?.addEventListener('click', async () => {
        if (AppState.activeInspectItem) {
            showLoading('✅ शेतकरी अर्ज मंजूर करत आहे...');
            await VerificationService.approveFarmer(AppState.activeInspectItem.userId);
            hideLoading();
            document.getElementById('adminFarmerModal').style.display = 'none';
            showToast('✅ शेतकरी ओळख व खाते यशस्वीरित्या मंजूर करण्यात आले!', 'success');
            renderAdminFarmers();
        }
    });

    document.getElementById('admFarmerRejectBtn')?.addEventListener('click', async () => {
        const reason = prompt('शेतकरी अर्ज नाकारण्याचे अधिकृत कारण लिहा:');
        if (reason && AppState.activeInspectItem) {
            showLoading('❌ शेतकरी अर्ज नाकारत आहे...');
            await VerificationService.rejectFarmer(AppState.activeInspectItem.userId, reason);
            hideLoading();
            document.getElementById('adminFarmerModal').style.display = 'none';
            showToast('❌ शेतकरी अर्ज नाकारला गेला.', 'info');
            renderAdminFarmers();
        }
    });

    // Admin Action Buttons: Buyer
    document.getElementById('admBuyerApproveBtn')?.addEventListener('click', async () => {
        if (AppState.activeInspectItem) {
            showLoading('✅ खरेदीदार व्यवसाय मंजूर करत आहे...');
            await VerificationService.approveBuyer(AppState.activeInspectItem.userId || AppState.activeInspectItem.buyerId);
            hideLoading();
            document.getElementById('adminBuyerModal').style.display = 'none';
            showToast('✅ खरेदीदार व्यवसाय यशस्वीरित्या सत्यापित झाला!', 'success');
            renderAdminBuyers();
        }
    });

    // Admin Action Buttons: Lot
    document.getElementById('admLotApproveBtn')?.addEventListener('click', async () => {
        if (AppState.activeInspectItem) {
            showLoading('✅ लॉट मंजूर करून बाजारात प्रकाशित करत आहे...');
            await LotModerationService.publishLot(AppState.activeInspectItem.lotId);
            hideLoading();
            document.getElementById('adminLotModal').style.display = 'none';
            showToast('🎉 लॉट मंजूर व बाजारात प्रकाशित झाला!', 'success');
            renderAdminLots();
        }
    });

    const adminLotRejectModal = document.getElementById('adminLotRejectModal');
    const adminRejectReasonSelect = document.getElementById('adminRejectReasonSelect');
    const adminRejectRemarksInput = document.getElementById('adminRejectRemarksInput');

    document.getElementById('admLotRejectBtn')?.addEventListener('click', () => {
        if (adminLotRejectModal) {
            if (adminRejectRemarksInput) {
                adminRejectRemarksInput.value = adminRejectReasonSelect?.value || 'फोटोंमध्ये मालाचा प्रकार स्पष्ट दिसत नाही.';
            }
            adminLotRejectModal.style.display = 'flex';
        }
    });

    adminRejectReasonSelect?.addEventListener('change', (e) => {
        if (adminRejectRemarksInput) {
            if (e.target.value === 'custom') {
                adminRejectRemarksInput.value = '';
                adminRejectRemarksInput.placeholder = 'सविस्तर शेरा येथे लिहा...';
            } else {
                adminRejectRemarksInput.value = e.target.value;
            }
        }
    });

    document.getElementById('closeAdminLotRejectModalBtn')?.addEventListener('click', () => {
        if (adminLotRejectModal) adminLotRejectModal.style.display = 'none';
    });
    document.getElementById('cancelAdminLotRejectBtn')?.addEventListener('click', () => {
        if (adminLotRejectModal) adminLotRejectModal.style.display = 'none';
    });

    document.getElementById('confirmAdminLotRejectBtn')?.addEventListener('click', async () => {
        const remarks = adminRejectRemarksInput?.value.trim() || adminRejectReasonSelect?.value || 'गुणवत्ता निकष अपूर्ण';
        if (AppState.activeInspectItem) {
            showLoading('❌ लॉट नाकारून शेतकऱ्याला संदेश पाठवत आहे...');
            await LotModerationService.rejectLot(AppState.activeInspectItem.lotId, remarks);
            hideLoading();
            if (adminLotRejectModal) adminLotRejectModal.style.display = 'none';
            document.getElementById('adminLotModal').style.display = 'none';
            showToast('📩 शेतकऱ्याला शेरा पाठवला व लॉट नाकारण्यात आला (Notice Dispatched)', 'info');
            syncAuthUI();
            renderAdminLots();
            renderDashboard();
        }
    });

    // Admin Action Buttons: Dispute Resolve
    document.getElementById('admDisputeResolveBtn')?.addEventListener('click', async () => {
        const resText = document.getElementById('adminDisputeResolutionInput')?.value || 'प्रमाणित डिजिटल गुणवत्तेच्या आधारे तोडगा काढण्यात आला.';
        if (AppState.activeInspectItem) {
            showLoading('✅ वाद निकालाची नोंद करत आहे...');
            await DisputeService.resolveDispute(AppState.activeInspectItem.disputeId, {
                resolutionNotes: resText,
                status: 'RESOLVED'
            });
            hideLoading();
            document.getElementById('adminDisputeModal').style.display = 'none';
            showToast('🎉 वाद यशस्वीरित्या सोडवण्यात आला!', 'success');
            renderAdminDisputes();
        }
    });

    // Admin Action Buttons: User Suspend & Notes
    document.getElementById('adminToggleSuspendBtn')?.addEventListener('click', async () => {
        if (AppState.activeInspectItem) {
            const user = AppState.activeInspectItem;
            if (user.accountStatus === 'ACTIVE') {
                const reason = prompt('खाते निलंबित करण्याचे कारण:');
                if (reason) {
                    await VerificationService.suspendUser(user.userId, reason);
                    showToast('⛔ खाते निलंबित करण्यात आले.', 'warning');
                }
            } else {
                await VerificationService.reactivateUser(user.userId);
                showToast('✅ खाते पुन्हा सक्रिय करण्यात आले.', 'success');
            }
            document.getElementById('adminUserModal').style.display = 'none';
            renderAdminUsers();
        }
    });

    document.getElementById('adminAddNoteBtn')?.addEventListener('click', async () => {
        const note = document.getElementById('adminUserNoteInput')?.value;
        if (note && AppState.activeInspectItem) {
            await VerificationService.addAdminNote(AppState.activeInspectItem.userId, note);
            document.getElementById('adminUserNoteInput').value = '';
            showToast('📝 अंतर्गत नोंद सेव्ह झाली.', 'success');
            window.inspectUser(AppState.activeInspectItem.userId);
        }
    });

    // Rating Star Pickers Interaction
    document.querySelectorAll('.star-rating-selector').forEach(group => {
        group.addEventListener('click', (e) => {
            const starBtn = e.target.closest('.star-btn');
            if (starBtn) {
                const val = parseInt(starBtn.dataset.val);
                const allStars = group.querySelectorAll('.star-btn');
                allStars.forEach((s, idx) => {
                    if (idx < val) s.classList.add('active');
                    else s.classList.remove('active');
                });

                const groupName = group.dataset.ratingGroup;
                if (groupName === 'produceQuality') document.getElementById('inputRateQuality').value = val;
                else if (groupName === 'quantityAccuracy') document.getElementById('inputRateQty').value = val;
                else if (groupName === 'packagingCondition') document.getElementById('inputRatePackaging').value = val;
                else if (groupName === 'deliveryReliability') document.getElementById('inputRateDelivery').value = val;
                else if (groupName === 'paymentTimeliness') document.getElementById('inputRatePayment').value = val;
                else if (groupName === 'buyerCommunication') document.getElementById('inputRateComm').value = val;
                else if (groupName === 'buyerReliability') document.getElementById('inputRateReliability').value = val;
            }
        });
    });

    // Rating Form Submissions
    document.getElementById('buyerRateFarmerForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const txnId = document.getElementById('rateFarmerTxnId')?.value;
        const currentUser = AuthService.getCurrentUser();

        const ratingData = {
            transactionId: txnId,
            farmerId: 'FARMER-NIPHAD-001',
            buyerId: currentUser ? currentUser.userId : 'BUYER-001',
            produceQualityScore: parseInt(document.getElementById('inputRateQuality')?.value) || 5,
            quantityAccuracyScore: parseInt(document.getElementById('inputRateQty')?.value) || 5,
            packagingScore: parseInt(document.getElementById('inputRatePackaging')?.value) || 5,
            deliveryScore: parseInt(document.getElementById('inputRateDelivery')?.value) || 5,
            comments: document.getElementById('rateFarmerCommentsInput')?.value || ''
        };

        showLoading('⭐ रेटिंग सबमिट करत आहे...');
        await RatingService.submitFarmerRating(ratingData);
        hideLoading();
        document.getElementById('buyerRateFarmerModal').style.display = 'none';
        showToast('🎉 शेतकरी रेटिंग यशस्वीरित्या नोंदवली गेली!', 'success');
        renderTransactionsList();
    });

    document.getElementById('farmerRateBuyerForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const txnId = document.getElementById('rateBuyerTxnId')?.value;
        const currentUser = AuthService.getCurrentUser();

        const ratingData = {
            transactionId: txnId,
            buyerId: 'BUYER-001',
            farmerId: currentUser ? currentUser.userId : 'FARMER-NIPHAD-001',
            paymentTimelinessScore: parseInt(document.getElementById('inputRatePayment')?.value) || 5,
            communicationScore: parseInt(document.getElementById('inputRateComm')?.value) || 5,
            reliabilityScore: parseInt(document.getElementById('inputRateReliability')?.value) || 5,
            comments: document.getElementById('rateBuyerCommentsInput')?.value || ''
        };

        showLoading('⭐ रेटिंग सबमिट करत आहे...');
        await RatingService.submitBuyerRating(ratingData);
        hideLoading();
        document.getElementById('farmerRateBuyerModal').style.display = 'none';
        showToast('🎉 खरेदीदार रेटिंग यशस्वीरित्या नोंदवली गेली!', 'success');
        renderTransactionsList();
    });

    // Rating Modal Closers
    document.getElementById('closeBuyerRateFarmerModalBtn')?.addEventListener('click', () => {
        document.getElementById('buyerRateFarmerModal').style.display = 'none';
    });
    document.getElementById('cancelBuyerRateFarmerBtn')?.addEventListener('click', () => {
        document.getElementById('buyerRateFarmerModal').style.display = 'none';
    });
    document.getElementById('closeFarmerRateBuyerModalBtn')?.addEventListener('click', () => {
        document.getElementById('farmerRateBuyerModal').style.display = 'none';
    });
    document.getElementById('cancelFarmerRateBuyerBtn')?.addEventListener('click', () => {
        document.getElementById('farmerRateBuyerModal').style.display = 'none';
    });

    // Auth Modal Tabs (Login vs Register)
    const authTabLogin = document.getElementById('authTabLogin');
    const authTabRegister = document.getElementById('authTabRegister');
    const loginContainer = document.getElementById('authLoginFormContainer');
    const registerContainer = document.getElementById('authRegisterFormContainer');

    authTabLogin?.addEventListener('click', () => {
        authTabLogin.classList.add('active');
        authTabRegister?.classList.remove('active');
        if (loginContainer) loginContainer.style.display = 'block';
        if (registerContainer) registerContainer.style.display = 'none';
    });

    authTabRegister?.addEventListener('click', () => {
        authTabRegister.classList.add('active');
        authTabLogin?.classList.remove('active');
        if (registerContainer) registerContainer.style.display = 'block';
        if (loginContainer) loginContainer.style.display = 'none';
    });

    // Role switcher in registration form (Farmer vs Buyer vs Customer)
    const rolePillFarmer = document.getElementById('rolePillFarmer');
    const rolePillBuyer = document.getElementById('rolePillBuyer');
    const rolePillCustomer = document.getElementById('rolePillCustomer');
    const farmerFields = document.getElementById('farmerSpecificFields');
    const buyerFields = document.getElementById('buyerSpecificFields');
    const customerFields = document.getElementById('customerSpecificFields');

    rolePillFarmer?.addEventListener('click', () => {
        rolePillFarmer.classList.add('active');
        rolePillBuyer?.classList.remove('active');
        rolePillCustomer?.classList.remove('active');
        if (farmerFields) farmerFields.style.display = 'block';
        if (buyerFields) buyerFields.style.display = 'none';
        if (customerFields) customerFields.style.display = 'none';
    });

    rolePillBuyer?.addEventListener('click', () => {
        rolePillBuyer.classList.add('active');
        rolePillFarmer?.classList.remove('active');
        rolePillCustomer?.classList.remove('active');
        if (buyerFields) buyerFields.style.display = 'block';
        if (farmerFields) farmerFields.style.display = 'none';
        if (customerFields) customerFields.style.display = 'none';
    });

    rolePillCustomer?.addEventListener('click', () => {
        rolePillCustomer.classList.add('active');
        rolePillFarmer?.classList.remove('active');
        rolePillBuyer?.classList.remove('active');
        if (customerFields) customerFields.style.display = 'block';
        if (farmerFields) farmerFields.style.display = 'none';
        if (buyerFields) buyerFields.style.display = 'none';
    });

    // Auth Forms Submissions
    document.getElementById('authLoginForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('loginIdentifierInput')?.value?.trim() || '';
        const pass = document.getElementById('loginPasswordInput')?.value?.trim() || '';
        showLoading('🔑 लॉगिन करत आहे...');
        try {
            const user = await AuthService.login(id, pass);
            syncAuthUI();
            if (authModal) authModal.style.display = 'none';
            showToast(`✅ स्वागत आहे, ${user.displayName || user.name}!`, 'success');
            if (user.role === 'buyer') navigateTo('viewBuyerMarket');
            else if (user.role === 'customer') navigateTo('viewMarketIntel');
            else if (user.role === 'admin' || user.role === 'super_admin') navigateTo('viewAdminPortal');
            else navigateTo('viewDashboard');
        } catch (err) {
            showToast(`❌ लॉगिन त्रुटी: ${err.message}`, 'warning');
        } finally {
            hideLoading();
        }
    });

    document.getElementById('authRegisterForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('regNameInput')?.value?.trim() || '';
        const phone = document.getElementById('regPhoneInput')?.value?.trim() || '';
        const email = document.getElementById('regEmailInput')?.value?.trim() || '';
        const state = document.getElementById('regStateInput')?.value || 'Maharashtra';
        const district = document.getElementById('regDistrictInput')?.value?.trim() || 'Nashik';
        const password = document.getElementById('regPasswordInput')?.value || '';
        const confirmPassword = document.getElementById('regConfirmPasswordInput')?.value || '';

        if (!name || !phone) {
            showToast('⚠️ कृपया आपले नाव आणि मोबाईल नंबर प्रविष्ट करा.', 'warning');
            return;
        }

        const lengthOk = password.length >= 7;
        const upperOk = /[A-Z]/.test(password);
        const numOk = /[0-9]/.test(password);
        const specialOk = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

        if (!(lengthOk && upperOk && numOk && specialOk)) {
            showToast('⚠️ Password must be at least 7 characters with 1 uppercase letter, 1 number, and 1 special character.', 'warning');
            return;
        }

        if (password !== confirmPassword) {
            showToast('⚠️ दोन्ही पासवर्ड जुळत नाहीत! कृपया तपासा.', 'warning');
            return;
        }

        let selectedRole = 'farmer';
        if (rolePillBuyer?.classList.contains('active')) {
            selectedRole = 'buyer';
        } else if (rolePillCustomer?.classList.contains('active')) {
            selectedRole = 'customer';
        }

        showLoading('🌱 खाते तयार करत आहे...');
        try {
            const regData = {
                name,
                phone,
                email,
                role: selectedRole,
                state,
                district,
                password,
                primaryCrops: selectedRole === 'farmer' ? [document.getElementById('regCropInput')?.value || 'Tomato'] : (selectedRole === 'customer' ? (document.getElementById('regCustProduceInput')?.value ? [document.getElementById('regCustProduceInput').value] : ['Tomato', 'Onion']) : [document.getElementById('regCropInput')?.value || 'Tomato']),
                farmSizeAcres: parseFloat(document.getElementById('regAcresInput')?.value) || 2.0,
                companyName: document.getElementById('regCompanyInput')?.value || name,
                buyerType: document.getElementById('regBuyerTypeInput')?.value || 'Food Processor',
                gstin: document.getElementById('regGstinInput')?.value || '',
                address: selectedRole === 'customer' ? (document.getElementById('regCustAddressInput')?.value || district) : district,
                preferredLanguage: AppState.selectedLang || 'Marathi (मराठी)'
            };

            const newUser = await AuthService.register(regData);
            document.getElementById('authRegisterForm')?.reset();
            const pwdInput = document.getElementById('regPasswordInput');
            if (pwdInput) pwdInput.dispatchEvent(new Event('input'));
            
            syncAuthUI();
            if (authModal) authModal.style.display = 'none';
            showToast(`🎉 खाते यशस्वीरित्या तयार झाले! स्वागत आहे, ${newUser.displayName || newUser.name}!`, 'success');

            if (selectedRole === 'buyer') navigateTo('viewBuyerMarket');
            else if (selectedRole === 'customer') navigateTo('viewMarketIntel');
            else navigateTo('viewDashboard');
        } catch (err) {
            showToast(`❌ नोंदणी त्रुटी: ${err.message}`, 'warning');
        } finally {
            hideLoading();
        }
    });

    document.getElementById('googleSignInBtn')?.addEventListener('click', () => {
        // IMPORTANT: This handler must NOT be async, and signInWithPopup must be called
        // synchronously (before any await/microtask). This preserves the browser's
        // "user gesture" context that is required to open a popup window.
        // We handle the result via .then()/.catch() which does NOT break the gesture chain.
        if (!window.firebase || !window.firebase.auth) {
            showToast('⚠️ Firebase Auth not loaded. Please refresh the page.', 'warning');
            return;
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        showLoading('🌐 Google सह लॉगिन करत आहे...');

        // signInWithPopup called directly in sync click handler — popup allowed by browser
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                return AuthService.loginWithGoogleUser(result.user);
            })
            .then((user) => {
                hideLoading();
                syncAuthUI();
                const authModal = document.getElementById('authModal');
                if (authModal) authModal.style.display = 'none';
                showToast(`✅ Signed in as ${user.displayName} (${user.email})`, 'success');
                navigateTo('viewDashboard');
            })
            .catch((e) => {
                hideLoading();
                console.error('Google Sign-In error:', e.code, e.message);
                if (e.code === 'auth/popup-blocked') {
                    // Only fall back to redirect when popup is explicitly blocked
                    showToast('📱 Popup blocked — redirecting to Google...', 'info');
                    firebase.auth().signInWithRedirect(provider);
                } else if (e.code === 'auth/popup-closed-by-user') {
                    showToast('ℹ️ Sign-in cancelled. Try again.', 'warning');
                } else if (e.code === 'auth/unauthorized-domain') {
                    showToast('⚠️ Domain not authorized. Add this domain in Firebase Console → Authentication → Settings → Authorized domains.', 'warning');
                } else {
                    showToast(`⚠️ Google sign-in: ${e.message}`, 'warning');
                }
            });
    });

    // Crop Selection & Quantity Changes
    document.getElementById('inputCropType')?.addEventListener('change', (e) => {
        updateCropVarieties(e.target.value);
    });

    document.getElementById('inputQuantity')?.addEventListener('input', (e) => {
        const crop = document.getElementById('inputCropType')?.value || 'Tomato';
        const qty = parseFloat(e.target.value) || 500;
        updateBeforePublishInsights(crop, qty);
    });

    // =========================================================================
    // LIVE MULTI-ANGLE CAMERA & UPLOAD CONTROLLER
    // =========================================================================
    let cameraMediaStream = null;
    let currentCameraFacingMode = 'environment';
    let currentAngleStep = 0;

    const CAMERA_ANGLE_CONFIG = [
        {
            badge: "कोन १ / ४: वरून दृश्य (Angle 1: Top View)",
            hint: "शेतमालाचे वरून संपूर्ण दृश्य कॅमेऱ्यात घ्या",
            guide: "💡 कृपया शेतमाल वरून संपूर्ण दिसेल अशा रीतीने कॅमेऱ्यासमोर धरा"
        },
        {
            badge: "कोन २ / ४: बाजूचे दृश्य (Angle 2: Side Profile)",
            hint: "शेतमालाचा आकार व बाजूचे दृश्य कॅमेऱ्यात घ्या",
            guide: "💡 बाजूने आकारमान व एकसारखेपणा दिसेल असा फोटो घ्या"
        },
        {
            badge: "कोन ३ / ४: देठ व कळीचा भाग (Angle 3: Stem & Calyx)",
            hint: "देठ, टोकाचा भाग व ताज्या कळ्या दाखवा",
            guide: "💡 देठ व कळी जवळून दाखवून ताजेपणा स्पष्ट करा"
        },
        {
            badge: "कोन ४ / ४: एकूण ढीग / क्रेट (Angle 4: Bulk Lot View)",
            hint: "एकूण लॉट किंवा क्रेटमधील मालाचे दृश्य घ्या",
            guide: "💡 संपूर्ण क्रेट अथवा ढिगाचा एकत्रित फोटो घ्या"
        }
    ];

    function updateCameraStepUI() {
        const badge = document.getElementById('cameraAngleBadge');
        const hint = document.getElementById('cameraAngleHint');
        const guide = document.getElementById('cameraGuideInstruction');
        const btnDone = document.getElementById('btnDoneCamera');

        const cfg = CAMERA_ANGLE_CONFIG[Math.min(currentAngleStep, 3)];
        if (badge) badge.textContent = cfg.badge;
        if (hint) hint.textContent = cfg.hint;
        if (guide) guide.textContent = cfg.guide;

        if (btnDone) {
            btnDone.style.display = AppState.uploadedFiles.length >= 4 ? 'inline-block' : 'none';
        }
    }

    async function openLiveCamera() {
        const modal = document.getElementById('liveCameraModal');
        const video = document.getElementById('liveCameraVideo');
        if (!modal || !video) return;

        modal.style.display = 'flex';
        currentAngleStep = Math.min(AppState.uploadedFiles.length, 3);
        updateCameraStepUI();

        try {
            if (cameraMediaStream) {
                cameraMediaStream.getTracks().forEach(t => t.stop());
            }
            cameraMediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: currentCameraFacingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
                audio: false
            });
            video.srcObject = cameraMediaStream;
        } catch (err) {
            console.warn('Camera access error:', err.message);
            showToast('कॅमेरा उघडता आला नाही. कृपया गॅलरीतून फोटो निवडा.', 'warning');
        }
    }

    function closeLiveCamera() {
        const modal = document.getElementById('liveCameraModal');
        if (modal) modal.style.display = 'none';

        if (cameraMediaStream) {
            cameraMediaStream.getTracks().forEach(t => t.stop());
            cameraMediaStream = null;
        }
    }

    function snapCameraPhoto() {
        const video = document.getElementById('liveCameraVideo');
        const canvas = document.getElementById('cameraCaptureCanvas');
        if (!video || !canvas) return;

        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        if (currentAngleStep < 4) {
            AppState.uploadedFiles[currentAngleStep] = dataUrl;
        } else {
            AppState.uploadedFiles.push(dataUrl);
        }

        // Update thumbnail slot
        const slot = document.getElementById(`thumbSlot${Math.min(currentAngleStep + 1, 4)}`);
        if (slot) {
            slot.innerHTML = `<img src="${dataUrl}" style="width:100%; height:100%; object-fit:cover;">`;
            slot.style.border = '2px solid #22C55E';
        }

        currentAngleStep++;
        showToast(`📸 कोन ${Math.min(currentAngleStep, 4)} चे छायाचित्र नोंदवले!`, 'success');

        renderUploadedImagesGrid();

        if (currentAngleStep < 4) {
            updateCameraStepUI();
        } else {
            updateCameraStepUI();
            const btnDone = document.getElementById('btnDoneCamera');
            if (btnDone) btnDone.style.display = 'inline-block';
        }
    }

    function renderUploadedImagesGrid() {
        const emptyState = document.getElementById('emptyState');
        const uploadedState = document.getElementById('uploadedState');
        const uploadActions = document.getElementById('uploadActions');
        const photoCount = document.getElementById('photoCount');
        const imageGrid = document.getElementById('imageGrid');

        if (AppState.uploadedFiles.length > 0) {
            if (emptyState) emptyState.style.display = 'none';
            if (uploadedState) uploadedState.style.display = 'block';
            if (uploadActions) uploadActions.style.display = 'flex';
            if (photoCount) photoCount.textContent = AppState.uploadedFiles.length;

            if (imageGrid) {
                imageGrid.innerHTML = AppState.uploadedFiles.map((src, i) => `
                    <div class="image-preview" style="position:relative; border-radius:10px; overflow:hidden; border:2px solid #86EFAC; aspect-ratio:1;">
                        <img src="${src}" alt="Angle ${i+1}" style="width:100%; height:100%; object-fit:cover;">
                        <span style="position:absolute; bottom:4px; left:4px; background:rgba(0,0,0,0.75); color:#FFF; font-size:10px; font-weight:bold; padding:2px 6px; border-radius:4px;">
                            कोन ${i + 1}
                        </span>
                    </div>
                `).join('');
            }
        } else {
            if (emptyState) emptyState.style.display = 'block';
            if (uploadedState) uploadedState.style.display = 'none';
            if (uploadActions) uploadActions.style.display = 'none';
            if (photoCount) photoCount.textContent = '0';
            if (imageGrid) imageGrid.innerHTML = '';
        }
    }

    // Attach Camera & Upload Handlers
    document.getElementById('openLiveCameraBtn')?.addEventListener('click', openLiveCamera);
    document.getElementById('btnReopenCamera')?.addEventListener('click', openLiveCamera);
    document.getElementById('closeLiveCameraBtn')?.addEventListener('click', closeLiveCamera);
    document.getElementById('btnSnapPhoto')?.addEventListener('click', snapCameraPhoto);
    document.getElementById('btnDoneCamera')?.addEventListener('click', closeLiveCamera);

    document.getElementById('btnSwitchCamera')?.addEventListener('click', async () => {
        currentCameraFacingMode = currentCameraFacingMode === 'environment' ? 'user' : 'environment';
        await openLiveCamera();
        showToast('🔄 कॅमेरा स्विच केला.', 'info');
    });

    // File Input Upload Handlers
    const fileInput = document.getElementById('fileInput');
    const selectPhotosBtn = document.getElementById('selectPhotosBtn');
    const resetBtn = document.getElementById('resetBtn');

    selectPhotosBtn?.addEventListener('click', () => {
        fileInput?.click();
    });

    fileInput?.addEventListener('change', (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length > 0) {
            AppState.uploadedFiles = [];
            let loadedCount = 0;
            files.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (re) => {
                    AppState.uploadedFiles.push(re.target.result);
                    loadedCount++;
                    if (loadedCount === files.length) {
                        renderUploadedImagesGrid();
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    });

    resetBtn?.addEventListener('click', () => {
        AppState.uploadedFiles = [];
        if (fileInput) fileInput.value = '';
        for (let i = 1; i <= 4; i++) {
            const slot = document.getElementById(`thumbSlot${i}`);
            if (slot) {
                slot.innerHTML = `${i}`;
                slot.style.border = '1px dashed #475569';
            }
        }
        renderUploadedImagesGrid();
        showToast('🔄 फोटो रीसेट केले.', 'info');
    });

    // Step 1: Analyze Produce Button
    document.getElementById('analyzeBtn')?.addEventListener('click', runQualityAnalysis);

    // Step 2: Cut Verification Input & Actions
    const cutImageInput = document.getElementById('cutImageInput');
    const cutPreviewBox = document.getElementById('cutPhotoPreviewContainer');
    const cutPreviewImg = document.getElementById('cutPreviewImg');
    const cutBadge = document.getElementById('cutVerificationBadge');
    const cutDetails = document.getElementById('cutVerificationDetails');
    const btnProceedAfterCut = document.getElementById('btnProceedAfterCut');

    document.getElementById('captureBtn')?.addEventListener('click', () => {
        cutImageInput?.click();
    });

    cutImageInput?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (re) => {
                const dataUrl = re.target.result;
                if (cutPreviewBox) cutPreviewBox.style.display = 'block';
                if (cutPreviewImg) cutPreviewImg.src = dataUrl;
                if (cutBadge) {
                    cutBadge.textContent = '⏳ Google Gemini द्वारे कापाची तपासणी सुरू आहे...';
                    cutBadge.style.background = '#FEF3C7';
                    cutBadge.style.color = '#B45309';
                }
                if (cutDetails) {
                    cutDetails.textContent = 'अंतर्गत गाभा, आर्द्रता, बियांची स्थिती व कीड तपासत आहे...';
                }

                showLoading('🔬 अंतर्गत काप तपासणी सुरू आहे (Verifying Cut Cross-Section)...');
                const cropType = document.getElementById('inputCropType')?.value || 'Tomato';
                const cutResult = await QualityService.assessCutVerification(dataUrl, cropType, AppState.selectedLang || 'English');
                hideLoading();

                AppState.currentCutAnalysis = cutResult;

                if (cutResult && cutResult.cutVerified) {
                    if (cutBadge) {
                        cutBadge.textContent = `✅ अंतर्गत कट प्रमाणित (${cutResult.internalFreshness || 'Optimal Firmness'})`;
                        cutBadge.style.background = '#DCFCE7';
                        cutBadge.style.color = '#166534';
                    }
                    if (cutDetails) {
                        cutDetails.innerHTML = `<strong>${cutResult.statusNotes || 'Healthy flesh confirmed.'}</strong><br>💧 अंतर्गत आर्द्रता: ${cutResult.moistureContent || '90%'} | 🔬 गाभा दोष: ${cutResult.coreDefectsPercent || 0}%`;
                    }
                    showToast('✅ अंतर्गत गुणवत्ता कट तपासणी यशस्वी!', 'success');
                } else {
                    if (cutBadge) {
                        cutBadge.textContent = '⚠️ अस्पष्ट फोटो / कापाची अचूक नोंद नाही';
                        cutBadge.style.background = '#FEE2E2';
                        cutBadge.style.color = '#DC2626';
                    }
                    if (cutDetails) {
                        cutDetails.textContent = cutResult?.rejectionReason || 'कृपया भाजीचा उभा/आडवा अर्धा काप करून चांगल्या उजेडात जवळून स्पष्ट फोटो घ्या.';
                    }
                    showToast('⚠️ ' + (cutResult?.rejectionReason || 'कृपया कापाचा स्पष्ट फोटो घ्या.'), 'warning');
                }
            };
            reader.readAsDataURL(file);
        }
    });

    btnProceedAfterCut?.addEventListener('click', proceedToPricing);
    document.getElementById('skipBtn')?.addEventListener('click', proceedToPricing);
    document.getElementById('saveLotBtn')?.addEventListener('click', saveDigitalLot);
    document.getElementById('negotiateBtn')?.addEventListener('click', () => {
        window.openNegotiationForDemand('DEMAND-001');
    });
    document.getElementById('acceptOfferBtn')?.addEventListener('click', acceptOfferFromStep3);

    // Transaction Success Modal Buttons
    document.getElementById('downloadReceiptBtn')?.addEventListener('click', openOfficialCertificate);
    document.getElementById('newTransactionBtn')?.addEventListener('click', () => {
        document.getElementById('transactionComplete').style.display = 'none';
        goToLotStep(1);
        navigateTo('viewDashboard');
    });

    // Dashboard & My Lots Buttons
    document.getElementById('myLotsCreateBtn')?.addEventListener('click', () => {
        goToLotStep(1);
        navigateTo('viewAssessLot');
    });
    document.getElementById('dashViewAllLotsLink')?.addEventListener('click', () => {
        navigateTo('viewMyLots');
    });

    // Crop Filter Pills: Market Intel
    document.getElementById('cropFilterPills')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.crop-pill-btn');
        if (btn && btn.dataset.crop) {
            renderMarketIntel(btn.dataset.crop);
        }
    });

    // Crop Filter Pills: Buyer Market
    document.getElementById('buyerCropFilterPills')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.crop-pill-btn');
        if (btn && btn.dataset.crop) {
            renderBuyerMarket(btn.dataset.crop);
        }
    });

    // Post Demand Modal (Buyer Mode)
    const postDemandModal = document.getElementById('postDemandModal');
    document.getElementById('openPostDemandModalBtn')?.addEventListener('click', () => {
        if (postDemandModal) postDemandModal.style.display = 'flex';
    });
    document.getElementById('closePostDemandModalBtn')?.addEventListener('click', () => {
        if (postDemandModal) postDemandModal.style.display = 'none';
    });
    document.getElementById('cancelPostDemandBtn')?.addEventListener('click', () => {
        if (postDemandModal) postDemandModal.style.display = 'none';
    });

    document.getElementById('postDemandForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const buyerName = document.getElementById('modalBuyerName')?.value || 'Sahyadri Agro Hub';
        const buyerType = document.getElementById('modalBuyerType')?.value || 'Food Processor';
        const cropType = document.getElementById('modalDemandCrop')?.value || 'Tomato';
        const varietyPreference = document.getElementById('modalDemandVariety')?.value || 'All Varieties';
        const requiredQuantityKg = parseFloat(document.getElementById('modalDemandQty')?.value) || 10000;
        const minQualityGrade = document.getElementById('modalMinGrade')?.value || 'Grade A';
        const offeredPricePerKg = parseFloat(document.getElementById('modalOfferPrice')?.value) || 37.5;
        const maxOfferedPricePerKg = parseFloat(document.getElementById('modalMaxPrice')?.value) || (offeredPricePerKg + 2.0);
        const preferredLocation = document.getElementById('modalLocation')?.value || 'Nashik / Niphad Hub';
        const requiredDeliveryDate = document.getElementById('modalDeliveryDate')?.value || '2026-09-05';
        const pickupProvided = document.getElementById('modalPickupProvided')?.checked ?? true;

        showLoading('📋 खरेदी मागणी प्रकाशित करत आहे...');
        await BuyerService.createBuyerDemand({
            demandId: `DEMAND-${Date.now().toString().slice(-6)}`,
            buyerId: 'BUYER-001',
            buyerName,
            buyerType,
            cropType,
            variety: varietyPreference,
            varietyPreference,
            requiredQuantityKg,
            minQualityGrade,
            offeredPricePerKg,
            minOfferedPricePerKg: offeredPricePerKg,
            maxOfferedPricePerKg,
            preferredLocation,
            deliveryHub: preferredLocation,
            requiredDeliveryDate,
            pickupProvided,
            hubLocation: preferredLocation,
            trustScore: 95
        });
        hideLoading();

        if (postDemandModal) postDemandModal.style.display = 'none';
        showToast('🎉 नवीन खरेदी मागणी यशस्वीरित्या प्रकाशित झाली!', 'success');
        renderBuyerMarket('All');
    });

    // Negotiation Modal
    const negotiationModal = document.getElementById('negotiationModal');
    document.getElementById('closeNegotiationModalBtn')?.addEventListener('click', () => {
        if (negotiationModal) negotiationModal.style.display = 'none';
    });

    document.getElementById('sendCounterOfferBtn')?.addEventListener('click', () => {
        const counterPrice = parseFloat(document.getElementById('counterOfferPriceInput')?.value) || 38.0;
        const payout = counterPrice * 500;
        const payoutElem = document.getElementById('negTotalPayoutDisplay');
        if (payoutElem) payoutElem.textContent = `₹ ${payout.toLocaleString('en-IN')}`;
        
        const timeline = document.getElementById('negotiationTimeline');
        if (timeline) {
            const item = document.createElement('div');
            item.className = 'neg-history-item farmer';
            item.innerHTML = `
                <div style="font-size:0.75rem; color:#666;">👨‍🌾 शेतकरी • नुकताच</div>
                <div style="font-size:0.95rem; font-weight:800; color:var(--soil-deep);">प्रति-प्रस्ताव पाठवला: ₹ ${counterPrice.toFixed(2)}/kg</div>
            `;
            timeline.appendChild(item);
        }
        showToast(`📤 प्रति-प्रस्ताव ₹${counterPrice}/kg खरेदीदारास पाठवला!`, 'info');
    });

    document.getElementById('confirmAcceptDealBtn')?.addEventListener('click', async () => {
        if (negotiationModal) negotiationModal.style.display = 'none';
        await acceptOfferFromStep3();
    });

    // Dispute Modal
    document.getElementById('closeDisputeModalBtn')?.addEventListener('click', () => {
        document.getElementById('disputeModal').style.display = 'none';
    });

    // Live Password Strength & Guidelines
    const regPasswordInput = document.getElementById('regPasswordInput');
    regPasswordInput?.addEventListener('input', (e) => {
        const pwd = e.target.value;
        const lengthOk = pwd.length >= 7;
        const upperOk = /[A-Z]/.test(pwd);
        const numOk = /[0-9]/.test(pwd);
        const specialOk = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd);

        const reqLength = document.getElementById('reqLength');
        const reqUpper = document.getElementById('reqUpper');
        const reqNumber = document.getElementById('reqNumber');
        const reqSpecial = document.getElementById('reqSpecial');

        if (reqLength) {
            reqLength.classList.toggle('valid', lengthOk);
            reqLength.querySelector('.req-icon').textContent = lengthOk ? '✅' : '⚪';
        }
        if (reqUpper) {
            reqUpper.classList.toggle('valid', upperOk);
            reqUpper.querySelector('.req-icon').textContent = upperOk ? '✅' : '⚪';
        }
        if (reqNumber) {
            reqNumber.classList.toggle('valid', numOk);
            reqNumber.querySelector('.req-icon').textContent = numOk ? '✅' : '⚪';
        }
        if (reqSpecial) {
            reqSpecial.classList.toggle('valid', specialOk);
            reqSpecial.querySelector('.req-icon').textContent = specialOk ? '✅' : '⚪';
        }

        let score = 0;
        if (lengthOk) score++;
        if (upperOk) score++;
        if (numOk) score++;
        if (specialOk) score++;

        const passMeterFill = document.getElementById('passMeterFill');
        const passStrengthText = document.getElementById('passStrengthText');
        
        if (passMeterFill && passStrengthText) {
            passMeterFill.className = 'password-meter-fill';
            passStrengthText.className = 'password-strength-text';
            
            if (score <= 1) {
                passMeterFill.style.width = '25%';
                passMeterFill.classList.add('weak');
                passStrengthText.classList.add('weak');
                passStrengthText.textContent = pwd.length === 0 ? 'Enter password' : 'Weak / Too Simple';
            } else if (score <= 3) {
                passMeterFill.style.width = '66%';
                passMeterFill.classList.add('medium');
                passStrengthText.classList.add('medium');
                passStrengthText.textContent = 'Medium Strength';
            } else {
                passMeterFill.style.width = '100%';
                passMeterFill.classList.add('strong');
                passStrengthText.classList.add('strong');
                passStrengthText.textContent = 'Strong Password';
            }
        }
    });

    const clearAuthForms = () => {
        document.getElementById('authRegisterForm')?.reset();
        document.getElementById('authLoginForm')?.reset();
        const pwdInput = document.getElementById('regPasswordInput');
        if (pwdInput) pwdInput.dispatchEvent(new Event('input'));
    };

    // Auth Modals & Demo Logins
    const authModal = document.getElementById('authModal');
    document.getElementById('userRoleBadge')?.addEventListener('click', () => {
        if (authModal) {
            clearAuthForms();
            authModal.style.display = 'flex';
        }
    });
    document.getElementById('navLoginBtn')?.addEventListener('click', () => {
        if (authModal) {
            clearAuthForms();
            authModal.style.display = 'flex';
        }
    });
    document.getElementById('closeAuthModalBtn')?.addEventListener('click', () => {
        if (authModal) {
            clearAuthForms();
            authModal.style.display = 'none';
        }
    });

    // Demo Logins for 4 Roles
    document.getElementById('demoFarmerLoginBtn')?.addEventListener('click', async () => {
        showLoading('👨‍🌾 शेतकरी डेमो लॉगिन करत आहे...');
        const user = await AuthService.loginAsDemoFarmer();
        syncAuthUI();
        hideLoading();
        if (authModal) authModal.style.display = 'none';
        showToast(`✅ शेतकरी डेमो खात्यात प्रवेश केला: ${user.displayName || user.name}`, 'success');
        navigateTo('viewDashboard');
    });

    document.getElementById('demoBuyerLoginBtn')?.addEventListener('click', async () => {
        showLoading('🏢 खरेदीदार डेमो लॉगिन करत आहे...');
        try {
            const user = await AuthService.loginAsDemoBuyer();
            syncAuthUI();
            if (authModal) authModal.style.display = 'none';
            showToast(`✅ खरेदीदार खात्यात प्रवेश केला: ${user.displayName || user.name}`, 'success');
            navigateTo('viewBuyerMarket');
        } catch (e) {}
        finally {
            hideLoading();
        }
    });

    document.getElementById('demoCustomerLoginBtn')?.addEventListener('click', async () => {
        showLoading('🛒 ग्राहक डेमो लॉगिन करत आहे...');
        try {
            const user = await AuthService.loginAsDemoCustomer();
            syncAuthUI();
            if (authModal) authModal.style.display = 'none';
            showToast(`✅ ग्राहक खात्यात प्रवेश केला: ${user.displayName || user.name}`, 'success');
            navigateTo('viewMarketIntel');
        } catch (e) {}
        finally {
            hideLoading();
        }
    });

    document.getElementById('demoAdminLoginBtn')?.addEventListener('click', async () => {
        showLoading('🛡️ अ‍ॅडमिन खात्यात प्रवेश करत आहे...');
        try {
            const user = await AuthService.loginAsDemoAdmin();
            syncAuthUI();
            if (authModal) authModal.style.display = 'none';
            showToast(`🛡️ अ‍ॅडमिन नियंत्रण कक्ष सुरू झाला: ${user.displayName || user.name}`, 'success');
            navigateTo('viewAdminPortal');
        } catch (e) {}
        finally {
            hideLoading();
        }
    });

    document.getElementById('navLogoutBtn')?.addEventListener('click', async (e) => {
        e.stopPropagation();
        await AuthService.logout();
        syncAuthUI();
        showToast('👋 आपण सुरक्षितपणे लॉगआउट झाला आहात.', 'info');
        navigateTo('viewDashboard');
    });

    // Payment Modal Tabs Switcher
    const tabPayUpi = document.getElementById('tabPayUpi');
    const tabPayEscrow = document.getElementById('tabPayEscrow');
    const tabPayCard = document.getElementById('tabPayCard');
    const payUpiSec = document.getElementById('payUpiSection');
    const payBankSec = document.getElementById('payBankSection');
    const payCardSec = document.getElementById('payCardSection');

    tabPayUpi?.addEventListener('click', () => {
        if (payUpiSec) payUpiSec.style.display = 'block';
        if (payBankSec) payBankSec.style.display = 'none';
        if (payCardSec) payCardSec.style.display = 'none';
        if (tabPayUpi) { tabPayUpi.style.border = '2px solid #2563EB'; tabPayUpi.style.background = '#EFF6FF'; }
        if (tabPayEscrow) { tabPayEscrow.style.border = '1px solid #E5E7EB'; tabPayEscrow.style.background = '#ffffff'; }
        if (tabPayCard) { tabPayCard.style.border = '1px solid #E5E7EB'; tabPayCard.style.background = '#ffffff'; }
    });

    tabPayEscrow?.addEventListener('click', () => {
        if (payBankSec) payBankSec.style.display = 'block';
        if (payUpiSec) payUpiSec.style.display = 'none';
        if (payCardSec) payCardSec.style.display = 'none';
        if (tabPayEscrow) { tabPayEscrow.style.border = '2px solid #2563EB'; tabPayEscrow.style.background = '#EFF6FF'; }
        if (tabPayUpi) { tabPayUpi.style.border = '1px solid #E5E7EB'; tabPayUpi.style.background = '#ffffff'; }
        if (tabPayCard) { tabPayCard.style.border = '1px solid #E5E7EB'; tabPayCard.style.background = '#ffffff'; }
    });

    tabPayCard?.addEventListener('click', () => {
        if (payCardSec) payCardSec.style.display = 'block';
        if (payUpiSec) payUpiSec.style.display = 'none';
        if (payBankSec) payBankSec.style.display = 'none';
        if (tabPayCard) { tabPayCard.style.border = '2px solid #2563EB'; tabPayCard.style.background = '#EFF6FF'; }
        if (tabPayUpi) { tabPayUpi.style.border = '1px solid #E5E7EB'; tabPayUpi.style.background = '#ffffff'; }
        if (tabPayEscrow) { tabPayEscrow.style.border = '1px solid #E5E7EB'; tabPayEscrow.style.background = '#ffffff'; }
    });

    // Close Payment Modal
    document.getElementById('closePaymentModalBtn')?.addEventListener('click', () => {
        const modal = document.getElementById('paymentCheckoutModal');
        if (modal) modal.style.display = 'none';
    });

    document.getElementById('btnDonePaymentView')?.addEventListener('click', () => {
        const modal = document.getElementById('paymentCheckoutModal');
        if (modal) modal.style.display = 'none';
        navigateTo('viewTransactions');
    });

    // Confirm Payment & Lock in Escrow
    document.getElementById('btnConfirmEscrowPayment')?.addEventListener('click', async () => {
        showLoading('🔒 किसान ट्रस्ट एस्क्रो पेमेंट सुरक्षितपणे पडताळत आहे...');
        try {
            const lot = currentPaymentLotData || {
                lotId: 'LOT-MH-2026-089',
                cropType: 'Tomato',
                quantityKg: 500,
                pricePerKg: 35.0,
                farmerId: 'farmer_mh_001',
                farmerName: 'रमेश मारुती पाटील'
            };

            const user = AuthService.getCurrentUser();
            const txn = await TransactionService.processEscrowPayment({
                lotId: lot.lotId,
                cropType: lot.cropType,
                farmerId: lot.farmerId || 'farmer_mh_001',
                farmerName: lot.farmerName || 'रमेश पाटील',
                buyerId: user?.uid || 'buyer_sahyadri',
                buyerName: user?.displayName || user?.name || 'अमित जोशी (खरेदीदार)',
                quantityKg: lot.quantityKg || lot.quantity || 500,
                pricePerKg: lot.pricePerKg || lot.offeredPrice || 35.0
            });

            // Populate Receipt
            const txnIdElem = document.getElementById('receiptTxnId');
            if (txnIdElem) txnIdElem.textContent = txn.transactionId;

            const lockRefElem = document.getElementById('receiptEscrowRef');
            if (lockRefElem) lockRefElem.textContent = txn.escrowLockRef || `ESC-LOCK-${txn.transactionId.slice(-4)}`;

            const amountElem = document.getElementById('receiptAmount');
            if (amountElem) amountElem.textContent = `₹ ${txn.totalAmount.toLocaleString('en-IN')}`;

            const timeElem = document.getElementById('receiptTimestamp');
            if (timeElem) timeElem.textContent = new Date().toLocaleString('mr-IN');

            const bodySec = document.getElementById('paymentFormBodySection');
            if (bodySec) bodySec.style.display = 'none';
            const receiptSec = document.getElementById('paymentSuccessReceiptView');
            if (receiptSec) receiptSec.style.display = 'block';

            showToast('🎉 एस्क्रो पेमेंट यशस्वी! रक्कम सुरक्षितपणे लॉक झाली.', 'success');
        } catch (err) {
            showToast(`❌ पेमेंट त्रुटी: ${err.message}`, 'warning');
        } finally {
            hideLoading();
        }
    });
}

// Global helper: Micro-lot quantity preset button
function setAssessQuantity(qty) {
    const input = document.getElementById('inputQuantity');
    if (input) {
        input.value = qty;
        const crop = document.getElementById('inputCropType')?.value || 'Tomato';
        updateBeforePublishInsights(crop, qty);
        showToast(`📦 लॉट वजन सेट केले: ${qty} kg`, 'info');
    }
}
window.setAssessQuantity = setAssessQuantity;

// Global helper: Open Payment Checkout for a given lot
let currentPaymentLotData = null;

function openPaymentCheckoutForLot(lotData = null) {
    const modal = document.getElementById('paymentCheckoutModal');
    if (!modal) return;

    // Reset views
    const bodySec = document.getElementById('paymentFormBodySection');
    if (bodySec) bodySec.style.display = 'block';
    const receiptSec = document.getElementById('paymentSuccessReceiptView');
    if (receiptSec) receiptSec.style.display = 'none';

    // Default sample lot data if none provided
    const defaultLot = {
        lotId: 'LOT-MH-2026-089',
        cropType: 'Tomato',
        variety: 'Himsona Grade A',
        farmerName: 'रमेश मारुती पाटील (निफाड)',
        farmerId: 'farmer_mh_001',
        quantityKg: 500,
        pricePerKg: 35.0,
        isSmallholder: true
    };

    currentPaymentLotData = lotData || defaultLot;

    // Populate Order Summary
    const qty = Number(currentPaymentLotData.quantityKg || currentPaymentLotData.quantity) || 500;
    const rate = Number(currentPaymentLotData.pricePerKg || currentPaymentLotData.offeredPrice || currentPaymentLotData.basePrice) || 35.0;
    const total = Math.round(qty * rate);

    const cropNameElem = document.getElementById('payCropName');
    if (cropNameElem) cropNameElem.textContent = `${currentPaymentLotData.cropType} (${currentPaymentLotData.variety || 'Grade A'})`;

    const farmerNameElem = document.getElementById('payFarmerName');
    if (farmerNameElem) farmerNameElem.textContent = `👨‍🌾 शेतकरी: ${currentPaymentLotData.farmerName || 'रमेश पाटील'}`;

    const qtyDisplay = document.getElementById('payQuantityDisplay');
    if (qtyDisplay) qtyDisplay.textContent = `${qty} kg`;

    const rateDisplay = document.getElementById('payRateDisplay');
    if (rateDisplay) rateDisplay.textContent = `₹ ${rate.toFixed(2)} /kg`;

    const totalDisplay = document.getElementById('payTotalAmountDisplay');
    if (totalDisplay) totalDisplay.textContent = `₹ ${total.toLocaleString('en-IN')}`;

    const payBtnAmount = document.getElementById('payBtnAmountSpan');
    if (payBtnAmount) payBtnAmount.textContent = total.toLocaleString('en-IN');

    const badge = document.getElementById('paySmallholderBadge');
    if (badge) {
        badge.textContent = qty <= 500 ? '🌱 अल्पभूधारक शेतकरी (Smallholder)' : '🏢 व्यावसायिक शेती लॉट';
    }

    modal.style.display = 'flex';
}
window.openPaymentCheckoutForLot = openPaymentCheckoutForLot;

// Attach all global interactive functions to window for seamless HTML inline handling
window.updateLanguage = updateLanguage;
window.applyDOMTranslations = applyDOMTranslations;
window.navigateTo = navigateTo;
window.loadSampleCrop = loadSampleCrop;
window.applyMarketIntelFilters = applyMarketIntelFilters;
window.renderMarketIntel = renderMarketIntel;
window.renderDashboard = renderDashboard;
window.renderMyLots = renderMyLots;
window.renderBuyerMarket = renderBuyerMarket;
window.renderSmartPooling = renderSmartPooling;
window.renderTransactions = renderTransactionsList;
window.renderTransactionsList = renderTransactionsList;
window.renderAdminPortal = renderAdminPortal;
window.switchAdminTab = switchAdminTab;
window.openOfficialCertificate = openOfficialCertificate;
window.closeOfficialCertificate = closeOfficialCertificate;
window.openHowCalculatedModal = openHowCalculatedModal;
window.closeHowCalculatedModal = closeHowCalculatedModal;
window.shareLotOnWhatsApp = shareLotOnWhatsApp;
window.showToast = showToast;
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.readQualityAloud = readQualityAloud;
window.readAdviceAloud = readAdviceAloud;
window.readMarketIntelAloud = readMarketIntelAloud;
window.inspectFarmer = inspectFarmer;
window.inspectBuyer = inspectBuyer;
window.inspectLot = inspectLot;
window.inspectDispute = inspectDispute;
window.inspectUser = inspectUser;
window.openBuyerRatingDialog = openBuyerRatingDialog;
window.openFarmerRatingDialog = openFarmerRatingDialog;
window.openNegotiationForDemand = openNegotiationForDemand;
window.quickAcceptDealForDemand = quickAcceptDealForDemand;
window.joinVillagePool = joinVillagePool;
window.openDemandModal = function() { const m = document.getElementById('postDemandModal'); if (m) m.style.display = 'flex'; };
window.closeDemandModal = function() { const m = document.getElementById('postDemandModal'); if (m) m.style.display = 'none'; };


// Global App Initialization
async function initKisanTrustApp() {
    try {
        console.log('🌾 KisanTrust Initializing App...');
        attachAllEventListeners();

        const harvestDateInput = document.getElementById('inputHarvestDate');
        if (harvestDateInput) harvestDateInput.value = new Date().toISOString().split('T')[0];

        const modalDateInput = document.getElementById('modalDeliveryDate');
        if (modalDateInput) modalDateInput.value = new Date(Date.now() + 86400000 * 4).toISOString().split('T')[0];

        await BuyerService.initializeBuyerData();
        await PoolingService.initializePoolingData();
        updateLanguage(AppState.selectedLang || "English");
        updateCropVarieties('Tomato');

        // Handle Google Redirect Result after page reload from signInWithRedirect
        if (typeof window !== 'undefined' && window.firebase && window.firebase.auth) {
            try {
                const redirectRes = await window.firebase.auth().getRedirectResult();
                if (redirectRes && redirectRes.user) {
                    const user = await AuthService.loginWithGoogleUser(redirectRes.user);
                    // Close any open auth modal
                    const authModal = document.getElementById('authModal');
                    if (authModal) authModal.style.display = 'none';
                    showToast(`✅ Signed in via Google as ${user.displayName} (${user.email})`, 'success');
                    navigateTo('viewDashboard');
                }
            } catch (redirErr) {
                console.warn('Firebase Redirect Auth result:', redirErr.code, redirErr.message);
                if (redirErr.code === 'auth/unauthorized-domain') {
                    showToast(`⚠️ Domain not authorized in Firebase Console — add it under Authentication > Settings > Authorized domains.`, 'warning');
                }
            }
        }

        syncAuthUI();
        renderDashboard();
        console.log('✅ KisanTrust Fully Ready & Active');
    } catch (err) {
        console.error('KisanTrust Init Error:', err);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKisanTrustApp);
} else {
    initKisanTrustApp();
}
