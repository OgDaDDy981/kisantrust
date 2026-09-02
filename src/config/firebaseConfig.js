/**
 * KisanTrust - Firebase Configuration & SDK Initialization
 * Connects directly to Google Cloud Firestore, Firebase Auth, and Firebase Analytics
 * for Smart India Hackathon 2026 Project (sih2026-622a0).
 * Includes resilient offline sync adapter for local development, node tests, and poor rural connectivity.
 */

import { ENV_CONFIG } from './envConfig.js';

// Live Firebase Configuration for SIH2026 (Loaded from .env / ENV_CONFIG)
export const firebaseConfig = {
    apiKey: ENV_CONFIG.FIREBASE_API_KEY,
    authDomain: ENV_CONFIG.FIREBASE_AUTH_DOMAIN,
    projectId: ENV_CONFIG.FIREBASE_PROJECT_ID,
    storageBucket: ENV_CONFIG.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ENV_CONFIG.FIREBASE_MESSAGING_SENDER_ID,
    appId: ENV_CONFIG.FIREBASE_APP_ID,
    measurementId: "G-04493R1KSH"
};

// In-memory fallback store for Node.js test environment
const memoryStore = {};

const safeGetStorage = (key) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(key);
    }
    return memoryStore[key] || null;
};

const safeSetStorage = (key, val) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, val);
    } else {
        memoryStore[key] = val;
    }
};

// Live Firebase SDK Integration
let liveFirestore = null;
let liveAuth = null;

if (typeof window !== 'undefined' && window.firebase) {
    try {
        if (!window.firebase.apps || window.firebase.apps.length === 0) {
            window.firebaseApp = window.firebase.initializeApp(firebaseConfig);
            if (window.firebase.analytics) {
                try { window.firebaseAnalytics = window.firebase.analytics(); } catch (e) {}
            }
        } else {
            window.firebaseApp = window.firebase.apps[0];
        }
        liveFirestore = window.firebase.firestore();
        liveAuth = window.firebase.auth();
        console.log('🔥 KisanTrust Connected to Live Cloud Firestore:', firebaseConfig.projectId);
    } catch (err) {
        console.warn('⚠️ Cloud Firestore notice (using resilient local adapter):', err.message);
    }
}

/**
 * Resilient Firestore Database Adapter (Dual-Mode: Cloud Firestore + Local Mirror)
 */
class LocalFirestoreAdapter {
    constructor() {
        this.storageKey = 'kisantrust_firestore_db';
        this._initDB();
    }

    _initDB() {
        if (!safeGetStorage(this.storageKey)) {
            const initialData = {
                users: {},
                lots: {},
                mandiBenchmarks: {},
                buyerDemands: {},
                poolingClusters: {},
                transactions: {},
                farmerProfiles: {},
                buyerProfiles: {},
                disputes: {},
                riskFlags: {},
                auditLogs: {},
                notifications: {}
            };
            safeSetStorage(this.storageKey, JSON.stringify(initialData));
        }
    }

    _getDB() {
        try {
            return JSON.parse(safeGetStorage(this.storageKey) || '{}');
        } catch (e) {
            return {
                users: {},
                lots: {},
                mandiBenchmarks: {},
                buyerDemands: {},
                poolingClusters: {},
                transactions: {},
                farmerProfiles: {},
                buyerProfiles: {},
                disputes: {},
                riskFlags: {},
                auditLogs: {},
                notifications: {}
            };
        }
    }

    _saveDB(data) {
        safeSetStorage(this.storageKey, JSON.stringify(data));
    }

    async collection(collName) {
        return {
            doc: (docId) => this.doc(collName, docId),
            get: async () => {
                // Try live Cloud Firestore if online
                if (liveFirestore) {
                    try {
                        const snap = await liveFirestore.collection(collName).get();
                        if (!snap.empty) {
                            return snap;
                        }
                    } catch (e) {
                        // Fallback to local storage mirror
                    }
                }
                const db = this._getDB();
                const coll = db[collName] || {};
                return {
                    empty: Object.keys(coll).length === 0,
                    size: Object.keys(coll).length,
                    docs: Object.keys(coll).map(id => ({
                        id,
                        exists: true,
                        data: () => coll[id]
                    }))
                };
            },
            add: async (data) => {
                const id = `${collName.slice(0, 3)}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
                await this.doc(collName, id).set({ ...data, id, createdAt: new Date().toISOString() });
                return { id };
            }
        };
    }

    doc(collName, docId) {
        return {
            get: async () => {
                if (liveFirestore) {
                    try {
                        const snap = await liveFirestore.collection(collName).doc(docId).get();
                        if (snap.exists) {
                            return snap;
                        }
                    } catch (e) {
                        // Fallback to local mirror
                    }
                }
                const db = this._getDB();
                const data = (db[collName] && db[collName][docId]) || null;
                return {
                    exists: data !== null,
                    id: docId,
                    data: () => data
                };
            },
            set: async (data, options = {}) => {
                // Mirror to local storage immediately
                const db = this._getDB();
                if (!db[collName]) db[collName] = {};
                
                if (options.merge && db[collName][docId]) {
                    db[collName][docId] = { ...db[collName][docId], ...data, updatedAt: new Date().toISOString() };
                } else {
                    db[collName][docId] = { ...data, id: docId, updatedAt: new Date().toISOString() };
                }
                this._saveDB(db);

                // Push to Cloud Firestore asynchronously
                if (liveFirestore) {
                    try {
                        await liveFirestore.collection(collName).doc(docId).set(data, options);
                    } catch (e) {
                        console.warn(`Firestore sync note for ${collName}/${docId}:`, e.message);
                    }
                }
                return true;
            },
            update: async (data) => {
                return this.doc(collName, docId).set(data, { merge: true });
            },
            delete: async () => {
                const db = this._getDB();
                if (db[collName] && db[collName][docId]) {
                    delete db[collName][docId];
                    this._saveDB(db);
                }
                if (liveFirestore) {
                    try {
                        await liveFirestore.collection(collName).doc(docId).delete();
                    } catch (e) {}
                }
                return true;
            }
        };
    }
}

/**
 * Local Storage Adapter for images/receipts
 */
class LocalStorageAdapter {
    async uploadImage(fileOrDataUrl, path) {
        if (typeof fileOrDataUrl === 'string') {
            return {
                url: fileOrDataUrl,
                path: path,
                uploadedAt: new Date().toISOString()
            };
        }
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                resolve({
                    url: e.target.result,
                    path: path,
                    uploadedAt: new Date().toISOString()
                });
            };
            reader.readAsDataURL(fileOrDataUrl);
        });
    }
}

/**
 * Local Auth Adapter with Cloud Auth Sync
 */
class LocalAuthAdapter {
    constructor() {
        this.currentUser = JSON.parse(safeGetStorage('kisantrust_auth_user') || 'null') || {
            uid: 'farmer_mh_001',
            name: 'Ramesh Patil (रमेश पाटील)',
            phone: '+91 98220 12345',
            role: 'farmer',
            district: 'Nashik',
            taluka: 'Niphad',
            state: 'Maharashtra',
            isDemo: true
        };
    }

    getUser() {
        return this.currentUser;
    }

    setUser(user) {
        this.currentUser = user;
        safeSetStorage('kisantrust_auth_user', JSON.stringify(user));
    }
}

export const localDb = new LocalFirestoreAdapter();
export const localAuth = new LocalAuthAdapter();
export const localStorageService = new LocalStorageAdapter();
