/**
 * KisanTrust - Local Live Development & Backend Integration Server
 * Smart India Hackathon 2026 (Problem Statement 6132)
 * 
 * Features:
 * - Direct integration with Netlify Functions for unified local & cloud parity
 * - Live Cloud Firestore & Firebase integration health check
 * - Gemini Multimodal Vision API proxy & AI Mitra Advisory
 * - Real-time terminal request and data telemetry logger
 * - Auto-launches default browser on http://localhost:5000
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

import { handler as geminiVisionHandler } from './netlify/functions/gemini-vision.js';
import { handler as geminiAdvisoryHandler } from './netlify/functions/gemini-advisory.js';
import { handler as agmarknetHandler } from './netlify/functions/agmarknet.js';
import { handler as keysCheckHandler } from './netlify/functions/keys-check.js';
import { handler as firebaseCheckHandler } from './netlify/functions/firebase-check.js';
import { handler as telemetryHandler } from './netlify/functions/telemetry.js';
import { handler as statusHandler } from './netlify/functions/status.js';

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

// Helper: bridge HTTP request to Netlify Function handler
async function handleServerlessFunction(handler, req, res, pathname, parsedUrl, body) {
    const event = {
        httpMethod: req.method,
        path: pathname,
        queryStringParameters: Object.fromEntries(parsedUrl.searchParams),
        headers: req.headers,
        body: body
    };

    try {
        const result = await handler(event, {});
        for (const [k, v] of Object.entries(result.headers || {})) {
            res.setHeader(k, v);
        }
        res.writeHead(result.statusCode || 200);
        res.end(result.body || '');
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message, status: 'SERVER_HANDLER_ERROR' }));
    }
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

    // Read body if POST
    let body = '';
    if (req.method === 'POST') {
        body = await new Promise((resolve) => {
            let data = '';
            req.on('data', chunk => data += chunk);
            req.on('end', () => resolve(data));
        });
    }

    // --- API ROUTES (Mirrors Netlify Serverless Functions) ---

    if (pathname === '/api/gemini-vision') {
        await handleServerlessFunction(geminiVisionHandler, req, res, pathname, parsedUrl, body);
        console.log(`👁️ [GEMINI_VISION] Analyzed produce photo (HTTP ${res.statusCode})`);
        return;
    }

    if (pathname === '/api/gemini-advisory') {
        await handleServerlessFunction(geminiAdvisoryHandler, req, res, pathname, parsedUrl, body);
        console.log(`🤖 [GEMINI_ADVISORY] Generated grounded advisory (HTTP ${res.statusCode})`);
        return;
    }

    if (pathname === '/api/agmarknet') {
        await handleServerlessFunction(agmarknetHandler, req, res, pathname, parsedUrl, body);
        console.log(`📡 [AGMARKNET_API] Commodity: ${parsedUrl.searchParams.get('commodity') || 'Tomato'} -> HTTP ${res.statusCode}`);
        return;
    }

    if (pathname === '/api/keys-check') {
        await handleServerlessFunction(keysCheckHandler, req, res, pathname, parsedUrl, body);
        console.log(`🔑 [KEYS_CHECK] Inspected API services`);
        return;
    }

    if (pathname === '/api/firebase-check') {
        await handleServerlessFunction(firebaseCheckHandler, req, res, pathname, parsedUrl, body);
        console.log(`🔥 [FIREBASE_CHECK] Project: ${FIREBASE_CONFIG.projectId}`);
        return;
    }

    if (pathname === '/api/telemetry') {
        await handleServerlessFunction(telemetryHandler, req, res, pathname, parsedUrl, body);
        return;
    }

    if (pathname === '/api/status') {
        await handleServerlessFunction(statusHandler, req, res, pathname, parsedUrl, body);
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
                // SPA fallback for routing
                fs.readFile(path.join(__dirname, 'index.html'), (spaErr, spaContent) => {
                    if (!spaErr) {
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end(spaContent);
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(`<h1>404 Not Found</h1>`);
                    }
                });
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`500 Server Error: ${err.code}`);
            }
        } else {
            const ext = path.extname(resolvedPath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

// Start Server & Auto-open Browser
server.listen(PORT, async () => {
    console.log('\n===============================================================');
    console.log('🌱 KISANTRUST UNIFIED BACKEND & NETLIFY FUNCTION SERVER ACTIVE');
    console.log('===============================================================');
    console.log(`📍 Web App URL       : http://localhost:${PORT}`);
    console.log(`🔥 Firebase Project  : ${FIREBASE_CONFIG.projectId}`);
    console.log(`👁️ Gemini Vision API : http://localhost:${PORT}/api/gemini-vision`);
    console.log(`🤖 Gemini Mitra Adv  : http://localhost:${PORT}/api/gemini-advisory`);
    console.log(`📡 Agmarknet Proxy   : http://localhost:${PORT}/api/agmarknet`);
    console.log(`🔑 API Keys Check    : http://localhost:${PORT}/api/keys-check`);
    console.log('===============================================================\n');
});
