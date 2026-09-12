/**
 * AgriLink - Netlify Serverless Function: API Keys Health Check
 * Inspects server-side environment variables without exposing secret values.
 */

export async function handler(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers, body: '' };
    }

    const geminiKey = process.env.GEMINI_API_KEY || '';
    const agmarknetKey = process.env.AGMARKNET_API_KEY || process.env.DATA_GOV_IN_API_KEY || '';
    const fbKey = process.env.FIREBASE_API_KEY || 'AIzaSyD2yRbvNydcoHVutM6FFqerQGl0ST5OPfw';
    const fbProject = process.env.FIREBASE_PROJECT_ID || 'sih2026-622a0';

    const keys = {
        firebase: {
            name: "Firebase Cloud Firestore & Auth",
            configured: Boolean(fbKey),
            projectId: fbProject,
            status: "ACTIVE_CONFIGURED",
            keyPreview: fbKey.slice(0, 8) + '...'
        },
        geminiAI: {
            name: "Google Gemini 2.5 Flash Vision & AI Mitra",
            configured: Boolean(geminiKey),
            status: geminiKey ? "ACTIVE_CONFIGURED" : "READY_FOR_KEY",
            keyPreview: geminiKey ? geminiKey.slice(0, 8) + '...' : 'Not Set (Server Fallback Active)'
        },
        agmarknet: {
            name: "Government Agmarknet Mandi API (data.gov.in)",
            configured: Boolean(agmarknetKey),
            status: agmarknetKey ? "ACTIVE_CONFIGURED" : "READY_FOR_KEY",
            keyPreview: agmarknetKey ? agmarknetKey.slice(0, 8) + '...' : 'Not Set (APMC Benchmarks Active)'
        },
        weather: {
            name: "IMD / OpenWeather Climate & Shelf-life",
            configured: Boolean(process.env.WEATHER_API_KEY),
            status: process.env.WEATHER_API_KEY ? "CONFIGURED" : "READY_FOR_KEY (Regional Climate Estimates Active)",
            keyPreview: process.env.WEATHER_API_KEY ? '***' : 'Using Agro-Climatic Table'
        }
    };

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(keys, null, 2)
    };
}
