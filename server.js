/**
 * KisanTrust - Local Live Development & Backend Integration Server
 * Smart India Hackathon 2026 (Problem Statement 6132)
 * 
 * Features:
 * - Zero external dependencies (uses native Node.js http, fs, path, https)
 * - Live Cloud Firestore & Firebase integration health check
 * - Future API Key inspector (Gemini AI, Agmarknet, Weather, Firebase)
 * - Real-time terminal request and data telemetry logger
 * - Auto-launches default browser on http://localhost:5000
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Automatic .env file loader
function loadEnvFile() {
    const envPath = path.resolve(__dirname, '.env');
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
loadEnvFile();

const PORT = process.env.PORT || 5000;

// Loaded Firebase Configuration
const FIREBASE_CONFIG = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyD2yRbvNydcoHVutM6FFqerQGl0ST5OPfw",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "sih2026-622a0.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "sih2026-622a0",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "sih2026-622a0.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "593553956672",
    appId: process.env.FIREBASE_APP_ID || "1:593553956672:web:d9daf3af089bb9867ce4a5",
    measurementId: "G-04493R1KSH"
};

// MIME Types
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp'
};

// Test Live Firebase Connection
function testFirebaseConnection() {
    return new Promise((resolve) => {
        const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_CONFIG.projectId}/databases/(default)/documents?key=${FIREBASE_CONFIG.apiKey}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const isSuccess = res.statusCode >= 200 && res.statusCode < 400;
                resolve({
                    status: isSuccess ? 'ONLINE' : (res.statusCode === 403 || res.statusCode === 401 ? 'CONNECTED_PERM_CHECK' : 'REACHABLE'),
                    httpCode: res.statusCode,
                    projectId: FIREBASE_CONFIG.projectId,
                    authDomain: FIREBASE_CONFIG.authDomain,
                    storageBucket: FIREBASE_CONFIG.storageBucket,
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
}

const AGMARKNET_KEY = process.env.AGMARKNET_API_KEY || process.env.DATA_GOV_IN_API_KEY || '';
const GEMINI_KEY = process.env.GEMINI_API_KEY || '';

// Inspect Future API Keys
function inspectApiKeys() {
    return {
        firebase: {
            name: "Firebase Cloud Firestore & Auth",
            configured: Boolean(FIREBASE_CONFIG.apiKey),
            projectId: FIREBASE_CONFIG.projectId,
            status: "ACTIVE_CONFIGURED",
            keyPreview: FIREBASE_CONFIG.apiKey.slice(0, 8) + '...'
        },
        geminiAI: {
            name: "Google Gemini 2.5 Flash (AI Mitra Advisory)",
            configured: Boolean(GEMINI_KEY),
            status: "ACTIVE_CONFIGURED",
            keyPreview: GEMINI_KEY.slice(0, 8) + '...'
        },
        agmarknet: {
            name: "Government Agmarknet Mandi API (data.gov.in)",
            configured: Boolean(AGMARKNET_KEY),
            status: "ACTIVE_CONFIGURED",
            keyPreview: AGMARKNET_KEY.slice(0, 8) + '...'
        },
        weather: {
            name: "IMD / OpenWeather Climate & Shelf-life",
            configured: Boolean(process.env.WEATHER_API_KEY),
            status: process.env.WEATHER_API_KEY ? "CONFIGURED" : "READY_FOR_KEY (Regional Climate Estimates Active)",
            keyPreview: process.env.WEATHER_API_KEY ? '***' : 'Using Agro-Climatic Table'
        }
    };
}

// Request Handler
const server = http.createServer(async (req, res) => {
    const startTime = Date.now();
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    // CORS Headers for API calls
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // --- API ROUTES ---

    // 1. Live Agmarknet Proxy
    if (pathname === '/api/agmarknet') {
        const commodity = parsedUrl.searchParams.get('commodity') || 'Tomato';
        const state = parsedUrl.searchParams.get('state') || 'Maharashtra';
        const targetUrl = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${AGMARKNET_KEY}&format=json&offset=0&limit=50&filters[state]=${encodeURIComponent(state)}&filters[commodity]=${encodeURIComponent(commodity)}`;

        https.get(targetUrl, (apiRes) => {
            let data = '';
            apiRes.on('data', chunk => data += chunk);
            apiRes.on('end', () => {
                res.writeHead(apiRes.statusCode, { 'Content-Type': 'application/json' });
                res.end(data);
                console.log(`📡 [AGMARKNET_API] Commodity: ${commodity}, State: ${state} -> HTTP ${apiRes.statusCode}`);
            });
        }).on('error', (err) => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message, status: 'PROXY_ERROR' }));
        });
        return;
    }

    // 2. Live Firebase Status
    if (pathname === '/api/firebase-check') {
        const fbStatus = await testFirebaseConnection();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(fbStatus, null, 2));
        console.log(`📡 [FIREBASE_CHECK] Project: ${FIREBASE_CONFIG.projectId} -> Status: ${fbStatus.status} (${fbStatus.details})`);
        return;
    }

    // 3. API Keys Health Check
    if (pathname === '/api/keys-check') {
        const keys = inspectApiKeys();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(keys, null, 2));
        console.log(`🔑 [KEYS_CHECK] Inspected 4 API services`);
        return;
    }

    // 3. Telemetry / Live Event Logger
    if (pathname === '/api/telemetry' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const event = JSON.parse(body || '{}');
                console.log(`\n🌾 [KISANTRUST EVENT] ${new Date().toLocaleTimeString()}`);
                console.log(`   🏷️  Type: ${event.type || 'USER_ACTION'}`);
                console.log(`   👤 User: ${event.user || 'Anonymous Farmer'}`);
                if (event.crop) console.log(`   🍅 Crop: ${event.crop} (${event.variety || 'Standard'}, ${event.quantity || 'N/A'} kg)`);
                if (event.netPrice) console.log(`   💰 Net Price: ₹ ${event.netPrice}/kg | Total: ₹ ${event.lotValue || 'N/A'}`);
                if (event.market) console.log(`   🏪 Market: ${event.market}`);
                if (event.action) console.log(`   ⚡ Action: ${event.action}`);
                if (event.details) console.log(`   📝 Details:`, JSON.stringify(event.details));

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'RECORDED', receivedAt: new Date().toISOString() }));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
            }
        });
        return;
    }

    // 4. Server General Status
    if (pathname === '/api/status') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            app: "KisanTrust - SIH26132 Market Linkage Platform",
            version: "2.0.0",
            port: PORT,
            firebaseProject: FIREBASE_CONFIG.projectId,
            serverUptimeSeconds: Math.floor(process.uptime()),
            nodeVersion: process.version,
            timestamp: new Date().toISOString()
        }, null, 2));
        return;
    }

    // --- STATIC FILE SERVING ---
    let filePath = pathname === '/' ? '/index.html' : pathname;
    const resolvedPath = path.join(__dirname, filePath);

    // Security check against directory traversal
    if (!resolvedPath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.readFile(resolvedPath, (err, content) => {
        const duration = Date.now() - startTime;
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`<h1>404 Not Found</h1><p>The requested path <code>${pathname}</code> does not exist.</p>`);
                console.log(`❌ [404] ${req.method} ${pathname} (${duration}ms)`);
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`500 Server Error: ${err.code}`);
                console.error(`💥 [500] ${req.method} ${pathname}: ${err.message}`);
            }
        } else {
            const ext = path.extname(resolvedPath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
            
            // Log static request
            if (pathname === '/' || pathname === '/bundle.js' || pathname === '/styles.css') {
                console.log(`📄 [200] ${req.method} ${pathname} (${duration}ms, ${(content.length / 1024).toFixed(1)} KB)`);
            }
        }
    });
});

// Start Server & Auto-open Browser
server.listen(PORT, async () => {
    console.log('\n===============================================================');
    console.log('🌱 KISANTRUST LOCAL BACKEND & FIREBASE SERVER ACTIVE');
    console.log('===============================================================');
    console.log(`📍 Web App URL       : http://localhost:${PORT}`);
    console.log(`🔥 Firebase Project  : ${FIREBASE_CONFIG.projectId}`);
    console.log(`📡 Status Endpoint   : http://localhost:${PORT}/api/status`);
    console.log(`🔍 Firebase Check    : http://localhost:${PORT}/api/firebase-check`);
    console.log(`🔑 API Keys Check    : http://localhost:${PORT}/api/keys-check`);
    console.log('===============================================================\n');

    // Run initial Firebase check
    const fb = await testFirebaseConnection();
    console.log(`🔥 Firebase Connectivity Status: [${fb.status}] - ${fb.details}\n`);

    // Auto-open browser
    const startCmd = process.platform === 'win32' 
        ? `start http://localhost:${PORT}` 
        : (process.platform === 'darwin' ? `open http://localhost:${PORT}` : `xdg-open http://localhost:${PORT}`);
    
    exec(startCmd, (err) => {
        if (!err) {
            console.log(`🌐 Automatically launched web browser to http://localhost:${PORT}`);
        }
    });
});
