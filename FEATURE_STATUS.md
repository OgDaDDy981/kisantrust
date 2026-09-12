# AgriLink — Feature Status Reference

> **Last Updated:** September 2026  
> **Purpose:** Living reference documenting what is real, what is simulated, and what is missing.

## Status Legend

| Badge | Meaning |
|---|---|
| 🟢 Working | Fully functional, connected to real services/APIs or Firestore |
| 🟡 Partially Working | Functional UI but contains simulations or incomplete flows |
| 📋 Demo/Mock | Uses hardcoded seed data or simulated workflows |
| 🔴 Broken | Exists in code but fails to execute |
| ⚪ Missing | Referenced but not implemented |

---

## Feature Inventory

### Authentication & User Management
| Feature | Status | Details |
|---|---|---|
| Google Sign-In | 🟢 Working | Real Firebase Authentication SDK |
| Email/Phone Registration | 🟢 Working | Creates user record in Firestore |
| Email/Phone Login | 🟡 Partial | Session created but password not verified (demo mode) |
| 1-Click Demo Logins | 🟢 Working | 4 pre-configured demo accounts (Farmer, Buyer, Admin, Consumer) |
| Role-Based Access Control | 🟢 Working | Farmer, Buyer, Admin, Consumer roles enforced |

### Farmer Journey
| Feature | Status | Details |
|---|---|---|
| Farmer Dashboard | 🟡 Partial | KPIs from Firestore; opportunity alert & tips are static HTML |
| 3-Step Lot Assessment (Setup) | 🟢 Working | Form validation, 4-angle photo, camera/gallery |
| 3-Step Lot Assessment (AI Grading) | 🟢 Working | Google Gemini Vision API (real), defect detection, confidence score |
| 3-Step Lot Assessment (Net Realization) | 🟢 Working | Deterministic formula, AI advisory, mandi comparison, certificate |
| My Lots Management | 🟢 Working | CRUD from Firestore, status filters, QR code modal |
| Market Intelligence | 🟢 Working | 3-tier price engine (Agmarknet API → Firestore cache → benchmarks) |
| Official Lot Certificate | 🟢 Working | Tamper-evident cert with grade, trust score, printable CSS |
| Live Camera Capture | 🟢 Working | WebRTC with 4-angle guidance overlay |

### Buyer & Marketplace
| Feature | Status | Details |
|---|---|---|
| Buyer Marketplace | 🟡 Partial | Loads from Firestore (seeded), matching algorithm works |
| Post Buyer Demand | 🟢 Working | Saves to Firestore, validates inputs |
| Lot-Buyer Matching | 🟢 Working | 4-pillar algorithm (crop, grade, quantity, location) |
| Price Negotiation | 📋 Demo | Counter-offers simulated client-side, not persisted to Firestore |
| Peer Rating (Farmer ↔ Buyer) | 🟢 Working | 5-star rating saved to Firestore, updates trust score |

### Transactions & Payments
| Feature | Status | Details |
|---|---|---|
| Transaction History | 🟢 Working | 9-stage escrow state machine from Firestore |
| Escrow Payment Gateway | 📋 Demo | Simulated UPI/bank/card checkout. Transaction records saved to Firestore |
| Digital Receipt | 🟢 Working | Generated from transaction data |
| Farmer Dispute Raising | 🟢 Working | Modal with issue type, evidence, description → saved to Firestore |

### Transport & Logistics
| Feature | Status | Details |
|---|---|---|
| Transport Cost Calculation | 🟢 Working | Deterministic per-ton-km formula with vehicle selection |
| Smart Village Pooling | 🟡 Partial | Grouping algorithm works, pool joining updates Firestore. Vehicle dispatch simulated |

### Storage
| Feature | Status | Details |
|---|---|---|
| Storage Service | ⚪ Missing | 250+ line service exists (`storageService.js`) with ICAR models but is not connected to any UI |

### FPO
| Feature | Status | Details |
|---|---|---|
| FPO Aggregation Hub | ⚪ Missing | No dedicated FPO dashboard. Only `fpoMembership` metadata exists on farmer profiles |

### Admin Portal
| Feature | Status | Details |
|---|---|---|
| Admin Overview Dashboard | 🟢 Working | Real-time stats from AnalyticsService |
| Farmer Verification | 🟢 Working | Document review, approve/reject/flag |
| Buyer Management | 🟢 Working | GSTIN/FSSAI status, trade volume, credit rating |
| Lot Moderation Queue | 🟢 Working | AI confidence check, duplicate detection, price anomalies |
| Buyer Demands Board | 🟢 Working | Inspect, activate, close institutional demands |
| User RBAC Control | 🟢 Working | Role management, suspension, promotion |
| Escrow & Payments Audit | 🟢 Working | Transaction audit, payout tracking |
| Dispute Resolution | 🟡 Partial | Admin can resolve disputes; farmer-side raising was broken (now fixed) |
| Risk & Fraud Engine | 🟢 Working | Price spikes, duplicate images, geofence mismatches |
| Immutable Audit Trail | 🟢 Working | Chronological events in Firestore |

### Services (Backend)
| Service | Status | Details |
|---|---|---|
| MarketDataService | 🟢 Working | 3-tier: Agmarknet API → Firestore cache → labeled benchmarks |
| QualityService | 🟢 Working | Gemini Vision API for multi-angle crop grading |
| PriceCalculationService | 🟢 Working | Net realization formula engine |
| TransportCostService | 🟢 Working | Per-ton-km freight with diesel & toll factors |
| TrustScoreService | 🟢 Working | 4-pillar dynamic trust scoring |
| MatchingService | 🟢 Working | Crop-grade-quantity-location matching |
| RiskService | 🟢 Working | Fraud detection patterns |
| AuditService | 🟢 Working | Immutable event logging |
| StorageService | ⚪ Dead Code | Complete ICAR models, never imported |
| NegotiationService | 🟡 Partial | Schema defined, client-side only |
| DisputeService | 🟢 Working | Create/update/resolve disputes |
| NotificationService | 🟢 Working | In-app alerts in Firestore |
| PricePredictionService | 🟢 Working | Deterministic 5-day projection model |
| GeminiAdvisoryService | 🟢 Working | AI selling advice with fallback |

---

## Data Sources

| Data | Source | Type |
|---|---|---|
| Mandi prices | Agmarknet API (`api.data.gov.in`) | 🟢 Live API with cache fallback |
| Quality grading | Google Gemini Vision API | 🟢 Live AI |
| Selling advisory | Google Gemini API | 🟢 Live AI |
| Buyer demands | Firestore (seeded + user-created) | 🟡 Seeded + Live |
| Transport costs | Deterministic algorithm | 🟢 Calculated |
| Trust scores | Firestore ratings | 🟢 Calculated |
| Payment transactions | Firestore | 📋 Simulated gateway, real records |
