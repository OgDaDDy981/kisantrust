/**
 * KisanTrust - Buyer Profiles, Purchase Demands, and Negotiation Domain Models
 */

export class BuyerProfile {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.buyerId = data.buyerId || `buyer_${Date.now().toString().slice(-4)}`;
        this.companyName = data.companyName || 'KisanMitra Agro Processing';
        this.companyType = data.companyType || 'Food Processor'; 
        // 'Wholesaler' | 'Retailer' | 'Food Processor' | 'Restaurant' | 'Institutional Buyer' | 'Exporter' | 'Aggregator'
        this.contactPerson = data.contactPerson || 'Vilas Shinde';
        this.phone = data.phone || '+91 98221 55667';
        this.email = data.email || 'procurement@sahyadriagro.in';
        this.district = data.district || 'Nashik';
        this.state = data.state || 'Maharashtra';
        this.pincode = data.pincode || '422001';
        this.gstin = data.gstin || '00XXXXX0000X0XX';
        this.verified = Boolean(data.verified ?? true);
        this.verificationStatus = data.verificationStatus || (this.verified ? 'VERIFIED' : 'PENDING_VERIFICATION');
        this.reliabilityScore = Number(data.reliabilityScore) || 4.8; // 0.0 to 5.0
        this.totalDealsCompleted = Number(data.totalDealsCompleted) || 142;
        this.onTimePaymentRate = Number(data.onTimePaymentRate) || 98.5; // Percentage
        this.createdAt = data.createdAt || new Date().toISOString();
    }
}

export class BuyerDemand {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.demandId = data.demandId || `DEM-${new Date().getFullYear()}-${Date.now().toString().slice(-5)}`;
        this.buyerId = data.buyerId || 'buyer_sahyadri';
        this.buyerName = data.buyerName || 'KisanMitra Agro Processing';
        this.companyType = data.companyType || 'Food Processor';
        this.verifiedBuyer = Boolean(data.verifiedBuyer ?? true);
        this.reliabilityScore = Number(data.reliabilityScore) || 4.8;
        
        // Purchase specifications
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || data.varietyPreference || 'All Varieties';
        this.varietyPreference = data.varietyPreference || this.variety;
        this.requiredQuantityKg = Number(data.requiredQuantityKg) || 10000;
        this.fulfilledQuantityKg = Number(data.fulfilledQuantityKg) || 0;
        this.minQualityGrade = data.minQualityGrade || 'Grade A'; // 'Grade A' | 'Grade B' | 'Grade C'
        this.preferredLocation = data.preferredLocation || data.deliveryHub || 'Nashik / Niphad Hub';
        this.deliveryHub = data.deliveryHub || this.preferredLocation;
        this.maxSourcingDistanceKm = Number(data.maxSourcingDistanceKm) || 120;
        this.requiredDeliveryDate = data.requiredDeliveryDate || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0];
        
        // Commercial terms & Price Range
        this.offeredPricePerKg = Number(data.offeredPricePerKg) || Number(data.minOfferedPricePerKg) || 36.5;
        this.minOfferedPricePerKg = Number(data.minOfferedPricePerKg) || this.offeredPricePerKg;
        this.maxOfferedPricePerKg = Number(data.maxOfferedPricePerKg) || (this.offeredPricePerKg + 2.0);
        this.paymentTerms = data.paymentTerms || 'Direct Bank Settlement on Delivery QC';
        this.pickupProvided = Boolean(data.pickupProvided ?? false); // Farm-gate pickup or Mandi delivery
        
        // Status lifecycle: 'DRAFT' | 'SUBMITTED' | 'PENDING_ADMIN_REVIEW' | 'APPROVED' | 'PUBLISHED' | 'ACTIVE' | 'PARTIALLY_FULFILLED' | 'FULFILLED' | 'CHANGES_REQUIRED' | 'REJECTED' | 'CANCELLED'
        this.status = data.status || 'ACTIVE';
        this.moderationStatus = data.moderationStatus || (this.status === 'ACTIVE' || this.status === 'PUBLISHED' ? 'APPROVED' : 'PENDING_ADMIN_REVIEW');
        this.adminNotes = data.adminNotes || '';
        this.rejectionReason = data.rejectionReason || '';
        this.changesRequested = Array.isArray(data.changesRequested) ? data.changesRequested : [];
        this.reviewedBy = data.reviewedBy || null;
        this.reviewedAt = data.reviewedAt || null;

        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            demandId: this.demandId,
            buyerId: this.buyerId,
            buyerName: this.buyerName,
            companyType: this.companyType,
            verifiedBuyer: this.verifiedBuyer,
            reliabilityScore: this.reliabilityScore,
            cropType: this.cropType,
            variety: this.variety,
            varietyPreference: this.varietyPreference,
            requiredQuantityKg: this.requiredQuantityKg,
            fulfilledQuantityKg: this.fulfilledQuantityKg,
            minQualityGrade: this.minQualityGrade,
            preferredLocation: this.preferredLocation,
            deliveryHub: this.deliveryHub,
            maxSourcingDistanceKm: this.maxSourcingDistanceKm,
            requiredDeliveryDate: this.requiredDeliveryDate,
            offeredPricePerKg: this.offeredPricePerKg,
            minOfferedPricePerKg: this.minOfferedPricePerKg,
            maxOfferedPricePerKg: this.maxOfferedPricePerKg,
            paymentTerms: this.paymentTerms,
            pickupProvided: this.pickupProvided,
            status: this.status,
            moderationStatus: this.moderationStatus,
            adminNotes: this.adminNotes,
            rejectionReason: this.rejectionReason,
            changesRequested: this.changesRequested,
            reviewedBy: this.reviewedBy,
            reviewedAt: this.reviewedAt,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

export class NegotiationRecord {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.negotiationId = data.negotiationId || `NEG-${Date.now().toString().slice(-6)}`;
        this.lotId = data.lotId || '';
        this.demandId = data.demandId || '';
        this.farmerId = data.farmerId || 'farmer_mh_001';
        this.farmerName = data.farmerName || 'Ramesh Patil';
        this.buyerId = data.buyerId || 'buyer_001';
        this.buyerName = data.buyerName || 'Verified Buyer';
        this.cropType = data.cropType || 'Tomato';
        this.quantityKg = Number(data.quantityKg) || 500;
        this.qualityGrade = data.qualityGrade || 'Grade A';
        
        // Pricing state
        this.initialBuyerOfferPrice = Number(data.initialBuyerOfferPrice) || 36.0;
        this.currentAgreedPrice = Number(data.currentAgreedPrice || data.initialBuyerOfferPrice) || 36.0;
        
        // Multi-round offer history
        this.history = Array.isArray(data.history) ? data.history : [
            {
                sender: 'BUYER',
                pricePerKg: this.initialBuyerOfferPrice,
                notes: 'Initial purchase offer based on verified Grade A listing.',
                timestamp: new Date().toISOString()
            }
        ];

        // Negotiation lifecycle: 'BUYER_OFFER' | 'FARMER_COUNTEROFFER' | 'BUYER_REVISION' | 'ACCEPTED' | 'REJECTED' | 'CANCELLED'
        this.status = data.status || 'BUYER_OFFER';
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            negotiationId: this.negotiationId,
            lotId: this.lotId,
            demandId: this.demandId,
            farmerId: this.farmerId,
            farmerName: this.farmerName,
            buyerId: this.buyerId,
            buyerName: this.buyerName,
            cropType: this.cropType,
            quantityKg: this.quantityKg,
            qualityGrade: this.qualityGrade,
            initialBuyerOfferPrice: this.initialBuyerOfferPrice,
            currentAgreedPrice: this.currentAgreedPrice,
            history: this.history,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
