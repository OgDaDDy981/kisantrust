/**
 * KisanTrust - Netlify Serverless Function: Agmarknet APMC Proxy
 * Proxies requests to Open Government Data India (api.data.gov.in)
 * Keeps AGMARKNET_API_KEY / DATA_GOV_IN_API_KEY secure on the server.
 */

import https from 'https';

const AGMARKNET_RESOURCE_ID = "9ef84268-d588-465a-a308-a864a43d0070";
const API_BASE_URL = "https://api.data.gov.in/resource";

export async function handler(event, context) {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers, body: '' };
    }

    const apiKey = process.env.AGMARKNET_API_KEY || process.env.DATA_GOV_IN_API_KEY || '';
    const params = event.queryStringParameters || {};
    const commodity = params.commodity || 'Tomato';
    const state = params.state || 'Maharashtra';
    const district = params.district || '';

    if (!apiKey) {
        return {
            statusCode: 503,
            headers,
            body: JSON.stringify({
                status: 'NO_API_KEY',
                message: 'AGMARKNET_API_KEY / DATA_GOV_IN_API_KEY is not configured on the server.',
                records: []
            })
        };
    }

    let targetUrl = `${API_BASE_URL}/${AGMARKNET_RESOURCE_ID}?api-key=${apiKey}&format=json&offset=0&limit=50&filters[state]=${encodeURIComponent(state)}&filters[commodity]=${encodeURIComponent(commodity)}`;
    if (district && district !== 'All') {
        targetUrl += `&filters[district]=${encodeURIComponent(district)}`;
    }

    try {
        const data = await new Promise((resolve, reject) => {
            https.get(targetUrl, (res) => {
                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => {
                    try {
                        const parsed = JSON.parse(body);
                        resolve({ statusCode: res.statusCode, body: parsed });
                    } catch (e) {
                        resolve({ statusCode: res.statusCode, body: { raw: body } });
                    }
                });
            }).on('error', reject);
        });

        return {
            statusCode: data.statusCode || 200,
            headers,
            body: JSON.stringify(data.body)
        };
    } catch (err) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                status: 'PROXY_ERROR',
                error: err.message,
                records: []
            })
        };
    }
}
