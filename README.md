# 🚜 KisanTrust

> **AI-Powered Market Intelligence and Trusted Farm-to-Buyer Network**  
> *"Know Your Crop. Know Its Worth. Know Where to Sell."*

**Smart India Hackathon (SIH) Problem Statement 6132**

KisanTrust is an AI-assisted market intelligence and trusted farm-to-buyer platform that helps farmers discover fair prices, compare markets based on net realization, identify the right time and place to sell, connect with reliable buyers, aggregate produce for larger opportunities, optimize logistics, and track transactions through payment.

---

## 🌟 Key Pillars (SIH PS 6132)

1. **Digital Agricultural Lots & AI Quality Assessment**: Standardized multi-angle exterior photo analysis and internal cut cross-section inspection producing normalized **Grade A/B/C**, freshness scores, and shelf-life predictions.
2. **Transparent Price Discovery Architecture**: Deterministic, explainable net realization calculation removing arbitrary guarantees:
   $$\text{Estimated Net Realization} = \text{Base Market Price} + \text{Quality Premium} + \text{Buyer Demand Index} - \text{Transport Cost} - \text{Storage Cost}$$
3. **Mandi Market Intelligence & APMC Comparison**: Live benchmark comparison across APMC Mandis (Lasalgaon, Pune, Vashi/Mumbai, Pimpalgaon) ranked strictly by net farmer realization.
4. **Verified Buyer Marketplace & KisanTrust Score**: Direct linkages with food processors, bulk retailers, and exporters scored via a multi-factor Opportunity Compatibility algorithm and transparent Buyer Reliability Rating (0–100).
5. **Multi-Round Deal Negotiations**: Direct buyer-to-farmer price counter-proposals with automated transition to official Transaction Records and Escrow locking upon deal acceptance.
6. **Intelligent Decision Support & Opportunity Scoring**: Deterministic multi-factor decision engine generating clear recommendations (`SELL_NOW`, `WAIT`, `SELL_TO_ANOTHER_MARKET`, `SELL_TO_VERIFIED_BUYER`) with a 6-factor Opportunity Score (0–100%).
7. **Gemini Grounded Advisory Layer**: Conversational explanation layer providing empathetic, localized guidance in Marathi, Hindi, and English without hallucinating market prices or future certainty.
8. **Smart Village Pooling & Shared Freight Aggregation**: Shared freight optimization enabling smallholder farmers to aggregate compatible lots into 10-Ton truckloads and save 50–70% on logistics costs.
9. **Controlled 9-Stage Transaction Lifecycle**: End-to-end audit tracking from deal acceptance to farm pickup, transit, QC delivery, and bank escrow settlement with printable digital certificates.
10. **Evidence-Assisted Dispute Support**: Tamper-proof dispute logging referencing certified original lot scans, timestamps, and cut verification reports to protect farmers from unfair deductions.
11. **Storage Feasibility & Post-Harvest Advisory**: Technical evaluation distinguishing immediate sales from on-farm ventilated storage (Kanda Chawl) or commercial cold storage.
12. **Multilingual First**: Prioritizing **Marathi (मराठी)**, **Hindi (हिंदी)**, and **English**.

---

## 🏗️ Project Architecture

```
Kisan_Trust/
├── index.html                 # Single Page Application entry point
├── app.css                    # Harvest-themed glassmorphic design system
├── app.js                     # Main application controller & state machine
├── firestore.rules            # Declarative Firestore security rules
├── storage.rules              # Firebase Storage security rules for lot images & disputes
├── test_stage1.js             # Automated Stage 1 verification suite (30 unit tests)
├── test_stage2.js             # Automated Stage 2 verification suite (30 unit tests)
├── test_stage3.js             # Automated Stage 3 verification suite (31 unit tests)
├── test_stage4.js             # Automated Stage 4 verification suite (32 unit tests)
├── test_stage5.js             # Automated Stage 5 verification suite (30 unit tests)
├── test_stage6.js             # Automated Stage 6 verification suite (18 unit tests)
└── src/
    ├── config/
    │   └── firebaseConfig.js  # Firebase configuration & offline resilient storage adapter
    ├── models/
    │   ├── Lot.js             # Digital Agricultural Lot data model
    │   ├── Market.js          # User, Mandi, and Pooling models
    │   ├── Buyer.js           # BuyerProfile, BuyerDemand, and NegotiationRecord models
    │   ├── Pooling.js         # PoolingCluster and Aggregation domain models
    │   ├── Transaction.js     # TransactionRecord with controlled 9-stage lifecycle & audit trail
    │   └── Dispute.js         # DisputeRecord for evidence-assisted dispute resolution
    ├── services/
    │   ├── firebaseService.js # Firestore CRUD & Firebase Storage service
    │   ├── qualityService.js  # Normalized Grade A/B/C quality grading service
    │   ├── pricingService.js  # Transparent price discovery engine
    │   ├── marketDataService.js # Agmarknet/OGD live data normalizer & cache
    │   ├── priceCalculationService.js # Itemized net realization calculation engine
    │   ├── marketComparisonService.js # Multi-mandi comparative ranking engine
    │   ├── marketTrendService.js # 7-day and 30-day price velocity analysis
    │   ├── pricePredictionService.js # Explainable price opportunity forecasting with uncertainty intervals
    │   ├── recommendationService.js # Deterministic Selling Decision Engine & Opportunity Scoring
    │   ├── geminiAdvisoryService.js # Grounded Multilingual Gemini AI Advisory Layer
    │   ├── transportEstimationService.js # Road distance and freight cost estimator
    │   ├── logisticsService.js # Logistics fleet options & comparative shared transport calculator
    │   ├── storageService.js  # Storage feasibility evaluator & cost benchmarks
    │   ├── buyerService.js    # Buyer demand posting and management
    │   ├── matchingService.js # Deterministic Opportunity Compatibility Matcher
    │   ├── negotiationService.js # Multi-round counter-offers & deal acceptance
    │   ├── poolingService.js  # Smart village lot pooling and shared freight engine
    │   ├── transactionService.js # Deal milestone tracking & digital receipt generator
    │   ├── trustScoreService.js # Transparent KisanTrust Score (0–100) for buyers
    │   └── disputeService.js  # Evidence-assisted dispute creation and resolution
    ├── data/
    │   ├── mockLots.js        # Seed active digital agricultural lots
    │   ├── mockMandis.js      # APMC mandi benchmarks & pooling clusters
    │   ├── mockBuyers.js      # Seed verified buyer profiles & purchase demands
    │   └── cropKnowledge.js   # Structured agricultural dataset grounded in ICAR & NHB standards
    └── utils/
        └── i18n.js            # Multilingual localization engine (Marathi, Hindi, English)
```

---

## 🚀 How to Run

### Run All 6 Verification Test Suites (171 Automated Unit Tests)
```bash
node test_stage1.js
node test_stage2.js
node test_stage3.js
node test_stage4.js
node test_stage5.js
node test_stage6.js
```

### Static Web Application
Simply open `index.html` in any modern web browser or serve it using any local HTTP server:
```bash
# Using Node.js
npx serve .
```

---

## 🎬 Suggested 3–5 Minute SIH Hackathon Demo Script

1. **Introduction & Identity (30s)**:
   - Introduce **KisanTrust** (*"Know Your Crop. Know Its Worth. Know Where to Sell."*), addressing SIH Problem Statement 6132.
   - Switch language to **Marathi (मराठी)** or **Hindi (हिंदी)** in the header to demonstrate multilingual accessibility.
2. **AI Quality Assessment & Digital Lot Creation (60s)**:
   - Click *"नवीन लॉट तयार करा (Assess New Lot)"*.
   - Upload 4-angle harvest photos of Tomato $\rightarrow$ Click *"गुणवत्ता विश्लेषण करा (Analyze Quality)"*.
   - Show internal cross-section cut scan $\rightarrow$ Produce certified **Grade A (94% Freshness, 8 Days Shelf-life)**.
3. **Mandi Net Realization & Multi-Mandi Ranking (45s)**:
   - Progress to Step 3 $\rightarrow$ Explain itemized Net Realization formula:
     $$\text{Base APMC Price (₹34.00)} + \text{Grade A Premium (+₹3.40)} + \text{Demand (+₹0.80)} - \text{Transport (-₹1.10)} - \text{Storage (-₹0.40)} = \mathbf{₹36.70/kg}$$
   - Show why Vashi APMC is recommended over closer mandis due to higher net realization.
4. **Intelligent Decision Support & Grounded Gemini Advisory (45s)**:
   - Highlight the **Selling Recommendation Card**: Action `SELL_TO_VERIFIED_BUYER` (Opportunity Score $94/100$).
   - Show Spoilage Risk Meter ($15\%$ risk, 6 safe days remaining) and Forecast Range (₹34–₹38/kg).
   - Read the **KisanTrust AI Mitra Grounded Advisory** in Marathi explaining the exact gain.
5. **Verified Buyer Matching, Trust Score & Negotiation (60s)**:
   - Navigate to *"सत्यापित खरेदीदार (Buyer Marketplace)"*.
   - Point out **Sahyadri Agro Processing Hub** with **KisanTrust Score: 🛡️ 96.3 / 100 Highly Trusted (98.2% On-Time Payment)**.
   - Click *"वाटाघाटी करा (Negotiate)"*, submit a counter-offer @ ₹38.00/kg, and click *"करार करा (Accept Deal)"*.
6. **Smart Village Pooling & Logistics Optimization (45s)**:
   - Open *"गाव पूलिंग (Smart Pooling)"*.
   - Demonstrate how Niphad Hub aggregates small lots into a 10-Ton truckload, cutting freight from ₹3.80/kg to ₹1.60/kg (**57.9% savings**).
   - Click *"पूलिंगमध्ये सामील व्हा (Join Pool)"*.
7. **Transaction Stepper, Dispute Evidence & Digital Certificate (45s)**:
   - Go to *"व्यवहार (Transactions)"*.
   - Walk through the 5-point live lifecycle stepper (`Offer Accepted` $\rightarrow$ `Pickup Scheduled` $\rightarrow$ `In Transit` $\rightarrow$ `Delivered & QC` $\rightarrow$ `Payment Settled`).
   - Click *"वाद नोंदवा (Raise Dispute)"* to show how original AI scans and timestamps protect farmers as certified evidence.
   - Click *"डिजिटल पावती डाउनलोड करा (Download Certificate)"* to show the printable receipt with QR verification stamp.
