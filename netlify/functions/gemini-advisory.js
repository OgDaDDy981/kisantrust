/**
 * AgriLink - Netlify Serverless Function: Gemini AI Mitra Advisory
 * Generates grounded, empathetic farmer selling explanations in Marathi, Hindi, and English.
 */

import https from 'https';

const GEMINI_MODELS = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash'
];

async function callGeminiAdvisory(apiKey, prompt) {
    let lastError = null;

    for (const model of GEMINI_MODELS) {
        try {
            const payload = JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    responseMimeType: "application/json",
                    temperature: 0.3
                }
            });

            const result = await new Promise((resolve, reject) => {
                const url = new URL(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`);
                const options = {
                    hostname: url.hostname,
                    path: url.pathname + url.search,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(payload)
                    }
                };

                const req = https.request(options, (res) => {
                    let body = '';
                    res.on('data', chunk => body += chunk);
                    res.on('end', () => {
                        if (res.statusCode >= 200 && res.statusCode < 300) {
                            try {
                                resolve(JSON.parse(body));
                            } catch (e) {
                                reject(new Error(`JSON Parse Error: ${e.message}`));
                            }
                        } else {
                            reject(new Error(`Gemini ${model} HTTP ${res.statusCode}: ${body}`));
                        }
                    });
                });

                req.on('error', reject);
                req.write(payload);
                req.end();
            });

            const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (rawText) {
                const cleaned = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
                return JSON.parse(cleaned);
            }
        } catch (err) {
            lastError = err;
        }
    }

    throw lastError || new Error('All Gemini advisory models failed.');
}

export async function handler(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed. Use POST.' })
        };
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
        return {
            statusCode: 503,
            headers,
            body: JSON.stringify({
                status: 'NO_API_KEY',
                adviceText: '',
                actionKeyPoints: []
            })
        };
    }

    try {
        const payload = JSON.parse(event.body || '{}');
        const lang = payload.targetLanguage || 'Marathi (मराठी)';

        const prompt = `You are "AgriLink AI Mitra", an expert empathetic agricultural market advisor helping an Indian farmer.
Explain the following calculated selling recommendation simply and clearly in ${lang}.
DO NOT invent any numbers, prices, or false guarantees. Ground your response strictly in these calculated facts:

- Crop: ${payload.cropType || 'Tomato'} (${payload.quantityKg || 500} kg, ${payload.qualityGrade || 'Grade A'}, Freshness: ${payload.freshnessScore || 92}%)
- Calculated Action: ${payload.recommendedAction || 'SELL_TO_VERIFIED_BUYER'}
- Opportunity Score: ${payload.opportunityScore || 90}/100
- Net Realization: ₹${payload.estimatedNetRealization || 36}/kg (Total Expected Payout: ₹${payload.totalLotValue || 18000})
- Best APMC Mandi: ${payload.bestMandi || 'Vashi APMC'} @ ₹${payload.mandiRate || 34}/kg
- Top Verified Buyer: ${payload.topBuyerName || 'Sahyadri Agro'} (Offered: ₹${payload.buyerOfferedPrice || 37}/kg, Farm-gate Pickup: ${payload.pickupProvided ? 'Yes' : 'No'})
- Safe Holding Days Remaining: ${payload.safeHoldingDaysRemaining || 7} days
- Forecasted 5-Day Range: ${payload.forecastRange || '₹34 - ₹38/kg'}

Respond strictly in clean JSON format:
{
  "adviceText": "2-3 conversational sentences addressing the farmer warmly in ${lang}",
  "actionKeyPoints": [
    "Point 1 in ${lang}",
    "Point 2 in ${lang}",
    "Point 3 in ${lang}"
  ]
}`;

        const result = await callGeminiAdvisory(apiKey, prompt);
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                adviceText: result.adviceText || '',
                actionKeyPoints: Array.isArray(result.actionKeyPoints) ? result.actionKeyPoints : [],
                source: 'GEMINI_GENAI'
            })
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                status: 'ERROR',
                error: err.message
            })
        };
    }
}
