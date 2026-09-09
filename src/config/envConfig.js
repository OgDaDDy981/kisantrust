let nodeEnvLoaded = false;
function loadNodeEnv() {
    if (nodeEnvLoaded) return;
    nodeEnvLoaded = true;
    if (typeof process !== 'undefined' && typeof process.cwd === 'function') {
        try {
            const fs = (typeof process.getBuiltinModule === 'function' && process.getBuiltinModule('fs')) ||
                       (typeof require === 'function' && require('fs'));
            const path = (typeof process.getBuiltinModule === 'function' && process.getBuiltinModule('path')) ||
                         (typeof require === 'function' && require('path'));
            if (fs && path) {
                const envPath = path.resolve(process.cwd(), '.env');
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
        } catch (e) {}
    }
}

function getEnvVar(k, d = '') {
    loadNodeEnv();
    if (typeof process !== 'undefined' && process.env && process.env[k]) {
        return process.env[k];
    }
    if (typeof window !== 'undefined') {
        if (window.__ENV__ && window.__ENV__[k]) return window.__ENV__[k];
        if (window['__' + k + '__']) return window['__' + k + '__'];
    }
    if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('kisantrust_' + k.toLowerCase());
        if (stored) return stored;
    }
    return d;
}

export const ENV_CONFIG = {
    GEMINI_API_KEY:
        getEnvVar('GEMINI_API_KEY'),
    AGMARKNET_API_KEY:
        getEnvVar('AGMARKNET_API_KEY', getEnvVar('DATA_GOV_IN_API_KEY')),
    DATA_GOV_IN_API_KEY:
        getEnvVar('DATA_GOV_IN_API_KEY', getEnvVar('AGMARKNET_API_KEY')),
    FIREBASE_API_KEY:
        getEnvVar('FIREBASE_API_KEY', 'AIzaSyD2yRbvNydcoHVutM6FFqerQGl0ST5OPfw'),
    FIREBASE_PROJECT_ID:
        getEnvVar('FIREBASE_PROJECT_ID', 'sih2026-622a0'),
    FIREBASE_AUTH_DOMAIN:
        getEnvVar('FIREBASE_AUTH_DOMAIN', 'sih2026-622a0.firebaseapp.com'),
    FIREBASE_STORAGE_BUCKET:
        getEnvVar('FIREBASE_STORAGE_BUCKET', 'sih2026-622a0.firebasestorage.app'),
    FIREBASE_MESSAGING_SENDER_ID:
        getEnvVar('FIREBASE_MESSAGING_SENDER_ID', '593553956672'),
    FIREBASE_APP_ID:
        getEnvVar('FIREBASE_APP_ID', '1:593553956672:web:d9daf3af089bb9867ce4a5'),
    WEATHER_API_KEY:
        getEnvVar('WEATHER_API_KEY', '')
};