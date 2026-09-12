/**
 * AgriLink - Digital Agricultural Lot Data Model
 * Represents a verified agricultural produce lot created by a farmer.
 * Stores crop details, verified quality metrics, location, automated pre-checks,
 * and admin moderation lifecycle state.
 */

export const LOT_STATUSES = {
    DRAFT: 'DRAFT',
    SUBMITTED: 'SUBMITTED',
    PRE_CHECKED: 'PRE_CHECKED',
    PENDING_ADMIN_REVIEW: 'PENDING_ADMIN_REVIEW',
    APPROVED: 'APPROVED',
    PUBLISHED: 'PUBLISHED',
    ACTIVE: 'ACTIVE',
    CHANGES_REQUIRED: 'CHANGES_REQUIRED',
    REJECTED: 'REJECTED',
    SOLD: 'SOLD',
    EXPIRED: 'EXPIRED'
};

export class DigitalAgriculturalLot {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.lotId = data.lotId || `LOT-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
        this.farmerId = data.farmerId || 'farmer_mh_001';
        this.farmerName = data.farmerName || 'Ramesh Patil';
        
        // Approximate farmer location to maintain privacy
        this.farmerLocation = {
            district: data.farmerLocation?.district || 'Nashik',
            taluka: data.farmerLocation?.taluka || 'Niphad',
            state: data.farmerLocation?.state || 'Maharashtra',
            pincode: data.farmerLocation?.pincode || '422303'
        };

        // Crop details
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || 'Himsona (Hybrid)';
        this.quantity = Number(data.quantity) || 500;
        this.unit = data.unit || 'kg'; // 'kg' | 'quintal' | 'crates'
        
        // Dates
        this.harvestDate = data.harvestDate || new Date().toISOString().split('T')[0];
        this.expectedSellingDate = data.expectedSellingDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0];
        
        // Image References in Storage
        const photos = Array.isArray(data.imageReferences) ? data.imageReferences : (Array.isArray(data.exteriorPhotos) ? data.exteriorPhotos : (Array.isArray(data.uploadedFiles) ? data.uploadedFiles : []));
        this.imageReferences = photos;
        this.exteriorPhotos = photos;
        
        // Quality Assessments
        this.externalQualityAnalysis = {
            analyzedAt: data.externalQualityAnalysis?.analyzedAt || new Date().toISOString(),
            visualGrade: data.externalQualityAnalysis?.visualGrade || 'Grade A',
            colorScore: data.externalQualityAnalysis?.colorScore || 92,
            sizeUniformity: data.externalQualityAnalysis?.sizeUniformity || 'Consistent',
            surfaceDefectsPercent: data.externalQualityAnalysis?.surfaceDefectsPercent || 4,
            description: data.externalQualityAnalysis?.description || 'Fresh, uniform size, excellent color.'
        };

        this.internalQualityAnalysis = data.internalQualityAnalysis ? {
            cutVerified: Boolean(data.internalQualityAnalysis.cutVerified),
            internalFreshness: data.internalQualityAnalysis.internalFreshness || 'Optimal',
            moistureContent: data.internalQualityAnalysis.moistureContent || 'Standard',
            coreDefectsPercent: data.internalQualityAnalysis.coreDefectsPercent || 0,
            cutImageUrl: data.internalQualityAnalysis.cutImageUrl || null
        } : null;

        // Summarized Overall Quality
        this.overallQualityGrade = data.overallQualityGrade || 'Grade A'; // 'Grade A' | 'Grade B' | 'Grade C'
        this.freshnessScore = Number(data.freshnessScore) || 91; // 0 - 100
        this.estimatedShelfLifeDays = Number(data.estimatedShelfLifeDays) || 7; // days

        // Transparent Price Estimate Breakdown
        const netPrice = Number(data.netPricePerKg) || Number(data.pricingEstimate?.estimatedNetRealization) || 35.0;
        this.netPricePerKg = netPrice;
        this.totalLotValue = Number(data.totalLotValue) || Number((netPrice * this.quantity).toFixed(2));
        this.pricingEstimate = {
            baseMarketPrice: Number(data.pricingEstimate?.baseMarketPrice) || 35.0,
            qualityPremium: Number(data.pricingEstimate?.qualityPremium) || 3.0,
            demandPremium: Number(data.pricingEstimate?.demandPremium) || 0.0,
            transportCost: Number(data.pricingEstimate?.transportCost) || 2.5,
            storageCost: Number(data.pricingEstimate?.storageCost) || 0.5,
            estimatedNetRealization: netPrice
        };

        // Automated Pre-Check & Moderation Lifecycle
        this.status = data.status || LOT_STATUSES.LISTED || 'LISTED';
        this.moderationStatus = data.moderationStatus || (this.status === 'PUBLISHED' || this.status === 'LISTED' || this.status === 'ACTIVE' ? 'APPROVED' : 'PENDING_ADMIN_REVIEW');
        this.preCheckResults = data.preCheckResults || {
            passed: true,
            checks: ['REQUIRED_FIELDS', 'IMAGE_COUNT', 'QUANTITY_VALID', 'CROP_VALID'],
            flags: [],
            checkedAt: new Date().toISOString()
        };

        // Phase 8: Trust & Verification Signals
        this.verifiedProduceBadge = data.verifiedProduceBadge || {
            isAiQualityChecked: true,
            visualGrade: this.overallQualityGrade,
            freshnessScore: this.freshnessScore,
            verifiedAt: this.externalQualityAnalysis?.analyzedAt || this.createdAt,
            badgeLabel: `${this.overallQualityGrade} • AI Quality Checked (${this.freshnessScore}% Fresh)`,
            badgeLabelMr: `प्रमाणित ${this.overallQualityGrade} • AI गुणवत्ता तपासणी (${this.freshnessScore}% ताजे)`
        };

        this.adminNotes = data.adminNotes || '';
        this.rejectionReason = data.rejectionReason || '';
        this.changesRequested = Array.isArray(data.changesRequested) ? data.changesRequested : [];
        this.riskFlags = Array.isArray(data.riskFlags) ? data.riskFlags : [];
        this.reviewedBy = data.reviewedBy || null;
        this.reviewedAt = data.reviewedAt || null;
        this.publishedAt = data.publishedAt || (this.moderationStatus === 'APPROVED' ? this.createdAt : null);

        // Metadata
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    /**
     * Converts class instance to plain JSON for Firestore storage
     */
    toFirestore() {
        return {
            lotId: this.lotId,
            farmerId: this.farmerId,
            farmerName: this.farmerName,
            farmerLocation: this.farmerLocation,
            cropType: this.cropType,
            variety: this.variety,
            quantity: this.quantity,
            unit: this.unit,
            harvestDate: this.harvestDate,
            expectedSellingDate: this.expectedSellingDate,
            imageReferences: this.imageReferences,
            externalQualityAnalysis: this.externalQualityAnalysis,
            internalQualityAnalysis: this.internalQualityAnalysis,
            overallQualityGrade: this.overallQualityGrade,
            freshnessScore: this.freshnessScore,
            estimatedShelfLifeDays: this.estimatedShelfLifeDays,
            netPricePerKg: this.netPricePerKg,
            totalLotValue: this.totalLotValue,
            pricingEstimate: this.pricingEstimate,
            verifiedProduceBadge: this.verifiedProduceBadge,
            status: this.status,
            moderationStatus: this.moderationStatus,
            preCheckResults: this.preCheckResults,
            adminNotes: this.adminNotes,
            rejectionReason: this.rejectionReason,
            changesRequested: this.changesRequested,
            riskFlags: this.riskFlags,
            reviewedBy: this.reviewedBy,
            reviewedAt: this.reviewedAt,
            publishedAt: this.publishedAt,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
