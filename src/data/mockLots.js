/**
 * AgriLink - Initial Seed Active Agricultural Lots
 */
export const initialMockLots = [
    {
        lotId: "LOT-2026-089101",
        farmerId: "farmer_mh_001",
        farmerName: "Ramesh Patil (रमेश पाटील)",
        farmerLocation: {
            district: "Nashik",
            taluka: "Niphad",
            state: "Maharashtra",
            pincode: "422303"
        },
        cropType: "Tomato",
        variety: "Himsona (Hybrid)",
        quantity: 500,
        unit: "kg",
        harvestDate: "2026-08-29",
        expectedSellingDate: "2026-08-31",
        imageReferences: [
            "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1546470427-e26264be0b11?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-29T10:30:00Z",
            visualGrade: "Grade A",
            colorScore: 94,
            sizeUniformity: "Uniform Medium",
            surfaceDefectsPercent: 3.2,
            description: "Deep red ripening, firm texture, minimal skin blemishes."
        },
        internalQualityAnalysis: {
            cutVerified: true,
            internalFreshness: "Optimal Firmness",
            moistureContent: "92% Standard",
            coreDefectsPercent: 0,
            cutImageUrl: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=600&auto=format&fit=crop&q=80"
        },
        overallQualityGrade: "Grade A",
        freshnessScore: 93,
        estimatedShelfLifeDays: 8,
        pricingEstimate: {
            baseMarketPrice: 34.0,
            qualityPremium: 3.5,
            demandPremium: 1.0,
            transportCost: 2.2,
            storageCost: 0.3,
            estimatedNetRealization: 36.0
        },
        status: "LISTED",
        createdAt: "2026-08-29T10:35:00Z",
        updatedAt: "2026-08-29T10:35:00Z"
    },
    {
        lotId: "LOT-2026-089102",
        farmerId: "farmer_mh_001",
        farmerName: "Ramesh Patil (रमेश पाटील)",
        farmerLocation: {
            district: "Nashik",
            taluka: "Niphad",
            state: "Maharashtra",
            pincode: "422303"
        },
        cropType: "Onion",
        variety: "Nashik Red (Garva)",
        quantity: 2500,
        unit: "kg",
        harvestDate: "2026-08-25",
        expectedSellingDate: "2026-09-05",
        imageReferences: [
            "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-26T14:15:00Z",
            visualGrade: "Grade A",
            colorScore: 91,
            sizeUniformity: "55mm+ Export Quality",
            surfaceDefectsPercent: 2.0,
            description: "Well-cured skin, tight necks, zero sprouting."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade A",
        freshnessScore: 95,
        estimatedShelfLifeDays: 45,
        pricingEstimate: {
            baseMarketPrice: 28.0,
            qualityPremium: 2.5,
            demandPremium: 1.5,
            transportCost: 1.8,
            storageCost: 0.2,
            estimatedNetRealization: 30.0
        },
        status: "MATCHED",
        createdAt: "2026-08-26T14:20:00Z",
        updatedAt: "2026-08-28T09:00:00Z"
    },
    {
        lotId: "LOT-2026-089103",
        farmerId: "farmer_pune_002",
        farmerName: "Sunil Jadhav",
        farmerLocation: {
            district: "Pune",
            taluka: "Junnar",
            state: "Maharashtra",
            pincode: "410502"
        },
        cropType: "Potato",
        variety: "Kufri Pukhraj",
        quantity: 800,
        unit: "kg",
        harvestDate: "2026-08-28",
        expectedSellingDate: "2026-09-05",
        imageReferences: [
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-29T10:00:00Z",
            visualGrade: "Grade B",
            colorScore: 85,
            sizeUniformity: "Medium",
            surfaceDefectsPercent: 5.0,
            description: "Good texture, some variations in size."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade B",
        freshnessScore: 82,
        estimatedShelfLifeDays: 20,
        pricingEstimate: {
            baseMarketPrice: 22.0,
            qualityPremium: 0,
            demandPremium: 3.0,
            transportCost: 1.0,
            storageCost: 0.2,
            estimatedNetRealization: 23.8
        },
        status: "LISTED",
        createdAt: "2026-08-29T10:00:00Z",
        updatedAt: "2026-08-29T10:00:00Z"
    },
    {
        lotId: "LOT-2026-089104",
        farmerId: "farmer_mh_001",
        farmerName: "Ramesh Patil",
        farmerLocation: {
            district: "Nashik",
            taluka: "Niphad",
            state: "Maharashtra",
            pincode: "422303"
        },
        cropType: "Carrot",
        variety: "Nantes",
        quantity: 300,
        unit: "kg",
        harvestDate: "2026-08-30",
        expectedSellingDate: "2026-09-02",
        imageReferences: [
            "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-31T09:00:00Z",
            visualGrade: "Grade A",
            colorScore: 92,
            sizeUniformity: "Uniform Long",
            surfaceDefectsPercent: 1.5,
            description: "Bright orange, straight, clean."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade A",
        freshnessScore: 91,
        estimatedShelfLifeDays: 12,
        pricingEstimate: {
            baseMarketPrice: 26.0,
            qualityPremium: 4.0,
            demandPremium: 0.0,
            transportCost: 1.2,
            storageCost: 0.3,
            estimatedNetRealization: 28.5
        },
        status: "APPROVED",
        createdAt: "2026-08-31T09:30:00Z",
        updatedAt: "2026-08-31T09:30:00Z"
    },
    {
        lotId: "LOT-2026-089105",
        farmerId: "farmer_nashik_003",
        farmerName: "Anita Shinde",
        farmerLocation: {
            district: "Nashik",
            taluka: "Sinnar",
            state: "Maharashtra",
            pincode: "422103"
        },
        cropType: "Cabbage",
        variety: "NS-25 Cross",
        quantity: 1200,
        unit: "kg",
        harvestDate: "2026-08-27",
        expectedSellingDate: "2026-09-01",
        imageReferences: [
            "https://images.unsplash.com/photo-1596199050105-6d5d32222916?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-28T10:00:00Z",
            visualGrade: "Grade C",
            colorScore: 70,
            sizeUniformity: "Mixed",
            surfaceDefectsPercent: 12.0,
            description: "Some outer leaf damage, varied sizes."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade C",
        freshnessScore: 68,
        estimatedShelfLifeDays: 5,
        pricingEstimate: {
            baseMarketPrice: 16.0,
            qualityPremium: -1.0,
            demandPremium: 0.5,
            transportCost: 1.0,
            storageCost: 0.3,
            estimatedNetRealization: 14.2
        },
        status: "PENDING_ADMIN_REVIEW",
        createdAt: "2026-08-28T10:00:00Z",
        updatedAt: "2026-08-28T10:00:00Z"
    },
    {
        lotId: "LOT-2026-089106",
        farmerId: "farmer_mh_001",
        farmerName: "Ramesh Patil",
        farmerLocation: {
            district: "Nashik",
            taluka: "Niphad",
            state: "Maharashtra",
            pincode: "422303"
        },
        cropType: "Tomato",
        variety: "Cherry/Salad",
        quantity: 200,
        unit: "kg",
        harvestDate: "2026-08-26",
        expectedSellingDate: "2026-08-29",
        imageReferences: [
            "https://images.unsplash.com/photo-1524593166156-312f362cada0?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-27T08:00:00Z",
            visualGrade: "Grade A",
            colorScore: 98,
            sizeUniformity: "Uniform Small",
            surfaceDefectsPercent: 0.5,
            description: "Excellent red cherry tomatoes, very firm."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade A",
        freshnessScore: 96,
        estimatedShelfLifeDays: 6,
        pricingEstimate: {
            baseMarketPrice: 40.0,
            qualityPremium: 4.0,
            demandPremium: 1.0,
            transportCost: 2.5,
            storageCost: 1.0,
            estimatedNetRealization: 41.5
        },
        status: "SOLD",
        createdAt: "2026-08-27T08:30:00Z",
        updatedAt: "2026-08-29T10:00:00Z"
    },
    {
        lotId: "LOT-2026-089107",
        farmerId: "farmer_pune_002",
        farmerName: "Sunil Jadhav",
        farmerLocation: {
            district: "Pune",
            taluka: "Junnar",
            state: "Maharashtra",
            pincode: "410502"
        },
        cropType: "Onion",
        variety: "Nashik Red",
        quantity: 3000,
        unit: "kg",
        harvestDate: "2026-08-15",
        expectedSellingDate: "2026-08-30",
        imageReferences: [
            "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-08-16T11:00:00Z",
            visualGrade: "Grade B",
            colorScore: 80,
            sizeUniformity: "Medium",
            surfaceDefectsPercent: 8.0,
            description: "Good curing, but starting to show age."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade B",
        freshnessScore: 55,
        estimatedShelfLifeDays: 0,
        pricingEstimate: {
            baseMarketPrice: 24.0,
            qualityPremium: 0,
            demandPremium: 0,
            transportCost: 2.0,
            storageCost: 1.0,
            estimatedNetRealization: 21.0
        },
        status: "EXPIRED",
        createdAt: "2026-08-16T11:00:00Z",
        updatedAt: "2026-09-01T00:00:00Z"
    },
    {
        lotId: "LOT-2026-089108",
        farmerId: "farmer_nashik_004",
        farmerName: "Priya Kamble",
        farmerLocation: {
            district: "Nashik",
            taluka: "Igatpuri",
            state: "Maharashtra",
            pincode: "422402"
        },
        cropType: "Potato",
        variety: "Kufri Jyoti",
        quantity: 50,
        unit: "kg",
        harvestDate: "2026-09-01",
        expectedSellingDate: "2026-09-10",
        imageReferences: [
            "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80"
        ],
        externalQualityAnalysis: {
            analyzedAt: "2026-09-02T09:00:00Z",
            visualGrade: "Grade A",
            colorScore: 90,
            sizeUniformity: "Uniform Medium",
            surfaceDefectsPercent: 2.0,
            description: "Fresh harvest, clean skin."
        },
        internalQualityAnalysis: null,
        overallQualityGrade: "Grade A",
        freshnessScore: 97,
        estimatedShelfLifeDays: 25,
        pricingEstimate: {
            baseMarketPrice: 24.0,
            qualityPremium: 3.0,
            demandPremium: 0.0,
            transportCost: 1.0,
            storageCost: 0.4,
            estimatedNetRealization: 25.6
        },
        status: "ACTIVE",
        createdAt: "2026-09-02T09:30:00Z",
        updatedAt: "2026-09-02T09:30:00Z"
    }
];
