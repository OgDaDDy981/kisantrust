/**
 * KisanTrust - Market Data Service (Agmarknet & Open Data Normalization)
 * Integrates legitimate Open Government Data (data.gov.in / Agmarknet) with Firestore caching.
 * Implements a strict fallback hierarchy: Live API -> Firestore Cache -> Structured Demo Data.
 * 
 * Strict Compliance:
 * - Never labels mock or benchmark data as live data.
 * - Always provides explicit dataStatus ('live' | 'cached' | 'demo') and data freshness metadata.
 * - Reads API keys securely from environment variables (Node: process.env, Browser: window / localStorage).
 */

import { firebaseService } from './firebaseService.js';
import { mockMandiBenchmarks } from '../data/mockMandis.js';
import { ENV_CONFIG } from '../config/envConfig.js';

export const DATA_STATUS = {
    LIVE: 'live',
    CACHED: 'cached',
    DEMO: 'demo',
    UNAVAILABLE: 'unavailable'
};

export const DATA_STATUS_LABELS = {
    [DATA_STATUS.LIVE]: 'Live Government Data (Agmarknet / OGD)',
    [DATA_STATUS.CACHED]: 'Cached Government Data (Agmarknet Synced)',
    [DATA_STATUS.DEMO]: 'Demo / Offline Data (Standard Benchmark)',
    [DATA_STATUS.UNAVAILABLE]: 'Market Data Unavailable'
};

export class MarketDataService {
    // Official Open Government Data Platform India (data.gov.in) Agmarknet Resource ID
    static AGMARKNET_RESOURCE_ID = "9ef84268-d588-465a-a308-a864a43d0070";
    static API_BASE_URL = "https://api.data.gov.in/resource";

    /**
     * Retrieves the configured API key from environment variables or browser context
     * @returns {string|null}
     */
    static getApiKey() {
        return ENV_CONFIG.AGMARKNET_API_KEY ||
               ENV_CONFIG.DATA_GOV_IN_API_KEY ||
               (typeof process !== 'undefined' && (process.env.AGMARKNET_API_KEY || process.env.DATA_GOV_IN_API_KEY)) ||
               (typeof window !== 'undefined' && (window.__ENV__?.AGMARKNET_API_KEY || window.__AGMARKNET_API_KEY__)) ||
               null;
    }

    /**
     * Calculates structured data freshness metadata
     * @param {string|Date} timestamp
     * @param {string} dataStatus 'live' | 'cached' | 'demo'
     * @returns {Object} Freshness metadata
     */
    static getDataFreshness(timestamp, dataStatus = DATA_STATUS.DEMO) {
        const timeMs = new Date(timestamp || Date.now()).getTime();
        const diffMinutes = Math.max(0, Math.floor((Date.now() - timeMs) / (60 * 1000)));

        let relativeLabel = '';
        if (dataStatus === DATA_STATUS.LIVE) {
            if (diffMinutes < 5) relativeLabel = 'Live (Just updated)';
            else if (diffMinutes < 60) relativeLabel = `Live (${diffMinutes} mins ago)`;
            else relativeLabel = `Live (Today at ${new Date(timeMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`;
        } else if (dataStatus === DATA_STATUS.CACHED) {
            const hours = Math.floor(diffMinutes / 60);
            if (hours < 1) relativeLabel = `Cached (${diffMinutes} mins ago)`;
            else if (hours < 24) relativeLabel = `Cached (${hours} hours ago)`;
            else relativeLabel = `Cached (${new Date(timeMs).toLocaleDateString()})`;
        } else {
            relativeLabel = 'Demo / Offline Data (APMC Benchmark)';
        }

        return {
            status: dataStatus,
            statusLabel: DATA_STATUS_LABELS[dataStatus] || DATA_STATUS_LABELS[DATA_STATUS.DEMO],
            relativeLabel,
            lastUpdated: new Date(timeMs).toISOString(),
            isLive: dataStatus === DATA_STATUS.LIVE,
            isCached: dataStatus === DATA_STATUS.CACHED,
            isDemo: dataStatus === DATA_STATUS.DEMO
        };
    }

    /**
     * Normalizes raw mandi data (whether from Agmarknet API, Firestore cache, or internal benchmark)
     * @param {Object} raw
     * @param {string} [dataStatus="demo"] 'live' | 'cached' | 'demo' | 'unavailable'
     * @returns {Object} Normalized Mandi Price Record
     */
    static normalizeMandiRecord(raw, dataStatus = DATA_STATUS.DEMO) {
        // Agmarknet prices are in ₹/quintal (1 quintal = 100 kg); normalize to ₹/kg
        let modalKg = 0;
        let minKg = 0;
        let maxKg = 0;

        if (raw.modal_price !== undefined) {
            modalKg = Number((Number(raw.modal_price) / 100).toFixed(2));
            minKg = Number((Number(raw.min_price || raw.modal_price) / 100).toFixed(2));
            maxKg = Number((Number(raw.max_price || raw.modal_price) / 100).toFixed(2));
        } else {
            modalKg = Number(raw.modalPricePerKg || 30.0);
            minKg = Number(raw.minPricePerKg || modalKg * 0.85);
            maxKg = Number(raw.maxPricePerKg || modalKg * 1.15);
        }

        const dateStr = raw.arrival_date || raw.lastUpdated || new Date().toISOString().split('T')[0];
        const freshness = this.getDataFreshness(raw.lastUpdated || raw.arrival_date, dataStatus);

        return {
            commodity: raw.commodity || raw.cropType || "Tomato",
            variety: raw.variety || "Standard Hybrid",
            market: raw.market || raw.mandiName || "APMC Mandi",
            district: raw.district || "Nashik",
            state: raw.state || "Maharashtra",
            date: dateStr,
            minPricePerKg: minKg,
            maxPricePerKg: maxKg,
            modalPricePerKg: modalKg,
            arrivalVolumeTons: Number(raw.arrivalVolumeTons || (raw.arrivals_in_qtl ? (Number(raw.arrivals_in_qtl) / 10) : 150)),
            source: dataStatus === DATA_STATUS.LIVE ? "Open Government Data (Agmarknet API)" :
                    dataStatus === DATA_STATUS.CACHED ? "Firestore Mandi Cache (Agmarknet Synced)" : "KisanTrust APMC Benchmark",
            lastUpdated: raw.lastUpdated || new Date().toISOString(),
            dataStatus: dataStatus,
            dataStatusLabel: DATA_STATUS_LABELS[dataStatus] || DATA_STATUS_LABELS[DATA_STATUS.DEMO],
            freshness: freshness
        };
    }

    /**
     * Fetches Mandi Prices for a commodity with resilient fallback hierarchy:
     * 1. Live Agmarknet/OGD API (if API Key configured and online)
     * 2. Firestore Mandi Cache (if cached within 24h)
     * 3. Structured Authentic Demo Benchmarks (explicitly labeled as 'demo')
     * 
     * @param {string} commodity e.g. "Tomato", "Onion", "Potato"
     * @param {string} [state="Maharashtra"]
     * @param {string} [district="Nashik"]
     * @returns {Promise<Array<Object>>} List of normalized market records
     */
    static async fetchMandiPrices(commodity = "Tomato", state = "Maharashtra", district = "Nashik") {
        await firebaseService.initializeData();
        const normalizedCrop = commodity.trim().toLowerCase();

        // 1. Check for Configured API Key
        const apiKey = this.getApiKey();

        if (apiKey) {
            try {
                const url = `${this.API_BASE_URL}/${this.AGMARKNET_RESOURCE_ID}?api-key=${apiKey}&format=json&offset=0&limit=25&filters[state]=${encodeURIComponent(state)}&filters[commodity]=${encodeURIComponent(commodity)}`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    if (data.records && data.records.length > 0) {
                        const normalizedList = data.records.map(r => this.normalizeMandiRecord(r, DATA_STATUS.LIVE));
                        // Update Firestore Cache in background
                        await this._cacheMandiPrices(normalizedCrop, normalizedList);
                        return normalizedList;
                    }
                }
            } catch (err) {
                console.warn("[MarketDataService] Live API fetch failed, falling back to cache/demo:", err.message);
            }
        }

        // 2. Check Firestore Cache
        try {
            const cacheDoc = await (await firebaseService.db.collection('mandiPricesCache')).doc(normalizedCrop).get();
            if (cacheDoc.exists) {
                const cacheData = cacheDoc.data();
                // Cache valid if within 24 hours
                const ageMs = Date.now() - new Date(cacheData.cachedAt).getTime();
                if (ageMs < 24 * 60 * 60 * 1000 && cacheData.records && cacheData.records.length > 0) {
                    return cacheData.records.map(r => this.normalizeMandiRecord(r, DATA_STATUS.CACHED));
                }
            }
        } catch (e) {
            console.warn("[MarketDataService] Cache lookup error:", e.message);
        }

        // 3. Structured Authentic Demo Fallback
        const demoBenchmarks = mockMandiBenchmarks.filter(m => 
            m.cropType.toLowerCase() === normalizedCrop || normalizedCrop === "all"
        );

        const listToReturn = demoBenchmarks.length > 0 ? demoBenchmarks : mockMandiBenchmarks;
        return listToReturn.map(m => this.normalizeMandiRecord(m, DATA_STATUS.DEMO));
    }

    /**
     * Filters a list of normalized mandi records by user criteria
     * @param {Array<Object>} records
     * @param {Object} filters
     * @param {string} [filters.commodity]
     * @param {string} [filters.variety]
     * @param {string} [filters.state]
     * @param {string} [filters.district]
     * @param {string} [filters.market]
     * @returns {Array<Object>} Filtered mandi records
     */
    static filterMandiRecords(records = [], filters = {}) {
        if (!Array.isArray(records)) return [];

        return records.filter(r => {
            if (filters.commodity && filters.commodity !== 'All') {
                if (!r.commodity.toLowerCase().includes(filters.commodity.toLowerCase())) return false;
            }
            if (filters.variety && filters.variety !== 'All') {
                if (!r.variety.toLowerCase().includes(filters.variety.toLowerCase())) return false;
            }
            if (filters.state && filters.state !== 'All') {
                if (r.state.toLowerCase() !== filters.state.toLowerCase()) return false;
            }
            if (filters.district && filters.district !== 'All') {
                if (!r.district.toLowerCase().includes(filters.district.toLowerCase())) return false;
            }
            if (filters.market && filters.market !== 'All') {
                if (!r.market.toLowerCase().includes(filters.market.toLowerCase())) return false;
            }
            return true;
        });
    }

    /**
     * Writes live/refreshed prices to Firestore cache
     */
    static async _cacheMandiPrices(commodityKey, records) {
        try {
            await (await firebaseService.db.collection('mandiPricesCache')).doc(commodityKey).set({
                commodity: commodityKey,
                cachedAt: new Date().toISOString(),
                records: records
            });
        } catch (e) {
            console.warn("[MarketDataService] Failed to write cache:", e.message);
        }
    }
}
