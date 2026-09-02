/**
 * KisanTrust - Structured Mandi Benchmarks, Buyer Demands, and Pooling Clusters
 * Provides realistic data across Maharashtra and national APMCs.
 */

export const mockMandiBenchmarks = [
    {
        mandiId: "mandi_lasalgaon",
        mandiName: "Lasalgaon APMC",
        district: "Nashik",
        state: "Maharashtra",
        cropType: "Onion",
        variety: "Red Onion",
        modalPricePerKg: 29.5,
        minPricePerKg: 24.0,
        maxPricePerKg: 33.0,
        arrivalVolumeTons: 450,
        priceTrend: "RISING",
        distanceFromFarmerKm: 28,
        estimatedLogisticsCostPerKg: 0.8,
        lastUpdated: "2026-08-30T06:00:00Z"
    },
    {
        mandiId: "mandi_pune",
        mandiName: "Pune APMC (Gultekdi)",
        district: "Pune",
        state: "Maharashtra",
        cropType: "Tomato",
        variety: "Hybrid",
        modalPricePerKg: 35.0,
        minPricePerKg: 28.0,
        maxPricePerKg: 38.5,
        arrivalVolumeTons: 160,
        priceTrend: "STABLE",
        distanceFromFarmerKm: 165,
        estimatedLogisticsCostPerKg: 2.2,
        lastUpdated: "2026-08-30T06:30:00Z"
    },
    {
        mandiId: "mandi_vashi",
        mandiName: "Vashi APMC (Navi Mumbai)",
        district: "Thane / Mumbai",
        state: "Maharashtra",
        cropType: "Tomato",
        variety: "Hybrid / Table Grade",
        modalPricePerKg: 38.0,
        minPricePerKg: 32.0,
        maxPricePerKg: 42.0,
        arrivalVolumeTons: 310,
        priceTrend: "RISING",
        distanceFromFarmerKm: 185,
        estimatedLogisticsCostPerKg: 2.6,
        lastUpdated: "2026-08-30T07:00:00Z"
    },
    {
        mandiId: "mandi_pimpalgaon",
        mandiName: "Pimpalgaon Baswant APMC",
        district: "Nashik",
        state: "Maharashtra",
        cropType: "Tomato",
        variety: "Himsona",
        modalPricePerKg: 34.0,
        minPricePerKg: 29.0,
        maxPricePerKg: 36.5,
        arrivalVolumeTons: 220,
        priceTrend: "STABLE",
        distanceFromFarmerKm: 18,
        estimatedLogisticsCostPerKg: 0.6,
        lastUpdated: "2026-08-30T06:15:00Z"
    },
    {
        mandiId: "mandi_ahmednagar",
        mandiName: "Ahmednagar APMC",
        district: "Ahmednagar",
        state: "Maharashtra",
        cropType: "Potato",
        variety: "All",
        modalPricePerKg: 23.5,
        minPricePerKg: 20.0,
        maxPricePerKg: 26.0,
        arrivalVolumeTons: 180,
        priceTrend: "STABLE",
        distanceFromFarmerKm: 120,
        estimatedLogisticsCostPerKg: 1.5,
        lastUpdated: "2026-09-02T06:00:00Z"
    },
    {
        mandiId: "mandi_latur",
        mandiName: "Latur APMC",
        district: "Latur",
        state: "Maharashtra",
        cropType: "Onion",
        variety: "All",
        modalPricePerKg: 27.0,
        minPricePerKg: 22.0,
        maxPricePerKg: 30.0,
        arrivalVolumeTons: 280,
        priceTrend: "FALLING",
        distanceFromFarmerKm: 380,
        estimatedLogisticsCostPerKg: 3.5,
        lastUpdated: "2026-09-02T06:30:00Z"
    }
];

export const mockBuyerDemands = [
    {
        demandId: "DEM-9081",
        buyerId: "buyer_sahyadri",
        buyerName: "Sahyadri Farmer Producer Co.",
        companyType: "FPO / Processor",
        verifiedBuyer: true,
        requiredCrop: "Tomato",
        requiredVariety: "Himsona / Hybrid",
        requiredGrade: "Grade A",
        targetQuantityKg: 10000,
        fulfilledQuantityKg: 6500,
        offeredPricePerKg: 37.0,
        paymentTerms: "Direct Bank Transfer within 24h",
        pickupLocation: "Niphad Hub / Farm Gate",
        status: "ACTIVE",
        createdAt: "2026-08-28T08:00:00Z"
    },
    {
        demandId: "DEM-9082",
        buyerId: "buyer_reliance",
        buyerName: "Reliance Retail Fresh Hub",
        companyType: "Organized Retailer",
        verifiedBuyer: true,
        requiredCrop: "Onion",
        requiredVariety: "Nashik Red",
        requiredGrade: "Grade A",
        targetQuantityKg: 25000,
        fulfilledQuantityKg: 12000,
        offeredPricePerKg: 31.5,
        paymentTerms: "T+1 Day Direct Settlement",
        pickupLocation: "Lasalgaon Collection Center",
        status: "ACTIVE",
        createdAt: "2026-08-29T11:00:00Z"
    },
    {
        demandId: "DEM-9083",
        buyerId: "buyer_mumbai_direct",
        buyerName: "Vashi Fresh Traders Group",
        companyType: "Wholesale Aggregator",
        verifiedBuyer: true,
        requiredCrop: "Tomato",
        requiredGrade: "Grade A / B",
        targetQuantityKg: 8000,
        fulfilledQuantityKg: 3000,
        offeredPricePerKg: 36.5,
        paymentTerms: "Immediate Digital Escrow on Dispatch",
        pickupLocation: "Vashi Terminal Hub",
        status: "ACTIVE",
        createdAt: "2026-08-30T05:30:00Z"
    }
];

export const mockPoolingClusters = [
    {
        clusterId: "POOL-MH-042",
        hubVillage: "Niphad Taluka Hub",
        district: "Nashik",
        cropType: "Tomato",
        destinationMarket: "Vashi APMC (Navi Mumbai)",
        targetCapacityKg: 10000,
        currentPooledKg: 7500,
        participatingFarmersCount: 9,
        departureDate: "Tomorrow, 06:00 PM",
        individualFreightPerKg: 3.8,
        pooledFreightPerKg: 1.6,
        savingsPercentage: 57.9,
        status: "OPEN_FOR_JOINING"
    },
    {
        clusterId: "POOL-MH-043",
        hubVillage: "Pimpalgaon Baswant Hub",
        district: "Nashik",
        cropType: "Onion",
        destinationMarket: "Pune Market Yard",
        targetCapacityKg: 15000,
        currentPooledKg: 11000,
        participatingFarmersCount: 6,
        departureDate: "In 2 Days, 08:00 AM",
        individualFreightPerKg: 2.9,
        pooledFreightPerKg: 1.2,
        savingsPercentage: 58.6,
        status: "OPEN_FOR_JOINING"
    },
    {
        clusterId: "POOL-MH-044",
        hubVillage: "Sinnar Hub",
        district: "Nashik",
        cropType: "Cabbage, Potato",
        destinationMarket: "Ahmednagar APMC",
        targetCapacityKg: 10000,
        currentPooledKg: 3200,
        participatingFarmersCount: 3,
        departureDate: "In 3 Days, 05:00 AM",
        individualFreightPerKg: 2.5,
        pooledFreightPerKg: 1.19,
        savingsPercentage: 52.3,
        status: "OPEN_FOR_JOINING"
    }
];
