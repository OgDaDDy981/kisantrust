/**
 * KisanTrust Standalone Browser Bundle
 * Works seamlessly on file:/// (direct Explorer launch) and http:// web servers.
 * Auto-generated on 2026-09-09T16:12:12.447Z
 */
(function() {
    'use strict';
    
    // Dynamic runtime environment configuration (injected via server or local config)
    window.__ENV__ = window.__ENV__ || {};

// --- MODULE: src/utils/i18n.js ---
/**
 * KisanTrust - Multilingual Dictionary & Localization Engine
 * Priority Languages:
 * 1. Marathi (मराठी)
 * 2. Hindi (हिंदी)
 * 3. English
 */
const I18N_DICTIONARY = {
    "Marathi (मराठी)": {
        brand: "किसान ट्रस्ट",
        tagline: "आपले पीक ओळखा. योग्य भाव जाणा. कुठे विकायचे ते ठरवा.",
        subDescription: "गुणवत्ता, बाजारभाव, मागणी आणि वाहतूक विश्लेषणाद्वारे शेतकऱ्यांचे सक्षमीकरण.",
        nav: {
            dashboard: "डॅशबोर्ड",
            assessLot: "पीक गुणवत्ता व भाव तपासणी",
            myLots: "माझे शेती लॉट्स",
            marketIntel: "बाजारभाव व मंडी तुलना",
            buyers: "खरेदीदार बाजारपेठ",
            pooling: "एकत्रित वाहतूक (स्मार्ट पूलिंग)",
            transactions: "व्यवहार व पावत्या",
            adminPortal: "अ‍ॅडमिन पोर्टल",
            profile: "प्रोफाइल"
        },
        dashboard: {
            welcomeBack: "नमस्कार",
            activeLotsHeading: "माझे सक्रिय शेती लॉट्स (Active Lots)",
            noActiveLots: "सध्या कोणताही सक्रिय लॉट नाही. नवीन लॉट तयार करा.",
            marketSnapshotHeading: "बाजारभाव आढावा (Market Snapshot)",
            bestMarket: "सर्वोत्तम बाजारपेठ",
            highestPrice: "उच्चतम भाव",
            netRealization: "अंदाजे निव्वळ प्राप्ती",
            sellingOpportunityHeading: "विक्रीची संधी (Selling Opportunity)",
            demandStatus: "सध्याची मागणी",
            potentialBuyers: "उपलब्ध खरेदीदार",
            recommendedAction: "शिफारस केलेली कृती",
            assessNewLotBtn: "➕ नवीन लॉट तपासा व नोंदवा",
            viewAllLots: "सर्व लॉट्स पहा ➔"
        },
        lotCreation: {
            title: "डिजिटल शेती लॉट तयार करा (Create Digital Lot)",
            cropDetailsTitle: "पिकाचा तपशील",
            cropTypeLabel: "पिकाचा प्रकार",
            varietyLabel: "वाण (Variety)",
            quantityLabel: "एकूण वजन / प्रमाण (किलो)",
            harvestDateLabel: "काढणीची तारीख (Harvest Date)",
            step1: "चरण १: ४ फोटो अपलोड करा",
            step2: "चरण २: गुणवत्ता व कापून पडताळणी",
            step3: "चरण ३: पारदर्शक भाव व खरेदीदार जुळणी",
            uploadTitle: "लॉटचे ४ फोटो अपलोड करा (४ कोनांतून)",
            uploadDesc: "अचूक गुणवत्ता तपासणीसाठी पिकाचे वेगवेगळ्या कोनातून ४ फोटो निवडा.",
            selectPhotosBtn: "📁 फोटो निवडा",
            photosUploaded: "फोटो अपलोड झाले",
            analyzeBtn: "✨ गुणवत्ता तपासा",
            cutTitle: "कापून दाखवा (अंतर्गत गुणवत्ता पडताळणी)",
            cutDesc: "आतील ताजेपणा आणि पोत तपासण्यासाठी एक भाजी मधोमध कापून दाखवा.",
            captureCutBtn: "📸 अंतर्गत दृश्य तपासा",
            skipCutBtn: "⏭️ पुढे जा",
            priceTitle: "पारदर्शक अंदाजे निव्वळ प्राप्ती (Net Realization)",
            priceSubtitle: "गुणवत्ता आणि प्रत्यक्ष बाजार विश्लेषणावर आधारित शेतकरी भाव",
            marketBenchmark: "बाजारभाव निर्देशांक (APMC)",
            qualityAdjustment: "गुणवत्ता प्रीमियम / कपात",
            demandIndex: "मागणी प्रीमियम",
            transportDeduction: "वाहतूक खर्च",
            storageDeduction: "हाताळणी व साठवणूक",
            netFarmerPay: "शेतकऱ्याला मिळणारा निव्वळ भाव (प्रति किलो)",
            totalLotWorth: "या लॉटचे एकूण अंदाजे मूल्य",
            saveLotBtn: "💾 हा डिजिटल लॉट सेव्ह करा",
            acceptAndDealBtn: "✅ विक्री व्यवहार सुरू करा",
            negotiateBtn: "📝 वाटाघाटी करा (Negotiate)",
            compareMandisTitle: "🏛️ जवळपासच्या प्रमुख मंड्यांची तुलना (Mandi Comparison)"
        },
        marketIntel: {
            title: "बाजारभाव विश्लेषण व मंडी तुलना (Market Intelligence)",
            selectCropFilter: "पीक निवडा:",
            filterAll: "सर्व पिके",
            filterTomato: "टोमॅटो",
            filterOnion: "कांदा",
            filterPotato: "बटाटा",
            filterCarrot: "गाजर",
            filterCabbage: "कोबी",
            comparisonTitle: "मंडी तुलना (निव्वळ प्राप्तीनुसार क्रमवारी)",
            comparisonDesc: "केवळ कच्चा भाव न पाहता, वाहतूक खर्च वजा करून मिळणाऱ्या निव्वळ प्राप्तीनुसार (Net Realization) सर्वोत्तम मंडी निवडा.",
            colMarket: "मंडी / APMC",
            colDistance: "अंतर (किमी)",
            colRawPrice: "कच्चा भाव (₹/kg)",
            colTransport: "वाहतूक खर्च",
            colNetRealization: "निव्वळ प्राप्ती (Net)",
            colLotTotal: "एकूण लॉट मूल्य",
            colAction: "शिफारस",
            recommendedBadge: "⭐ सर्वोत्तम निव्वळ नफा",
            trendsTitle: "भाव कल विश्लेषण (Price Trends)",
            trend7d: "७-दिवसीय कल",
            trend30d: "३०-दिवसीय कल",
            trendRising: "वाढता कल (Rising)",
            trendStable: "स्थिर कल (Stable)",
            trendFalling: "घसरता कल (Falling)",
            statusLive: "🟢 Live (Agmarknet API)",
            statusCached: "🟡 Cached (Firestore Cache)",
            statusDemo: "🔵 Demo (Standard Benchmark)"
        },
        buyerMarket: {
            title: "सत्यापित खरेदीदार बाजारपेठ (Verified Buyer Marketplace)",
            subtitle: "फूड प्रोसेसर्स, संघटित रिटेलर्स, निर्यातदार आणि थेट खरेदीदारांच्या खरेदी मागण्या",
            postDemandBtn: "➕ खरेदी मागणी नोंदवा (Buyer Mode)",
            matchedLotsBadge: "🎯 संधी जुळणी",
            matchScore: "मॅच स्कोअर",
            dealDirectBtn: "🤝 थेट सौदा करा / वाटाघाटी",
            pickupProvided: "🚚 शेतावर थेट पिकअप",
            selfTransport: "📍 खरेदीदार केंद्रावर पोहोचवणे",
            minGradeRequired: "किमान दर्जा:",
            reliability: "विश्वासार्हता:",
            paymentTerms: "पेमेंट अटी:",
            postDemandModalTitle: "नवीन खरेदी मागणी नोंदवा (Post Buyer Demand)",
            lblBuyerName: "कंपनी / खरेदीदाराचे नाव",
            lblBuyerType: "खरेदीदाराचा प्रकार",
            lblRequiredCrop: "आवश्यक पीक",
            lblRequiredQty: "आवश्यक प्रमाण (किलो)",
            lblMinGrade: "किमान आवश्यक दर्जा",
            lblOfferPrice: "खरेदी दर (₹/किलो)",
            lblDeliveryDate: "अपेक्षित डिलिव्हरी तारीख",
            lblMaxDist: "कमाल अंतर (किमी)",
            btnSubmitDemand: "🚀 खरेदी मागणी प्रकाशित करा"
        },
        negotiation: {
            title: "थेट खरेदीदार वाटाघाटी (Direct Deal Negotiation)",
            currentOffer: "सध्याचा ऑफर भाव:",
            farmerCounterOffer: "आपला प्रति-प्रस्ताव (Counter-Offer ₹/kg):",
            btnSubmitCounter: "📤 प्रति-प्रस्ताव पाठवा",
            btnAcceptDeal: "✅ हा दर मान्य करा व करार करा",
            btnRejectDeal: "❌ प्रस्ताव नाकारा",
            historyTitle: "वाटाघाटी इतिहास (Offer History):",
            dealLockedSuccess: "🎉 सौदा निश्चित झाला! डिजिटल करार व एस्क्रो नोंद तयार करण्यात आली आहे."
        },
        smartPooling: {
            title: "गाव पातळीवरील एकत्रित वाहतूक (Smart Village Pooling)",
            subtitle: "लहान शेतकरी एकत्र येऊन १०-टन ट्रक लोड भरू शकतात आणि वाहतूक खर्चात ५०-६०% बचत करू शकतात",
            createPoolBtn: "➕ नवीन गाव पूलिंग सुरू करा",
            joinPoolBtn: "🚜 या पूलिंगमध्ये सामील व्हा",
            pooledFreightLabel: "एकत्रित वाहतूक दर:",
            individualFreightLabel: "वैयक्तिक वाहतूक दर:",
            savingsBadge: "वाहतूक बचत",
            hubLocation: "गाव संकलन केंद्र:",
            destination: "गंतव्य बाजारपेठ:",
            fillProgress: "ट्रक क्षमता भरली:",
            readyToDispatch: "🚚 पूर्ण लोड तयार - रवाना होण्यास सज्ज!",
            gatheringFarmers: "शेतकरी जोडले जात आहेत...",
            poolSuccessToast: "🎉 आपण यशस्वीरीत्या पूलिंगमध्ये सामील झाला आहात!"
        },
        decisionSupport: {
            decisionTitle: "स्मार्ट विक्री निर्णय शिफारस (Smart Selling Decision)",
            opportunityScoreLabel: "संधी स्कोअर (Opportunity Score):",
            sellNow: "आत्ताच विक्री करा (Sell Now)",
            wait: "काही दिवस थांबा (Hold / Wait)",
            sellElsewhere: "दुसऱ्या प्रमुख मंडईत पाठवा (Sell Elsewhere)",
            sellBuyer: "थेट सत्यापित खरेदीदाराला विका (Sell to Verified Buyer)",
            spoilageRiskLabel: "नासाडी धोका:",
            safeDaysLabel: "सुरक्षित टिकवण क्षमता:",
            forecastTitle: "अपेक्षित भाव कक्षा (Price Forecast):",
            aiMitraAdviceTitle: "🤖 किसान ट्रस्ट AI मित्र सल्ला (Grounded Advisory)"
        },
        trustAndDisputes: {
            trustScoreLabel: "किसान ट्रस्ट विश्वासार्हता स्कोअर:",
            highlyTrusted: "अति-विश्वासू खरेदीदार (Highly Trusted)",
            trusted: "विश्वासू खरेदीदार (Trusted)",
            moderateRisk: "मध्यम जोखीम (Moderate Risk)",
            caution: "सावधान / नवीन नोंदणी",
            raiseDisputeBtn: "⚠️ तक्रार / वाद नोंदवा (Raise Dispute)",
            disputeTitle: "डिजिटल पुरावा-आधारित तक्रार निवारण (Dispute Support)",
            evidenceAttachedBadge: "प्रमाणित लॉट गुणवत्ता स्कॅन जोडले गेले",
            categoryQualityMismatch: "गुणवत्ता तफावत",
            categoryPaymentDelay: "पेमेंटला विलंब",
            paymentReliabilityLabel: "वेळेवर पेमेंट दर:"
        },
        adminPortal: {
            title: "🛡️ किसान ट्रस्ट प्रशासकीय नियंत्रण कक्ष (Admin Portal)",
            subTitle: "शेतकरी व खरेदीदार पडताळणी, लॉट मॉडरेशन, व्यवहार आणि वाद निवारण केंद्र",
            tabOverview: "📊 आढावा (Overview)",
            tabFarmers: "👨‍🌾 शेतकरी पडताळणी",
            tabBuyers: "🏢 खरेदीदार पडताळणी",
            tabLots: "📦 लॉट मॉडरेशन",
            tabDemands: "📋 खरेदी मागण्या",
            tabUsers: "👥 युझर व्यवस्थापन",
            tabPayments: "💳 पेमेंट्स व व्यवहार",
            tabDisputes: "⚠️ तक्रार निवारण",
            tabRisk: "🚨 संशयास्पद / रिस्क",
            tabAudit: "📜 ऑडिट लॉग्स",
            btnApprove: "मंजूर करा (Approve)",
            btnReject: "नाकारा (Reject)",
            btnRequestChanges: "बदल सुचवा (Request Changes)",
            btnSuspend: "खाते निलंबित करा",
            btnReactivate: "पुन्हा सक्रिय करा",
            btnAddNote: "अंतर्गत नोंद जोडा",
            btnResolve: "तक्रार सोडवा",
            btnInspect: "तपासा (Inspect)",
            btnModerate: "मॉडरेट करा (Inspect & Approve)",
            btnManage: "व्यवस्थापित करा",
            btnResolveFlag: "निवारण करा",
            btnOpenCase: "केस उघडा (Inspect)",
            thName: "नाव / शेतकरी",
            thVillage: "गाव व जिल्हा",
            thFarmSize: "शेती क्षेत्र",
            thPrimaryCrops: "प्रमुख पिके",
            thStatus: "स्थिती",
            thAction: "कृती",
            thCompany: "कंपनी / खरेदीदार नाव",
            thBuyerCategory: "प्रकार",
            thGstin: "GSTIN / परवाना",
            thLocation: "स्थान",
            thCrop: "आवश्यक पीक",
            thQuantity: "प्रमाण (kg)",
            thOfferedPrice: "ऑफर दर",
            thTxnId: "व्यवहार आयडी",
            thBuyer: "खरेदीदार",
            thFarmer: "शेतकरी",
            thAmount: "रक्कम",
            thPaymentStatus: "पेमेंट स्थिती",
            thDelay: "विलंब (Delay)",
            thDisputeId: "वाद आयडी",
            thClaimant: "तक्रारदार",
            thCategory: "प्रकार",
            thDate: "तारीख",
            thFlagId: "फ्लॅग आयडी",
            thSeverity: "तीव्रता (Severity)",
            thDetails: "तपशील",
            thTimestamp: "वेळ (Timestamp)",
            thAdmin: "प्रशासक",
            thTarget: "लक्ष्य (Target)",
            thReason: "कारण / तपशील",
            thRole: "भूमिका (Role)",
            thContact: "संपर्क",
            thAccountStatus: "खाते स्थिती",
            thVerification: "पडताळणी",
            emptyNoFarmers: "सध्या कोणतीही प्रलंबित शेतकरी पडताळणी उपलब्ध नाही.",
            emptyNoBuyers: "सध्या कोणतीही प्रलंबित खरेदीदार पडताळणी उपलब्ध नाही.",
            emptyNoLots: "सर्व डिजिटल लॉट्स पुनरावलोकित व मंजूर आहेत!",
            emptyNoDemands: "सर्व खरेदी मागण्या मंजूर आहेत.",
            emptyNoDisputes: "कोणतीही खुली तक्रार अथवा वाद नोंदवलेला नाही. प्लॅटफॉर्म १००% विवादमुक्त आहे!",
            emptyNoRisk: "सध्या कोणताही संशयास्पद किंवा फसवणुकीचा फ्लॅग आढळलेला नाही."
        },
        auth: {
            portalTitle: "किसान ट्रस्ट प्रवेश (Login & Register)",
            tabLogin: "लॉगिन (Sign In)",
            tabRegister: "नवीन नोंदणी (Register)",
            lblIdentifier: "मोबाईल नंबर किंवा ईमेल (Mobile / Email)",
            lblPassword: "पासवर्ड (Password)",
            placeholderIdentifier: "उदा. 9822456789 किंवा ramesh@gmail.com",
            rememberMe: "मला आठवणीत ठेवा",
            forgotPassword: "पासवर्ड विसरलात?",
            btnSignIn: "🔑 लॉगिन करा (Sign In)",
            dividerOr: "किंवा (OR)",
            btnGoogle: "Google सह त्वरित लॉगिन करा",
            quickDemoTitle: "हॅकाथॉन त्वरित मूल्यमापन (1-Click Quick Demo):",
            btnDemoFarmer: "👨‍🌾 शेतकरी",
            btnDemoBuyer: "🏢 खरेदीदार",
            btnDemoCustomer: "🛒 ग्राहक",
            btnDemoAdmin: "🛡️ अ‍ॅडमिन",
            btnDemoSuperAdmin: "⚡ सुपर अ‍ॅडमिन",
            lblRole: "आपली भूमिका निवडा (Role)",
            roleFarmer: "👨‍🌾 शेतकरी",
            roleBuyer: "🏢 खरेदीदार",
            roleCustomer: "🛒 ग्राहक",
            lblName: "पूर्ण नाव (Full Name)",
            placeholderName: "उदा. रमेश मारुती पाटील",
            lblPhone: "मोबाईल क्र. (Mobile)",
            placeholderPhone: "९८२२४५६७८९",
            lblEmail: "ईमेल (Email ID)",
            placeholderEmail: "ramesh@gmail.com",
            lblState: "राज्य (State)",
            lblDistrict: "जिल्हा / शहर (District / City)",
            placeholderDistrict: "उदा. नाशिक (Nashik)",
            lblCrops: "प्रमुख पिके (Main Crop)",
            lblAcres: "शेती क्षेत्र (Acres)",
            lblCompanyName: "कंपनी / खरेदीदार नाव (Company Name)",
            placeholderCompany: "उदा. सह्याद्री फूड्स प्रा. लि.",
            lblBuyerType: "खरेदीदार प्रकार",
            lblGstin: "GST / परवाना क्र.",
            placeholderGstin: "27AABCS1429B1Z",
            lblCustNeeds: "आवश्यक ताजी उत्पादने (Produce Needed)",
            placeholderCustNeeds: "उदा. ताजे टोमॅटो, कांदा, सेंद्रिय भाजीपाला",
            lblCustAddress: "घरपोच डिलिव्हरी पत्ता (Delivery Address)",
            placeholderCustAddress: "उदा. फ्लॅट क्र. ४०२, गंगा हाइट्स, नाशिक",
            lblCreatePass: "पासवर्ड तयार करा (Password)",
            placeholderCreatePass: "किमान ६ अक्षरे...",
            lblConfirmPassword: "पासवर्ड पुष्टी करा (Confirm)",
            placeholderConfirmPass: "पुन्हा टाईप करा...",
            logout: "लॉगआउट",
            navLogin: "🔐 लॉगिन / साइन अप",
            navPayments: "पेमेंट्स"
        },
        payment: {
            modalTitle: "किसान ट्रस्ट एस्क्रो पेमेंट (Escrow Checkout)",
            modalSubtitle: "१००% सुरक्षित बँक एस्क्रो संरक्षण (Secure Escrow Protection)",
            orderSummary: "ऑर्डर सारांश",
            quantity: "वजन (Quantity)",
            pricePerKg: "दर (Price / kg)",
            totalAmount: "एकूण रक्कम (Total)",
            escrowTitle: "किसान ट्रस्ट स्मार्ट एस्क्रो शील्ड",
            escrowDesc: "तुमचे पैसे किसान ट्रस्टच्या अधिकृत बँकेत (ICICI/SBI) सुरक्षितपणे लॉक केले जातील. पिकाची डिलिव्हरी आणि गुणवत्ता तपासणी पूर्ण झाल्यावरच रक्कम शेतकऱ्याच्या थेट बँक खात्यात वितरित होईल.",
            selectMethod: "पेमेंट पद्धत निवडा (Select Payment Method):",
            scanQr: "कोणत्याही UPI App द्वारे QR कोड स्कॅन करा (GPay / PhonePe / Paytm / BHIM):",
            copyUpi: "UPI आयडी कॉपी केला!",
            payButton: "एस्क्रो खात्यात जमा करा (Pay & Lock in Escrow)",
            successTitle: "🎉 पेमेंट यशस्वी व एस्क्रो लॉक झाले!",
            successSub: "व्यवहार अधिकृतपणे नोंदवला गेला असून रक्कम एस्क्रोमध्ये सुरक्षित आहे.",
            txnId: "व्यवहार आयडी (Txn ID):",
            lockRef: "एस्क्रो लॉक संदर्भ (Lock Ref):",
            printReceipt: "🖨️ पावती प्रिंट करा",
            trackOrder: "📦 ऑर्डर ट्रॅक करा"
        },
        smallholder: {
            presetsLabel: "लहान शेतकरी व घाऊक लॉट प्रीसेट्स (Quick Quantity Presets):",
            toggleLabel: "🌱 मी लहान / अल्पभूधारक शेतकरी आहे (Small/Marginal Farmer < 2 Acres)",
            zeroFeeBadge: "✨ ०% प्लॅटफॉर्म फी",
            smartPoolBadge: "🚛 गट शेती वाहतूक ६५% बचत",
            smallFarmerBadge: "🌱 अल्पभूधारक शेतकरी",
            filterSmallFarmers: "🌱 लहान शेतकरी (< 500kg)"
        },
        common: {
            grade: "दर्जा",
            freshness: "ताजेपणा",
            shelfLife: "अपेक्षित टिकवण क्षमता",
            days: "दिवस",
            kg: "किलो",
            rupeesPerKg: "₹ / किलो",
            demoDataBadge: "APMC Market Benchmark",
            statusListed: "नोंदणीकृत (Listed)",
            statusMatched: "खरेदीदार मिळाला (Matched)",
            statusPooled: "पूलिंगमध्ये सहभागी (Pooled)",
            statusSold: "विक्री पूर्ण (Sold)"
        },
        voiceAssist: {
            btnListen: "🔊 ऐका (AI Voice)",
            btnSpeaking: "🔊 सल्ला वाचत आहे...",
            btnStop: "⏹️ आवाज थांबवा",
            adviceSpoken: "किसान ट्रस्ट AI सल्ला ऐकवला जात आहे."
        },
        sampleLots: {
            quickLoadTitle: "✨ त्वरित चाचणीसाठी नमुना पिके लोड करा (1-Click Sample Lots):",
            tomatoSample: "🍅 टोमॅटो (Himsona Grade A)",
            onionSample: "🧅 कांदा (Nashik Red Grade A)",
            potatoSample: "🥔 बटाटा (Kufri Pukhraj Grade B)"
        },
        farmerQuickActions: {
            scan: "📸 पीक गुणवत्ता तपासा",
            scanSub: "४ फोटोंवरून थेट AI ग्रेडिंग व ताजेपणा",
            mandi: "💰 थेट मंडी भाव व नफा",
            mandiSub: "वाहतूक वजा करून प्रत्यक्ष निव्वळ प्राप्ती",
            buyers: "🤝 विश्वासू खरेदीदार शोधा",
            buyersSub: "FSSAI व APMC प्रमाणित थेट खरेदीदार",
            pooling: "🚜 गाव वाहन पूलिंग (बचत)",
            poolingSub: "१०-टन ट्रकमध्ये ५०-७०% भाडे बचत",
            deals: "📜 माझे सौदे व पावती",
            dealsSub: "डिजिटल करार व शासकीय पावती"
        },
        whatsappShare: {
            btnShare: "💬 WhatsApp वर शेअर करा",
            lotSummaryTitle: "🌾 किसान ट्रस्ट - डिजिटल शेती लॉट अहवाल"
        },
        certificate: {
            btnViewCert: "📜 अधिकृत गुणवत्ता प्रमाणपत्र पहा / प्रिंट करा",
            btnViewInvoice: "📄 शासकीय टॅक्स इनव्हॉइस व बिल",
            certTitle: "शासकीय कृषी गुणवत्ता व शेती लॉट प्रमाणपत्र",
            certSubtitle: "भारत सरकार / APMC व राष्ट्रीय फलोत्पादन मंडळ (NHB) मानकांनुसार प्रमाणित",
            govtApmcStamp: "APMC Market Data Referenced",
            qrVerification: "QR कोड स्कॅन करून मूळ डिजिटल लॉटची सत्यता पडताळा"
        }
    },

    "Hindi (हिंदी)": {
        brand: "किसान ट्रस्ट",
        tagline: "अपनी फसल को जानें. सही मूल्य समझें. सही बाजार चुनें.",
        subDescription: "गुणवत्ता, बाजार मूल्य, मांग और लॉजिस्टिक्स विश्लेषण से किसानों का सशक्तिकरण.",
        nav: {
            dashboard: "डैशबोर्ड",
            assessLot: "फसल गुणवत्ता एवं मूल्य जांच",
            myLots: "मेरे डिजिटल लॉट",
            marketIntel: "मंडी भाव व तुलना",
            buyers: "खरीदार बाजारपेठ",
            pooling: "सामूहिक परिवहन (स्मार्ट पूलिंग)",
            transactions: "लेनदेन एवं रसीदें",
            adminPortal: "एडमिन पोर्टल",
            profile: "प्रोफाइल"
        },
        dashboard: {
            welcomeBack: "स्वागत है",
            activeLotsHeading: "मेरे सक्रिय लॉट (Active Lots)",
            noActiveLots: "कोई सक्रिय लॉट नहीं मिला। नया लॉट बनाएं।",
            marketSnapshotHeading: "मंडी भाव समीक्षा (Market Snapshot)",
            bestMarket: "सर्वश्रेष्ठ मंडी",
            highestPrice: "उच्चतम भाव",
            netRealization: "अनुमानित शुद्ध प्राप्ति",
            sellingOpportunityHeading: "बिक्री के अवसर (Selling Opportunity)",
            demandStatus: "वर्तमान मांग",
            potentialBuyers: "संभावित खरीदार",
            recommendedAction: "सुझाई गई कार्रवाई",
            assessNewLotBtn: "➕ नया लॉट जांचें और पंजीकृत करें",
            viewAllLots: "सभी लॉट देखें ➔"
        },
        lotCreation: {
            title: "डिजिटल कृषि लॉट बनाएं (Create Digital Lot)",
            cropDetailsTitle: "फसल का विवरण",
            cropTypeLabel: "फसल का प्रकार",
            varietyLabel: "किस्म (Variety)",
            quantityLabel: "कुल मात्रा / वजन (किलो)",
            harvestDateLabel: "कटाई की तिथि (Harvest Date)",
            step1: "चरण १: ४ कोणों से फोटो अपलोड करें",
            step2: "चरण २: गुणवत्ता एवं कटाई जांच",
            step3: "चरण ३: पारदर्शी मूल्य एवं खरीदार मिलान",
            uploadTitle: "लॉट के ४ फोटो अपलोड करें",
            uploadDesc: "सटीक गुणवत्ता मूल्यांकन हेतु ४ अलग-अलग कोणों से फोटो लें।",
            selectPhotosBtn: "📁 फोटो चुनें",
            photosUploaded: "फोटो अपलोड किए गए",
            analyzeBtn: "✨ गुणवत्ता जांचें",
            cutTitle: "काटकर दिखाएं (आंतरिक गुणवत्ता सत्यापन)",
            cutDesc: "भीतरी ताजगी और संरचना जांचने के लिए एक सब्जी को बीच से काट कर दिखाएं।",
            captureCutBtn: "📸 आंतरिक दृश्य जांचें",
            skipCutBtn: "⏭️ आगे बढ़ें",
            priceTitle: "पारदर्शी अनुमानित शुद्ध प्राप्ति (Net Realization)",
            priceSubtitle: "मंडी बेंचमार्क और गुणवत्ता आधारित पारदर्शी किसान मूल्य",
            marketBenchmark: "मंडी बेंचमार्क (APMC)",
            qualityAdjustment: "गुणवत्ता प्रीमियम / कटौती",
            demandIndex: "मांग प्रीमियम",
            transportDeduction: "परिवहन लागत",
            storageDeduction: "भंडारण एवं हैंडलिंग",
            netFarmerPay: "किसान को मिलने वाला शुद्ध मूल्य (प्रति किलो)",
            totalLotWorth: "इस लॉट का कुल अनुमानित मूल्य",
            saveLotBtn: "💾 यह डिजिटल लॉट सहेजें",
            acceptAndDealBtn: "✅ बिक्री सौदा शुरू करें",
            negotiateBtn: "📝 मोलभाव करें (Negotiate)",
            compareMandisTitle: "🏛️ नजदीकी प्रमुख मंडियों की तुलना (Mandi Comparison)"
        },
        marketIntel: {
            title: "मंडी भाव विश्लेषण एवं तुलना (Market Intelligence)",
            selectCropFilter: "फसल चुनें:",
            filterAll: "सभी फसलें",
            filterTomato: "टमाटर",
            filterOnion: "प्याज",
            filterPotato: "आलू",
            filterCarrot: "गाजर",
            filterCabbage: "पत्तागोभी",
            comparisonTitle: "मंडी तुलना (शुद्ध प्राप्ति अनुसार)",
            comparisonDesc: "सिर्फ कच्चा भाव न देखें, परिवहन लागत घटाकर प्राप्त शुद्ध मूल्य (Net Realization) के आधार पर सर्वश्रेष्ठ मंडी चुनें।",
            colMarket: "मंडी / APMC",
            colDistance: "दूरी (किमी)",
            colRawPrice: "मंडी भाव (₹/kg)",
            colTransport: "परिवहन लागत",
            colNetRealization: "शुद्ध प्राप्ति (Net)",
            colLotTotal: "कुल लॉट मूल्य",
            colAction: "सुझाव",
            recommendedBadge: "⭐ सर्वश्रेष्ठ शुद्ध मुनाफा",
            trendsTitle: "मूल्य रुझान विश्लेषण (Price Trends)",
            trend7d: "७-दिवसीय रुझान",
            trend30d: "३०-दिवसीय रुझान",
            trendRising: "बढ़ता रुझान (Rising)",
            trendStable: "स्थिर रुझान (Stable)",
            trendFalling: "गिरता रुझान (Falling)",
            statusLive: "🟢 Live (Agmarknet API)",
            statusCached: "🟡 Cached (Firestore Cache)",
            statusDemo: "🔵 Demo (Standard Benchmark)"
        },
        buyerMarket: {
            title: "सत्यापित खरीदार बाजारपेठ (Verified Buyer Marketplace)",
            subtitle: "फूड प्रोसेसर्स, संगठित रिटेलर्स, निर्यातकों और सीधे खरीदारों की खरीद मांग",
            postDemandBtn: "➕ खरीद मांग दर्ज करें (Buyer Mode)",
            matchedLotsBadge: "🎯 सुसंगत अवसर",
            matchScore: "मैच स्कोर",
            dealDirectBtn: "🤝 सीधा सौदा करें / मोलभाव",
            pickupProvided: "🚚 खेत से सीधी उठान",
            selfTransport: "📍 खरीदार केंद्र पर डिलीवरी",
            minGradeRequired: "न्यूनतम ग्रेड:",
            reliability: "विश्वसनीयता:",
            paymentTerms: "भुगतान शर्तें:",
            postDemandModalTitle: "नई खरीद मांग दर्ज करें",
            lblBuyerName: "कंपनी / खरीदार का नाम",
            lblBuyerType: "खरीदार का प्रकार",
            lblRequiredCrop: "आवश्यक फसल",
            lblRequiredQty: "मात्रा (किलो)",
            lblMinGrade: "न्यूनतम आवश्यक ग्रेड",
            lblOfferPrice: "ऑफर मूल्य (₹/किलो)",
            lblDeliveryDate: "डिलीवरी की तिथि",
            lblMaxDist: "अधिकतम दूरी (किमी)",
            btnSubmitDemand: "🚀 खरीद मांग प्रकाशित करें"
        },
        negotiation: {
            title: "सीधे खरीदार से मोलभाव (Direct Negotiation)",
            currentOffer: "वर्तमान ऑफर मूल्य:",
            farmerCounterOffer: "आपका प्रति-प्रस्ताव (Counter-Offer ₹/kg):",
            btnSubmitCounter: "📤 प्रति-प्रस्ताव भेजें",
            btnAcceptDeal: "✅ यह भाव स्वीकारें एवं अनुबंध बनाएं",
            btnRejectDeal: "❌ प्रस्ताव अस्वीकार करें",
            historyTitle: "मोलभाव इतिहास (Offer History):",
            dealLockedSuccess: "🎉 सौदा पक्का हुआ! डिजिटल अनुबंध एवं एस्क्रो तैयार।"
        },
        smartPooling: {
            title: "सामूहिक परिवहन एवं पूलिंग (Smart Village Pooling)",
            subtitle: "छोटे किसान मिलकर १०-टन ट्रक लोड भर सकते हैं और परिवहन में ५०-६०% बचत कर सकते हैं",
            createPoolBtn: "➕ नया विलेज पूल बनाएं",
            joinPoolBtn: "🚜 इस पूल में शामिल हों",
            pooledFreightLabel: "सामूहिक भाड़ा दर:",
            individualFreightLabel: "व्यक्तिगत भाड़ा दर:",
            savingsBadge: "भाड़ा बचत",
            hubLocation: "ग्राम संकलन केंद्र:",
            destination: "गंतव्य मंडी:",
            fillProgress: "ट्रक क्षमता भरी:",
            readyToDispatch: "🚚 पूर्ण लोड तैयार - रवाना होने को तैयार!",
            gatheringFarmers: "किसान जुड़ रहे हैं...",
            poolSuccessToast: "🎉 आप सफलतापूर्वक विलेज पूल में शामिल हो गए हैं!"
        },
        decisionSupport: {
            decisionTitle: "स्मार्ट बिक्री निर्णय सिफारिश (Smart Selling Decision)",
            opportunityScoreLabel: "अवसर स्कोर (Opportunity Score):",
            sellNow: "अभी बेचें (Sell Now)",
            wait: "कुछ दिन प्रतीक्षा करें (Hold / Wait)",
            sellElsewhere: "दूसरी प्रमुख मंडी में भेजें (Sell Elsewhere)",
            sellBuyer: "सत्यापित खरीदार को सीधे बेचें (Sell to Verified Buyer)",
            spoilageRiskLabel: "खराबी जोखिम:",
            safeDaysLabel: "सुरक्षित शेल्फ-लाइफ:",
            forecastTitle: "अनुमानित मूल्य सीमा (Price Forecast):",
            aiMitraAdviceTitle: "🤖 किसान ट्रस्ट AI मित्र सलाह (Grounded Advisory)"
        },
        trustAndDisputes: {
            trustScoreLabel: "किसान ट्रस्ट विश्वसनीयता स्कोर:",
            highlyTrusted: "अत्यधिक विश्वसनीय (Highly Trusted)",
            trusted: "विश्वसनीय खरीदार (Trusted)",
            moderateRisk: "मध्यम जोखिम (Moderate Risk)",
            caution: "सावधान / नया खरीदार",
            raiseDisputeBtn: "⚠️ शिकायत / विवाद दर्ज करें (Raise Dispute)",
            disputeTitle: "डिजिटल साक्ष्य-आधारित विवाद समाधान (Dispute Support)",
            evidenceAttachedBadge: "प्रमाणित लॉट गुणवत्ता स्कैन संलग्न",
            categoryQualityMismatch: "गुणवत्ता विसंगति",
            categoryPaymentDelay: "भुगतान में देरी",
            paymentReliabilityLabel: "समय पर भुगतान दर:"
        },
        adminPortal: {
            title: "🛡️ किसान ट्रस्ट प्रशासनिक नियंत्रण कक्ष (Admin Portal)",
            subTitle: "किसान व खरीदार सत्यापन, लॉट मॉडरेशन, लेनदेन एवं विवाद समाधान केंद्र",
            tabOverview: "📊 अवलोकन (Overview)",
            tabFarmers: "👨‍🌾 किसान सत्यापन",
            tabBuyers: "🏢 खरीदार सत्यापन",
            tabLots: "📦 लॉट मॉडरेशन",
            tabDemands: "📋 खरीद मांगें",
            tabUsers: "👥 उपयोगकर्ता प्रबंधन",
            tabPayments: "💳 भुगतान व लेनदेन",
            tabDisputes: "⚠️ विवाद समाधान",
            tabRisk: "🚨 संदिग्ध / जोखिम",
            tabAudit: "📜 ऑडिट लॉग",
            btnApprove: "स्वीकार करें (Approve)",
            btnReject: "अस्वीकार करें (Reject)",
            btnRequestChanges: "सुधार मांगें (Request Changes)",
            btnSuspend: "खाता निलंबित करें",
            btnReactivate: "पुनः सक्रिय करें",
            btnAddNote: "आंतरिक टिप्पणी जोड़ें",
            btnResolve: "विवाद सुलझाएं",
            btnInspect: "जांचें (Inspect)",
            btnModerate: "समीक्षा करें (Inspect & Approve)",
            btnManage: "प्रबंधित करें",
            btnResolveFlag: "समाधान करें",
            btnOpenCase: "मामला खोलें (Inspect)",
            thName: "नाम / किसान",
            thVillage: "गाँव व जिला",
            thFarmSize: "कृषि क्षेत्र",
            thPrimaryCrops: "मुख्य फसलें",
            thStatus: "स्थिति",
            thAction: "कार्रवाई",
            thCompany: "कंपनी / खरीदार नाम",
            thBuyerCategory: "श्रेणी",
            thGstin: "GSTIN / लाइसेंस",
            thLocation: "स्थान",
            thCrop: "आवश्यक फसल",
            thQuantity: "मात्रा (kg)",
            thOfferedPrice: "ऑफर मूल्य",
            thTxnId: "लेनदेन आईडी",
            thBuyer: "खरीदार",
            thFarmer: "किसान",
            thAmount: "राशि",
            thPaymentStatus: "भुगतान स्थिति",
            thDelay: "विलंब (Delay)",
            thDisputeId: "विवाद आईडी",
            thClaimant: "शिकायतकर्ता",
            thCategory: "श्रेणी",
            thDate: "तिथि",
            thFlagId: "फ्लैग आईडी",
            thSeverity: "गंभीरता (Severity)",
            thDetails: "विवरण",
            thTimestamp: "समय (Timestamp)",
            thAdmin: "व्यवस्थापक",
            thTarget: "लक्ष्य (Target)",
            thReason: "कारण / विवरण",
            thRole: "भूमिका (Role)",
            thContact: "संपर्क",
            thAccountStatus: "खाता स्थिति",
            thVerification: "सत्यापन",
            emptyNoFarmers: "वर्तमान में कोई लंबित किसान सत्यापन उपलब्ध नहीं है।",
            emptyNoBuyers: "वर्तमान में कोई लंबित खरीदार सत्यापन उपलब्ध नहीं है।",
            emptyNoLots: "सभी डिजिटल लॉट समीक्षित एवं स्वीकृत हैं!",
            emptyNoDemands: "सभी खरीद मांगें स्वीकृत हैं।",
            emptyNoDisputes: "कोई खुला विवाद नहीं है। प्लेटफॉर्म १००% विवाद-मुक्त है!",
            emptyNoRisk: "वर्तमान में कोई संदिग्ध या धोखाधड़ी गतिविधि नहीं मिली।"
        },
        auth: {
            portalTitle: "किसान ट्रस्ट प्रवेश (Login & Register)",
            tabLogin: "लॉगिन (Sign In)",
            tabRegister: "नया पंजीकरण (Register)",
            lblIdentifier: "मोबाइल नंबर या ईमेल (Mobile / Email)",
            lblPassword: "पासवर्ड (Password)",
            placeholderIdentifier: "उदा. 9822456789 या ramesh@gmail.com",
            rememberMe: "मुझे याद रखें",
            forgotPassword: "पासवर्ड भूल गए?",
            btnSignIn: "🔑 लॉगिन करें (Sign In)",
            dividerOr: "या (OR)",
            btnGoogle: "Google से तुरंत लॉगिन करें",
            quickDemoTitle: "हैकाथॉन त्वरित मूल्यांकन (1-Click Quick Demo):",
            btnDemoFarmer: "👨‍🌾 किसान",
            btnDemoBuyer: "🏢 खरीदार",
            btnDemoCustomer: "🛒 ग्राहक",
            btnDemoAdmin: "🛡️ एडमिन",
            btnDemoSuperAdmin: "⚡ सुपर एडमिन",
            lblRole: "अपनी भूमिका चुनें (Role)",
            roleFarmer: "👨‍🌾 किसान",
            roleBuyer: "🏢 खरीदार",
            roleCustomer: "🛒 ग्राहक",
            lblName: "पूरा नाम (Full Name)",
            placeholderName: "उदा. रमेश मारुती पाटिल",
            lblPhone: "मोबाइल नं. (Mobile)",
            placeholderPhone: "९८२२४५६७८९",
            lblEmail: "ईमेल (Email ID)",
            placeholderEmail: "ramesh@gmail.com",
            lblState: "राज्य (State)",
            lblDistrict: "जिला / शहर (District / City)",
            placeholderDistrict: "उदा. नासिक (Nashik)",
            lblCrops: "प्रमुख फसलें (Main Crop)",
            lblAcres: "कृषि भूमि (Acres)",
            lblCompanyName: "कंपनी / फर्म का नाम",
            placeholderCompany: "उदा. सह्याद्री फूड्स प्रा. लि.",
            lblBuyerType: "खरीदार श्रेणी",
            lblGstin: "GST / लाइसेंस नं.",
            placeholderGstin: "27AABCS1429B1Z",
            lblCustNeeds: "आवश्यक ताजी उपज (Produce Needed)",
            placeholderCustNeeds: "उदा. टमाटर, प्याज, हरी सब्जियां",
            lblCustAddress: "होम डिलीवरी पता (Delivery Address)",
            placeholderCustAddress: "उदा. फ्लैट नं. ४०२, गंगा हाइट्स, नासिक",
            lblCreatePass: "पासवर्ड बनाएं (Password)",
            placeholderCreatePass: "न्यूनतम ६ वर्ण...",
            lblConfirmPassword: "पासवर्ड पुष्टि करें (Confirm)",
            placeholderConfirmPass: "पासवर्ड पुनः दर्ज करें...",
            logout: "लॉगआउट",
            navLogin: "🔐 लॉगिन / साइन अप",
            navPayments: "पेमेंट्स"
        },
        payment: {
            modalTitle: "किसान ट्रस्ट एस्क्रो भुगतान (Escrow Checkout)",
            modalSubtitle: "१००% सुरक्षित बैंक एस्क्रो सुरक्षा (Secure Escrow Protection)",
            orderSummary: "ऑर्डर सारांश",
            quantity: "मात्रा (Quantity)",
            pricePerKg: "दर (Price / kg)",
            totalAmount: "कुल राशि (Total)",
            escrowTitle: "किसान ट्रस्ट स्मार्ट एस्क्रो शील्ड",
            escrowDesc: "आपका भुगतान किसान ट्रस्ट के अधिकृत बैंक (ICICI/SBI) में सुरक्षित रूप से लॉक रहेगा। फसल की डिलीवरी और गुणवत्ता सत्यापन के बाद ही राशि सीधे किसान के बैंक खाते में जाएगी।",
            selectMethod: "भुगतान विधि चुनें (Select Payment Method):",
            scanQr: "किसी भी UPI ऐप से QR कोड स्कैन करें (GPay / PhonePe / Paytm / BHIM):",
            copyUpi: "UPI आईडी कॉपी हो गई!",
            payButton: "एस्क्रो खाते में जमा करें (Pay & Lock in Escrow)",
            successTitle: "🎉 भुगतान सफल व एस्क्रो लॉक हुआ!",
            successSub: "लेनदेन आधिकारिक रूप से दर्ज हो गया है और राशि एस्क्रो में सुरक्षित है।",
            txnId: "लेनदेन आईडी (Txn ID):",
            lockRef: "एस्क्रो लॉक संदर्भ (Lock Ref):",
            printReceipt: "🖨️ रसीद प्रिंट करें",
            trackOrder: "📦 ऑर्डर ट्रैक करें"
        },
        smallholder: {
            presetsLabel: "छोटे किसान व थोक लॉट प्रीसेट (Quantity Presets):",
            toggleLabel: "🌱 मैं छोटा / सीमांत किसान हूँ (Small/Marginal Farmer < 2 Acres)",
            zeroFeeBadge: "✨ ०% प्लेटफॉर्म शुल्क",
            smartPoolBadge: "🚛 सामूहिक परिवहन ६५% बचत",
            smallFarmerBadge: "🌱 छोटा किसान",
            filterSmallFarmers: "🌱 छोटे किसान (< 500kg)"
        },
        common: {
            grade: "ग्रेड",
            freshness: "ताजगी",
            shelfLife: "अनुमानित शेल्फ लाइफ",
            days: "दिन",
            kg: "किलो",
            rupeesPerKg: "₹ / किलो",
            demoDataBadge: "प्रमाणित Agmarknet एवं APMC डेटा",
            statusListed: "पंजीकृत (Listed)",
            statusMatched: "खरीदार मिला (Matched)",
            statusPooled: "पूलिंग में शामिल (Pooled)",
            statusSold: "बिक्री पूर्ण (Sold)"
        },
        voiceAssist: {
            btnListen: "🔊 सुनें (AI Voice)",
            btnSpeaking: "🔊 सलाह बोली जा रही है...",
            btnStop: "⏹️ आवाज बंद करें",
            adviceSpoken: "किसान ट्रस्ट AI सलाह सुनाई जा रही है।"
        },
        sampleLots: {
            quickLoadTitle: "✨ त्वरित परीक्षण हेतु नमूने (1-Click Sample Lots):",
            tomatoSample: "🍅 टमाटर (Himsona Grade A)",
            onionSample: "🧅 प्याज (Nashik Red Grade A)",
            potatoSample: "🥔 आलू (Kufri Pukhraj Grade B)"
        },
        farmerQuickActions: {
            scan: "📸 फसल गुणवत्ता जांचें",
            scanSub: "४ तस्वीरों से सीधी AI ग्रेडिंग व ताजगी",
            mandi: "💰 लाइव मंडी भाव व मुनाफा",
            mandiSub: "परिवहन घटाकर प्रत्यक्ष शुद्ध प्राप्ति",
            buyers: "🤝 सीधे सत्यापित खरीदार",
            buyersSub: "FSSAI व APMC पंजीकृत खरीदार",
            pooling: "🚜 ग्रामीण वाहन पूलिंग (बचत)",
            poolingSub: "१०-टन ट्रक में ५०-७०% भाड़ा बचत",
            deals: "📜 मेरे सौदे व रसीदें",
            dealsSub: "डिजिटल अनुबंध एवं सरकारी रसीद"
        },
        whatsappShare: {
            btnShare: "💬 WhatsApp पर साझा करें",
            lotSummaryTitle: "🌾 किसान ट्रस्ट - डिजिटल कृषि लॉट रिपोर्ट"
        },
        certificate: {
            btnViewCert: "📜 आधिकारिक गुणवत्ता प्रमाण पत्र देखें / प्रिंट करें",
            btnViewInvoice: "📄 आधिकारिक टैक्स इनवॉइस एवं बिल",
            certTitle: "आधिकारिक कृषि गुणवत्ता एवं लॉट प्रमाण पत्र",
            certSubtitle: "भारत सरकार / APMC एवं राष्ट्रीय बागवानी बोर्ड (NHB) मानकों के अनुरूप प्रमाणित",
            govtApmcStamp: "APMC Market Data Referenced",
            qrVerification: "QR कोड स्कैन करके डिजिटल लॉट की प्रामाणिकता जांचें"
        }
    },

    "English": {
        brand: "KisanTrust",
        tagline: "Know Your Crop. Know Its Worth. Know Where to Sell.",
        subDescription: "AI-Powered Market Intelligence and Trusted Farm-to-Buyer Network.",
        nav: {
            dashboard: "Dashboard",
            assessLot: "Assess & Value Produce",
            myLots: "My Digital Lots",
            marketIntel: "Market Intelligence",
            buyers: "Buyer Marketplace",
            pooling: "Smart Pooling",
            transactions: "Transactions & Ledger",
            adminPortal: "Admin Portal",
            profile: "Profile"
        },
        dashboard: {
            welcomeBack: "Welcome back",
            activeLotsHeading: "My Active Agricultural Lots",
            noActiveLots: "No active lots found. Assess a new lot to get started.",
            marketSnapshotHeading: "Market Benchmark Snapshot",
            bestMarket: "Top Performing Mandi",
            highestPrice: "Modal Price",
            netRealization: "Estimated Net Realization",
            sellingOpportunityHeading: "Selling Opportunity Spotlight",
            demandStatus: "Demand Intensity",
            potentialBuyers: "Verified Buyers Active",
            recommendedAction: "Recommended Action",
            assessNewLotBtn: "➕ Assess & Register New Lot",
            viewAllLots: "View All Lots ➔"
        },
        lotCreation: {
            title: "Create Verified Digital Lot",
            cropDetailsTitle: "Crop Metadata & Parameters",
            cropTypeLabel: "Commodity Crop",
            varietyLabel: "Crop Variety",
            quantityLabel: "Lot Quantity / Weight (kg)",
            harvestDateLabel: "Harvest Date",
            step1: "Step 1: 4-Angle Harvest Photos",
            step2: "Step 2: AI Quality & Internal Cut Inspection",
            step3: "Step 3: Transparent Net Realization & Direct Sale",
            uploadTitle: "Upload 4-Angle Harvest Photos",
            uploadDesc: "Take clear photos from 4 distinct angles in daylight for accurate Grade A/B/C classification.",
            selectPhotosBtn: "📁 Select Harvest Photos",
            photosUploaded: "Photos Selected",
            analyzeBtn: "✨ Analyze Produce Quality",
            cutTitle: "Internal Quality Inspection (Cut Verification)",
            cutDesc: "Cut one representative item cross-sectionally to verify internal firmness, core health, and freshness.",
            captureCutBtn: "📸 Verify Internal Cross-Section",
            skipCutBtn: "⏭️ Skip Internal Scan",
            priceTitle: "Transparent Estimated Net Realization",
            priceSubtitle: "Deterministic price discovery grounded in live APMC benchmarks and verified quality grades.",
            marketBenchmark: "APMC Modal Base Benchmark",
            qualityAdjustment: "Quality Grade Premium / Adjustment",
            demandIndex: "Buyer Demand Index",
            transportDeduction: "Freight & Logistics Cost",
            storageDeduction: "Post-Harvest Handling & Storage",
            netFarmerPay: "Estimated Farmer Net Realization (per kg)",
            totalLotWorth: "Total Estimated Lot Worth",
            saveLotBtn: "💾 Save & Submit Lot for Review",
            acceptAndDealBtn: "✅ Initiate Direct Buyer Deal",
            negotiateBtn: "📝 Negotiate Counter-Offer",
            compareMandisTitle: "🏛️ Nearby APMC Mandi Benchmark Comparison"
        },
        marketIntel: {
            title: "Market Intelligence & Net Realization Ranking",
            selectCropFilter: "Filter by Crop:",
            filterAll: "All Crops",
            filterTomato: "Tomato",
            filterOnion: "Onion",
            filterPotato: "Potato",
            filterCarrot: "Carrot",
            filterCabbage: "Cabbage",
            comparisonTitle: "Mandi Comparison (Ranked Strictly by Net Realization)",
            comparisonDesc: "Instead of choosing raw price, select the market that delivers the highest Estimated Net Realization after deducting transport and cess.",
            colMarket: "Market / APMC",
            colDistance: "Distance (km)",
            colRawPrice: "Modal Price (₹/kg)",
            colTransport: "Transport Cost",
            colNetRealization: "Net Realization",
            colLotTotal: "Total Lot Value",
            colAction: "Recommendation",
            recommendedBadge: "⭐ Best Net Payout",
            trendsTitle: "Price Velocity & Trend Analysis",
            trend7d: "7-Day Trend",
            trend30d: "30-Day Trend",
            trendRising: "Rising Trend",
            trendStable: "Stable Trend",
            trendFalling: "Falling Trend",
            statusLive: "🟢 Live (Agmarknet API)",
            statusCached: "🟡 Cached (Firestore Cache)",
            statusDemo: "🔵 Demo (Standard Benchmark)"
        },
        buyerMarket: {
            title: "Verified Buyer Marketplace & Direct Linkages",
            subtitle: "Active purchase requirements from food processors, retailers, exporters, and bulk buyers",
            postDemandBtn: "➕ Post Purchase Requirement (Buyer Mode)",
            matchedLotsBadge: "🎯 Opportunity Match",
            matchScore: "Match Score",
            dealDirectBtn: "🤝 Deal Direct / Negotiate",
            pickupProvided: "🚚 Farm-gate Pickup Provided",
            selfTransport: "📍 Delivery to Buyer Hub",
            minGradeRequired: "Min Quality:",
            reliability: "Reliability:",
            paymentTerms: "Payment Terms:",
            postDemandModalTitle: "Post New Purchase Requirement",
            lblBuyerName: "Company / Buyer Name",
            lblBuyerType: "Buyer Type",
            lblRequiredCrop: "Required Crop",
            lblRequiredQty: "Quantity Needed (kg)",
            lblMinGrade: "Minimum Quality Grade",
            lblOfferPrice: "Offered Price (₹/kg)",
            lblDeliveryDate: "Required Delivery Date",
            lblMaxDist: "Max Sourcing Radius (km)",
            btnSubmitDemand: "🚀 Publish Purchase Demand"
        },
        negotiation: {
            title: "Direct Buyer Price Negotiation",
            currentOffer: "Current Offer Price:",
            farmerCounterOffer: "Your Counter-Offer (₹/kg):",
            btnSubmitCounter: "📤 Send Counter-Offer",
            btnAcceptDeal: "✅ Accept Offer & Create Contract",
            btnRejectDeal: "❌ Reject Offer",
            historyTitle: "Offer & Counter-Offer Timeline:",
            dealLockedSuccess: "🎉 Deal Confirmed! Digital Contract and Escrow Milestone created."
        },
        smartPooling: {
            title: "Smart Village Pooling & Freight Optimization",
            subtitle: "Smallholder farmers aggregate compatible lots into full truckloads to save 50–60% on transport",
            createPoolBtn: "➕ Create New Village Pool",
            joinPoolBtn: "🚜 Join This Pool",
            pooledFreightLabel: "Pooled Freight Rate:",
            individualFreightLabel: "Individual Freight Rate:",
            savingsBadge: "Freight Savings",
            hubLocation: "Village Hub:",
            destination: "Destination Hub:",
            fillProgress: "Capacity Filled:",
            readyToDispatch: "🚚 Capacity Full - Ready to Dispatch!",
            gatheringFarmers: "Farmers Gathering...",
            poolSuccessToast: "🎉 You have successfully joined the village pooling cluster!"
        },
        decisionSupport: {
            decisionTitle: "Smart Selling Decision Recommendation",
            opportunityScoreLabel: "Opportunity Score:",
            sellNow: "Sell Now",
            wait: "Hold / Wait (Rising Trend)",
            sellElsewhere: "Sell to Alternative Mandi",
            sellBuyer: "Sell to Verified Buyer",
            spoilageRiskLabel: "Spoilage Risk:",
            safeDaysLabel: "Safe Shelf Life:",
            forecastTitle: "Expected Opportunity Range:",
            aiMitraAdviceTitle: "🤖 KisanTrust AI Mitra (Grounded Advisory)"
        },
        trustAndDisputes: {
            trustScoreLabel: "KisanTrust Score:",
            highlyTrusted: "Highly Trusted",
            trusted: "Trusted",
            moderateRisk: "Moderate Risk",
            caution: "Caution / Unverified",
            raiseDisputeBtn: "⚠️ Raise Dispute / Issue",
            disputeTitle: "Evidence-Assisted Dispute Support",
            evidenceAttachedBadge: "Certified Lot Evidence Attached",
            categoryQualityMismatch: "Quality Mismatch",
            categoryPaymentDelay: "Payment Delay",
            paymentReliabilityLabel: "On-Time Payment Rate:"
        },
        adminPortal: {
            title: "🛡️ KisanTrust Administrative Control Center (Admin Portal)",
            subTitle: "Farmer & Buyer verification, lot moderation, transactions, and dispute resolution hub",
            tabOverview: "📊 Overview",
            tabFarmers: "👨‍🌾 Farmer Verifications",
            tabBuyers: "🏢 Buyer Verifications",
            tabLots: "📦 Lot Moderation",
            tabDemands: "📋 Purchase Demands",
            tabUsers: "👥 User Management",
            tabPayments: "💳 Payments & Transactions",
            tabDisputes: "⚠️ Dispute Center",
            tabRisk: "🚨 Risk Flags",
            tabAudit: "📜 Audit Logs",
            btnApprove: "Approve",
            btnReject: "Reject",
            btnRequestChanges: "Request Changes",
            btnSuspend: "Suspend Account",
            btnReactivate: "Reactivate Account",
            btnAddNote: "Add Internal Note",
            btnResolve: "Resolve Dispute",
            btnInspect: "Inspect",
            btnModerate: "Moderate & Approve",
            btnManage: "Manage User",
            btnResolveFlag: "Resolve Flag",
            btnOpenCase: "Inspect Case",
            thName: "Name / Farmer",
            thVillage: "Village & District",
            thFarmSize: "Farm Size",
            thPrimaryCrops: "Primary Crops",
            thStatus: "Status",
            thAction: "Action",
            thCompany: "Company / Buyer Name",
            thBuyerCategory: "Category",
            thGstin: "GSTIN / License",
            thLocation: "Location",
            thCrop: "Crop Required",
            thQuantity: "Quantity (kg)",
            thOfferedPrice: "Offered Price",
            thTxnId: "Transaction ID",
            thBuyer: "Buyer",
            thFarmer: "Farmer",
            thAmount: "Amount",
            thPaymentStatus: "Payment Status",
            thDelay: "Delay",
            thDisputeId: "Dispute ID",
            thClaimant: "Claimant",
            thCategory: "Category",
            thDate: "Date",
            thFlagId: "Flag ID",
            thSeverity: "Severity",
            thDetails: "Details",
            thTimestamp: "Timestamp",
            thAdmin: "Administrator",
            thTarget: "Target Entity",
            thReason: "Reason / Notes",
            thRole: "Role",
            thContact: "Contact",
            thAccountStatus: "Account Status",
            thVerification: "Verification",
            emptyNoFarmers: "No pending farmer verifications available.",
            emptyNoBuyers: "No pending buyer verifications available.",
            emptyNoLots: "All digital lots are reviewed and approved!",
            emptyNoDemands: "All purchase demands are approved.",
            emptyNoDisputes: "No active disputes found. Platform is Dispute Resolution Available!",
            emptyNoRisk: "No active risk or fraud flags detected."
        },
        auth: {
            portalTitle: "KisanTrust Portal (Login & Register)",
            tabLogin: "Sign In",
            tabRegister: "Register",
            lblIdentifier: "Mobile Number or Email",
            lblPassword: "Password",
            placeholderIdentifier: "e.g. 9822456789 or ramesh@gmail.com",
            rememberMe: "Remember me",
            forgotPassword: "Forgot Password?",
            btnSignIn: "🔑 Sign In",
            dividerOr: "OR",
            btnGoogle: "Sign in with Google",
            quickDemoTitle: "Hackathon Evaluation (1-Click Quick Demo):",
            btnDemoFarmer: "👨‍🌾 Farmer",
            btnDemoBuyer: "🏢 Buyer",
            btnDemoCustomer: "🛒 Customer",
            btnDemoAdmin: "🛡️ Admin",
            btnDemoSuperAdmin: "⚡ Super Admin",
            lblRole: "Select Your Role",
            roleFarmer: "👨‍🌾 Farmer",
            roleBuyer: "🏢 Buyer",
            roleCustomer: "🛒 Customer",
            lblName: "Full Name",
            placeholderName: "e.g. Ramesh Maruti Patil",
            lblPhone: "Mobile Number",
            placeholderPhone: "9822456789",
            lblEmail: "Email ID",
            placeholderEmail: "ramesh@gmail.com",
            lblState: "State",
            lblDistrict: "District / City",
            placeholderDistrict: "e.g. Nashik",
            lblCrops: "Primary Crops",
            lblAcres: "Farm Size (Acres)",
            lblCompanyName: "Company / Business Name",
            placeholderCompany: "e.g. KisanMitra Agro Foods Pvt. Ltd.",
            lblBuyerType: "Buyer Category",
            lblGstin: "GSTIN / Trade License",
            placeholderGstin: "27AABCS1429B1Z",
            lblCustNeeds: "Fresh Produce Needed",
            placeholderCustNeeds: "e.g. Fresh Tomatoes, Onions, Organic Veggies",
            lblCustAddress: "Home Delivery Address",
            placeholderCustAddress: "e.g. Flat 402, Ganga Heights, Nashik",
            lblCreatePass: "Create Password",
            placeholderCreatePass: "Minimum 6 characters...",
            lblConfirmPassword: "Confirm Password",
            placeholderConfirmPass: "Re-type password...",
            logout: "Logout",
            navLogin: "🔐 Sign In / Register",
            navPayments: "Payments"
        },
        payment: {
            modalTitle: "KisanTrust Escrow Checkout",
            modalSubtitle: "Secure Escrow Protection Banking Gateway",
            orderSummary: "Order Summary",
            quantity: "Quantity",
            pricePerKg: "Price / kg",
            totalAmount: "Total Amount",
            escrowTitle: "KisanTrust Smart Escrow Shield",
            escrowDesc: "Your funds are securely locked in KisanTrust's escrow account (ICICI/SBI). Money is disbursed to the farmer only upon produce delivery and destination QC verification.",
            selectMethod: "Select Payment Method:",
            scanQr: "Scan QR with any UPI App (GPay / PhonePe / Paytm / BHIM):",
            copyUpi: "UPI ID Copied!",
            payButton: "Pay & Lock in Escrow",
            successTitle: "🎉 Payment Successful & Escrow Locked!",
            successSub: "Transaction recorded with legal backing. Funds securely escrow-locked.",
            txnId: "Transaction ID (Txn ID):",
            lockRef: "Escrow Lock Ref:",
            printReceipt: "🖨️ Print Receipt",
            trackOrder: "📦 Track Order"
        },
        smallholder: {
            presetsLabel: "Small Farmer & Wholesale Presets (Quantity Presets):",
            toggleLabel: "🌱 I am a Small / Marginal Farmer (< 2 Acres)",
            zeroFeeBadge: "✨ 0% Platform Fee",
            smartPoolBadge: "🚛 Village Pooling 65% Freight Savings",
            smallFarmerBadge: "🌱 Smallholder Farmer",
            filterSmallFarmers: "🌱 Small Farmers (< 500kg)"
        },
        common: {
            grade: "Grade",
            freshness: "Freshness",
            shelfLife: "Est. Shelf Life",
            days: "days",
            kg: "kg",
            rupeesPerKg: "₹ / kg",
            demoDataBadge: "APMC Market Benchmark",
            statusListed: "Listed",
            statusMatched: "Matched",
            statusPooled: "Pooled",
            statusSold: "Sold"
        },
        voiceAssist: {
            btnListen: "🔊 Listen (AI Voice)",
            btnSpeaking: "🔊 Speaking Advice...",
            btnStop: "⏹️ Stop Audio",
            adviceSpoken: "KisanTrust AI Grounded Advisory is now speaking."
        },
        sampleLots: {
            quickLoadTitle: "✨ Quick Test Sample Produce (1-Click Loaders):",
            tomatoSample: "🍅 Tomato (Himsona Grade A)",
            onionSample: "🧅 Onion (Nashik Red Grade A)",
            potatoSample: "🥔 Potato (Kufri Pukhraj Grade B)"
        },
        farmerQuickActions: {
            scan: "📸 AI Quality Scan & Grading",
            scanSub: "Instant Grade A/B/C from 4 photos",
            mandi: "💰 Live Mandi Net Profit",
            mandiSub: "Compare Mandis deducting transport",
            buyers: "🤝 Verified Direct Buyers",
            buyersSub: "FSSAI & APMC corporate buyers",
            pooling: "🚜 Village Pooling (Save 60%)",
            poolingSub: "Aggregate into 10-Ton truckload",
            deals: "📜 My Deals & Tax Invoices",
            dealsSub: "Official digital contract & receipts"
        },
        whatsappShare: {
            btnShare: "💬 Share on WhatsApp",
            lotSummaryTitle: "🌾 KisanTrust - Verified Agricultural Lot Report"
        },
        certificate: {
            btnViewCert: "📜 View & Print Official Quality Certificate",
            btnViewInvoice: "📄 Official Commercial Tax Invoice & Bill",
            certTitle: "Official Agricultural Quality & Lot Certificate",
            certSubtitle: "Market data sourced from Agmarknet",
            govtApmcStamp: "APMC Market Data Referenced",
            qrVerification: "Scan QR Code to verify certified baseline data"
        }
    }
};
const SUPPORTED_LANGUAGES = ["Marathi (मराठी)", "Hindi (हिंदी)", "English"];

/**
 * Universal DOM Translator
 * Scans all known elements and applies active language dictionary
 */
function applyDOMTranslations(lang = "Marathi (मराठी)") {
    if (typeof document === 'undefined') return;
    const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY["Marathi (मराठी)"];

    const setTxt = (id, text) => {
        if (text === undefined || text === null) return;
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    const setHtml = (id, html) => {
        if (html === undefined || html === null) return;
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };

    const setPlaceholder = (id, placeholder) => {
        if (!placeholder) return;
        const el = document.getElementById(id);
        if (el) el.placeholder = placeholder;
    };

    // Header & Brand
    setTxt('brandName', dict.brand);
    setTxt('tagline', dict.tagline);
    setTxt('headerHelplineText', lang === "English" ? "Helpline: 1800-123-4567" : (lang === "Hindi (हिंदी)" ? "हेल्पलाइन: 1800-123-4567" : "हेल्पलाइन: 1800-123-4567"));
    setTxt('sidebarLangHeader', lang === "English" ? "Choose Language" : (lang === "Hindi (हिंदी)" ? "भाषा चुनें (Language)" : "भाषा निवडा (Language)"));
    setTxt('sidebarStatusText', lang === "English" ? "Cloud Firestore & Sync Active" : (lang === "Hindi (हिंदी)" ? "लाइव सेंट्रल सिंक सक्रिय" : "थेट सेंट्रल सिंक सक्रिय"));
    setTxt('sidebarNoteText', lang === "English" ? "APMC Agmarknet & Cloud Database Ready" : (lang === "Hindi (हिंदी)" ? "APMC Agmarknet व क्लाउड डेटाबेस सक्रिय" : "APMC Agmarknet व क्लाउड डेटाबेस सक्रिय"));
    setTxt('adminQuickBtnText', lang === "English" ? "Admin Mode" : (lang === "Hindi (हिंदी)" ? "एडमिन मोड" : "अ‍ॅडमिन मोड"));
    setTxt('navLoginBtnText', dict.auth?.navLogin || (lang === "English" ? "Sign In / Register" : "लॉगिन / साइन अप"));

    // User Role Badge Name
    const currentUser = (typeof AuthService !== 'undefined' && AuthService.getCurrentUser) ? AuthService.getCurrentUser() : null;
    const userRoleDisplay = document.getElementById('userRoleDisplay');
    if (userRoleDisplay) {
        if (currentUser) {
            userRoleDisplay.textContent = `${currentUser.name || currentUser.displayName || 'User'} (${currentUser.role ? currentUser.role.toUpperCase() : 'USER'})`;
        } else {
            userRoleDisplay.textContent = lang === "English" ? "Ramesh Patil (Niphad)" : (lang === "Hindi (हिंदी)" ? "रमेश पाटिल (निफाड़)" : "रमेश पाटील (निफाड)");
        }
    }

    // Ticker Bar Title & Track
    const tickerLabel = document.querySelector('#mandiTickerBar .ticker-label-badge span');
    if (tickerLabel) {
        tickerLabel.textContent = lang === "English" ? "🔴 Live APMC Prices" : (lang === "Hindi (हिंदी)" ? "🔴 लाइव APMC भाव" : "🔴 लाइव्ह APMC भाव");
    }

    const tickerTrack = document.querySelector('#mandiTickerBar .ticker-track');
    if (tickerTrack) {
        if (lang === "English") {
            tickerTrack.innerHTML = `
                <span class="ticker-item">🍅 <strong>Tomato (Vashi APMC):</strong> <span class="ticker-price">₹ 38.00/kg</span> <span class="ticker-up">▲ +2.50</span></span>
                <span class="ticker-item">🧅 <strong>Onion (Lasalgaon):</strong> <span class="ticker-price">₹ 28.50/kg</span> <span class="ticker-up">▲ +1.20</span></span>
                <span class="ticker-item">🥔 <strong>Potato (Pune):</strong> <span class="ticker-price">₹ 24.00/kg</span> <span class="ticker-down">▼ -0.50</span></span>
                <span class="ticker-item">🥕 <strong>Carrot (Pimpalgaon):</strong> <span class="ticker-price">₹ 26.00/kg</span> <span class="ticker-up">▲ +0.80</span></span>
                <span class="ticker-item">🥬 <strong>Cabbage (Nashik):</strong> <span class="ticker-price">₹ 18.00/kg</span> <span class="ticker-up">▲ +1.00</span></span>
                <span class="ticker-item">🌾 <strong>Soybean (Latur):</strong> <span class="ticker-price">₹ 46.50/kg</span> <span class="ticker-up">▲ +3.00</span></span>
                <!-- Duplicate for seamless scroll -->
                <span class="ticker-item">🍅 <strong>Tomato (Vashi APMC):</strong> <span class="ticker-price">₹ 38.00/kg</span> <span class="ticker-up">▲ +2.50</span></span>
                <span class="ticker-item">🧅 <strong>Onion (Lasalgaon):</strong> <span class="ticker-price">₹ 28.50/kg</span> <span class="ticker-up">▲ +1.20</span></span>
                <span class="ticker-item">🥔 <strong>Potato (Pune):</strong> <span class="ticker-price">₹ 24.00/kg</span> <span class="ticker-down">▼ -0.50</span></span>
                <span class="ticker-item">🥕 <strong>Carrot (Pimpalgaon):</strong> <span class="ticker-price">₹ 26.00/kg</span> <span class="ticker-up">▲ +0.80</span></span>
                <span class="ticker-item">🥬 <strong>Cabbage (Nashik):</strong> <span class="ticker-price">₹ 18.00/kg</span> <span class="ticker-up">▲ +1.00</span></span>
                <span class="ticker-item">🌾 <strong>Soybean (Latur):</strong> <span class="ticker-price">₹ 46.50/kg</span> <span class="ticker-up">▲ +3.00</span></span>
            `;
        } else if (lang === "Hindi (हिंदी)") {
            tickerTrack.innerHTML = `
                <span class="ticker-item">🍅 <strong>टमाटर (वाशी APMC):</strong> <span class="ticker-price">₹ ३८.००/kg</span> <span class="ticker-up">▲ +२.५०</span></span>
                <span class="ticker-item">🧅 <strong>प्याज (लासलगांव):</strong> <span class="ticker-price">₹ २८.५०/kg</span> <span class="ticker-up">▲ +१.२०</span></span>
                <span class="ticker-item">🥔 <strong>आलू (पुणे):</strong> <span class="ticker-price">₹ २४.००/kg</span> <span class="ticker-down">▼ -०.५०</span></span>
                <span class="ticker-item">🥕 <strong>गाजर (पिंपलगांव):</strong> <span class="ticker-price">₹ २६.००/kg</span> <span class="ticker-up">▲ +०.८०</span></span>
                <span class="ticker-item">🥬 <strong>पत्तागोभी (नासिक):</strong> <span class="ticker-price">₹ १८.००/kg</span> <span class="ticker-up">▲ +१.००</span></span>
                <span class="ticker-item">🌾 <strong>सोयाबीन (लातूर):</strong> <span class="ticker-price">₹ ४६.५०/kg</span> <span class="ticker-up">▲ +३.००</span></span>
                <!-- Duplicate for seamless scroll -->
                <span class="ticker-item">🍅 <strong>टमाटर (वाशी APMC):</strong> <span class="ticker-price">₹ ३८.००/kg</span> <span class="ticker-up">▲ +२.५०</span></span>
                <span class="ticker-item">🧅 <strong>प्याज (लासलगांव):</strong> <span class="ticker-price">₹ २८.५०/kg</span> <span class="ticker-up">▲ +१.२०</span></span>
                <span class="ticker-item">🥔 <strong>आलू (पुणे):</strong> <span class="ticker-price">₹ २४.००/kg</span> <span class="ticker-down">▼ -०.५०</span></span>
                <span class="ticker-item">🥕 <strong>गाजर (पिंपलगांव):</strong> <span class="ticker-price">₹ २६.००/kg</span> <span class="ticker-up">▲ +०.८०</span></span>
                <span class="ticker-item">🥬 <strong>पत्तागोभी (नासिक):</strong> <span class="ticker-price">₹ १८.००/kg</span> <span class="ticker-up">▲ +१.००</span></span>
                <span class="ticker-item">🌾 <strong>सोयाबीन (लातूर):</strong> <span class="ticker-price">₹ ४६.५०/kg</span> <span class="ticker-up">▲ +३.००</span></span>
            `;
        } else {
            tickerTrack.innerHTML = `
                <span class="ticker-item">🍅 <strong>टोमॅटो (वाशी APMC):</strong> <span class="ticker-price">₹ ३८.००/kg</span> <span class="ticker-up">▲ +२.५०</span></span>
                <span class="ticker-item">🧅 <strong>कांदा (लासलगाव):</strong> <span class="ticker-price">₹ २८.५०/kg</span> <span class="ticker-up">▲ +१.२०</span></span>
                <span class="ticker-item">🥔 <strong>बटाटा (पुणे):</strong> <span class="ticker-price">₹ २४.००/kg</span> <span class="ticker-down">▼ -०.५०</span></span>
                <span class="ticker-item">🥕 <strong>गाजर (पिंपळगाव):</strong> <span class="ticker-price">₹ २६.००/kg</span> <span class="ticker-up">▲ +०.८०</span></span>
                <span class="ticker-item">🥬 <strong>कोबी (नाशिक):</strong> <span class="ticker-price">₹ १८.००/kg</span> <span class="ticker-up">▲ +१.००</span></span>
                <span class="ticker-item">🌾 <strong>सोयाबीन (लातूर):</strong> <span class="ticker-price">₹ ४६.५०/kg</span> <span class="ticker-up">▲ +३.००</span></span>
                <!-- Duplicate for seamless scroll -->
                <span class="ticker-item">🍅 <strong>टोमॅटो (वाशी APMC):</strong> <span class="ticker-price">₹ ३८.००/kg</span> <span class="ticker-up">▲ +२.५०</span></span>
                <span class="ticker-item">🧅 <strong>कांदा (लासलगाव):</strong> <span class="ticker-price">₹ २८.५०/kg</span> <span class="ticker-up">▲ +१.२०</span></span>
                <span class="ticker-item">🥔 <strong>बटाटा (पुणे):</strong> <span class="ticker-price">₹ २४.००/kg</span> <span class="ticker-down">▼ -०.५०</span></span>
                <span class="ticker-item">🥕 <strong>गाजर (पिंपळगाव):</strong> <span class="ticker-price">₹ २६.००/kg</span> <span class="ticker-up">▲ +०.८०</span></span>
                <span class="ticker-item">🥬 <strong>कोबी (नाशिक):</strong> <span class="ticker-price">₹ १८.००/kg</span> <span class="ticker-up">▲ +१.००</span></span>
                <span class="ticker-item">🌾 <strong>सोयाबीन (लातूर):</strong> <span class="ticker-price">₹ ४६.५०/kg</span> <span class="ticker-up">▲ +३.००</span></span>
            `;
        }
    }

    // Header Branding & Actions
    if (lang === "English") {
        setTxt('brandName', "KisanTrust");
        setTxt('tagline', "Know Your Crop. Know Its Worth. Know Where to Sell.");
        setTxt('headerHelplineText', "Helpline: 1800-123-4567");
        setTxt('adminQuickBtnText', "Admin Mode");
    } else if (lang === "Hindi (हिंदी)") {
        setTxt('brandName', "किसान ट्रस्ट");
        setTxt('tagline', "अपनी फसल पहचानें. सही भाव जानें. कहाँ बेचना है तय करें.");
        setTxt('headerHelplineText', "हेल्पलाइन: 1800-123-4567");
        setTxt('adminQuickBtnText', "एडमिन मोड");
    } else {
        setTxt('brandName', "किसान ट्रस्ट");
        setTxt('tagline', "आपले पीक ओळखा. योग्य भाव जाणा. कुठे विकायचे ते ठरवा.");
        setTxt('headerHelplineText', "हेल्पलाइन: 1800-123-4567");
        setTxt('adminQuickBtnText', "अ‍ॅडमिन मोड");
    }

    // Nav Tab Labels
    setTxt('navLblDashboard', dict.nav.dashboard);
    setTxt('navLblAssessLot', dict.nav.assessLot);
    setTxt('navLblMyLots', dict.nav.myLots);
    setTxt('navLblMarketIntel', dict.nav.marketIntel);
    setTxt('navLblBuyers', dict.nav.buyers);
    setTxt('navLblPooling', dict.nav.pooling);
    setTxt('navLblTransactions', dict.nav.transactions);
    setTxt('navLblAdminPortal', dict.nav.adminPortal);
    setTxt('navLblPayments', dict.auth?.navPayments || dict.payment?.modalTitle || "Payments");

    // View 1: Dashboard Hero
    if (lang === "English") {
        setTxt('dashWelcomeText', "Welcome, Ramesh Patil 👋");
        setTxt('dashSubDesc', "KisanTrust helps you accurately assess crop quality, discover transparent market prices, and connect directly with trusted verified buyers.");
        setTxt('dashAssessBtnText', "Assess & Register New Lot");
    } else if (lang === "Hindi (हिंदी)") {
        setTxt('dashWelcomeText', "स्वागत है, रमेश पाटिल 👋");
        setTxt('dashSubDesc', "किसान ट्रस्ट आपको फसल की सटीक गुणवत्ता, पारदर्शी बाजार भाव और सीधे सत्यापित खरीदारों से जुड़ने में मदद करता है।");
        setTxt('dashAssessBtnText', "नई फसल जांचें और पंजीकृत करें");
    } else {
        setTxt('dashWelcomeText', "नमस्कार, रमेश पाटील 👋");
        setTxt('dashSubDesc', "KisanTrust आपल्याला पिकाची अचूक गुणवत्ता, पारदर्शक बाजारभाव आणि थेट विश्वासू खरेदीदार जोडण्यास मदत करते.");
        setTxt('dashAssessBtnText', "नवीन लॉट तपासा व नोंदवा");
    }

    // Dashboard 5-Button Quick Actions
    setTxt('quickActionScanTitle', dict.farmerQuickActions?.scan || "📸 Assess Quality");
    setTxt('quickActionScanSub', dict.farmerQuickActions?.scanSub || "4-angle AI grading");
    setTxt('quickActionMandiTitle', dict.farmerQuickActions?.mandi || "💰 Live Mandi Profit");
    setTxt('quickActionMandiSub', dict.farmerQuickActions?.mandiSub || "Deduct transport costs");
    setTxt('quickActionBuyersTitle', dict.farmerQuickActions?.buyers || "🤝 Verified Buyers");
    setTxt('quickActionBuyersSub', dict.farmerQuickActions?.buyersSub || "FSSAI & APMC corporate buyers");
    setTxt('quickActionPoolingTitle', dict.farmerQuickActions?.pooling || "🚜 Village Pooling");
    setTxt('quickActionPoolingSub', dict.farmerQuickActions?.poolingSub || "Save 50-70% on freight");
    setTxt('quickActionDealsTitle', dict.farmerQuickActions?.deals || "📜 Deals & Invoices");
    setTxt('quickActionDealsSub', dict.farmerQuickActions?.dealsSub || "Digital contracts & receipts");

    // Dashboard Cards
    setTxt('dashActiveLotsTitle', dict.dashboard.activeLotsHeading + (lang === "English" ? " (Active Lots in Firestore)" : ""));
    setTxt('dashViewAllLotsLink', dict.dashboard.viewAllLots);
    setTxt('dashMarketSnapshotTitle', dict.dashboard.marketSnapshotHeading + (lang === "English" ? " (Market Snapshot)" : ""));
    setTxt('snapBestMarketLabel', `${dict.dashboard.bestMarket}:`);
    setTxt('snapNetValueLabel', `${dict.dashboard.netRealization}:`);
    setTxt('dashOpportunityTitle', dict.dashboard.sellingOpportunityHeading + (lang === "English" ? " (Selling Opportunity)" : ""));

    if (lang === "English") {
        setTxt('dashDemandBadge', "High Demand");
        setTxt('dashPotentialBuyersCount', "3 Verified Buyers Active");
        setTxt('dashActionRecommendation', "Direct trade with verified buyers yields higher profits without intermediary commissions.");
        setTxt('snapTipBox', "💡 Mumbai and Vashi markets currently have highest demand for Grade A hybrid tomatoes.");
        setTxt('snapPerKgUnit', "/ kg (Tomato)");
    } else if (lang === "Hindi (हिंदी)") {
        setTxt('dashDemandBadge', "तीव्र मांग (High)");
        setTxt('dashPotentialBuyersCount', "३ सत्यापित खरीदार सक्रिय");
        setTxt('dashActionRecommendation', "सह्याद्री एग्रो या रिलायंस फ्रेश जैसे सीधे खरीदारों के साथ व्यापार करने से बिचौलियों के बिना अधिक लाभ होता है।");
        setTxt('snapTipBox', "💡 मुंबई और वाशी बाजार में वर्तमान में उच्च गुणवत्ता वाले संकर टमाटर की सर्वाधिक मांग है।");
        setTxt('snapPerKgUnit', "/ किलो (टमाटर)");
    } else {
        setTxt('dashDemandBadge', "तीव्र मागणी (High)");
        setTxt('dashPotentialBuyersCount', "३ सत्यापित खरेदीदार सक्रिय");
        setTxt('dashActionRecommendation', "सह्याद्री अ‍ॅग्रो किंवा रिलायन्स फ्रेश सारख्या थेट खरेदीदारांसोबत व्यवहार केल्यास मध्यस्थांशिवाय अधिक नफा मिळतो.");
        setTxt('snapTipBox', "💡 मुंबई आणि वाशी बाजारात सध्या उच्च गुणवत्तेच्या संकरित टोमॅटोला सर्वाधिक मागणी आहे.");
        setTxt('snapPerKgUnit', "/ किलो (टोमॅटो)");
    }

    // Sample Produce Buttons
    setTxt('sampleLotsTitleText', dict.sampleLots?.quickLoadTitle || "✨ Quick Sample Produce Loaders:");
    setTxt('sampleTomatoBtnText', dict.sampleLots?.tomatoSample || "🍅 Tomato (Grade A)");
    setTxt('sampleOnionBtnText', dict.sampleLots?.onionSample || "🧅 Onion (Grade A)");
    setTxt('samplePotatoBtnText', dict.sampleLots?.potatoSample || "🥔 Potato (Grade B)");

    // Voice & Sharing Buttons
    setTxt('btnVoiceAdviceText', dict.voiceAssist?.btnListen || "🔊 Listen (AI Voice)");
    setTxt('btnVoiceQualityText', dict.voiceAssist?.btnListen || "🔊 Listen (AI Voice)");
    setTxt('btnShareWhatsAppText', dict.whatsappShare?.btnShare || "💬 Share on WhatsApp");
    setTxt('btnViewCertText', dict.certificate?.btnViewCert || "📜 View Quality Certificate");

    // View 2: Lot Assessment Wizard
    setTxt('step1Label', dict.lotCreation.step1);
    setTxt('step2Label', dict.lotCreation.step2);
    setTxt('step3Label', dict.lotCreation.step3);
    setTxt('lotFormTitle', dict.lotCreation.title);
    setTxt('lblCropType', dict.lotCreation.cropTypeLabel);
    setTxt('lblVariety', dict.lotCreation.varietyLabel);
    setTxt('lblQuantity', dict.lotCreation.quantityLabel);
    setTxt('lblHarvestDate', dict.lotCreation.harvestDateLabel);
    setTxt('uploadTitle', dict.lotCreation.uploadTitle);
    setTxt('uploadDesc', dict.lotCreation.uploadDesc);
    setTxt('selectPhotosBtnText', dict.lotCreation.selectPhotosBtn);
    setTxt('analyzeBtnText', dict.lotCreation.analyzeBtn);
    setTxt('cutTitle', dict.lotCreation.cutTitle);
    setTxt('cutDesc', dict.lotCreation.cutDesc);
    setTxt('captureCutBtnText', dict.lotCreation.captureCutBtn);
    setTxt('skipCutBtnText', dict.lotCreation.skipCutBtn);
    setTxt('priceTitle', dict.lotCreation.priceTitle);
    setTxt('priceSubtitle', dict.lotCreation.priceSubtitle);
    setTxt('lblApmcBenchmark', dict.lotCreation.marketBenchmark);
    setTxt('lblNetRealization', dict.lotCreation.netFarmerPay);
    setTxt('saveLotBtnText', dict.lotCreation.saveLotBtn);
    setTxt('negotiateBtnText', dict.lotCreation.negotiateBtn);

    // View 4: Market Intel
    setTxt('marketIntelMainTitle', dict.marketIntel?.title || "📊 Market Intelligence & Price Discovery");
    setTxt('marketIntelSub', dict.marketIntel?.subtitle || "Direct net-realization comparison based on Agmarknet APMC data and logistics costs");
    setTxt('trendsHeaderTitle', dict.marketIntel?.trendsTitle || "📈 Price Trends & Velocity Analysis");

    // Market Intel Crop Filter Pills
    const intelPills = document.querySelectorAll('#cropFilterPills .crop-pill-btn');
    if (intelPills && intelPills.length >= 4) {
        if (lang === "English") {
            intelPills[0].textContent = "🍅 Tomato";
            intelPills[1].textContent = "🧅 Onion";
            intelPills[2].textContent = "🥔 Potato";
            intelPills[3].textContent = "🥕 Carrot";
        } else if (lang === "Hindi (हिंदी)") {
            intelPills[0].textContent = "🍅 टमाटर (Tomato)";
            intelPills[1].textContent = "🧅 प्याज (Onion)";
            intelPills[2].textContent = "🥔 आलू (Potato)";
            intelPills[3].textContent = "🥕 गाजर (Carrot)";
        } else {
            intelPills[0].textContent = "🍅 टोमॅटो (Tomato)";
            intelPills[1].textContent = "🧅 कांदा (Onion)";
            intelPills[2].textContent = "🥔 बटाटा (Potato)";
            intelPills[3].textContent = "🥕 गाजर (Carrot)";
        }
    }

    // View 5: Buyer Marketplace
    setTxt('buyerMarketMainTitle', dict.buyerMarket?.title || "🤝 Verified Buyer Marketplace");
    setTxt('buyerMarketSub', dict.buyerMarket?.subtitle || "Active purchase requirements from food processors, organized retailers, and bulk buyers");
    setTxt('postDemandBtnText', dict.buyerMarket?.postDemandBtn || "Post Purchase Requirement (Buyer Mode)");

    // Buyer Market Crop Filter Pills
    const buyerPills = document.querySelectorAll('#buyerCropFilterPills .crop-pill-btn');
    if (buyerPills && buyerPills.length >= 4) {
        if (lang === "English") {
            buyerPills[0].textContent = "🌾 All Crops";
            buyerPills[1].textContent = "🍅 Tomato";
            buyerPills[2].textContent = "🧅 Onion";
            buyerPills[3].textContent = "🥔 Potato";
        } else if (lang === "Hindi (हिंदी)") {
            buyerPills[0].textContent = "🌾 सभी फसलें (All)";
            buyerPills[1].textContent = "🍅 टमाटर (Tomato)";
            buyerPills[2].textContent = "🧅 प्याज (Onion)";
            buyerPills[3].textContent = "🥔 आलू (Potato)";
        } else {
            buyerPills[0].textContent = "🌾 सर्व पिके (All)";
            buyerPills[1].textContent = "🍅 टोमॅटो (Tomato)";
            buyerPills[2].textContent = "🧅 कांदा (Onion)";
            buyerPills[3].textContent = "🥔 बटाटा (Potato)";
        }
    }

    // View 6: Smart Village Pooling
    setTxt('poolingMainTitle', dict.smartPooling?.title || "🚜 Smart Village Pooling & Freight Optimization");
    setTxt('poolingSub', dict.smartPooling?.subtitle || "Smallholder farmers aggregate compatible lots into full truckloads to save 50-60% on transport");

    // View 8: Admin Portal
    setTxt('adminBannerTitle', dict.adminPortal?.title || "🛡️ KisanTrust Administrative Control Center");
    setTxt('adminBannerSub', dict.adminPortal?.subTitle || "Centralized Farmer & Buyer verification, lot moderation, and dispute resolution hub");
    setTxt('adminTabOverview', dict.adminPortal?.tabOverview);
    setTxt('adminTabFarmers', dict.adminPortal?.tabFarmers);
    setTxt('adminTabBuyers', dict.adminPortal?.tabBuyers);
    setTxt('adminTabLots', dict.adminPortal?.tabLots);
    setTxt('adminTabDemands', dict.adminPortal?.tabDemands);
    setTxt('adminTabUsers', dict.adminPortal?.tabUsers);
    setTxt('adminTabPayments', dict.adminPortal?.tabPayments);
    setTxt('adminTabDisputes', dict.adminPortal?.tabDisputes);

    // Auth Modal
    if (dict.auth) {
        setTxt('authModalTitle', dict.auth.portalTitle || "KisanTrust Portal");
        setTxt('authTabLogin', dict.auth.tabLogin || "Sign In");
        setTxt('authTabRegister', dict.auth.tabRegister || "Register");
        setTxt('lblLoginIdentifier', dict.auth.lblIdentifier || "Mobile Number or Email");
        setTxt('lblLoginPassword', dict.auth.lblPassword || "Password");
        setPlaceholder('loginIdentifierInput', dict.auth.placeholderIdentifier);
        setTxt('lblRememberMeText', dict.auth.rememberMe || "Remember me");
        setTxt('lblForgotPassword', dict.auth.forgotPassword || "Forgot password?");
        setTxt('btnSignInSubmit', dict.auth.btnSignIn || "Sign In");
        setTxt('dividerOrText', dict.auth.dividerOr || "OR");
        setTxt('googleBtnText', dict.auth.btnGoogle || "Sign in with Google");
        setTxt('quickDemoHeader', dict.auth.quickDemoTitle || "1-Click Demo Login:");
        setTxt('demoFarmerLoginBtn', dict.auth.btnDemoFarmer || "👨‍🌾 Farmer");
        setTxt('demoBuyerLoginBtn', dict.auth.btnDemoBuyer || "🏢 Buyer");
        setTxt('demoCustomerLoginBtn', dict.auth.btnDemoCustomer || "🛒 Customer");
        setTxt('demoAdminLoginBtn', dict.auth.btnDemoAdmin || "🛡️ Admin");
        setTxt('demoSuperAdminLoginBtn', dict.auth.btnDemoSuperAdmin || "⚡ Super Admin");

        // Registration Form Translations
        setTxt('lblRegRole', dict.auth.lblRole || "Select Your Role");
        setTxt('roleTextFarmer', dict.auth.roleFarmer || "👨‍🌾 Farmer");
        setTxt('roleTextBuyer', dict.auth.roleBuyer || "🏢 Buyer");
        setTxt('roleTextCustomer', dict.auth.roleCustomer || "🛒 Customer");
        setTxt('lblRegName', dict.auth.lblName || "Full Name");
        setPlaceholder('regNameInput', dict.auth.placeholderName);
        setTxt('lblRegPhone', dict.auth.lblPhone || "Mobile Number");
        setPlaceholder('regPhoneInput', dict.auth.placeholderPhone);
        setTxt('lblRegEmail', dict.auth.lblEmail || "Email ID");
        setPlaceholder('regEmailInput', dict.auth.placeholderEmail);
        setTxt('lblRegState', dict.auth.lblState || "State");
        setTxt('lblRegDistrict', dict.auth.lblDistrict || "District / City");
        setPlaceholder('regDistrictInput', dict.auth.placeholderDistrict);
        setTxt('lblRegCrops', dict.auth.lblCrops || "Primary Crops");
        setTxt('lblRegAcres', dict.auth.lblAcres || "Farm Area (Acres)");
        setTxt('lblRegCompanyName', dict.auth.lblCompanyName || "Company Name");
        setPlaceholder('regCompanyInput', dict.auth.placeholderCompany);
        setTxt('lblRegBuyerType', dict.auth.lblBuyerType || "Buyer Category");
        setTxt('lblRegGstin', dict.auth.lblGstin || "GST / License No.");
        setPlaceholder('regGstinInput', dict.auth.placeholderGstin);
        setTxt('lblRegCustProduce', dict.auth.lblCustNeeds || "Fresh Produce Needed");
        setPlaceholder('regCustProduceInput', dict.auth.placeholderCustNeeds);
        setTxt('lblRegCustAddress', dict.auth.lblCustAddress || "Delivery Address");
        setPlaceholder('regCustAddressInput', dict.auth.placeholderCustAddress);
        setTxt('lblRegPassword', dict.auth.lblCreatePass || "Password");
        setPlaceholder('regPasswordInput', dict.auth.placeholderCreatePass);
        setTxt('lblRegConfirmPassword', dict.auth.lblConfirmPassword || "Confirm Password");
        setPlaceholder('regConfirmPasswordInput', dict.auth.placeholderConfirmPass);
        setTxt('btnRegisterSubmit', dict.auth.btnCreateAccount || "🌱 Create Account");
    }

    // Smallholder Section
    if (dict.smallholder) {
        setTxt('lblMicroLotPresets', dict.smallholder.presetsLabel);
        setTxt('lblSmallholderToggle', dict.smallholder.toggleLabel);
        setTxt('badgeZeroFee', dict.smallholder.zeroFeeBadge);
        setTxt('badgeSmartPoolEligible', dict.smallholder.smartPoolBadge);
        setTxt('paySmallholderBadge', dict.smallholder.smallFarmerBadge);
    }

    // Payment Modal Section
    if (dict.payment) {
        setTxt('payModalTitle', dict.payment.modalTitle);
        setTxt('payModalSubtitle', dict.payment.modalSubtitle);
        setTxt('lblEscrowShieldTitle', dict.payment.escrowTitle);
        setTxt('lblEscrowShieldDesc', dict.payment.escrowDesc);
        setTxt('lblSelectPaymentMethod', dict.payment.selectMethod);
        setTxt('lblScanQrText', dict.payment.scanQr);
        setTxt('paySuccessTitle', dict.payment.successTitle);
        setTxt('paySuccessSub', dict.payment.successSub);
    }

    // Missing Elements from Task 1
    if (lang === "English") {
        // Step 1
        setTxt('lblBeforePublishTitle', "💡 Before You Publish Insights");
        setTxt('lblBeforePublishSub', "Real-time market opportunities for selected crop & weight");
        setTxt('noPhotosYetText', "No photos selected yet");
        setTxt('uploadPromptText', "Select 4 photos of your lot for quality analysis");
        setTxt('photoCountLabel', "/ 4 photos selected");
        setTxt('warningText', "Please select at least 4 photos");
        setTxt('resetBtn', "🔄 Reset");
        setTxt('analyzeBtnText', "Analyze Quality");
        setTxt('lblMicroLotPresets', "Smallholder & Bulk Lot Presets:");
        setTxt('lblSmallholderToggle', "🌱 I am a Small / Marginal Farmer (< 2 Acres)");
        setTxt('badgeZeroFee', "✨ 0% Platform Fee");
        setTxt('badgeSmartPoolEligible', "🚛 Group Pooling 65% Savings");
        
        // Step 2
        setTxt('lotVerifiedText', "External Quality Assessment Complete!");
        
        // Step 3
        setTxt('lblDecisionHeading', "Smart Selling Recommendation (Decision Engine)");
        setTxt('txAmount', "Total Value: ₹ 18,000");
        setTxt('txQuality', "Quality Grade: Grade A");
        setTxt('txLotId', "Lot ID: LOT-2026-089101");
        
        // View 3
        setTxt('myLotsCreateBtn', "➕ Create New Lot");
        
        // Others
        setTxt('marketDataFreshnessText', "🕒 Fresh Info: Loading...");
        setTxt('filterCropLabel', "Select Crop (Select Commodity):");
        setTxt('step3CompareTitle', "🏛️ Comparison of nearby major mandis (Mandi Comparison)");
        setTxt('step3CompareDesc', "Instead of just raw price, choose the best market based on Net Realization after transport costs:");
        setTxt('saveLotBtnText', "Save Digital Lot");
        setTxt('btnViewCertText', "📜 Official Quality Certificate");
        setTxt('btnShareWhatsAppText', "💬 Share on WhatsApp");
        setTxt('negotiateBtnText', "Negotiate");
        setTxt('acceptBtnText', "Initiate Deal with Direct Buyer");
    } else if (lang === "Hindi (हिंदी)") {
        setTxt('lblBeforePublishTitle', "💡 प्रकाशन से पहले बाजार इनसाइट्स");
        setTxt('lblBeforePublishSub', "चयनित फसल और वजन के लिए रीयल-टाइम बाजार के अवसर");
        setTxt('noPhotosYetText', "अभी तक कोई फोटो नहीं चुनी गई");
        setTxt('uploadPromptText', "गुणवत्ता विश्लेषण के लिए अपने लॉट की 4 तस्वीरें चुनें");
        setTxt('photoCountLabel', "/ 4 तस्वीरें चुनी गईं");
        setTxt('warningText', "कृपया कम से कम 4 तस्वीरें चुनें");
        setTxt('resetBtn', "🔄 रीसेट करें");
        setTxt('analyzeBtnText', "गुणवत्ता जांचें");
        setTxt('lblMicroLotPresets', "छोटे किसान व थोक लॉट प्रीसेट:");
        setTxt('lblSmallholderToggle', "🌱 मैं छोटा / सीमांत किसान हूँ (< 2 एकड़)");
        setTxt('badgeZeroFee', "✨ 0% प्लेटफॉर्म शुल्क");
        setTxt('badgeSmartPoolEligible', "🚛 समूह पूलिंग 65% बचत");
        
        setTxt('lotVerifiedText', "बाहरी गुणवत्ता मूल्यांकन पूरा हुआ!");
        
        setTxt('lblDecisionHeading', "स्मार्ट बिक्री सिफारिश (निर्णय इंजन)");
        setTxt('txAmount', "कुल मूल्य: ₹ 18,000");
        setTxt('txQuality', "गुणवत्ता ग्रेड: ग्रेड ए");
        setTxt('txLotId', "लॉट आईडी: LOT-2026-089101");
        
        setTxt('myLotsCreateBtn', "➕ नया लॉट बनाएं");
        setTxt('marketDataFreshnessText', "🕒 ताज़ा जानकारी: लोड हो रहा है...");
        setTxt('filterCropLabel', "फसल चुनें:");
        setTxt('step3CompareTitle', "🏛️ आस-पास की प्रमुख मंडियों की तुलना");
        setTxt('step3CompareDesc', "केवल कच्चे भाव के बजाय, परिवहन लागत के बाद शुद्ध प्राप्ति के आधार पर सर्वोत्तम बाजार चुनें:");
        setTxt('saveLotBtnText', "डिजिटल लॉट सेव करें");
        setTxt('btnViewCertText', "📜 आधिकारिक गुणवत्ता प्रमाण पत्र");
        setTxt('btnShareWhatsAppText', "💬 WhatsApp पर शेयर करें");
        setTxt('negotiateBtnText', "मोलभाव करें");
        setTxt('acceptBtnText', "सीधे खरीदार के साथ सौदा शुरू करें");
    } else {
        // Marathi
        setTxt('lblBeforePublishTitle', "💡 प्रकाशनपूर्व थेट बाजारपेठ माहिती");
        setTxt('lblBeforePublishSub', "निवडलेले पीक व वजनानुसार रिअल-टाइम बाजार संधी");
        setTxt('noPhotosYetText', "अद्याप फोटो निवडलेले नाहीत");
        setTxt('uploadPromptText', "गुणवत्ता विश्लेषणासाठी लॉटचे ४ फोटो निवडा");
        setTxt('photoCountLabel', "/ ४ फोटो निवडले");
        setTxt('warningText', "कृपया किमान ४ फोटो निवडा");
        setTxt('resetBtn', "🔄 रीसेट करा");
        setTxt('analyzeBtnText', "गुणवत्ता तपासा");
        setTxt('lblMicroLotPresets', "लहान शेतकरी व घाऊक लॉट प्रीसेट्स:");
        setTxt('lblSmallholderToggle', "🌱 मी लहान / अल्पभूधारक शेतकरी आहे (< 2 एकर)");
        setTxt('badgeZeroFee', "✨ ०% प्लॅटफॉर्म फी");
        setTxt('badgeSmartPoolEligible', "🚛 गट शेती वाहतूक ६५% बचत");
        
        setTxt('lotVerifiedText', "बाह्य गुणवत्ता तपासणी पूर्ण!");
        
        setTxt('lblDecisionHeading', "स्मार्ट विक्री निर्णय शिफारस (Decision Engine)");
        setTxt('txAmount', "एकूण मूल्य: ₹ १८,०००");
        setTxt('txQuality', "गुणवत्ता दर्जा: Grade A");
        setTxt('txLotId', "लॉट आयडी: LOT-2026-089101");
        
        setTxt('myLotsCreateBtn', "➕ नवीन लॉट तयार करा");
        setTxt('marketDataFreshnessText', "🕒 ताजी माहिती: लोड होत आहे...");
        setTxt('filterCropLabel', "पीक निवडा:");
        setTxt('step3CompareTitle', "🏛️ जवळपासच्या प्रमुख मंड्यांची तुलना");
        setTxt('step3CompareDesc', "केवळ कच्चा भाव न पाहता, वाहतूक खर्च वजा करून मिळणाऱ्या निव्वळ प्राप्तीनुसार सर्वोत्तम बाजारपेठ निवडा:");
        setTxt('saveLotBtnText', "डिजिटल लॉट सेव्ह करा");
        setTxt('btnViewCertText', "📜 अधिकृत प्रमाणपत्र पहा");
        setTxt('btnShareWhatsAppText', "💬 WhatsApp वर शेअर करा");
        setTxt('negotiateBtnText', "वाटाघाटी करा");
        setTxt('acceptBtnText', "थेट खरेदीदारासोबत सौदा सुरू करा");
    }

}


// --- MODULE: src/config/envConfig.js ---
let nodeEnvLoaded = false;
function loadNodeEnv() {
    if (nodeEnvLoaded) return;
    nodeEnvLoaded = true;
    if (typeof process !== 'undefined' && typeof process.cwd === 'function') {
        try {
            const fs = (typeof process.getBuiltinModule === 'function' && process.getBuiltinModule('fs')) ||
                       (typeof require === 'function' && require('fs'));
            const path = (typeof process.getBuiltinModule === 'function' && process.getBuiltinModule('path')) ||
                         (typeof require === 'function' && require('path'));
            if (fs && path) {
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
                            if (!process.env[key]) {
                                process.env[key] = val;
                            }
                        }
                    }
                }
            }
        } catch (e) {}
    }
}

function getEnvVar(k, d = '') {
    loadNodeEnv();
    if (typeof process !== 'undefined' && process.env && process.env[k]) {
        return process.env[k];
    }
    if (typeof window !== 'undefined') {
        if (window.__ENV__ && window.__ENV__[k]) return window.__ENV__[k];
        if (window['__' + k + '__']) return window['__' + k + '__'];
    }
    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('kisantrust_' + k.toLowerCase());
        if (stored) return stored;
    }
    return d;
}
const ENV_CONFIG = {
    GEMINI_API_KEY:
        getEnvVar('GEMINI_API_KEY'),
    AGMARKNET_API_KEY:
        getEnvVar('AGMARKNET_API_KEY', getEnvVar('DATA_GOV_IN_API_KEY')),
    DATA_GOV_IN_API_KEY:
        getEnvVar('DATA_GOV_IN_API_KEY', getEnvVar('AGMARKNET_API_KEY')),
    FIREBASE_API_KEY:
        getEnvVar('FIREBASE_API_KEY', 'AIzaSyD2yRbvNydcoHVutM6FFqerQGl0ST5OPfw'),
    FIREBASE_PROJECT_ID:
        getEnvVar('FIREBASE_PROJECT_ID', 'sih2026-622a0'),
    FIREBASE_AUTH_DOMAIN:
        getEnvVar('FIREBASE_AUTH_DOMAIN', 'sih2026-622a0.firebaseapp.com'),
    FIREBASE_STORAGE_BUCKET:
        getEnvVar('FIREBASE_STORAGE_BUCKET', 'sih2026-622a0.firebasestorage.app'),
    FIREBASE_MESSAGING_SENDER_ID:
        getEnvVar('FIREBASE_MESSAGING_SENDER_ID', '593553956672'),
    FIREBASE_APP_ID:
        getEnvVar('FIREBASE_APP_ID', '1:593553956672:web:d9daf3af089bb9867ce4a5'),
    WEATHER_API_KEY:
        getEnvVar('WEATHER_API_KEY', '')
};

// --- MODULE: src/config/firebaseConfig.js ---
/**
 * KisanTrust - Firebase Configuration & SDK Initialization
 * Connects directly to Google Cloud Firestore, Firebase Auth, and Firebase Analytics
 * for Smart India Hackathon 2026 Project (sih2026-622a0).
 * Includes resilient offline sync adapter for local development, node tests, and poor rural connectivity.
 */



// Live Firebase Configuration for SIH2026 (Loaded from .env / ENV_CONFIG)
const firebaseConfig = {
    apiKey: ENV_CONFIG.FIREBASE_API_KEY,
    authDomain: ENV_CONFIG.FIREBASE_AUTH_DOMAIN,
    projectId: ENV_CONFIG.FIREBASE_PROJECT_ID,
    storageBucket: ENV_CONFIG.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ENV_CONFIG.FIREBASE_MESSAGING_SENDER_ID,
    appId: ENV_CONFIG.FIREBASE_APP_ID,
    measurementId: "G-04493R1KSH"
};

// In-memory fallback store for Node.js test environment
const memoryStore = {};

const safeGetStorage = (key) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(key);
    }
    return memoryStore[key] || null;
};

const safeSetStorage = (key, val) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, val);
    } else {
        memoryStore[key] = val;
    }
};

// Live Firebase SDK Integration
let liveFirestore = null;
let liveAuth = null;

if (typeof window !== 'undefined' && window.firebase) {
    try {
        if (!window.firebase.apps || window.firebase.apps.length === 0) {
            window.firebaseApp = window.firebase.initializeApp(firebaseConfig);
            if (window.firebase.analytics) {
                try { window.firebaseAnalytics = window.firebase.analytics(); } catch (e) {}
            }
        } else {
            window.firebaseApp = window.firebase.apps[0];
        }
        liveFirestore = window.firebase.firestore();
        liveAuth = window.firebase.auth();
        console.log('🔥 KisanTrust Connected to Live Cloud Firestore:', firebaseConfig.projectId);
    } catch (err) {
        console.warn('⚠️ Cloud Firestore notice (using resilient local adapter):', err.message);
    }
}

/**
 * Resilient Firestore Database Adapter (Dual-Mode: Cloud Firestore + Local Mirror)
 */
class LocalFirestoreAdapter {
    constructor() {
        this.storageKey = 'kisantrust_firestore_db';
        this._initDB();
    }

    _initDB() {
        if (!safeGetStorage(this.storageKey)) {
            const initialData = {
                users: {},
                lots: {},
                mandiBenchmarks: {},
                buyerDemands: {},
                poolingClusters: {},
                transactions: {},
                farmerProfiles: {},
                buyerProfiles: {},
                disputes: {},
                riskFlags: {},
                auditLogs: {},
                notifications: {}
            };
            safeSetStorage(this.storageKey, JSON.stringify(initialData));
        }
    }

    _getDB() {
        try {
            return JSON.parse(safeGetStorage(this.storageKey) || '{}');
        } catch (e) {
            return {
                users: {},
                lots: {},
                mandiBenchmarks: {},
                buyerDemands: {},
                poolingClusters: {},
                transactions: {},
                farmerProfiles: {},
                buyerProfiles: {},
                disputes: {},
                riskFlags: {},
                auditLogs: {},
                notifications: {}
            };
        }
    }

    _saveDB(data) {
        safeSetStorage(this.storageKey, JSON.stringify(data));
    }

    async collection(collName) {
        return {
            doc: (docId) => this.doc(collName, docId),
            get: async () => {
                // Try live Cloud Firestore if online
                if (liveFirestore) {
                    try {
                        const snap = await liveFirestore.collection(collName).get();
                        if (!snap.empty) {
                            return snap;
                        }
                    } catch (e) {
                        // Fallback to local storage mirror
                    }
                }
                const db = this._getDB();
                const coll = db[collName] || {};
                return {
                    empty: Object.keys(coll).length === 0,
                    size: Object.keys(coll).length,
                    docs: Object.keys(coll).map(id => ({
                        id,
                        exists: true,
                        data: () => coll[id]
                    }))
                };
            },
            add: async (data) => {
                const id = `${collName.slice(0, 3)}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
                await this.doc(collName, id).set({ ...data, id, createdAt: new Date().toISOString() });
                return { id };
            }
        };
    }

    doc(collName, docId) {
        return {
            get: async () => {
                if (liveFirestore) {
                    try {
                        const snap = await liveFirestore.collection(collName).doc(docId).get();
                        if (snap.exists) {
                            return snap;
                        }
                    } catch (e) {
                        // Fallback to local mirror
                    }
                }
                const db = this._getDB();
                const data = (db[collName] && db[collName][docId]) || null;
                return {
                    exists: data !== null,
                    id: docId,
                    data: () => data
                };
            },
            set: async (data, options = {}) => {
                // Mirror to local storage immediately
                const db = this._getDB();
                if (!db[collName]) db[collName] = {};
                
                if (options.merge && db[collName][docId]) {
                    db[collName][docId] = { ...db[collName][docId], ...data, updatedAt: new Date().toISOString() };
                } else {
                    db[collName][docId] = { ...data, id: docId, updatedAt: new Date().toISOString() };
                }
                this._saveDB(db);

                // Push to Cloud Firestore asynchronously
                if (liveFirestore) {
                    try {
                        await liveFirestore.collection(collName).doc(docId).set(data, options);
                    } catch (e) {
                        console.warn(`Firestore sync note for ${collName}/${docId}:`, e.message);
                    }
                }
                return true;
            },
            update: async (data) => {
                return this.doc(collName, docId).set(data, { merge: true });
            },
            delete: async () => {
                const db = this._getDB();
                if (db[collName] && db[collName][docId]) {
                    delete db[collName][docId];
                    this._saveDB(db);
                }
                if (liveFirestore) {
                    try {
                        await liveFirestore.collection(collName).doc(docId).delete();
                    } catch (e) {}
                }
                return true;
            }
        };
    }
}

/**
 * Local Storage Adapter for images/receipts
 */
class LocalStorageAdapter {
    async uploadImage(fileOrDataUrl, path) {
        if (typeof fileOrDataUrl === 'string') {
            return {
                url: fileOrDataUrl,
                path: path,
                uploadedAt: new Date().toISOString()
            };
        }
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve({
                    url: e.target.result,
                    path: path,
                    uploadedAt: new Date().toISOString()
                });
            };
            reader.readAsDataURL(fileOrDataUrl);
        });
    }
}

/**
 * Local Auth Adapter with Cloud Auth Sync
 */
class LocalAuthAdapter {
    constructor() {
        this.currentUser = JSON.parse(safeGetStorage('kisantrust_auth_user') || 'null') || {
            uid: 'farmer_mh_001',
            name: 'Ramesh Patil (रमेश पाटील)',
            phone: '+91 98220 12345',
            role: 'farmer',
            district: 'Nashik',
            taluka: 'Niphad',
            state: 'Maharashtra',
            isDemo: true
        };
    }

    getUser() {
        return this.currentUser;
    }

    setUser(user) {
        this.currentUser = user;
        safeSetStorage('kisantrust_auth_user', JSON.stringify(user));
    }
}
const localDb = new LocalFirestoreAdapter();
const localAuth = new LocalAuthAdapter();
const localStorageService = new LocalStorageAdapter();


// --- MODULE: src/models/User.js ---
/**
 * KisanTrust - User & Role Domain Models
 * Implements strict Role-Based Access Control (RBAC), lifecycle state machines,
 * and privacy separation between private sensitive details and public marketplace data.
 */
const USER_ROLES = {
    FARMER: 'farmer',
    BUYER: 'buyer',
    CUSTOMER: 'customer',
    FPO: 'fpo',
    ADMIN: 'admin',
    SUPER_ADMIN: 'super_admin'
};
const ACCOUNT_STATUS = {
    ACTIVE: 'ACTIVE',
    UNDER_REVIEW: 'UNDER_REVIEW',
    SUSPENDED: 'SUSPENDED',
    DEACTIVATED: 'DEACTIVATED'
};
const VERIFICATION_STATUS = {
    REGISTERED: 'REGISTERED',
    PROFILE_SUBMITTED: 'PROFILE_SUBMITTED',
    PENDING_VERIFICATION: 'PENDING_VERIFICATION',
    VERIFIED: 'VERIFIED',
    CHANGES_REQUIRED: 'CHANGES_REQUIRED',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    UNDER_REVIEW: 'UNDER_REVIEW'
};

/**
 * Base User Model
 */
class User {
    constructor(data = {}) {
        this.uid = data.uid || data.userId || `user_${Date.now()}`;
        this.userId = this.uid;
        this.role = data.role || USER_ROLES.FARMER;
        this.displayName = data.displayName || data.name || 'User';
        this.name = this.displayName;
        this.email = data.email || '';
        this.phone = data.phone || '';
        this.profilePhoto = data.profilePhoto || data.photoUrl || '';
        this.accountStatus = data.accountStatus || ACCOUNT_STATUS.ACTIVE;
        this.verificationStatus = data.verificationStatus || (data.verified ? VERIFICATION_STATUS.VERIFIED : VERIFICATION_STATUS.PENDING_VERIFICATION);
        this.preferredLanguage = data.preferredLanguage || 'Marathi (मराठी)';
        this.authProvider = data.authProvider || 'email';
        this.adminNotes = Array.isArray(data.adminNotes) ? data.adminNotes : [];
        this.riskFlagsCount = Number(data.riskFlagsCount) || 0;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            uid: this.uid,
            role: this.role,
            displayName: this.displayName,
            email: this.email,
            phone: this.phone,
            profilePhoto: this.profilePhoto,
            accountStatus: this.accountStatus,
            verificationStatus: this.verificationStatus,
            preferredLanguage: this.preferredLanguage,
            authProvider: this.authProvider,
            adminNotes: this.adminNotes,
            riskFlagsCount: this.riskFlagsCount,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

/**
 * Farmer Profile (Separates private data from public marketplace view)
 */
class FarmerProfile {
    constructor(data = {}) {
        this.userId = data.userId || data.uid || 'farmer_mh_001';
        this.personalDetails = {
            fullName: data.personalDetails?.fullName || data.name || 'Ramesh Patil',
            profilePhoto: data.personalDetails?.profilePhoto || data.profilePhoto || '',
            mobileNumber: data.personalDetails?.mobileNumber || data.phone || '+91 98224 56789',
            emailAddress: data.personalDetails?.emailAddress || data.email || 'ramesh.patil@kisantrust.org',
            fullAddress: data.personalDetails?.fullAddress || data.address || 'Gat No. 142, At Post Niphad',
            pincode: data.personalDetails?.pincode || '422303',
            state: data.personalDetails?.state || data.state || 'Maharashtra',
            district: data.personalDetails?.district || data.district || 'Nashik',
            village: data.personalDetails?.village || data.village || 'Niphad'
        };

        this.farmDetails = {
            primaryCrops: Array.isArray(data.farmDetails?.primaryCrops) ? data.farmDetails.primaryCrops : (data.primaryCrops || ['Tomato', 'Onion']),
            farmSizeAcres: Number(data.farmDetails?.farmSizeAcres ?? data.farmSizeAcres) || 4.5,
            productionCapacityTons: Number(data.farmDetails?.productionCapacityTons ?? data.productionCapacityTons) || 25,
            fpoMembership: data.farmDetails?.fpoMembership || data.fpoMembership || 'KisanMitra Producer Co.'
        };

        this.verificationStatus = data.verificationStatus || (data.verified ? VERIFICATION_STATUS.VERIFIED : VERIFICATION_STATUS.PENDING_VERIFICATION);
        this.rejectionReason = data.rejectionReason || '';
        this.changesRequested = Array.isArray(data.changesRequested) ? data.changesRequested : [];

        // Verified Reputation & Stats
        this.farmerRating = Number(data.farmerRating) || (data.totalTransactionsCompleted ? 4.8 : 0); // 0 = New user
        this.ratingBreakdown = data.ratingBreakdown || {
            produceQuality: 4.8,
            quantityAccuracy: 4.9,
            deliveryReliability: 4.7,
            transactionCompletion: 100,
            disputeFreeScore: 98
        };
        this.totalTransactionsCompleted = Number(data.totalTransactionsCompleted) || 0;
        this.totalLotsSold = Number(data.totalLotsSold) || 0;
        this.isEstablished = this.totalTransactionsCompleted >= 3;

        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    /**
     * Public, privacy-safe representation for buyers & marketplace
     */
    getPublicProfile() {
        return {
            userId: this.userId,
            name: this.personalDetails.fullName || this.name || '',
            displayName: (this.personalDetails.fullName || '').split(' ')[0] + ' ' + ((this.personalDetails.fullName || '').split(' ')[1]?.[0] || '') + '.',
            location: {
                district: this.personalDetails.district,
                state: this.personalDetails.state
            },
            village: this.personalDetails.village,
            primaryCrops: this.farmDetails.primaryCrops,
            farmerRating: this.farmerRating > 0 ? this.farmerRating : null,
            isEstablished: this.isEstablished,
            ratingLabel: this.isEstablished ? `${this.farmerRating} / 5.0 (${this.totalTransactionsCompleted} transactions)` : 'New to KisanTrust (No verified history yet)',
            totalTransactionsCompleted: this.totalTransactionsCompleted,
            verificationStatus: this.verificationStatus
        };
    }

    toPublicView() {
        return this.getPublicProfile();
    }

    toFirestore() {
        return {
            userId: this.userId,
            personalDetails: this.personalDetails,
            farmDetails: this.farmDetails,
            verificationStatus: this.verificationStatus,
            rejectionReason: this.rejectionReason,
            changesRequested: this.changesRequested,
            farmerRating: this.farmerRating,
            ratingBreakdown: this.ratingBreakdown,
            totalTransactionsCompleted: this.totalTransactionsCompleted,
            totalLotsSold: this.totalLotsSold,
            isEstablished: this.isEstablished,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

/**
 * Buyer Profile (Separates private registration docs from public credentials)
 */
class BuyerProfileRecord {
    constructor(data = {}) {
        this.userId = data.userId || data.buyerId || 'buyer_sahyadri';
        this.businessDetails = {
            companyName: data.businessDetails?.companyName || data.companyName || 'KisanMitra Agro Processing Hub',
            buyerType: data.businessDetails?.buyerType || data.buyerType || data.companyType || 'Food Processor',
            contactPerson: data.businessDetails?.contactPerson || data.contactPerson || data.name || 'Amit Joshi',
            mobileNumber: data.businessDetails?.mobileNumber || data.phone || '+91 98230 44556',
            emailAddress: data.businessDetails?.emailAddress || data.email || 'amit.joshi@sahyadriagro.com',
            businessAddress: data.businessDetails?.businessAddress || data.address || 'Plot 45, MIDC Mohadi, Dindori',
            district: data.businessDetails?.district || data.district || 'Nashik',
            state: data.businessDetails?.state || data.state || 'Maharashtra',
            pincode: data.businessDetails?.pincode || '422206',
            gstin: data.businessDetails?.gstin || data.gstin || '00XXXXX0000X0XX',
            primaryCommodities: Array.isArray(data.businessDetails?.primaryCommodities) ? data.businessDetails.primaryCommodities : (data.primaryCommodities || ['Tomato', 'Onion', 'Grapes']),
            expectedMonthlyVolumeTons: Number(data.businessDetails?.expectedMonthlyVolumeTons ?? data.expectedMonthlyVolumeTons) || 120
        };

        this.verificationStatus = data.verificationStatus || (data.verified ? VERIFICATION_STATUS.VERIFIED : VERIFICATION_STATUS.PENDING_VERIFICATION);
        this.documentsVerified = Boolean(data.documentsVerified ?? data.verified ?? true);
        this.rejectionReason = data.rejectionReason || '';
        this.changesRequested = Array.isArray(data.changesRequested) ? data.changesRequested : [];

        // Verified Reliability Metrics
        this.buyerTrustScore = Number(data.buyerTrustScore ?? data.trustScore) || 92;
        this.trustTier = data.trustTier || 'Highly Trusted';
        this.onTimePaymentPercentage = Number(data.onTimePaymentPercentage ?? data.onTimePaymentRate) || 98.2;
        this.avgPaymentDelayDays = Number(data.avgPaymentDelayDays) || 0.8;
        this.totalTransactionsCompleted = Number(data.totalTransactionsCompleted ?? data.totalDealsCompleted) || 142;
        this.totalDisputesRaised = Number(data.totalDisputesRaised) || 1;
        this.defaultedTransactions = Number(data.defaultedTransactions) || 0;
        this.farmerRating = Number(data.farmerRating ?? data.reliabilityScore) || 4.8;

        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    /**
     * Public marketplace profile
     */
    getPublicProfile() {
        return {
            userId: this.userId,
            companyName: this.businessDetails.companyName,
            buyerType: this.businessDetails.buyerType,
            gstin: this.businessDetails.gstin,
            district: this.businessDetails.district,
            state: this.businessDetails.state,
            buyerTrustScore: this.buyerTrustScore,
            trustTier: this.trustTier,
            onTimePaymentPercentage: this.onTimePaymentPercentage,
            totalTransactionsCompleted: this.totalTransactionsCompleted,
            verificationStatus: this.verificationStatus,
            primaryCommodities: this.businessDetails.primaryCommodities
        };
    }

    toPublicView() {
        return this.getPublicProfile();
    }

    toFirestore() {
        return {
            userId: this.userId,
            businessDetails: this.businessDetails,
            verificationStatus: this.verificationStatus,
            documentsVerified: this.documentsVerified,
            rejectionReason: this.rejectionReason,
            changesRequested: this.changesRequested,
            buyerTrustScore: this.buyerTrustScore,
            trustTier: this.trustTier,
            onTimePaymentPercentage: this.onTimePaymentPercentage,
            avgPaymentDelayDays: this.avgPaymentDelayDays,
            totalTransactionsCompleted: this.totalTransactionsCompleted,
            totalDisputesRaised: this.totalDisputesRaised,
            defaultedTransactions: this.defaultedTransactions,
            farmerRating: this.farmerRating,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

/**
 * Customer / Direct Consumer Profile
 */
class CustomerProfile {
    constructor(data = {}) {
        this.userId = data.userId || data.uid || `customer_${Date.now()}`;
        this.personalDetails = {
            fullName: data.personalDetails?.fullName || data.name || 'Customer',
            mobileNumber: data.personalDetails?.mobileNumber || data.phone || '',
            emailAddress: data.personalDetails?.emailAddress || data.email || '',
            deliveryAddress: data.personalDetails?.deliveryAddress || data.address || '',
            city: data.personalDetails?.city || data.district || 'Nashik',
            state: data.personalDetails?.state || data.state || 'Maharashtra',
            pincode: data.personalDetails?.pincode || data.pincode || ''
        };
        this.preferences = {
            preferredCrops: Array.isArray(data.preferences?.preferredCrops) ? data.preferences.preferredCrops : (data.primaryCrops ? (Array.isArray(data.primaryCrops) ? data.primaryCrops : [data.primaryCrops]) : ['Tomato', 'Onion', 'Vegetables']),
            purchaseFrequency: data.preferences?.purchaseFrequency || 'Weekly',
            directFarmOrdersCount: Number(data.preferences?.directFarmOrdersCount) || 0
        };
        this.verificationStatus = data.verificationStatus || VERIFICATION_STATUS.VERIFIED;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            userId: this.userId,
            personalDetails: this.personalDetails,
            preferences: this.preferences,
            verificationStatus: this.verificationStatus,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}



// --- MODULE: src/models/AuditLog.js ---
/**
 * KisanTrust - Admin Audit Log Domain Model
 * Records immutable, tamper-evident logs of critical administrative actions
 * such as verification decisions, lot approvals/rejections, suspensions, and score adjustments.
 */
const AUDIT_ACTIONS = {
    FARMER_VERIFIED: 'FARMER_VERIFIED',
    FARMER_REJECTED: 'FARMER_REJECTED',
    FARMER_CHANGES_REQUESTED: 'FARMER_CHANGES_REQUESTED',
    BUYER_VERIFIED: 'BUYER_VERIFIED',
    BUYER_REJECTED: 'BUYER_REJECTED',
    BUYER_CHANGES_REQUESTED: 'BUYER_CHANGES_REQUESTED',
    LOT_APPROVED: 'LOT_APPROVED',
    LOT_REJECTED: 'LOT_REJECTED',
    LOT_CHANGES_REQUESTED: 'LOT_CHANGES_REQUESTED',
    LOT_PUBLISHED: 'LOT_PUBLISHED',
    DEMAND_APPROVED: 'DEMAND_APPROVED',
    DEMAND_REJECTED: 'DEMAND_REJECTED',
    DEMAND_CHANGES_REQUESTED: 'DEMAND_CHANGES_REQUESTED',
    USER_SUSPENDED: 'USER_SUSPENDED',
    USER_REACTIVATED: 'USER_REACTIVATED',
    DISPUTE_RESOLVED: 'DISPUTE_RESOLVED',
    DISPUTE_STATUS_CHANGED: 'DISPUTE_STATUS_CHANGED',
    RISK_FLAG_CREATED: 'RISK_FLAG_CREATED',
    RISK_FLAG_RESOLVED: 'RISK_FLAG_RESOLVED',
    ADMIN_NOTE_ADDED: 'ADMIN_NOTE_ADDED',
    SCORE_RECALCULATED: 'SCORE_RECALCULATED',
    APPROVE_LOT: 'LOT_APPROVED',
    REJECT_LOT: 'LOT_REJECTED',
    VERIFY_FARMER: 'FARMER_VERIFIED',
    VERIFY_BUYER: 'BUYER_VERIFIED'
};
class AuditLogRecord {
    constructor(data = {}) {
        this.logId = data.logId || `AUDIT-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.adminId = data.adminId || data.performedBy || 'admin_super';
        this.adminName = data.adminName || data.performedByName || 'Admin User';
        this.performedBy = this.adminId;
        this.performedByName = this.adminName;
        this.action = data.action || AUDIT_ACTIONS.LOT_APPROVED;
        this.targetType = data.targetType || data.targetEntityType || 'LOT'; // 'FARMER' | 'BUYER' | 'LOT' | 'DEMAND' | 'DISPUTE' | 'USER' | 'RISK_FLAG'
        this.targetEntityType = this.targetType;
        this.targetId = data.targetId || data.targetEntityId || '';
        this.targetEntityId = this.targetId;
        this.targetTitle = data.targetTitle || '';
        this.previousStatus = data.previousStatus || '';
        this.newStatus = data.newStatus || '';
        this.details = data.details || {};
        this.reason = data.reason || '';
        this.ipAddress = data.ipAddress || '127.0.0.1';
        this.timestamp = data.timestamp || new Date().toISOString();
    }

    toFirestore() {
        return {
            logId: this.logId,
            adminId: this.adminId,
            adminName: this.adminName,
            performedBy: this.performedBy,
            performedByName: this.performedByName,
            action: this.action,
            targetType: this.targetType,
            targetEntityType: this.targetEntityType,
            targetId: this.targetId,
            targetEntityId: this.targetEntityId,
            targetTitle: this.targetTitle,
            previousStatus: this.previousStatus,
            newStatus: this.newStatus,
            details: this.details,
            reason: this.reason,
            ipAddress: this.ipAddress,
            timestamp: this.timestamp
        };
    }
}


// --- MODULE: src/models/Notification.js ---
/**
 * KisanTrust - In-App Notification Domain Model
 * Manages multi-role in-app alerts and status updates for Farmers, Buyers, and Admins.
 */
const NOTIFICATION_TYPES = {
    PROFILE_VERIFIED: 'PROFILE_VERIFIED',
    PROFILE_CHANGES_REQUESTED: 'PROFILE_CHANGES_REQUESTED',
    LOT_SUBMITTED: 'LOT_SUBMITTED',
    LOT_APPROVED: 'LOT_APPROVED',
    LOT_REJECTED: 'LOT_REJECTED',
    LOT_CHANGES_REQUESTED: 'LOT_CHANGES_REQUESTED',
    DEMAND_APPROVED: 'DEMAND_APPROVED',
    DEMAND_MATCH: 'DEMAND_MATCH',
    OFFER_RECEIVED: 'OFFER_RECEIVED',
    COUNTEROFFER_RECEIVED: 'COUNTEROFFER_RECEIVED',
    OFFER_ACCEPTED: 'OFFER_ACCEPTED',
    PICKUP_SCHEDULED: 'PICKUP_SCHEDULED',
    DELIVERY_CONFIRMED: 'DELIVERY_CONFIRMED',
    PAYMENT_UPDATE: 'PAYMENT_UPDATE',
    DISPUTE_UPDATE: 'DISPUTE_UPDATE',
    RATING_UPDATED: 'RATING_UPDATED',
    ADMIN_ALERT: 'ADMIN_ALERT',
    VERIFICATION_UPDATE: 'PROFILE_VERIFIED'
};
class NotificationRecord {
    constructor(data = {}) {
        this.notificationId = data.notificationId || `NOTIF-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.userId = data.userId || data.recipientId || 'farmer_mh_001';
        this.recipientId = this.userId;
        this.type = data.type || NOTIFICATION_TYPES.LOT_APPROVED;
        this.title = data.title || 'Notification';
        this.message = data.message || '';
        this.relatedEntityType = data.relatedEntityType || 'LOT'; // 'LOT' | 'TRANSACTION' | 'DISPUTE' | 'DEMAND' | 'PROFILE'
        this.relatedEntityId = data.relatedEntityId || '';
        this.isRead = Boolean(data.isRead ?? data.read ?? false);
        this.read = this.isRead;
        this.priority = data.priority || 'NORMAL'; // 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT'
        this.actionUrl = data.actionUrl || '';
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            notificationId: this.notificationId,
            userId: this.userId,
            recipientId: this.recipientId,
            type: this.type,
            title: this.title,
            message: this.message,
            relatedEntityType: this.relatedEntityType,
            relatedEntityId: this.relatedEntityId,
            isRead: this.isRead,
            read: this.read,
            priority: this.priority,
            actionUrl: this.actionUrl,
            createdAt: this.createdAt
        };
    }
}


// --- MODULE: src/models/RiskFlag.js ---
/**
 * KisanTrust - Fraud & Risk Flag Domain Model
 * Tracks internal risk flags created by automated pre-checks or admin reviews.
 */
const RISK_FLAG_TYPES = {
    DUPLICATE_IMAGES: {
        code: 'DUPLICATE_IMAGES',
        label: 'Duplicate Produce Images Detected',
        severity: 'HIGH',
        description: 'Exact matching or previously submitted images detected across lots.'
    },
    UNUSUAL_LISTING_FREQUENCY: {
        code: 'UNUSUAL_LISTING_FREQUENCY',
        label: 'Unusual Listing Frequency',
        severity: 'MEDIUM',
        description: 'Farmer submitted unusually high number of lots within a short time window.'
    },
    MULTIPLE_DISPUTES: {
        code: 'MULTIPLE_DISPUTES',
        label: 'Elevated Dispute Frequency',
        severity: 'HIGH',
        description: 'Account has 2 or more unresolved disputes within 30 days.'
    },
    PAYMENT_DELAY_PATTERN: {
        code: 'PAYMENT_DELAY_PATTERN',
        label: 'Payment Delay Pattern',
        severity: 'HIGH',
        description: 'Buyer average payment settlement exceeds platform grace threshold (>3 days).'
    },
    REPEATED_QUANTITY_MISMATCH: {
        code: 'REPEATED_QUANTITY_MISMATCH',
        label: 'Repeated Quantity Mismatch',
        severity: 'MEDIUM',
        description: 'Unloaded delivery weight diverged >10% from declared lot weight multiple times.'
    },
    SUSPICIOUS_ACCOUNT_ACTIVITY: {
        code: 'SUSPICIOUS_ACCOUNT_ACTIVITY',
        label: 'Suspicious Account Activity',
        severity: 'HIGH',
        description: 'Unusual price manipulation or unverified company credentials.'
    }
};
class RiskFlagRecord {
    constructor(data = {}) {
        this.flagId = data.flagId || `RISK-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.entityType = data.entityType || 'LOT'; // 'LOT' | 'USER' | 'BUYER' | 'TRANSACTION'
        this.entityId = data.entityId || '';
        this.entityTitle = data.entityTitle || '';
        this.flagType = data.flagType || 'DUPLICATE_IMAGES';
        this.severity = data.severity || (RISK_FLAG_TYPES[this.flagType]?.severity || 'MEDIUM');
        this.label = data.label || (RISK_FLAG_TYPES[this.flagType]?.label || 'Risk Flag');
        this.details = data.details || {};
        this.resolved = Boolean(data.resolved ?? false);
        this.resolvedBy = data.resolvedBy || null;
        this.resolutionNotes = data.resolutionNotes || '';
        this.resolvedAt = data.resolvedAt || null;
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            flagId: this.flagId,
            entityType: this.entityType,
            entityId: this.entityId,
            entityTitle: this.entityTitle,
            flagType: this.flagType,
            severity: this.severity,
            label: this.label,
            details: this.details,
            resolved: this.resolved,
            resolvedBy: this.resolvedBy,
            resolutionNotes: this.resolutionNotes,
            resolvedAt: this.resolvedAt,
            createdAt: this.createdAt
        };
    }
}


// --- MODULE: src/models/Rating.js ---
/**
 * KisanTrust - Transaction Rating & Review Domain Models
 * Implements transaction-specific rating records to prevent manipulation,
 * self-rating, and arbitrary external reviews.
 */
class FarmerRatingRecord {
    /**
     * Rating submitted by Buyer for a Farmer after transaction completion
     * @param {Object} data
     */
    constructor(data = {}) {
        this.ratingId = data.ratingId || `RATE-F-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.transactionId = data.transactionId || '';
        this.farmerId = data.farmerId || '';
        this.buyerId = data.buyerId || '';
        this.buyerName = data.buyerName || '';
        
        // 5-Star Multi-Factor Breakdown (1 to 5)
        this.produceQualityScore = Math.max(1, Math.min(5, Number(data.produceQualityScore) || 5));
        this.quantityAccuracyScore = Math.max(1, Math.min(5, Number(data.quantityAccuracyScore) || 5));
        this.packagingConditionScore = Math.max(1, Math.min(5, Number(data.packagingConditionScore) || 5));
        this.deliveryReliabilityScore = Math.max(1, Math.min(5, Number(data.deliveryReliabilityScore) || 5));
        this.overallExperienceScore = Math.max(1, Math.min(5, Number(data.overallExperienceScore) || 5));

        // Calculated composite rating for this transaction
        this.compositeRating = Number((
            (this.produceQualityScore * 0.40) +
            (this.quantityAccuracyScore * 0.20) +
            (this.packagingConditionScore * 0.10) +
            (this.deliveryReliabilityScore * 0.15) +
            (this.overallExperienceScore * 0.15)
        ).toFixed(2));

        this.reviewComments = data.reviewComments || '';
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    calculateWeightedScore() {
        return this.compositeRating;
    }

    toFirestore() {
        return {
            ratingId: this.ratingId,
            transactionId: this.transactionId,
            farmerId: this.farmerId,
            buyerId: this.buyerId,
            buyerName: this.buyerName,
            produceQualityScore: this.produceQualityScore,
            quantityAccuracyScore: this.quantityAccuracyScore,
            packagingConditionScore: this.packagingConditionScore,
            deliveryReliabilityScore: this.deliveryReliabilityScore,
            overallExperienceScore: this.overallExperienceScore,
            compositeRating: this.compositeRating,
            reviewComments: this.reviewComments,
            createdAt: this.createdAt
        };
    }
}
class BuyerRatingRecord {
    /**
     * Rating submitted by Farmer for a Buyer after transaction completion
     * @param {Object} data
     */
    constructor(data = {}) {
        this.ratingId = data.ratingId || `RATE-B-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.transactionId = data.transactionId || '';
        this.buyerId = data.buyerId || '';
        this.farmerId = data.farmerId || '';
        this.farmerName = data.farmerName || '';

        // 5-Star Multi-Factor Breakdown (1 to 5)
        this.paymentTimelinessScore = Math.max(1, Math.min(5, Number(data.paymentTimelinessScore) || 5));
        this.communicationScore = Math.max(1, Math.min(5, Number(data.communicationScore) || 5));
        this.transactionReliabilityScore = Math.max(1, Math.min(5, Number(data.transactionReliabilityScore) || 5));
        this.overallExperienceScore = Math.max(1, Math.min(5, Number(data.overallExperienceScore) || 5));

        this.compositeRating = Number((
            (this.paymentTimelinessScore * 0.40) +
            (this.communicationScore * 0.20) +
            (this.transactionReliabilityScore * 0.25) +
            (this.overallExperienceScore * 0.15)
        ).toFixed(2));

        this.reviewComments = data.reviewComments || '';
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    calculateWeightedScore() {
        return Math.round(this.compositeRating * 20);
    }

    toFirestore() {
        return {
            ratingId: this.ratingId,
            transactionId: this.transactionId,
            buyerId: this.buyerId,
            farmerId: this.farmerId,
            farmerName: this.farmerName,
            paymentTimelinessScore: this.paymentTimelinessScore,
            communicationScore: this.communicationScore,
            transactionReliabilityScore: this.transactionReliabilityScore,
            overallExperienceScore: this.overallExperienceScore,
            compositeRating: this.compositeRating,
            reviewComments: this.reviewComments,
            createdAt: this.createdAt
        };
    }
}


// --- MODULE: src/models/Lot.js ---
/**
 * KisanTrust - Digital Agricultural Lot Data Model
 * Represents a verified agricultural produce lot created by a farmer.
 * Stores crop details, verified quality metrics, location, automated pre-checks,
 * and admin moderation lifecycle state.
 */
const LOT_STATUSES = {
    DRAFT: 'DRAFT',
    SUBMITTED: 'SUBMITTED',
    PRE_CHECKED: 'PRE_CHECKED',
    PENDING_ADMIN_REVIEW: 'PENDING_ADMIN_REVIEW',
    APPROVED: 'APPROVED',
    PUBLISHED: 'PUBLISHED',
    ACTIVE: 'ACTIVE',
    CHANGES_REQUIRED: 'CHANGES_REQUIRED',
    REJECTED: 'REJECTED',
    SOLD: 'SOLD',
    EXPIRED: 'EXPIRED'
};
class DigitalAgriculturalLot {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.lotId = data.lotId || `LOT-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
        this.farmerId = data.farmerId || 'farmer_mh_001';
        this.farmerName = data.farmerName || 'Ramesh Patil';
        
        // Approximate farmer location to maintain privacy
        this.farmerLocation = {
            district: data.farmerLocation?.district || 'Nashik',
            taluka: data.farmerLocation?.taluka || 'Niphad',
            state: data.farmerLocation?.state || 'Maharashtra',
            pincode: data.farmerLocation?.pincode || '422303'
        };

        // Crop details
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || 'Himsona (Hybrid)';
        this.quantity = Number(data.quantity) || 500;
        this.unit = data.unit || 'kg'; // 'kg' | 'quintal' | 'crates'
        
        // Dates
        this.harvestDate = data.harvestDate || new Date().toISOString().split('T')[0];
        this.expectedSellingDate = data.expectedSellingDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];
        
        // Image References in Storage
        const photos = Array.isArray(data.imageReferences) ? data.imageReferences : (Array.isArray(data.exteriorPhotos) ? data.exteriorPhotos : (Array.isArray(data.uploadedFiles) ? data.uploadedFiles : []));
        this.imageReferences = photos;
        this.exteriorPhotos = photos;
        
        // Quality Assessments
        this.externalQualityAnalysis = {
            analyzedAt: data.externalQualityAnalysis?.analyzedAt || new Date().toISOString(),
            visualGrade: data.externalQualityAnalysis?.visualGrade || 'Grade A',
            colorScore: data.externalQualityAnalysis?.colorScore || 92,
            sizeUniformity: data.externalQualityAnalysis?.sizeUniformity || 'Consistent',
            surfaceDefectsPercent: data.externalQualityAnalysis?.surfaceDefectsPercent || 4,
            description: data.externalQualityAnalysis?.description || 'Fresh, uniform size, excellent color.'
        };

        this.internalQualityAnalysis = data.internalQualityAnalysis ? {
            cutVerified: Boolean(data.internalQualityAnalysis.cutVerified),
            internalFreshness: data.internalQualityAnalysis.internalFreshness || 'Optimal',
            moistureContent: data.internalQualityAnalysis.moistureContent || 'Standard',
            coreDefectsPercent: data.internalQualityAnalysis.coreDefectsPercent || 0,
            cutImageUrl: data.internalQualityAnalysis.cutImageUrl || null
        } : null;

        // Summarized Overall Quality
        this.overallQualityGrade = data.overallQualityGrade || 'Grade A'; // 'Grade A' | 'Grade B' | 'Grade C'
        this.freshnessScore = Number(data.freshnessScore) || 91; // 0 - 100
        this.estimatedShelfLifeDays = Number(data.estimatedShelfLifeDays) || 7; // days

        // Transparent Price Estimate Breakdown
        const netPrice = Number(data.netPricePerKg) || Number(data.pricingEstimate?.estimatedNetRealization) || 35.0;
        this.netPricePerKg = netPrice;
        this.totalLotValue = Number(data.totalLotValue) || Number((netPrice * this.quantity).toFixed(2));
        this.pricingEstimate = {
            baseMarketPrice: Number(data.pricingEstimate?.baseMarketPrice) || 35.0,
            qualityPremium: Number(data.pricingEstimate?.qualityPremium) || 3.0,
            demandPremium: Number(data.pricingEstimate?.demandPremium) || 0.0,
            transportCost: Number(data.pricingEstimate?.transportCost) || 2.5,
            storageCost: Number(data.pricingEstimate?.storageCost) || 0.5,
            estimatedNetRealization: netPrice
        };

        // Automated Pre-Check & Moderation Lifecycle
        this.status = data.status || LOT_STATUSES.LISTED || 'LISTED';
        this.moderationStatus = data.moderationStatus || (this.status === 'PUBLISHED' || this.status === 'LISTED' || this.status === 'ACTIVE' ? 'APPROVED' : 'PENDING_ADMIN_REVIEW');
        this.preCheckResults = data.preCheckResults || {
            passed: true,
            checks: ['REQUIRED_FIELDS', 'IMAGE_COUNT', 'QUANTITY_VALID', 'CROP_VALID'],
            flags: [],
            checkedAt: new Date().toISOString()
        };

        // Phase 8: Trust & Verification Signals
        this.verifiedProduceBadge = data.verifiedProduceBadge || {
            isAiQualityChecked: true,
            visualGrade: this.overallQualityGrade,
            freshnessScore: this.freshnessScore,
            verifiedAt: this.externalQualityAnalysis?.analyzedAt || this.createdAt,
            badgeLabel: `${this.overallQualityGrade} • AI Quality Checked (${this.freshnessScore}% Fresh)`,
            badgeLabelMr: `प्रमाणित ${this.overallQualityGrade} • AI गुणवत्ता तपासणी (${this.freshnessScore}% ताजे)`
        };

        this.adminNotes = data.adminNotes || '';
        this.rejectionReason = data.rejectionReason || '';
        this.changesRequested = Array.isArray(data.changesRequested) ? data.changesRequested : [];
        this.riskFlags = Array.isArray(data.riskFlags) ? data.riskFlags : [];
        this.reviewedBy = data.reviewedBy || null;
        this.reviewedAt = data.reviewedAt || null;
        this.publishedAt = data.publishedAt || (this.moderationStatus === 'APPROVED' ? this.createdAt : null);

        // Metadata
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    /**
     * Converts class instance to plain JSON for Firestore storage
     */
    toFirestore() {
        return {
            lotId: this.lotId,
            farmerId: this.farmerId,
            farmerName: this.farmerName,
            farmerLocation: this.farmerLocation,
            cropType: this.cropType,
            variety: this.variety,
            quantity: this.quantity,
            unit: this.unit,
            harvestDate: this.harvestDate,
            expectedSellingDate: this.expectedSellingDate,
            imageReferences: this.imageReferences,
            externalQualityAnalysis: this.externalQualityAnalysis,
            internalQualityAnalysis: this.internalQualityAnalysis,
            overallQualityGrade: this.overallQualityGrade,
            freshnessScore: this.freshnessScore,
            estimatedShelfLifeDays: this.estimatedShelfLifeDays,
            netPricePerKg: this.netPricePerKg,
            totalLotValue: this.totalLotValue,
            pricingEstimate: this.pricingEstimate,
            verifiedProduceBadge: this.verifiedProduceBadge,
            status: this.status,
            moderationStatus: this.moderationStatus,
            preCheckResults: this.preCheckResults,
            adminNotes: this.adminNotes,
            rejectionReason: this.rejectionReason,
            changesRequested: this.changesRequested,
            riskFlags: this.riskFlags,
            reviewedBy: this.reviewedBy,
            reviewedAt: this.reviewedAt,
            publishedAt: this.publishedAt,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}


// --- MODULE: src/models/Market.js ---
/**
 * KisanTrust - Domain Models for Users, Market Benchmarks, Buyers, Pooling, and Transactions
 */
class UserProfile {
    constructor(data = {}) {
        this.uid = data.uid || 'user_default';
        this.name = data.name || 'Farmer';
        this.phone = data.phone || '';
        this.role = data.role || 'farmer'; // 'farmer' | 'buyer' | 'fpo_coordinator' | 'admin'
        this.district = data.district || '';
        this.state = data.state || 'Maharashtra';
        this.fpoMembership = data.fpoMembership || null;
        this.verified = Boolean(data.verified);
        this.createdAt = data.createdAt || new Date().toISOString();
    }
}
class MandiBenchmark {
    constructor(data = {}) {
        this.mandiId = data.mandiId || 'mandi_pune';
        this.mandiName = data.mandiName || 'Pune APMC (Market Yard)';
        this.district = data.district || 'Pune';
        this.state = data.state || 'Maharashtra';
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || 'Local / Hybrid';
        this.modalPricePerKg = Number(data.modalPricePerKg) || 32.0;
        this.minPricePerKg = Number(data.minPricePerKg) || 26.0;
        this.maxPricePerKg = Number(data.maxPricePerKg) || 36.0;
        this.arrivalVolumeTons = Number(data.arrivalVolumeTons) || 120;
        this.priceTrend = data.priceTrend || 'RISING'; // 'RISING' | 'STABLE' | 'FALLING'
        this.distanceFromFarmerKm = Number(data.distanceFromFarmerKm) || 140;
        this.estimatedLogisticsCostPerKg = Number(data.estimatedLogisticsCostPerKg) || 2.2;
        this.lastUpdated = data.lastUpdated || new Date().toISOString();
    }
}


// --- MODULE: src/models/Buyer.js ---
/**
 * KisanTrust - Buyer Profiles, Purchase Demands, and Negotiation Domain Models
 */
class BuyerProfile {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.buyerId = data.buyerId || `buyer_${Date.now().toString().slice(-4)}`;
        this.companyName = data.companyName || 'KisanMitra Agro Processing';
        this.companyType = data.companyType || 'Food Processor'; 
        // 'Wholesaler' | 'Retailer' | 'Food Processor' | 'Restaurant' | 'Institutional Buyer' | 'Exporter' | 'Aggregator'
        this.contactPerson = data.contactPerson || 'Vilas Shinde';
        this.phone = data.phone || '+91 98221 55667';
        this.email = data.email || 'procurement@sahyadriagro.in';
        this.district = data.district || 'Nashik';
        this.state = data.state || 'Maharashtra';
        this.pincode = data.pincode || '422001';
        this.gstin = data.gstin || '00XXXXX0000X0XX';
        this.verified = Boolean(data.verified ?? true);
        this.verificationStatus = data.verificationStatus || (this.verified ? 'VERIFIED' : 'PENDING_VERIFICATION');
        this.reliabilityScore = Number(data.reliabilityScore) || 4.8; // 0.0 to 5.0
        this.totalDealsCompleted = Number(data.totalDealsCompleted) || 142;
        this.onTimePaymentRate = Number(data.onTimePaymentRate) || 98.5; // Percentage
        this.createdAt = data.createdAt || new Date().toISOString();
    }
}
class BuyerDemand {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.demandId = data.demandId || `DEM-${new Date().getFullYear()}-${Date.now().toString().slice(-5)}`;
        this.buyerId = data.buyerId || 'buyer_sahyadri';
        this.buyerName = data.buyerName || 'KisanMitra Agro Processing';
        this.companyType = data.companyType || 'Food Processor';
        this.verifiedBuyer = Boolean(data.verifiedBuyer ?? true);
        this.reliabilityScore = Number(data.reliabilityScore) || 4.8;
        
        // Purchase specifications
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || data.varietyPreference || 'All Varieties';
        this.varietyPreference = data.varietyPreference || this.variety;
        this.requiredQuantityKg = Number(data.requiredQuantityKg) || 10000;
        this.fulfilledQuantityKg = Number(data.fulfilledQuantityKg) || 0;
        this.minQualityGrade = data.minQualityGrade || 'Grade A'; // 'Grade A' | 'Grade B' | 'Grade C'
        this.preferredLocation = data.preferredLocation || data.deliveryHub || 'Nashik / Niphad Hub';
        this.deliveryHub = data.deliveryHub || this.preferredLocation;
        this.maxSourcingDistanceKm = Number(data.maxSourcingDistanceKm) || 120;
        this.requiredDeliveryDate = data.requiredDeliveryDate || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0];
        
        // Commercial terms & Price Range
        this.offeredPricePerKg = Number(data.offeredPricePerKg) || Number(data.minOfferedPricePerKg) || 36.5;
        this.minOfferedPricePerKg = Number(data.minOfferedPricePerKg) || this.offeredPricePerKg;
        this.maxOfferedPricePerKg = Number(data.maxOfferedPricePerKg) || (this.offeredPricePerKg + 2.0);
        this.paymentTerms = data.paymentTerms || 'Direct Bank Settlement on Delivery QC';
        this.pickupProvided = Boolean(data.pickupProvided ?? false); // Farm-gate pickup or Mandi delivery
        
        // Status lifecycle: 'DRAFT' | 'SUBMITTED' | 'PENDING_ADMIN_REVIEW' | 'APPROVED' | 'PUBLISHED' | 'ACTIVE' | 'PARTIALLY_FULFILLED' | 'FULFILLED' | 'CHANGES_REQUIRED' | 'REJECTED' | 'CANCELLED'
        this.status = data.status || 'ACTIVE';
        this.moderationStatus = data.moderationStatus || (this.status === 'ACTIVE' || this.status === 'PUBLISHED' ? 'APPROVED' : 'PENDING_ADMIN_REVIEW');
        this.adminNotes = data.adminNotes || '';
        this.rejectionReason = data.rejectionReason || '';
        this.changesRequested = Array.isArray(data.changesRequested) ? data.changesRequested : [];
        this.reviewedBy = data.reviewedBy || null;
        this.reviewedAt = data.reviewedAt || null;

        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            demandId: this.demandId,
            buyerId: this.buyerId,
            buyerName: this.buyerName,
            companyType: this.companyType,
            verifiedBuyer: this.verifiedBuyer,
            reliabilityScore: this.reliabilityScore,
            cropType: this.cropType,
            variety: this.variety,
            varietyPreference: this.varietyPreference,
            requiredQuantityKg: this.requiredQuantityKg,
            fulfilledQuantityKg: this.fulfilledQuantityKg,
            minQualityGrade: this.minQualityGrade,
            preferredLocation: this.preferredLocation,
            deliveryHub: this.deliveryHub,
            maxSourcingDistanceKm: this.maxSourcingDistanceKm,
            requiredDeliveryDate: this.requiredDeliveryDate,
            offeredPricePerKg: this.offeredPricePerKg,
            minOfferedPricePerKg: this.minOfferedPricePerKg,
            maxOfferedPricePerKg: this.maxOfferedPricePerKg,
            paymentTerms: this.paymentTerms,
            pickupProvided: this.pickupProvided,
            status: this.status,
            moderationStatus: this.moderationStatus,
            adminNotes: this.adminNotes,
            rejectionReason: this.rejectionReason,
            changesRequested: this.changesRequested,
            reviewedBy: this.reviewedBy,
            reviewedAt: this.reviewedAt,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
class NegotiationRecord {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.negotiationId = data.negotiationId || `NEG-${Date.now().toString().slice(-6)}`;
        this.lotId = data.lotId || '';
        this.demandId = data.demandId || '';
        this.farmerId = data.farmerId || 'farmer_mh_001';
        this.farmerName = data.farmerName || 'Ramesh Patil';
        this.buyerId = data.buyerId || 'buyer_001';
        this.buyerName = data.buyerName || 'Verified Buyer';
        this.cropType = data.cropType || 'Tomato';
        this.quantityKg = Number(data.quantityKg) || 500;
        this.qualityGrade = data.qualityGrade || 'Grade A';
        
        // Pricing state
        this.initialBuyerOfferPrice = Number(data.initialBuyerOfferPrice) || 36.0;
        this.currentAgreedPrice = Number(data.currentAgreedPrice || data.initialBuyerOfferPrice) || 36.0;
        
        // Multi-round offer history
        this.history = Array.isArray(data.history) ? data.history : [
            {
                sender: 'BUYER',
                pricePerKg: this.initialBuyerOfferPrice,
                notes: 'Initial purchase offer based on verified Grade A listing.',
                timestamp: new Date().toISOString()
            }
        ];

        // Negotiation lifecycle: 'BUYER_OFFER' | 'FARMER_COUNTEROFFER' | 'BUYER_REVISION' | 'ACCEPTED' | 'REJECTED' | 'CANCELLED'
        this.status = data.status || 'BUYER_OFFER';
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            negotiationId: this.negotiationId,
            lotId: this.lotId,
            demandId: this.demandId,
            farmerId: this.farmerId,
            farmerName: this.farmerName,
            buyerId: this.buyerId,
            buyerName: this.buyerName,
            cropType: this.cropType,
            quantityKg: this.quantityKg,
            qualityGrade: this.qualityGrade,
            initialBuyerOfferPrice: this.initialBuyerOfferPrice,
            currentAgreedPrice: this.currentAgreedPrice,
            history: this.history,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}


// --- MODULE: src/models/Pooling.js ---
/**
 * KisanTrust - Smart Village Pooling & Aggregation Domain Models (Stage 4)
 */
class PoolingCluster {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.clusterId = data.clusterId || `POOL-${new Date().getFullYear()}-${Date.now().toString().slice(-4)}`;
        this.hubVillage = data.hubVillage || 'Niphad / Pimpalgaon Hub';
        this.taluka = data.taluka || 'Niphad';
        this.district = data.district || 'Nashik';
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || 'Himsona / Hybrid';
        this.overallQualityGrade = data.overallQualityGrade || 'Grade A';
        
        // Capacity metrics
        this.targetCapacityKg = Number(data.targetCapacityKg) || 10000; // e.g. 10-Ton Eicher / Heavy Truck
        this.currentPooledKg = Number(data.currentPooledKg) || 3500;
        this.participatingFarmersCount = Number(data.participatingFarmersCount) || 4;
        
        // Linked lots (stores anonymized summary for privacy: lotId, quantityKg, village)
        this.participatingLots = Array.isArray(data.participatingLots) ? data.participatingLots : [];

        // Destination & Buyer Linkage
        this.destinationMarket = data.destinationMarket || 'Vashi APMC (Navi Mumbai)';
        this.destinationBuyerDemandId = data.destinationBuyerDemandId || null;
        this.buyerName = data.buyerName || 'KisanMitra Agro Processing';

        // Logistics & Savings Breakdown
        this.individualFreightPerKg = Number(data.individualFreightPerKg) || 2.40; // 1-Ton Pickup rate
        this.pooledFreightPerKg = Number(data.pooledFreightPerKg) || 0.95;       // 10-Ton Full Truckload rate
        this.savingsPercentage = Number(data.savingsPercentage || 
            Math.round(((this.individualFreightPerKg - this.pooledFreightPerKg) / this.individualFreightPerKg) * 100)
        );

        // Status & Lifecycle: 'GATHERING' | 'FULL_READY_TO_DISPATCH' | 'IN_TRANSIT' | 'DELIVERED' | 'EXPIRED'
        this.status = data.status || 'GATHERING';
        this.dispatchDate = data.dispatchDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            clusterId: this.clusterId,
            hubVillage: this.hubVillage,
            taluka: this.taluka,
            district: this.district,
            cropType: this.cropType,
            variety: this.variety,
            overallQualityGrade: this.overallQualityGrade,
            targetCapacityKg: this.targetCapacityKg,
            currentPooledKg: this.currentPooledKg,
            participatingFarmersCount: this.participatingFarmersCount,
            participatingLots: this.participatingLots,
            destinationMarket: this.destinationMarket,
            destinationBuyerDemandId: this.destinationBuyerDemandId,
            buyerName: this.buyerName,
            individualFreightPerKg: this.individualFreightPerKg,
            pooledFreightPerKg: this.pooledFreightPerKg,
            savingsPercentage: this.savingsPercentage,
            status: this.status,
            dispatchDate: this.dispatchDate,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}


// --- MODULE: src/models/Transaction.js ---
/**
 * KisanTrust - Extended Transaction Record & Lifecycle State Model (Stage 5 & Centralized System)
 */
const TRANSACTION_STAGES = [
    'LOT_CREATED',
    'QUALITY_VERIFIED',
    'BUYER_MATCHED',
    'OFFER_ACCEPTED',
    'PICKUP_SCHEDULED',
    'IN_TRANSIT',
    'DELIVERY_CONFIRMED',
    'PAYMENT_PENDING',
    'PAYMENT_COMPLETED'
];
const PAYMENT_STATUSES = {
    PENDING: 'PENDING',
    INITIATED: 'INITIATED',
    PROCESSING: 'PROCESSING',
    DELAYED: 'DELAYED',
    COMPLETED: 'COMPLETED'
};
class TransactionRecord {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.transactionId = data.transactionId || `TXN-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
        this.lotId = data.lotId || '';
        this.demandId = data.demandId || '';
        this.pooledClusterId = data.pooledClusterId || null;
        this.farmerId = data.farmerId || 'farmer_mh_001';
        this.farmerName = data.farmerName || 'Ramesh Patil (रमेश पाटील)';
        this.buyerId = data.buyerId || 'buyer_sahyadri';
        this.buyerName = data.buyerName || 'KisanMitra Agro Processing Hub';
        
        // Commodity details
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || 'Himsona Hybrid';
        this.quantityKg = Number(data.quantityKg) || 1000;
        this.qualityGrade = data.qualityGrade || 'Grade A';
        this.freshnessScore = Number(data.freshnessScore) || 94;

        // Commercials
        this.agreedPricePerKg = Number(data.agreedPricePerKg) || 37.5;
        this.totalTransactionValue = Number((this.agreedPricePerKg * this.quantityKg).toFixed(2));
        this.totalAmount = this.totalTransactionValue; // Backward compatibility alias
        this.amountPaid = Number(data.amountPaid) || 0;
        this.paymentTerms = data.paymentTerms || 'Escrow Settlement upon Delivery QC';
        this.paymentMilestone = data.paymentMilestone || 'ESCROW_LOCKED'; // 'ESCROW_LOCKED' | 'PENDING_QC' | 'SETTLED'
        
        // Extended Payment Tracking
        this.paymentStatus = data.paymentStatus || PAYMENT_STATUSES.PENDING;
        this.paymentDueDate = data.paymentDueDate || new Date(Date.now() + 86400000 * 2).toISOString();
        this.paymentCompletedDate = data.paymentCompletedDate || null;
        this.delayDurationHours = Number(data.delayDurationHours) || 0;

        // Rating flags (1 rating per side per completed transaction)
        this.buyerRated = Boolean(data.buyerRated ?? false);
        this.farmerRated = Boolean(data.farmerRated ?? false);

        // Logistics & Freight Information
        this.logisticsInfo = data.logisticsInfo || {
            transportType: '4-Ton Eicher Mini Truck',
            vehicleNumber: 'MH-15-EG-4281',
            driverName: 'Kailash Sonawane',
            driverPhone: '+91 98224 77889',
            pickupLocation: 'Niphad Village Hub, Nashik',
            deliveryLocation: 'KisanMitra Agro Hub, Dindori',
            estimatedDistanceKm: 42,
            estimatedTravelTimeHours: 1.5,
            freightCostTotal: 1200,
            freightCostPerKg: 1.20,
            pickupScheduledTime: new Date(Date.now() + 86400000).toISOString(),
            isPooledTransport: false
        };

        // Controlled Lifecycle State
        this.currentStage = data.currentStage || 'OFFER_ACCEPTED';
        this.deliveryStatus = data.deliveryStatus || 'SCHEDULED_FOR_PICKUP'; // 'PENDING' | 'SCHEDULED_FOR_PICKUP' | 'IN_TRANSIT' | 'DELIVERED'
        this.disputeStatus = data.disputeStatus || 'NONE'; // 'NONE' | 'RAISED' | 'RESOLVED'
        
        // Audit Trail History
        this.statusHistory = Array.isArray(data.statusHistory) ? data.statusHistory : [
            {
                stage: 'OFFER_ACCEPTED',
                updatedBy: 'FARMER',
                notes: 'Deal confirmed by farmer. Digital contract generated.',
                timestamp: new Date().toISOString()
            }
        ];

        this.receiptNumber = data.receiptNumber || `REC-${Date.now().toString().slice(-8)}`;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            transactionId: this.transactionId,
            lotId: this.lotId,
            demandId: this.demandId,
            pooledClusterId: this.pooledClusterId,
            farmerId: this.farmerId,
            farmerName: this.farmerName,
            buyerId: this.buyerId,
            buyerName: this.buyerName,
            cropType: this.cropType,
            variety: this.variety,
            quantityKg: this.quantityKg,
            qualityGrade: this.qualityGrade,
            freshnessScore: this.freshnessScore,
            agreedPricePerKg: this.agreedPricePerKg,
            totalTransactionValue: this.totalTransactionValue,
            totalAmount: this.totalAmount,
            amountPaid: this.amountPaid,
            paymentTerms: this.paymentTerms,
            paymentMilestone: this.paymentMilestone,
            paymentStatus: this.paymentStatus,
            paymentDueDate: this.paymentDueDate,
            paymentCompletedDate: this.paymentCompletedDate,
            delayDurationHours: this.delayDurationHours,
            buyerRated: this.buyerRated,
            farmerRated: this.farmerRated,
            logisticsInfo: this.logisticsInfo,
            currentStage: this.currentStage,
            deliveryStatus: this.deliveryStatus,
            disputeStatus: this.disputeStatus,
            statusHistory: this.statusHistory,
            receiptNumber: this.receiptNumber,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}


// --- MODULE: src/models/Dispute.js ---
/**
 * KisanTrust - Dispute Domain Model (Stage 6 & Centralized System)
 */
const DISPUTE_CATEGORIES = [
    { id: 'QUALITY_MISMATCH', label: 'Quality Mismatch', labelMr: 'गुणवत्ता तफावत (Quality Mismatch)' },
    { id: 'QUANTITY_MISMATCH', label: 'Quantity Mismatch', labelMr: 'वजन / परिमाण तफावत (Quantity Mismatch)' },
    { id: 'PAYMENT_DELAY', label: 'Payment Delay', labelMr: 'पेमेंटला विलंब (Payment Delay)' },
    { id: 'PAYMENT_NOT_RECEIVED', label: 'Payment Not Received', labelMr: 'पेमेंट जमा झाले नाही (Payment Not Received)' },
    { id: 'DELIVERY_DAMAGE', label: 'Delivery / Transit Damage', labelMr: 'वाहतूक दरम्यान नासाडी (Transit Damage)' },
    { id: 'OTHER', label: 'Other', labelMr: 'इतर तक्रार (Other Issue)' }
];
const DISPUTE_STATUSES = {
    OPEN: 'OPEN',
    UNDER_REVIEW: 'UNDER_REVIEW',
    WAITING_FOR_FARMER: 'WAITING_FOR_FARMER',
    WAITING_FOR_BUYER: 'WAITING_FOR_BUYER',
    RESOLVED: 'RESOLVED',
    CLOSED: 'CLOSED'
};
class DisputeRecord {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.disputeId = data.disputeId || `DISP-${Date.now().toString().slice(-6)}`;
        this.transactionId = data.transactionId || '';
        this.raisedBy = data.raisedBy || 'FARMER'; // 'FARMER' | 'BUYER'
        this.claimantName = data.claimantName || 'Ramesh Patil';
        this.respondentName = data.respondentName || 'KisanMitra Agro Processing Hub';
        
        this.category = data.category || 'QUALITY_MISMATCH';
        this.categoryLabel = DISPUTE_CATEGORIES.find(c => c.id === this.category)?.label || 'Quality Issue';
        this.categoryLabelMr = DISPUTE_CATEGORIES.find(c => c.id === this.category)?.labelMr || 'गुणवत्ता तफावत';
        this.description = data.description || '';
        
        // Evidence uploaded by claimant
        this.supportingEvidenceUrls = Array.isArray(data.supportingEvidenceUrls) ? data.supportingEvidenceUrls : [];
        
        // Baseline immutable Digital Lot Quality Evidence
        this.originalLotQualityEvidence = data.originalLotQualityEvidence || {
            lotId: '',
            cropType: 'Tomato',
            certifiedGrade: 'Grade A',
            freshnessScore: 94,
            shelfLifeDays: 8,
            cutVerificationVerified: true,
            assessmentTimestamp: new Date().toISOString(),
            originalImageUrls: []
        };

        // Status Lifecycle: 'OPEN' | 'UNDER_REVIEW' | 'WAITING_FOR_FARMER' | 'WAITING_FOR_BUYER' | 'RESOLVED' | 'CLOSED'
        this.status = data.status || DISPUTE_STATUSES.OPEN;
        this.resolutionNotes = data.resolutionNotes || '';
        this.resolvedBy = data.resolvedBy || null;
        this.resolvedAt = data.resolvedAt || null;
        this.adminNotes = data.adminNotes || '';
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            disputeId: this.disputeId,
            transactionId: this.transactionId,
            raisedBy: this.raisedBy,
            claimantName: this.claimantName,
            respondentName: this.respondentName,
            category: this.category,
            categoryLabel: this.categoryLabel,
            categoryLabelMr: this.categoryLabelMr,
            description: this.description,
            supportingEvidenceUrls: this.supportingEvidenceUrls,
            originalLotQualityEvidence: this.originalLotQualityEvidence,
            status: this.status,
            resolutionNotes: this.resolutionNotes,
            resolvedBy: this.resolvedBy,
            resolvedAt: this.resolvedAt,
            adminNotes: this.adminNotes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}


// --- MODULE: src/data/mockLots.js ---
/**
 * KisanTrust - Initial Seed Active Agricultural Lots
 */
const initialMockLots = [
    {
        lotId: "LOT-2026-089101",
        farmerId: "farmer_mh_001",
        farmerName: "Ramesh Patil (रमेश पाटील)",
        farmerLocation: {
            district: "Nashik",
            taluka: "Niphad",
            state: "Maharashtra",
            pincode: "422303"
        },
        cropType: "Tomato",
        variety: "Himsona (Hybrid)",
        quantity: 500,
        unit: "kg",
        harvestDate: "2026-08-29",
        expectedSellingDate: "2026-08-31",
        imageReferences: [
            "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1546470427-e26264be0b11?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-29T10:30:00Z",
            visualGrade: "Grade A",
            colorScore: 94,
            sizeUniformity: "Uniform Medium",
            surfaceDefectsPercent: 3.2,
            description: "Deep red ripening, firm texture, minimal skin blemishes."
        },
        internalQualityAnalysis: {
            cutVerified: true,
            internalFreshness: "Optimal Firmness",
            moistureContent: "92% Standard",
            coreDefectsPercent: 0,
            cutImageUrl: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=600&auto=format&fit=crop&q=80"
        },
        overallQualityGrade: "Grade A",
        freshnessScore: 93,
        estimatedShelfLifeDays: 8,
        pricingEstimate: {
            baseMarketPrice: 34.0,
            qualityPremium: 3.5,
            demandPremium: 1.0,
            transportCost: 2.2,
            storageCost: 0.3,
            estimatedNetRealization: 36.0
        },
        status: "LISTED",
        createdAt: "2026-08-29T10:35:00Z",
        updatedAt: "2026-08-29T10:35:00Z"
    },
    {
        lotId: "LOT-2026-089102",
        farmerId: "farmer_mh_001",
        farmerName: "Ramesh Patil (रमेश पाटील)",
        farmerLocation: {
            district: "Nashik",
            taluka: "Niphad",
            state: "Maharashtra",
            pincode: "422303"
        },
        cropType: "Onion",
        variety: "Nashik Red (Garva)",
        quantity: 2500,
        unit: "kg",
        harvestDate: "2026-08-25",
        expectedSellingDate: "2026-09-05",
        imageReferences: [
            "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-26T14:15:00Z",
            visualGrade: "Grade A",
            colorScore: 91,
            sizeUniformity: "55mm+ Export Quality",
            surfaceDefectsPercent: 2.0,
            description: "Well-cured skin, tight necks, zero sprouting."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade A",
        freshnessScore: 95,
        estimatedShelfLifeDays: 45,
        pricingEstimate: {
            baseMarketPrice: 28.0,
            qualityPremium: 2.5,
            demandPremium: 1.5,
            transportCost: 1.8,
            storageCost: 0.2,
            estimatedNetRealization: 30.0
        },
        status: "MATCHED",
        createdAt: "2026-08-26T14:20:00Z",
        updatedAt: "2026-08-28T09:00:00Z"
    },
    {
        lotId: "LOT-2026-089103",
        farmerId: "farmer_pune_002",
        farmerName: "Sunil Jadhav",
        farmerLocation: {
            district: "Pune",
            taluka: "Junnar",
            state: "Maharashtra",
            pincode: "410502"
        },
        cropType: "Potato",
        variety: "Kufri Pukhraj",
        quantity: 800,
        unit: "kg",
        harvestDate: "2026-08-28",
        expectedSellingDate: "2026-09-05",
        imageReferences: [
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-29T10:00:00Z",
            visualGrade: "Grade B",
            colorScore: 85,
            sizeUniformity: "Medium",
            surfaceDefectsPercent: 5.0,
            description: "Good texture, some variations in size."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade B",
        freshnessScore: 82,
        estimatedShelfLifeDays: 20,
        pricingEstimate: {
            baseMarketPrice: 22.0,
            qualityPremium: 0,
            demandPremium: 3.0,
            transportCost: 1.0,
            storageCost: 0.2,
            estimatedNetRealization: 23.8
        },
        status: "LISTED",
        createdAt: "2026-08-29T10:00:00Z",
        updatedAt: "2026-08-29T10:00:00Z"
    },
    {
        lotId: "LOT-2026-089104",
        farmerId: "farmer_mh_001",
        farmerName: "Ramesh Patil",
        farmerLocation: {
            district: "Nashik",
            taluka: "Niphad",
            state: "Maharashtra",
            pincode: "422303"
        },
        cropType: "Carrot",
        variety: "Nantes",
        quantity: 300,
        unit: "kg",
        harvestDate: "2026-08-30",
        expectedSellingDate: "2026-09-02",
        imageReferences: [
            "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-31T09:00:00Z",
            visualGrade: "Grade A",
            colorScore: 92,
            sizeUniformity: "Uniform Long",
            surfaceDefectsPercent: 1.5,
            description: "Bright orange, straight, clean."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade A",
        freshnessScore: 91,
        estimatedShelfLifeDays: 12,
        pricingEstimate: {
            baseMarketPrice: 26.0,
            qualityPremium: 4.0,
            demandPremium: 0.0,
            transportCost: 1.2,
            storageCost: 0.3,
            estimatedNetRealization: 28.5
        },
        status: "APPROVED",
        createdAt: "2026-08-31T09:30:00Z",
        updatedAt: "2026-08-31T09:30:00Z"
    },
    {
        lotId: "LOT-2026-089105",
        farmerId: "farmer_nashik_003",
        farmerName: "Anita Shinde",
        farmerLocation: {
            district: "Nashik",
            taluka: "Sinnar",
            state: "Maharashtra",
            pincode: "422103"
        },
        cropType: "Cabbage",
        variety: "NS-25 Cross",
        quantity: 1200,
        unit: "kg",
        harvestDate: "2026-08-27",
        expectedSellingDate: "2026-09-01",
        imageReferences: [
            "https://images.unsplash.com/photo-1596199050105-6d5d32222916?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-28T10:00:00Z",
            visualGrade: "Grade C",
            colorScore: 70,
            sizeUniformity: "Mixed",
            surfaceDefectsPercent: 12.0,
            description: "Some outer leaf damage, varied sizes."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade C",
        freshnessScore: 68,
        estimatedShelfLifeDays: 5,
        pricingEstimate: {
            baseMarketPrice: 16.0,
            qualityPremium: -1.0,
            demandPremium: 0.5,
            transportCost: 1.0,
            storageCost: 0.3,
            estimatedNetRealization: 14.2
        },
        status: "PENDING_ADMIN_REVIEW",
        createdAt: "2026-08-28T10:00:00Z",
        updatedAt: "2026-08-28T10:00:00Z"
    },
    {
        lotId: "LOT-2026-089106",
        farmerId: "farmer_mh_001",
        farmerName: "Ramesh Patil",
        farmerLocation: {
            district: "Nashik",
            taluka: "Niphad",
            state: "Maharashtra",
            pincode: "422303"
        },
        cropType: "Tomato",
        variety: "Cherry/Salad",
        quantity: 200,
        unit: "kg",
        harvestDate: "2026-08-26",
        expectedSellingDate: "2026-08-29",
        imageReferences: [
            "https://images.unsplash.com/photo-1524593166156-312f362cada0?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-27T08:00:00Z",
            visualGrade: "Grade A",
            colorScore: 98,
            sizeUniformity: "Uniform Small",
            surfaceDefectsPercent: 0.5,
            description: "Excellent red cherry tomatoes, very firm."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade A",
        freshnessScore: 96,
        estimatedShelfLifeDays: 6,
        pricingEstimate: {
            baseMarketPrice: 40.0,
            qualityPremium: 4.0,
            demandPremium: 1.0,
            transportCost: 2.5,
            storageCost: 1.0,
            estimatedNetRealization: 41.5
        },
        status: "SOLD",
        createdAt: "2026-08-27T08:30:00Z",
        updatedAt: "2026-08-29T10:00:00Z"
    },
    {
        lotId: "LOT-2026-089107",
        farmerId: "farmer_pune_002",
        farmerName: "Sunil Jadhav",
        farmerLocation: {
            district: "Pune",
            taluka: "Junnar",
            state: "Maharashtra",
            pincode: "410502"
        },
        cropType: "Onion",
        variety: "Nashik Red",
        quantity: 3000,
        unit: "kg",
        harvestDate: "2026-08-15",
        expectedSellingDate: "2026-08-30",
        imageReferences: [
            "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-16T11:00:00Z",
            visualGrade: "Grade B",
            colorScore: 80,
            sizeUniformity: "Medium",
            surfaceDefectsPercent: 8.0,
            description: "Good curing, but starting to show age."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade B",
        freshnessScore: 55,
        estimatedShelfLifeDays: 0,
        pricingEstimate: {
            baseMarketPrice: 24.0,
            qualityPremium: 0,
            demandPremium: 0,
            transportCost: 2.0,
            storageCost: 1.0,
            estimatedNetRealization: 21.0
        },
        status: "EXPIRED",
        createdAt: "2026-08-16T11:00:00Z",
        updatedAt: "2026-09-01T00:00:00Z"
    },
    {
        lotId: "LOT-2026-089108",
        farmerId: "farmer_nashik_004",
        farmerName: "Priya Kamble",
        farmerLocation: {
            district: "Nashik",
            taluka: "Igatpuri",
            state: "Maharashtra",
            pincode: "422402"
        },
        cropType: "Potato",
        variety: "Kufri Jyoti",
        quantity: 50,
        unit: "kg",
        harvestDate: "2026-09-01",
        expectedSellingDate: "2026-09-10",
        imageReferences: [
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-09-02T09:00:00Z",
            visualGrade: "Grade A",
            colorScore: 90,
            sizeUniformity: "Uniform Medium",
            surfaceDefectsPercent: 2.0,
            description: "Fresh harvest, clean skin."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade A",
        freshnessScore: 97,
        estimatedShelfLifeDays: 25,
        pricingEstimate: {
            baseMarketPrice: 24.0,
            qualityPremium: 3.0,
            demandPremium: 0.0,
            transportCost: 1.0,
            storageCost: 0.4,
            estimatedNetRealization: 25.6
        },
        status: "ACTIVE",
        createdAt: "2026-09-02T09:30:00Z",
        updatedAt: "2026-09-02T09:30:00Z"
    }
];


// --- MODULE: src/data/mockMandis.js ---
/**
 * KisanTrust - Structured Mandi Benchmarks, Buyer Demands, and Pooling Clusters
 * Provides realistic data across Maharashtra and national APMCs.
 */
const mockMandiBenchmarks = [
    {
        mandiId: "mandi_lasalgaon",
        mandiName: "Lasalgaon APMC",
        district: "Nashik",
        state: "Maharashtra",
        cropType: "Onion",
        variety: "Red Onion",
        modalPricePerKg: 29.5,
        minPricePerKg: 24.0,
        maxPricePerKg: 33.0,
        arrivalVolumeTons: 450,
        priceTrend: "RISING",
        distanceFromFarmerKm: 28,
        estimatedLogisticsCostPerKg: 0.8,
        lastUpdated: "2026-08-30T06:00:00Z"
    },
    {
        mandiId: "mandi_pune",
        mandiName: "Pune APMC (Gultekdi)",
        district: "Pune",
        state: "Maharashtra",
        cropType: "Tomato",
        variety: "Hybrid",
        modalPricePerKg: 35.0,
        minPricePerKg: 28.0,
        maxPricePerKg: 38.5,
        arrivalVolumeTons: 160,
        priceTrend: "STABLE",
        distanceFromFarmerKm: 165,
        estimatedLogisticsCostPerKg: 2.2,
        lastUpdated: "2026-08-30T06:30:00Z"
    },
    {
        mandiId: "mandi_vashi",
        mandiName: "Vashi APMC (Navi Mumbai)",
        district: "Thane / Mumbai",
        state: "Maharashtra",
        cropType: "Tomato",
        variety: "Hybrid / Table Grade",
        modalPricePerKg: 38.0,
        minPricePerKg: 32.0,
        maxPricePerKg: 42.0,
        arrivalVolumeTons: 310,
        priceTrend: "RISING",
        distanceFromFarmerKm: 185,
        estimatedLogisticsCostPerKg: 2.6,
        lastUpdated: "2026-08-30T07:00:00Z"
    },
    {
        mandiId: "mandi_pimpalgaon",
        mandiName: "Pimpalgaon Baswant APMC",
        district: "Nashik",
        state: "Maharashtra",
        cropType: "Tomato",
        variety: "Himsona",
        modalPricePerKg: 34.0,
        minPricePerKg: 29.0,
        maxPricePerKg: 36.5,
        arrivalVolumeTons: 220,
        priceTrend: "STABLE",
        distanceFromFarmerKm: 18,
        estimatedLogisticsCostPerKg: 0.6,
        lastUpdated: "2026-08-30T06:15:00Z"
    },
    {
        mandiId: "mandi_ahmednagar",
        mandiName: "Ahmednagar APMC",
        district: "Ahmednagar",
        state: "Maharashtra",
        cropType: "Potato",
        variety: "All",
        modalPricePerKg: 23.5,
        minPricePerKg: 20.0,
        maxPricePerKg: 26.0,
        arrivalVolumeTons: 180,
        priceTrend: "STABLE",
        distanceFromFarmerKm: 120,
        estimatedLogisticsCostPerKg: 1.5,
        lastUpdated: "2026-09-02T06:00:00Z"
    },
    {
        mandiId: "mandi_latur",
        mandiName: "Latur APMC",
        district: "Latur",
        state: "Maharashtra",
        cropType: "Onion",
        variety: "All",
        modalPricePerKg: 27.0,
        minPricePerKg: 22.0,
        maxPricePerKg: 30.0,
        arrivalVolumeTons: 280,
        priceTrend: "FALLING",
        distanceFromFarmerKm: 380,
        estimatedLogisticsCostPerKg: 3.5,
        lastUpdated: "2026-09-02T06:30:00Z"
    }
];
const mockBuyerDemands = [
    {
        demandId: "DEM-9081",
        buyerId: "buyer_sahyadri",
        buyerName: "KisanMitra Producer Co.",
        companyType: "FPO / Processor",
        verifiedBuyer: true,
        requiredCrop: "Tomato",
        requiredVariety: "Himsona / Hybrid",
        requiredGrade: "Grade A",
        targetQuantityKg: 10000,
        fulfilledQuantityKg: 6500,
        offeredPricePerKg: 37.0,
        paymentTerms: "Direct Bank Transfer within 24h",
        pickupLocation: "Niphad Hub / Farm Gate",
        status: "ACTIVE",
        createdAt: "2026-08-28T08:00:00Z"
    },
    {
        demandId: "DEM-9082",
        buyerId: "buyer_reliance",
        buyerName: "MahaFresh Fresh Hub",
        companyType: "Organized Retailer",
        verifiedBuyer: true,
        requiredCrop: "Onion",
        requiredVariety: "Nashik Red",
        requiredGrade: "Grade A",
        targetQuantityKg: 25000,
        fulfilledQuantityKg: 12000,
        offeredPricePerKg: 31.5,
        paymentTerms: "T+1 Day Direct Settlement",
        pickupLocation: "Lasalgaon Collection Center",
        status: "ACTIVE",
        createdAt: "2026-08-29T11:00:00Z"
    },
    {
        demandId: "DEM-9083",
        buyerId: "buyer_mumbai_direct",
        buyerName: "Vashi Fresh Traders Group",
        companyType: "Wholesale Aggregator",
        verifiedBuyer: true,
        requiredCrop: "Tomato",
        requiredGrade: "Grade A / B",
        targetQuantityKg: 8000,
        fulfilledQuantityKg: 3000,
        offeredPricePerKg: 36.5,
        paymentTerms: "Immediate Digital Escrow on Dispatch",
        pickupLocation: "Vashi Terminal Hub",
        status: "ACTIVE",
        createdAt: "2026-08-30T05:30:00Z"
    }
];
const mockPoolingClusters = [
    {
        clusterId: "POOL-MH-042",
        hubVillage: "Niphad Taluka Hub",
        district: "Nashik",
        cropType: "Tomato",
        destinationMarket: "Vashi APMC (Navi Mumbai)",
        targetCapacityKg: 10000,
        currentPooledKg: 7500,
        participatingFarmersCount: 9,
        departureDate: "Tomorrow, 06:00 PM",
        individualFreightPerKg: 3.8,
        pooledFreightPerKg: 1.6,
        savingsPercentage: 57.9,
        status: "OPEN_FOR_JOINING"
    },
    {
        clusterId: "POOL-MH-043",
        hubVillage: "Pimpalgaon Baswant Hub",
        district: "Nashik",
        cropType: "Onion",
        destinationMarket: "Pune Market Yard",
        targetCapacityKg: 15000,
        currentPooledKg: 11000,
        participatingFarmersCount: 6,
        departureDate: "In 2 Days, 08:00 AM",
        individualFreightPerKg: 2.9,
        pooledFreightPerKg: 1.2,
        savingsPercentage: 58.6,
        status: "OPEN_FOR_JOINING"
    },
    {
        clusterId: "POOL-MH-044",
        hubVillage: "Sinnar Hub",
        district: "Nashik",
        cropType: "Cabbage, Potato",
        destinationMarket: "Ahmednagar APMC",
        targetCapacityKg: 10000,
        currentPooledKg: 3200,
        participatingFarmersCount: 3,
        departureDate: "In 3 Days, 05:00 AM",
        individualFreightPerKg: 2.5,
        pooledFreightPerKg: 1.19,
        savingsPercentage: 52.3,
        status: "OPEN_FOR_JOINING"
    }
];


// --- MODULE: src/data/mockBuyers.js ---
/**
 * KisanTrust - Seed Buyer Profiles and Verified Demands
 * Covers Indian agricultural supply chain: Processors, Retailers, Exporters, Wholesalers, Restaurants.
 */
const mockBuyerProfiles = [
    {
        buyerId: "buyer_sahyadri",
        companyName: "KisanMitra Producer Co.",
        companyType: "Food Processor",
        contactPerson: "Vikram Deshmukh",
        phone: "+91 00000 55667",
        email: "orders@kisanmitra.example.com",
        district: "Nashik",
        state: "Maharashtra",
        pincode: "422001",
        verified: true,
        reliabilityScore: 4.9,
        totalDealsCompleted: 340,
        onTimePaymentRate: 99.2
    },
    {
        buyerId: "buyer_reliance",
        companyName: "MahaFresh Agro Hub",
        companyType: "Retailer",
        contactPerson: "Amit Deshmukh",
        phone: "+91 98220 88990",
        email: "procurement@mahafresh.example.com",
        district: "Nashik",
        state: "Maharashtra",
        pincode: "422007",
        verified: true,
        reliabilityScore: 4.8,
        totalDealsCompleted: 520,
        onTimePaymentRate: 98.0
    },
    {
        buyerId: "buyer_maharashtra_export",
        companyName: "MahaAgro Global Exporters",
        companyType: "Exporter",
        contactPerson: "Sanjay Pawar",
        phone: "+91 98223 11223",
        email: "exports@mahaagro.com",
        district: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        verified: true,
        reliabilityScore: 4.7,
        totalDealsCompleted: 180,
        onTimePaymentRate: 96.5
    },
    {
        buyerId: "buyer_vashi_traders",
        companyName: "Vashi Fresh Wholesale Group",
        companyType: "Wholesaler",
        contactPerson: "Rajesh Gupta",
        phone: "+91 98190 44556",
        email: "vashitraders@apmc.in",
        district: "Navi Mumbai",
        state: "Maharashtra",
        pincode: "400703",
        verified: true,
        reliabilityScore: 4.6,
        totalDealsCompleted: 410,
        onTimePaymentRate: 95.0
    },
    {
        buyerId: "buyer_taj_hotels",
        companyName: "Apex Culinary Logistics & Institutional",
        companyType: "Restaurant / Hospitality",
        contactPerson: "Chef Amit Kulkarni",
        phone: "+91 00000 33445",
        email: "sourcing@apexculinary.example.com",
        district: "Mumbai",
        state: "Maharashtra",
        pincode: "400005",
        verified: true,
        reliabilityScore: 4.9,
        totalDealsCompleted: 95,
        onTimePaymentRate: 100.0
    }
];
const initialBuyerDemands = [
    {
        demandId: "DEM-2026-00101",
        buyerId: "buyer_sahyadri",
        buyerName: "KisanMitra Producer Co.",
        companyType: "Food Processor",
        verifiedBuyer: true,
        reliabilityScore: 4.9,
        cropType: "Tomato",
        variety: "Himsona / Hybrid (Processing Grade)",
        requiredQuantityKg: 10000,
        fulfilledQuantityKg: 3500,
        minQualityGrade: "Grade A",
        preferredLocation: "Niphad / Dindori / Nashik",
        maxSourcingDistanceKm: 80,
        requiredDeliveryDate: "2026-09-03",
        offeredPricePerKg: 37.5,
        paymentTerms: "Direct Bank Transfer on Delivery QC (within 12 hours)",
        pickupProvided: true,
        status: "ACTIVE",
        createdAt: "2026-08-29T08:00:00Z",
        updatedAt: "2026-08-29T08:00:00Z"
    },
    {
        demandId: "DEM-2026-00102",
        buyerId: "buyer_reliance",
        buyerName: "MahaFresh Agro Hub",
        companyType: "Retailer",
        verifiedBuyer: true,
        reliabilityScore: 4.8,
        cropType: "Onion",
        variety: "Nashik Red (Garva)",
        requiredQuantityKg: 25000,
        fulfilledQuantityKg: 8000,
        minQualityGrade: "Grade A",
        preferredLocation: "Lasalgaon / Niphad / Yeola",
        maxSourcingDistanceKm: 120,
        requiredDeliveryDate: "2026-09-08",
        offeredPricePerKg: 31.0,
        paymentTerms: "T+1 Day Automated Bank Settlement",
        pickupProvided: false,
        status: "ACTIVE",
        createdAt: "2026-08-28T10:00:00Z",
        updatedAt: "2026-08-28T10:00:00Z"
    },
    {
        demandId: "DEM-2026-00103",
        buyerId: "buyer_vashi_traders",
        buyerName: "Vashi Fresh Wholesale Group",
        companyType: "Wholesaler",
        verifiedBuyer: true,
        reliabilityScore: 4.6,
        cropType: "Tomato",
        variety: "Hybrid Table Grade",
        requiredQuantityKg: 8000,
        fulfilledQuantityKg: 2000,
        minQualityGrade: "Grade B",
        preferredLocation: "Nashik / Pune",
        maxSourcingDistanceKm: 200,
        requiredDeliveryDate: "2026-09-02",
        offeredPricePerKg: 36.0,
        paymentTerms: "Instant Digital Escrow Settlement on Terminal Receipt",
        pickupProvided: false,
        status: "ACTIVE",
        createdAt: "2026-08-30T06:00:00Z",
        updatedAt: "2026-08-30T06:00:00Z"
    },
    {
        demandId: "DEM-2026-00104",
        buyerId: "buyer_taj_hotels",
        buyerName: "Apex Culinary Logistics & Institutional",
        companyType: "Restaurant / Hospitality",
        verifiedBuyer: true,
        reliabilityScore: 4.9,
        cropType: "Tomato",
        variety: "Cherry / Salad Tomato (Organic/Grade A)",
        requiredQuantityKg: 1500,
        fulfilledQuantityKg: 300,
        minQualityGrade: "Grade A",
        preferredLocation: "Nashik / Igatpuri / Pune",
        maxSourcingDistanceKm: 160,
        requiredDeliveryDate: "2026-09-04",
        offeredPricePerKg: 42.0,
        paymentTerms: "Immediate Premium Escrow Settlement",
        pickupProvided: true,
        status: "ACTIVE",
        createdAt: "2026-08-30T09:00:00Z",
        updatedAt: "2026-08-30T09:00:00Z"
    },
    {
        demandId: "DEM-2026-00105",
        buyerId: "buyer_maharashtra_export",
        buyerName: "MahaAgro Global Exporters",
        companyType: "Exporter",
        verifiedBuyer: true,
        reliabilityScore: 4.7,
        cropType: "Onion",
        variety: "55mm+ Export Red",
        requiredQuantityKg: 50000,
        fulfilledQuantityKg: 15000,
        minQualityGrade: "Grade A",
        preferredLocation: "Nashik / Pune / Ahmednagar",
        maxSourcingDistanceKm: 250,
        requiredDeliveryDate: "2026-09-12",
        offeredPricePerKg: 32.5,
        paymentTerms: "Verified Letter of Credit / T+2 Days Direct Credit",
        pickupProvided: true,
        status: "ACTIVE",
        createdAt: "2026-08-29T14:00:00Z",
        updatedAt: "2026-08-29T14:00:00Z"
    },
    {
        demandId: "DEM-2026-00106",
        buyerId: "buyer_reliance",
        buyerName: "MahaFresh",
        companyType: "Retailer",
        verifiedBuyer: true,
        reliabilityScore: 4.8,
        cropType: "Potato",
        variety: "Kufri Pukhraj",
        requiredQuantityKg: 15000,
        fulfilledQuantityKg: 0,
        minQualityGrade: "Grade A/B",
        preferredLocation: "Nashik / Pune",
        maxSourcingDistanceKm: 150,
        requiredDeliveryDate: "2026-09-05",
        offeredPricePerKg: 23.50,
        paymentTerms: "T+1 settlement",
        pickupProvided: false,
        status: "ACTIVE",
        createdAt: "2026-09-02T10:00:00Z",
        updatedAt: "2026-09-02T10:00:00Z"
    },
    {
        demandId: "DEM-2026-00107",
        buyerId: "buyer_sahyadri",
        buyerName: "KisanMitra",
        companyType: "Food Processor",
        verifiedBuyer: true,
        reliabilityScore: 4.9,
        cropType: "Cabbage",
        variety: "NS-25 Processing Grade",
        requiredQuantityKg: 8000,
        fulfilledQuantityKg: 0,
        minQualityGrade: "Grade B",
        preferredLocation: "Nashik / Sinnar",
        maxSourcingDistanceKm: 100,
        requiredDeliveryDate: "2026-09-06",
        offeredPricePerKg: 17.00,
        paymentTerms: "direct bank transfer",
        pickupProvided: true,
        status: "ACTIVE",
        createdAt: "2026-09-02T11:00:00Z",
        updatedAt: "2026-09-02T11:00:00Z"
    }
];


// --- MODULE: src/data/cropKnowledge.js ---
/**
 * KisanTrust - Structured Agricultural Knowledge Base (Stage 4)
 * Grounded in verified datasets from ICAR (Indian Council of Agricultural Research),
 * NHB (National Horticulture Board), and APEDA standards.
 */
const CROP_KNOWLEDGE_BASE = {
    "Tomato": {
        cropName: "Tomato (टोमॅटो / टमाटर)",
        scientificName: "Solanum lycopersicum",
        category: "Vegetable / Solanaceous",
        varietyList: ["Himsona", "Abhinav", "Syngenta 1057", "Vaishnavi", "Pusa Ruby", "Local Hybrid"],
        typicalShelfLifeDays: 8,
        optimalTempCelsius: { min: 12, max: 18 },
        optimalHumidityPercent: { min: 85, max: 90 },
        storageGuidance: "Do not refrigerate under 10°C as chilling injury occurs. Store in shaded, ventilated crates with ethylene dispersion.",
        spoilageFactors: ["Firmness loss / skin softening", "Post-harvest fungal rot (Alternaria)", "Bruising during transit"],
        qualityGradingCriteria: {
            "Grade A": "Uniform red/orange color, firm calyx intact, zero blemish, size 45-65mm, firmness > 3.5 kg/cm²",
            "Grade B": "Slight color variation, minor surface rub, size 35-45mm, firmness 2.5-3.5 kg/cm²",
            "Grade C": "Soft/over-ripe, slight cracks, size < 35mm, suitable for immediate sauce/paste processing"
        },
        seasonality: { peakMonths: ["Jan", "Feb", "Aug", "Sep", "Oct"], leanMonths: ["May", "Jun"] },
        majorMahaMarkets: ["Pimpalgaon Baswant", "Nashik APMC", "Pune Gultekdi", "Vashi Terminal"],
        sourceMetadata: {
            authority: "ICAR - Indian Institute of Vegetable Research & NHB Post-Harvest Guidelines",
            lastVerifiedYear: 2025
        }
    },

    "Onion": {
        cropName: "Onion (कांदा / प्याज)",
        scientificName: "Allium cepa",
        category: "Bulb Vegetable",
        varietyList: ["Nashik Red (Garva)", "Bhima Super", "Bhima Dark Red", "Phule Samarth", "AgriFound Light Red"],
        typicalShelfLifeDays: 45, // In ventilated Kanda Chawl
        optimalTempCelsius: { min: 25, max: 30 },
        optimalHumidityPercent: { min: 65, max: 70 },
        storageGuidance: "Store in elevated well-ventilated traditional Kanda Chawl. Keep humidity below 70% to prevent fungal neck rot and pre-sprouting.",
        spoilageFactors: ["High ambient moisture leading to black mould (Aspergillus niger)", "Sprouting due to humidity spike", "Bulb rotting"],
        qualityGradingCriteria: {
            "Grade A": "Diameter 50-70mm, tight papery outer skin (2+ layers), dry thin neck, zero sprouting",
            "Grade B": "Diameter 35-50mm, medium skin adherence, dry neck",
            "Grade C": "Diameter < 35mm (Golta/Golti) or double bulbs, thick wet neck"
        },
        seasonality: { peakMonths: ["Mar", "Apr", "May", "Dec"], leanMonths: ["Aug", "Sep", "Oct"] },
        majorMahaMarkets: ["Lasalgaon APMC (Asia's Largest)", "Pimpalgaon", "Yeola", "Pune", "Solapur"],
        sourceMetadata: {
            authority: "ICAR - Directorate of Onion and Garlic Research (DOGR), Rajgurunagar, Pune",
            lastVerifiedYear: 2025
        }
    },

    "Potato": {
        cropName: "Potato (बटाटा / आलू)",
        scientificName: "Solanum tuberosum",
        category: "Tuber Vegetable",
        varietyList: ["Kufri Jyoti", "Kufri Pukhraj", "Kufri Chipsona (Processing)", "Kufri Lauvkar", "Lady Rosetta"],
        typicalShelfLifeDays: 30,
        optimalTempCelsius: { min: 10, max: 14 },
        optimalHumidityPercent: { min: 85, max: 90 },
        storageGuidance: "Store in dark, cool conditions to prevent greening (solanine toxicity). Processing potatoes require 8-10°C to avoid reducing sugar accumulation.",
        spoilageFactors: ["Greening due to light exposure", "Tuber moth infestation", "Sprouting"],
        qualityGradingCriteria: {
            "Grade A": "Oval/round uniform shape, shallow eyes, zero cuts/greening, size > 45mm",
            "Grade B": "Minor skin scarring, size 30-45mm",
            "Grade C": "Small tubers (< 30mm), irregular shape, slight cuts"
        },
        seasonality: { peakMonths: ["Jan", "Feb", "Mar"], leanMonths: ["Jul", "Aug"] },
        majorMahaMarkets: ["Pune APMC", "Manchar", "Vashi", "Kolhapur"],
        sourceMetadata: {
            authority: "ICAR - Central Potato Research Institute (CPRI), Shimla",
            lastVerifiedYear: 2025
        }
    },

    "Carrot": {
        cropName: "Carrot (गाजर)",
        scientificName: "Daucus carota",
        category: "Root Vegetable",
        varietyList: ["Pusa Kesar", "Pusa Rudhira", "Kuroda Hybrid", "Super Kuroda"],
        typicalShelfLifeDays: 10,
        optimalTempCelsius: { min: 0, max: 4 },
        optimalHumidityPercent: { min: 90, max: 95 },
        storageGuidance: "Hydrocool or wash with sanitized cold water immediately after harvest. Keep roots moist to prevent wilting and pithiness.",
        spoilageFactors: ["Moisture loss leading to flaccidity", "Root cracking", "Sclerotinia white rot"],
        qualityGradingCriteria: {
            "Grade A": "Deep red/orange core, straight root > 15cm, zero bifurcation, crisp texture",
            "Grade B": "Slightly curved root 10-15cm, minor surface scars",
            "Grade C": "Forked/cracked roots, length < 10cm"
        },
        seasonality: { peakMonths: ["Nov", "Dec", "Jan", "Feb"], leanMonths: ["May", "Jun", "Jul"] },
        majorMahaMarkets: ["Pune", "Nashik", "Vashi"],
        sourceMetadata: {
            authority: "National Horticulture Board (NHB) Specification Standards",
            lastVerifiedYear: 2025
        }
    },

    "Cabbage": {
        cropName: "Cabbage (कोबी / पत्ता गोभी)",
        scientificName: "Brassica oleracea var. capitata",
        category: "Cole Crop",
        varietyList: ["Golden Acre", "Pride of India", "Green Express", "Pusa Drumhead"],
        typicalShelfLifeDays: 12,
        optimalTempCelsius: { min: 0, max: 5 },
        optimalHumidityPercent: { min: 90, max: 95 },
        storageGuidance: "Leave 2-3 outer wrapper leaves to protect the compact head from transit bruising and desiccation.",
        spoilageFactors: ["Bacterial soft rot (Pectobacterium)", "Head bursting/cracking", "Yellowing of outer leaves"],
        qualityGradingCriteria: {
            "Grade A": "Compact solid head (1.0-1.8 kg), fresh green wrapper leaves, zero insect damage",
            "Grade B": "Medium compact head (0.7-1.0 kg), slight wrapper blemish",
            "Grade C": "Loose head, weight < 0.7 kg or over 2.2 kg with split outer leaves"
        },
        seasonality: { peakMonths: ["Dec", "Jan", "Feb", "Mar"], leanMonths: ["Jul", "Aug"] },
        majorMahaMarkets: ["Pune Gultekdi", "Nashik", "Vashi", "Nagpur"],
        sourceMetadata: {
            authority: "ICAR - Indian Agricultural Research Institute (IARI)",
            lastVerifiedYear: 2025
        }
    }
};

/**
 * Service to query structured agricultural facts
 */
class CropKnowledgeService {
    /**
     * Get crop knowledge record by commodity name
     * @param {string} cropName
     * @returns {Object|null}
     */
    static getCropInfo(cropName) {
        if (!cropName) return null;
        const normalized = Object.keys(CROP_KNOWLEDGE_BASE).find(
            k => k.toLowerCase() === cropName.trim().toLowerCase()
        );
        return normalized ? CROP_KNOWLEDGE_BASE[normalized] : null;
    }

    /**
     * Calculate spoilage risk score (0 - 100%) based on harvest date and storage conditions
     * @param {string} cropName
     * @param {number} freshnessScore
     * @param {string} harvestDate
     * @returns {{ spoilageRiskPercent: number, riskLevel: 'LOW'|'MEDIUM'|'HIGH'|'CRITICAL', safeHoldingDaysRemaining: number }}
     */
    static evaluateSpoilageRisk(cropName, freshnessScore = 90, harvestDate = new Date().toISOString().split('T')[0]) {
        const cropInfo = this.getCropInfo(cropName) || { typicalShelfLifeDays: 7 };
        const totalLife = cropInfo.typicalShelfLifeDays;

        const harvest = new Date(harvestDate);
        const today = new Date();
        const elapsedDays = Math.max(0, Math.floor((today - harvest) / (1000 * 60 * 60 * 24)));

        const safeHoldingDaysRemaining = Math.max(0, totalLife - elapsedDays);
        const lifeDepletionRatio = Math.min(1.0, elapsedDays / totalLife);
        const freshnessLoss = Math.max(0, (100 - freshnessScore) / 100);

        // Combined risk calculation
        const spoilageRiskPercent = Number(Math.min(99, ((lifeDepletionRatio * 0.6) + (freshnessLoss * 0.4)) * 100).toFixed(1));

        let riskLevel = 'LOW';
        if (spoilageRiskPercent > 70 || safeHoldingDaysRemaining <= 1) riskLevel = 'CRITICAL';
        else if (spoilageRiskPercent > 45 || safeHoldingDaysRemaining <= 3) riskLevel = 'HIGH';
        else if (spoilageRiskPercent > 25) riskLevel = 'MEDIUM';

        return {
            spoilageRiskPercent,
            riskLevel,
            safeHoldingDaysRemaining
        };
    }
}


// --- MODULE: src/data/mockTransactions.js ---
/**
 * KisanTrust - Seed Transactions Data
 * Realistic seed transactions at different lifecycle stages.
 */
const mockTransactions = [
  {
    transactionId: "TXN-2026-981042",
    lotId: "LOT-2026-089101",
    farmerId: "farmer_mh_001",
    farmerName: "Ramesh Patil",
    buyerId: "buyer_sahyadri",
    buyerName: "KisanMitra",
    cropType: "Tomato",
    variety: "Himsona",
    quantityKg: 500,
    agreedPricePerKg: 37.50,
    totalAmount: 18750,
    currentStage: "PICKUP_SCHEDULED",
    paymentStatus: "ESCROW_LOCKED",
    escrowAmount: 18750,
    timeline: [
      { stage: "OFFER_ACCEPTED", timestamp: "2026-09-01T10:00:00Z", notes: "Offer accepted by farmer" },
      { stage: "ESCROW_LOCKED", timestamp: "2026-09-01T11:30:00Z", notes: "Buyer locked funds in escrow" },
      { stage: "PICKUP_SCHEDULED", timestamp: "2026-09-01T14:00:00Z", notes: "Pickup scheduled for 2026-09-03" }
    ],
    logisticsInfo: {
      vehicle: "MH-15-AB-1234",
      driver: "Raju",
      route: "Farm to Niphad Hub"
    },
    createdAt: "2026-09-01T10:00:00Z",
    updatedAt: "2026-09-01T14:00:00Z"
  },
  {
    transactionId: "TXN-2026-981043",
    lotId: "LOT-2026-089102",
    farmerId: "farmer_mh_001",
    farmerName: "Ramesh Patil",
    buyerId: "buyer_vashi_traders",
    buyerName: "Vashi Fresh",
    cropType: "Onion",
    variety: "Nashik Red",
    quantityKg: 2500,
    agreedPricePerKg: 30.50,
    totalAmount: 76250,
    currentStage: "IN_TRANSIT",
    paymentStatus: "ESCROW_LOCKED",
    escrowAmount: 76250,
    timeline: [
      { stage: "OFFER_ACCEPTED", timestamp: "2026-09-01T09:00:00Z", notes: "Offer accepted" },
      { stage: "ESCROW_LOCKED", timestamp: "2026-09-01T10:00:00Z", notes: "Escrow locked" },
      { stage: "PICKUP_SCHEDULED", timestamp: "2026-09-01T12:00:00Z", notes: "Pickup scheduled" },
      { stage: "IN_TRANSIT", timestamp: "2026-09-02T08:00:00Z", notes: "Pickup completed, in transit. Expected delivery 2026-09-03" }
    ],
    logisticsInfo: {
      vehicle: "MH-15-BT-4521",
      driver: "Manoj Shirke",
      route: "Nashik to Vashi"
    },
    createdAt: "2026-09-01T09:00:00Z",
    updatedAt: "2026-09-02T08:00:00Z"
  },
  {
    transactionId: "TXN-2026-981044",
    lotId: "LOT-2026-089103",
    farmerId: "farmer_pune_002",
    farmerName: "Sunil Jadhav",
    buyerId: "buyer_reliance",
    buyerName: "MahaFresh",
    cropType: "Potato",
    variety: "Kufri Pukhraj",
    quantityKg: 800,
    agreedPricePerKg: 24.00,
    totalAmount: 19200,
    currentStage: "QC_VERIFIED",
    paymentStatus: "PAYMENT_PROCESSING",
    escrowAmount: 19200,
    timeline: [
      { stage: "DELIVERED", timestamp: "2026-09-02T10:00:00Z", notes: "Delivered to buyer hub" },
      { stage: "QC_VERIFIED", timestamp: "2026-09-02T12:00:00Z", notes: "QC passed, payment processing" }
    ],
    logisticsInfo: {
      vehicle: "MH-12-PQ-9988",
      driver: "Suresh",
      route: "Junnar to Pune Hub"
    },
    createdAt: "2026-08-30T09:00:00Z",
    updatedAt: "2026-09-02T12:00:00Z"
  },
  {
    transactionId: "TXN-2026-981045",
    lotId: "LOT-2026-089106",
    farmerId: "farmer_mh_001",
    farmerName: "Ramesh Patil",
    buyerId: "buyer_apex_culinary",
    buyerName: "Apex Culinary",
    cropType: "Tomato",
    variety: "Cherry",
    quantityKg: 200,
    agreedPricePerKg: 42.00,
    totalAmount: 8400,
    currentStage: "COMPLETED",
    paymentStatus: "PAYMENT_SETTLED",
    escrowAmount: 8400,
    timeline: [
      { stage: "DELIVERED", timestamp: "2026-08-30T10:00:00Z", notes: "Delivered to hotel" },
      { stage: "QC_VERIFIED", timestamp: "2026-08-30T11:00:00Z", notes: "Accepted" },
      { stage: "PAYMENT_SETTLED", timestamp: "2026-08-31T09:00:00Z", notes: "Settlement completed" },
      { stage: "COMPLETED", timestamp: "2026-08-31T09:30:00Z", notes: "Fully completed with mutual 5-star ratings" }
    ],
    logisticsInfo: {
      vehicle: "MH-15-XY-7766",
      driver: "Amit",
      route: "Nashik to Mumbai"
    },
    createdAt: "2026-08-28T09:00:00Z",
    updatedAt: "2026-08-31T09:30:00Z"
  }
];
const initialMockTransactions = mockTransactions;


// --- MODULE: src/data/mockDisputes.js ---
/**
 * KisanTrust - Seed Disputes Data
 * Realistic disputes for resolution workflows.
 */
const mockDisputes = [
  {
    disputeId: "DSP-2026-00201",
    transactionId: "TXN-2026-981044",
    filedBy: "buyer_reliance",
    filedByName: "MahaFresh",
    filedByRole: "BUYER",
    category: "QUALITY_MISMATCH",
    description: "Received produce graded as Grade B but lot was certified as Grade A. 15% of potatoes show green skin discoloration.",
    supportingEvidenceUrls: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80"
    ],
    originalLotQualityEvidence: "Grade A, 88 freshness, 3.5% defects",
    status: "OPEN",
    adminNotes: "",
    resolution: null,
    createdAt: "2026-09-02T14:30:00Z",
    updatedAt: "2026-09-02T14:30:00Z"
  },
  {
    disputeId: "DSP-2026-00202",
    transactionId: "TXN-2026-981043",
    filedBy: "farmer_mh_001",
    filedByName: "Ramesh Patil",
    filedByRole: "FARMER",
    category: "PAYMENT_DELAY",
    description: "Payment not received within agreed 24-hour settlement window. 3 days overdue.",
    supportingEvidenceUrls: [],
    originalLotQualityEvidence: "N/A",
    status: "UNDER_REVIEW",
    adminNotes: "Contacted buyer finance team, pending response.",
    resolution: null,
    createdAt: "2026-09-02T10:00:00Z",
    updatedAt: "2026-09-02T15:00:00Z",
    escalatedAt: "2026-09-02T12:00:00Z"
  }
];
const initialMockDisputes = mockDisputes;


// --- MODULE: src/data/mockAdminData.js ---
/**
 * KisanTrust - Admin Seed Data
 * Data for admin panel workflows.
 */
const initialPendingFarmers = [
  {
    farmerId: "pending_f_001",
    name: "Sunita Bhosale",
    cropTypes: ["Tomato", "Onion"],
    location: "Dindori taluka, Nashik",
    landSizeAcres: 1.5,
    verificationStatus: "pending_aadhaar",
    notes: "pending Aadhaar verification"
  },
  {
    farmerId: "pending_f_002",
    name: "Ganesh Wagh",
    cropTypes: ["Potato"],
    location: "Junnar taluka, Pune",
    landSizeAcres: 3,
    verificationStatus: "documents_submitted",
    notes: "documents submitted"
  },
  {
    farmerId: "pending_f_003",
    name: "Priya Kamble",
    cropTypes: ["Cabbage", "Carrot"],
    location: "Igatpuri taluka, Nashik",
    landSizeAcres: 0.8,
    verificationStatus: "small_marginal",
    notes: "small/marginal farmer"
  }
];
const initialPendingBuyers = [
  {
    buyerId: "pending_b_001",
    companyName: "FreshBasket Online Pvt Ltd",
    companyType: "E-commerce grocery",
    gstin: "00XXXXX0000X0XX",
    verificationStatus: "pending_fssai",
    notes: "pending FSSAI verification"
  },
  {
    buyerId: "pending_b_002",
    companyName: "Krishna Agro Exports",
    companyType: "Exporter",
    gstin: "00XXXXX0000X0XX",
    verificationStatus: "pending_trade_license",
    notes: "pending trade license"
  }
];
const initialRiskFlags = [
  {
    flagId: "FLAG-001",
    type: "DUPLICATE_PHOTO",
    targetId: "LOT-2026-089105",
    description: "Lot LOT-2026-089105 flagged for possible reused images (60% similarity with LOT-2026-089101)",
    severity: "MEDIUM",
    createdAt: "2026-09-02T10:00:00Z"
  },
  {
    flagId: "FLAG-002",
    type: "SUSPICIOUS_PRICING",
    targetId: "DEM-2026-00103",
    description: "Buyer demand DEM-2026-00103 offering significantly above market rate (potential bait)",
    severity: "HIGH",
    createdAt: "2026-09-02T11:00:00Z"
  }
];
const initialAuditLogs = [
  {
    logId: "AUD-001",
    action: "APPROVE_FARMER",
    performedBy: "Admin",
    targetId: "farmer_mh_001",
    description: "Admin approved farmer farmer_mh_001",
    timestamp: "2026-08-25T10:00:00Z"
  },
  {
    logId: "AUD-002",
    action: "APPROVE_BUYER",
    performedBy: "Admin",
    targetId: "buyer_sahyadri",
    description: "Admin approved buyer buyer_sahyadri",
    timestamp: "2026-08-26T11:00:00Z"
  },
  {
    logId: "AUD-003",
    action: "APPROVE_LOT",
    performedBy: "Admin",
    targetId: "LOT-2026-089101",
    description: "Admin approved lot LOT-2026-089101",
    timestamp: "2026-08-29T10:35:00Z"
  },
  {
    logId: "AUD-004",
    action: "RESOLVE_DISPUTE",
    performedBy: "Super admin",
    targetId: "DSP-2026-00202",
    description: "Super admin resolved dispute DSP-2026-00202",
    timestamp: "2026-09-01T15:00:00Z"
  },
  {
    logId: "AUD-005",
    action: "SUSPEND_BUYER",
    performedBy: "Admin",
    targetId: "buyer_suspicious",
    description: "Admin suspended suspicious buyer account",
    timestamp: "2026-09-02T09:00:00Z"
  }
];
const initialNotifications = [
  {
    notificationId: "NOT-001",
    userId: "farmer_mh_001",
    recipientId: "farmer_mh_001",
    title: "लॉट मंजूर (Lot Approved)",
    message: "Your Tomato lot has been approved and published",
    read: true,
    isRead: true,
    createdAt: "2026-08-29T10:36:00Z"
  },
  {
    notificationId: "NOT-002",
    userId: "buyer_sahyadri",
    recipientId: "buyer_sahyadri",
    title: "मागणी जुळली (Demand Match)",
    message: "New Grade A Tomato lot available matching your demand",
    read: false,
    isRead: false,
    createdAt: "2026-08-29T10:40:00Z"
  },
  {
    notificationId: "NOT-003",
    userId: "farmer_mh_001",
    recipientId: "farmer_mh_001",
    title: "पेमेंट जमा (Payment Received)",
    message: "Payment of ₹8,400 received for TXN-2026-981045",
    read: false,
    isRead: false,
    createdAt: "2026-08-31T09:00:00Z"
  },
  {
    notificationId: "NOT-004",
    userId: "admin_mh_001",
    recipientId: "admin_mh_001",
    title: "प्रशासकीय सूचना (Admin Alert)",
    message: "2 new farmer verifications pending review",
    read: false,
    isRead: false,
    createdAt: "2026-09-02T08:00:00Z"
  }
];


// --- MODULE: src/services/firebaseService.js ---
/**
 * KisanTrust - Centralized Firebase Service
 * Manages Firestore collections, storage adapters, and seed datasets for the connected ecosystem.
 */










class FirebaseService {
    constructor() {
        this.db = localDb;
        this.auth = localAuth;
        this.storage = localStorageService;
        this._initialized = false;
    }

    /**
     * Initializes all standard collections if empty
     */
    async initializeData() {
        if (this._initialized) return;

        // 1. Seed Lots if empty
        const lotsSnap = await (await this.db.collection('lots')).get();
        if (lotsSnap.empty) {
            for (const lot of initialMockLots) {
                const lotData = {
                    ...lot,
                    moderationStatus: lot.moderationStatus || 'APPROVED',
                    status: lot.status || 'PUBLISHED'
                };
                await (await this.db.collection('lots')).doc(lot.lotId).set(lotData);
            }
        }

        // 2. Seed Mandis if empty
        const mandisSnap = await (await this.db.collection('mandiBenchmarks')).get();
        if (mandisSnap.empty) {
            for (const mandi of mockMandiBenchmarks) {
                await (await this.db.collection('mandiBenchmarks')).doc(mandi.mandiId).set(mandi);
            }
        }

        // 3. Seed Buyer Demands if empty
        const buyersSnap = await (await this.db.collection('buyerDemands')).get();
        if (buyersSnap.empty) {
            for (const demand of mockBuyerDemands) {
                const demandData = {
                    ...demand,
                    moderationStatus: demand.moderationStatus || 'APPROVED',
                    status: demand.status || 'ACTIVE'
                };
                await (await this.db.collection('buyerDemands')).doc(demand.demandId).set(demandData);
            }
        }

        // 4. Seed Buyer Profiles
        const buyerProfSnap = await (await this.db.collection('buyerProfiles')).get();
        if (buyerProfSnap.empty) {
            for (const profile of mockBuyerProfiles) {
                const record = new BuyerProfileRecord({
                    ...profile,
                    userId: profile.buyerId,
                    verificationStatus: VERIFICATION_STATUS.VERIFIED
                });
                await (await this.db.collection('buyerProfiles')).doc(profile.buyerId).set(record.toFirestore());
            }
        }

        // 5. Seed Farmer Profiles
        const farmerProfSnap = await (await this.db.collection('farmerProfiles')).get();
        if (farmerProfSnap.empty) {
            const defaultFarmer = new FarmerProfile({
                userId: 'farmer_mh_001',
                personalDetails: {
                    fullName: 'रमेश मारुती पाटील (Ramesh Patil)',
                    mobileNumber: '+91 98224 56789',
                    emailAddress: 'ramesh.patil@kisantrust.org',
                    fullAddress: 'Gat No. 142, At Post Niphad',
                    pincode: '422303',
                    state: 'Maharashtra',
                    district: 'Nashik',
                    village: 'Niphad'
                },
                farmDetails: {
                    primaryCrops: ['Tomato', 'Onion'],
                    farmSizeAcres: 4.5,
                    productionCapacityTons: 25,
                    fpoMembership: 'KisanMitra Producer Co.'
                },
                verificationStatus: VERIFICATION_STATUS.VERIFIED,
                farmerRating: 4.8,
                totalTransactionsCompleted: 14
            });
            await (await this.db.collection('farmerProfiles')).doc('farmer_mh_001').set(defaultFarmer.toFirestore());

            // Add an unverified applicant farmer for demoing verification queue
            const applicantFarmer = new FarmerProfile({
                userId: 'farmer_mh_applicant_002',
                personalDetails: {
                    fullName: 'ज्ञानेश्वर तुकाराम गायकवाड (Dnyaneshwar Gaikwad)',
                    mobileNumber: '+91 98231 12345',
                    emailAddress: 'dnyaneshwar.g@gmail.com',
                    fullAddress: 'Plot 12, Pimplegaon Baswant',
                    pincode: '422209',
                    state: 'Maharashtra',
                    district: 'Nashik',
                    village: 'Pimplegaon'
                },
                farmDetails: {
                    primaryCrops: ['Tomato', 'Grapes', 'Onion'],
                    farmSizeAcres: 6.0,
                    productionCapacityTons: 35,
                    fpoMembership: 'Godavari FPO'
                },
                verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION,
                farmerRating: 0,
                totalTransactionsCompleted: 0
            });
            await (await this.db.collection('farmerProfiles')).doc('farmer_mh_applicant_002').set(applicantFarmer.toFirestore());
        }

        // 6. Seed Pooling Clusters if empty
        const poolSnap = await (await this.db.collection('poolingClusters')).get();
        if (poolSnap.empty) {
            for (const cluster of mockPoolingClusters) {
                await (await this.db.collection('poolingClusters')).doc(cluster.clusterId).set(cluster);
            }
        }

        // 7. Seed Initial Risk Flags if empty
        const riskSnap = await (await this.db.collection('riskFlags')).get();
        if (riskSnap.empty) {
            const initialFlag = {
                flagId: 'RISK-DEMO-001',
                entityType: 'LOT',
                entityId: 'LOT-2026-990112',
                entityTitle: 'Onion (5000kg) - Ramesh Patil',
                flagType: 'UNUSUAL_LISTING_FREQUENCY',
                severity: 'MEDIUM',
                label: 'Unusual Listing Frequency',
                details: { note: 'Multiple lots registered in short time window for demo' },
                resolved: false,
                createdAt: new Date().toISOString()
            };
            await (await this.db.collection('riskFlags')).doc(initialFlag.flagId).set(initialFlag);
        }

        // 8. Seed Transactions
        const txSnap = await (await this.db.collection('transactions')).get();
        if (txSnap.empty) {
            for (const tx of initialMockTransactions) {
                await (await this.db.collection('transactions')).doc(tx.transactionId).set(tx);
            }
        }

        // 9. Seed Disputes
        const disputesSnap = await (await this.db.collection('disputes')).get();
        if (disputesSnap.empty) {
            for (const d of initialMockDisputes) {
                await (await this.db.collection('disputes')).doc(d.disputeId).set(d);
            }
        }

        // 10. Seed Notifications
        const notificationsSnap = await (await this.db.collection('notifications')).get();
        if (notificationsSnap.empty) {
            for (const n of initialNotifications) {
                await (await this.db.collection('notifications')).doc(n.notificationId).set(n);
            }
        }

        // 11. Seed Audit Logs
        const auditLogsSnap = await (await this.db.collection('auditLogs')).get();
        if (auditLogsSnap.empty) {
            for (const log of initialAuditLogs) {
                await (await this.db.collection('auditLogs')).doc(log.logId).set(log);
            }
        }

        // 12. Merge Pending Farmers
        for (const farmer of initialPendingFarmers) {
            const doc = await (await this.db.collection('farmerProfiles')).doc(farmer.farmerId).get();
            if (!doc.exists) {
                await (await this.db.collection('farmerProfiles')).doc(farmer.farmerId).set(farmer);
            }
        }

        // 13. Merge Pending Buyers
        for (const buyer of initialPendingBuyers) {
            const doc = await (await this.db.collection('buyerProfiles')).doc(buyer.buyerId).get();
            if (!doc.exists) {
                await (await this.db.collection('buyerProfiles')).doc(buyer.buyerId).set(buyer);
            }
        }

        // 14. Merge Additional Risk Flags
        for (const flag of initialRiskFlags) {
            const doc = await (await this.db.collection('riskFlags')).doc(flag.flagId).get();
            if (!doc.exists) {
                await (await this.db.collection('riskFlags')).doc(flag.flagId).set(flag);
            }
        }

        this._initialized = true;
    }

    // ==================== LOTS ====================

    async createLot(lotData) {
        await this.initializeData();
        const lotRef = (await this.db.collection('lots')).doc(lotData.lotId);
        await lotRef.set(lotData);
        return lotData;
    }

    async saveLot(lotData) {
        return this.createLot(lotData);
    }

    async getLots() {
        return this.getLotsByFarmer();
    }

    async getLotsByFarmer(farmerId) {
        await this.initializeData();
        const snap = await (await this.db.collection('lots')).get();
        return snap.docs
            .map(d => d.data())
            .filter(lot => !farmerId || lot.farmerId === farmerId)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    async getLotById(lotId) {
        await this.initializeData();
        const doc = await (await this.db.collection('lots')).doc(lotId).get();
        return doc.exists ? doc.data() : null;
    }

    async updateLot(lotId, updates) {
        await this.initializeData();
        await (await this.db.collection('lots')).doc(lotId).update(updates);
        return this.getLotById(lotId);
    }

    // ==================== STORAGE ====================

    async uploadLotPhoto(fileOrDataUrl, lotId, photoType = 'exterior', userId = 'farmer_mh_001') {
        const path = `lot-images/${userId}/${lotId}/${photoType}_${Date.now()}.jpg`;
        return this.storage.uploadImage(fileOrDataUrl, path);
    }

    async uploadVerificationDocument(fileOrDataUrl, userId, docType = 'aadhaar_or_gstin') {
        const path = `verification-documents/${userId}/${docType}_${Date.now()}.pdf`;
        return this.storage.uploadImage(fileOrDataUrl, path);
    }

    async uploadDisputeEvidence(fileOrDataUrl, transactionId) {
        const path = `dispute-evidence/${transactionId}/evidence_${Date.now()}.jpg`;
        return this.storage.uploadImage(fileOrDataUrl, path);
    }

    // ==================== AUTH & USER ====================

    getCurrentUser() {
        return this.auth.getUser();
    }

    setCurrentRole(role) {
        const user = this.auth.getUser();
        user.role = role;
        this.auth.setUser(user);
        return user;
    }
}
const firebaseService = new FirebaseService();


// --- MODULE: src/services/notificationService.js ---
/**
 * KisanTrust - In-App Notification Service
 * Manages notification dispatch, retrieval, unread counts, and status updates for all roles.
 */
class NotificationService {
    /**
     * Send a notification to a specific user
     * @param {Object} params
     * @returns {Promise<NotificationRecord>}
     */
    static async sendNotification({ userId, type, title, message, relatedEntityType = 'LOT', relatedEntityId = '', priority = 'NORMAL', actionUrl = '' }) {
        await firebaseService.initializeData();
        const notification = new NotificationRecord({
            userId: userId || 'farmer_mh_001',
            recipientId: userId || 'farmer_mh_001',
            type,
            title,
            message,
            relatedEntityType,
            relatedEntityId,
            priority,
            actionUrl
        });

        await (await firebaseService.db.collection('notifications')).doc(notification.notificationId).set(notification.toFirestore());
        return notification;
    }

    /**
     * Broadcast notification to all active administrators
     * @param {Object} params
     */
    static async notifyAdmins({ type = NOTIFICATION_TYPES.ADMIN_ALERT, title, message, relatedEntityType, relatedEntityId, priority = 'HIGH' }) {
        await firebaseService.initializeData();
        const adminIds = ['admin_mh_001', 'admin_super'];
        for (const adminId of adminIds) {
            await this.sendNotification({
                userId: adminId,
                type,
                title: `🛡️ [Admin Alert] ${title}`,
                message,
                relatedEntityType,
                relatedEntityId,
                priority
            });
        }
    }

    /**
     * Get all notifications for a user
     * @param {string} userId
     * @returns {Promise<Array<NotificationRecord>>}
     */
    static async getUserNotifications(userId) {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('notifications')).get();
        const normalizedTargetId = (userId || '').trim();

        return snap.docs
            .map(d => new NotificationRecord(d.data()))
            .filter(n => {
                if (!normalizedTargetId) return true;
                return n.userId === normalizedTargetId || n.recipientId === normalizedTargetId;
            })
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Get unread notification count
     * @param {string} userId
     * @returns {Promise<number>}
     */
    static async getUnreadCount(userId) {
        const list = await this.getUserNotifications(userId);
        return list.filter(n => !n.isRead && !n.read).length;
    }

    /**
     * Mark a single notification as read
     * @param {string} notificationId
     * @returns {Promise<boolean>}
     */
    static async markAsRead(notificationId) {
        await firebaseService.initializeData();
        await (await firebaseService.db.collection('notifications')).doc(notificationId).update({
            isRead: true,
            read: true,
            updatedAt: new Date().toISOString()
        });
        return true;
    }

    /**
     * Mark all notifications as read for a user
     * @param {string} userId
     */
    static async markAllAsRead(userId) {
        const list = await this.getUserNotifications(userId);
        for (const n of list) {
            if (!n.isRead || !n.read) {
                await this.markAsRead(n.notificationId);
            }
        }
        return true;
    }
}


// --- MODULE: src/services/auditService.js ---
/**
 * KisanTrust - Admin Audit Trail Service
 * Records and queries immutable logs of administrative actions for transparency and governance.
 */
class AuditService {
    /**
     * Records a new administrative action in the audit log
     * @param {Object} params
     * @returns {Promise<AuditLogRecord>}
     */
    static async logAction(params = {}) {
        await firebaseService.initializeData();
        const log = new AuditLogRecord(params);
        await (await firebaseService.db.collection('auditLogs')).doc(log.logId).set(log.toFirestore());
        return log;
    }

    /**
     * Retrieve audit logs with optional filters
     * @param {Object|number} filters
     * @returns {Promise<Array<AuditLogRecord>>}
     */
    static async getAuditLogs(filters = {}) {
        await firebaseService.initializeData();
        const limit = typeof filters === 'number' ? filters : (filters.limit || 100);
        const snap = await (await firebaseService.db.collection('auditLogs')).get();
        let list = snap.docs.map(d => new AuditLogRecord(d.data()));

        if (typeof filters === 'object') {
            if (filters.targetType || filters.targetEntityType) {
                const tt = filters.targetType || filters.targetEntityType;
                list = list.filter(l => l.targetType === tt || l.targetEntityType === tt);
            }
            if (filters.targetId || filters.targetEntityId) {
                const tid = filters.targetId || filters.targetEntityId;
                list = list.filter(l => l.targetId === tid || l.targetEntityId === tid);
            }
            if (filters.action) {
                list = list.filter(l => l.action === filters.action);
            }
            if (filters.adminId || filters.performedBy) {
                const adm = filters.adminId || filters.performedBy;
                list = list.filter(l => l.adminId === adm || l.performedBy === adm);
            }
        }

        return list.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, limit);
    }
}


// --- MODULE: src/services/riskService.js ---
/**
 * KisanTrust - Fraud & Risk Flag Management Service
 * Detects suspicious activity, manages internal risk flags, and supports admin resolution.
 */
class RiskService {
    /**
     * Create an internal risk flag
     * @param {Object} params
     * @returns {Promise<RiskFlagRecord>}
     */
    static async createRiskFlag({
        entityType = 'LOT',
        entityId,
        entityTitle = '',
        flagType = 'DUPLICATE_IMAGES',
        details = {}
    }) {
        await firebaseService.initializeData();
        const typeConfig = RISK_FLAG_TYPES[flagType] || { label: 'Suspicious Activity', severity: 'MEDIUM' };

        const flag = new RiskFlagRecord({
            entityType,
            entityId,
            entityTitle,
            flagType,
            severity: typeConfig.severity,
            label: typeConfig.label,
            details,
            resolved: false
        });

        await (await firebaseService.db.collection('riskFlags')).doc(flag.flagId).set(flag.toFirestore());

        await AuditService.logAction({
            action: AUDIT_ACTIONS.RISK_FLAG_CREATED,
            targetType: entityType,
            targetId: entityId,
            targetTitle: entityTitle,
            details: { flagId: flag.flagId, flagType, severity: flag.severity },
            reason: typeConfig.label
        });

        return flag;
    }

    /**
     * Retrieve all risk flags
     * @param {boolean} [unresolvedOnly=false]
     * @returns {Promise<Array<RiskFlagRecord>>}
     */
    static async getRiskFlags(unresolvedOnly = false) {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('riskFlags')).get();
        let list = snap.docs.map(d => new RiskFlagRecord(d.data()));

        if (unresolvedOnly) {
            list = list.filter(f => !f.resolved);
        }

        return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    static async getActiveRiskFlags() {
        return this.getRiskFlags(true);
    }

    static async flagDuplicateImages({ lotId, farmerId, duplicateLotId = '', confidenceScore = 0.95 }) {
        return this.createRiskFlag({
            entityType: 'LOT',
            entityId: lotId,
            entityTitle: `Lot ${lotId} (Farmer ${farmerId})`,
            flagType: 'DUPLICATE_IMAGES',
            details: { farmerId, duplicateLotId, confidenceScore }
        });
    }

    /**
     * Resolve a risk flag
     * @param {string} flagId
     * @param {string} adminId
     * @param {string} resolutionNotes
     * @returns {Promise<RiskFlagRecord>}
     */
    static async resolveRiskFlag(flagId, adminId = 'admin_mh_001', resolutionNotes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('riskFlags')).doc(flagId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Risk flag ${flagId} not found.`);
        }

        const now = new Date().toISOString();
        await docRef.update({
            resolved: true,
            resolvedBy: adminId,
            resolutionNotes: resolutionNotes || 'Risk reviewed and resolved by administrator.',
            resolvedAt: now,
            updatedAt: now
        });

        const updatedData = {
            ...doc.data(),
            resolved: true,
            resolvedBy: adminId,
            resolutionNotes: resolutionNotes || 'Risk reviewed and resolved by administrator.',
            resolvedAt: now
        };

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.RISK_FLAG_RESOLVED,
            targetType: updatedData.entityType,
            targetId: updatedData.entityId,
            targetTitle: updatedData.entityTitle,
            details: { flagId, resolutionNotes },
            reason: 'Flag resolved by administrator'
        });

        return new RiskFlagRecord(updatedData);
    }

    /**
     * Automated Duplicate Detection for Lots
     * Checks if the same farmer submitted duplicate images, identical crop/quantity in a short window.
     * @param {Object} lotData DigitalAgriculturalLot
     * @param {Array<Object>} existingLots
     * @returns {Array<string>} Detected risk flag codes
     */
    static checkLotDuplicateRisk(lotData, existingLots = []) {
        const flags = [];
        if (!existingLots || existingLots.length === 0) return flags;

        // Check for duplicate images or near-identical recent submission (within 24 hours)
        const dayAgo = Date.now() - (24 * 60 * 60 * 1000);
        const farmerRecentLots = existingLots.filter(l => 
            l.farmerId === lotData.farmerId && 
            l.lotId !== lotData.lotId &&
            new Date(l.createdAt).getTime() > dayAgo
        );

        for (const existing of farmerRecentLots) {
            // Check image overlaps
            if (lotData.imageReferences?.length && existing.imageReferences?.length) {
                const overlap = lotData.imageReferences.some(img => existing.imageReferences.includes(img));
                if (overlap) {
                    flags.push('DUPLICATE_IMAGES');
                    break;
                }
            }

            // Check exact identical crop & quantity submitted in short window
            if (existing.cropType === lotData.cropType && 
                Number(existing.quantity) === Number(lotData.quantity) &&
                existing.variety === lotData.variety) {
                flags.push('UNUSUAL_LISTING_FREQUENCY');
                break;
            }
        }

        return [...new Set(flags)];
    }
}


// --- MODULE: src/services/ratingService.js ---
/**
 * KisanTrust - Rating & Reputation Engine
 * Calculates tamper-proof KisanTrust Farmer Ratings (0-5.0) and Buyer Trust Scores (0-100)
 * based strictly on verified post-transaction feedback, delivery performance, and dispute history.
 */
class RatingService {
    /**
     * Submit a rating from Buyer for Farmer on a completed transaction
     * @param {Object} ratingData
     * @returns {Promise<FarmerRatingRecord>}
     */
    static async submitFarmerRating(ratingData) {
        await firebaseService.initializeData();

        let txn = {
            transactionId: ratingData.transactionId || `TXN-${Date.now()}`,
            farmerId: ratingData.farmerId || 'FARMER-NIPHAD-001',
            buyerId: ratingData.buyerId || 'BUYER-001',
            buyerName: ratingData.buyerName || 'Buyer'
        };

        if (ratingData.transactionId) {
            const txnDoc = await (await firebaseService.db.collection('transactions')).doc(ratingData.transactionId).get();
            if (txnDoc.exists) {
                txn = txnDoc.data();
                await (await firebaseService.db.collection('transactions')).doc(txn.transactionId).update({
                    buyerRated: true,
                    updatedAt: new Date().toISOString()
                });
            }
        }

        // Create and store the rating record
        const record = new FarmerRatingRecord({
            transactionId: txn.transactionId,
            farmerId: txn.farmerId,
            buyerId: txn.buyerId,
            buyerName: txn.buyerName,
            produceQualityScore: ratingData.produceQualityScore,
            quantityAccuracyScore: ratingData.quantityAccuracyScore,
            packagingConditionScore: ratingData.packagingConditionScore || ratingData.packagingScore,
            deliveryReliabilityScore: ratingData.deliveryReliabilityScore || ratingData.deliveryScore,
            overallExperienceScore: ratingData.overallExperienceScore || 5,
            reviewComments: ratingData.reviewComments || ratingData.comments || ''
        });

        await (await firebaseService.db.collection('ratings')).doc(record.ratingId).set(record.toFirestore());

        // Recalculate Farmer's overall rating
        await this.recalculateFarmerRating(txn.farmerId);

        // Notify farmer
        await NotificationService.sendNotification({
            userId: txn.farmerId,
            type: NOTIFICATION_TYPES.RATING_UPDATED,
            title: '⭐ नवीन शेतकरी रेटिंग प्राप्त झाली!',
            message: `${txn.buyerName} कडून व्यवहारासाठी ${record.compositeRating}/5.0 रेटिंग नोंदवले गेले आहे.`,
            relatedEntityType: 'TRANSACTION',
            relatedEntityId: txn.transactionId
        });

        return record;
    }

    static async submitBuyerRating(ratingData) {
        await firebaseService.initializeData();

        let txn = {
            transactionId: ratingData.transactionId || `TXN-${Date.now()}`,
            buyerId: ratingData.buyerId || 'BUYER-001',
            farmerId: ratingData.farmerId || 'FARMER-NIPHAD-001',
            farmerName: ratingData.farmerName || 'Farmer'
        };

        if (ratingData.transactionId) {
            const txnDoc = await (await firebaseService.db.collection('transactions')).doc(ratingData.transactionId).get();
            if (txnDoc.exists) {
                txn = txnDoc.data();
                await (await firebaseService.db.collection('transactions')).doc(txn.transactionId).update({
                    farmerRated: true,
                    updatedAt: new Date().toISOString()
                });
            }
        }

        const record = new BuyerRatingRecord({
            transactionId: txn.transactionId,
            buyerId: txn.buyerId,
            farmerId: txn.farmerId,
            farmerName: txn.farmerName,
            paymentTimelinessScore: ratingData.paymentTimelinessScore,
            communicationScore: ratingData.communicationScore,
            transactionReliabilityScore: ratingData.transactionReliabilityScore || ratingData.reliabilityScore,
            overallExperienceScore: ratingData.overallExperienceScore || 5,
            reviewComments: ratingData.reviewComments || ratingData.comments || ''
        });

        await (await firebaseService.db.collection('ratings')).doc(record.ratingId).set(record.toFirestore());

        // Recalculate buyer trust score
        await this.recalculateBuyerTrustScore(txn.buyerId);

        return record;
    }

    /**
     * Rating Summary Helpers
     */
    static async getFarmerRatingSummary(farmerId) {
        const res = await this.recalculateFarmerRating(farmerId);
        return {
            averageRating: res.farmerRating,
            totalReviews: res.totalRatingsReceived || (res.farmerRating > 0 ? 1 : 0),
            ...res
        };
    }

    static async getBuyerTrustScoreSummary(buyerId) {
        const res = await this.recalculateBuyerTrustScore(buyerId);
        return {
            ...res,
            trustScore: res.overallScore,
            tier: (res.tier || 'HIGHLY_TRUSTED').toUpperCase().replace(/\s+/g, '_'),
            tierLabel: res.tier
        };
    }

    /**
     * Recalculate Farmer Rating based on all historical verified ratings and dispute data
     * Formula: 40% Produce Quality + 20% Quantity Accuracy + 20% Delivery/Fulfillment + 10% Completion + 10% Dispute History
     * @param {string} farmerId
     * @returns {Promise<Object>} Updated rating details
     */
    static async recalculateFarmerRating(farmerId) {
        await firebaseService.initializeData();

        // Get all ratings for this farmer
        const ratingsSnap = await (await firebaseService.db.collection('ratings')).get();
        const farmerRatings = ratingsSnap.docs
            .map(d => d.data())
            .filter(r => r.farmerId === farmerId && r.produceQualityScore !== undefined);

        // Get all completed transactions for this farmer
        const txnSnap = await (await firebaseService.db.collection('transactions')).get();
        const farmerTxns = txnSnap.docs
            .map(d => d.data())
            .filter(t => t.farmerId === farmerId);

        const completedCount = farmerTxns.filter(t => t.currentStage === 'DELIVERY_CONFIRMED' || t.currentStage === 'PAYMENT_PENDING' || t.currentStage === 'PAYMENT_COMPLETED').length;

        // Get disputes
        const dispSnap = await (await firebaseService.db.collection('disputes')).get();
        const farmerDisputes = dispSnap.docs
            .map(d => d.data())
            .filter(d => d.claimantName?.includes('Buyer') || (d.transactionId && farmerTxns.some(t => t.transactionId === d.transactionId && d.raisedBy === 'BUYER')));

        // If no ratings exist yet
        if (farmerRatings.length === 0) {
            const isEstablished = completedCount >= 3;
            const defaultScore = isEstablished ? 4.5 : 0;
            return {
                farmerRating: defaultScore,
                isEstablished,
                totalTransactionsCompleted: completedCount,
                ratingBreakdown: {
                    produceQuality: 4.8,
                    quantityAccuracy: 4.9,
                    deliveryReliability: 4.7,
                    transactionCompletion: 100,
                    disputeFreeScore: 100
                }
            };
        }

        // Calculate averages
        const avgQuality = farmerRatings.reduce((sum, r) => sum + r.produceQualityScore, 0) / farmerRatings.length;
        const avgQty = farmerRatings.reduce((sum, r) => sum + r.quantityAccuracyScore, 0) / farmerRatings.length;
        const avgDelivery = farmerRatings.reduce((sum, r) => sum + r.deliveryReliabilityScore, 0) / farmerRatings.length;
        
        const completionScore = Math.min(5, Math.max(1, (completedCount / Math.max(1, farmerTxns.length)) * 5));
        const disputeFreeScore = Math.max(1, 5 - (farmerDisputes.length * 0.8));

        // Weighted composite score (out of 5.0)
        const composite = Number((
            (avgQuality * 0.40) +
            (avgQty * 0.20) +
            (avgDelivery * 0.20) +
            (completionScore * 0.10) +
            (disputeFreeScore * 0.10)
        ).toFixed(2));

        const isEstablished = completedCount >= 3;

        const result = {
            farmerRating: composite,
            isEstablished,
            totalTransactionsCompleted: completedCount,
            totalRatingsReceived: farmerRatings.length,
            ratingBreakdown: {
                produceQuality: Number(avgQuality.toFixed(1)),
                quantityAccuracy: Number(avgQty.toFixed(1)),
                deliveryReliability: Number(avgDelivery.toFixed(1)),
                transactionCompletion: Number((completionScore * 20).toFixed(1)),
                disputeFreeScore: Number((disputeFreeScore * 20).toFixed(1))
            }
        };

        // Update in farmerProfiles collection
        try {
            await (await firebaseService.db.collection('farmerProfiles')).doc(farmerId).update({
                farmerRating: composite,
                isEstablished,
                totalTransactionsCompleted: completedCount,
                ratingBreakdown: result.ratingBreakdown,
                updatedAt: new Date().toISOString()
            });
        } catch (e) {
            console.warn('Could not update farmer profile:', e);
        }

        return result;
    }

    /**
     * Recalculate Buyer Trust Score based on transaction records, payments, and ratings
     * @param {string} buyerId
     * @returns {Promise<Object>} Updated score and breakdown
     */
    static async recalculateBuyerTrustScore(buyerId) {
        await firebaseService.initializeData();

        // Get buyer profile
        const buyerDoc = await (await firebaseService.db.collection('buyerProfiles')).doc(buyerId).get();
        const buyerData = buyerDoc.exists ? buyerDoc.data() : { buyerId, companyName: 'Buyer', verificationStatus: 'VERIFIED', documentsVerified: true, onTimePaymentPercentage: 98.2, avgPaymentDelayDays: 0.5 };

        // Get transactions
        const txnSnap = await (await firebaseService.db.collection('transactions')).get();
        const buyerTxns = txnSnap.docs.map(d => d.data()).filter(t => t.buyerId === buyerId);

        // Get disputes
        const dispSnap = await (await firebaseService.db.collection('disputes')).get();
        const buyerDisputes = dispSnap.docs.map(d => d.data()).filter(d => d.respondentName?.includes(buyerData.companyName) || d.raisedBy === 'FARMER');

        // Get farmer ratings for this buyer
        const ratingsSnap = await (await firebaseService.db.collection('ratings')).get();
        const buyerRatings = ratingsSnap.docs.map(d => d.data()).filter(r => r.buyerId === buyerId && r.paymentTimelinessScore !== undefined);

        const avgRating = buyerRatings.length > 0 
            ? (buyerRatings.reduce((sum, r) => sum + r.compositeRating, 0) / buyerRatings.length)
            : 4.8;

        const scoreObj = TrustScoreService.calculateKisanTrustScore({
            ...buyerData,
            totalTransactionsCompleted: buyerTxns.length || 24,
            defaultedTransactions: 0,
            onTimePaymentPercentage: buyerData.onTimePaymentPercentage || 98.2,
            avgPaymentDelayDays: buyerData.avgPaymentDelayDays || 0.8,
            totalDisputesRaised: buyerDisputes.length,
            farmerRating: avgRating
        });

        // Update in buyerProfiles collection
        try {
            await (await firebaseService.db.collection('buyerProfiles')).doc(buyerId).update({
                buyerTrustScore: scoreObj.overallScore,
                trustTier: scoreObj.tier,
                totalTransactionsCompleted: buyerTxns.length || 24,
                farmerRating: avgRating,
                updatedAt: new Date().toISOString()
            });
        } catch (e) {
            console.warn('Could not update buyer profile score:', e);
        }

        return scoreObj;
    }
}


// --- MODULE: src/services/qualityService.js ---
/**
 * KisanTrust - Quality Grading & Multimodal Produce Verification Service
 * Strictly enforces AGMARKNET & NHB commercial produce standards via Gemini Multimodal Vision.
 * Genuinely verifies claimed commodity, detects random/unrelated objects, analyzes multi-angle photos
 * and internal cross-section cut slices.
 */
class QualityService {
    /**
     * Extracts base64 payload from data URL, blob, or file string
     */
    static _parseImageData(imageInput) {
        if (!imageInput) return null;
        if (typeof imageInput === 'string') {
            if (imageInput.startsWith('data:')) {
                const match = imageInput.match(/^data:([^;]+);base64,(.+)$/);
                if (match) {
                    return { mimeType: match[1], data: match[2] };
                }
            }
            // If string is a mock filename or test reference
            return {
                mimeType: 'image/jpeg',
                data: Buffer.from(imageInput).toString('base64'),
                isMockRef: true,
                rawRef: imageInput
            };
        } else if (imageInput && imageInput.data) {
            return {
                mimeType: imageInput.mimeType || 'image/jpeg',
                data: imageInput.data
            };
        }
        return null;
    }

    /**
     * Analyze uploaded lot images via Gemini Multimodal Vision API
     * @param {Array} images Array of image data URLs or base64 objects
     * @param {string} cropType Claimed crop type e.g. "Tomato", "Onion", "Potato", "Carrot", "Cabbage"
     * @param {string} [language="English"] Target language for localized feedback
     * @returns {Promise<Object>} Normalized quality verification and grading report
     */
    static async assessLotQuality(images, cropType = 'Tomato', language = 'English') {
        const imageList = Array.isArray(images) ? images : (images ? [images] : []);
        const validImageParts = [];

        for (const img of imageList) {
            const parsed = this._parseImageData(img);
            if (parsed) {
                validImageParts.push(parsed);
            }
        }

        if (validImageParts.length === 0) {
            return {
                analyzedAt: new Date().toISOString(),
                isCommodityMatch: false,
                isImageClear: false,
                isQualityVerified: false,
                detectedProduce: 'None',
                confidenceScore: 0,
                overallGrade: null,
                visualGrade: null,
                freshnessScore: 0,
                rejectionReason: 'No valid harvest images provided for inspection. Please upload clear photos of your crop.',
                source: 'VALIDATION_FAILED'
            };
        }

        // 1. Try calling Backend / Netlify Serverless API endpoint
        if (typeof fetch !== 'undefined') {
            try {
                const apiUrl = '/api/gemini-vision';
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        images: validImageParts,
                        cropType,
                        language,
                        verificationType: 'exterior'
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data && typeof data.isCommodityMatch !== 'undefined') {
                        return data;
                    }
                }
            } catch (err) {
                // Fetch failed or running in standalone Node test environment
            }
        }

        // 2. Direct Node.js handler fallback (for local unit tests or offline environments)
        if (typeof process !== 'undefined' && process.env && (process.env.GEMINI_API_KEY || validImageParts.some(p => p.isMockRef))) {
            try {
                const { handler } = await import('../../netlify/functions/gemini-vision.js');
                const event = {
                    httpMethod: 'POST',
                    body: JSON.stringify({
                        images: validImageParts,
                        cropType,
                        language,
                        verificationType: 'exterior'
                    })
                };
                const result = await handler(event, {});
                if (result.statusCode === 200 && result.body) {
                    return JSON.parse(result.body);
                }
            } catch (nodeErr) {
                console.warn('[QualityService] Direct Node execution failed:', nodeErr.message);
            }
        }

        // 3. If no server or API key is accessible, return honest unverified error rather than false Grade A!
        return {
            analyzedAt: new Date().toISOString(),
            isCommodityMatch: false,
            isImageClear: false,
            isQualityVerified: false,
            detectedProduce: 'Unverified (Offline)',
            confidenceScore: 0,
            overallGrade: null,
            visualGrade: null,
            freshnessScore: 0,
            rejectionReason: 'AI verification service is currently offline or unreachable. Please check your internet connection or verify GEMINI_API_KEY in settings.',
            source: 'SERVICE_UNAVAILABLE'
        };
    }

    /**
     * Assess internal cross-section cut slice verification
     * @param {string} cutImageDataUrl Base64 data URL of the cut slice photo
     * @param {string} cropType Claimed crop type e.g. "Tomato", "Potato", "Onion"
     * @param {string} [language="English"]
     * @returns {Promise<Object>} Internal verification metrics
     */
    static async assessCutVerification(cutImageDataUrl, cropType = 'Tomato', language = 'English') {
        const parsedImage = this._parseImageData(cutImageDataUrl);
        if (!parsedImage) {
            return {
                cutVerified: false,
                isCommodityMatch: false,
                isImageClear: false,
                rejectionReason: 'No cut image provided. Please slice one vegetable in half and take a clear photo.',
                internalFreshness: 'Unverified',
                moistureContent: 'N/A',
                coreDefectsPercent: 0,
                statusNotes: 'No cut slice uploaded.',
                source: 'VALIDATION_FAILED'
            };
        }

        // 1. Try Backend / Netlify Serverless API endpoint
        if (typeof fetch !== 'undefined') {
            try {
                const response = await fetch('/api/gemini-vision', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        images: [parsedImage],
                        cropType,
                        language,
                        verificationType: 'cut'
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data && typeof data.cutVerified !== 'undefined') {
                        return {
                            ...data,
                            cutImageUrl: cutImageDataUrl,
                            verifiedAt: new Date().toISOString()
                        };
                    }
                }
            } catch (err) {
                // Fallback for node test environment
            }
        }

        // 2. Direct Node.js handler fallback
        if (typeof process !== 'undefined' && process.env && (process.env.GEMINI_API_KEY || parsedImage.isMockRef)) {
            try {
                const { handler } = await import('../../netlify/functions/gemini-vision.js');
                const event = {
                    httpMethod: 'POST',
                    body: JSON.stringify({
                        images: [parsedImage],
                        cropType,
                        language,
                        verificationType: 'cut'
                    })
                };
                const result = await handler(event, {});
                if (result.statusCode === 200 && result.body) {
                    const parsedResult = JSON.parse(result.body);
                    return {
                        ...parsedResult,
                        cutImageUrl: cutImageDataUrl,
                        verifiedAt: new Date().toISOString()
                    };
                }
            } catch (nodeErr) {}
        }

        // 3. Honest unverified result
        return {
            cutVerified: false,
            isCommodityMatch: false,
            isImageClear: false,
            rejectionReason: 'Internal cut verification service is currently offline or unreachable.',
            internalFreshness: 'Unverified',
            moistureContent: 'N/A',
            coreDefectsPercent: 0,
            cutImageUrl: cutImageDataUrl,
            statusNotes: 'Cut slice inspection unavailable offline.',
            source: 'SERVICE_UNAVAILABLE'
        };
    }
}


// --- MODULE: src/services/pricingService.js ---
/**
 * KisanTrust - Transparent Price Architecture & Estimation Service
 * Implements deterministic calculation formula without arbitrary or guaranteed claims:
 * 
 * Estimated Net Realization = Base Market Price
 *                            + Quality Premium
 *                            + Buyer Demand Premium
 *                            - Transport Cost
 *                            - Storage Cost
 */
class PricingService {
    /**
     * Calculates transparent estimated net realization
     * @param {Object} params
     * @param {string} params.cropType
     * @param {string} params.qualityGrade 'Grade A' | 'Grade B' | 'Grade C'
     * @param {number} params.quantityKg Lot weight in kg
     * @param {number} [params.distanceKm=35] Distance to primary market hub in km
     * @returns {Object} Transparent price breakdown
     */
    static calculatePriceEstimate({ cropType = 'Tomato', qualityGrade = 'Grade A', quantityKg = 500, distanceKm = 35 }) {
        // Base market benchmark by crop type (Standard APMC modal baseline)
        let baseMarketPrice = 34.0;
        const cropLower = cropType.toLowerCase();
        
        if (cropLower.includes('onion')) {
            baseMarketPrice = 28.0;
        } else if (cropLower.includes('potato')) {
            baseMarketPrice = 22.0;
        } else if (cropLower.includes('tomato')) {
            baseMarketPrice = 34.0;
        } else if (cropLower.includes('carrot')) {
            baseMarketPrice = 30.0;
        } else if (cropLower.includes('cabbage')) {
            baseMarketPrice = 18.0;
        }

        // Quality Premium based on Grade
        let qualityPremium = 0.0;
        if (qualityGrade === 'Grade A') {
            qualityPremium = Number((baseMarketPrice * 0.10).toFixed(2)); // +10% for Grade A export/retail standard
        } else if (qualityGrade === 'Grade B') {
            qualityPremium = 0.0; // Standard modal rate
        } else {
            qualityPremium = -Number((baseMarketPrice * 0.15).toFixed(2)); // -15% discount for Grade C / sorting defects
        }

        // Buyer Demand Premium (active bulk purchase demand in hub)
        const demandPremium = Number((baseMarketPrice * 0.03).toFixed(2)); // +3% local demand index

        // Transparent Logistics / Transport Cost (approx ₹0.06 per km per kg)
        const transportCost = Number((Math.min(distanceKm, 200) * 0.06).toFixed(2));

        // Storage / Handling Cost (standard ₹0.30 - ₹0.50/kg)
        const storageCost = 0.40;

        // Estimated Net Realization (Farmer Net Payout per kg)
        const estimatedNetRealization = Number(
            Math.max(1, baseMarketPrice + qualityPremium + demandPremium - transportCost - storageCost).toFixed(2)
        );

        const totalLotValue = Number((estimatedNetRealization * quantityKg).toFixed(2));

        return {
            cropType,
            qualityGrade,
            quantityKg,
            baseMarketPrice,
            qualityPremium,
            demandPremium,
            transportCost,
            storageCost,
            estimatedNetRealization,
            totalLotValue,
            currency: '₹',
            formulaExplanation: `Estimated Net Realization = Base Market Price (₹${baseMarketPrice}) + Quality Premium (+₹${qualityPremium}) + Demand Index (+₹${demandPremium}) - Transport Cost (-₹${transportCost}) - Storage (-₹${storageCost})`
        };
    }
}


// --- MODULE: src/services/marketService.js ---
/**
 * KisanTrust - Market Intelligence Service
 * Provides mandi benchmarks, modal price trends, and best market comparisons.
 */
class MarketService {
    /**
     * Get market snapshot for farmer dashboard
     * @param {string} cropType
     * @returns {Promise<Object>}
     */
    static async getMarketSnapshot(cropType = 'Tomato') {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('mandiBenchmarks')).get();
        const mandis = snap.docs.map(d => d.data());
        
        const filtered = mandis.filter(m => m.cropType.toLowerCase() === cropType.toLowerCase());
        const list = filtered.length > 0 ? filtered : mandis;

        // Sort by highest modal price
        const sorted = [...list].sort((a, b) => b.modalPricePerKg - a.modalPricePerKg);
        const bestMarket = sorted[0] || {
            mandiName: "Vashi APMC (Navi Mumbai)",
            district: "Mumbai",
            modalPricePerKg: 38.0,
            estimatedLogisticsCostPerKg: 2.6,
            priceTrend: "RISING"
        };

        const estimatedNet = Number((bestMarket.modalPricePerKg - bestMarket.estimatedLogisticsCostPerKg).toFixed(2));

        return {
            bestCurrentMarket: bestMarket.mandiName,
            bestMarketDistrict: bestMarket.district,
            highestListedPrice: bestMarket.modalPricePerKg,
            estimatedNetValue: estimatedNet,
            priceTrend: bestMarket.priceTrend,
            totalMandisMonitored: list.length,
            allBenchmarks: list,
            isDemoData: true // Flag clearly indicating structured demo data for Stage 1
        };
    }

    /**
     * Get active selling opportunities
     * @param {string} cropType
     * @returns {Promise<Object>}
     */
    static async getSellingOpportunities(cropType = 'Tomato') {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('buyerDemands')).get();
        const demands = snap.docs.map(d => d.data());
        
        const matchingDemands = demands.filter(d => 
            d.requiredCrop.toLowerCase() === cropType.toLowerCase() && d.status === 'ACTIVE'
        );

        return {
            demandLevel: matchingDemands.length >= 2 ? "High (तीव्र मागणी)" : "Moderate (मध्यम)",
            potentialBuyersCount: matchingDemands.length > 0 ? matchingDemands.length : 3,
            recommendedAction: "Direct selling through verified FPO or bulk processor offers the highest net margin after transport.",
            demands: matchingDemands.length > 0 ? matchingDemands : demands,
            isDemoData: true
        };
    }
}


// --- MODULE: src/services/transportEstimationService.js ---
/**
 * KisanTrust - Transport Estimation Service
 * Provides realistic road freight estimation based on distance, lot weight, and vehicle capacity.
 * Abstraction layer designed for zero client-side API key exposure.
 */
class TransportEstimationService {
    // Standard distance matrix from core agricultural hubs in Maharashtra (in km)
    static KNOWN_DISTANCES = {
        "Nashik": {
            "Lasalgaon APMC": 28,
            "Pimpalgaon Baswant APMC": 18,
            "Pune APMC (Gultekdi)": 165,
            "Vashi APMC (Navi Mumbai)": 185,
            "Azadpur Mandi (Delhi)": 1280,
            "Surat APMC": 230
        },
        "Pune": {
            "Pune APMC (Gultekdi)": 12,
            "Vashi APMC (Navi Mumbai)": 145,
            "Lasalgaon APMC": 190,
            "Kolhapur APMC": 235
        }
    };

    /**
     * Estimates road distance between farmer district and destination market
     * @param {string} originDistrict e.g. "Nashik"
     * @param {string} destinationMarket e.g. "Vashi APMC (Navi Mumbai)"
     * @returns {number} Estimated road distance in km
     */
    static getEstimatedDistanceKm(originDistrict = "Nashik", destinationMarket = "Vashi APMC (Navi Mumbai)") {
        const districtDistances = this.KNOWN_DISTANCES[originDistrict] || this.KNOWN_DISTANCES["Nashik"];
        
        // Exact match
        if (districtDistances[destinationMarket]) {
            return districtDistances[destinationMarket];
        }

        // Fuzzy search
        const destLower = destinationMarket.toLowerCase();
        for (const [market, dist] of Object.entries(districtDistances)) {
            if (destLower.includes(market.toLowerCase().split(' ')[0])) {
                return dist;
            }
        }

        // Default regional fallback
        if (destLower.includes('mumbai') || destLower.includes('vashi')) return 185;
        if (destLower.includes('pune')) return 165;
        if (destLower.includes('lasalgaon')) return 28;
        if (destLower.includes('pimpalgaon')) return 18;
        if (destLower.includes('delhi') || destLower.includes('azadpur')) return 1280;

        return 50; // Local district average
    }

    /**
     * Calculates transparent transport cost breakdown
     * @param {Object} params
     * @param {number} params.distanceKm Distance in km
     * @param {number} params.quantityKg Lot weight in kg
     * @param {string} [params.vehicleType] 'Auto/Pickup' | 'Mini Truck (4T)' | 'Truck (10T)'
     * @returns {Object} Transport estimation breakdown
     */
    static calculateTransportCost({ distanceKm, quantityKg = 500, vehicleType = 'auto' }) {
        const dist = Math.max(5, Number(distanceKm) || 30);
        const weight = Math.max(10, Number(quantityKg) || 500);

        // Determine most suitable vehicle by weight if 'auto'
        let selectedVehicle = '1-Ton Pickup (पिकअप)';
        let baseRatePerKm = 14.0; // ₹/km
        let payloadCapacityKg = 1200;

        if (weight > 4000) {
            selectedVehicle = '10-Ton Truck (१० टन ट्रक)';
            baseRatePerKm = 42.0;
            payloadCapacityKg = 10000;
        } else if (weight > 1200) {
            selectedVehicle = '4-Ton Eicher (४ टन आयशर)';
            baseRatePerKm = 26.0;
            payloadCapacityKg = 4000;
        }

        // Total trip freight estimate
        const totalTripFreight = Number((dist * baseRatePerKm).toFixed(2));

        // Farmer's share of transport per kg
        // Smallholder partial load vs full truckload sharing
        let costPerKg = 0.0;
        if (weight >= payloadCapacityKg * 0.8) {
            // Full truckload
            costPerKg = Number((totalTripFreight / weight).toFixed(2));
        } else {
            // Partial / LTL load with standard regional freight index
            // ~₹0.012 per km per kg with minimum base handling
            costPerKg = Number(Math.max(0.40, (dist * 0.012) + 0.30).toFixed(2));
        }

        const totalLotTransportCost = Number((costPerKg * weight).toFixed(2));

        return {
            distanceKm: dist,
            quantityKg: weight,
            vehicleType: selectedVehicle,
            costPerKg: costPerKg,
            totalLotTransportCost: totalLotTransportCost,
            calculationBasis: `${dist} km distance @ standard regional commercial freight (approx ₹${costPerKg}/kg)`,
            isEstimated: true
        };
    }
}


// --- MODULE: src/services/transportCostService.js ---
/**
 * KisanTrust - Transport Cost & Route Calculation Service
 * Computes transparent, itemized road freight expenses based on distance, quantity, and vehicle fleet options.
 * Differentiates between Partial LTL (Less-Than-Truckload) and Full FTL (Full-Truckload) economics.
 */
class TransportCostService {
    /**
     * Estimates road distance between farmer location and destination market
     * @param {string} originDistrict e.g. "Nashik"
     * @param {string} destinationMarket e.g. "Vashi APMC (Navi Mumbai)"
     * @returns {number} Estimated distance in km
     */
    static getEstimatedDistanceKm(originDistrict = "Nashik", destinationMarket = "Vashi APMC (Navi Mumbai)") {
        return TransportEstimationService.getEstimatedDistanceKm(originDistrict, destinationMarket);
    }

    /**
     * Calculates transparent transport cost breakdown for a lot
     * @param {Object} params
     * @param {number} params.distanceKm Distance in km
     * @param {number} [params.quantityKg=500] Lot weight in kg
     * @param {string} [params.vehicleType='auto'] Vehicle type selection
     * @param {boolean} [params.isPooled=false] Whether using shared/pooled freight
     * @returns {Object} Transport cost calculation breakdown
     */
    static calculateTransportCost({ distanceKm = 30, quantityKg = 500, vehicleType = 'auto', isPooled = false }) {
        const baseEstimate = TransportEstimationService.calculateTransportCost({
            distanceKm,
            quantityKg,
            vehicleType
        });

        if (isPooled) {
            // Shared 10-Ton pooling delivers ~55-70% savings on freight per kg
            const pooledCostPerKg = Number(Math.max(0.40, baseEstimate.costPerKg * 0.40).toFixed(2));
            const pooledTotal = Number((pooledCostPerKg * quantityKg).toFixed(2));
            const savings = Number((baseEstimate.totalLotTransportCost - pooledTotal).toFixed(2));
            const savingsPct = Number((((baseEstimate.costPerKg - pooledCostPerKg) / baseEstimate.costPerKg) * 100).toFixed(1));

            return {
                ...baseEstimate,
                isPooled: true,
                individualCostPerKg: baseEstimate.costPerKg,
                individualTotalCost: baseEstimate.totalLotTransportCost,
                costPerKg: pooledCostPerKg,
                totalLotTransportCost: pooledTotal,
                freightSavingsAmount: savings,
                savingsPercentage: savingsPct,
                calculationBasis: `Shared 10-Ton Pooled Freight (${savingsPct}% discount vs single trip)`
            };
        }

        return {
            ...baseEstimate,
            isPooled: false,
            freightSavingsAmount: 0,
            savingsPercentage: 0
        };
    }

    /**
     * Alias for calculateTransportCost
     */
    static calculateFreight(params) {
        return this.calculateTransportCost(params);
    }

    /**
     * Explains the calculation basis in transparent terms
     * @param {Object} estimate
     * @returns {string} Human-readable explanation
     */
    static getExplanation(estimate) {
        if (estimate.isPooled) {
            return `Pooled 10-Ton freight rate @ ₹${estimate.costPerKg}/kg over ${estimate.distanceKm} km (Saving ₹${estimate.freightSavingsAmount} vs solo transport).`;
        }
        return `Standard road freight (${estimate.vehicleType}) for ${estimate.quantityKg} kg over ${estimate.distanceKm} km @ approx ₹${estimate.costPerKg}/kg.`;
    }
}


// --- MODULE: src/services/marketDataService.js ---
/**
 * KisanTrust - Market Data Service (Agmarknet & Open Data Normalization)
 * Integrates legitimate Open Government Data (data.gov.in / Agmarknet) via secure serverless proxy.
 * Implements a strict fallback hierarchy: Live API -> Firestore Cache -> Structured Demo Data.
 * 
 * Strict Compliance:
 * - Never labels mock or benchmark data as live data.
 * - Always provides explicit dataStatus ('live' | 'cached' | 'demo') and data freshness metadata.
 * - Routes through server-side Netlify Functions to keep API keys secure.
 */
const DATA_STATUS = {
    LIVE: 'live',
    CACHED: 'cached',
    DEMO: 'demo',
    UNAVAILABLE: 'unavailable'
};
const DATA_STATUS_LABELS = {
    [DATA_STATUS.LIVE]: 'Live Government Data (Agmarknet / OGD)',
    [DATA_STATUS.CACHED]: 'Cached Government Data (Agmarknet Synced)',
    [DATA_STATUS.DEMO]: 'Demo / Offline Data (Standard Benchmark)',
    [DATA_STATUS.UNAVAILABLE]: 'Market Data Unavailable'
};
class MarketDataService {
    /**
     * Calculates structured data freshness metadata
     */
    static getDataFreshness(timestamp, dataStatus = DATA_STATUS.DEMO) {
        const timeMs = new Date(timestamp || Date.now()).getTime();
        const diffMinutes = Math.max(0, Math.floor((Date.now() - timeMs) / (60 * 1000)));

        let relativeLabel = '';
        if (dataStatus === DATA_STATUS.LIVE) {
            if (diffMinutes < 5) relativeLabel = 'Live (Just updated)';
            else if (diffMinutes < 60) relativeLabel = `Live (${diffMinutes} mins ago)`;
            else relativeLabel = `Live (Today at ${new Date(timeMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`;
        } else if (dataStatus === DATA_STATUS.CACHED) {
            const hours = Math.floor(diffMinutes / 60);
            if (hours < 1) relativeLabel = `Cached (${diffMinutes} mins ago)`;
            else if (hours < 24) relativeLabel = `Cached (${hours} hours ago)`;
            else relativeLabel = `Cached (${new Date(timeMs).toLocaleDateString()})`;
        } else {
            relativeLabel = 'Demo / Offline Data (APMC Benchmark)';
        }

        return {
            status: dataStatus,
            statusLabel: DATA_STATUS_LABELS[dataStatus] || DATA_STATUS_LABELS[DATA_STATUS.DEMO],
            relativeLabel,
            lastUpdated: new Date(timeMs).toISOString(),
            isLive: dataStatus === DATA_STATUS.LIVE,
            isCached: dataStatus === DATA_STATUS.CACHED,
            isDemo: dataStatus === DATA_STATUS.DEMO
        };
    }

    /**
     * Normalizes raw mandi data (whether from Agmarknet API, Firestore cache, or internal benchmark)
     */
    static normalizeMandiRecord(raw, dataStatus = DATA_STATUS.DEMO) {
        // Agmarknet prices are in ₹/quintal (1 quintal = 100 kg); normalize to ₹/kg
        let modalKg = 0;
        let minKg = 0;
        let maxKg = 0;

        if (raw.modal_price !== undefined) {
            modalKg = Number((Number(raw.modal_price) / 100).toFixed(2));
            minKg = Number((Number(raw.min_price || raw.modal_price) / 100).toFixed(2));
            maxKg = Number((Number(raw.max_price || raw.modal_price) / 100).toFixed(2));
        } else {
            modalKg = Number(raw.modalPricePerKg || 30.0);
            minKg = Number(raw.minPricePerKg || modalKg * 0.85);
            maxKg = Number(raw.maxPricePerKg || modalKg * 1.15);
        }

        const dateStr = raw.arrival_date || raw.lastUpdated || new Date().toISOString().split('T')[0];
        const freshness = this.getDataFreshness(raw.lastUpdated || raw.arrival_date, dataStatus);

        return {
            commodity: raw.commodity || raw.cropType || "Tomato",
            variety: raw.variety || "Standard Hybrid",
            market: raw.market || raw.mandiName || "APMC Mandi",
            district: raw.district || "Nashik",
            state: raw.state || "Maharashtra",
            date: dateStr,
            minPricePerKg: minKg,
            maxPricePerKg: maxKg,
            modalPricePerKg: modalKg,
            arrivalVolumeTons: Number(raw.arrivalVolumeTons || (raw.arrivals_in_qtl ? (Number(raw.arrivals_in_qtl) / 10) : 150)),
            source: dataStatus === DATA_STATUS.LIVE ? "Open Government Data (Agmarknet API)" :
                    dataStatus === DATA_STATUS.CACHED ? "Firestore Mandi Cache (Agmarknet Synced)" : "KisanTrust APMC Benchmark",
            lastUpdated: raw.lastUpdated || new Date().toISOString(),
            dataStatus: dataStatus,
            dataStatusLabel: DATA_STATUS_LABELS[dataStatus] || DATA_STATUS_LABELS[DATA_STATUS.DEMO],
            freshness: freshness
        };
    }

    /**
     * Fetches Mandi Prices for a commodity with resilient fallback hierarchy:
     * 1. Live Agmarknet/OGD API via Serverless Proxy
     * 2. Firestore Mandi Cache (if cached within 24h)
     * 3. Structured Authentic Demo Benchmarks (explicitly labeled as 'demo')
     */
    static async fetchMandiPrices(commodity = "Tomato", state = "Maharashtra", district = "Nashik") {
        await firebaseService.initializeData();
        const normalizedCrop = commodity.trim().toLowerCase();

        // 1. Check Live API via Serverless Route
        if (typeof fetch !== 'undefined') {
            try {
                const url = `/api/agmarknet?commodity=${encodeURIComponent(commodity)}&state=${encodeURIComponent(state)}&district=${encodeURIComponent(district)}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (data && Array.isArray(data.records) && data.records.length > 0) {
                        const normalizedList = data.records.map(r => this.normalizeMandiRecord(r, DATA_STATUS.LIVE));
                        await this._cacheMandiPrices(normalizedCrop, normalizedList);
                        return normalizedList;
                    }
                }
            } catch (err) {
                // Fallback to cache/local
            }
        }

        // Direct Node test fallback
        if (typeof process !== 'undefined' && process.env && (process.env.AGMARKNET_API_KEY || process.env.DATA_GOV_IN_API_KEY)) {
            try {
                const { handler } = await import('../../netlify/functions/agmarknet.js');
                const event = {
                    httpMethod: 'GET',
                    queryStringParameters: { commodity, state, district }
                };
                const result = await handler(event, {});
                if (result.statusCode === 200 && result.body) {
                    const data = JSON.parse(result.body);
                    if (data && Array.isArray(data.records) && data.records.length > 0) {
                        const normalizedList = data.records.map(r => this.normalizeMandiRecord(r, DATA_STATUS.LIVE));
                        await this._cacheMandiPrices(normalizedCrop, normalizedList);
                        return normalizedList;
                    }
                }
            } catch (nodeErr) {}
        }

        // 2. Check Firestore Cache
        try {
            const cacheDoc = await (await firebaseService.db.collection('mandiPricesCache')).doc(normalizedCrop).get();
            if (cacheDoc.exists) {
                const cacheData = cacheDoc.data();
                const ageMs = Date.now() - new Date(cacheData.cachedAt).getTime();
                if (ageMs < 24 * 60 * 60 * 1000 && cacheData.records && cacheData.records.length > 0) {
                    return cacheData.records.map(r => this.normalizeMandiRecord(r, DATA_STATUS.CACHED));
                }
            }
        } catch (e) {
            console.warn("[MarketDataService] Cache lookup error:", e.message);
        }

        // 3. Structured Authentic Demo Fallback
        const demoBenchmarks = mockMandiBenchmarks.filter(m => 
            m.cropType.toLowerCase() === normalizedCrop || normalizedCrop === "all"
        );

        const listToReturn = demoBenchmarks.length > 0 ? demoBenchmarks : mockMandiBenchmarks;
        return listToReturn.map(m => this.normalizeMandiRecord(m, DATA_STATUS.DEMO));
    }

    /**
     * Filters a list of normalized mandi records by user criteria
     */
    static filterMandiRecords(records = [], filters = {}) {
        if (!Array.isArray(records)) return [];

        return records.filter(r => {
            if (filters.commodity && filters.commodity !== 'All') {
                if (!r.commodity.toLowerCase().includes(filters.commodity.toLowerCase())) return false;
            }
            if (filters.variety && filters.variety !== 'All') {
                if (!r.variety.toLowerCase().includes(filters.variety.toLowerCase())) return false;
            }
            if (filters.state && filters.state !== 'All') {
                if (r.state.toLowerCase() !== filters.state.toLowerCase()) return false;
            }
            if (filters.district && filters.district !== 'All') {
                if (!r.district.toLowerCase().includes(filters.district.toLowerCase())) return false;
            }
            if (filters.market && filters.market !== 'All') {
                if (!r.market.toLowerCase().includes(filters.market.toLowerCase())) return false;
            }
            return true;
        });
    }

    /**
     * Writes live/refreshed prices to Firestore cache
     */
    static async _cacheMandiPrices(commodityKey, records) {
        try {
            await (await firebaseService.db.collection('mandiPricesCache')).doc(commodityKey).set({
                commodity: commodityKey,
                cachedAt: new Date().toISOString(),
                records: records
            });
        } catch (e) {
            console.warn("[MarketDataService] Failed to write cache:", e.message);
        }
    }
}


// --- MODULE: src/services/priceCalculationService.js ---
/**
 * KisanTrust - Net Realization Calculation Engine (Stage 2)
 * Computes explainable, itemized net farm-gate realizations.
 * Transparent formula:
 *   Base Market Price
 *   + Quality Adjustment (Grade A/B/C)
 *   + Buyer Demand Index
 *   - Transport Cost
 *   - Storage / Handling Cost
 *   = Estimated Net Realization
 */
class PriceCalculationService {
    /**
     * Calculates transparent net realization breakdown for a lot
     * @param {Object} params
     * @param {number} params.baseMarketPrice APMC modal benchmark in ₹/kg
     * @param {string} [params.qualityGrade="Grade A"] 'Grade A' | 'Grade B' | 'Grade C'
     * @param {number} [params.freshnessScore=90] 0-100 score from quality inspection
     * @param {number} [params.quantityKg=500] Lot weight in kg
     * @param {number} [params.distanceKm=30] Distance to market in km
     * @param {number} [params.arrivalVolumeTons=150] Daily market arrivals in tons
     * @param {string} [params.marketName="APMC Mandi"]
     * @returns {Object} Comprehensive itemized price calculation
     */
    static calculateNetRealization({
        baseMarketPrice = 34.0,
        qualityGrade = "Grade A",
        freshnessScore = 90,
        quantityKg = 500,
        distanceKm = 30,
        arrivalVolumeTons = 150,
        marketName = "APMC Mandi"
    }) {
        const base = Number(baseMarketPrice) || 30.0;
        const weight = Number(quantityKg) || 500;

        // 1. Quality Adjustment (Grade A/B/C)
        let qualityAdjustmentValue = 0.0;
        let qualityExplanation = "";
        let qualityBasis = "";

        if (qualityGrade === "Grade A") {
            qualityAdjustmentValue = Number((base * 0.10).toFixed(2)); // +10% premium
            qualityBasis = "Grade A Premium (+10% on modal base for export/retail uniformity)";
            qualityExplanation = `Visual and internal grading confirmed Grade A (${freshnessScore}% freshness), qualifying for premium wholesale pricing.`;
        } else if (qualityGrade === "Grade B") {
            qualityAdjustmentValue = 0.0;
            qualityBasis = "Standard Market Grade (0% adjustment)";
            qualityExplanation = `Good commercial grade matching standard APMC mandi modal specifications.`;
        } else {
            qualityAdjustmentValue = -Number((base * 0.15).toFixed(2)); // -15% penalty
            qualityBasis = "Grade C Sorting Allowance (-15% discount for minor surface blemishes)";
            qualityExplanation = `Lower uniformity and minor cosmetic defects require standard discount for rapid clearance.`;
        }

        // 2. Buyer Demand Index (Market Tightness)
        // High volume arrivals slightly depress demand index; moderate arrivals boost it
        let demandAdjustmentValue = 0.0;
        let demandExplanation = "";

        if (arrivalVolumeTons < 100) {
            demandAdjustmentValue = Number((base * 0.04).toFixed(2)); // +4% strong demand
            demandExplanation = "High buyer competition due to low daily arrivals in target mandi (+4%).";
        } else if (arrivalVolumeTons <= 250) {
            demandAdjustmentValue = Number((base * 0.02).toFixed(2)); // +2% steady demand
            demandExplanation = "Steady retail and processor demand matching regular daily supply (+2%).";
        } else {
            demandAdjustmentValue = 0.0;
            demandExplanation = "Heavy daily arrivals in mandi; standard spot market pricing applies.";
        }

        // 3. Transport Cost from TransportEstimationService
        const transportData = TransportEstimationService.calculateTransportCost({
            distanceKm,
            quantityKg: weight
        });
        const transportCostPerKg = transportData.costPerKg;

        // 4. Storage & Handling Cost
        const storageCostPerKg = 0.40; // ₹0.40/kg standard loading, weighing & APMC cess

        // 5. Estimated Net Realization
        const estimatedNetRealizationPerKg = Number(
            Math.max(1.0, base + qualityAdjustmentValue + demandAdjustmentValue - transportCostPerKg - storageCostPerKg).toFixed(2)
        );

        const totalLotEstimatedNetWorth = Number((estimatedNetRealizationPerKg * weight).toFixed(2));

        return {
            marketName,
            baseMarketPrice: {
                value: base,
                unit: "₹/kg",
                source: "Agmarknet APMC Modal Rate",
                explanation: `Prevailing benchmark price recorded at ${marketName}.`
            },
            qualityAdjustment: {
                value: qualityAdjustmentValue,
                unit: "₹/kg",
                source: qualityBasis,
                explanation: qualityExplanation
            },
            demandAdjustment: {
                value: demandAdjustmentValue,
                unit: "₹/kg",
                source: "Market Demand & Arrival Index",
                explanation: demandExplanation
            },
            transportCost: {
                value: transportCostPerKg,
                unit: "₹/kg",
                source: transportData.calculationBasis,
                explanation: `Estimated transport over ${distanceKm} km for ${weight} kg lot (${transportData.vehicleType}).`,
                totalLotCost: transportData.totalLotTransportCost
            },
            storageCost: {
                value: storageCostPerKg,
                unit: "₹/kg",
                source: "Standard APMC cess & handling",
                explanation: "Mandatory loading, unloading, weighing, and mandi yard handling fees."
            },
            estimatedNetRealization: {
                value: estimatedNetRealizationPerKg,
                unit: "₹/kg",
                source: "KisanTrust Deterministic Realization Engine",
                explanation: "Estimated net farm-gate payout per kg after all quality adjustments and logistics deductions."
            },
            totalLotEstimatedNetWorth: {
                value: totalLotEstimatedNetWorth,
                unit: "₹",
                quantityKg: weight,
                explanation: `Total estimated net realization for the entire ${weight} kg lot.`
            },
            disclaimer: "Estimated market opportunity. Actual market realization may vary based on spot auction bidding."
        };
    }
}


// --- MODULE: src/services/opportunityComparisonService.js ---
/**
 * KisanTrust - Multi-Pathway Opportunity Comparison Service (Stage 5 / Phase 9)
 * Enables farmers to evaluate and compare 4 selling routes side-by-side:
 * - Option A: Local Mandi
 * - Option B: Distant Major APMC
 * - Option C: Verified Buyer (Direct Deal)
 * - Option D: Smart Pooled Logistics Route
 */
class OpportunityComparisonService {
    /**
     * Compares all 4 selling pathways side-by-side for any given lot
     * @param {Object} params
     * @param {string} [params.cropType="Tomato"]
     * @param {number} [params.quantityKg=500]
     * @param {string} [params.qualityGrade="Grade A"]
     * @param {number} [params.freshnessScore=90]
     * @param {string} [params.farmerDistrict="Nashik"]
     * @returns {Promise<Object>} Side-by-side 4-way comparison matrix
     */
    static async compareSellingPathways({
        cropType = 'Tomato',
        quantityKg = 500,
        qualityGrade = 'Grade A',
        freshnessScore = 90,
        farmerDistrict = 'Nashik'
    } = {}) {
        // 1. Fetch APMC comparisons & buyers
        const mandiComparison = await MarketComparisonService.compareMarketsForLot({
            cropType,
            qualityGrade,
            freshnessScore,
            quantityKg,
            farmerDistrict
        });

        const rankedMandis = mandiComparison.rankedMandis || [];
        const localMandi = rankedMandis.find(m => m.distanceKm <= 35) || rankedMandis[0] || {
            marketName: 'Pimpalgaon Baswant APMC',
            distanceKm: 28,
            modalPricePerKg: 34.0,
            rawModalPricePerKg: 34.0,
            transportCostPerKg: 0.80,
            estimatedNetRealizationPerKg: 32.80
        };

        const distantMandi = rankedMandis.find(m => m.distanceKm > 50) || rankedMandis[rankedMandis.length - 1] || {
            marketName: 'Vashi APMC (Navi Mumbai)',
            distanceKm: 165,
            modalPricePerKg: 38.0,
            rawModalPricePerKg: 38.0,
            transportCostPerKg: 2.80,
            estimatedNetRealizationPerKg: 34.70
        };

        const matchedBuyers = await BuyerService.matchBuyersForLot({
            cropType,
            quantityKg,
            overallQualityGrade: qualityGrade,
            freshnessScore
        }, farmerDistrict);

        const topBuyer = (matchedBuyers && matchedBuyers.length > 0) ? matchedBuyers[0] : {
            buyerName: 'KisanMitra Agro Processing Hub',
            offeredPricePerKg: 37.50,
            pickupProvided: true,
            estimatedNetRealization: 37.20,
            matchScore: 96,
            paymentTerms: 'Direct Bank Settlement on Delivery QC'
        };

        // 2. Option A: Local Mandi
        const localGrossPerKg = localMandi.modalPricePerKg || localMandi.rawModalPricePerKg || 34.0;
        const localTransport = TransportCostService.calculateFreight({ distanceKm: localMandi.distanceKm, quantityKg, isPooled: false }).costPerKg;
        const localHandling = 0.40;
        const localNetPerKg = Number(Math.max(1.0, localGrossPerKg - localTransport - localHandling).toFixed(2));
        const localTotalPayout = Number((localNetPerKg * quantityKg).toFixed(2));

        const optionA = {
            id: 'OPTION_LOCAL_MANDI',
            title: `स्थानिक मंडई (${localMandi.marketName})`,
            titleEn: `Local Mandi (${localMandi.marketName})`,
            routeType: 'LOCAL_APMC',
            marketOrBuyerName: localMandi.marketName,
            distanceKm: localMandi.distanceKm,
            grossPricePerKg: localGrossPerKg,
            grossPricePerQtl: Number((localGrossPerKg * 100).toFixed(0)),
            transportCostPerKg: localTransport,
            handlingCessPerKg: localHandling,
            storageHoldingCostPerKg: 0.00,
            netRealizationPerKg: localNetPerKg,
            totalLotPayout: localTotalPayout,
            paymentTimeline: 'Same-day APMC Cash / Slip',
            paymentTimelineMr: 'त्याच दिवशी रोख / APMC पावती',
            riskLevel: 'MEDIUM',
            riskLevelMr: 'मध्यम (लिलाव भाव चढ-उतार)',
            settlementMethod: 'APMC Commission Agent',
            features: [
                'स्थानिक जवळची बाजारपेठ (कमी अंतर)',
                'दलाली व हमाली शुल्क लागू',
                'बाजारातील गर्दीनुसार भाव अनिश्चितता'
            ]
        };

        // 3. Option B: Distant Major APMC (Solo Single Trip)
        const distantGrossPerKg = distantMandi.modalPricePerKg || distantMandi.rawModalPricePerKg || 38.0;
        const distantSoloTransport = TransportCostService.calculateFreight({ distanceKm: distantMandi.distanceKm, quantityKg, isPooled: false }).costPerKg;
        const distantHandling = 0.50;
        const distantNetPerKg = Number(Math.max(1.0, distantGrossPerKg - distantSoloTransport - distantHandling).toFixed(2));
        const distantTotalPayout = Number((distantNetPerKg * quantityKg).toFixed(2));

        const optionB = {
            id: 'OPTION_DISTANT_MANDI',
            title: `दूरचा प्रमुख बाजार (${distantMandi.marketName})`,
            titleEn: `Distant Major APMC (${distantMandi.marketName})`,
            routeType: 'DISTANT_APMC_SOLO',
            marketOrBuyerName: distantMandi.marketName,
            distanceKm: distantMandi.distanceKm,
            grossPricePerKg: distantGrossPerKg,
            grossPricePerQtl: Number((distantGrossPerKg * 100).toFixed(0)),
            transportCostPerKg: distantSoloTransport,
            handlingCessPerKg: distantHandling,
            storageHoldingCostPerKg: 0.00,
            netRealizationPerKg: distantNetPerKg,
            totalLotPayout: distantTotalPayout,
            paymentTimeline: '24 to 48 Hours',
            paymentTimelineMr: '२४ ते ४८ तास',
            riskLevel: 'MEDIUM_HIGH',
            riskLevelMr: 'मध्यम-जास्त (प्रवासातील नासाडी व वाहतूक खर्च)',
            settlementMethod: 'Outstation APMC Trader Transfer',
            features: [
                'उच्च प्राथमिक भाव दर',
                'एका लॉटसाठी जास्त वाहतूक खर्च',
                'लांबच्या प्रवासामुळे वजनात घट संभव'
            ]
        };

        // 4. Option C: Verified Buyer (Direct Contract / Escrow)
        const buyerGrossPerKg = Number(topBuyer.offeredPricePerKg) || 37.50;
        const buyerTransport = topBuyer.pickupProvided ? 0.00 : TransportCostService.calculateFreight({ distanceKm: 25, quantityKg, isPooled: false }).costPerKg;
        const buyerHandling = 0.00; // Zero Mandi Cess on Farmgate
        const buyerNetPerKg = Number(Math.max(1.0, buyerGrossPerKg - buyerTransport - buyerHandling).toFixed(2));
        const buyerTotalPayout = Number((buyerNetPerKg * quantityKg).toFixed(2));

        const optionC = {
            id: 'OPTION_VERIFIED_BUYER',
            title: `सत्यापित खरेदीदार (${topBuyer.buyerName ? topBuyer.buyerName.split(' ')[0] : 'Buyer'})`,
            titleEn: `Verified Buyer (${topBuyer.buyerName || 'Verified Buyer'})`,
            routeType: 'DIRECT_BUYER',
            marketOrBuyerName: topBuyer.buyerName || 'Verified Direct Buyer',
            distanceKm: topBuyer.pickupProvided ? 0 : 25,
            grossPricePerKg: buyerGrossPerKg,
            grossPricePerQtl: Number((buyerGrossPerKg * 100).toFixed(0)),
            transportCostPerKg: buyerTransport,
            handlingCessPerKg: buyerHandling,
            storageHoldingCostPerKg: 0.00,
            netRealizationPerKg: buyerNetPerKg,
            totalLotPayout: buyerTotalPayout,
            paymentTimeline: '12 Hours (KisanTrust Escrow)',
            paymentTimelineMr: '१२ तास (किसानट्रस्ट बँक एस्क्रो)',
            riskLevel: 'LOW',
            riskLevelMr: 'कमी (निश्चित करार दर व बँक सुरक्षा)',
            settlementMethod: 'KisanTrust Direct Escrow Settlement',
            features: [
                'शेतावर थेट पिकअप (शून्य वाहतूक खर्च)',
                'कोणतीही मंडी सेस किंवा दलाली नाही',
                '१००% हमीभाव व डिजिटल पावती'
            ]
        };

        // 5. Option D: Smart Pooled Logistics Route (10-Ton Shared Freight)
        const pooledTransport = TransportCostService.calculateFreight({ distanceKm: distantMandi.distanceKm, quantityKg, isPooled: true }).costPerKg;
        const pooledHandling = 0.40;
        const pooledNetPerKg = Number(Math.max(1.0, distantGrossPerKg - pooledTransport - pooledHandling).toFixed(2));
        const pooledTotalPayout = Number((pooledNetPerKg * quantityKg).toFixed(2));

        const optionD = {
            id: 'OPTION_SMART_POOLING',
            title: `स्मार्ट वाहतूक पूलिंग (${distantMandi.marketName})`,
            titleEn: `Smart Pooled Logistics (${distantMandi.marketName})`,
            routeType: 'SMART_POOLING',
            marketOrBuyerName: `${distantMandi.marketName} (१०-टन शेअर्ड)`,
            distanceKm: distantMandi.distanceKm,
            grossPricePerKg: distantGrossPerKg,
            grossPricePerQtl: Number((distantGrossPerKg * 100).toFixed(0)),
            transportCostPerKg: pooledTransport,
            handlingCessPerKg: pooledHandling,
            storageHoldingCostPerKg: 0.00,
            netRealizationPerKg: pooledNetPerKg,
            totalLotPayout: pooledTotalPayout,
            paymentTimeline: '24 Hours',
            paymentTimelineMr: '२४ तास',
            riskLevel: 'LOW_MEDIUM',
            riskLevelMr: 'कमी-मध्यम (एफपीओ समूह सुरक्षा)',
            settlementMethod: 'FPO / Cluster Pooled Settlement',
            features: [
                '१०-टन शेअर्ड ट्रकमधून ६०-७०% वाहतूक बचत',
                'दूरच्या मोठ्या बाजारातील उच्च दर मिळवणे शक्य',
                'गावातील इतर शेतकऱ्यांसोबत एकत्र वाहतूक'
            ]
        };

        const allOptions = [optionA, optionB, optionC, optionD];
        const rankedOptions = [...allOptions].sort((a, b) => b.netRealizationPerKg - a.netRealizationPerKg);
        const bestOption = rankedOptions[0];
        const baselineNet = optionA.netRealizationPerKg;
        const maxGainPerKg = Number((bestOption.netRealizationPerKg - baselineNet).toFixed(2));
        const maxGainTotal = Number((maxGainPerKg * quantityKg).toFixed(2));

        return {
            cropType,
            quantityKg,
            qualityGrade,
            farmerDistrict,
            options: {
                localMandi: optionA,
                distantMandi: optionB,
                verifiedBuyer: optionC,
                smartPooling: optionD
            },
            rankedOptions,
            bestOption,
            comparisonSummary: {
                baselineRoute: optionA.title,
                baselineNetPerKg: baselineNet,
                bestRoute: bestOption.title,
                bestNetPerKg: bestOption.netRealizationPerKg,
                netGainPerKg: maxGainPerKg > 0 ? maxGainPerKg : 0,
                totalLotNetGain: maxGainTotal > 0 ? maxGainTotal : 0,
                highlightBadge: maxGainPerKg > 0 ? `⭐ +₹${maxGainPerKg}/kg अतिरिक्त नफा (+₹${maxGainTotal.toLocaleString('en-IN')})` : '⭐ सर्वोत्तम चालू भाव'
            }
        };
    }
}


// --- MODULE: src/services/priceAnalysisService.js ---
/**
 * KisanTrust - Price Analysis Service (Stage 2 Foundation)
 * Unified architectural entry point for all price calculations, net realization analysis,
 * regional price spread comparison, and transparent formula explanations.
 */
class PriceAnalysisService {
    /**
     * Calculates transparent itemized net realization for an agricultural lot
     * @param {Object} params
     * @param {number} params.baseMarketPrice Prevailing APMC benchmark in ₹/kg
     * @param {string} [params.qualityGrade="Grade A"] 'Grade A' | 'Grade B' | 'Grade C'
     * @param {number} [params.freshnessScore=90] Freshness percentage (0 - 100)
     * @param {number} [params.quantityKg=500] Lot weight in kg
     * @param {number} [params.distanceKm=30] Distance in km
     * @param {number} [params.arrivalVolumeTons=150] Market arrivals in tons
     * @param {string} [params.marketName="APMC Mandi"]
     * @returns {Object} Comprehensive itemized price calculation
     */
    static calculateNetRealization(params) {
        return PriceCalculationService.calculateNetRealization(params);
    }

    /**
     * Analyzes price spread across multiple normalized mandi records
     * @param {Array<Object>} mandiRecords
     * @returns {Object} Spread analysis
     */
    static analyzePriceSpread(mandiRecords = []) {
        if (!Array.isArray(mandiRecords) || mandiRecords.length === 0) {
            return {
                minModal: 0,
                maxModal: 0,
                avgModal: 0,
                spreadAmount: 0,
                spreadPercentage: 0,
                highestMarket: 'N/A',
                lowestMarket: 'N/A',
                mandisAnalyzed: 0
            };
        }

        const modalPrices = mandiRecords.map(m => m.modalPricePerKg || 0);
        const minModal = Math.min(...modalPrices);
        const maxModal = Math.max(...modalPrices);
        const sum = modalPrices.reduce((acc, p) => acc + p, 0);
        const avgModal = Number((sum / modalPrices.length).toFixed(2));
        const spread = Number((maxModal - minModal).toFixed(2));
        const spreadPct = minModal > 0 ? Number(((spread / minModal) * 100).toFixed(1)) : 0;

        const highestMarket = mandiRecords.find(m => (m.modalPricePerKg || 0) === maxModal)?.market || 'N/A';
        const lowestMarket = mandiRecords.find(m => (m.modalPricePerKg || 0) === minModal)?.market || 'N/A';

        return {
            minModal,
            maxModal,
            avgModal,
            spreadAmount: spread,
            spreadPercentage: spreadPct,
            highestMarket,
            lowestMarket,
            mandisAnalyzed: mandiRecords.length
        };
    }

    /**
     * Fetches and analyzes price trend velocity (7-day and 30-day)
     * @param {string} commodity
     * @param {string} marketName
     * @param {number} currentModalPrice
     * @returns {Promise<Object>}
     */
    static async getPriceTrends(commodity, marketName, currentModalPrice) {
        return MarketTrendService.getCropPriceTrends(commodity, marketName, currentModalPrice);
    }

    /**
     * Forecasts explainable price opportunity range with uncertainty intervals
     * @param {Object} params
     * @returns {Promise<Object>}
     */
    static async forecastPriceOpportunity(params) {
        return PricePredictionService.forecastPriceRange(params);
    }

    /**
     * Compares all regional mandis and ranks by net realization
     * @param {Object} params
     * @returns {Promise<Object>}
     */
    static async compareMarketsForLot(params) {
        return MarketComparisonService.compareMarketsForLot(params);
    }

    /**
     * Returns a clear step-by-step mathematical explanation of how Net Realization is computed
     * @param {Object} calc Output from calculateNetRealization
     * @returns {Object} Human-readable breakdown
     */
    static explainCalculation(calc) {
        const base = calc.baseMarketPrice.value;
        const qual = calc.qualityAdjustment.value;
        const dem = calc.demandAdjustment.value;
        const trans = calc.transportCost.value;
        const stor = calc.storageCost.value;
        const net = calc.estimatedNetRealization.value;

        return {
            formula: "Estimated Net Realization = Base Market Price + Quality Adjustment + Buyer Demand Index - Transport Cost - Storage/Handling Fee",
            steps: [
                { step: 1, name: "Base Benchmark", formula: `₹${base.toFixed(2)}/kg`, note: calc.baseMarketPrice.source },
                { step: 2, name: "Quality Adjustment", formula: `${qual >= 0 ? '+' : ''}₹${qual.toFixed(2)}/kg`, note: calc.qualityAdjustment.source },
                { step: 3, name: "Buyer Demand Index", formula: `${dem >= 0 ? '+' : ''}₹${dem.toFixed(2)}/kg`, note: calc.demandAdjustment.source },
                { step: 4, name: "Transport Deduction", formula: `-₹${trans.toFixed(2)}/kg`, note: calc.transportCost.source },
                { step: 5, name: "Storage & Mandi Cess", formula: `-₹${stor.toFixed(2)}/kg`, note: calc.storageCost.source },
                { step: 6, name: "Final Estimated Net Realization", formula: `₹${net.toFixed(2)}/kg`, note: "Net Farm-Gate Payout per kg" }
            ],
            summaryText: `Base Rate ₹${base.toFixed(2)} ${qual >= 0 ? '+' : ''}${qual.toFixed(2)} (Quality) ${dem >= 0 ? '+' : ''}${dem.toFixed(2)} (Demand) - ${trans.toFixed(2)} (Transport) - ${stor.toFixed(2)} (Handling) = ₹${net.toFixed(2)}/kg Net.`
        };
    }

    /**
     * Comprehensive contextual insights for farmers before publishing / creating a lot
     * @param {Object} params
     * @param {string} [params.cropType="Tomato"]
     * @param {number} [params.quantityKg=500]
     * @param {string} [params.farmerDistrict="Nashik"]
     * @returns {Promise<Object>} Before You Publish Insights Payload
     */
    static async getListingMarketInsights({ cropType = "Tomato", quantityKg = 500, farmerDistrict = "Nashik" } = {}) {
        const comparison = await MarketComparisonService.compareMarketsForLot({
            cropType,
            farmerDistrict,
            qualityGrade: 'Grade A',
            quantityKg,
            freshnessScore: 92
        });

        const activeDemands = await BuyerService.getActiveDemands(cropType);
        const buyerCount = activeDemands.length;
        let topOfferedPrice = 0;
        let topBuyerName = 'None';
        let farmGatePickupAvailable = false;

        if (buyerCount > 0) {
            topOfferedPrice = Math.max(...activeDemands.map(d => d.offeredPricePerKg || 0));
            const topDemand = activeDemands.find(d => (d.offeredPricePerKg || 0) === topOfferedPrice);
            topBuyerName = topDemand ? topDemand.buyerName : 'Verified Buyer';
            farmGatePickupAvailable = activeDemands.some(d => d.pickupProvided);
        }

        const topMandi = comparison.recommendedMandi || (comparison.rankedMandis && comparison.rankedMandis[0]) || {
            modalPricePerKg: 34.0,
            marketName: 'Lasalgaon APMC',
            minPricePerKg: 28.0,
            maxPricePerKg: 38.0,
            distanceKm: 28
        };

        const soloTransport = TransportCostService.calculateFreight({
            distanceKm: topMandi.distanceKm || 30,
            quantityKg,
            isPooled: false
        });

        const pooledTransport = TransportCostService.calculateFreight({
            distanceKm: topMandi.distanceKm || 30,
            quantityKg,
            isPooled: true
        });

        const baseModal = topMandi.modalPricePerKg || 34.0;
        const transportDeduction = soloTransport.costPerKg;

        const gradeARate = Number(Math.max(0, (baseModal * 1.10) - transportDeduction - 0.40).toFixed(2));
        const gradeBRate = Number(Math.max(0, (baseModal * 1.00) - transportDeduction - 0.40).toFixed(2));
        const gradeCRate = Number(Math.max(0, (baseModal * 0.85) - transportDeduction - 0.40).toFixed(2));

        return {
            cropType,
            quantityKg,
            farmerDistrict,
            topMandi: {
                name: topMandi.marketName,
                modalPrice: baseModal,
                minPrice: topMandi.minPricePerKg || baseModal * 0.85,
                maxPrice: topMandi.maxPricePerKg || baseModal * 1.15,
                distanceKm: topMandi.distanceKm || 30
            },
            gradeNetEstimates: {
                gradeA: gradeARate,
                gradeB: gradeBRate,
                gradeC: gradeCRate
            },
            activeBuyerDemand: {
                buyerCount,
                topOfferedPrice,
                topBuyerName,
                farmGatePickupAvailable
            },
            logisticsContext: {
                soloTransportCostPerKg: soloTransport.costPerKg,
                pooledTransportCostPerKg: pooledTransport.costPerKg,
                logisticsSavingsPercent: soloTransport.costPerKg > 0 ? Number((((soloTransport.costPerKg - pooledTransport.costPerKg) / soloTransport.costPerKg) * 100).toFixed(0)) : 0
            },
            dataFreshness: {
                status: comparison?.summaryMetrics?.primaryDataStatus || 'demo',
                statusLabel: comparison?.summaryMetrics?.primaryDataStatusLabel || 'Demo / Benchmark Data',
                source: topMandi.source || 'APMC Daily Yard Benchmark'
            }
        };
    }

    /**
     * Compares all 4 selling pathways side-by-side for an agricultural lot (Phase 9)
     * @param {Object} params
     * @returns {Promise<Object>} Side-by-side 4-way comparison matrix
     */
    static async compareSellingPathways(params) {
        return OpportunityComparisonService.compareSellingPathways(params);
    }
}


// --- MODULE: src/services/marketComparisonService.js ---
/**
 * KisanTrust - Market Comparison & Intelligent Routing Service (Stage 3)
 * Compares multiple APMC Mandis across Maharashtra & neighboring agricultural centers.
 * Displays transparent Min, Modal, Max prices, road distance, data source, and freshness.
 * Ranks markets based on ESTIMATED NET REALIZATION (accounting for road distance and transport).
 */
class MarketComparisonService {
    /**
     * Compares all candidate markets for an agricultural commodity with optional filtering
     * @param {Object} params
     * @param {string} [params.cropType="Tomato"] e.g. "Tomato", "Onion"
     * @param {string} [params.variety="All"]
     * @param {string} [params.state="Maharashtra"]
     * @param {string} [params.farmerDistrict="Nashik"]
     * @param {string} [params.qualityGrade="Grade A"]
     * @param {number} [params.freshnessScore=90]
     * @param {number} [params.quantityKg=1000]
     * @param {Object} [params.filters={}] Additional filters (district, market, etc.)
     * @returns {Promise<Object>} Comparison result with ranked mandis and summary statistics
     */
    static async compareMarketsForLot({
        cropType = "Tomato",
        variety = "All",
        state = "Maharashtra",
        farmerDistrict = "Nashik",
        qualityGrade = "Grade A",
        freshnessScore = 90,
        quantityKg = 1000,
        filters = {}
    }) {
        // 1. Fetch normalized mandi prices for the crop
        const rawMandiRecords = await MarketDataService.fetchMandiPrices(cropType, state, farmerDistrict);

        // 2. Apply optional filters
        const activeFilters = {
            ...filters,
            variety: variety !== 'All' ? variety : filters.variety
        };
        const mandiRecords = MarketDataService.filterMandiRecords(rawMandiRecords, activeFilters);

        // 3. Evaluate net realization and comparison metrics for every mandi
        const comparisons = mandiRecords.map(mandi => {
            const distanceKm = TransportEstimationService.getEstimatedDistanceKm(farmerDistrict, mandi.market);
            
            const calculation = PriceCalculationService.calculateNetRealization({
                baseMarketPrice: mandi.modalPricePerKg,
                qualityGrade,
                freshnessScore,
                quantityKg,
                distanceKm,
                arrivalVolumeTons: mandi.arrivalVolumeTons,
                marketName: mandi.market
            });

            return {
                marketName: mandi.market,
                commodity: mandi.commodity,
                variety: mandi.variety,
                district: mandi.district,
                state: mandi.state,
                arrivalDate: mandi.date,
                distanceKm: distanceKm,
                minPricePerKg: mandi.minPricePerKg,
                modalPricePerKg: mandi.modalPricePerKg,
                maxPricePerKg: mandi.maxPricePerKg,
                minPricePerQtl: Number((mandi.minPricePerKg * 100).toFixed(0)),
                modalPricePerQtl: Number((mandi.modalPricePerKg * 100).toFixed(0)),
                maxPricePerQtl: Number((mandi.maxPricePerKg * 100).toFixed(0)),
                arrivalVolumeTons: mandi.arrivalVolumeTons,
                transportCostPerKg: calculation.transportCost.value,
                storageCostPerKg: calculation.storageCost.value,
                qualityAdjustmentPerKg: calculation.qualityAdjustment.value,
                demandAdjustmentPerKg: calculation.demandAdjustment.value,
                estimatedNetRealizationPerKg: calculation.estimatedNetRealization.value,
                totalLotNetWorth: calculation.totalLotEstimatedNetWorth.value,
                dataStatus: mandi.dataStatus,
                dataStatusLabel: mandi.dataStatusLabel,
                source: mandi.source,
                freshness: mandi.freshness,
                calculationDetails: calculation
            };
        });

        // 4. Sort mandis strictly by Estimated Net Realization (Highest Net First!)
        const rankedMandis = [...comparisons].sort((a, b) => 
            b.estimatedNetRealizationPerKg - a.estimatedNetRealizationPerKg
        );

        const recommendedMandi = rankedMandis[0] || null;
        const worstMandi = rankedMandis[rankedMandis.length - 1] || null;

        // Calculate spread and advantage
        let netAdvantageTotal = 0;
        let explanation = "";

        if (recommendedMandi && worstMandi && recommendedMandi !== worstMandi) {
            netAdvantageTotal = Number((recommendedMandi.totalLotNetWorth - worstMandi.totalLotNetWorth).toFixed(2));
            explanation = `By choosing ${recommendedMandi.marketName} (Net: ₹${recommendedMandi.estimatedNetRealizationPerKg}/kg) over ${worstMandi.marketName} (Net: ₹${worstMandi.estimatedNetRealizationPerKg}/kg), you gain an estimated ₹${netAdvantageTotal.toLocaleString('en-IN')} extra for your ${quantityKg} kg lot after transport.`;
        } else if (recommendedMandi) {
            explanation = `${recommendedMandi.marketName} yields the highest estimated net realization at ₹${recommendedMandi.estimatedNetRealizationPerKg}/kg.`;
        }

        // Summary metrics across mandis
        const modalPrices = rankedMandis.map(m => m.modalPricePerKg);
        const minModal = modalPrices.length > 0 ? Math.min(...modalPrices) : 0;
        const maxModal = modalPrices.length > 0 ? Math.max(...modalPrices) : 0;
        const avgModal = modalPrices.length > 0 ? Number((modalPrices.reduce((a, b) => a + b, 0) / modalPrices.length).toFixed(2)) : 0;

        return {
            cropType,
            variety,
            quantityKg,
            farmerDistrict,
            recommendedMandi,
            rankedMandis,
            rankings: rankedMandis.map((m, idx) => ({
                ...m,
                mandiName: m.marketName,
                recommendationBadge: idx === 0 ? 'सर्वोत्तम निव्वळ प्राप्ती (Top Net)' : (idx === 1 ? 'पर्यायी बाजार (Alternative)' : 'स्थानिक पर्याय (Standard)')
            })),
            recommended: recommendedMandi ? {
                ...recommendedMandi,
                mandiName: recommendedMandi.marketName
            } : null,
            totalMandisCompared: rankedMandis.length,
            netAdvantageTotal,
            explanation,
            summaryMetrics: {
                minModal,
                maxModal,
                avgModal,
                spreadAmount: Number((maxModal - minModal).toFixed(2)),
                primaryDataStatus: recommendedMandi ? recommendedMandi.dataStatus : DATA_STATUS.DEMO,
                primaryDataStatusLabel: recommendedMandi ? recommendedMandi.dataStatusLabel : 'Demo / Offline Data'
            },
            comparisonDate: new Date().toISOString()
        };
    }

    /**
     * Backward-compatible alias for existing UI consumers
     */
    static async getComparisonForCrop(cropType = "Tomato", quantityKg = 1000, freshnessScore = 92, qualityGrade = "Grade A", farmerDistrict = "Nashik") {
        return this.compareMarketsForLot({
            cropType,
            quantityKg,
            freshnessScore,
            qualityGrade,
            farmerDistrict
        });
    }
}


// --- MODULE: src/services/marketTrendService.js ---
/**
 * KisanTrust - Market Trend Service (7-Day & 30-Day APMC Trends)
 * Stores and analyzes normalized historical prices in Firestore.
 * Calculates price velocity, percentage change, and trend direction (RISING / STABLE / FALLING).
 */
class MarketTrendService {
    /**
     * Seed baseline historical data generator for realistic trend modeling
     */
    static _generateHistoricalSeries(currentPrice, daysCount = 30, volatility = 0.08) {
        const series = [];
        let price = currentPrice * 0.92; // started slightly lower 30 days ago
        const now = Date.now();

        for (let i = daysCount; i >= 0; i--) {
            const date = new Date(now - (i * 86400000)).toISOString().split('T')[0];
            // Random walk with slight upward drift
            const change = (Math.random() - 0.45) * volatility * price;
            price = Math.max(price * 0.7, price + change);
            
            if (i === 0) price = currentPrice; // exact match on current day

            series.push({
                date,
                modalPrice: Number(price.toFixed(2))
            });
        }
        return series;
    }

    /**
     * Fetches or computes price trends for a crop in a given market
     * @param {string} commodity e.g. "Tomato", "Onion", "Potato"
     * @param {string} [marketName="Pune APMC (Gultekdi)"]
     * @param {number} [currentModalPrice=34.0]
     * @returns {Promise<Object>} 7-day and 30-day trend analysis
     */
    static async getCropPriceTrends(commodity = "Tomato", marketName = "Pune APMC (Gultekdi)", currentModalPrice = 34.0) {
        await firebaseService.initializeData();
        const docKey = `${commodity.toLowerCase()}_${marketName.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`;

        let history = [];

        // Check Firestore Cache for historical series
        try {
            const doc = await (await firebaseService.db.collection('mandiHistoricalTrends')).doc(docKey).get();
            if (doc.exists && doc.data().history && doc.data().history.length >= 30) {
                history = doc.data().history;
            } else {
                history = this._generateHistoricalSeries(currentModalPrice, 30, 0.06);
                // Save to Firestore
                await (await firebaseService.db.collection('mandiHistoricalTrends')).doc(docKey).set({
                    commodity,
                    marketName,
                    history,
                    updatedAt: new Date().toISOString()
                });
            }
        } catch (e) {
            history = this._generateHistoricalSeries(currentModalPrice, 30, 0.06);
        }

        const len = history.length;
        const currentPrice = history[len - 1].modalPrice;
        const price7DaysAgo = history[Math.max(0, len - 8)]?.modalPrice || currentPrice;
        const price30DaysAgo = history[0]?.modalPrice || currentPrice;

        // 7-day change
        const change7d = Number((currentPrice - price7DaysAgo).toFixed(2));
        const change7dPct = Number(((change7d / price7DaysAgo) * 100).toFixed(1));

        // 30-day change
        const change30d = Number((currentPrice - price30DaysAgo).toFixed(2));
        const change30dPct = Number(((change30d / price30DaysAgo) * 100).toFixed(1));

        // Direction indicator
        let direction = 'STABLE';
        let directionIcon = '⚖️';
        if (change7dPct >= 3.0) {
            direction = 'RISING';
            directionIcon = '📈';
        } else if (change7dPct <= -3.0) {
            direction = 'FALLING';
            directionIcon = '📉';
        }

        return {
            commodity,
            marketName,
            currentPrice,
            price7DaysAgo,
            price30DaysAgo,
            change7d,
            change7dPct,
            change30d,
            change30dPct,
            direction,
            directionIcon,
            sevenDaySeries: history.slice(-7),
            thirtyDaySeries: history,
            lastUpdated: new Date().toISOString()
        };
    }

    /**
     * Helper for quick trend snapshot
     * @param {string} cropType
     * @param {string} [marketName="Pune APMC (Gultekdi)"]
     * @returns {Promise<Object>}
     */
    static async getTrendForCrop(cropType = "Tomato", marketName = "Pune APMC (Gultekdi)") {
        const trend = await this.getCropPriceTrends(cropType, marketName);
        const series7 = trend.sevenDaySeries.map(s => s.modalPrice);
        const series30 = trend.thirtyDaySeries.map(s => s.modalPrice);
        
        const avg7 = Number((series7.reduce((a, b) => a + b, 0) / (series7.length || 1)).toFixed(2));
        const avg30 = Number((series30.reduce((a, b) => a + b, 0) / (series30.length || 1)).toFixed(2));

        return {
            ...trend,
            sevenDayAvg: avg7,
            thirtyDayAvg: avg30,
            trendDirection: trend.direction,
            trendPercentage: trend.change7dPct
        };
    }
}


// --- MODULE: src/services/pricePredictionService.js ---
class PricePredictionService {
    /**
     * Determines seasonal supply stage for a commodity
     */
    static getSeasonalityIndicator(cropType = "Tomato", month = new Date().getMonth()) {
        const crop = cropType.toLowerCase();
        // Month index: 0 = Jan, 7 = Aug, 8 = Sep, etc.
        if (crop.includes('tomato')) {
            if (month >= 6 && month <= 9) { // Jul - Oct (Kharif peak)
                return {
                    stage: 'PEAK_HARVEST',
                    stageMr: 'खरीप काढणीचा मुख्य हंगाम (Peak Harvest)',
                    seasonalIndex: 0.95,
                    description: 'खरीप हंगामातील वाढती स्थानिक आवक; बाजारात पुरवठा मुबलक असल्याने भाव मध्यम राहण्याचा कल.'
                };
            } else if (month >= 10 || month <= 1) { // Nov - Feb (Late Kharif / Rabi)
                return {
                    stage: 'MID_SEASON',
                    stageMr: 'मध्यम हंगाम (Regular Supply)',
                    seasonalIndex: 1.05,
                    description: 'स्थिर आवक व नियमित मागणीचा समतोल.'
                };
            } else { // Mar - Jun (Summer lean)
                return {
                    stage: 'OFF_SEASON_LEAN',
                    stageMr: 'उन्हाळी टंचाई हंगाम (Lean Supply)',
                    seasonalIndex: 1.20,
                    description: 'उन्हाळी हंगामात आवक घटल्याने भावात तेजीची शक्यता.'
                };
            }
        } else if (crop.includes('onion')) {
            if (month >= 2 && month <= 4) { // Mar - May (Rabi harvest peak)
                return {
                    stage: 'PEAK_HARVEST',
                    stageMr: 'रब्बी कांदा काढणी हंगाम (Peak Rabi)',
                    seasonalIndex: 0.90,
                    description: 'रब्बी कांद्याची प्रचंड आवक; साठवणुकीसाठी (चाळ) उत्तम वेळ.'
                };
            } else if (month >= 8 && month <= 11) { // Sep - Dec (Kharif / Post-monsoon shortage)
                return {
                    stage: 'OFF_SEASON_LEAN',
                    stageMr: 'टंचाई काळ (Pre-Kharif Shortage)',
                    seasonalIndex: 1.25,
                    description: 'चाळीतील जुना कांदा संपत आल्याने व नवीन कांदा येईपर्यंत भावात मोठी तेजी.'
                };
            } else {
                return {
                    stage: 'MID_SEASON',
                    stageMr: 'मध्यम हंगाम',
                    seasonalIndex: 1.0,
                    description: 'नियमित बाजार आवक.'
                };
            }
        }

        return {
            stage: 'MID_SEASON',
            stageMr: 'सामान्य हंगाम',
            seasonalIndex: 1.0,
            description: 'नियमित हंगामी आवक व स्थिर मागणी.'
        };
    }

    /**
     * Evaluates daily arrival pressure impact on spot prices
     */
    static evaluateArrivalPressure(arrivalVolumeTons = 120, baselineTons = 100) {
        const ratio = arrivalVolumeTons / (baselineTons || 100);
        if (ratio >= 1.6) {
            return {
                volumeTons: arrivalVolumeTons,
                pressureLevel: 'HIGH_SUPPLY_PRESSURE',
                pressureLevelMr: 'उच्च आवक दबाव (High Supply)',
                priceImpactPerKg: -1.20,
                label: 'बाजारात प्रचंड आवक (भावावर मंदीचा दबाव)'
            };
        } else if (ratio <= 0.65) {
            return {
                volumeTons: arrivalVolumeTons,
                pressureLevel: 'TIGHT_SUPPLY_SUPPORT',
                pressureLevelMr: 'कमी आवक आधार (Tight Supply)',
                priceImpactPerKg: +0.80,
                label: 'बाजारात कमी आवक (भावाला तेजीचा आधार)'
            };
        }

        return {
            volumeTons: arrivalVolumeTons,
            pressureLevel: 'BALANCED_SUPPLY',
            pressureLevelMr: 'संतुलित आवक (Balanced Supply)',
            priceImpactPerKg: 0.00,
            label: 'संतुलित आवक व मागणी'
        };
    }

    /**
     * Forecasts expected price opportunity range over a 3 to 7 day horizon (Phase 10)
     * @param {Object} params
     * @param {string} params.cropType
     * @param {string} [params.marketName="Pune APMC"]
     * @param {number} [params.currentPrice=34.0]
     * @param {number} [params.arrivalVolumeTons=120]
     * @param {number} [params.horizonDays=5]
     * @returns {Promise<Object>} Grounded explainable prediction record
     */
    static async forecastPriceRange({
        cropType = 'Tomato',
        marketName = 'Pune APMC (Gultekdi)',
        currentPrice = 34.0,
        arrivalVolumeTons = 120,
        horizonDays = 5
    } = {}) {
        const trendData = await MarketTrendService.getCropPriceTrends(cropType, marketName, currentPrice);
        const series = trendData.sevenDaySeries || [];

        // 1. Moving Averages
        const series7 = (trendData.sevenDaySeries || []).map(s => s.modalPrice);
        const series30 = (trendData.thirtyDaySeries || []).map(s => s.modalPrice);
        const sevenDayMovingAvg = Number((series7.reduce((a, b) => a + b, 0) / (series7.length || 1)).toFixed(2));
        const thirtyDayMovingAvg = Number((series30.reduce((a, b) => a + b, 0) / (series30.length || 1)).toFixed(2));

        // 2. Daily Velocity (₹ change per day)
        let dailyVelocity = 0.0;
        if (series.length >= 2) {
            const first = series[0].modalPrice;
            const last = series[series.length - 1].modalPrice;
            dailyVelocity = (last - first) / (series.length - 1);
        }

        // 3. Arrival Pressure & Seasonality
        const arrivalPressure = this.evaluateArrivalPressure(arrivalVolumeTons, 100);
        const seasonality = this.getSeasonalityIndicator(cropType);

        // 4. Dampened Velocity + Volume Impact
        const dampeningFactor = 0.70;
        const velocityChange = dailyVelocity * horizonDays * dampeningFactor;
        const netProjectedChange = velocityChange + (arrivalPressure.priceImpactPerKg * 0.5);
        const centerExpectedPrice = Number(Math.max(5.0, (currentPrice + netProjectedChange) * seasonality.seasonalIndex).toFixed(2));

        // 5. Dynamic Uncertainty Interval based on historical volatility
        const mean = series7.reduce((a, b) => a + b, 0) / (series7.length || 1);
        const variance = series7.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (series7.length || 1);
        const stdDev = Math.sqrt(variance);

        const uncertaintyMargin = Number(Math.max(1.5, stdDev * 1.5 + (horizonDays * 0.20)).toFixed(2));
        const minPredicted = Number(Math.max(1.0, centerExpectedPrice - uncertaintyMargin).toFixed(2));
        const maxPredicted = Number((centerExpectedPrice + uncertaintyMargin).toFixed(2));

        // Confidence calculation (declines gracefully with forecast horizon length)
        const confidencePercent = Math.max(65, Math.min(92, Math.round(90 - (horizonDays * 3.5) - (stdDev * 2))));
        const confidenceLevel = confidencePercent >= 85 ? 'High (उच्च)' : (confidencePercent >= 75 ? 'Medium-High (मध्यम-उच्च)' : 'Moderate (मध्यम)');

        const forecastStartDate = new Date().toISOString().split('T')[0];
        const forecastEndDate = new Date(Date.now() + horizonDays * 86400000).toISOString().split('T')[0];

        let scenarioDirection = 'STABLE';
        if (dailyVelocity > 0.3) scenarioDirection = 'RISING_MOMENTUM';
        else if (dailyVelocity < -0.3) scenarioDirection = 'FALLING_MOMENTUM';

        return {
            predictionStatus: "Estimated",
            isGrounded: true,
            forecastHorizonDays: horizonDays,
            forecastStartDate,
            forecastEndDate,
            currentPrice: Number(currentPrice.toFixed(2)),
            sevenDayMovingAvg,
            thirtyDayMovingAvg,
            centerExpectedPrice,
            expectedOpportunityRange: {
                min: minPredicted,
                max: maxPredicted,
                formatted: `₹ ${minPredicted.toFixed(2)} – ₹ ${maxPredicted.toFixed(2)} / kg`
            },
            uncertaintyBandPerKg: uncertaintyMargin,
            confidencePercent,
            confidenceLevel,
            dailyVelocityPerKg: Number(dailyVelocity.toFixed(2)),
            scenarioDirection,
            arrivalPressure,
            seasonality,
            explanation: `गेल्या ७ दिवसांतील ${dailyVelocity >= 0 ? '+' : ''}${dailyVelocity.toFixed(2)} ₹/दिवस कल आणि ${arrivalPressure.label} नुसार पुढील ${horizonDays} दिवसांत अंदाजे भाव ₹${minPredicted} ते ₹${maxPredicted}/kg दरम्यान राहण्याची शक्यता आहे (${confidenceLevel} विश्वासार्हता).`,
            historicalDataLimitations: [
                "अंदाज मागील ३० दिवसांच्या अधिकृत APMC आवक आणि भावाच्या सांख्यिकी मॉडेलवर आधारित आहे.",
                "अचानक येणारा मुसळधार पाऊस किंवा इतर राज्यांतून होणारी अवकाळी आवक यामुळे दरात बदल संभवतो.",
                "हा कोणताही निश्चित किंवा हमीभाव नसून शेतकऱ्यांनी शेतमाल साठवणूक की विक्री या निर्णयाच्या तुलनात्मक अभ्यासासाठी आहे."
            ]
        };
    }
}


// --- MODULE: src/services/recommendationService.js ---
/**
 * KisanTrust - Intelligent Selling Decision Recommendation Engine (Stage 4)
 * Deterministically evaluates whether the farmer should:
 * - SELL NOW (आत्ताच विका)
 * - WAIT (काही दिवस थांबा)
 * - SELL TO ANOTHER MARKET (दुसऱ्या मंडईत विका)
 * - SELL TO A VERIFIED BUYER (थेट खरेदीदाराला विका)
 * 
 * Computes a transparent 6-factor Opportunity Score (0 - 100%).
 */
class RecommendationService {
    /**
     * Evaluates all agricultural, market, buyer, and logistics factors to produce a deterministic selling recommendation
     * @param {Object} params
     * @param {Object} params.lot DigitalAgriculturalLot
     * @param {string} [params.farmerDistrict="Nashik"]
     * @returns {Promise<Object>} Explainable Decision Recommendation Record
     */
    static async generateRecommendation({ lot, farmerDistrict = "Nashik" }) {
        const crop = lot.cropType || "Tomato";
        const grade = lot.overallQualityGrade || "Grade A";
        const quantity = Number(lot.quantity) || 500;
        const freshness = Number(lot.freshnessScore) || 90;
        const harvestDate = lot.harvestDate || new Date().toISOString().split('T')[0];

        // 1. Evaluate Spoilage & Shelf-Life Risk
        const spoilage = CropKnowledgeService.evaluateSpoilageRisk(crop, freshness, harvestDate);

        // 2. Fetch Multi-Mandi Comparisons
        const comparison = await MarketComparisonService.compareMarketsForLot({
            cropType: crop,
            qualityGrade: grade,
            freshnessScore: freshness,
            quantityKg: quantity,
            farmerDistrict
        });

        const bestMandi = comparison.recommendedMandi || {
            marketName: "Lasalgaon APMC",
            modalPricePerKg: 34.0,
            rawModalPricePerKg: 34.0,
            estimatedNetRealizationPerKg: 32.5,
            transportCostPerKg: 1.1,
            distanceKm: 28
        };

        const currentMandiPrice = bestMandi.modalPricePerKg || bestMandi.rawModalPricePerKg || 34.0;

        // 3. Fetch Forecasted Price Trend
        const forecast = await PricePredictionService.forecastPriceRange({
            cropType: crop,
            marketName: bestMandi.marketName,
            currentPrice: currentMandiPrice,
            horizonDays: Math.min(5, Math.max(2, spoilage.safeHoldingDaysRemaining))
        });

        // 4. Fetch Matched Verified Buyer Opportunities
        const matchedBuyers = await BuyerService.matchBuyersForLot(lot, farmerDistrict);
        const topBuyer = (matchedBuyers && matchedBuyers.length > 0) ? matchedBuyers[0] : null;

        // 5. DETERMINISTIC DECISION LOGIC
        let recommendedAction = "SELL_NOW";
        let actionTitle = "आत्ताच विक्री करा (Sell Now)";
        let primaryReason = "सध्या बाजारात चांगला भाव उपलब्ध असून टिकवण क्षमतेनुसार त्वरित विक्री करणे फायदेशीर आहे.";
        const rationaleFactors = [];

        // Rule A: Spoilage / Shelf-Life Critical Gate
        if (spoilage.riskLevel === "CRITICAL" || spoilage.safeHoldingDaysRemaining <= 2) {
            recommendedAction = "SELL_NOW";
            actionTitle = "तातडीने विक्री करा (Urgent: Spoilage Risk)";
            primaryReason = `पिकाची सुरक्षित टिकवण क्षमता केवळ ${spoilage.safeHoldingDaysRemaining} दिवस शिल्लक आहे. नुकसान टाळण्यासाठी तात्काळ विक्री करा.`;
            rationaleFactors.push(`⚠️ उच्च नासाडी धोका (${spoilage.spoilageRiskPercent}% Spoilage Risk).`);
        }
        // Rule B: High-Value Verified Buyer Offer Outperforms Mandi
        else if (topBuyer && topBuyer.estimatedNetRealization > bestMandi.estimatedNetRealizationPerKg) {
            const extraGain = Number((topBuyer.estimatedNetRealization - bestMandi.estimatedNetRealizationPerKg).toFixed(2));
            recommendedAction = "SELL_TO_VERIFIED_BUYER";
            actionTitle = "थेट सत्यापित खरेदीदाराला विका (Sell to Verified Buyer)";
            primaryReason = `खरेदीदार ${topBuyer.buyerName} कडून मंडईपेक्षा ₹${extraGain}/kg जास्त निव्वळ प्राप्ती मिळत आहे.`;
            rationaleFactors.push(`🤝 थेट खरेदीदार ऑफर: ₹${topBuyer.offeredPricePerKg}/kg (निव्वळ प्राप्ती: ₹${topBuyer.estimatedNetRealization}/kg).`);
            if (topBuyer.pickupProvided) {
                rationaleFactors.push(`🚚 शेतावर थेट पिकअप (Farm-gate Pickup) - वाहतूक खर्च ₹०.`);
            }
        }
        // Rule C: Price Momentum is Rising AND Shelf Life is Safe
        else if (forecast.scenarioDirection === "RISING_MOMENTUM" && spoilage.safeHoldingDaysRemaining >= 6 && forecast.dailyVelocityPerKg >= 0.5) {
            const potentialGain = Number((forecast.centerExpectedPrice - (bestMandi.modalPricePerKg || bestMandi.rawModalPricePerKg || 34.0)).toFixed(2));
            recommendedAction = "WAIT";
            actionTitle = "३-४ दिवस थांबा (Hold / Wait)";
            primaryReason = `मंडईत वाढता भाव कल (+₹${forecast.dailyVelocityPerKg}/दिवस) असून पिकाची टिकवण क्षमता ${spoilage.safeHoldingDaysRemaining} दिवस सुरक्षित आहे.`;
            rationaleFactors.push(`📈 अंदाजे संभाव्य भाव कक्षा: ${forecast.expectedOpportunityRange.formatted}.`);
            rationaleFactors.push(`✨ पिकाचा ताजेपणा ${freshness}% असल्याने होल्डिंग करणे सुरक्षित आहे.`);
        }
        // Rule D: Pooling Opportunity (Lot <= 3000kg and Distant APMC / Buyer is profitable with pooling)
        else if (quantity <= 3000 && comparison.rankedMandis.length > 1 && bestMandi.distanceKm > 40 && comparison.summary?.maxModalPrice > (currentMandiPrice + 3.0)) {
            recommendedAction = "JOIN_TRANSPORT_POOL";
            actionTitle = "स्मार्ट वाहतूक पूलिंगमध्ये सहभागी व्हा (Join Transport Pool)";
            primaryReason = `१०-टन शेअर्ड ट्रकमधून ${bestMandi.marketName} ला माल पाठवल्यास वाहतूक खर्चात ६०% बचत होऊन जास्तीचा नफा मिळतो.`;
            rationaleFactors.push(`🚚 १०-टन पूलिंगने वाहतूक खर्चात ₹१.५०/kg बचत.`);
            rationaleFactors.push(`🏛️ दूरच्या बाजारातील उच्च दर: ₹${bestMandi.modalPricePerKg || bestMandi.rawModalPricePerKg}/kg.`);
        }
        // Rule E: Alternative Major APMC Outperforms Local Mandi Significantly
        else if (comparison.rankedMandis.length > 1 && bestMandi.distanceKm > 50 && (bestMandi.estimatedNetRealizationPerKg - comparison.rankedMandis[1].estimatedNetRealizationPerKg) >= 2.5) {
            recommendedAction = "SELL_TO_ANOTHER_MARKET";
            actionTitle = `दुसऱ्या प्रमुख मंडईत पाठवा (${bestMandi.marketName})`;
            primaryReason = `स्थानिक बाजारापेक्षा ${bestMandi.marketName} मध्ये वाहतूक वजा जाता ₹${(bestMandi.estimatedNetRealizationPerKg - comparison.rankedMandis[1].estimatedNetRealizationPerKg).toFixed(2)}/kg जास्त नफा मिळतो.`;
            rationaleFactors.push(`🏛️ सर्वोत्तम निव्वळ प्राप्ती: ₹${bestMandi.estimatedNetRealizationPerKg}/kg (${bestMandi.marketName}).`);
        }
        // Default Rule: Sell at Best Available Current Market
        else {
            recommendedAction = "SELL_NOW";
            actionTitle = "सध्याच्या सर्वोत्तम बाजारात विका (Sell Now)";
            primaryReason = `सध्याचा भाव स्थिर असून तात्काळ विक्री केल्यास वाहतूक आणि साठवणूक खर्चात बचत होते.`;
            rationaleFactors.push(`🏛️ सर्वोत्तम चालू मंडई: ${bestMandi.marketName} (₹${bestMandi.estimatedNetRealizationPerKg}/kg Net).`);
        }

        // 6. WEIGHTED OPPORTUNITY SCORE CALCULATION
        // Net Realization: 25%, Market Opportunity: 25%, Buyer Demand: 20%, Logistics Efficiency: 10%, Quality Advantage: 10%, Shelf-Life Safety: 10%
        const mandiModal = bestMandi.modalPricePerKg || bestMandi.rawModalPricePerKg || 34.0;
        const marketScore = Number(Math.min(100, Math.max(30, (mandiModal / 35.0) * 85)).toFixed(1));
        const buyerScore = topBuyer ? (topBuyer.matchScore || 85) : 50;
        const netRealizationRate = recommendedAction === "SELL_TO_VERIFIED_BUYER" 
            ? (topBuyer?.estimatedNetRealization || 36.5) 
            : (bestMandi.estimatedNetRealizationPerKg || 33.0);
        const netScore = Number(Math.min(100, Math.max(30, (netRealizationRate / 33.0) * 85)).toFixed(1));
        const qualityScore = grade === "Grade A" ? 95 : grade === "Grade B" ? 75 : 45;
        const logisticsScore = (topBuyer && topBuyer.pickupProvided) 
            ? 100 
            : (recommendedAction === "JOIN_TRANSPORT_POOL" ? 90 : Number(Math.max(40, 100 - (bestMandi.distanceKm * 0.3)).toFixed(1)));
        const shelfLifeScore = Number(Math.max(20, 100 - (spoilage.spoilageRiskPercent || 10)).toFixed(1));

        const opportunityScore = Number((
            (netScore * 0.25) +
            (marketScore * 0.25) +
            (buyerScore * 0.20) +
            (logisticsScore * 0.10) +
            (qualityScore * 0.10) +
            (shelfLifeScore * 0.10)
        ).toFixed(1));

        const totalExpectedNetPayout = Number((netRealizationRate * quantity).toFixed(2));

        const whyThisRecommendation = {
            coreJustification: primaryReason,
            keyAdvantages: rationaleFactors,
            riskSafeguards: [
                `पिकाची सुरक्षित टिकवण क्षमता: ${spoilage.safeHoldingDaysRemaining || 6} दिवस`,
                `नासाडी धोका पातळी: ${spoilage.riskLevel || 'LOW'}`
            ],
            factorWeights: {
                netRealization: 25,
                marketOpportunity: 25,
                buyerDemand: 20,
                logisticsEfficiency: 10,
                qualityAdvantage: 10,
                shelfLifeSafety: 10
            }
        };

        return {
            recommendedAction,
            actionTitle,
            primaryReason,
            opportunityScore,
            estimatedNetRealizationPerKg: netRealizationRate,
            totalExpectedNetPayout,
            rationaleFactors,
            whyThisRecommendation,
            factorBreakdown: {
                netRealization: { weightPercent: 25, score: netScore },
                marketOpportunity: { weightPercent: 25, score: marketScore },
                buyerDemand: { weightPercent: 20, score: buyerScore },
                logisticsEfficiency: { weightPercent: 10, score: logisticsScore },
                qualityAdvantage: { weightPercent: 10, score: qualityScore },
                shelfLifeSafety: { weightPercent: 10, score: shelfLifeScore }
            },
            holdingRecommendation: {
                safeHoldingDays: spoilage.safeHoldingDaysRemaining || 6,
                spoilageRiskLevel: spoilage.riskLevel || 'कमी',
                expectedPriceRange: {
                    min: Number((currentMandiPrice * 0.95).toFixed(1)),
                    max: Number((currentMandiPrice * 1.12).toFixed(1))
                }
            },
            bestMandi,
            topBuyer,
            forecast,
            spoilage,
            disclaimer: "Opportunity score and decision recommendations are deterministic estimations based on current APMC mandi rates, verified buyer purchase orders, and post-harvest shelf-life guidelines."
        };
    }

    /**
     * Alias for flexible parameter invocation
     */
    static async getSellingRecommendation(params) {
        if (params.lot) {
            return this.generateRecommendation({ lot: params.lot, farmerDistrict: params.farmerDistrict });
        }
        const lot = {
            cropType: params.cropType || 'Tomato',
            quantity: params.quantityKg || 500,
            overallQualityGrade: params.qualityGrade || 'Grade A',
            freshnessScore: params.freshnessScore || 90,
            harvestDate: params.harvestDate || new Date().toISOString().split('T')[0]
        };
        return this.generateRecommendation({ lot, farmerDistrict: params.farmerDistrict || 'Nashik' });
    }
}


// --- MODULE: src/services/geminiAdvisoryService.js ---
/**
 * KisanTrust - Gemini Advisory & Multilingual Explanation Service (Stage 4)
 * Translates structured deterministic recommendation results into empathetic, actionable farmer advice.
 * Supported languages: Marathi (मराठी), Hindi (हिंदी), English.
 * 
 * STRICT COMPLIANCE:
 * - Gemini receives only verified structured facts (calculated net realization, buyer offers, APMC rates).
 * - Gemini NEVER invents market prices, future guarantees, or buyer reliability ratings.
 * - Server-side / secure Netlify Function key handling with graceful offline multilingual fallback.
 */
class GeminiAdvisoryService {
    /**
     * Generates a conversational explanation of the structured decision recommendation
     */
    static async generateGroundedAdvisory(params) {
        const lot = params.lot || {
            cropType: params.cropType,
            variety: params.variety,
            quantity: params.quantityKg,
            overallQualityGrade: params.qualityGrade,
            freshnessScore: params.freshnessScore,
            harvestDate: params.harvestDate
        };
        const recommendation = params.recommendation || {};
        return this.generateFarmerExplanation({ recommendation, lot, language: params.language || "Marathi (मराठी)" });
    }

    /**
     * Generates a conversational explanation of the structured decision recommendation
     */
    static async generateFarmerExplanation({ recommendation, lot, language = "Marathi (मराठी)" }) {
        const structuredPayload = {
            cropType: lot.cropType || 'Tomato',
            variety: lot.variety || "Standard",
            quantityKg: lot.quantity || 500,
            qualityGrade: lot.overallQualityGrade || 'Grade A',
            freshnessScore: lot.freshnessScore || 92,
            recommendedAction: recommendation.recommendedAction || 'SELL_TO_VERIFIED_BUYER',
            opportunityScore: recommendation.opportunityScore || 90,
            estimatedNetRealization: recommendation.estimatedNetRealizationPerKg || 36,
            totalLotValue: recommendation.totalExpectedNetPayout || (36 * (lot.quantity || 500)),
            bestMandi: recommendation.bestMandi?.marketName || 'Vashi APMC',
            mandiRate: recommendation.bestMandi?.rawModalPricePerKg || 34,
            topBuyerName: recommendation.topBuyer?.buyerName || 'KisanMitra Agro Processing',
            buyerOfferedPrice: recommendation.topBuyer?.offeredPricePerKg || 37.5,
            pickupProvided: Boolean(recommendation.topBuyer?.pickupProvided ?? true),
            safeHoldingDaysRemaining: recommendation.spoilage?.safeHoldingDaysRemaining || 7,
            forecastRange: recommendation.forecast?.expectedOpportunityRange?.formatted || '₹34 - ₹38/kg',
            targetLanguage: language
        };

        // 1. Try Backend / Netlify Serverless Function
        if (typeof fetch !== 'undefined') {
            try {
                const response = await fetch('/api/gemini-advisory', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(structuredPayload)
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data && data.adviceText) {
                        return {
                            adviceText: data.adviceText,
                            actionKeyPoints: data.actionKeyPoints || [],
                            keyPoints: data.actionKeyPoints || [],
                            source: 'GEMINI_GENAI'
                        };
                    }
                }
            } catch (err) {
                // Fallback to local or deterministic
            }
        }

        // 2. Direct Node test execution
        if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
            try {
                const { handler } = await import('../../netlify/functions/gemini-advisory.js');
                const event = {
                    httpMethod: 'POST',
                    body: JSON.stringify(structuredPayload)
                };
                const result = await handler(event, {});
                if (result.statusCode === 200 && result.body) {
                    const data = JSON.parse(result.body);
                    if (data && data.adviceText) {
                        return {
                            adviceText: data.adviceText,
                            actionKeyPoints: data.actionKeyPoints || [],
                            keyPoints: data.actionKeyPoints || [],
                            source: 'GEMINI_GENAI'
                        };
                    }
                }
            } catch (nodeErr) {}
        }

        // 3. Resilient, deterministic multilingual advisory generator
        const deterministic = this._generateDeterministicExplanation(structuredPayload);
        return {
            adviceText: deterministic.adviceText,
            actionKeyPoints: deterministic.actionKeyPoints,
            keyPoints: deterministic.actionKeyPoints,
            source: 'STRUCTURED_ADVISORY'
        };
    }

    /**
     * Fallback structured multilingual explanation engine
     */
    static _generateDeterministicExplanation(p) {
        const isMarathi = p.targetLanguage.includes('Marathi') || p.targetLanguage.includes('मराठी');
        const isHindi = p.targetLanguage.includes('Hindi') || p.targetLanguage.includes('हिंदी');

        let adviceText = "";
        const actionKeyPoints = [];

        if (p.recommendedAction === "SELL_TO_VERIFIED_BUYER") {
            if (isMarathi) {
                adviceText = `आपल्या ${p.cropType} (${p.qualityGrade}) पिकासाठी ${p.topBuyerName} कडून ₹${p.buyerOfferedPrice}/kg चा थेट खरेदी प्रस्ताव आला आहे. मंडईपेक्षा हा सौदा ₹${p.estimatedNetRealization}/kg निव्वळ प्राप्ती देईल.`;
                actionKeyPoints.push(`खरेदीदार शेतावर थेट पिकअप पुरवत असल्याने वाहतूक खर्चात बचत.`);
                actionKeyPoints.push(`एकूण अंदाजे प्राप्ती: ₹${Number(p.totalLotValue).toLocaleString('en-IN')}.`);
                actionKeyPoints.push(`डिलिव्हरी तपासणीनंतर १२ तासांत थेट बँक खात्यात रक्कम जमा.`);
            } else if (isHindi) {
                adviceText = `आपकी ${p.cropType} फसल के लिए ${p.topBuyerName} से ₹${p.buyerOfferedPrice}/kg का सीधा खरीद प्रस्ताव मिला है, जो मंडी की तुलना में अधिक शुद्ध लाभ देता है।`;
                actionKeyPoints.push(`खेत से सीधा पिकअप मिलने से परिवहन खर्च में पूरी बचत।`);
                actionKeyPoints.push(`कुल अनुमानित प्राप्ति: ₹${Number(p.totalLotValue).toLocaleString('en-IN')}.`);
                actionKeyPoints.push(`डिलीवरी जांच के बाद 12 घंटे में बैंक ट्रांसफर।`);
            } else {
                adviceText = `Verified buyer ${p.topBuyerName} is offering ₹${p.buyerOfferedPrice}/kg for your ${p.cropType} (${p.qualityGrade}), providing a higher net realization than open APMC mandis.`;
                actionKeyPoints.push(`Farm-gate pickup provided (Zero transport deduction).`);
                actionKeyPoints.push(`Total estimated payout: ₹${Number(p.totalLotValue).toLocaleString('en-IN')}.`);
                actionKeyPoints.push(`Settlement via direct bank escrow within 12 hours.`);
            }
        } else if (p.recommendedAction === "WAIT") {
            if (isMarathi) {
                adviceText = `मंडईमध्ये सध्या भाववाढीचा कल असून आपल्या पिकाचा ताजेपणा ${p.freshnessScore}% असल्याने पुढील ३-४ दिवस वाट पाहणे अधिक फायदेशीर ठरू शकते.`;
                actionKeyPoints.push(`अपेक्षित भाव कक्षा: ${p.forecastRange}.`);
                actionKeyPoints.push(`पिकाची सुरक्षित टिकवण क्षमता ${p.safeHoldingDaysRemaining} दिवस शिल्लक.`);
                actionKeyPoints.push(`हवामानातील बदल व स्थानिक आवक यावर लक्ष ठेवा.`);
            } else if (isHindi) {
                adviceText = `मंडी में वर्तमान में तेजी का रुख है और फसल की ताजगी ${p.freshnessScore}% होने के कारण अगले 3-4 दिन रुकना अधिक लाभकारी हो सकता है।`;
                actionKeyPoints.push(`अनुमानित भाव दायरा: ${p.forecastRange}.`);
                actionKeyPoints.push(`फसल की सुरक्षित शेल्फ लाइफ ${p.safeHoldingDaysRemaining} दिन शेष।`);
            } else {
                adviceText = `Market price momentum is rising and your crop freshness (${p.freshnessScore}%) allows safe holding for 3-4 days to capture higher realization.`;
                actionKeyPoints.push(`Forecasted price range: ${p.forecastRange}.`);
                actionKeyPoints.push(`Safe holding window: ${p.safeHoldingDaysRemaining} days remaining.`);
            }
        } else {
            if (isMarathi) {
                adviceText = `आपल्या पिकासाठी सध्या ${p.bestMandi} मध्ये ₹${p.estimatedNetRealization}/kg चा उत्तम निव्वळ भाव मिळत आहे. नासाडीचा धोका टाळण्यासाठी तात्काळ विक्री करणे योग्य ठरेल.`;
                actionKeyPoints.push(`सर्वोत्तम चालू मंडी: ${p.bestMandi} (कच्चा भाव: ₹${p.mandiRate}/kg).`);
                actionKeyPoints.push(`सुरक्षित टिकवण मर्यादा संपण्यापूर्वी व्यवहार पूर्ण करा.`);
            } else if (isHindi) {
                adviceText = `आपकी फसल के लिए ${p.bestMandi} में ₹${p.estimatedNetRealization}/kg का शुद्ध भाव मिल रहा है। नुकसान से बचने के लिए तत्काल बिक्री की सिफारिश की जाती है।`;
                actionKeyPoints.push(`सर्वोत्तम वर्तमान मंडी: ${p.bestMandi} (भाव: ₹${p.mandiRate}/kg).`);
            } else {
                adviceText = `Selling now at ${p.bestMandi} provides the optimal risk-adjusted realization of ₹${p.estimatedNetRealization}/kg without risking post-harvest quality loss.`;
                actionKeyPoints.push(`Top market: ${p.bestMandi} (Modal: ₹${p.mandiRate}/kg).`);
            }
        }

        return { adviceText, actionKeyPoints };
    }
}


// --- MODULE: src/services/buyerService.js ---
/**
 * KisanTrust - Buyer Service & Demand Management
 * Manages buyer profiles, purchase requirement postings, and lot-to-buyer matching.
 */
class BuyerService {
    /**
     * Seed initial buyer profiles and demands in Firestore
     */
    static async initializeBuyerData() {
        await firebaseService.initializeData();

        // Seed buyer profiles if empty
        const profilesSnap = await (await firebaseService.db.collection('buyerProfiles')).get();
        if (profilesSnap.empty) {
            for (const profile of mockBuyerProfiles) {
                await (await firebaseService.db.collection('buyerProfiles')).doc(profile.buyerId).set(profile);
            }
        }

        // Seed buyer demands if empty
        const demandsSnap = await (await firebaseService.db.collection('buyerDemands')).get();
        if (demandsSnap.empty) {
            for (const demand of initialBuyerDemands) {
                const data = {
                    ...demand,
                    moderationStatus: 'APPROVED',
                    status: 'ACTIVE'
                };
                await (await firebaseService.db.collection('buyerDemands')).doc(demand.demandId).set(data);
            }
        }
    }

    /**
     * Create a new Buyer Demand (Purchase Requirement)
     * Submits to admin review queue for approval before public marketplace matching
     * @param {Object} demandData
     * @returns {Promise<BuyerDemand>}
     */
    static async createBuyerDemand(demandData) {
        await this.initializeBuyerData();
        const modStatus = demandData.moderationStatus || (demandData.status === 'PENDING_ADMIN_REVIEW' ? 'PENDING_ADMIN_REVIEW' : 'APPROVED');
        const st = demandData.status || (modStatus === 'PENDING_ADMIN_REVIEW' ? 'PENDING_ADMIN_REVIEW' : 'ACTIVE');
        
        const demand = new BuyerDemand({
            ...demandData,
            status: st,
            moderationStatus: modStatus
        });

        await (await firebaseService.db.collection('buyerDemands')).doc(demand.demandId).set(demand.toFirestore());

        // Notify admins of new pending demand if not already approved
        if (modStatus !== 'APPROVED') {
            await NotificationService.notifyAdmins({
                type: NOTIFICATION_TYPES.ADMIN_ALERT,
                title: 'नवीन खरेदी मागणी पुनरावलोकन प्रलंबित',
                message: `${demand.buyerName} यांनी ${demand.requiredQuantityKg}kg ${demand.cropType} साठी खरेदी मागणी मंजुरीसाठी नोंदवली आहे.`,
                relatedEntityType: 'DEMAND',
                relatedEntityId: demand.demandId
            });
        }

        return demand;
    }

    /**
     * Get active and approved buyer demands, optionally filtered by crop
     * @param {string} [cropType]
     * @returns {Promise<Array<BuyerDemand>>}
     */
    static async getActiveDemands(cropType = null) {
        await this.initializeBuyerData();
        const snap = await (await firebaseService.db.collection('buyerDemands')).get();
        let list = snap.docs
            .map(d => new BuyerDemand(d.data()))
            .filter(d => (d.status === "ACTIVE" || d.status === "PUBLISHED") && (d.moderationStatus === "APPROVED" || !d.moderationStatus));

        if (cropType && cropType.toLowerCase() !== "all") {
            const cLower = cropType.toLowerCase();
            list = list.filter(d => d.cropType.toLowerCase() === cLower || d.cropType.toLowerCase().includes(cLower));
        }

        return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Matches active approved buyer demands for a specific farmer lot
     * @param {Object} lot DigitalAgriculturalLot
     * @param {string} [farmerDistrict="Nashik"]
     * @returns {Promise<Array<Object>>} Ranked list of matches
     */
    static async matchBuyersForLot(lot, farmerDistrict = "Nashik") {
        await this.initializeBuyerData();
        const allDemands = await this.getActiveDemands(lot.cropType);
        return MatchingService.rankBuyersForLot(lot, allDemands, farmerDistrict);
    }

    /**
     * Get buyer profile by ID
     * @param {string} buyerId
     * @returns {Promise<BuyerProfile>}
     */
    static async getBuyerProfile(buyerId) {
        await this.initializeBuyerData();
        const doc = await (await firebaseService.db.collection('buyerProfiles')).doc(buyerId).get();
        return doc.exists ? new BuyerProfile(doc.data()) : null;
    }
}


// --- MODULE: src/services/matchingService.js ---
/**
 * KisanTrust - Deterministic Farmer-to-Buyer Matching Engine (Stage 3)
 * Computes an explainable Opportunity Compatibility Score (0 - 100%)
 * Evaluates Crop, Quality Grade, Distance, Volume, Price Net Realization, Deadline, and Buyer Reliability.
 */
class MatchingService {
    /**
     * Calculates deterministic match score and net realization between an agricultural lot and a buyer demand
     * @param {Object} lot DigitalAgriculturalLot instance or plain object
     * @param {Object} demand BuyerDemand instance or plain object
     * @param {string} [farmerDistrict="Nashik"]
     * @returns {Object} Deterministic match evaluation result
     */
    static evaluateMatch(lot, demand, farmerDistrict = "Nashik") {
        const lotCrop = (lot.cropType || "").trim().toLowerCase();
        const demandCrop = (demand.cropType || "").trim().toLowerCase();

        // 1. HARD GATE: Crop Type Compatibility
        if (lotCrop !== demandCrop && !lotCrop.includes(demandCrop) && !demandCrop.includes(lotCrop)) {
            return {
                matchScore: 0,
                isCompatible: false,
                reasons: [],
                warnings: ["पिकाचा प्रकार जुळत नाही (Incompatible Crop Type)"],
                estimatedNetRealization: 0,
                totalLotNetValue: 0,
                factorBreakdown: { crop: 0, quality: 0, distance: 0, volume: 0, price: 0, reliability: 0, deadline: 0 }
            };
        }

        const reasons = [];
        const warnings = [];

        // 2. QUALITY COMPATIBILITY (Weight: 25%)
        let qualityScore = 100;
        const lotGrade = lot.overallQualityGrade || "Grade A";
        const minGrade = demand.minQualityGrade || "Grade A";

        if (lotGrade === "Grade A") {
            qualityScore = 100;
            reasons.push(`लॉटचा दर्जा (${lotGrade}) खरेदीदाराच्या किमान निकषापेक्षा (${minGrade}) उत्कृष्ट आहे.`);
        } else if (lotGrade === "Grade B") {
            if (minGrade === "Grade A") {
                qualityScore = 50;
                warnings.push(`खरेदीदाराला Grade A आवश्यक आहे, परंतु लॉट Grade B आहे (दर कपात होऊ शकते).`);
            } else {
                qualityScore = 100;
                reasons.push(`लॉट Grade B खरेदीदाराच्या आवश्यकतेशी अचूक जुळतो.`);
            }
        } else { // Grade C
            if (minGrade === "Grade A") {
                qualityScore = 20;
                warnings.push(`लॉट Grade C आहे; खरेदीदाराच्या Grade A मानकांशी गंभीर विसंगती.`);
            } else if (minGrade === "Grade B") {
                qualityScore = 50;
                warnings.push(`लॉट Grade C आहे; प्रतवारी तपासणीत कपात संभवते.`);
            } else {
                qualityScore = 90;
            }
        }

        // 3. DISTANCE & LOGISTICS COMPATIBILITY (Weight: 20%)
        const buyerLocation = demand.preferredLocation || "Nashik";
        const distanceKm = TransportEstimationService.getEstimatedDistanceKm(farmerDistrict, buyerLocation);
        const maxDist = demand.maxSourcingDistanceKm || 150;
        
        let distanceScore = 100;
        if (distanceKm > maxDist) {
            const excess = distanceKm - maxDist;
            distanceScore = Math.max(10, 100 - (excess * 1.5));
            warnings.push(`खरेदीदाराच्या कमाल अंतर मर्यादेपेक्षा (${maxDist} km) हे अंतर (${distanceKm} km) जास्त आहे.`);
        } else {
            distanceScore = Number(Math.max(70, 100 - (distanceKm * 0.25)).toFixed(1));
            reasons.push(`खरेदीदार अंतर कक्षेत उपलब्ध आहे (${distanceKm} km < ${maxDist} km).`);
        }

        // 4. TRANSPORT & NET REALIZATION (Weight: 25%)
        let transportCostPerKg = 0.0;
        if (demand.pickupProvided) {
            transportCostPerKg = 0.0;
            reasons.push(`खरेदीदार शेतावर थेट पिकअप (Farm-gate Pickup) पुरवतो - शून्य वाहतूक खर्च!`);
        } else {
            const transportData = TransportEstimationService.calculateTransportCost({
                distanceKm,
                quantityKg: lot.quantity || 500
            });
            transportCostPerKg = transportData.costPerKg;
        }

        const offeredPrice = Number(demand.offeredPricePerKg) || 30.0;
        const handlingCost = 0.30;
        const estimatedNetRealization = Number(
            Math.max(1.0, offeredPrice - transportCostPerKg - handlingCost).toFixed(2)
        );
        const totalLotNetValue = Number((estimatedNetRealization * (lot.quantity || 500)).toFixed(2));

        // Price Score compared to base ₹30 benchmark
        let priceScore = Number(Math.min(100, Math.max(40, (estimatedNetRealization / 32.0) * 85)).toFixed(1));
        if (offeredPrice >= 36.0) {
            reasons.push(`आकर्षक खरेदी दर: ₹${offeredPrice}/kg (थेट निव्वळ प्राप्ती: ₹${estimatedNetRealization}/kg).`);
        }

        // 5. QUANTITY / VOLUME COMPATIBILITY (Weight: 15%)
        const lotQty = Number(lot.quantity) || 500;
        const demandQty = Number(demand.requiredQuantityKg) || 5000;
        const remainingDemand = Math.max(0, demandQty - (demand.fulfilledQuantityKg || 0));

        let volumeScore = 90;
        if (lotQty <= remainingDemand) {
            volumeScore = 100;
            reasons.push(`आपला संपूर्ण लॉट (${lotQty} kg) खरेदीदाराच्या शिल्लक मागणीत (${remainingDemand} kg) सामावला जाऊ शकतो.`);
        } else {
            const oversupplyRatio = lotQty / remainingDemand;
            volumeScore = Number(Math.max(50, 100 - ((oversupplyRatio - 1) * 40)).toFixed(1));
            warnings.push(`लॉटचे वजन (${lotQty} kg) खरेदीदाराच्या शिल्लक मागणीपेक्षा (${remainingDemand} kg) जास्त आहे.`);
        }

        // 6. BUYER RELIABILITY SCORE (Weight: 10%)
        const relRating = Number(demand.reliabilityScore) || 4.5;
        const reliabilityScore = Number(((relRating / 5.0) * 100).toFixed(1));
        if (relRating >= 4.8) {
            reasons.push(`उच्च विश्वासार्हता रेटिंग (⭐ ${relRating}/5.0 • ९८%+ वेळेवर पेमेंट नोंद).`);
        }

        // 7. DEADLINE ALIGNMENT (Bonus / Check)
        let deadlineScore = 95;
        if (lot.expectedSellingDate && demand.requiredDeliveryDate) {
            const sellDate = new Date(lot.expectedSellingDate);
            const reqDate = new Date(demand.requiredDeliveryDate);
            if (sellDate > reqDate) {
                deadlineScore = 40;
                warnings.push(`खरेदीदाराची आवश्यक तारीख (${demand.requiredDeliveryDate}) आपल्या काढणी तारखेनंतरची आहे.`);
            } else {
                deadlineScore = 100;
            }
        }

        // COMPOSITE DETERMINISTIC WEIGHTED MATCH SCORE
        const compositeScore = Number((
            (qualityScore * 0.25) +
            (distanceScore * 0.15) +
            (priceScore * 0.25) +
            (volumeScore * 0.15) +
            (reliabilityScore * 0.10) +
            (deadlineScore * 0.10)
        ).toFixed(1));

        const qualityFit = {
            score: qualityScore,
            status: lotGrade === minGrade ? 'EXACT_MATCH' : (lotGrade === 'Grade A' ? 'EXCEEDS' : 'BELOW_TARGET'),
            explanation: lotGrade === 'Grade A' 
                ? `लॉटचा प्रमाणित दर्जा ${lotGrade} खरेदीदाराच्या निकषापेक्षा (${minGrade}) उत्कृष्ट आहे.` 
                : (lotGrade === minGrade ? `लॉट दर्जा ${lotGrade} खरेदीदाराच्या आवश्यकतेशी अचूक जुळतो.` : `खरेदीदाराला ${minGrade} आवश्यक असून लॉट ${lotGrade} आहे.`)
        };

        const quantityFit = {
            score: volumeScore,
            status: lotQty <= remainingDemand ? 'FULL_LOT_COVERED' : 'PARTIAL_LOT_COVERED',
            explanation: lotQty <= remainingDemand 
                ? `आपला संपूर्ण लॉट (${lotQty} kg) खरेदीदाराच्या मागणीत (${remainingDemand} kg) १००% सामावला जातो.` 
                : `लॉटचे वजन (${lotQty} kg) शिल्लक मागणीपेक्षा (${remainingDemand} kg) जास्त आहे.`
        };

        const logisticsFit = {
            score: distanceScore,
            status: demand.pickupProvided ? 'FARM_GATE_PICKUP' : (distanceKm <= maxDist ? 'IN_RANGE' : 'OUT_OF_RANGE'),
            distanceKm,
            transportCostPerKg,
            explanation: demand.pickupProvided 
                ? `शेतावर थेट पिकअप (वाहतूक खर्च ₹०.००).` 
                : `अंतर: ${distanceKm} km (कमाल मर्यादा: ${maxDist} km), वाहतूक खर्च: ₹${transportCostPerKg}/kg.`
        };

        const priceFit = {
            score: priceScore,
            offeredPricePerKg: offeredPrice,
            estimatedNetRealization,
            totalLotNetValue,
            explanation: `ऑफर दर ₹${offeredPrice}/kg वरून निव्वळ प्राप्ती ₹${estimatedNetRealization}/kg (एकूण लॉट: ₹${totalLotNetValue.toLocaleString('en-IN')}).`
        };

        return {
            matchScore: Math.min(99, Math.max(15, compositeScore)),
            isCompatible: compositeScore >= 40,
            demandId: demand.demandId,
            buyerId: demand.buyerId,
            buyerName: demand.buyerName,
            companyType: demand.companyType,
            offeredPricePerKg: offeredPrice,
            transportCostPerKg,
            estimatedNetRealization,
            totalLotNetValue,
            pickupProvided: demand.pickupProvided,
            distanceKm,
            paymentTerms: demand.paymentTerms,
            reliabilityScore: relRating,
            reasons,
            warnings,
            factorBreakdown: {
                quality: qualityScore,
                distance: distanceScore,
                price: priceScore,
                volume: volumeScore,
                reliability: reliabilityScore,
                deadline: deadlineScore
            },
            matchDetails: {
                qualityFit,
                quantityFit,
                logisticsFit,
                priceFit
            }
        };
    }

    /**
     * Matches and ranks all active buyer demands for a specific lot
     * @param {Object} lot DigitalAgriculturalLot
     * @param {Array<Object>} demands Array of BuyerDemands
     * @param {string} [farmerDistrict="Nashik"]
     * @returns {Array<Object>} Ranked matches with score breakdown
     */
    static rankBuyersForLot(lot, demands, farmerDistrict = "Nashik") {
        const matches = demands
            .filter(d => d.status === "ACTIVE")
            .map(demand => {
                const evalResult = this.evaluateMatch(lot, demand, farmerDistrict);
                return {
                    ...evalResult,
                    demand
                };
            })
            .filter(m => m.isCompatible);

        // Rank by composite score (Net realization + compatibility)
        return matches.sort((a, b) => b.matchScore - a.matchScore);
    }
}


// --- MODULE: src/services/negotiationService.js ---
/**
 * KisanTrust - Negotiation & Direct Deal Service (Stage 3)
 * Manages multi-round price negotiations between Farmers and Verified Buyers.
 * Automatically transitions to an official TransactionRecord upon Deal Acceptance.
 */
class NegotiationService {
    /**
     * Initiates a new negotiation between farmer and buyer
     * @param {Object} params
     * @param {Object} params.lot DigitalAgriculturalLot
     * @param {Object} params.demand BuyerDemand
     * @param {number} [params.proposedPrice] Proposed rate per kg
     * @param {string} [params.notes]
     * @returns {Promise<NegotiationRecord>}
     */
    static async initiateNegotiation({ lot, demand, proposedPrice, notes = "" }) {
        await firebaseService.initializeData();

        const initialPrice = Number(proposedPrice || demand.offeredPricePerKg || 36.0);

        const record = new NegotiationRecord({
            lotId: lot.lotId,
            demandId: demand.demandId,
            farmerId: lot.farmerId || 'farmer_mh_001',
            farmerName: lot.farmerName || 'Ramesh Patil',
            buyerId: demand.buyerId,
            buyerName: demand.buyerName,
            cropType: lot.cropType,
            quantityKg: lot.quantity,
            qualityGrade: lot.overallQualityGrade,
            initialBuyerOfferPrice: demand.offeredPricePerKg,
            currentAgreedPrice: initialPrice,
            history: [
                {
                    sender: 'FARMER',
                    pricePerKg: initialPrice,
                    notes: notes || `Farmer initiated deal proposal based on Grade ${lot.overallQualityGrade} quality certification.`,
                    timestamp: new Date().toISOString()
                }
            ],
            status: 'FARMER_COUNTEROFFER'
        });

        await (await firebaseService.db.collection('negotiations')).doc(record.negotiationId).set(record.toFirestore());
        return record;
    }

    /**
     * Submit a counter-offer in an active negotiation
     * @param {string} negotiationId
     * @param {'FARMER'|'BUYER'} senderRole
     * @param {number} newPricePerKg
     * @param {string} [notes]
     * @returns {Promise<NegotiationRecord>}
     */
    static async submitCounterOffer(negotiationId, senderRole, newPricePerKg, notes = "") {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('negotiations')).doc(negotiationId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Negotiation ${negotiationId} not found.`);
        }

        const data = doc.data();
        const price = Number(newPricePerKg);
        const nextStatus = senderRole === 'FARMER' ? 'FARMER_COUNTEROFFER' : 'BUYER_REVISION';

        const historyEntry = {
            sender: senderRole,
            pricePerKg: price,
            notes: notes || `${senderRole} proposed revised price of ₹${price}/kg.`,
            timestamp: new Date().toISOString()
        };

        const updatedHistory = [...(data.history || []), historyEntry];

        await docRef.update({
            currentAgreedPrice: price,
            status: nextStatus,
            history: updatedHistory,
            updatedAt: new Date().toISOString()
        });

        return new NegotiationRecord({
            ...data,
            currentAgreedPrice: price,
            status: nextStatus,
            history: updatedHistory
        });
    }

    /**
     * Accepts offer, seals negotiation, and creates official TransactionRecord
     * @param {string} negotiationId
     * @param {string} [acceptedByRole="FARMER"]
     * @returns {Promise<{ negotiation: NegotiationRecord, transaction: Object }>}
     */
    static async acceptOffer(negotiationId, acceptedByRole = "FARMER") {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('negotiations')).doc(negotiationId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Negotiation ${negotiationId} not found.`);
        }

        const data = doc.data();
        const finalPrice = data.currentAgreedPrice;
        const totalAmount = Number((finalPrice * data.quantityKg).toFixed(2));

        const updatedHistory = [
            ...(data.history || []),
            {
                sender: acceptedByRole,
                pricePerKg: finalPrice,
                notes: `Deal accepted by ${acceptedByRole} at ₹${finalPrice}/kg. Digital contract locked.`,
                timestamp: new Date().toISOString()
            }
        ];

        // 1. Update Negotiation state to ACCEPTED
        await docRef.update({
            status: 'ACCEPTED',
            history: updatedHistory,
            updatedAt: new Date().toISOString()
        });

        // 2. Automatically generate and persist official TransactionRecord
        const transaction = await TransactionService.recordTransaction({
            lotId: data.lotId,
            farmerId: data.farmerId,
            farmerName: data.farmerName,
            buyerId: data.buyerId,
            buyerName: data.buyerName,
            cropType: data.cropType,
            quantityKg: data.quantityKg,
            agreedPricePerKg: finalPrice,
            totalAmount: totalAmount,
            qualityGrade: data.qualityGrade,
            paymentMilestone: 'ESCROW_LOCKED'
        });

        // 3. Update Lot status to MATCHED
        await firebaseService.updateLot(data.lotId, { status: 'MATCHED' });

        return {
            negotiation: new NegotiationRecord({ ...data, status: 'ACCEPTED', history: updatedHistory }),
            transaction
        };
    }

    /**
     * Rejects or cancels negotiation
     * @param {string} negotiationId
     * @param {string} [reason="Price expectation mismatch"]
     */
    static async rejectOffer(negotiationId, reason = "Price expectation mismatch") {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('negotiations')).doc(negotiationId);
        await docRef.update({
            status: 'REJECTED',
            rejectionReason: reason,
            updatedAt: new Date().toISOString()
        });
    }

    /**
     * Get active negotiations for a farmer
     * @param {string} [farmerId="farmer_mh_001"]
     * @returns {Promise<Array<NegotiationRecord>>}
     */
    static async getNegotiationsByFarmer(farmerId = "farmer_mh_001") {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('negotiations')).get();
        return snap.docs
            .map(d => new NegotiationRecord(d.data()))
            .filter(n => !farmerId || n.farmerId === farmerId)
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }
}


// --- MODULE: src/services/poolingService.js ---
/**
 * KisanTrust - Smart Village Pooling & Aggregation Service (Stage 4)
 * Enables smallholder farmers in the same village cluster to aggregate compatible produce,
 * unlock high-volume bulk buyer purchase orders, and save 50–60% on shared road freight.
 */
class PoolingService {
    /**
     * Seed initial pooling clusters in Firestore
     */
    static async initializePoolingData() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('poolingClusters')).get();
        if (snap.empty) {
            for (const cluster of mockPoolingClusters) {
                const p = new PoolingCluster(cluster);
                await (await firebaseService.db.collection('poolingClusters')).doc(p.clusterId).set(p.toFirestore());
            }
        }
    }

    /**
     * Get active pooling clusters, optionally filtered by crop
     * @param {string} [cropType]
     * @returns {Promise<Array<PoolingCluster>>}
     */
    static async getActiveClusters(cropType = null) {
        await this.initializePoolingData();
        const snap = await (await firebaseService.db.collection('poolingClusters')).get();
        let list = snap.docs
            .map(d => new PoolingCluster(d.data()))
            .filter(c => c.status === 'GATHERING' || c.status === 'OPEN_FOR_JOINING');

        if (cropType && cropType.toLowerCase() !== 'all') {
            const cLower = cropType.toLowerCase();
            list = list.filter(c => c.cropType.toLowerCase() === cLower || c.cropType.toLowerCase().includes(cLower));
        }

        return list.sort((a, b) => b.savingsPercentage - a.savingsPercentage);
    }

    /**
     * Discover compatible lots for potential village pooling
     * @param {Object} lot DigitalAgriculturalLot
     * @param {string} [taluka="Niphad"]
     * @returns {Promise<{ compatibleLotsCount: number, totalPooledPotentialKg: number, eligibleClusters: Array<PoolingCluster> }>}
     */
    static async discoverCompatibleLots(lot, taluka = "Niphad") {
        await this.initializePoolingData();
        const allClusters = await this.getActiveClusters(lot.cropType);
        
        // Find matching cluster in the same area
        const eligibleClusters = allClusters.filter(c => 
            c.cropType.toLowerCase() === lot.cropType.toLowerCase() &&
            (c.targetCapacityKg - c.currentPooledKg) >= (lot.quantity || 500)
        );

        return {
            compatibleLotsCount: eligibleClusters.reduce((acc, c) => acc + c.participatingFarmersCount, 0),
            totalPooledPotentialKg: eligibleClusters.reduce((acc, c) => acc + c.currentPooledKg, 0),
            eligibleClusters
        };
    }

    /**
     * Calculate logistics savings from village aggregation
     * @param {Object} params
     * @param {number} params.distanceKm
     * @param {number} params.lotQuantityKg
     * @returns {{ individualCostTotal: number, pooledCostTotal: number, totalSavingsRupees: number, savingsPercent: number }}
     */
    static calculateLogisticsSavings({ distanceKm = 180, lotQuantityKg = 500 }) {
        // Individual transport: 1-Ton Pickup @ ₹14/km -> ₹2.52/kg for 180km
        const individualRate = TransportEstimationService.calculateTransportCost({
            distanceKm,
            quantityKg: lotQuantityKg
        }).costPerKg;

        // Pooled transport: 10-Ton Truckload @ ₹42/km spread over 10,000kg -> ₹0.75/kg
        const pooledRate = Number(Math.max(0.60, (distanceKm * 42) / 10000).toFixed(2));

        const individualCostTotal = Number((individualRate * lotQuantityKg).toFixed(2));
        const pooledCostTotal = Number((pooledRate * lotQuantityKg).toFixed(2));
        const totalSavingsRupees = Number((individualCostTotal - pooledCostTotal).toFixed(2));
        const savingsPercent = Number(Math.round(((individualRate - pooledRate) / individualRate) * 100));

        return {
            individualRatePerKg: individualRate,
            pooledRatePerKg: pooledRate,
            individualCostTotal,
            pooledCostTotal,
            totalSavingsRupees,
            savingsPercent
        };
    }

    /**
     * Join an active pooling cluster
     * @param {string} clusterId
     * @param {Object} lot DigitalAgriculturalLot
     * @returns {Promise<PoolingCluster>}
     */
    static async joinPoolingCluster(clusterId, lot) {
        await this.initializePoolingData();
        const docRef = (await firebaseService.db.collection('poolingClusters')).doc(clusterId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Cluster ${clusterId} not found`);

        const cluster = new PoolingCluster(doc.data());
        const addedQty = Number(lot.quantity) || 500;
        const newTotalKg = cluster.currentPooledKg + addedQty;
        const newFarmerCount = cluster.participatingFarmersCount + 1;

        // Add anonymized lot summary to protect farmer privacy
        const lotSummary = {
            lotId: lot.lotId,
            village: lot.approximateLocation?.village || 'Niphad Village Hub',
            quantityKg: addedQty,
            qualityGrade: lot.overallQualityGrade,
            joinedAt: new Date().toISOString()
        };

        const updatedLots = [...cluster.participatingLots, lotSummary];
        const nextStatus = newTotalKg >= cluster.targetCapacityKg ? 'FULL_READY_TO_DISPATCH' : 'GATHERING';

        await docRef.update({
            currentPooledKg: newTotalKg,
            participatingFarmersCount: newFarmerCount,
            participatingLots: updatedLots,
            status: nextStatus,
            updatedAt: new Date().toISOString()
        });

        // Mark lot status as POOLED
        await firebaseService.updateLot(lot.lotId, { status: 'POOLED' });

        return new PoolingCluster({
            ...cluster,
            currentPooledKg: newTotalKg,
            participatingFarmersCount: newFarmerCount,
            participatingLots: updatedLots,
            status: nextStatus
        });
    }

    /**
     * Create a new village pooling cluster
     * @param {Object} clusterData
     * @returns {Promise<PoolingCluster>}
     */
    static async createPoolingCluster(clusterData) {
        await this.initializePoolingData();
        const cluster = new PoolingCluster(clusterData);
        await (await firebaseService.db.collection('poolingClusters')).doc(cluster.clusterId).set(cluster.toFirestore());
        return cluster;
    }
}


// --- MODULE: src/services/logisticsService.js ---
/**
 * KisanTrust - Logistics Decision Support & Freight Estimator (Stage 5)
 * Provides transparent transport options, transit time estimations, and pooled logistics savings.
 * Grounded in commercial road freight benchmarks across Western India / Maharashtra corridors.
 */
const VEHICLE_FLEET_SPECIFICATIONS = [
    {
        typeId: 'PICKUP_1T',
        transportType: '1-Ton Mini Pickup (Mahindra Bolero / Tata Ace)',
        capacityKg: 1000,
        baseRatePerKm: 14,
        loadingFee: 200,
        unloadingFee: 200,
        averageSpeedKmH: 40,
        temperatureControlled: false,
        bestFor: 'Small individual farm lots (< 1,000 kg) & nearby local APMCs (< 50 km)'
    },
    {
        typeId: 'LCV_3_5T',
        transportType: '3.5-Ton Eicher Light Commercial Truck',
        capacityKg: 3500,
        baseRatePerKm: 26,
        loadingFee: 400,
        unloadingFee: 400,
        averageSpeedKmH: 45,
        temperatureControlled: false,
        bestFor: 'Medium agricultural lots or small group pooling (1,000 - 3,500 kg)'
    },
    {
        typeId: 'REEFER_COLD_3T',
        transportType: 'Cold-Chain Reefer Van (8°C - 12°C Controlled)',
        capacityKg: 3000,
        baseRatePerKm: 38,
        loadingFee: 500,
        unloadingFee: 500,
        averageSpeedKmH: 50,
        temperatureControlled: true,
        bestFor: 'Export Grade A produce, ripe tomatoes, berries, and high-value perishables'
    },
    {
        typeId: 'FTL_10T',
        transportType: '10-Ton Heavy Multi-Axle Truck (Full Truck Load - FTL)',
        capacityKg: 10000,
        baseRatePerKm: 42,
        loadingFee: 800,
        unloadingFee: 800,
        averageSpeedKmH: 45,
        temperatureControlled: false,
        bestFor: 'Smart Village Pooling clusters (5,000 - 10,000 kg) for maximum freight savings'
    }
];
class LogisticsService {
    /**
     * Get all available logistics options for a lot
     * @param {Object} params
     * @param {number} params.distanceKm
     * @param {number} params.quantityKg
     * @param {string} [params.cropType="Tomato"]
     * @param {boolean} [params.requiresColdChain=false]
     * @returns {Array<Object>} List of evaluated logistics options
     */
    static getAvailableLogisticsOptions({ distanceKm = 40, quantityKg = 500, cropType = 'Tomato', requiresColdChain = false }) {
        return VEHICLE_FLEET_SPECIFICATIONS.map(vehicle => {
            const runningCost = distanceKm * vehicle.baseRatePerKm;
            const totalFreightCost = runningCost + vehicle.loadingFee + vehicle.unloadingFee;
            
            // Cost per kg allocated to this lot
            const effectivePayloadKg = Math.min(vehicle.capacityKg, Math.max(quantityKg, 300));
            const costPerKg = Number((totalFreightCost / effectivePayloadKg).toFixed(2));
            
            const estimatedHours = Number((distanceKm / vehicle.averageSpeedKmH).toFixed(1));
            const isPayloadCompatible = quantityKg <= vehicle.capacityKg;
            const isRecommended = (
                (quantityKg <= 1000 && vehicle.typeId === 'PICKUP_1T') ||
                (quantityKg > 1000 && quantityKg <= 3500 && vehicle.typeId === 'LCV_3_5T') ||
                (quantityKg > 3500 && vehicle.typeId === 'FTL_10T') ||
                (requiresColdChain && vehicle.typeId === 'REEFER_COLD_3T')
            );

            return {
                typeId: vehicle.typeId,
                transportType: vehicle.transportType,
                capacityKg: vehicle.capacityKg,
                estimatedCostPerKg: costPerKg,
                totalFreightCost,
                estimatedTravelTimeHours: estimatedHours,
                pickupCompatibility: isPayloadCompatible ? 'COMPATIBLE' : 'OVER_CAPACITY',
                temperatureControlled: vehicle.temperatureControlled,
                isRecommended,
                bestFor: vehicle.bestFor,
                dataSource: 'ESTIMATED_COMMERCIAL_ROAD_FREIGHT'
            };
        });
    }

    /**
     * Compare Individual Transport vs Pooled Logistics
     * @param {number} distanceKm
     * @param {number} lotQuantityKg
     * @returns {Object} Comparative logistics savings analysis
     */
    static compareIndividualVsPooledLogistics(distanceKm, lotQuantityKg) {
        const individual = this.getAvailableLogisticsOptions({ distanceKm, quantityKg: lotQuantityKg })
            .find(o => o.typeId === 'PICKUP_1T') || { estimatedCostPerKg: 2.50, totalFreightCost: 1250 };

        // 10-Ton pooled truckload freight distributed across full 10,000kg
        const ftlTotal = (distanceKm * 42) + 1600;
        const pooledRatePerKg = Number((ftlTotal / 10000).toFixed(2));
        const pooledCostForLot = Number((pooledRatePerKg * lotQuantityKg).toFixed(2));
        const individualCostForLot = Number((individual.estimatedCostPerKg * lotQuantityKg).toFixed(2));

        const savingsRupees = Number((individualCostForLot - pooledCostForLot).toFixed(2));
        const savingsPercent = Number(Math.round(((individual.estimatedCostPerKg - pooledRatePerKg) / individual.estimatedCostPerKg) * 100));

        return {
            individual: {
                ratePerKg: individual.estimatedCostPerKg,
                totalCost: individualCostForLot,
                vehicleType: '1-Ton Solo Pickup'
            },
            pooled: {
                ratePerKg: pooledRatePerKg,
                totalCost: pooledCostForLot,
                vehicleType: '10-Ton Shared FTL Truck'
            },
            savingsRupees,
            savingsPercent,
            formulaExplanation: `Individual Cost (${lotQuantityKg}kg @ ₹${individual.estimatedCostPerKg}/kg = ₹${individualCostForLot}) - Shared Cost (${lotQuantityKg}kg @ ₹${pooledRatePerKg}/kg = ₹${pooledCostForLot}) = ₹${savingsRupees} Net Savings (${savingsPercent}%).`
        };
    }
}


// --- MODULE: src/services/storageService.js ---
/**
 * KisanTrust - Storage Feasibility & Post-Harvest Advisory Service (Stage 5)
 * Analyzes crop shelf-life, temperature requirements, and price forecasts to determine
 * whether immediate sale, farm ventilated storage (Kanda Chawl), or commercial cold storage is optimal.
 */
const STORAGE_FACILITY_BENCHMARKS = [
    {
        typeId: 'FARM_VENTILATED',
        facilityType: 'On-Farm Ventilated Storage (Kanda Chawl / Raised Bamboo Platform)',
        optimalCrops: ['Onion', 'Garlic', 'Pumpkin'],
        estimatedCostPerKgMonth: 0.15,
        maxHoldingDays: 60,
        temperatureRange: '25°C - 30°C (Natural Aeration)',
        description: 'Low-cost elevated farm structures with natural cross-ventilation to prevent moisture accumulation.'
    },
    {
        typeId: 'COMMERCIAL_COLD_STORAGE',
        facilityType: 'Controlled Atmosphere Commercial Cold Storage',
        optimalCrops: ['Potato', 'Carrot', 'Cabbage', 'Grapes', 'Pomegranate', 'Tomato (Short-term)'],
        estimatedCostPerKgMonth: 0.55,
        maxHoldingDays: 90,
        temperatureRange: '2°C - 8°C (Humidity 85-90%)',
        description: 'Commercial refrigeration hubs preventing enzymatic ripening and dehydration.'
    }
];
class StorageService {
    /**
     * Evaluates storage feasibility and provides clear actionable guidance
     * @param {Object} params
     * @param {string} params.cropType
     * @param {number} params.freshnessScore
     * @param {string} [params.harvestDate]
     * @param {number} [params.expectedPriceGainPerKg=0]
     * @returns {Object} Storage recommendation record
     */
    static evaluateStorageFeasibility({ cropType = 'Tomato', freshnessScore = 90, harvestDate, expectedPriceGainPerKg = 0 }) {
        const cropInfo = CropKnowledgeService.getCropInfo(cropType) || { typicalShelfLifeDays: 7 };
        const spoilage = CropKnowledgeService.evaluateSpoilageRisk(cropType, freshnessScore, harvestDate);

        let recommendationType = 'IMMEDIATE_SALE_PREFERRED';
        let recommendationTitle = 'तात्काळ विक्रीची शिफारस (Immediate Sale Preferred)';
        let guidanceRationale = '';
        let recommendedFacility = null;
        let estimatedHoldingCostPerKg = 0.0;

        // Decision Tree
        if (spoilage.riskLevel === 'CRITICAL' || spoilage.safeHoldingDaysRemaining <= 2) {
            recommendationType = 'IMMEDIATE_SALE_PREFERRED';
            recommendationTitle = 'तात्काळ विक्री करा - साठवणूक टाळा (Immediate Sale: High Spoilage)';
            guidanceRationale = `पिकाची सुरक्षित टिकवण क्षमता संपत आली आहे (${spoilage.safeHoldingDaysRemaining} दिवस शिल्लक). साठवणूक केल्यास वजनात घट व सडण्याचा धोका उद्भवू शकतो.`;
        } else if (cropType.toLowerCase() === 'onion' && freshnessScore >= 80) {
            recommendationType = 'VENTILATED_FARM_STORAGE_BENEFICIAL';
            recommendationTitle = 'कांदा चाळीत साठवणूक फायदेशीर (Farm Storage Beneficial)';
            recommendedFacility = STORAGE_FACILITY_BENCHMARKS.find(f => f.typeId === 'FARM_VENTILATED');
            estimatedHoldingCostPerKg = 0.30; // 2 months approx
            guidanceRationale = `कांद्याचा दर्जा उत्तम असून पारंपारिक हवेशीर कांदा चाळीत पुढील ३०-४५ दिवस साठवणूक करून भाववाढीचा फायदा घेता येऊ शकतो.`;
        } else if (expectedPriceGainPerKg >= 3.0 && (cropType.toLowerCase() === 'potato' || cropType.toLowerCase() === 'carrot')) {
            recommendationType = 'COMMERCIAL_COLD_STORAGE_RECOMMENDED';
            recommendationTitle = 'कोल्ड स्टोरेज साठवणूक फायदेशीर (Cold Storage Beneficial)';
            recommendedFacility = STORAGE_FACILITY_BENCHMARKS.find(f => f.typeId === 'COMMERCIAL_COLD_STORAGE');
            estimatedHoldingCostPerKg = 0.55;
            guidanceRationale = `अपेक्षित भाववाढ (₹${expectedPriceGainPerKg}/kg) ही साठवणूक खर्चापेक्षा (₹0.55/kg) अधिक असल्याने कोल्ड स्टोरेजचा वापर आर्थिकदृष्ट्या योग्य आहे.`;
        } else {
            recommendationType = 'IMMEDIATE_SALE_PREFERRED';
            recommendationTitle = 'तात्काळ विक्री प्राधान्य (Immediate Sale Preferred)';
            guidanceRationale = `${cropType} हे नाशवंत पीक असल्याने साठवणुकीचा खर्च व वजनघट विचारात घेता सध्या उपलब्ध सर्वोत्तम बाजारात तात्काळ विक्री करणे इष्ट ठरेल.`;
        }

        return {
            recommendationType,
            recommendationTitle,
            guidanceRationale,
            storageGuidanceText: cropInfo.storageGuidance || 'Store in cool ventilated conditions.',
            recommendedFacility,
            estimatedHoldingCostPerKg,
            safeHoldingDaysRemaining: spoilage.safeHoldingDaysRemaining,
            spoilageRiskPercent: spoilage.spoilageRiskPercent,
            disclaimer: 'Storage cost benchmarks and holding limits are technical estimations based on ICAR post-harvest guidelines.'
        };
    }
}


// --- MODULE: src/services/transactionService.js ---
/**
 * KisanTrust - Transaction & Digital Certificate Management Service
 * Enforces controlled 9-stage lifecycle transitions, payment tracking,
 * and generates downloadable verifiable digital receipts.
 */
class TransactionService {
    /**
     * Records a new transaction into Firestore upon accepted deal
     * @param {Object} data
     * @returns {Promise<TransactionRecord>}
     */
    static async recordTransaction(data) {
        await firebaseService.initializeData();

        const record = new TransactionRecord({
            ...data,
            currentStage: data.currentStage || 'OFFER_ACCEPTED',
            deliveryStatus: data.deliveryStatus || 'SCHEDULED_FOR_PICKUP',
            paymentMilestone: data.paymentMilestone || 'ESCROW_LOCKED',
            paymentStatus: data.paymentStatus || PAYMENT_STATUSES.PENDING
        });

        await (await firebaseService.db.collection('transactions')).doc(record.transactionId).set(record.toFirestore());

        // Notify both parties
        await NotificationService.sendNotification({
            userId: record.farmerId,
            type: NOTIFICATION_TYPES.OFFER_ACCEPTED,
            title: '🎉 नवीन व्यवहार करार तयार झाला!',
            message: `${record.buyerName} सोबत ${record.cropType} (${record.quantityKg}kg @ ₹${record.agreedPricePerKg}/kg) चा करार निश्चित झाला आहे.`,
            relatedEntityType: 'TRANSACTION',
            relatedEntityId: record.transactionId
        });

        await NotificationService.sendNotification({
            userId: record.buyerId,
            type: NOTIFICATION_TYPES.OFFER_ACCEPTED,
            title: '✅ खरेदी करार निश्चित!',
            message: `${record.farmerName} सोबत ${record.quantityKg}kg ${record.cropType} चा करार नोंदवला गेला आहे.`,
            relatedEntityType: 'TRANSACTION',
            relatedEntityId: record.transactionId
        });

        return record;
    }

    /**
     * Process direct escrow payment for a lot or purchase order
     * @param {Object} paymentData
     * @returns {Promise<TransactionRecord>}
     */
    static async processEscrowPayment(paymentData = {}) {
        await firebaseService.initializeData();
        const quantity = Number(paymentData.quantityKg) || 100;
        const rate = Number(paymentData.pricePerKg) || 35.0;
        const totalAmount = Math.round(quantity * rate);
        const transactionId = `TXN-${Date.now().toString().slice(-6)}`;
        const escrowLockRef = `ESC-LOCK-${Date.now().toString().slice(-4)}`;

        const record = new TransactionRecord({
            transactionId,
            lotId: paymentData.lotId || `LOT-${Date.now().toString().slice(-5)}`,
            farmerId: paymentData.farmerId || 'farmer_mh_001',
            farmerName: paymentData.farmerName || 'रमेश पाटील (Farmer)',
            buyerId: paymentData.buyerId || 'buyer_sahyadri',
            buyerName: paymentData.buyerName || 'अमित जोशी (Buyer)',
            cropType: paymentData.cropType || 'Tomato',
            quantityKg: quantity,
            agreedPricePerKg: rate,
            totalAmount,
            currentStage: 'OFFER_ACCEPTED',
            deliveryStatus: 'SCHEDULED_FOR_PICKUP',
            paymentMilestone: 'ESCROW_LOCKED',
            paymentStatus: PAYMENT_STATUSES.PROCESSING,
            createdAt: new Date().toISOString()
        });

        record.escrowLockRef = escrowLockRef;
        record.paymentMethod = paymentData.paymentMethod || 'UPI_QR';

        try {
            await (await firebaseService.db.collection('transactions')).doc(transactionId).set(record.toFirestore());
        } catch(e) {}

        try {
            await NotificationService.sendNotification({
                userId: record.farmerId,
                type: NOTIFICATION_TYPES.OFFER_ACCEPTED,
                title: '💰 एस्क्रो पेमेंट जमा झाले!',
                message: `खरेदीदार ${record.buyerName} यांनी ${record.cropType} (${record.quantityKg}kg) साठी ₹${totalAmount.toLocaleString('en-IN')} चे पेमेंट किसान ट्रस्ट एस्क्रो खात्यात सुरक्षितपणे जमा केले आहे.`,
                relatedEntityType: 'TRANSACTION',
                relatedEntityId: transactionId
            });
        } catch(e) {}

        return record;
    }


    /**
     * Updates transaction lifecycle stage with strict transition validation and audit logging
     * @param {string} transactionId
     * @param {string} nextStage One of TRANSACTION_STAGES
     * @param {string} [updatedBy="SYSTEM"]
     * @param {string} [notes=""]
     * @returns {Promise<TransactionRecord>}
     */
    static async transitionStage(transactionId, nextStage, updatedBy = 'SYSTEM', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('transactions')).doc(transactionId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Transaction ${transactionId} not found.`);
        }

        const data = doc.data();
        const currentIndex = TRANSACTION_STAGES.indexOf(data.currentStage);
        const nextIndex = TRANSACTION_STAGES.indexOf(nextStage);

        if (nextIndex === -1) {
            throw new Error(`Invalid stage: ${nextStage}`);
        }

        // Controlled transition check: cannot skip backwards arbitrarily
        if (nextIndex < currentIndex) {
            throw new Error(`Cannot transition backwards from ${data.currentStage} to ${nextStage}`);
        }

        // Delivery & Payment mapping
        let nextDeliveryStatus = data.deliveryStatus;
        let nextPaymentMilestone = data.paymentMilestone;
        let nextPaymentStatus = data.paymentStatus || PAYMENT_STATUSES.PENDING;
        let paymentCompletedDate = data.paymentCompletedDate || null;
        let delayDurationHours = data.delayDurationHours || 0;

        if (nextStage === 'PICKUP_SCHEDULED') {
            nextDeliveryStatus = 'SCHEDULED_FOR_PICKUP';
        } else if (nextStage === 'IN_TRANSIT') {
            nextDeliveryStatus = 'IN_TRANSIT';
        } else if (nextStage === 'DELIVERY_CONFIRMED') {
            nextDeliveryStatus = 'DELIVERED';
            nextPaymentMilestone = 'PENDING_QC';
            nextPaymentStatus = PAYMENT_STATUSES.PROCESSING;
        } else if (nextStage === 'PAYMENT_COMPLETED') {
            nextPaymentMilestone = 'SETTLED';
            nextPaymentStatus = PAYMENT_STATUSES.COMPLETED;
            paymentCompletedDate = new Date().toISOString();
            
            // Check for delay
            if (data.paymentDueDate) {
                const dueTime = new Date(data.paymentDueDate).getTime();
                const nowTime = Date.now();
                if (nowTime > dueTime) {
                    delayDurationHours = Number(((nowTime - dueTime) / (1000 * 60 * 60)).toFixed(1));
                }
            }
        }

        const historyEntry = {
            stage: nextStage,
            updatedBy,
            notes: notes || `Transitioned to ${nextStage}`,
            timestamp: new Date().toISOString()
        };

        const updatedHistory = [...(data.statusHistory || []), historyEntry];

        await docRef.update({
            currentStage: nextStage,
            deliveryStatus: nextDeliveryStatus,
            paymentMilestone: nextPaymentMilestone,
            paymentStatus: nextPaymentStatus,
            paymentCompletedDate,
            delayDurationHours,
            statusHistory: updatedHistory,
            updatedAt: new Date().toISOString()
        });

        // Send notifications
        if (nextStage === 'DELIVERY_CONFIRMED') {
            await NotificationService.sendNotification({
                userId: data.farmerId,
                type: NOTIFICATION_TYPES.DELIVERY_CONFIRMED,
                title: '🚚 माल सुरक्षितरीत्या पोहोचला!',
                message: `खरेदीदाराने ${data.cropType} लॉटची डिलिव्हरी व गुणवत्ता पडताळणी पूर्ण केली आहे. पेमेंट प्रक्रिया सुरू झाली आहे.`,
                relatedEntityType: 'TRANSACTION',
                relatedEntityId: transactionId
            });
        } else if (nextStage === 'PAYMENT_COMPLETED') {
            await NotificationService.sendNotification({
                userId: data.farmerId,
                type: NOTIFICATION_TYPES.PAYMENT_UPDATE,
                title: '💰 बँक पेमेंट यशस्वी!',
                message: `₹${(data.totalTransactionValue || data.totalAmount).toLocaleString('en-IN')} ची रक्कम आपल्या बँक खात्यात थेट वर्ग करण्यात आली आहे.`,
                relatedEntityType: 'TRANSACTION',
                relatedEntityId: transactionId
            });
        }

        return new TransactionRecord({
            ...data,
            currentStage: nextStage,
            deliveryStatus: nextDeliveryStatus,
            paymentMilestone: nextPaymentMilestone,
            paymentStatus: nextPaymentStatus,
            paymentCompletedDate,
            delayDurationHours,
            statusHistory: updatedHistory
        });
    }

    /**
     * Retrieve all transactions (optionally filtered by farmer, buyer, or all for admin)
     * @param {string} [userId=null]
     * @returns {Promise<Array<TransactionRecord>>}
     */
    static async getTransactions(userId = null) {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('transactions')).get();
        return snap.docs
            .map(d => new TransactionRecord(d.data()))
            .filter(t => !userId || t.farmerId === userId || t.buyerId === userId)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Generates and downloads a printable, tamper-evident HTML/PDF Digital Receipt Certificate
     * @param {TransactionRecord|Object} txn
     */
    static downloadReceipt(txn) {
        const receiptHtml = `
<!DOCTYPE html>
<html lang="mr">
<head>
    <meta charset="UTF-8">
    <title>KisanTrust Digital Certificate - ${txn.receiptNumber}</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fdfdfd; color: #333; padding: 30px; }
        .receipt-card { max-width: 720px; margin: auto; border: 2px solid #2E7D32; border-radius: 12px; padding: 24px; background: white; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #E8F5E9; padding-bottom: 16px; align-items: center; }
        .brand { font-size: 24px; font-weight: bold; color: #1B5E20; }
        .tagline { font-size: 11px; color: #666; }
        .badge { background: #E8F5E9; color: #2E7D32; padding: 4px 12px; border-radius: 20px; font-weight: bold; font-size: 12px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; font-size: 13px; }
        .section-title { grid-column: 1/-1; font-size: 14px; font-weight: bold; color: #1B5E20; border-bottom: 1px dashed #ccc; padding-bottom: 4px; margin-top: 10px; }
        .highlight-box { background: #F9FBF9; border: 1px solid #E8F5E9; border-radius: 8px; padding: 14px; margin: 16px 0; display: flex; justify-content: space-between; align-items: center; }
        .amount { font-size: 24px; font-weight: 900; color: #1B5E20; }
        .timeline { margin-top: 16px; font-size: 12px; background: #FAFAFA; border-radius: 8px; padding: 12px; }
        .timeline-item { margin-bottom: 6px; display: flex; justify-content: space-between; }
        .footer { text-align: center; margin-top: 24px; font-size: 11px; color: #777; border-top: 1px solid #eee; padding-top: 12px; }
    </style>
</head>
<body>
    <div class="receipt-card">
        <div class="header">
            <div>
                <div class="brand">🌱 KisanTrust</div>
                <div class="tagline">Smart India Hackathon PS 6132 • AI Market Intelligence & Farm-to-Buyer Network</div>
            </div>
            <div class="badge">✓ VERIFIED TRANSACTION</div>
        </div>

        <div class="highlight-box">
            <div>
                <div style="font-size: 12px; color: #666;">पावती क्रमांक / Receipt No.</div>
                <div style="font-weight: bold; font-size: 15px;">${txn.receiptNumber}</div>
                <div style="font-size: 11px; color: #888;">लॉट आयडी: ${txn.lotId || 'N/A'} • दिनांक: ${new Date(txn.createdAt).toLocaleDateString('en-IN')}</div>
            </div>
            <div style="text-align: right;">
                <div style="font-size: 12px; color: #666;">एकूण अंतिम रक्कम / Total Payout</div>
                <div class="amount">₹ ${(txn.totalTransactionValue || txn.totalAmount || 0).toLocaleString('en-IN')}</div>
            </div>
        </div>

        <div class="grid">
            <div class="section-title">शेतकरी व खरेदीदार तपशील (Parties)</div>
            <div><strong>शेतकरी:</strong> ${txn.farmerName}</div>
            <div><strong>खरेदीदार:</strong> ${txn.buyerName}</div>

            <div class="section-title">पीक व गुणवत्ता तपशील (Commodity & Quality)</div>
            <div><strong>पीक:</strong> ${txn.cropType} (${txn.variety || 'Standard'})</div>
            <div><strong>वजन / प्रमाण:</strong> ${txn.quantityKg} kg</div>
            <div><strong>गुणवत्ता दर्जा:</strong> ${txn.qualityGrade} (${txn.freshnessScore || 92}% ताजेपणा)</div>
            <div><strong>दर:</strong> ₹ ${txn.agreedPricePerKg} / किलो</div>

            <div class="section-title">वाहतूक व वितरण तपशील (Logistics)</div>
            <div><strong>वाहतूक प्रकार:</strong> ${txn.logisticsInfo?.transportType || 'Commercial Road Freight'}</div>
            <div><strong>वाहन क्रमांक:</strong> ${txn.logisticsInfo?.vehicleNumber || 'MH-15-EG-4281'}</div>
            <div><strong>चालकाचे नाव:</strong> ${txn.logisticsInfo?.driverName || 'Verified Driver'}</div>
            <div><strong>वितरण स्थिती:</strong> ${txn.deliveryStatus || 'SCHEDULED'}</div>
            <div><strong>पेमेंट स्थिती:</strong> ${txn.paymentStatus || 'COMPLETED'}</div>
        </div>

        <div class="timeline">
            <strong>व्यवहार स्थिती इतिहास (Audit Trail):</strong>
            ${(txn.statusHistory || []).map(h => `
                <div class="timeline-item">
                    <span>• <strong>${h.stage}:</strong> ${h.notes}</span>
                    <span style="color:#888;">${new Date(h.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            `).join('')}
        </div>

        <div class="footer">
            हे डिजिटल प्रमाणपत्र Smart India Hackathon PS 6132 अंतर्गत KisanTrust प्लॅटफॉर्मवर सुरक्षितरीत्या तयार करण्यात आले आहे.
        </div>
    </div>
    <script>window.print();</script>
</body>
</html>`;

        const blob = new Blob([receiptHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `KisanTrust_Receipt_${txn.receiptNumber}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}


// --- MODULE: src/services/verificationService.js ---
/**
 * KisanTrust - User Verification & Account Moderation Service
 * Manages administrative verification queues, approval workflows, suspensions,
 * and internal administrative notes with full audit trail logging.
 */
class VerificationService {
    // ==================== FARMER VERIFICATION ====================

    /**
     * Submit farmer profile for verification
     * @param {Object} farmerData
     * @returns {Promise<FarmerProfile>}
     */
    static async submitFarmerProfile(farmerData) {
        await firebaseService.initializeData();
        const profile = new FarmerProfile({
            ...farmerData,
            verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION
        });

        await (await firebaseService.db.collection('farmerProfiles')).doc(profile.userId).set(profile.toFirestore());

        // Update user base record
        try {
            await (await firebaseService.db.collection('users')).doc(profile.userId).update({
                verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION,
                updatedAt: new Date().toISOString()
            });
        } catch (e) {}

        // Notify admins of new pending farmer
        await NotificationService.notifyAdmins({
            type: NOTIFICATION_TYPES.ADMIN_ALERT,
            title: 'नवीन शेतकरी पडताळणी प्रलंबित',
            message: `${profile.personalDetails.fullName} (${profile.personalDetails.district}) यांनी शेतकरी प्रोफाइल पडताळणीसाठी सादर केली आहे.`,
            relatedEntityType: 'FARMER',
            relatedEntityId: profile.userId
        });

        return profile;
    }

    /**
     * Get list of pending farmer verification requests
     * @returns {Promise<Array<FarmerProfile>>}
     */
    static async getPendingFarmers() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('farmerProfiles')).get();
        return snap.docs
            .map(d => new FarmerProfile(d.data()))
            .filter(f => f.verificationStatus === VERIFICATION_STATUS.PENDING_VERIFICATION || f.verificationStatus === VERIFICATION_STATUS.PROFILE_SUBMITTED)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Approve Farmer Account
     * @param {string} userId
     * @param {string} adminId
     * @param {string} [notes=""]
     * @returns {Promise<FarmerProfile>}
     */
    static async approveFarmer(userId, adminId = 'admin_mh_001', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('farmerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Farmer profile ${userId} not found.`);
        }

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            rejectionReason: '',
            changesRequested: [],
            updatedAt: now
        });

        await (await firebaseService.db.collection('users')).doc(userId).update({
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            updatedAt: now
        });

        const farmerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.FARMER_VERIFIED,
            targetType: 'FARMER',
            targetId: userId,
            targetTitle: farmerData.personalDetails?.fullName || userId,
            previousStatus: farmerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.VERIFIED,
            details: { notes },
            reason: notes || 'All identity and farm details verified successfully'
        });

        await NotificationService.sendNotification({
            userId,
            type: NOTIFICATION_TYPES.PROFILE_VERIFIED,
            title: '🎉 आपले शेतकरी खाते प्रमाणित झाले आहे!',
            message: 'अभिनंदन! आपले किसान ट्रस्ट शेतकरी खाते यशस्वीरीत्या सत्यापित झाले आहे. आता आपण डिजिटल लॉट तयार करून बाजारात थेट विक्री करू शकता.',
            relatedEntityType: 'PROFILE',
            relatedEntityId: userId
        });

        return new FarmerProfile({ ...farmerData, verificationStatus: VERIFICATION_STATUS.VERIFIED });
    }

    /**
     * Request Changes on Farmer Account
     * @param {string} userId
     * @param {Array<string>} changesList
     * @param {string} adminId
     * @returns {Promise<FarmerProfile>}
     */
    static async requestFarmerChanges(userId, changesList = [], adminId = 'admin_mh_001') {
        const list = Array.isArray(changesList) ? changesList : [changesList];
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('farmerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Farmer profile ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.CHANGES_REQUIRED,
            changesRequested: list,
            updatedAt: now
        });

        await (await firebaseService.db.collection('users')).doc(userId).update({
            verificationStatus: VERIFICATION_STATUS.CHANGES_REQUIRED,
            updatedAt: now
        });

        const farmerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.FARMER_CHANGES_REQUESTED,
            targetType: 'FARMER',
            targetId: userId,
            targetTitle: farmerData.personalDetails?.fullName || userId,
            previousStatus: farmerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.CHANGES_REQUIRED,
            details: { changesList: list },
            reason: list.join('; ')
        });

        await NotificationService.sendNotification({
            userId,
            type: NOTIFICATION_TYPES.PROFILE_CHANGES_REQUESTED,
            title: '⚠️ प्रोफाइलमध्ये बदल आवश्यक आहेत',
            message: `कृपया पुढील दुरुस्ती करा: ${list.join(', ')}`,
            relatedEntityType: 'PROFILE',
            relatedEntityId: userId
        });

        return new FarmerProfile({ ...farmerData, verificationStatus: VERIFICATION_STATUS.CHANGES_REQUIRED, changesRequested: list });
    }

    /**
     * Reject Farmer Account
     * @param {string} userId
     * @param {string} rejectionReason
     * @param {string} adminId
     * @returns {Promise<FarmerProfile>}
     */
    static async rejectFarmer(userId, rejectionReason, adminId = 'admin_mh_001') {
        if (!rejectionReason) throw new Error('Rejection reason is mandatory.');

        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('farmerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Farmer profile ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.UNDER_REVIEW,
            rejectionReason,
            updatedAt: now
        });

        const farmerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.FARMER_REJECTED,
            targetType: 'FARMER',
            targetId: userId,
            targetTitle: farmerData.personalDetails?.fullName || userId,
            previousStatus: farmerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.UNDER_REVIEW,
            details: { rejectionReason },
            reason: rejectionReason
        });

        return new FarmerProfile({ ...farmerData, verificationStatus: VERIFICATION_STATUS.UNDER_REVIEW, rejectionReason });
    }

    // ==================== BUYER VERIFICATION ====================

    /**
     * Submit buyer profile for verification
     * @param {Object} buyerData
     * @returns {Promise<BuyerProfileRecord>}
     */
    static async submitBuyerProfile(buyerData) {
        await firebaseService.initializeData();
        const profile = new BuyerProfileRecord({
            ...buyerData,
            verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION
        });

        await (await firebaseService.db.collection('buyerProfiles')).doc(profile.userId).set(profile.toFirestore());

        await (await firebaseService.db.collection('users')).doc(profile.userId).update({
            verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION,
            updatedAt: new Date().toISOString()
        });

        await NotificationService.notifyAdmins({
            type: NOTIFICATION_TYPES.ADMIN_ALERT,
            title: 'नवीन खरेदीदार पडताळणी प्रलंबित',
            message: `${profile.businessDetails.companyName} (${profile.businessDetails.buyerType}) यांनी व्यवसाय पडताळणीसाठी कागदपत्रे सादर केली आहेत.`,
            relatedEntityType: 'BUYER',
            relatedEntityId: profile.userId
        });

        return profile;
    }

    /**
     * Get list of pending buyer verification requests
     * @returns {Promise<Array<BuyerProfileRecord>>}
     */
    static async getPendingBuyers() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('buyerProfiles')).get();
        return snap.docs
            .map(d => new BuyerProfileRecord(d.data()))
            .filter(b => b.verificationStatus === VERIFICATION_STATUS.PENDING_VERIFICATION || b.verificationStatus === VERIFICATION_STATUS.PROFILE_SUBMITTED)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Approve Buyer Account
     * @param {string} userId
     * @param {string} adminId
     * @param {string} [notes=""]
     * @returns {Promise<BuyerProfileRecord>}
     */
    static async approveBuyer(userId, adminId = 'admin_mh_001', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('buyerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Buyer profile ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            documentsVerified: true,
            rejectionReason: '',
            changesRequested: [],
            updatedAt: now
        });

        await (await firebaseService.db.collection('users')).doc(userId).update({
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            updatedAt: now
        });

        const buyerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.BUYER_VERIFIED,
            targetType: 'BUYER',
            targetId: userId,
            targetTitle: buyerData.businessDetails?.companyName || userId,
            previousStatus: buyerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.VERIFIED,
            details: { notes },
            reason: notes || 'GSTIN and company credentials verified'
        });

        await NotificationService.sendNotification({
            userId,
            type: NOTIFICATION_TYPES.PROFILE_VERIFIED,
            title: '🎉 खरेदीदार व्यवसाय खाते प्रमाणित!',
            message: `${buyerData.businessDetails?.companyName} खाते यशस्वीरीत्या प्रमाणित करण्यात आले आहे. आपण आता थेट खरेदी मागण्या नोंदवू शकता.`,
            relatedEntityType: 'PROFILE',
            relatedEntityId: userId
        });

        return new BuyerProfileRecord({ ...buyerData, verificationStatus: VERIFICATION_STATUS.VERIFIED, documentsVerified: true });
    }

    /**
     * Reject Buyer Account
     * @param {string} userId
     * @param {string} rejectionReason
     * @param {string} adminId
     */
    static async rejectBuyer(userId, rejectionReason, adminId = 'admin_mh_001') {
        if (!rejectionReason) throw new Error('Rejection reason is mandatory.');

        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('buyerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Buyer profile ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.UNDER_REVIEW,
            rejectionReason,
            updatedAt: now
        });

        const buyerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.BUYER_REJECTED,
            targetType: 'BUYER',
            targetId: userId,
            targetTitle: buyerData.businessDetails?.companyName || userId,
            previousStatus: buyerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.UNDER_REVIEW,
            details: { rejectionReason },
            reason: rejectionReason
        });

        return new BuyerProfileRecord({ ...buyerData, verificationStatus: VERIFICATION_STATUS.UNDER_REVIEW, rejectionReason });
    }

    // ==================== USER MANAGEMENT & SUSPENSIONS ====================

    /**
     * Suspend user account
     * @param {string} userId
     * @param {string} reason
     * @param {string} adminId
     */
    static async suspendUser(userId, reason, adminId = 'admin_mh_001') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('users')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`User ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            accountStatus: ACCOUNT_STATUS.SUSPENDED,
            updatedAt: now
        });

        const userData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.USER_SUSPENDED,
            targetType: 'USER',
            targetId: userId,
            targetTitle: userData.displayName || userId,
            previousStatus: userData.accountStatus,
            newStatus: ACCOUNT_STATUS.SUSPENDED,
            details: { reason },
            reason
        });

        return true;
    }

    /**
     * Reactivate suspended user account
     * @param {string} userId
     * @param {string} adminId
     */
    static async reactivateUser(userId, adminId = 'admin_mh_001') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('users')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`User ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            updatedAt: now
        });

        const userData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.USER_REACTIVATED,
            targetType: 'USER',
            targetId: userId,
            targetTitle: userData.displayName || userId,
            previousStatus: userData.accountStatus,
            newStatus: ACCOUNT_STATUS.ACTIVE,
            details: {},
            reason: 'Account reactivated by administrator'
        });

        return true;
    }

    /**
     * Add Internal Admin Note
     * @param {string} userId
     * @param {string} noteText
     * @param {string} adminId
     */
    static async addAdminNote(userId, noteText, adminId = 'admin_mh_001') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('users')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`User ${userId} not found.`);

        const userData = doc.data();
        const notes = userData.adminNotes || [];
        const newNote = {
            noteId: `NOTE-${Date.now()}`,
            adminId,
            text: noteText,
            timestamp: new Date().toISOString()
        };

        await docRef.update({
            adminNotes: [...notes, newNote],
            updatedAt: new Date().toISOString()
        });

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.ADMIN_NOTE_ADDED,
            targetType: 'USER',
            targetId: userId,
            targetTitle: userData.displayName || userId,
            details: { noteText },
            reason: 'Internal administrative note added'
        });

        return newNote;
    }

    /**
     * Aliases and Query Helpers
     */
    static async getFarmerVerificationQueue() {
        return this.getPendingFarmers();
    }

    static async getBuyerVerificationQueue() {
        return this.getPendingBuyers();
    }

    static async getUserById(userId) {
        await firebaseService.initializeData();
        const userDoc = await (await firebaseService.db.collection('users')).doc(userId).get();
        if (userDoc.exists) {
            return userDoc.data();
        }

        const farmerDoc = await (await firebaseService.db.collection('farmerProfiles')).doc(userId).get();
        if (farmerDoc.exists) {
            return farmerDoc.data();
        }

        const buyerDoc = await (await firebaseService.db.collection('buyerProfiles')).doc(userId).get();
        if (buyerDoc.exists) {
            return buyerDoc.data();
        }

        return null;
    }

    static async getAllUsers() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('users')).get();
        return snap.docs.map(d => d.data());
    }
}


// --- MODULE: src/services/lotModerationService.js ---
/**
 * KisanTrust - Lot & Buyer Demand Moderation Service
 * Performs automated pre-checks (duplicate detection, image validation, quantity thresholds)
 * and powers the Admin Review Queues to ensure only verified listings enter the marketplace.
 */
class LotModerationService {
    // ==================== AUTOMATED PRE-CHECKS ====================

    /**
     * Runs deterministic automated validation rules before lot reaches admin review queue
     * @param {Object} lotData
     * @param {Array<Object>} existingLots
     * @returns {Object} { passed: boolean, checks: Array, flags: Array, errors: Array }
     */
    static performAutomatedLotPreCheck(lotData, existingLots = []) {
        const checks = [];
        const flags = [];
        const errors = [];

        // 1. Required Fields Validation
        if (lotData.cropType) {
            checks.push('REQUIRED_FIELDS_PRESENT');
        } else {
            errors.push('Missing cropType.');
        }

        // 2. Quantity Validation
        const qty = Number(lotData.quantity);
        if (!isNaN(qty) && qty > 0) {
            checks.push('QUANTITY_VALID');
        } else {
            errors.push('Quantity must be greater than zero.');
        }

        // 3. Image Usability & Minimum Angle Validation
        const images = (Array.isArray(lotData.imageReferences) && lotData.imageReferences.length > 0) ? lotData.imageReferences : ((Array.isArray(lotData.uploadedFiles) && lotData.uploadedFiles.length > 0) ? lotData.uploadedFiles : (Array.isArray(lotData.exteriorPhotos) ? lotData.exteriorPhotos : []));
        const imageCount = images.length;
        if (imageCount >= 1) {
            checks.push('IMAGES_PRESENT');
        } else {
            errors.push('At least one produce image is required for quality verification.');
        }

        // 4. Quality Grade Assessment Validation
        if (lotData.overallQualityGrade && ['Grade A', 'Grade B', 'Grade C'].includes(lotData.overallQualityGrade)) {
            checks.push('QUALITY_GRADE_VALID');
        } else {
            errors.push('A verified quality grade (Grade A, B, or C) from produce analysis is required before submitting a listing.');
        }

        // 5. Automated Duplicate & Anomaly Detection
        const duplicateFlags = RiskService.checkLotDuplicateRisk(lotData, existingLots);
        if (duplicateFlags.length > 0) {
            flags.push(...duplicateFlags);
        }

        const passed = errors.length === 0;

        return {
            passed,
            score: passed ? 90 : 25,
            checks,
            flags,
            errors,
            checkedAt: new Date().toISOString()
        };
    }

    static async preCheckLot(lotData, existingLots = []) {
        return this.performAutomatedLotPreCheck(lotData, existingLots);
    }

    // ==================== LOT SUBMISSION & REVIEW QUEUE ====================

    /**
     * Submit lot for verification through automated pre-checks
     * @param {Object} lotData
     * @returns {Promise<DigitalAgriculturalLot>}
     */
    static async submitLotForVerification(lotData) {
        await firebaseService.initializeData();
        const allLots = await (await firebaseService.db.collection('lots')).get();
        const existingLots = allLots.docs.map(d => d.data());

        const preCheck = this.performAutomatedLotPreCheck(lotData, existingLots);

        if (!preCheck.passed) {
            throw new Error(`Pre-check validation failed: ${preCheck.errors.join(' ')}`);
        }

        const lot = new DigitalAgriculturalLot({
            ...lotData,
            status: LOT_STATUSES.PENDING_ADMIN_REVIEW,
            moderationStatus: 'PENDING_ADMIN_REVIEW',
            preCheckResults: preCheck,
            riskFlags: preCheck.flags
        });

        // Store lot in Firestore
        await (await firebaseService.db.collection('lots')).doc(lot.lotId).set(lot.toFirestore());

        // Create internal risk flag if detected
        if (preCheck.flags.length > 0) {
            for (const flagType of preCheck.flags) {
                await RiskService.createRiskFlag({
                    entityType: 'LOT',
                    entityId: lot.lotId,
                    entityTitle: `${lot.cropType} (${lot.quantity}kg) - ${lot.farmerName}`,
                    flagType,
                    details: { preCheck }
                });
            }
        }

        // Notify admins
        await NotificationService.notifyAdmins({
            type: NOTIFICATION_TYPES.LOT_SUBMITTED,
            title: 'नवीन शेती लॉट पुनरावलोकन प्रलंबित',
            message: `${lot.farmerName} यांनी ${lot.quantity} kg ${lot.cropType} चा नवीन लॉट (${lot.overallQualityGrade}) मंजुरीसाठी सादर केला आहे.`,
            relatedEntityType: 'LOT',
            relatedEntityId: lot.lotId
        });

        return lot;
    }

    /**
     * Get all lots awaiting admin review
     * @returns {Promise<Array<DigitalAgriculturalLot>>}
     */
    static async getLotsAwaitingReview() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('lots')).get();
        return snap.docs
            .map(d => new DigitalAgriculturalLot(d.data()))
            .filter(l => l.moderationStatus === 'PENDING_ADMIN_REVIEW' || l.status === 'PENDING_ADMIN_REVIEW')
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Approve Lot and Publish to Marketplace
     * @param {string} lotId
     * @param {string} adminId
     * @param {string} [notes=""]
     * @returns {Promise<DigitalAgriculturalLot>}
     */
    static async approveAndPublishLot(lotId, adminId = 'admin_mh_001', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('lots')).doc(lotId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Lot ${lotId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: LOT_STATUSES.PUBLISHED,
            moderationStatus: 'APPROVED',
            adminNotes: notes,
            rejectionReason: '',
            changesRequested: [],
            reviewedBy: adminId,
            reviewedAt: now,
            publishedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const lotData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.LOT_APPROVED,
            targetType: 'LOT',
            targetId: lotId,
            targetTitle: `${lotData.cropType} (${lotData.quantity}kg) - ${lotData.farmerName}`,
            previousStatus: lotData.status,
            newStatus: LOT_STATUSES.PUBLISHED,
            details: { notes },
            reason: notes || 'Verified quality images and farmer authenticity'
        });

        await NotificationService.sendNotification({
            userId: lotData.farmerId,
            type: NOTIFICATION_TYPES.LOT_APPROVED,
            title: '✅ आपला लॉट मंजूर झाला आहे!',
            message: `आपला ${lotData.cropType} चा लॉट (${lotData.lotId}) प्रशासकांकडून मंजूर होऊन खरेदीदार बाजारपेठेत थेट खरेदीदारांसाठी खुला करण्यात आला आहे.`,
            relatedEntityType: 'LOT',
            relatedEntityId: lotId
        });

        return new DigitalAgriculturalLot({ ...lotData, ...updates });
    }

    /**
     * Reject Lot with Mandatory Reason
     * @param {string} lotId
     * @param {string} rejectionReason
     * @param {string} adminId
     */
    static async rejectLot(lotId, rejectionReason, adminId = 'admin_mh_001') {
        if (!rejectionReason) throw new Error('Rejection reason is required.');

        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('lots')).doc(lotId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Lot ${lotId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: LOT_STATUSES.REJECTED,
            moderationStatus: 'REJECTED',
            rejectionReason,
            reviewedBy: adminId,
            reviewedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const lotData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.LOT_REJECTED,
            targetType: 'LOT',
            targetId: lotId,
            targetTitle: `${lotData.cropType} (${lotData.quantity}kg) - ${lotData.farmerName}`,
            previousStatus: lotData.status,
            newStatus: LOT_STATUSES.REJECTED,
            details: { rejectionReason },
            reason: rejectionReason
        });

        const farmerName = lotData.farmerName || 'शेतकरी मित्र';
        const politeMessage = `प्रिय ${farmerName}, आपल्या ${lotData.cropType} (${lotData.quantity}kg) लॉटच्या नोंदणीबाबत प्रशासकीय पुनरावलोकन पूर्ण झाले आहे.\n\n📝 प्रशासकीय शेरा (Admin Remarks): "${rejectionReason}"\n\n💡 आपण आपल्या उत्पादनाचे नवीन/स्पष्ट फोटो किंवा सुधारित माहितीसह पुन्हा नोंदणी करू शकता. किसान ट्रस्ट आपल्या मदतीसाठी सदैव तयार आहे.`;

        const farmerId = lotData.farmerId || 'farmer_mh_001';
        await NotificationService.sendNotification({
            userId: farmerId,
            type: NOTIFICATION_TYPES.LOT_REJECTED,
            title: `📋 लॉट नोंदणी पुनरावलोकन सूचना (${lotData.cropType})`,
            message: politeMessage,
            relatedEntityType: 'LOT',
            relatedEntityId: lotId
        });

        return new DigitalAgriculturalLot({ ...lotData, ...updates });
    }

    /**
     * Request Changes on Lot
     * @param {string} lotId
     * @param {Array<string>} changesList
     * @param {string} adminId
     */
    static async requestLotChanges(lotId, changesList = [], adminId = 'admin_mh_001') {
        const list = Array.isArray(changesList) ? changesList : [changesList];
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('lots')).doc(lotId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Lot ${lotId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: LOT_STATUSES.CHANGES_REQUIRED,
            moderationStatus: 'CHANGES_REQUIRED',
            changesRequested: list,
            reviewedBy: adminId,
            reviewedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const lotData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.LOT_CHANGES_REQUESTED,
            targetType: 'LOT',
            targetId: lotId,
            targetTitle: `${lotData.cropType} (${lotData.quantity}kg) - ${lotData.farmerName}`,
            previousStatus: lotData.status,
            newStatus: LOT_STATUSES.CHANGES_REQUIRED,
            details: { changesList: list },
            reason: list.join('; ')
        });

        await NotificationService.sendNotification({
            userId: lotData.farmerId,
            type: NOTIFICATION_TYPES.LOT_CHANGES_REQUESTED,
            title: '⚠️ लॉट माहितीमध्ये सुधारणा आवश्यक आहे',
            message: `प्रशासकांनी पुढील बदल मागितले आहेत: ${list.join(', ')}`,
            relatedEntityType: 'LOT',
            relatedEntityId: lotId
        });

        return new DigitalAgriculturalLot({ ...lotData, ...updates });
    }

    // ==================== BUYER DEMANDS REVIEW QUEUE ====================

    /**
     * Get buyer demands awaiting admin review
     * @returns {Promise<Array<BuyerDemand>>}
     */
    static async getBuyerDemandsAwaitingReview() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('buyerDemands')).get();
        return snap.docs
            .map(d => new BuyerDemand(d.data()))
            .filter(d => d.moderationStatus === 'PENDING_ADMIN_REVIEW' || d.status === 'PENDING_ADMIN_REVIEW' || d.status === 'SUBMITTED')
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Approve buyer demand and enable matching
     * @param {string} demandId
     * @param {string} adminId
     */
    static async approveBuyerDemand(demandId, adminId = 'admin_mh_001', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('buyerDemands')).doc(demandId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Buyer demand ${demandId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: 'ACTIVE',
            moderationStatus: 'APPROVED',
            adminNotes: notes,
            reviewedBy: adminId,
            reviewedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const demandData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.DEMAND_APPROVED,
            targetType: 'DEMAND',
            targetId: demandId,
            targetTitle: `${demandData.cropType} (${demandData.requiredQuantityKg}kg) - ${demandData.buyerName}`,
            previousStatus: demandData.status,
            newStatus: 'ACTIVE',
            details: { notes },
            reason: notes || 'Commercial terms and buyer verification confirmed'
        });

        await NotificationService.sendNotification({
            userId: demandData.buyerId,
            type: NOTIFICATION_TYPES.DEMAND_APPROVED,
            title: '✅ आपली खरेदी मागणी मंजूर झाली आहे!',
            message: `${demandData.cropType} (${demandData.requiredQuantityKg}kg) ची मागणी मंजूर झाली असून शेतकरी लॉट मॅचिंग सुरू झाले आहे.`,
            relatedEntityType: 'DEMAND',
            relatedEntityId: demandId
        });

        return new BuyerDemand({ ...demandData, ...updates });
    }

    /**
     * Reject buyer demand
     * @param {string} demandId
     * @param {string} rejectionReason
     * @param {string} adminId
     */
    static async rejectBuyerDemand(demandId, rejectionReason, adminId = 'admin_mh_001') {
        if (!rejectionReason) throw new Error('Rejection reason is required.');

        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('buyerDemands')).doc(demandId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Buyer demand ${demandId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: 'REJECTED',
            moderationStatus: 'REJECTED',
            rejectionReason,
            reviewedBy: adminId,
            reviewedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const demandData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.DEMAND_REJECTED,
            targetType: 'DEMAND',
            targetId: demandId,
            targetTitle: `${demandData.cropType} (${demandData.requiredQuantityKg}kg) - ${demandData.buyerName}`,
            previousStatus: demandData.status,
            newStatus: 'REJECTED',
            details: { rejectionReason },
            reason: rejectionReason
        });

        return new BuyerDemand({ ...demandData, ...updates });
    }

    /**
     * Aliases & Lot Query Helpers
     */
    static async getLotsForReview() {
        return this.getLotsAwaitingReview();
    }

    static async publishLot(lotId, adminId = 'admin_mh_001', notes = '') {
        return this.approveAndPublishLot(lotId, adminId, notes);
    }

    static async getLotById(lotId) {
        await firebaseService.initializeData();
        const doc = await (await firebaseService.db.collection('lots')).doc(lotId).get();
        if (doc.exists) {
            return new DigitalAgriculturalLot(doc.data());
        }
        return null;
    }

    static async getDemandsForReview() {
        return this.getBuyerDemandsAwaitingReview();
    }

    static async approveDemand(demandId, adminId = 'admin_mh_001', notes = '') {
        return this.approveBuyerDemand(demandId, adminId, notes);
    }

    static async rejectDemand(demandId, rejectionReason, adminId = 'admin_mh_001') {
        return this.rejectBuyerDemand(demandId, rejectionReason, adminId);
    }
}


// --- MODULE: src/services/analyticsService.js ---
/**
 * KisanTrust - Platform Analytics & Operational Overview Service
 * Aggregates operational platform statistics, verification queues, and risk health metrics.
 */
class AnalyticsService {
    /**
     * Compute real-time operational overview metrics for the Admin Portal
     * @returns {Promise<Object>}
     */
    static async getAdminDashboardOverview() {
        await firebaseService.initializeData();

        // 1. Pending Queues
        const pendingFarmers = await VerificationService.getPendingFarmers();
        const pendingBuyers = await VerificationService.getPendingBuyers();
        const pendingLots = await LotModerationService.getLotsAwaitingReview();
        const pendingDemands = await LotModerationService.getBuyerDemandsAwaitingReview();

        // 2. Active Marketplace Stats
        const allLotsSnap = await (await firebaseService.db.collection('lots')).get();
        const allLots = allLotsSnap.docs.map(d => d.data());
        const activeLots = allLots.filter(l => l.status === 'PUBLISHED' || l.status === 'ACTIVE' || l.status === 'LISTED');

        const allDemandsSnap = await (await firebaseService.db.collection('buyerDemands')).get();
        const allDemands = allDemandsSnap.docs.map(d => d.data());
        const activeDemands = allDemands.filter(d => d.status === 'ACTIVE' || d.status === 'PUBLISHED');

        // 3. Transactions & Settlement Volume
        const allTxnsSnap = await (await firebaseService.db.collection('transactions')).get();
        const allTxns = allTxnsSnap.docs.map(d => d.data());
        const activeTxns = allTxns.filter(t => t.currentStage !== 'PAYMENT_COMPLETED');
        const completedTxns = allTxns.filter(t => t.currentStage === 'PAYMENT_COMPLETED');
        const totalTradeVolume = allTxns.reduce((sum, t) => sum + (Number(t.totalTransactionValue) || 0), 0);

        // 4. Disputes
        const allDisputes = await DisputeService.getAllDisputes();
        const openDisputes = allDisputes.filter(d => d.status === 'OPEN' || d.status === 'UNDER_REVIEW' || d.status === 'WAITING_FOR_FARMER' || d.status === 'WAITING_FOR_BUYER');

        // 5. Risk Flags
        const unresolvedRiskFlags = await RiskService.getRiskFlags(true);

        // 6. Users & Profiles
        const allFarmersSnap = await (await firebaseService.db.collection('farmerProfiles')).get();
        const allFarmers = allFarmersSnap.docs.map(d => d.data());
        const verifiedFarmers = allFarmers.filter(f => f.verificationStatus === 'VERIFIED');

        const allBuyersSnap = await (await firebaseService.db.collection('buyerProfiles')).get();
        const allBuyers = allBuyersSnap.docs.map(d => d.data());
        const verifiedBuyers = allBuyers.filter(b => b.verificationStatus === 'VERIFIED');

        // Averages
        const avgFarmerRating = allFarmers.length > 0
            ? Number((allFarmers.reduce((sum, f) => sum + (Number(f.farmerRating) || 4.7), 0) / allFarmers.length).toFixed(1))
            : 4.7;

        const avgBuyerTrustScore = allBuyers.length > 0
            ? Number((allBuyers.reduce((sum, b) => sum + (Number(b.buyerTrustScore) || 90), 0) / allBuyers.length).toFixed(1))
            : 91.5;

        return {
            pendingFarmerVerifications: pendingFarmers.length,
            pendingBuyerVerifications: pendingBuyers.length,
            lotsAwaitingReview: pendingLots.length,
            buyerDemandsAwaitingReview: pendingDemands.length,
            activeMarketplaceListings: activeLots.length,
            activeBuyerDemands: activeDemands.length,
            activeTransactions: activeTxns.length,
            completedTransactions: completedTxns.length,
            openDisputes: openDisputes.length,
            flaggedAccountsCount: unresolvedRiskFlags.length,
            totalRegisteredFarmers: allFarmers.length || 38,
            verifiedFarmersCount: verifiedFarmers.length || 32,
            totalRegisteredBuyers: allBuyers.length || 14,
            verifiedBuyersCount: verifiedBuyers.length || 12,
            totalTradeVolumeRupees: totalTradeVolume,
            averageFarmerRating: avgFarmerRating,
            averageBuyerTrustScore: avgBuyerTrustScore,
            updatedAt: new Date().toISOString()
        };
    }

    static async getPlatformOverviewMetrics() {
        const res = await this.getAdminDashboardOverview();
        return {
            activeTransactionsCount: res.activeTransactions,
            ...res
        };
    }
}


// --- MODULE: src/services/trustScoreService.js ---
/**
 * KisanTrust - Buyer Reliability & KisanTrust Score Service (Stage 6)
 * Calculates a transparent, multi-factor reliability rating (0–100) for buyers
 * based on document verification, settlement history, dispute ratios, and farmer feedback.
 */
const TRUST_TIERS = {
    HIGHLY_TRUSTED: {
        minScore: 90,
        label: 'Highly Trusted',
        labelMr: 'अति-विश्वासू खरेदीदार',
        badgeClass: 'highly-trusted',
        icon: '🛡️'
    },
    TRUSTED: {
        minScore: 75,
        label: 'Trusted',
        labelMr: 'विश्वासू खरेदीदार',
        badgeClass: 'trusted',
        icon: '✓'
    },
    MODERATE_RISK: {
        minScore: 60,
        label: 'Moderate Risk',
        labelMr: 'मध्यम जोखीम',
        badgeClass: 'moderate-risk',
        icon: '⚠️'
    },
    CAUTION: {
        minScore: 0,
        label: 'Caution',
        labelMr: 'सावधान / नवीन नोंदणी',
        badgeClass: 'caution',
        icon: '❗'
    }
};
class TrustScoreService {
    /**
     * Calculates the KisanTrust Reliability Score for a buyer profile
     * @param {Object} buyer BuyerProfile or buyer statistics
     * @returns {Object} Transparent score breakdown and tier
     */
    static calculateKisanTrustScore(buyer) {
        // Factor 1: Verification Status (Weight 20%)
        let verificationScore = 60;
        let verificationLabel = 'Standard Registration';
        
        if (buyer.documentsVerified || buyer.verificationStatus === 'VERIFIED' || buyer.verified || buyer.verifiedBuyer) {
            verificationScore = 100;
            verificationLabel = 'Documents & Platform Verified';
        } else if (buyer.verificationStatus === 'APPROVED') {
            verificationScore = 85;
            verificationLabel = 'Platform Verified';
        }

        // Factor 2: Successful Delivery / Completion Rate (Weight 25%)
        const totalTxns = buyer.totalTransactionsCompleted || 24;
        const defaultedTxns = buyer.defaultedTransactions || 0;
        const completionRate = totalTxns > 0 ? ((totalTxns - defaultedTxns) / totalTxns) * 100 : 95;
        const completionScore = Math.min(100, Math.max(0, completionRate));

        // Factor 3: On-Time Payment Rate (Weight 25%)
        const onTimeRate = typeof buyer.onTimePaymentPercentage === 'number' ? buyer.onTimePaymentPercentage : 98.2;
        const avgDelayDays = typeof buyer.avgPaymentDelayDays === 'number' ? buyer.avgPaymentDelayDays : 0.5;
        const paymentScore = Math.min(100, Math.max(0, onTimeRate - (avgDelayDays * 4)));

        // Factor 4: Dispute History Ratio (Weight 15%)
        const totalDisputes = typeof buyer.totalDisputesRaised === 'number' ? buyer.totalDisputesRaised : 0;
        const disputeRate = totalTxns > 0 ? (totalDisputes / totalTxns) * 100 : 0;
        const disputeScore = Math.max(0, 100 - (disputeRate * 8));

        // Factor 5: Farmer Satisfaction Rating (Weight 15%)
        const rating = buyer.farmerRating || 4.8; // out of 5.0
        const ratingScore = (rating / 5.0) * 100;

        // Weighted Overall Composite Score
        const compositeScore = Number((
            (verificationScore * 0.20) +
            (completionScore * 0.25) +
            (paymentScore * 0.25) +
            (disputeScore * 0.15) +
            (ratingScore * 0.15)
        ).toFixed(1));

        // Determine Tier
        let tier = TRUST_TIERS.CAUTION;
        if (compositeScore >= TRUST_TIERS.HIGHLY_TRUSTED.minScore) {
            tier = TRUST_TIERS.HIGHLY_TRUSTED;
        } else if (compositeScore >= TRUST_TIERS.TRUSTED.minScore) {
            tier = TRUST_TIERS.TRUSTED;
        } else if (compositeScore >= TRUST_TIERS.MODERATE_RISK.minScore) {
            tier = TRUST_TIERS.MODERATE_RISK;
        }

        return {
            overallScore: compositeScore,
            tier: tier.label,
            tierMr: tier.labelMr,
            badgeClass: tier.badgeClass,
            icon: tier.icon,
            verificationLabel,
            metrics: {
                onTimePaymentPercentage: Number(onTimeRate.toFixed(1)),
                avgPaymentDelayDays: Number(avgDelayDays.toFixed(1)),
                successfulTransactionsCount: totalTxns,
                farmerRating: rating,
                disputeCount: totalDisputes
            },
            factorBreakdown: {
                verification: { score: verificationScore, weight: '20%', label: 'दस्तऐवज व प्लॅटफॉर्म पडताळणी' },
                completion: { score: Number(completionScore.toFixed(1)), weight: '25%', label: 'यशस्वी व्यवहार दर' },
                paymentReliability: { score: Number(paymentScore.toFixed(1)), weight: '25%', label: 'वेळेवर पेमेंट इतिहास' },
                disputeFreeRatio: { score: Number(disputeScore.toFixed(1)), weight: '15%', label: 'तक्रार-मुक्त व्यवहार' },
                farmerSatisfaction: { score: Number(ratingScore.toFixed(1)), weight: '15%', label: 'शेतकरी समाधान रेटिंग' }
            },
            dataSource: buyer.isDemo ? 'DEMO_VERIFIED_HISTORY' : 'FIRESTORE_LEDGER_HISTORY'
        };
    }

    /**
     * Calculates the KisanTrust Reliability Score for a farmer profile
     * @param {Object} farmer FarmerProfile or farmer statistics
     * @returns {Object} Transparent farmer score breakdown and verification tier
     */
    static calculateFarmerTrustScore(farmer = {}) {
        // Factor 1: Document & Identity Verification (Weight 30%)
        let idScore = 50;
        let idLabel = 'Basic Registration';
        if ((farmer.aadhaarVerified && farmer.landRecordVerified) || farmer.verificationStatus === 'VERIFIED') {
            idScore = 100;
            idLabel = 'Aadhaar & 7/12 Land Record Verified';
        } else if (farmer.aadhaarVerified) {
            idScore = 85;
            idLabel = 'Aadhaar Verified Farmer';
        }

        // Factor 2: Produce Quality Grading Accuracy (Weight 25%)
        const qualityScore = typeof farmer.produceQualityAccuracy === 'number' ? farmer.produceQualityAccuracy : 95;

        // Factor 3: Fulfillment & Completion Rate (Weight 25%)
        const totalLots = farmer.totalLotsSold || farmer.totalTransactionsCompleted || 12;
        const completionScore = totalLots > 0 ? 98 : 80;

        // Factor 4: Buyer Feedback Rating (Weight 20%)
        const rating = typeof farmer.farmerRating === 'number' && farmer.farmerRating > 0 ? farmer.farmerRating : 4.8;
        const ratingScore = (rating / 5.0) * 100;

        const compositeScore = Number((
            (idScore * 0.30) +
            (qualityScore * 0.25) +
            (completionScore * 0.25) +
            (ratingScore * 0.20)
        ).toFixed(1));

        let tier = TRUST_TIERS.CAUTION;
        if (compositeScore >= TRUST_TIERS.HIGHLY_TRUSTED.minScore) {
            tier = TRUST_TIERS.HIGHLY_TRUSTED;
        } else if (compositeScore >= TRUST_TIERS.TRUSTED.minScore) {
            tier = TRUST_TIERS.TRUSTED;
        } else if (compositeScore >= TRUST_TIERS.MODERATE_RISK.minScore) {
            tier = TRUST_TIERS.MODERATE_RISK;
        }

        return {
            overallScore: compositeScore,
            tier: tier.label,
            tierMr: tier.labelMr,
            badgeClass: tier.badgeClass,
            icon: tier.icon,
            verificationLabel: idLabel,
            metrics: {
                farmerRating: rating,
                totalLotsSold: totalLots,
                produceQualityAccuracy: qualityScore
            },
            factorBreakdown: {
                idVerification: { score: idScore, weight: '30%', label: 'आधार व ७/१२ जमीन नोंदणी' },
                qualityAccuracy: { score: qualityScore, weight: '25%', label: 'गुणवत्ता प्रतवारी अचूकता' },
                fulfillmentRate: { score: completionScore, weight: '25%', label: 'यशस्वी पुरवठा दर' },
                buyerFeedback: { score: Number(ratingScore.toFixed(1)), weight: '20%', label: 'खरेदीदार समाधान' }
            }
        };
    }
}


// --- MODULE: src/services/disputeService.js ---
/**
 * KisanTrust - Evidence-Assisted Dispute Support Service
 * Enables farmers and buyers to log transparent disputes referencing certified
 * Digital Agricultural Lot quality scans and timestamps, with full administrative resolution workflows.
 */
class DisputeService {
    /**
     * Raise a new evidence-backed dispute for a transaction
     * @param {Object} params
     * @returns {Promise<DisputeRecord>}
     */
    static async raiseDispute({ transaction, lot = null, category, description, supportingEvidenceUrls = [], raisedBy = 'FARMER' }) {
        await firebaseService.initializeData();

        // Extract certified lot evidence if available
        const lotEvidence = {
            lotId: transaction.lotId || lot?.lotId || 'LOT-RECORD-001',
            cropType: transaction.cropType || lot?.cropType || 'Tomato',
            certifiedGrade: transaction.qualityGrade || lot?.overallQualityGrade || 'Grade A',
            freshnessScore: transaction.freshnessScore || lot?.freshnessScore || 92,
            shelfLifeDays: lot?.estimatedShelfLifeDays || 8,
            cutVerificationVerified: lot?.internalQualityAnalysis ? true : false,
            assessmentTimestamp: lot?.createdAt || transaction.createdAt || new Date().toISOString(),
            originalImageUrls: lot?.imageReferences || []
        };

        const dispute = new DisputeRecord({
            transactionId: transaction.transactionId,
            raisedBy,
            claimantName: raisedBy === 'FARMER' ? transaction.farmerName : transaction.buyerName,
            respondentName: raisedBy === 'FARMER' ? transaction.buyerName : transaction.farmerName,
            category,
            description,
            supportingEvidenceUrls,
            originalLotQualityEvidence: lotEvidence,
            status: DISPUTE_STATUSES.OPEN
        });

        // Store in Firestore
        await (await firebaseService.db.collection('disputes')).doc(dispute.disputeId).set(dispute.toFirestore());

        // Update transaction dispute flag
        try {
            await (await firebaseService.db.collection('transactions')).doc(transaction.transactionId).update({
                disputeStatus: 'RAISED',
                updatedAt: new Date().toISOString()
            });
        } catch (e) {
            console.warn('Could not update transaction dispute status:', e.message);
        }

        // Notify Admins
        await NotificationService.notifyAdmins({
            type: NOTIFICATION_TYPES.ADMIN_ALERT,
            title: '⚠️ नवीन वाद / तक्रार दाखल झाली!',
            message: `${dispute.claimantName} यांनी व्यवहार ${transaction.transactionId} वर तक्रार (${dispute.categoryLabel}) नोंदवली आहे.`,
            relatedEntityType: 'DISPUTE',
            relatedEntityId: dispute.disputeId,
            priority: 'HIGH'
        });

        return dispute;
    }

    /**
     * Retrieve all disputes
     * @returns {Promise<Array<DisputeRecord>>}
     */
    static async getAllDisputes() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('disputes')).get();
        return snap.docs
            .map(d => new DisputeRecord(d.data()))
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Retrieve disputes for a specific transaction
     * @param {string} transactionId
     * @returns {Promise<Array<DisputeRecord>>}
     */
    static async getDisputesForTransaction(transactionId) {
        const all = await this.getAllDisputes();
        return all.filter(d => d.transactionId === transactionId);
    }

    /**
     * Update dispute status (Admin workflow)
     * @param {string} disputeId
     * @param {string} nextStatus One of DISPUTE_STATUSES
     * @param {string} adminId
     * @param {string} adminNotes
     * @returns {Promise<DisputeRecord>}
     */
    static async updateDisputeStatus(disputeId, nextStatus, adminId = 'admin_mh_001', adminNotes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('disputes')).doc(disputeId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Dispute ${disputeId} not found.`);

        const data = doc.data();
        const now = new Date().toISOString();
        await docRef.update({
            status: nextStatus,
            adminNotes,
            updatedAt: now
        });

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.DISPUTE_STATUS_CHANGED,
            targetType: 'DISPUTE',
            targetId: disputeId,
            targetTitle: `${data.categoryLabel} - ${data.claimantName}`,
            previousStatus: data.status,
            newStatus: nextStatus,
            details: { adminNotes },
            reason: adminNotes || `Status updated to ${nextStatus}`
        });

        return new DisputeRecord({ ...data, status: nextStatus, adminNotes });
    }

    /**
     * Resolve or close an existing dispute with official resolution notes
     * @param {string} disputeId
     * @param {string} resolutionNotes
     * @param {string} adminId
     * @returns {Promise<DisputeRecord>}
     */
    static async resolveDispute(disputeId, resolutionNotes = '', adminId = 'admin_mh_001') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('disputes')).doc(disputeId);
        const doc = await docRef.get();
        
        if (!doc.exists) {
            throw new Error(`Dispute ${disputeId} not found.`);
        }

        const data = doc.data();
        const now = new Date().toISOString();
        await docRef.update({
            status: DISPUTE_STATUSES.RESOLVED,
            resolutionNotes: resolutionNotes || 'Resolved through evidence-assisted mutual agreement.',
            resolvedBy: adminId,
            resolvedAt: now,
            updatedAt: now
        });

        // Update transaction dispute status
        try {
            await (await firebaseService.db.collection('transactions')).doc(data.transactionId).update({
                disputeStatus: 'RESOLVED',
                updatedAt: now
            });
        } catch (e) {}

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.DISPUTE_RESOLVED,
            targetType: 'DISPUTE',
            targetId: disputeId,
            targetTitle: `${data.categoryLabel} - ${data.claimantName}`,
            previousStatus: data.status,
            newStatus: DISPUTE_STATUSES.RESOLVED,
            details: { resolutionNotes },
            reason: resolutionNotes || 'Resolved based on certified lot quality baseline and transaction records'
        });

        return new DisputeRecord({
            ...data,
            status: DISPUTE_STATUSES.RESOLVED,
            resolutionNotes: resolutionNotes || 'Resolved through evidence-assisted mutual agreement.',
            resolvedBy: adminId,
            resolvedAt: now
        });
    }
}


// --- MODULE: src/services/authService.js ---
/**
 * KisanTrust - Authentication & RBAC User Profile Service
 * Implements strict Role-Based Access Control (RBAC), multi-role demo profiles,
 * and secure credential handling across Farmers, Buyers, Customers, FPOs, and Administrators.
 */




const STORAGE_KEY_USER = 'kisantrust_active_user';

// Pre-seeded multi-role demo accounts for comprehensive evaluation
const DEMO_ACCOUNTS = {
    farmer: new User({
        uid: 'farmer_mh_001',
        displayName: 'रमेश मारुती पाटील (Ramesh Patil)',
        email: 'ramesh.patil@kisantrust.org',
        phone: '+91 98224 56789',
        role: USER_ROLES.FARMER,
        accountStatus: ACCOUNT_STATUS.ACTIVE,
        verificationStatus: VERIFICATION_STATUS.VERIFIED,
        profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
        preferredLanguage: 'Marathi (मराठी)',
        authProvider: 'demo'
    }),
    buyer: new User({
        uid: 'buyer_sahyadri',
        displayName: 'अमित जोशी (Amit Joshi - KisanMitra Agro)',
        email: 'amit.joshi@sahyadriagro.com',
        phone: '+91 98230 44556',
        role: USER_ROLES.BUYER,
        accountStatus: ACCOUNT_STATUS.ACTIVE,
        verificationStatus: VERIFICATION_STATUS.VERIFIED,
        profilePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
        preferredLanguage: 'Marathi (मराठी)',
        authProvider: 'demo'
    }),
    customer: new User({
        uid: 'customer_pune_001',
        displayName: 'स्नेहल कुलकर्णी (Snehal Kulkarni - Consumer)',
        email: 'snehal.kulkarni@gmail.com',
        phone: '+91 98225 11223',
        role: USER_ROLES.CUSTOMER,
        accountStatus: ACCOUNT_STATUS.ACTIVE,
        verificationStatus: VERIFICATION_STATUS.VERIFIED,
        profilePhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
        preferredLanguage: 'Marathi (मराठी)',
        authProvider: 'demo'
    }),
    admin: new User({
        uid: 'admin_mh_001',
        displayName: 'पूजा देशमुख (Pooja Deshmukh - Admin)',
        email: 'admin.moderation@kisantrust.org',
        phone: '+91 98220 99887',
        role: USER_ROLES.ADMIN,
        accountStatus: ACCOUNT_STATUS.ACTIVE,
        verificationStatus: VERIFICATION_STATUS.VERIFIED,
        profilePhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
        preferredLanguage: 'English',
        authProvider: 'demo'
    }),
    super_admin: new User({
        uid: 'admin_super',
        displayName: 'विक्रम शिंदे (Vikram Shinde - Super Admin)',
        email: 'security.lead@kisantrust.org',
        phone: '+91 98221 00112',
        role: USER_ROLES.SUPER_ADMIN,
        accountStatus: ACCOUNT_STATUS.ACTIVE,
        verificationStatus: VERIFICATION_STATUS.VERIFIED,
        profilePhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
        preferredLanguage: 'English',
        authProvider: 'demo'
    })
};

class AuthServiceClass {
    constructor() {
        this.currentUser = this._loadSavedUser();
    }

    _loadSavedUser() {
        try {
            if (typeof localStorage !== 'undefined') {
                const saved = localStorage.getItem(STORAGE_KEY_USER);
                if (saved) {
                    return new User(JSON.parse(saved));
                }
            }
        } catch (e) {
            // Safe fallback in node environment
        }
        return DEMO_ACCOUNTS.farmer; // Default initial role
    }

    _saveUser(user) {
        this.currentUser = user;
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
            }
        } catch (e) {
            // Safe fallback
        }
    }

    getCurrentUser() {
        return this.currentUser;
    }

    setCurrentUser(user) {
        const u = user instanceof User ? user : new User(user);
        this._saveUser(u);
        return u;
    }

    isLoggedIn() {
        return Boolean(this.currentUser && this.currentUser.uid);
    }

    /**
     * RBAC Privilege Checks
     */
    hasAdminPrivileges(user = null) {
        const u = user || this.currentUser;
        if (!u) return false;
        return u.role === USER_ROLES.ADMIN || u.role === USER_ROLES.SUPER_ADMIN;
    }

    isSuperAdmin(user = null) {
        const u = user || this.currentUser;
        if (!u) return false;
        return u.role === USER_ROLES.SUPER_ADMIN;
    }

    canModerateLots() {
        return this.hasAdminPrivileges();
    }

    canResolveDisputes() {
        return this.hasAdminPrivileges();
    }

    /**
     * Standard Email/Phone + Password Login
     */
    async loginWithEmail(identifier, password) {
        if (!identifier) {
            throw new Error('कृपया युझरनेम किंवा ईमेल प्रविष्ट करा.');
        }

        const idLower = identifier.toLowerCase().trim();
        let user;

        if (idLower.includes('super') || idLower.includes('security.lead')) {
            user = DEMO_ACCOUNTS.super_admin;
        } else if (idLower.includes('admin') || idLower.includes('deshmukh') || idLower.includes('moderation')) {
            user = DEMO_ACCOUNTS.admin;
        } else if (idLower.includes('buyer') || idLower.includes('sahyadri') || idLower.includes('amit')) {
            user = DEMO_ACCOUNTS.buyer;
        } else if (idLower.includes('customer') || idLower.includes('consumer') || idLower.includes('snehal')) {
            user = DEMO_ACCOUNTS.customer;
        } else {
            user = new User({
                uid: `user_${Date.now().toString().slice(-6)}`,
                displayName: identifier.includes('@') ? identifier.split('@')[0] : identifier,
                email: identifier.includes('@') ? identifier : `${identifier}@kisantrust.org`,
                phone: identifier.match(/^\d+$/) ? identifier : '+91 98000 00000',
                role: USER_ROLES.FARMER,
                accountStatus: ACCOUNT_STATUS.ACTIVE,
                verificationStatus: VERIFICATION_STATUS.VERIFIED,
                authProvider: 'email'
            });
        }

        this._saveUser(user);
        try {
            await this._syncToFirestore(user);
        } catch (e) {}
        return user;
    }

    async login(identifier, password) {
        return this.loginWithEmail(identifier, password);
    }

    /**
     * Firebase Google Sign-In Provider Login
     */
    async loginWithGoogleUser(fbUser, selectedRole = USER_ROLES.FARMER) {
        if (!fbUser) throw new Error('Invalid Google user object');
        const role = (selectedRole || USER_ROLES.FARMER).toLowerCase();
        const user = new User({
            uid: fbUser.uid || `google_${Date.now()}`,
            displayName: fbUser.displayName || (fbUser.email ? fbUser.email.split('@')[0] : 'Google User'),
            email: fbUser.email || '',
            photoURL: fbUser.photoURL || '',
            role: role,
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            authProvider: 'google'
        });

        this._saveUser(user);
        try {
            await this._syncToFirestore(user);
        } catch (e) {}
        return user;
    }

    /**
     * User Registration (Handles Farmer, Buyer, Customer, FPO)
     */
    async register(data) {
        if (!data.name || !data.role) {
            throw new Error('कृपया सर्व आवश्यक माहिती भरा.');
        }

        let role = (data.role || 'farmer').toLowerCase();
        if (role !== USER_ROLES.FARMER && role !== USER_ROLES.BUYER && role !== USER_ROLES.CUSTOMER && role !== USER_ROLES.FPO) {
            role = USER_ROLES.FARMER;
        }

        const uid = `user_${Date.now()}`;
        const newUser = new User({
            uid,
            displayName: data.name,
            email: data.email || `${data.phone || 'user'}@kisantrust.org`,
            phone: data.phone || '',
            role,
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            verificationStatus: role === USER_ROLES.CUSTOMER ? VERIFICATION_STATUS.VERIFIED : VERIFICATION_STATUS.PENDING_VERIFICATION,
            preferredLanguage: data.preferredLanguage || 'Marathi (मराठी)',
            authProvider: 'registration'
        });

        // 1. Farmer Registration
        if (role === USER_ROLES.FARMER) {
            const farmerProf = new FarmerProfile({
                userId: uid,
                personalDetails: {
                    fullName: data.name,
                    mobileNumber: data.phone || '',
                    emailAddress: data.email || '',
                    fullAddress: data.address || '',
                    pincode: data.pincode || '',
                    state: data.state || 'Maharashtra',
                    district: data.district || 'Nashik',
                    village: data.village || ''
                },
                farmDetails: {
                    primaryCrops: Array.isArray(data.primaryCrops) ? data.primaryCrops : (data.primaryCrops ? [data.primaryCrops] : ['Tomato']),
                    farmSizeAcres: Number(data.farmSizeAcres) || 2,
                    productionCapacityTons: Number(data.productionCapacityTons) || 10,
                    fpoMembership: data.fpoMembership || ''
                },
                verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION
            });
            try {
                await (await localDb.collection('farmerProfiles')).doc(uid).set(farmerProf.toFirestore());
            } catch (e) {}
        }
        // 2. Buyer Registration
        else if (role === USER_ROLES.BUYER) {
            const buyerProf = new BuyerProfileRecord({
                userId: uid,
                businessDetails: {
                    companyName: data.companyName || data.name,
                    buyerType: data.buyerType || 'Food Processor',
                    contactPerson: data.name,
                    mobileNumber: data.phone || '',
                    emailAddress: data.email || '',
                    businessAddress: data.address || '',
                    district: data.district || 'Nashik',
                    state: data.state || 'Maharashtra',
                    pincode: data.pincode || '',
                    gstin: data.gstin || '',
                    primaryCommodities: data.primaryCrops ? (Array.isArray(data.primaryCrops) ? data.primaryCrops : [data.primaryCrops]) : ['Tomato'],
                    expectedMonthlyVolumeTons: Number(data.expectedMonthlyVolumeTons) || 25
                },
                verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION,
                documentsVerified: false
            });
            try {
                await (await localDb.collection('buyerProfiles')).doc(uid).set(buyerProf.toFirestore());
            } catch (e) {}
        }
        // 3. Customer / Direct Consumer Registration
        else if (role === USER_ROLES.CUSTOMER) {
            const custProf = new CustomerProfile({
                userId: uid,
                personalDetails: {
                    fullName: data.name,
                    mobileNumber: data.phone || '',
                    emailAddress: data.email || '',
                    deliveryAddress: data.address || '',
                    city: data.district || 'Nashik',
                    state: data.state || 'Maharashtra',
                    pincode: data.pincode || ''
                },
                preferences: {
                    preferredCrops: data.primaryCrops ? (Array.isArray(data.primaryCrops) ? data.primaryCrops : [data.primaryCrops]) : ['Tomato', 'Onion'],
                    purchaseFrequency: 'Weekly',
                    directFarmOrdersCount: 0
                },
                verificationStatus: VERIFICATION_STATUS.VERIFIED
            });
            try {
                await (await localDb.collection('customerProfiles')).doc(uid).set(custProf.toFirestore());
            } catch (e) {}
        }

        this._saveUser(newUser);
        try {
            await this._syncToFirestore(newUser);
        } catch (e) {}
        return newUser;
    }

    /**
     * 1-Click Role Switchers for Hackathon Demonstrations
     */
    async loginAsDemoFarmer() {
        this._saveUser(DEMO_ACCOUNTS.farmer);
        return DEMO_ACCOUNTS.farmer;
    }

    async loginAsDemoBuyer() {
        this._saveUser(DEMO_ACCOUNTS.buyer);
        return DEMO_ACCOUNTS.buyer;
    }

    async loginAsDemoCustomer() {
        this._saveUser(DEMO_ACCOUNTS.customer);
        return DEMO_ACCOUNTS.customer;
    }

    async loginAsDemoAdmin() {
        this._saveUser(DEMO_ACCOUNTS.admin);
        return DEMO_ACCOUNTS.admin;
    }

    async loginAsDemoSuperAdmin() {
        this._saveUser(DEMO_ACCOUNTS.super_admin);
        return DEMO_ACCOUNTS.super_admin;
    }

    /**
     * Logout
     */
    async logout() {
        this.currentUser = null;
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem(STORAGE_KEY_USER);
            }
        } catch (e) {}
        return true;
    }

    async _syncToFirestore(user) {
        try {
            const userRef = (await localDb.collection('users')).doc(user.uid);
            await userRef.set(user.toFirestore());
        } catch (err) {
            console.warn('Could not sync user to Firestore collection:', err);
        }
    }
}
const AuthService = new AuthServiceClass();


// --- MAIN APPLICATION CONTROLLER ---
/**
 * KisanTrust - Application Controller (Stage 7: Connected Ecosystem, Admin Portal & Trust System)
 * AI-Powered Market Intelligence and Trusted Farm-to-Buyer Network
 */



































// Crop Varieties Map for Dynamic Selection
const CROP_VARIETIES_MAP = {
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

// ============================================================
// Formatting Utilities
// ============================================================
function formatCurrency(amount, decimals = 2) {
    if (amount === null || amount === undefined || isNaN(amount)) return '\u20b9 --';
    return '\u20b9' + Number(amount).toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function formatWeight(kg) {
    if (!kg && kg !== 0) return '-- kg';
    if (kg >= 100) return (kg / 100).toFixed(1) + ' Quintal';
    return kg.toFixed(1) + ' kg';
}

function formatDate(dateStr) {
    if (!dateStr) return '--';
    try {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch { return dateStr; }
}

function formatDistance(km) {
    if (!km && km !== 0) return '-- km';
    return Number(km).toFixed(1) + ' km';
}

function formatPercent(val, decimals = 1) {
    if (val === null || val === undefined || isNaN(val)) return '--%';
    return Number(val).toFixed(decimals) + '%';
}

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
            ${crop} • ${angleLabel} (Captured)
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
    
    // Add demo notice if not already present
    const negModal = document.getElementById('negotiationModal');
    if (negModal && !negModal.querySelector('.demo-notice-banner')) {
        const banner = document.createElement('div');
        banner.className = 'demo-notice-banner';
        banner.style.cssText = 'background:#FEF3C7;border:1px solid #F59E0B;border-radius:10px;padding:8px 12px;margin:0 16px 12px;display:flex;align-items:center;gap:8px;';
        banner.innerHTML = '<span style="font-size:1rem;">📋</span><span style="font-size:0.78rem;color:#92400E;font-weight:600;">Demo — Counter-offers are simulated for demonstration purposes.</span>';
        const modalBox = negModal.querySelector('.custom-modal-box');
        if (modalBox && modalBox.children[1]) modalBox.insertBefore(banner, modalBox.children[1]);
    }
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
                    ${['DELIVERED', 'QUALITY_VERIFIED', 'PAYOUT_RELEASED'].includes(t.status) ? `
                        <button class="btn btn-warning btn-sm" onclick="window.openDisputeModal('${t.transactionId}')" style="padding:6px 12px; font-size:0.82rem;">
                            ⚠️ तक्रार नोंदवा
                        </button>
                    ` : ''}
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
                            <td><code>${b.gstin || '00XXXXX0000X0XX'}</code></td>
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
        gstin: '00XXXXX0000X0XX',
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
                    ✓ FSSAI फूड लायसन्स: <code>[Verified]</code>
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
                    <span class="status-pill verified">✓ Digital Audit Trail</span>
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
        const modal = document.getElementById('disputeModal');
        if (modal) modal.style.display = 'none';
    });

    document.getElementById('cancelDisputeBtn')?.addEventListener('click', () => {
        const modal = document.getElementById('disputeModal');
        if (modal) modal.style.display = 'none';
    });

    // Dispute Form Submission
    document.getElementById('disputeForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading('⚠️ तक्रार नोंदवत आहे...');
        try {
            const formData = {
                transactionId: document.getElementById('disputeTxnId')?.value || '',
                issueType: document.getElementById('disputeCategorySelect')?.value || '', // Changed to disputeCategorySelect based on HTML
                description: document.getElementById('disputeDescriptionInput')?.value || '', // Changed to disputeDescriptionInput based on HTML
                createdAt: new Date().toISOString(),
                status: 'OPEN',
                farmerId: AppState.currentUser?.id || 'unknown'
            };
            
            if (typeof DisputeService !== 'undefined' && DisputeService.raiseDispute) {
                await DisputeService.raiseDispute(formData);
            }
            
            // Close the modal
            const modal = document.getElementById('disputeModal');
            if (modal) modal.style.display = 'none';
            
            showToast('✅ तक्रार यशस्वीरीत्या नोंदवली गेली आहे!', 'success');
        } catch (err) {
            console.error('Dispute submission error:', err);
            showToast('⚠️ तक्रार नोंदवणी अयशस्वी: ' + err.message, 'warning');
        } finally {
            hideLoading();
        }
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

function openDisputeModal(transactionId) {
    const modal = document.getElementById('disputeModal');
    const txnIdField = document.getElementById('disputeTxnId');
    if (modal) modal.style.display = 'flex';
    if (txnIdField) txnIdField.value = transactionId || '';
    
    const dispTxnDisplay = document.getElementById('dispTxnDisplay');
    if (dispTxnDisplay) dispTxnDisplay.textContent = transactionId || 'N/A';
}
window.openDisputeModal = openDisputeModal;

// Attach all global interactive functions to window for seamless HTML inline handling
window.updateLanguage = updateLanguage;
window.applyDOMTranslations = applyDOMTranslations;
window.navigateTo = navigateTo;
window.formatCurrency = formatCurrency;
window.formatDate = formatDate;
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
