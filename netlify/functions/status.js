/**
 * AgriLink - Netlify Serverless Function: System Status
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

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            app: "AgriLink - SIH26132 Market Linkage Platform",
            version: "2.1.0",
            deployment: "Netlify Serverless Production",
            firebaseProject: process.env.FIREBASE_PROJECT_ID || "sih2026-622a0",
            timestamp: new Date().toISOString()
        }, null, 2)
    };
}
