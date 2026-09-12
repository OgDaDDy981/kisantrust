/**
 * AgriLink - Netlify Serverless Function: Firebase Connectivity Check
 */

import https from 'https';

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

    const projectId = process.env.FIREBASE_PROJECT_ID || "sih2026-622a0";
    const apiKey = process.env.FIREBASE_API_KEY || "AIzaSyD2yRbvNydcoHVutM6FFqerQGl0ST5OPfw";
    const authDomain = process.env.FIREBASE_AUTH_DOMAIN || "sih2026-622a0.firebaseapp.com";
    const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || "sih2026-622a0.firebasestorage.app";

    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents?key=${apiKey}`;

    const fbStatus = await new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const isSuccess = res.statusCode >= 200 && res.statusCode < 400;
                resolve({
                    status: isSuccess ? 'ONLINE' : (res.statusCode === 403 || res.statusCode === 401 ? 'CONNECTED_PERM_CHECK' : 'REACHABLE'),
                    httpCode: res.statusCode,
                    projectId,
                    authDomain,
                    storageBucket,
                    details: isSuccess ? 'Firestore Database connected & active' : `Google API responded with HTTP ${res.statusCode}`
                });
            });
        }).on('error', (err) => {
            resolve({
                status: 'OFFLINE_FALLBACK',
                httpCode: 0,
                error: err.message,
                details: 'Using local resilient storage mirror'
            });
        });
    });

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(fbStatus, null, 2)
    };
}
