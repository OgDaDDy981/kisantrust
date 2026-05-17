import streamlit as st
import time
import os
import json
from azure_utils import AzureServices, LANG_MAP, BRAND_NAME_MAP

# Page Config
st.set_page_config(
    page_title="Kisan Trust Global",
    page_icon="🌱",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Load CSS
def local_css(file_name):
    if os.path.exists(file_name):
        with open(file_name, 'r', encoding='utf-8') as f:
            st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)
    else:
        st.warning("⚠️ CSS missing. UI might look plain.")

local_css("styles.css")

# Sidebar Setup
st.sidebar.markdown("""
<div class="language-selector-header">
    <div class="language-icon">🌍</div>
    <h3>Choose Language</h3>
</div>
""", unsafe_allow_html=True)

# Store previous language for animation
if 'prev_lang' not in st.session_state:
    st.session_state.prev_lang = "Hindi (हिंदी)"

selected_lang = st.sidebar.selectbox(
    "Select your preferred language",
    list(LANG_MAP.keys()),
    index=1,  # Default to Hindi
    label_visibility="collapsed"
)

# Trigger language change animation
if selected_lang != st.session_state.prev_lang:
    st.session_state.lang_changed = True
    st.session_state.prev_lang = selected_lang
else:
    st.session_state.lang_changed = False

# UI Text Dictionary
UI_TEXT = {
    "English": {
        "brand": BRAND_NAME_MAP["English"],
        "tagline": "Fair Price. Right Weight.",
        "upload": "Upload 4 Photos (Lot)",
        "analyze": "Analyze Quality",
        "cut": "Live Cut Verification",
        "offer": "Final Price Offer",
        "step1": "Step 1: Upload Photos",
        "step2": "Step 2: Quality Check",
        "step3": "Step 3: Get Price",
        "welcome": "Welcome to Kisan Trust",
        "subtitle": "Empowering Farmers with AI-Powered Fair Pricing"
    },
    "Hindi (हिंदी)": {
        "brand": BRAND_NAME_MAP["Hindi (हिंदी)"],
        "tagline": "सही दाम. सही वजन.",
        "upload": "4 फोटो अपलोड करें (लॉट)",
        "analyze": "गुणवत्ता जांचें",
        "cut": "काट कर दिखाएं",
        "offer": "अंतिम मूल्य प्रस्ताव",
        "step1": "चरण 1: फोटो अपलोड करें",
        "step2": "चरण 2: गुणवत्ता जांच",
        "step3": "चरण 3: मूल्य प्राप्त करें",
        "welcome": "किसान ट्रस्ट में आपका स्वागत है",
        "subtitle": "किसानों को AI-संचालित उचित मूल्यन से सशक्त बनाना"
    },
    "Marathi (मराठी)": {
        "brand": BRAND_NAME_MAP["Marathi (मराठी)"],
        "tagline": "योग्य भाव. योग्य वजन.",
        "upload": "4 फोटो अपलोड करा",
        "analyze": "गुणवत्ता तपासा",
        "cut": "कापून दाखवा",
        "offer": "अंतिम किंमत",
        "step1": "चरण 1: फोटो अपलोड करा",
        "step2": "चरण 2: गुणवत्ता तपासणी",
        "step3": "चरण 3: किंमत मिळवा",
        "welcome": "किसान ट्रस्ट मध्ये आपले स्वागत आहे",
        "subtitle": "कृषकांना AI-चालित न्याय्य किंमत देण्यास सक्षम करणे"
    },
    "Tamil (தமிழ்)": {
        "brand": BRAND_NAME_MAP["Tamil (தமிழ்)"],
        "tagline": "நியாயமான விலை. சரியான எடை.",
        "upload": "4 புகைப்படங்களை பதிவேற்றவும்",
        "analyze": "தரத்தை சரிபார்க்கவும்",
        "cut": "வெட்டி காட்டுங்கள்",
        "offer": "இறுதி விலை சலுகை",
        "step1": "படி 1: புகைப்படங்களை பதிவேற்றவும்",
        "step2": "படி 2: தர சரிபார்ப்பு",
        "step3": "படி 3: விலையைப் பெறவும்",
        "welcome": "கிசான் டிரஸ்டிற்கு வரவேற்கிறோம்",
        "subtitle": "AI-இயக்கிய நியாயமான விலை நிர்ணயத்துடன் விவசாயிகளை மேம்படுத்துதல்"
    },
    "Spanish (Español)": {
        "brand": BRAND_NAME_MAP["Spanish (Español)"],
        "tagline": "Precio Justo. Peso Correcto.",
        "upload": "Subir 4 Fotos (Lote)",
        "analyze": "Analizar Calidad",
        "cut": "Verificación de Corte en Vivo",
        "offer": "Oferta de Precio Final",
        "step1": "Paso 1: Subir Fotos",
        "step2": "Paso 2: Control de Calidad",
        "step3": "Paso 3: Obtener Precio",
        "welcome": "Bienvenido a Kisan Trust",
        "subtitle": "Empoderando Agricultores con Precios Justos con IA"
    },
    "French (Français)": {
        "brand": BRAND_NAME_MAP["French (Français)"],
        "tagline": "Prix Juste. Bon Poids.",
        "upload": "Télécharger 4 Photos (Lot)",
        "analyze": "Analyser la Qualité",
        "cut": "Vérification de Coupe en Direct",
        "offer": "Offre de Prix Final",
        "step1": "Étape 1 : Télécharger des Photos",
        "step2": "Étape 2 : Contrôle de Qualidad",
        "step3": "Étape 3 : Obtenir le Prix",
        "welcome": "Bienvenue sur Kisan Trust",
        "subtitle": "Autonomiser les Agriculteurs avec des Prix Équitables Propulsés par l'IA"
    }
}

# Fallback to English if key missing
texts = UI_TEXT.get(selected_lang, UI_TEXT["English"])

# Initialize Azure
azure = AzureServices()

# Session State Management
if 'step' not in st.session_state:
    st.session_state.step = 1
if 'vision_data' not in st.session_state:
    st.session_state.vision_data = None
if 'uploaded_files' not in st.session_state:
    st.session_state.uploaded_files = []
if 'show_welcome' not in st.session_state:
    st.session_state.show_welcome = True

# Header Layout
st.markdown(f"""
<div class="header-container {'lang-change' if st.session_state.lang_changed else ''}">
    <div class="brand-name-animation">
        <h1 class="brand-name">{texts['brand']}</h1>
        <div class="tagline">{texts['tagline']}</div>
    </div>
    <div class="language-indicator">
        <span class="lang-badge">{selected_lang}</span>
    </div>
</div>

<div class="welcome-message {'fade-out' if not st.session_state.show_welcome else ''}">
    <h2>👋 {texts['welcome']}</h2>
    <p>{texts['subtitle']}</p>
</div>
""", unsafe_allow_html=True)

# Progress Bar
progress_cols = st.columns(3)
with progress_cols[0]:
    st.markdown(f"""
    <div class="progress-step {'active' if st.session_state.step >= 1 else ''} {'completed' if st.session_state.step > 1 else ''}">
        <div class="step-number">1</div>
        <div class="step-label">{texts['step1']}</div>
    </div>
    """, unsafe_allow_html=True)
with progress_cols[1]:
    st.markdown(f"""
    <div class="progress-step {'active' if st.session_state.step >= 2 else ''} {'completed' if st.session_state.step > 2 else ''}">
        <div class="step-number">2</div>
        <div class="step-label">{texts['step2']}</div>
    </div>
    """, unsafe_allow_html=True)
with progress_cols[2]:
    st.markdown(f"""
    <div class="progress-step {'active' if st.session_state.step >= 3 else ''}">
        <div class="step-number">3</div>
        <div class="step-label">{texts['step3']}</div>
    </div>
    """, unsafe_allow_html=True)

# Fixed the variable name here (was selected_language_name, should be selected_lang)
if azure.is_demo_mode:
    st.info(f"ℹ️ DEMO MODE | Selected Language: {selected_lang}")

# Hide welcome message after first interaction
if st.session_state.show_welcome and st.session_state.step > 1:
    st.session_state.show_welcome = False

# =========================================================
# Image Upload
# =========================================================
if st.session_state.step == 1:
    st.markdown('<div class="custom-card upload-card">', unsafe_allow_html=True)
    
    st.markdown(f"""
    <div class="step-header">
        <div class="step-icon">📸</div>
        <h2>{texts['upload']}</h2>
    </div>
    <p class="step-description">Upload 4 clear photos from different angles of your vegetable lot for accurate analysis.</p>
    """, unsafe_allow_html=True)
    
    # File uploader
    uploaded_files = st.file_uploader(
        "Drag and drop or click to select 4 images",
        accept_multiple_files=True,
        type=['png', 'jpg', 'jpeg'],
        help="Upload exactly 4 photos for best results",
        key="file_uploader"
    )
    
    # Update session state
    if uploaded_files:
        st.session_state.uploaded_files = uploaded_files
    
    # Visual upload area
    st.markdown('<div class="upload-area">', unsafe_allow_html=True)
    
    if uploaded_files:
        # Animated count display
        st.markdown(f"""
        <div class="upload-count animated-count">
            <span class="count-number">{len(uploaded_files)}</span>
            <span class="count-label">/ 4 photos uploaded</span>
        </div>
        """, unsafe_allow_html=True)
        
        # Grid display with hover animations
        cols = st.columns(4)
        for i, file in enumerate(uploaded_files[:4]):
            with cols[i]:
                st.markdown(f'<div class="image-preview-container">', unsafe_allow_html=True)
                st.image(
                    file, 
                    use_column_width=True,
                    caption=f"Photo {i+1}",
                    output_format="auto"
                )
                st.markdown(f'<div class="image-overlay">View Photo {i+1}</div>', unsafe_allow_html=True)
                st.markdown('</div>', unsafe_allow_html=True)
        
        # Validation and action button
        if len(uploaded_files) >= 4:
            col1, col2 = st.columns([1, 2])
            with col1:
                if st.button("🔄 Reset", type="secondary", use_container_width=True):
                    st.session_state.uploaded_files = []
                    st.session_state.step = 1
                    st.rerun()
            with col2:
                if st.button(f"✨ {texts['analyze']}", type="primary", use_container_width=True):
                    with st.spinner("🔍 AI is analyzing your vegetables..."):
                        # Add loading animation
                        st.markdown('<div class="loading-animation"></div>', unsafe_allow_html=True)
                        result = azure.analyze_vegetables_batch(uploaded_files)
                        if "error" in result:
                            st.error(f"❌ {result['error']}")
                        else:
                            st.session_state.vision_data = result
                            st.session_state.step = 2
                            st.rerun()
        else:
            st.warning(f"⚠️ Please upload {4 - len(uploaded_files)} more photo(s) for accurate analysis.")
    
    else:
        # Empty state with guidance
        st.markdown("""
        <div class="empty-state">
            <div class="empty-icon">📷</div>
            <h3>No photos uploaded yet</h3>
            <p>Please upload 4 photos of your vegetable lot to begin analysis</p>
            <div class="upload-hint">
                <span>📱 Tip: Take photos in good lighting from different angles</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
    
    st.markdown('</div>', unsafe_allow_html=True)
    st.markdown('</div>', unsafe_allow_html=True)

# =========================================================
# Live Verification
# =========================================================
elif st.session_state.step == 2:
    st.markdown('<div class="custom-card verification-card">', unsafe_allow_html=True)
    
    # Success animation
    st.markdown("""
    <div class="success-animation">
        <div class="checkmark">✓</div>
        <div class="success-text">Lot Verified Successfully!</div>
    </div>
    """, unsafe_allow_html=True)
    
    data = st.session_state.vision_data
    st.markdown(f"""
    <div class="ai-insight">
        <h4>🤖 AI Insight</h4>
        <p>{data.get('description', 'No description available')}</p>
        <div class="quality-badge {'good' if data.get('quality_check') == 'Pass' else 'poor'}">
            Quality: {data.get('quality_check', 'Unknown')}
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown(f"""
    <div class="step-header">
        <div class="step-icon">🔪</div>
        <h2>{texts['cut']}</h2>
    </div>
    <p class="step-description">Cut one vegetable in half to show internal quality for verification.</p>
    """, unsafe_allow_html=True)
    
    # Animated scanning box
    st.markdown(f"""
    <div class="scanning-container">
        <div class="scanning-effect">
            <div class="scan-line"></div>
            <div class="scan-content">
                <span class="scan-icon">🔍</span>
                <span class="scan-text">Live Quality Scan in Progress...</span>
                <span class="scan-language">Language: {selected_lang}</span>
            </div>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    # Interactive cut verification
    col1, col2 = st.columns([1, 2])
    with col1:
        st.markdown("""
        <div class="cut-instruction">
            <div class="instruction-icon">📋</div>
            <h4>Instructions:</h4>
            <ol>
                <li>Take one vegetable from the lot</li>
                <li>Cut it in half vertically</li>
                <li>Show the internal view to camera</li>
                <li>Click capture below</li>
            </ol>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        # Camera simulation
        st.markdown('<div class="camera-preview">', unsafe_allow_html=True)
        camera_cols = st.columns(3)
        with camera_cols[1]:
            if st.button("📸 Capture Internal View", use_container_width=True, key="capture_cut"):
                with st.spinner("🔄 Analyzing internal freshness..."):
                    # Show capture animation
                    st.markdown('<div class="capture-flash"></div>', unsafe_allow_html=True)
                    time.sleep(2)
                    st.session_state.step = 3
                    st.rerun()
        
        # Skip option
        if st.button("⏭️ Skip & Continue", type="secondary", use_container_width=True):
            st.session_state.step = 3
            st.rerun()
    
    st.markdown('</div>', unsafe_allow_html=True)
    st.markdown('</div>', unsafe_allow_html=True)

# =========================================================
# Price Generation
# =========================================================
elif st.session_state.step == 3:
    # Price calculation with loading animation
    with st.spinner(f"💭 Calculating best price in {selected_lang}..."):
        if 'price_data' not in st.session_state or st.session_state.get('lang_cache') != selected_lang:
            st.markdown('<div class="price-calculation-animation"></div>', unsafe_allow_html=True)
            st.session_state.price_data = azure.get_fair_price(st.session_state.vision_data, selected_lang)
            st.session_state.lang_cache = selected_lang
    
    price_info = st.session_state.price_data
    
    st.markdown('<div class="custom-card price-card">', unsafe_allow_html=True)
    
    st.markdown(f"""
    <div class="step-header">
        <div class="step-icon">💰</div>
        <h2>{texts['offer']}</h2>
    </div>
    <p class="step-description">Your personalized price offer based on quality analysis</p>
    """, unsafe_allow_html=True)
    
    # Price comparison cards
    price_cols = st.columns(2)
    with price_cols[0]:
        st.markdown("""
        <div class="price-card-market">
            <div class="price-card-header">
                <div class="price-icon">🏪</div>
                <h4>Market Price</h4>
            </div>
            <div class="price-amount">{price_info.get('market_price', '₹ --')}</div>
            <div class="price-note">Average market rate</div>
        </div>
        """, unsafe_allow_html=True)
    
    with price_cols[1]:
        st.markdown(f"""
        <div class="price-card-farmer highlight-card">
            <div class="price-card-header">
                <div class="price-icon">👨‍🌾</div>
                <h4>You Receive</h4>
            </div>
            <div class="price-amount farmer-price">{price_info.get('farmer_price', '₹ --')}</div>
            <div class="price-note">Direct to farmer price</div>
            <div class="price-savings">+{price_info.get('savings', '15%')} better than market</div>
        </div>
        """, unsafe_allow_html=True)
    
    # Price breakdown
    with st.expander("📊 See detailed price breakdown", expanded=False):
        st.markdown("""
        <div class="price-breakdown">
            <div class="breakdown-item">
                <span class="breakdown-label">Base Quality Value</span>
                <span class="breakdown-value">₹ 35</span>
            </div>
            <div class="breakdown-item">
                <span class="breakdown-label">Freshness Bonus</span>
                <span class="breakdown-value">+ ₹ 3</span>
            </div>
            <div class="breakdown-item">
                <span class="breakdown-label">Direct Farmer Discount</span>
                <span class="breakdown-value">- ₹ 1</span>
            </div>
            <div class="breakdown-item total">
                <span class="breakdown-label">Final Price</span>
                <span class="breakdown-value">₹ 37</span>
            </div>
        </div>
        """, unsafe_allow_html=True)
    
    st.markdown("---")
    
    # AI Explanation with language indicator
    st.markdown(f"""
    <div class="explanation-section">
        <div class="explanation-header">
            <div class="explanation-icon">🗣️</div>
            <div>
                <h4>AI Explanation ({selected_lang})</h4>
                <div class="language-badge-small">{selected_lang}</div>
            </div>
        </div>
        <div class="explanation-content">
            {price_info.get('explanation', 'Error generating explanation.')}
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    # Audio player
    audio_cols = st.columns([3, 1])
    with audio_cols[0]:
        if not azure.is_demo_mode:
            audio_file = azure.text_to_speech(price_info.get('explanation'), selected_lang)
            if audio_file:
                st.markdown("""
                <div class="audio-player-container">
                    <div class="audio-header">
                        <div class="audio-icon">🔊</div>
                        <span>Listen to explanation</span>
                    </div>
                """, unsafe_allow_html=True)
                st.audio(audio_file, format='audio/wav')
                st.markdown('</div>', unsafe_allow_html=True)
        else:
            st.info("🔊 Audio explanation available with full Azure setup")
    
    with audio_cols[1]:
        if st.button("🔄 Regenerate", type="secondary", use_container_width=True):
            del st.session_state.price_data
            st.rerun()
    
    # Action buttons
    st.markdown("<br>", unsafe_allow_html=True)
    action_cols = st.columns([1, 1, 1])
    
    with action_cols[0]:
        if st.button("📝 Negotiate", type="secondary", use_container_width=True):
            st.info("💬 Negotiation feature coming soon!")
    
    with action_cols[1]:
        if st.button("🔄 New Analysis", type="secondary", use_container_width=True):
            st.session_state.step = 1
            st.session_state.uploaded_files = []
            st.session_state.vision_data = None
            st.session_state.price_data = None
            st.rerun()
    
    with action_cols[2]:
        if st.button(f"✅ {texts['offer']}", type="primary", use_container_width=True):
            # Celebration animation
            st.markdown('<div class="celebration"></div>', unsafe_allow_html=True)
            st.balloons()
            
            # Success message
            st.success(f"""
            🎉 Transaction Complete!
            
            **Details:**
            - Amount: {price_info.get('farmer_price', '₹ --')}
            - Quality: {st.session_state.vision_data.get('quality_check', 'Good')}
            - Language: {selected_lang}
            
            Payment will be processed within 24 hours.
            """)
            
            # Download receipt option
            st.download_button(
                label="📄 Download Receipt",
                data=json.dumps({
                    "transaction_id": f"KT{int(time.time())}",
                    "amount": price_info.get('farmer_price'),
                    "quality": st.session_state.vision_data.get('quality_check'),
                    "language": selected_lang,
                    "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
                }, indent=2),
                file_name=f"kisan_trust_receipt_{int(time.time())}.json",
                mime="application/json"
            )
            
            if st.button("🌱 Start New Transaction", use_container_width=True):
                st.session_state.step = 1
                st.session_state.uploaded_files = []
                st.session_state.vision_data = None
                st.session_state.price_data = None
                st.session_state.show_welcome = True
                st.rerun()
    
    st.markdown('</div>', unsafe_allow_html=True)

# =========================================================
# FOOTER
# =========================================================
st.markdown("""
<div class="footer">
    <div class="footer-content">
        <div class="footer-brand">🌱 Kisan Trust</div>
        <div class="footer-links">
            <span>📞 Support: 1800-123-4567</span>
            <span>📧 Email: help@kisantrust.org</span>
            <span>📍 Available in 6 languages</span>
        </div>
        <div class="footer-note">
            Empowering farmers with transparent, AI-powered pricing since 2024
        </div>
</div>
""", unsafe_allow_html=True)

# Initialize animations on load
if 'animations_loaded' not in st.session_state:
    st.session_state.animations_loaded = True
    st.markdown("""
    <script>
    // Initialize animations
    document.addEventListener('DOMContentLoaded', function() {
        // Add loading animation to all interactive elements
        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.add('click-animation');
                setTimeout(() => {
                    this.classList.remove('click-animation');
                }, 300);
            });
        });
        
        // Language switch animation
        const langSelect = document.querySelector('[data-testid="stSelectbox"]');
        if (langSelect) {
            langSelect.addEventListener('change', function() {
                document.querySelector('.header-container').classList.add('lang-change');
                setTimeout(() => {
                    document.querySelector('.header-container').classList.remove('lang-change');
                }, 1000);
            });
        }
    });
    </script>
    """, unsafe_allow_html=True)