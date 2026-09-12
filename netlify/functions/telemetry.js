/**
 * AgriLink - Netlify Serverless Function: Telemetry Event Logger
 */

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

    try {
        const payload = JSON.parse(event.body || '{}');
        console.log(`🌾 [AGRILINK EVENT] ${new Date().toISOString()}`, JSON.stringify(payload));
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ status: 'RECORDED', receivedAt: new Date().toISOString() })
        };
    } catch (e) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Invalid JSON body' })
        };
    }
}
