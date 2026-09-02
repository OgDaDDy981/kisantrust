/**
 * KisanTrust - Storage Feasibility & Post-Harvest Advisory Service (Stage 5)
 * Analyzes crop shelf-life, temperature requirements, and price forecasts to determine
 * whether immediate sale, farm ventilated storage (Kanda Chawl), or commercial cold storage is optimal.
 */

import { CropKnowledgeService } from '../data/cropKnowledge.js';

export const STORAGE_FACILITY_BENCHMARKS = [
    {
        typeId: 'FARM_VENTILATED',
        facilityType: 'On-Farm Ventilated Storage (Kanda Chawl / Raised Bamboo Platform)',
        optimalCrops: ['Onion', 'Garlic', 'Pumpkin'],
        estimatedCostPerKgMonth: 0.15,
        maxHoldingDays: 60,
        temperatureRange: '25°C - 30°C (Natural Aeration)',
        description: 'Low-cost elevated farm structures with natural cross-ventilation to prevent moisture accumulation.'
    },
    {
        typeId: 'COMMERCIAL_COLD_STORAGE',
        facilityType: 'Controlled Atmosphere Commercial Cold Storage',
        optimalCrops: ['Potato', 'Carrot', 'Cabbage', 'Grapes', 'Pomegranate', 'Tomato (Short-term)'],
        estimatedCostPerKgMonth: 0.55,
        maxHoldingDays: 90,
        temperatureRange: '2°C - 8°C (Humidity 85-90%)',
        description: 'Commercial refrigeration hubs preventing enzymatic ripening and dehydration.'
    }
];

export class StorageService {
    /**
     * Evaluates storage feasibility and provides clear actionable guidance
     * @param {Object} params
     * @param {string} params.cropType
     * @param {number} params.freshnessScore
     * @param {string} [params.harvestDate]
     * @param {number} [params.expectedPriceGainPerKg=0]
     * @returns {Object} Storage recommendation record
     */
    static evaluateStorageFeasibility({ cropType = 'Tomato', freshnessScore = 90, harvestDate, expectedPriceGainPerKg = 0 }) {
        const cropInfo = CropKnowledgeService.getCropInfo(cropType) || { typicalShelfLifeDays: 7 };
        const spoilage = CropKnowledgeService.evaluateSpoilageRisk(cropType, freshnessScore, harvestDate);

        let recommendationType = 'IMMEDIATE_SALE_PREFERRED';
        let recommendationTitle = 'तात्काळ विक्रीची शिफारस (Immediate Sale Preferred)';
        let guidanceRationale = '';
        let recommendedFacility = null;
        let estimatedHoldingCostPerKg = 0.0;

        // Decision Tree
        if (spoilage.riskLevel === 'CRITICAL' || spoilage.safeHoldingDaysRemaining <= 2) {
            recommendationType = 'IMMEDIATE_SALE_PREFERRED';
            recommendationTitle = 'तात्काळ विक्री करा - साठवणूक टाळा (Immediate Sale: High Spoilage)';
            guidanceRationale = `पिकाची सुरक्षित टिकवण क्षमता संपत आली आहे (${spoilage.safeHoldingDaysRemaining} दिवस शिल्लक). साठवणूक केल्यास वजनात घट व सडण्याचा धोका उद्भवू शकतो.`;
        } else if (cropType.toLowerCase() === 'onion' && freshnessScore >= 80) {
            recommendationType = 'VENTILATED_FARM_STORAGE_BENEFICIAL';
            recommendationTitle = 'कांदा चाळीत साठवणूक फायदेशीर (Farm Storage Beneficial)';
            recommendedFacility = STORAGE_FACILITY_BENCHMARKS.find(f => f.typeId === 'FARM_VENTILATED');
            estimatedHoldingCostPerKg = 0.30; // 2 months approx
            guidanceRationale = `कांद्याचा दर्जा उत्तम असून पारंपारिक हवेशीर कांदा चाळीत पुढील ३०-४५ दिवस साठवणूक करून भाववाढीचा फायदा घेता येऊ शकतो.`;
        } else if (expectedPriceGainPerKg >= 3.0 && (cropType.toLowerCase() === 'potato' || cropType.toLowerCase() === 'carrot')) {
            recommendationType = 'COMMERCIAL_COLD_STORAGE_RECOMMENDED';
            recommendationTitle = 'कोल्ड स्टोरेज साठवणूक फायदेशीर (Cold Storage Beneficial)';
            recommendedFacility = STORAGE_FACILITY_BENCHMARKS.find(f => f.typeId === 'COMMERCIAL_COLD_STORAGE');
            estimatedHoldingCostPerKg = 0.55;
            guidanceRationale = `अपेक्षित भाववाढ (₹${expectedPriceGainPerKg}/kg) ही साठवणूक खर्चापेक्षा (₹0.55/kg) अधिक असल्याने कोल्ड स्टोरेजचा वापर आर्थिकदृष्ट्या योग्य आहे.`;
        } else {
            recommendationType = 'IMMEDIATE_SALE_PREFERRED';
            recommendationTitle = 'तात्काळ विक्री प्राधान्य (Immediate Sale Preferred)';
            guidanceRationale = `${cropType} हे नाशवंत पीक असल्याने साठवणुकीचा खर्च व वजनघट विचारात घेता सध्या उपलब्ध सर्वोत्तम बाजारात तात्काळ विक्री करणे इष्ट ठरेल.`;
        }

        return {
            recommendationType,
            recommendationTitle,
            guidanceRationale,
            storageGuidanceText: cropInfo.storageGuidance || 'Store in cool ventilated conditions.',
            recommendedFacility,
            estimatedHoldingCostPerKg,
            safeHoldingDaysRemaining: spoilage.safeHoldingDaysRemaining,
            spoilageRiskPercent: spoilage.spoilageRiskPercent,
            disclaimer: 'Storage cost benchmarks and holding limits are technical estimations based on ICAR post-harvest guidelines.'
        };
    }
}
