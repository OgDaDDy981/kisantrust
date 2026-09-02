/**
 * KisanTrust - Local Server & Firebase Health Check Test Suite
 */

import http from 'http';
import { spawn } from 'child_process';

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ PASS: ${message}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${message}`);
        failed++;
    }
}

console.log('🌱 Starting KisanTrust Server & Firebase Integration Test...\n');

// Start server child process
const serverProcess = spawn('node', ['server.js'], { stdio: 'pipe' });

let serverOutput = '';
serverProcess.stdout.on('data', data => serverOutput += data.toString());
serverProcess.stderr.on('data', data => console.error(data.toString()));

// Helper to make HTTP GET requests
function httpGet(path) {
    return new Promise((resolve, reject) => {
        http.get(`http://localhost:5000${path}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
        }).on('error', reject);
    });
}

// Helper to make HTTP POST requests
function httpPost(path, payload) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify(payload);
        const req = http.request(`http://localhost:5000${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
        });
        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

// Wait for server to boot
setTimeout(async () => {
    try {
        console.log('1. Testing /api/status Endpoint:');
        const statusRes = await httpGet('/api/status');
        assert(statusRes.statusCode === 200, 'GET /api/status returned HTTP 200');
        const statusJson = JSON.parse(statusRes.body);
        assert(statusJson.firebaseProject === 'sih2026-622a0', 'Reported correct Firebase Project ID (sih2026-622a0)');

        console.log('\n2. Testing /api/firebase-check (Live Firebase Connectivity):');
        const fbRes = await httpGet('/api/firebase-check');
        assert(fbRes.statusCode === 200, 'GET /api/firebase-check returned HTTP 200');
        const fbJson = JSON.parse(fbRes.body);
        assert(Boolean(fbJson.status), `Firebase status returned: ${fbJson.status}`);
        assert(fbJson.projectId === 'sih2026-622a0', 'Targeted correct Firebase project: sih2026-622a0');

        console.log('\n3. Testing /api/keys-check (Future API Key Inspector):');
        const keysRes = await httpGet('/api/keys-check');
        assert(keysRes.statusCode === 200, 'GET /api/keys-check returned HTTP 200');
        const keysJson = JSON.parse(keysRes.body);
        assert(keysJson.firebase.configured === true, 'Firebase API Key is configured and ready');
        assert(Boolean(keysJson.geminiAI), 'Gemini AI API Key status slot inspected');
        assert(Boolean(keysJson.agmarknet), 'Agmarknet API Key status slot inspected');
        assert(Boolean(keysJson.weather), 'Weather API Key status slot inspected');

        console.log('\n4. Testing /api/telemetry (Live Farmer Action Logging):');
        const telemetryRes = await httpPost('/api/telemetry', {
            type: 'LOT_CREATED_AND_PRICED',
            user: 'Ramesh Patil (Farmer)',
            crop: 'Tomato',
            variety: 'Himsona Hybrid Grade A',
            quantity: 500,
            netPrice: 36.00,
            lotValue: 18000,
            market: 'Vashi APMC Navi Mumbai',
            action: 'Accepted Best Net Realization Offer'
        });
        assert(telemetryRes.statusCode === 200, 'POST /api/telemetry returned HTTP 200');
        const teleJson = JSON.parse(telemetryRes.body);
        assert(teleJson.status === 'RECORDED', 'Event successfully recorded in backend logs');

        console.log('\n5. Testing Static Web App Serving:');
        const indexRes = await httpGet('/');
        assert(indexRes.statusCode === 200, 'GET / (index.html) returned HTTP 200');
        assert(indexRes.body.includes('KisanTrust') || indexRes.body.includes('किसान ट्रस्ट'), 'index.html contains KisanTrust branding');

        const bundleRes = await httpGet('/bundle.js');
        assert(bundleRes.statusCode === 200, 'GET /bundle.js returned HTTP 200');

    } catch (err) {
        console.error('Test execution error:', err);
        failed++;
    } finally {
        serverProcess.kill();
        console.log('\n==========================================');
        console.log(`Server Suite Completed: ${passed} passed, ${failed} failed.`);
        if (failed === 0) {
            console.log('🎉 LOCAL HOSTED SERVER & FIREBASE BACKEND HEALTH CHECK PASSED 100%!');
            process.exit(0);
        } else {
            process.exit(1);
        }
    }
}, 1500);
