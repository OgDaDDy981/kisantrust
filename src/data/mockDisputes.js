/**
 * KisanTrust - Seed Disputes Data
 * Realistic disputes for resolution workflows.
 */

export const mockDisputes = [
  {
    disputeId: "DSP-2026-00201",
    transactionId: "TXN-2026-981044",
    filedBy: "buyer_reliance",
    filedByName: "Reliance Retail",
    filedByRole: "BUYER",
    category: "QUALITY_MISMATCH",
    description: "Received produce graded as Grade B but lot was certified as Grade A. 15% of potatoes show green skin discoloration.",
    supportingEvidenceUrls: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80"
    ],
    originalLotQualityEvidence: "Grade A, 88 freshness, 3.5% defects",
    status: "OPEN",
    adminNotes: "",
    resolution: null,
    createdAt: "2026-09-02T14:30:00Z",
    updatedAt: "2026-09-02T14:30:00Z"
  },
  {
    disputeId: "DSP-2026-00202",
    transactionId: "TXN-2026-981043",
    filedBy: "farmer_mh_001",
    filedByName: "Ramesh Patil",
    filedByRole: "FARMER",
    category: "PAYMENT_DELAY",
    description: "Payment not received within agreed 24-hour settlement window. 3 days overdue.",
    supportingEvidenceUrls: [],
    originalLotQualityEvidence: "N/A",
    status: "UNDER_REVIEW",
    adminNotes: "Contacted buyer finance team, pending response.",
    resolution: null,
    createdAt: "2026-09-02T10:00:00Z",
    updatedAt: "2026-09-02T15:00:00Z",
    escalatedAt: "2026-09-02T12:00:00Z"
  }
];

export const initialMockDisputes = mockDisputes;
