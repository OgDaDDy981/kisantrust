/**
 * ============================================
 * KISAN TRUST - STATIC WEB APP ENGINE
 * Fully functional static web engine
 * Runs entirely client-side
 * ============================================
 */

// ===========================
// LANGUAGE & CONFIG DATA
// ===========================
const LANG_MAP = {
    "English": "en-US",
    "Hindi (हिंदी)": "hi-IN",
    "Marathi (मराठी)": "mr-IN",
    "Tamil (தமிழ்)": "ta-IN",
    "Spanish (Español)": "es-ES",
    "French (Français)": "fr-FR"
};

const BRAND_NAME_MAP = {
    "English": "Kisan Trust",
    "Hindi (हिंदी)": "किसान ट्रस्ट",
    "Marathi (मराठी)": "किसान ट्रस्ट",
    "Tamil (தமிழ்)": "கிசான் நம்பிக்கை",
    "Spanish (Español)": "Confianza Kisan",
    "French (Français)": "Confiance Kisan"
};

const UI_TEXT = {
    "English": {
        brand: BRAND_NAME_MAP["English"],
        tagline: "Fair Price. Right Weight.",
        upload: "Upload 4 Photos (Lot)",
        analyze: "Analyze Quality",
        cut: "Live Cut Verification",
        offer: "Final Price Offer",
        step1: "Step 1: Upload Photos",
        step2: "Step 2: Quality Check",
        step3: "Step 3: Get Price",
        welcome: "Welcome to Kisan Trust",
        subtitle: "Empowering Farmers with AI-Powered Fair Pricing"
    },
    "Hindi (हिंदी)": {
        brand: BRAND_NAME_MAP["Hindi (हिंदी)"],
        tagline: "सही दाम. सही वजन.",
        upload: "4 फोटो अपलोड करें (लॉट)",
        analyze: "गुणवत्ता जांचें",
        cut: "काट कर दिखाएं",
        offer: "अंतिम मूल्य प्रस्ताव",
        step1: "चरण 1: फोटो अपलोड करें",
        step2: "चरण 2: गुणवत्ता जांच",
        step3: "चरण 3: मूल्य प्राप्त करें",
        welcome: "किसान ट्रस्ट में आपका स्वागत है",
        subtitle: "किसानों को AI-संचालित उचित मूल्यन से सशक्त बनाना"
    },
    "Marathi (मराठी)": {
        brand: BRAND_NAME_MAP["Marathi (मराठी)"],
        tagline: "योग्य भाव. योग्य वजन.",
        upload: "4 फोटो अपलोड करा",
        analyze: "गुणवत्ता तपासा",
        cut: "कापून दाखवा",
        offer: "अंतिम किंमत",
        step1: "चरण 1: फोटो अपलोड करा",
        step2: "चरण 2: गुणवत्ता तपासणी",
        step3: "चरण 3: किंमत मिळवा",
        welcome: "किसान ट्रस्ट मध्ये आपले स्वागत आहे",
        subtitle: "कृषकांना AI-चालित न्याय्य किंमत देण्यास सक्षम करणे"
    },
    "Tamil (தமிழ்)": {
        brand: BRAND_NAME_MAP["Tamil (தமிழ்)"],
        tagline: "நியாயமான விலை. சரியான எடை.",
        upload: "4 புகைப்படங்களை பதிவேற்றவும்",
        analyze: "தரத்தை சரிபார்க்கவும்",
        cut: "வெட்டி காட்டுங்கள்",
        offer: "இறுதி விலை சலுகை",
        step1: "படி 1: புகைப்படங்களை பதிவேற்றவும்",
        step2: "படி 2: தர சரிபார்ப்பு",
        step3: "படி 3: விலையைப் பெறவும்",
        welcome: "கிசான் டிரஸ்டிற்கு வரவேற்கிறோம்",
        subtitle: "AI-இயக்கிய நியாயமான விலை நிர்ணயத்துடன் விவசாயிகளை மேம்படுத்துதல்"
    },
    "Spanish (Español)": {
        brand: BRAND_NAME_MAP["Spanish (Español)"],
        tagline: "Precio Justo. Peso Correcto.",
        upload: "Subir 4 Fotos (Lote)",
        analyze: "Analizar Calidad",
        cut: "Verificación de Corte en Vivo",
        offer: "Oferta de Precio Final",
        step1: "Paso 1: Subir Fotos",
        step2: "Paso 2: Control de Calidad",
        step3: "Paso 3: Obtener Precio",
        welcome: "Bienvenido a Kisan Trust",
        subtitle: "Empoderando Agricultores con Precios Justos con IA"
    },
    "French (Français)": {
        brand: BRAND_NAME_MAP["French (Français)"],
        tagline: "Prix Juste. Bon Poids.",
        upload: "Télécharger 4 Photos (Lot)",
        analyze: "Analyser la Qualité",
        cut: "Vérification de Coupe en Direct",
        offer: "Offre de Prix Final",
        step1: "Étape 1 : Télécharger des Photos",
        step2: "Étape 2 : Contrôle de Qualité",
        step3: "Étape 3 : Obtenir le Prix",
        welcome: "Bienvenue sur Kisan Trust",
        subtitle: "Autonomiser les Agriculteurs avec des Prix Équitables Propulsés par l'IA"
    }
};

const PRICE_TEMPLATES = {
    "English": [
        "Based on the excellent quality of your {vegetable}, the market price is {market_price}. After deducting transport and platform fees, you receive {farmer_price}. This is {percentage}% better than average market rates.",
        "Your {vegetable} shows premium quality with good color and size. Market rate: {market_price}. Your direct price: {farmer_price}. You save {savings} compared to traditional channels."
    ],
    "Hindi (हिंदी)": [
        "आपकी {vegetable} की उत्कृष्ट गुणवत्ता के आधार पर, बाजार मूल्य {market_price} है। परिवहन और प्लेटफ़ॉर्म शुल्क काटने के बाद, आपको {farmer_price} मिलते हैं। यह औसत बाजार दरों से {percentage}% बेहतर है।",
        "आपकी {vegetable} का रंग और आकार उत्तम है। बाजार भाव: {market_price}. आपका सीधा मूल्य: {farmer_price}. आप पारंपरिक चैनलों की तुलना में {savings} बचाते हैं।"
    ],
    "Marathi (मराठी)": [
        "तुमच्या {vegetable} च्या उत्तम गुणवत्तेच्या आधारे, बाजारभाव {market_price} आहे. वाहतूक आणि प्लॅटफॉर्म फी वजा केल्यानंतर, तुम्हाला {farmer_price} मिळतात. हे सरासरी बाजार दरापेक्षा {percentage}% चांगले आहे.",
        "तुमच्या {vegetable} चा रंग आणि आकार उत्तम आहे. बाजार भाव: {market_price}. तुमचा थेट भाव: {farmer_price}. तुम्ही पारंपरिक चॅनेलच्या तुलनेत {savings} वाचवता."
    ],
    "Tamil (தமிழ்)": [
        "உங்கள் {vegetable} அருமையான தரத்தைக் கொண்டுள்ளது, சந்தை விலை {market_price}. போக்குவரத்து மற்றும் தளக் கட்டணங்களைக் கழித்த பிறகு, நீங்கள் {farmer_price} பெறுகிறீர்கள். இது சராசரி சந்தை விகிதங்களை விட {percentage}% சிறந்தது.",
        "உங்கள் {vegetable} நிறம் மற்றும் அளவு சிறந்தது. சந்தை விலை: {market_price}. உங்கள் நேரடி விலை: {farmer_price}. நீங்கள் பாரம்பரிய சேனல்களுடன் ஒப்பிடும்போது {savings} சேமிக்கிறீர்கள்."
    ],
    "Spanish (Español)": [
        "Basado en la excelente calidad de su {vegetable}, el precio de mercado es {market_price}. Después de deducir los gastos de transporte y de la plataforma, usted recibe {farmer_price}. Esto es un {percentage}% mejor que las tasas promedio del mercado.",
        "Su {vegetable} muestra calidad premium con buen color y tamaño. Precio de mercado: {market_price}. Su precio directo: {farmer_price}. Ahorra {savings} en comparación con los canales tradicionales."
    ],
    "French (Français)": [
        "Sur la base de l'excellente qualité de votre {vegetable}, le prix du marché est de {market_price}. Après déduction des frais de transport et de plateforme, vous recevez {farmer_price}. C'est {percentage}% mieux que les taux moyens du marché.",
        "Votre {vegetable} présente une qualité premium avec une bonne couleur et taille. Prix du marché : {market_price}. Votre prix direct : {farmer_price}. Vous économisez {savings} par rapport aux canaux traditionnels."
    ]
};

const VEGETABLE_NAMES = {
    "English": { tomato: "Tomato", potato: "Potato", onion: "Onion", carrot: "Carrot", cabbage: "Cabbage", vegetable: "Vegetable" },
    "Hindi (हिंदी)": { tomato: "टमाटर", potato: "आलू", onion: "प्याज", carrot: "गाजर", cabbage: "पत्ता गोभी", vegetable: "सब्जी" },
    "Marathi (मराठी)": { tomato: "टोमॅटो", potato: "बटाटा", onion: "कांदा", carrot: "गाजर", cabbage: "कोबी", vegetable: "भाजी" },
    "Tamil (தமிழ்)": { tomato: "தக்காளி", potato: "உருளைக்கிழங்கு", onion: "வெங்காயம்", carrot: "கேரட்", cabbage: "முட்டைகோஸ்", vegetable: "காய்கறி" },
    "Spanish (Español)": { tomato: "Tomate", potato: "Patata", onion: "Cebolla", carrot: "Zanahoria", cabbage: "Col", vegetable: "Verdura" },
    "French (Français)": { tomato: "Tomate", potato: "Pomme de terre", onion: "Oignon", carrot: "Carotte", cabbage: "Chou", vegetable: "Légume" }
};

// ===========================
// APPLICATION STATE
// ===========================
const AppState = {
    currentStep: 1,
    selectedLang: "Hindi (हिंदी)",
    uploadedFiles: [],
    visionData: null,
    priceData: null,
    showWelcome: true
};

// ===========================
// UTILITY FUNCTIONS
// ===========================
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function formatTemplate(template, data) {
    return template.replace(/{(\w+)}/g, (match, key) => data[key] || match);
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ===========================
// SIMULATION ENGINE
// ===========================
const DemoAI = {
    analyzeVegetables(imageCount) {
        const vegetableType = randomChoice(["tomato", "potato", "onion", "carrot"]);
        const qualityScore = randomInt(75, 95);
        const freshnessLevels = ["Very Fresh", "Fresh", "Moderate"];

        return {
            description: `Demo: ${imageCount} images of fresh ${vegetableType}s, consistent size and good color.`,
            quality_check: qualityScore > 85 ? "Excellent" : "Good",
            quality_score: qualityScore,
            count: imageCount,
            detected_vegetable: vegetableType,
            freshness_level: randomChoice(freshnessLevels)
        };
    },

    getFairPrice(visionResult, languageName) {
        const vegetable = visionResult.detected_vegetable || "vegetable";
        const qualityScore = visionResult.quality_score || 80;

        // Generate dynamic prices
        const basePrice = randomInt(30, 50);
        const transportCost = randomInt(2, 5);
        const platformFee = randomInt(1, 3);
        const farmerPrice = basePrice - transportCost - platformFee;
        const percentage = ((basePrice - farmerPrice) / basePrice * 100).toFixed(1);
        const savings = transportCost + platformFee;

        // Get localized vegetable name
        const vegNames = VEGETABLE_NAMES[languageName] || VEGETABLE_NAMES["English"];
        const localVegName = vegNames[vegetable] || vegNames.vegetable;

        // Select appropriate template
        const templates = PRICE_TEMPLATES[languageName] || PRICE_TEMPLATES["English"];
        const template = randomChoice(templates);

        const explanation = formatTemplate(template, {
            vegetable: localVegName,
            market_price: `₹${basePrice}`,
            farmer_price: `₹${farmerPrice}`,
            percentage: percentage,
            savings: `₹${savings}`
        });

        return {
            market_price: `₹${basePrice}`,
            farmer_price: `₹${farmerPrice}`,
            explanation: explanation,
            savings: `₹${savings}`,
            quality_bonus: qualityScore > 75 ? `+₹${qualityScore - 75}` : "",
            vegetable_type: vegetable.charAt(0).toUpperCase() + vegetable.slice(1),
            // For breakdown
            base_price: basePrice,
            transport_cost: transportCost,
            platform_fee: platformFee,
            final_price: farmerPrice
        };
    }
};

// ===========================
// UI UPDATE FUNCTIONS
// ===========================
function updateLanguage(lang) {
    const prevLang = AppState.selectedLang;
    AppState.selectedLang = lang;

    const texts = UI_TEXT[lang] || UI_TEXT["English"];

    // Update header
    const headerContainer = document.getElementById('headerContainer');
    document.getElementById('brandName').textContent = texts.brand;
    document.getElementById('tagline').textContent = texts.tagline;
    document.getElementById('langBadge').textContent = lang;

    // Trigger language change animation
    if (prevLang !== lang) {
        headerContainer.classList.add('lang-change');
        setTimeout(() => headerContainer.classList.remove('lang-change'), 1000);
    }

    // Update welcome
    document.getElementById('welcomeText').textContent = texts.welcome;
    document.getElementById('subtitleText').textContent = texts.subtitle;

    // Update progress steps
    document.getElementById('step1Label').textContent = texts.step1;
    document.getElementById('step2Label').textContent = texts.step2;
    document.getElementById('step3Label').textContent = texts.step3;

    // Update demo indicator
    document.getElementById('demoLangDisplay').textContent = lang;

    // Update Upload section
    document.getElementById('uploadTitle').textContent = texts.upload;
    document.getElementById('analyzeBtnText').textContent = texts.analyze;

    // Update Cut section
    document.getElementById('cutTitle').textContent = texts.cut;
    document.getElementById('scanLangDisplay').textContent = `Language: ${lang}`;

    // Update Price section
    document.getElementById('offerTitle').textContent = texts.offer;
    document.getElementById('acceptBtnText').textContent = texts.offer;
    document.getElementById('explainLang').textContent = lang;
    document.getElementById('explainLangBadge').textContent = lang;

    // Update sidebar active state
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Set font based on language
    document.body.className = '';
    if (lang === "Hindi (हिंदी)" || lang === "Marathi (मराठी)") {
        document.body.classList.add('lang-hindi');
    } else if (lang === "Tamil (தமிழ்)") {
        document.body.classList.add('lang-tamil');
    }

    // If on step 3, regenerate price with new language
    if (AppState.currentStep === 3 && AppState.visionData) {
        generatePrice();
    }
}

function updateProgressBar() {
    const step = AppState.currentStep;
    ['progressStep1', 'progressStep2', 'progressStep3'].forEach((id, i) => {
        const el = document.getElementById(id);
        el.classList.remove('active', 'completed');
        if (i + 1 < step) el.classList.add('completed');
        if (i + 1 <= step) el.classList.add('active');
    });

    // Update connector lines
    document.getElementById('connector1').classList.toggle('active', step > 1);
    document.getElementById('connector2').classList.toggle('active', step > 2);
}

function goToStep(stepNum) {
    AppState.currentStep = stepNum;
    updateProgressBar();

    // Hide all sections
    document.getElementById('step1Section').style.display = 'none';
    document.getElementById('step2Section').style.display = 'none';
    document.getElementById('step3Section').style.display = 'none';

    // Show active section
    const sectionId = `step${stepNum}Section`;
    document.getElementById(sectionId).style.display = 'block';

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Hide welcome after first navigation
    if (stepNum > 1 && AppState.showWelcome) {
        AppState.showWelcome = false;
        const welcomeEl = document.getElementById('welcomeMessage');
        welcomeEl.classList.add('fade-out');
        setTimeout(() => welcomeEl.style.display = 'none', 500);
    }

    // If moving to step 3, generate price
    if (stepNum === 3) {
        generatePrice();
    }
}

function showLoading(text) {
    document.getElementById('loadingText').textContent = text;
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

// ===========================
// FILE UPLOAD HANDLING
// ===========================
function handleFiles(files) {
    if (!files || files.length === 0) return;

    AppState.uploadedFiles = Array.from(files).slice(0, 4);
    renderUploadedFiles();
}

function renderUploadedFiles() {
    const files = AppState.uploadedFiles;
    const emptyState = document.getElementById('emptyState');
    const uploadedState = document.getElementById('uploadedState');
    const uploadActions = document.getElementById('uploadActions');
    const photoCount = document.getElementById('photoCount');
    const imageGrid = document.getElementById('imageGrid');
    const uploadWarning = document.getElementById('uploadWarning');

    if (files.length === 0) {
        emptyState.style.display = 'block';
        uploadedState.style.display = 'none';
        uploadActions.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    uploadedState.style.display = 'block';
    uploadActions.style.display = 'flex';
    photoCount.textContent = files.length;

    // Render image grid
    imageGrid.innerHTML = '';
    files.forEach((file, i) => {
        const container = document.createElement('div');
        container.className = 'image-preview-container';

        const img = document.createElement('img');
        img.alt = `Photo ${i + 1}`;

        const reader = new FileReader();
        reader.onload = (e) => {
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);

        const overlay = document.createElement('div');
        overlay.className = 'image-overlay';
        overlay.textContent = `View Photo ${i + 1}`;

        container.appendChild(img);
        container.appendChild(overlay);
        imageGrid.appendChild(container);
    });

    // Show warning or ready
    if (files.length < 4) {
        uploadWarning.style.display = 'flex';
        document.getElementById('warningText').textContent =
            `⚠️ Please upload ${4 - files.length} more photo(s) for accurate analysis.`;
    } else {
        uploadWarning.style.display = 'none';
    }
}

// ===========================
// AI ANALYSIS (DEMO)
// ===========================
function runAnalysis() {
    if (AppState.uploadedFiles.length < 4) {
        showToast('Please upload at least 4 photos', 'warning');
        return;
    }

    showLoading('🔍 AI is analyzing your vegetables...');

    // Simulate analysis time (like azure_utils did with time.sleep(2))
    setTimeout(() => {
        AppState.visionData = DemoAI.analyzeVegetables(AppState.uploadedFiles.length);
        hideLoading();

        // Update step 2 with results
        document.getElementById('aiDescription').textContent = AppState.visionData.description;

        const qualityBadge = document.getElementById('qualityBadge');
        qualityBadge.textContent = `Quality: ${AppState.visionData.quality_check}`;
        qualityBadge.className = `quality-badge ${AppState.visionData.quality_check === 'Pass' || AppState.visionData.quality_check === 'Poor' ? 'poor' : 'good'}`;

        goToStep(2);
    }, 2000);
}

function generatePrice() {
    if (!AppState.visionData) return;

    showLoading(`💭 Calculating best price in ${AppState.selectedLang}...`);

    // Simulate price calculation (like azure_utils did with time.sleep(1.5))
    setTimeout(() => {
        AppState.priceData = DemoAI.getFairPrice(AppState.visionData, AppState.selectedLang);
        hideLoading();
        updatePriceUI();
    }, 1500);
}

function updatePriceUI() {
    const price = AppState.priceData;
    if (!price) return;

    document.getElementById('marketPrice').textContent = price.market_price;
    document.getElementById('farmerPrice').textContent = price.farmer_price;
    document.getElementById('priceSavings').textContent = `+${price.savings} better than market`;
    document.getElementById('explanationContent').textContent = price.explanation;

    // Update breakdown
    document.getElementById('bdBase').textContent = `₹ ${price.base_price}`;
    document.getElementById('bdFreshness').textContent = `+ ₹ ${price.quality_bonus || '0'}`;
    document.getElementById('bdDiscount').textContent = `- ₹ ${price.platform_fee}`;
    document.getElementById('bdTotal').textContent = price.farmer_price;

    // Update transaction details
    document.getElementById('txAmount').textContent = price.farmer_price;
    document.getElementById('txQuality').textContent = AppState.visionData.quality_check;
    document.getElementById('txLanguage').textContent = AppState.selectedLang;
}

// ===========================
// RESET / NEW TRANSACTION
// ===========================
function resetAll() {
    AppState.uploadedFiles = [];
    AppState.visionData = null;
    AppState.priceData = null;
    AppState.showWelcome = true;

    // Reset file input
    document.getElementById('fileInput').value = '';

    // Show welcome
    const welcomeEl = document.getElementById('welcomeMessage');
    welcomeEl.style.display = 'block';
    welcomeEl.classList.remove('fade-out');

    // Reset transaction complete
    document.getElementById('transactionComplete').style.display = 'none';

    // Reset upload
    renderUploadedFiles();

    goToStep(1);
}

// ===========================
// RECEIPT DOWNLOAD
// ===========================
function downloadReceipt() {
    const receipt = {
        transaction_id: `KT${Date.now()}`,
        amount: AppState.priceData?.farmer_price || '₹ --',
        quality: AppState.visionData?.quality_check || 'Good',
        language: AppState.selectedLang,
        timestamp: new Date().toLocaleString()
    };

    const blob = new Blob([JSON.stringify(receipt, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kisan_trust_receipt_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// ===========================
// DRAG & DROP SUPPORT
// ===========================
function setupDragDrop() {
    const uploadArea = document.getElementById('uploadArea');

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadArea.classList.add('drag-over');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            uploadArea.classList.remove('drag-over');
        });
    });

    uploadArea.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        handleFiles(files);
    });
}

// ===========================
// EVENT LISTENERS
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Language Selection
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.dataset.lang);
        });
    });

    // Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.getElementById('mainContent').addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });

    // File Upload
    const fileInput = document.getElementById('fileInput');
    document.getElementById('selectPhotosBtn').addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    // Reset Button
    document.getElementById('resetBtn').addEventListener('click', () => {
        AppState.uploadedFiles = [];
        document.getElementById('fileInput').value = '';
        renderUploadedFiles();
    });

    // Analyze Button
    document.getElementById('analyzeBtn').addEventListener('click', runAnalysis);

    // Capture / Skip Buttons (Step 2)
    document.getElementById('captureBtn').addEventListener('click', () => {
        showLoading('🔄 Analyzing internal freshness...');
        setTimeout(() => {
            hideLoading();
            goToStep(3);
        }, 2000);
    });

    document.getElementById('skipBtn').addEventListener('click', () => {
        goToStep(3);
    });

    // Step 3 Actions
    document.getElementById('negotiateBtn').addEventListener('click', () => {
        showToast('💬 Negotiation feature coming soon!', 'info');
    });

    document.getElementById('newAnalysisBtn').addEventListener('click', resetAll);

    document.getElementById('acceptOfferBtn').addEventListener('click', () => {
        document.getElementById('transactionComplete').style.display = 'block';
        document.getElementById('transactionComplete').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('downloadReceiptBtn').addEventListener('click', downloadReceipt);

    document.getElementById('newTransactionBtn').addEventListener('click', resetAll);

    // Setup drag & drop
    setupDragDrop();

    // Also allow clicking the upload area itself to select files
    document.getElementById('uploadArea').addEventListener('click', (e) => {
        // Don't trigger if they clicked a button or the uploaded state
        if (e.target.closest('.btn') || e.target.closest('.upload-btn') || e.target.closest('.image-preview-container')) return;
        if (AppState.uploadedFiles.length === 0) {
            fileInput.click();
        }
    });

    // Initialize with default language
    updateLanguage(AppState.selectedLang);
    updateProgressBar();

    // Button click ripple animation
    document.querySelectorAll('.btn, .upload-btn, .lang-option').forEach(btn => {
        btn.addEventListener('click', function (e) {
            this.style.transform = 'scale(0.96)';
            setTimeout(() => { this.style.transform = ''; }, 150);
        });
    });

    // ===========================
    // SCROLL REVEAL OBSERVER
    // Sections animate in when visible
    // ===========================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Initial reveal for step 1 (already visible)
    setTimeout(() => {
        document.getElementById('step1Section').classList.add('visible');
    }, 300);

    // ===========================
    // PARALLAX HEADER
    // Subtle depth effect on scroll
    // ===========================
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const header = document.getElementById('headerContainer');
                if (header) {
                    header.style.transform = `translateY(${scrollY * 0.15}px)`;
                    header.style.opacity = Math.max(0.4, 1 - scrollY / 600);
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // ===========================
    // CURSOR GLOW (Desktop)
    // A subtle green glow follows the cursor
    // ===========================
    if (window.matchMedia('(pointer: fine)').matches) {
        const glow = document.createElement('div');
        glow.style.cssText = `
            position: fixed; width: 300px; height: 300px; border-radius: 50%;
            background: radial-gradient(circle, rgba(67,160,71,0.08) 0%, transparent 70%);
            pointer-events: none; z-index: -1; transition: transform 0.3s ease-out;
            top: 0; left: 0; will-change: transform;
        `;
        document.body.appendChild(glow);

        document.addEventListener('mousemove', (e) => {
            glow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
        });
    }

    // ===========================
    // IMAGE GRID ANIMATION
    // ===========================
    const origRender = renderUploadedFiles;
    renderUploadedFiles = function () {
        origRender();
        // Add staggered entrance to grid items
        setTimeout(() => {
            document.querySelectorAll('.image-preview-container').forEach((item, i) => {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8) translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1) translateY(0)';
                }, i * 120);
            });
        }, 50);
    };

    // ===========================
    // TYPEWRITER EFFECT for welcome text
    // ===========================
    const welcomeText = document.getElementById('welcomeText');
    if (welcomeText) {
        const text = welcomeText.textContent;
        welcomeText.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                welcomeText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        }
        setTimeout(typeWriter, 800);
    }
});
