/**
 * AgriLink - Structured Agricultural Knowledge Base (Stage 4)
 * Grounded in verified datasets from ICAR (Indian Council of Agricultural Research),
 * NHB (National Horticulture Board), and APEDA standards.
 */

export const CROP_KNOWLEDGE_BASE = {
    "Tomato": {
        cropName: "Tomato (टोमॅटो / टमाटर)",
        scientificName: "Solanum lycopersicum",
        category: "Vegetable / Solanaceous",
        varietyList: ["Himsona", "Abhinav", "Syngenta 1057", "Vaishnavi", "Pusa Ruby", "Local Hybrid"],
        typicalShelfLifeDays: 8,
        optimalTempCelsius: { min: 12, max: 18 },
        optimalHumidityPercent: { min: 85, max: 90 },
        storageGuidance: "Do not refrigerate under 10°C as chilling injury occurs. Store in shaded, ventilated crates with ethylene dispersion.",
        spoilageFactors: ["Firmness loss / skin softening", "Post-harvest fungal rot (Alternaria)", "Bruising during transit"],
        qualityGradingCriteria: {
            "Grade A": "Uniform red/orange color, firm calyx intact, zero blemish, size 45-65mm, firmness > 3.5 kg/cm²",
            "Grade B": "Slight color variation, minor surface rub, size 35-45mm, firmness 2.5-3.5 kg/cm²",
            "Grade C": "Soft/over-ripe, slight cracks, size < 35mm, suitable for immediate sauce/paste processing"
        },
        seasonality: { peakMonths: ["Jan", "Feb", "Aug", "Sep", "Oct"], leanMonths: ["May", "Jun"] },
        majorMahaMarkets: ["Pimpalgaon Baswant", "Nashik APMC", "Pune Gultekdi", "Vashi Terminal"],
        sourceMetadata: {
            authority: "ICAR - Indian Institute of Vegetable Research & NHB Post-Harvest Guidelines",
            lastVerifiedYear: 2025
        }
    },

    "Onion": {
        cropName: "Onion (कांदा / प्याज)",
        scientificName: "Allium cepa",
        category: "Bulb Vegetable",
        varietyList: ["Nashik Red (Garva)", "Bhima Super", "Bhima Dark Red", "Phule Samarth", "AgriFound Light Red"],
        typicalShelfLifeDays: 45, // In ventilated Kanda Chawl
        optimalTempCelsius: { min: 25, max: 30 },
        optimalHumidityPercent: { min: 65, max: 70 },
        storageGuidance: "Store in elevated well-ventilated traditional Kanda Chawl. Keep humidity below 70% to prevent fungal neck rot and pre-sprouting.",
        spoilageFactors: ["High ambient moisture leading to black mould (Aspergillus niger)", "Sprouting due to humidity spike", "Bulb rotting"],
        qualityGradingCriteria: {
            "Grade A": "Diameter 50-70mm, tight papery outer skin (2+ layers), dry thin neck, zero sprouting",
            "Grade B": "Diameter 35-50mm, medium skin adherence, dry neck",
            "Grade C": "Diameter < 35mm (Golta/Golti) or double bulbs, thick wet neck"
        },
        seasonality: { peakMonths: ["Mar", "Apr", "May", "Dec"], leanMonths: ["Aug", "Sep", "Oct"] },
        majorMahaMarkets: ["Lasalgaon APMC (Asia's Largest)", "Pimpalgaon", "Yeola", "Pune", "Solapur"],
        sourceMetadata: {
            authority: "ICAR - Directorate of Onion and Garlic Research (DOGR), Rajgurunagar, Pune",
            lastVerifiedYear: 2025
        }
    },

    "Potato": {
        cropName: "Potato (बटाटा / आलू)",
        scientificName: "Solanum tuberosum",
        category: "Tuber Vegetable",
        varietyList: ["Kufri Jyoti", "Kufri Pukhraj", "Kufri Chipsona (Processing)", "Kufri Lauvkar", "Lady Rosetta"],
        typicalShelfLifeDays: 30,
        optimalTempCelsius: { min: 10, max: 14 },
        optimalHumidityPercent: { min: 85, max: 90 },
        storageGuidance: "Store in dark, cool conditions to prevent greening (solanine toxicity). Processing potatoes require 8-10°C to avoid reducing sugar accumulation.",
        spoilageFactors: ["Greening due to light exposure", "Tuber moth infestation", "Sprouting"],
        qualityGradingCriteria: {
            "Grade A": "Oval/round uniform shape, shallow eyes, zero cuts/greening, size > 45mm",
            "Grade B": "Minor skin scarring, size 30-45mm",
            "Grade C": "Small tubers (< 30mm), irregular shape, slight cuts"
        },
        seasonality: { peakMonths: ["Jan", "Feb", "Mar"], leanMonths: ["Jul", "Aug"] },
        majorMahaMarkets: ["Pune APMC", "Manchar", "Vashi", "Kolhapur"],
        sourceMetadata: {
            authority: "ICAR - Central Potato Research Institute (CPRI), Shimla",
            lastVerifiedYear: 2025
        }
    },

    "Carrot": {
        cropName: "Carrot (गाजर)",
        scientificName: "Daucus carota",
        category: "Root Vegetable",
        varietyList: ["Pusa Kesar", "Pusa Rudhira", "Kuroda Hybrid", "Super Kuroda"],
        typicalShelfLifeDays: 10,
        optimalTempCelsius: { min: 0, max: 4 },
        optimalHumidityPercent: { min: 90, max: 95 },
        storageGuidance: "Hydrocool or wash with sanitized cold water immediately after harvest. Keep roots moist to prevent wilting and pithiness.",
        spoilageFactors: ["Moisture loss leading to flaccidity", "Root cracking", "Sclerotinia white rot"],
        qualityGradingCriteria: {
            "Grade A": "Deep red/orange core, straight root > 15cm, zero bifurcation, crisp texture",
            "Grade B": "Slightly curved root 10-15cm, minor surface scars",
            "Grade C": "Forked/cracked roots, length < 10cm"
        },
        seasonality: { peakMonths: ["Nov", "Dec", "Jan", "Feb"], leanMonths: ["May", "Jun", "Jul"] },
        majorMahaMarkets: ["Pune", "Nashik", "Vashi"],
        sourceMetadata: {
            authority: "National Horticulture Board (NHB) Specification Standards",
            lastVerifiedYear: 2025
        }
    },

    "Cabbage": {
        cropName: "Cabbage (कोबी / पत्ता गोभी)",
        scientificName: "Brassica oleracea var. capitata",
        category: "Cole Crop",
        varietyList: ["Golden Acre", "Pride of India", "Green Express", "Pusa Drumhead"],
        typicalShelfLifeDays: 12,
        optimalTempCelsius: { min: 0, max: 5 },
        optimalHumidityPercent: { min: 90, max: 95 },
        storageGuidance: "Leave 2-3 outer wrapper leaves to protect the compact head from transit bruising and desiccation.",
        spoilageFactors: ["Bacterial soft rot (Pectobacterium)", "Head bursting/cracking", "Yellowing of outer leaves"],
        qualityGradingCriteria: {
            "Grade A": "Compact solid head (1.0-1.8 kg), fresh green wrapper leaves, zero insect damage",
            "Grade B": "Medium compact head (0.7-1.0 kg), slight wrapper blemish",
            "Grade C": "Loose head, weight < 0.7 kg or over 2.2 kg with split outer leaves"
        },
        seasonality: { peakMonths: ["Dec", "Jan", "Feb", "Mar"], leanMonths: ["Jul", "Aug"] },
        majorMahaMarkets: ["Pune Gultekdi", "Nashik", "Vashi", "Nagpur"],
        sourceMetadata: {
            authority: "ICAR - Indian Agricultural Research Institute (IARI)",
            lastVerifiedYear: 2025
        }
    }
};

/**
 * Service to query structured agricultural facts
 */
export class CropKnowledgeService {
    /**
     * Get crop knowledge record by commodity name
     * @param {string} cropName
     * @returns {Object|null}
     */
    static getCropInfo(cropName) {
        if (!cropName) return null;
        const normalized = Object.keys(CROP_KNOWLEDGE_BASE).find(
            k => k.toLowerCase() === cropName.trim().toLowerCase()
        );
        return normalized ? CROP_KNOWLEDGE_BASE[normalized] : null;
    }

    /**
     * Calculate spoilage risk score (0 - 100%) based on harvest date and storage conditions
     * @param {string} cropName
     * @param {number} freshnessScore
     * @param {string} harvestDate
     * @returns {{ spoilageRiskPercent: number, riskLevel: 'LOW'|'MEDIUM'|'HIGH'|'CRITICAL', safeHoldingDaysRemaining: number }}
     */
    static evaluateSpoilageRisk(cropName, freshnessScore = 90, harvestDate = new Date().toISOString().split('T')[0]) {
        const cropInfo = this.getCropInfo(cropName) || { typicalShelfLifeDays: 7 };
        const totalLife = cropInfo.typicalShelfLifeDays;

        const harvest = new Date(harvestDate);
        const today = new Date();
        const elapsedDays = Math.max(0, Math.floor((today - harvest) / (1000 * 60 * 60 * 24)));

        const safeHoldingDaysRemaining = Math.max(0, totalLife - elapsedDays);
        const lifeDepletionRatio = Math.min(1.0, elapsedDays / totalLife);
        const freshnessLoss = Math.max(0, (100 - freshnessScore) / 100);

        // Combined risk calculation
        const spoilageRiskPercent = Number(Math.min(99, ((lifeDepletionRatio * 0.6) + (freshnessLoss * 0.4)) * 100).toFixed(1));

        let riskLevel = 'LOW';
        if (spoilageRiskPercent > 70 || safeHoldingDaysRemaining <= 1) riskLevel = 'CRITICAL';
        else if (spoilageRiskPercent > 45 || safeHoldingDaysRemaining <= 3) riskLevel = 'HIGH';
        else if (spoilageRiskPercent > 25) riskLevel = 'MEDIUM';

        return {
            spoilageRiskPercent,
            riskLevel,
            safeHoldingDaysRemaining
        };
    }
}
