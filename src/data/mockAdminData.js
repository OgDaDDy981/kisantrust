/**
 * KisanTrust - Admin Seed Data
 * Data for admin panel workflows.
 */

export const initialPendingFarmers = [
  {
    farmerId: "pending_f_001",
    name: "Sunita Bhosale",
    cropTypes: ["Tomato", "Onion"],
    location: "Dindori taluka, Nashik",
    landSizeAcres: 1.5,
    verificationStatus: "pending_aadhaar",
    notes: "pending Aadhaar verification"
  },
  {
    farmerId: "pending_f_002",
    name: "Ganesh Wagh",
    cropTypes: ["Potato"],
    location: "Junnar taluka, Pune",
    landSizeAcres: 3,
    verificationStatus: "documents_submitted",
    notes: "documents submitted"
  },
  {
    farmerId: "pending_f_003",
    name: "Priya Kamble",
    cropTypes: ["Cabbage", "Carrot"],
    location: "Igatpuri taluka, Nashik",
    landSizeAcres: 0.8,
    verificationStatus: "small_marginal",
    notes: "small/marginal farmer"
  }
];

export const initialPendingBuyers = [
  {
    buyerId: "pending_b_001",
    companyName: "FreshBasket Online Pvt Ltd",
    companyType: "E-commerce grocery",
    gstin: "00XXXXX0000X0XX",
    verificationStatus: "pending_fssai",
    notes: "pending FSSAI verification"
  },
  {
    buyerId: "pending_b_002",
    companyName: "Krishna Agro Exports",
    companyType: "Exporter",
    gstin: "00XXXXX0000X0XX",
    verificationStatus: "pending_trade_license",
    notes: "pending trade license"
  }
];

export const initialRiskFlags = [
  {
    flagId: "FLAG-001",
    type: "DUPLICATE_PHOTO",
    targetId: "LOT-2026-089105",
    description: "Lot LOT-2026-089105 flagged for possible reused images (60% similarity with LOT-2026-089101)",
    severity: "MEDIUM",
    createdAt: "2026-09-02T10:00:00Z"
  },
  {
    flagId: "FLAG-002",
    type: "SUSPICIOUS_PRICING",
    targetId: "DEM-2026-00103",
    description: "Buyer demand DEM-2026-00103 offering significantly above market rate (potential bait)",
    severity: "HIGH",
    createdAt: "2026-09-02T11:00:00Z"
  }
];

export const initialAuditLogs = [
  {
    logId: "AUD-001",
    action: "APPROVE_FARMER",
    performedBy: "Admin",
    targetId: "farmer_mh_001",
    description: "Admin approved farmer farmer_mh_001",
    timestamp: "2026-08-25T10:00:00Z"
  },
  {
    logId: "AUD-002",
    action: "APPROVE_BUYER",
    performedBy: "Admin",
    targetId: "buyer_sahyadri",
    description: "Admin approved buyer buyer_sahyadri",
    timestamp: "2026-08-26T11:00:00Z"
  },
  {
    logId: "AUD-003",
    action: "APPROVE_LOT",
    performedBy: "Admin",
    targetId: "LOT-2026-089101",
    description: "Admin approved lot LOT-2026-089101",
    timestamp: "2026-08-29T10:35:00Z"
  },
  {
    logId: "AUD-004",
    action: "RESOLVE_DISPUTE",
    performedBy: "Super admin",
    targetId: "DSP-2026-00202",
    description: "Super admin resolved dispute DSP-2026-00202",
    timestamp: "2026-09-01T15:00:00Z"
  },
  {
    logId: "AUD-005",
    action: "SUSPEND_BUYER",
    performedBy: "Admin",
    targetId: "buyer_suspicious",
    description: "Admin suspended suspicious buyer account",
    timestamp: "2026-09-02T09:00:00Z"
  }
];

export const initialNotifications = [
  {
    notificationId: "NOT-001",
    userId: "farmer_mh_001",
    recipientId: "farmer_mh_001",
    title: "लॉट मंजूर (Lot Approved)",
    message: "Your Tomato lot has been approved and published",
    read: true,
    isRead: true,
    createdAt: "2026-08-29T10:36:00Z"
  },
  {
    notificationId: "NOT-002",
    userId: "buyer_sahyadri",
    recipientId: "buyer_sahyadri",
    title: "मागणी जुळली (Demand Match)",
    message: "New Grade A Tomato lot available matching your demand",
    read: false,
    isRead: false,
    createdAt: "2026-08-29T10:40:00Z"
  },
  {
    notificationId: "NOT-003",
    userId: "farmer_mh_001",
    recipientId: "farmer_mh_001",
    title: "पेमेंट जमा (Payment Received)",
    message: "Payment of ₹8,400 received for TXN-2026-981045",
    read: false,
    isRead: false,
    createdAt: "2026-08-31T09:00:00Z"
  },
  {
    notificationId: "NOT-004",
    userId: "admin_mh_001",
    recipientId: "admin_mh_001",
    title: "प्रशासकीय सूचना (Admin Alert)",
    message: "2 new farmer verifications pending review",
    read: false,
    isRead: false,
    createdAt: "2026-09-02T08:00:00Z"
  }
];
