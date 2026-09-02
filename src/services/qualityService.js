/**
 * KisanTrust - Quality Grading & Multimodal Produce Verification Service
 * Strictly enforces AGMARKNET & NHB commercial produce standards via Gemini Multimodal Vision.
 * Genuinely verifies claimed commodity, detects random/unrelated objects, analyzes multi-angle photos
 * and internal cross-section cut slices.
 */

import { ENV_CONFIG } from '../config/envConfig.js';

export class QualityService {
    /**
     * Extracts base64 payload from data URL, blob, or file string
     */
    static _parseImageData(imageInput) {
        if (!imageInput) return null;
        if (typeof imageInput === 'string') {
            if (imageInput.startsWith('data:')) {
                const match = imageInput.match(/^data:([^;]+);base64,(.+)$/);
                if (match) {
                    return { mimeType: match[1], data: match[2] };
                }
            }
            // If string is a mock filename or test reference
            return {
                mimeType: 'image/jpeg',
                data: Buffer.from(imageInput).toString('base64'),
                isMockRef: true,
                rawRef: imageInput
            };
        } else if (imageInput && imageInput.data) {
            return {
                mimeType: imageInput.mimeType || 'image/jpeg',
                data: imageInput.data
            };
        }
        return null;
    }

    /**
     * Analyze uploaded lot images via Gemini Multimodal Vision API
     * @param {Array} images Array of image data URLs or base64 objects
     * @param {string} cropType Claimed crop type e.g. "Tomato", "Onion", "Potato", "Carrot", "Cabbage"
     * @param {string} [language="English"] Target language for localized feedback
     * @returns {Promise<Object>} Normalized quality verification and grading report
     */
    static async assessLotQuality(images, cropType = 'Tomato', language = 'English') {
        const imageList = Array.isArray(images) ? images : (images ? [images] : []);
        const validImageParts = [];

        for (const img of imageList) {
            const parsed = this._parseImageData(img);
            if (parsed) {
                validImageParts.push(parsed);
            }
        }

        if (validImageParts.length === 0) {
            return {
                analyzedAt: new Date().toISOString(),
                isCommodityMatch: false,
                isImageClear: false,
                isQualityVerified: false,
                detectedProduce: 'None',
                confidenceScore: 0,
                overallGrade: null,
                visualGrade: null,
                freshnessScore: 0,
                rejectionReason: 'No valid harvest images provided for inspection. Please upload clear photos of your crop.',
                source: 'VALIDATION_FAILED'
            };
        }

        // 1. Try calling Backend / Netlify Serverless API endpoint
        if (typeof fetch !== 'undefined') {
            try {
                const apiUrl = '/api/gemini-vision';
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        images: validImageParts,
                        cropType,
                        language,
                        verificationType: 'exterior'
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data && typeof data.isCommodityMatch !== 'undefined') {
                        return data;
                    }
                }
            } catch (err) {
                // Fetch failed or running in standalone Node test environment
            }
        }

        // 2. Direct Node.js handler fallback (for local unit tests or offline environments)
        if (typeof process !== 'undefined' && process.env && (process.env.GEMINI_API_KEY || validImageParts.some(p => p.isMockRef))) {
            try {
                const { handler } = await import('../../netlify/functions/gemini-vision.js');
                const event = {
                    httpMethod: 'POST',
                    body: JSON.stringify({
                        images: validImageParts,
                        cropType,
                        language,
                        verificationType: 'exterior'
                    })
                };
                const result = await handler(event, {});
                if (result.statusCode === 200 && result.body) {
                    return JSON.parse(result.body);
                }
            } catch (nodeErr) {
                console.warn('[QualityService] Direct Node execution failed:', nodeErr.message);
            }
        }

        // 3. If no server or API key is accessible, return honest unverified error rather than false Grade A!
        return {
            analyzedAt: new Date().toISOString(),
            isCommodityMatch: false,
            isImageClear: false,
            isQualityVerified: false,
            detectedProduce: 'Unverified (Offline)',
            confidenceScore: 0,
            overallGrade: null,
            visualGrade: null,
            freshnessScore: 0,
            rejectionReason: 'AI verification service is currently offline or unreachable. Please check your internet connection or verify GEMINI_API_KEY in settings.',
            source: 'SERVICE_UNAVAILABLE'
        };
    }

    /**
     * Assess internal cross-section cut slice verification
     * @param {string} cutImageDataUrl Base64 data URL of the cut slice photo
     * @param {string} cropType Claimed crop type e.g. "Tomato", "Potato", "Onion"
     * @param {string} [language="English"]
     * @returns {Promise<Object>} Internal verification metrics
     */
    static async assessCutVerification(cutImageDataUrl, cropType = 'Tomato', language = 'English') {
        const parsedImage = this._parseImageData(cutImageDataUrl);
        if (!parsedImage) {
            return {
                cutVerified: false,
                isCommodityMatch: false,
                isImageClear: false,
                rejectionReason: 'No cut image provided. Please slice one vegetable in half and take a clear photo.',
                internalFreshness: 'Unverified',
                moistureContent: 'N/A',
                coreDefectsPercent: 0,
                statusNotes: 'No cut slice uploaded.',
                source: 'VALIDATION_FAILED'
            };
        }

        // 1. Try Backend / Netlify Serverless API endpoint
        if (typeof fetch !== 'undefined') {
            try {
                const response = await fetch('/api/gemini-vision', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        images: [parsedImage],
                        cropType,
                        language,
                        verificationType: 'cut'
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data && typeof data.cutVerified !== 'undefined') {
                        return {
                            ...data,
                            cutImageUrl: cutImageDataUrl,
                            verifiedAt: new Date().toISOString()
                        };
                    }
                }
            } catch (err) {
                // Fallback for node test environment
            }
        }

        // 2. Direct Node.js handler fallback
        if (typeof process !== 'undefined' && process.env && (process.env.GEMINI_API_KEY || parsedImage.isMockRef)) {
            try {
                const { handler } = await import('../../netlify/functions/gemini-vision.js');
                const event = {
                    httpMethod: 'POST',
                    body: JSON.stringify({
                        images: [parsedImage],
                        cropType,
                        language,
                        verificationType: 'cut'
                    })
                };
                const result = await handler(event, {});
                if (result.statusCode === 200 && result.body) {
                    const parsedResult = JSON.parse(result.body);
                    return {
                        ...parsedResult,
                        cutImageUrl: cutImageDataUrl,
                        verifiedAt: new Date().toISOString()
                    };
                }
            } catch (nodeErr) {}
        }

        // 3. Honest unverified result
        return {
            cutVerified: false,
            isCommodityMatch: false,
            isImageClear: false,
            rejectionReason: 'Internal cut verification service is currently offline or unreachable.',
            internalFreshness: 'Unverified',
            moistureContent: 'N/A',
            coreDefectsPercent: 0,
            cutImageUrl: cutImageDataUrl,
            statusNotes: 'Cut slice inspection unavailable offline.',
            source: 'SERVICE_UNAVAILABLE'
        };
    }
}
