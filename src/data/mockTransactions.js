/**
 * KisanTrust - Seed Transactions Data
 * Realistic seed transactions at different lifecycle stages.
 */

export const mockTransactions = [
  {
    transactionId: "TXN-2026-981042",
    lotId: "LOT-2026-089101",
    farmerId: "farmer_mh_001",
    farmerName: "Ramesh Patil",
    buyerId: "buyer_sahyadri",
    buyerName: "Sahyadri",
    cropType: "Tomato",
    variety: "Himsona",
    quantityKg: 500,
    agreedPricePerKg: 37.50,
    totalAmount: 18750,
    currentStage: "PICKUP_SCHEDULED",
    paymentStatus: "ESCROW_LOCKED",
    escrowAmount: 18750,
    timeline: [
      { stage: "OFFER_ACCEPTED", timestamp: "2026-09-01T10:00:00Z", notes: "Offer accepted by farmer" },
      { stage: "ESCROW_LOCKED", timestamp: "2026-09-01T11:30:00Z", notes: "Buyer locked funds in escrow" },
      { stage: "PICKUP_SCHEDULED", timestamp: "2026-09-01T14:00:00Z", notes: "Pickup scheduled for 2026-09-03" }
    ],
    logisticsInfo: {
      vehicle: "MH-15-AB-1234",
      driver: "Raju",
      route: "Farm to Niphad Hub"
    },
    createdAt: "2026-09-01T10:00:00Z",
    updatedAt: "2026-09-01T14:00:00Z"
  },
  {
    transactionId: "TXN-2026-981043",
    lotId: "LOT-2026-089102",
    farmerId: "farmer_mh_001",
    farmerName: "Ramesh Patil",
    buyerId: "buyer_vashi_traders",
    buyerName: "Vashi Fresh",
    cropType: "Onion",
    variety: "Nashik Red",
    quantityKg: 2500,
    agreedPricePerKg: 30.50,
    totalAmount: 76250,
    currentStage: "IN_TRANSIT",
    paymentStatus: "ESCROW_LOCKED",
    escrowAmount: 76250,
    timeline: [
      { stage: "OFFER_ACCEPTED", timestamp: "2026-09-01T09:00:00Z", notes: "Offer accepted" },
      { stage: "ESCROW_LOCKED", timestamp: "2026-09-01T10:00:00Z", notes: "Escrow locked" },
      { stage: "PICKUP_SCHEDULED", timestamp: "2026-09-01T12:00:00Z", notes: "Pickup scheduled" },
      { stage: "IN_TRANSIT", timestamp: "2026-09-02T08:00:00Z", notes: "Pickup completed, in transit. Expected delivery 2026-09-03" }
    ],
    logisticsInfo: {
      vehicle: "MH-15-BT-4521",
      driver: "Manoj Shirke",
      route: "Nashik to Vashi"
    },
    createdAt: "2026-09-01T09:00:00Z",
    updatedAt: "2026-09-02T08:00:00Z"
  },
  {
    transactionId: "TXN-2026-981044",
    lotId: "LOT-2026-089103",
    farmerId: "farmer_pune_002",
    farmerName: "Sunil Jadhav",
    buyerId: "buyer_reliance",
    buyerName: "Reliance Retail",
    cropType: "Potato",
    variety: "Kufri Pukhraj",
    quantityKg: 800,
    agreedPricePerKg: 24.00,
    totalAmount: 19200,
    currentStage: "QC_VERIFIED",
    paymentStatus: "PAYMENT_PROCESSING",
    escrowAmount: 19200,
    timeline: [
      { stage: "DELIVERED", timestamp: "2026-09-02T10:00:00Z", notes: "Delivered to buyer hub" },
      { stage: "QC_VERIFIED", timestamp: "2026-09-02T12:00:00Z", notes: "QC passed, payment processing" }
    ],
    logisticsInfo: {
      vehicle: "MH-12-PQ-9988",
      driver: "Suresh",
      route: "Junnar to Pune Hub"
    },
    createdAt: "2026-08-30T09:00:00Z",
    updatedAt: "2026-09-02T12:00:00Z"
  },
  {
    transactionId: "TXN-2026-981045",
    lotId: "LOT-2026-089106",
    farmerId: "farmer_mh_001",
    farmerName: "Ramesh Patil",
    buyerId: "buyer_taj_hotels",
    buyerName: "Taj Culinary",
    cropType: "Tomato",
    variety: "Cherry",
    quantityKg: 200,
    agreedPricePerKg: 42.00,
    totalAmount: 8400,
    currentStage: "COMPLETED",
    paymentStatus: "PAYMENT_SETTLED",
    escrowAmount: 8400,
    timeline: [
      { stage: "DELIVERED", timestamp: "2026-08-30T10:00:00Z", notes: "Delivered to hotel" },
      { stage: "QC_VERIFIED", timestamp: "2026-08-30T11:00:00Z", notes: "Accepted" },
      { stage: "PAYMENT_SETTLED", timestamp: "2026-08-31T09:00:00Z", notes: "Settlement completed" },
      { stage: "COMPLETED", timestamp: "2026-08-31T09:30:00Z", notes: "Fully completed with mutual 5-star ratings" }
    ],
    logisticsInfo: {
      vehicle: "MH-15-XY-7766",
      driver: "Amit",
      route: "Nashik to Mumbai"
    },
    createdAt: "2026-08-28T09:00:00Z",
    updatedAt: "2026-08-31T09:30:00Z"
  }
];

export const initialMockTransactions = mockTransactions;
