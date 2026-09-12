/**
 * AgriLink - Dispute Domain Model (Stage 6 & Centralized System)
 */

export const DISPUTE_CATEGORIES = [
    { id: 'QUALITY_MISMATCH', label: 'Quality Mismatch', labelMr: 'गुणवत्ता तफावत (Quality Mismatch)' },
    { id: 'QUANTITY_MISMATCH', label: 'Quantity Mismatch', labelMr: 'वजन / परिमाण तफावत (Quantity Mismatch)' },
    { id: 'PAYMENT_DELAY', label: 'Payment Delay', labelMr: 'पेमेंटला विलंब (Payment Delay)' },
    { id: 'PAYMENT_NOT_RECEIVED', label: 'Payment Not Received', labelMr: 'पेमेंट जमा झाले नाही (Payment Not Received)' },
    { id: 'DELIVERY_DAMAGE', label: 'Delivery / Transit Damage', labelMr: 'वाहतूक दरम्यान नासाडी (Transit Damage)' },
    { id: 'OTHER', label: 'Other', labelMr: 'इतर तक्रार (Other Issue)' }
];

export const DISPUTE_STATUSES = {
    OPEN: 'OPEN',
    UNDER_REVIEW: 'UNDER_REVIEW',
    WAITING_FOR_FARMER: 'WAITING_FOR_FARMER',
    WAITING_FOR_BUYER: 'WAITING_FOR_BUYER',
    RESOLVED: 'RESOLVED',
    CLOSED: 'CLOSED'
};

export class DisputeRecord {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.disputeId = data.disputeId || `DISP-${Date.now().toString().slice(-6)}`;
        this.transactionId = data.transactionId || '';
        this.raisedBy = data.raisedBy || 'FARMER'; // 'FARMER' | 'BUYER'
        this.claimantName = data.claimantName || 'Ramesh Patil';
        this.respondentName = data.respondentName || 'AgriMitra Agro Processing Hub';
        
        this.category = data.category || 'QUALITY_MISMATCH';
        this.categoryLabel = DISPUTE_CATEGORIES.find(c => c.id === this.category)?.label || 'Quality Issue';
        this.categoryLabelMr = DISPUTE_CATEGORIES.find(c => c.id === this.category)?.labelMr || 'गुणवत्ता तफावत';
        this.description = data.description || '';
        
        // Evidence uploaded by claimant
        this.supportingEvidenceUrls = Array.isArray(data.supportingEvidenceUrls) ? data.supportingEvidenceUrls : [];
        
        // Baseline immutable Digital Lot Quality Evidence
        this.originalLotQualityEvidence = data.originalLotQualityEvidence || {
            lotId: '',
            cropType: 'Tomato',
            certifiedGrade: 'Grade A',
            freshnessScore: 94,
            shelfLifeDays: 8,
            cutVerificationVerified: true,
            assessmentTimestamp: new Date().toISOString(),
            originalImageUrls: []
        };

        // Status Lifecycle: 'OPEN' | 'UNDER_REVIEW' | 'WAITING_FOR_FARMER' | 'WAITING_FOR_BUYER' | 'RESOLVED' | 'CLOSED'
        this.status = data.status || DISPUTE_STATUSES.OPEN;
        this.resolutionNotes = data.resolutionNotes || '';
        this.resolvedBy = data.resolvedBy || null;
        this.resolvedAt = data.resolvedAt || null;
        this.adminNotes = data.adminNotes || '';
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            disputeId: this.disputeId,
            transactionId: this.transactionId,
            raisedBy: this.raisedBy,
            claimantName: this.claimantName,
            respondentName: this.respondentName,
            category: this.category,
            categoryLabel: this.categoryLabel,
            categoryLabelMr: this.categoryLabelMr,
            description: this.description,
            supportingEvidenceUrls: this.supportingEvidenceUrls,
            originalLotQualityEvidence: this.originalLotQualityEvidence,
            status: this.status,
            resolutionNotes: this.resolutionNotes,
            resolvedBy: this.resolvedBy,
            resolvedAt: this.resolvedAt,
            adminNotes: this.adminNotes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
