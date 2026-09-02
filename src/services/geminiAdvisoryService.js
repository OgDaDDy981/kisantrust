/**
 * KisanTrust - Gemini Advisory & Multilingual Explanation Service (Stage 4)
 * Translates structured deterministic recommendation results into empathetic, actionable farmer advice.
 * Supported languages: Marathi (मराठी), Hindi (हिंदी), English.
 * 
 * STRICT COMPLIANCE:
 * - Gemini receives only verified structured facts (calculated net realization, buyer offers, APMC rates).
 * - Gemini NEVER invents market prices, future guarantees, or buyer reliability ratings.
 * - Server-side / secure environment key handling with graceful offline multilingual fallback.
 */

import { ENV_CONFIG } from '../config/envConfig.js';

export class GeminiAdvisoryService {
    /**
     * Generates a conversational explanation of the structured decision recommendation
     * @param {Object} params
     * @param {Object} params.recommendation Output of RecommendationService.generateRecommendation
     * @param {Object} params.lot DigitalAgriculturalLot
     * @param {string} [params.language="Marathi (मराठी)"]
     * @returns {Promise<{ adviceText: string, actionKeyPoints: Array<string>, source: 'GEMINI_GENAI'|'STRUCTURED_ADVISORY' }>}
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
     * @param {Object} params
     * @param {Object} params.recommendation Output of RecommendationService.generateRecommendation
     * @param {Object} params.lot DigitalAgriculturalLot
     * @param {string} [params.language="Marathi (मराठी)"]
     * @returns {Promise<{ adviceText: string, actionKeyPoints: Array<string>, source: 'GEMINI_GENAI'|'STRUCTURED_ADVISORY' }>}
     */
    static async generateFarmerExplanation({ recommendation, lot, language = "Marathi (मराठी)" }) {
        const apiKey = ENV_CONFIG.GEMINI_API_KEY ||
                       (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) ||
                       (typeof window !== 'undefined' && (window.__ENV__?.GEMINI_API_KEY || window.__GEMINI_API_KEY__));

        const structuredPayload = {
            cropType: lot.cropType,
            variety: lot.variety || "Standard",
            quantityKg: lot.quantity,
            qualityGrade: lot.overallQualityGrade,
            freshnessScore: lot.freshnessScore,
            recommendedAction: recommendation.recommendedAction,
            opportunityScore: recommendation.opportunityScore,
            estimatedNetRealization: recommendation.estimatedNetRealizationPerKg,
            totalLotValue: recommendation.totalExpectedNetPayout,
            bestMandi: recommendation.bestMandi?.marketName,
            mandiRate: recommendation.bestMandi?.rawModalPricePerKg,
            topBuyerName: recommendation.topBuyer?.buyerName,
            buyerOfferedPrice: recommendation.topBuyer?.offeredPricePerKg,
            pickupProvided: recommendation.topBuyer?.pickupProvided,
            safeHoldingDaysRemaining: recommendation.spoilage?.safeHoldingDaysRemaining,
            forecastRange: recommendation.forecast?.expectedOpportunityRange?.formatted,
            targetLanguage: language
        };

        // If Gemini API Key is present, call Google GenAI endpoint
        if (apiKey) {
            try {
                const response = await this._callGeminiAPI(structuredPayload, apiKey);
                if (response && response.adviceText) {
                    return {
                        adviceText: response.adviceText,
                        actionKeyPoints: response.actionKeyPoints || [],
                        keyPoints: response.actionKeyPoints || [],
                        source: 'GEMINI_GENAI'
                    };
                }
            } catch (err) {
                console.warn('Gemini API call failed; falling back to structured advisory engine:', err.message);
            }
        }

        // Resilient, deterministic multilingual advisory generator
        const deterministic = this._generateDeterministicExplanation(structuredPayload);
        return {
            adviceText: deterministic.adviceText,
            actionKeyPoints: deterministic.actionKeyPoints,
            keyPoints: deterministic.actionKeyPoints,
            source: 'STRUCTURED_ADVISORY'
        };
    }

    /**
     * Internal caller for Gemini API endpoint
     */
    static async _callGeminiAPI(payload, apiKey) {
        const prompt = `You are "KisanTrust AI Mitra", an expert agricultural market advisor helping an Indian farmer.
Explain the following calculated selling recommendation simply and empathetically in ${payload.targetLanguage}.
Do NOT invent any numbers, market prices, or predictions. Ground your answer strictly in these facts:

- Crop: ${payload.cropType} (${payload.quantityKg} kg, ${payload.qualityGrade}, Freshness: ${payload.freshnessScore}%)
- Calculated Action: ${payload.recommendedAction}
- Opportunity Score: ${payload.opportunityScore}/100
- Net Realization: ₹${payload.estimatedNetRealization}/kg (Total: ₹${payload.totalLotValue})
- Best APMC Mandi: ${payload.bestMandi} @ ₹${payload.mandiRate}/kg
- Top Verified Buyer: ${payload.topBuyerName || 'None'} (Offer: ₹${payload.buyerOfferedPrice || 0}/kg, Farm-gate Pickup: ${payload.pickupProvided ? 'Yes' : 'No'})
- Safe Holding Days Remaining: ${payload.safeHoldingDaysRemaining} days
- Forecasted 5-Day Range: ${payload.forecastRange}

Respond in clean JSON format:
{
  "adviceText": "2-3 conversational sentences addressing the farmer directly in ${payload.targetLanguage}",
  "actionKeyPoints": ["Point 1", "Point 2", "Point 3"]
}`;

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            })
        });

        if (!res.ok) throw new Error(`Gemini HTTP error ${res.status}`);
        const data = await res.json();
        let rawJson = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawJson) return null;
        rawJson = rawJson.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(rawJson);
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
                actionKeyPoints.push(`खरेदीदार शेतावर थेट पिकअप पुरवत असल्याने वाहतूक खर्चात १००% बचत.`);
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
                adviceText = `मंडईमध्ये सध्या भाववाढीचा कल दिसून येत असून आपल्या पिकाचा ताजेपणा ${p.freshnessScore}% असल्याने पुढील ३-४ दिवस वाट पाहणे अधिक फायदेशीर ठरू शकते.`;
                actionKeyPoints.push(`अपेक्षित भाव कक्षा: ${p.forecastRange}.`);
                actionKeyPoints.push(`पिकाची सुरक्षित टिकवण क्षमता ${p.safeHoldingDaysRemaining} दिवस शिल्लक.`);
                actionKeyPoints.push(`हवामानातील बदल व स्थानिक आवक यावर लक्ष ठेवा.`);
            } else if (isHindi) {
                adviceText = `मंडी में वर्तमान में तेजी का रुख है और फसल की ताजगी ${p.freshnessScore}% होने के कारण अगले 3-4 दिन रुकना अधिक लाभकारी हो सकता है।`;
                actionKeyPoints.push(`अनुमानित भाव दायरा: ${p.forecastRange}.`);
                actionKeyPoints.push(`फसल की सुरक्षित शेल्फ लाइफ ${p.safeHoldingDaysRemaining} दिन शेष।`);
            } else {
                adviceText = `Market price momentum is rising (+₹/day) and your crop freshness (${p.freshnessScore}%) allows safe holding for 3-4 days to capture higher realization.`;
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
