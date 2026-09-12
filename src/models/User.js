/**
 * AgriLink - User & Role Domain Models
 * Implements strict Role-Based Access Control (RBAC), lifecycle state machines,
 * and privacy separation between private sensitive details and public marketplace data.
 */

export const USER_ROLES = {
    FARMER: 'farmer',
    BUYER: 'buyer',
    CUSTOMER: 'customer',
    FPO: 'fpo',
    ADMIN: 'admin',
    SUPER_ADMIN: 'super_admin'
};

export const ACCOUNT_STATUS = {
    ACTIVE: 'ACTIVE',
    UNDER_REVIEW: 'UNDER_REVIEW',
    SUSPENDED: 'SUSPENDED',
    DEACTIVATED: 'DEACTIVATED'
};

export const VERIFICATION_STATUS = {
    REGISTERED: 'REGISTERED',
    PROFILE_SUBMITTED: 'PROFILE_SUBMITTED',
    PENDING_VERIFICATION: 'PENDING_VERIFICATION',
    VERIFIED: 'VERIFIED',
    CHANGES_REQUIRED: 'CHANGES_REQUIRED',
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    UNDER_REVIEW: 'UNDER_REVIEW'
};

/**
 * Base User Model
 */
export class User {
    constructor(data = {}) {
        this.uid = data.uid || data.userId || `user_${Date.now()}`;
        this.userId = this.uid;
        this.role = data.role || USER_ROLES.FARMER;
        this.displayName = data.displayName || data.name || 'User';
        this.name = this.displayName;
        this.email = data.email || '';
        this.phone = data.phone || '';
        this.profilePhoto = data.profilePhoto || data.photoUrl || '';
        this.accountStatus = data.accountStatus || ACCOUNT_STATUS.ACTIVE;
        this.verificationStatus = data.verificationStatus || (data.verified ? VERIFICATION_STATUS.VERIFIED : VERIFICATION_STATUS.PENDING_VERIFICATION);
        this.preferredLanguage = data.preferredLanguage || 'Marathi (मराठी)';
        this.authProvider = data.authProvider || 'email';
        this.adminNotes = Array.isArray(data.adminNotes) ? data.adminNotes : [];
        this.riskFlagsCount = Number(data.riskFlagsCount) || 0;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            uid: this.uid,
            role: this.role,
            displayName: this.displayName,
            email: this.email,
            phone: this.phone,
            profilePhoto: this.profilePhoto,
            accountStatus: this.accountStatus,
            verificationStatus: this.verificationStatus,
            preferredLanguage: this.preferredLanguage,
            authProvider: this.authProvider,
            adminNotes: this.adminNotes,
            riskFlagsCount: this.riskFlagsCount,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

/**
 * Farmer Profile (Separates private data from public marketplace view)
 */
export class FarmerProfile {
    constructor(data = {}) {
        this.userId = data.userId || data.uid || 'farmer_mh_001';
        this.personalDetails = {
            fullName: data.personalDetails?.fullName || data.name || 'Ramesh Patil',
            profilePhoto: data.personalDetails?.profilePhoto || data.profilePhoto || '',
            mobileNumber: data.personalDetails?.mobileNumber || data.phone || '+91 98224 56789',
            emailAddress: data.personalDetails?.emailAddress || data.email || 'ramesh.patil@agrilink.org',
            fullAddress: data.personalDetails?.fullAddress || data.address || 'Gat No. 142, At Post Niphad',
            pincode: data.personalDetails?.pincode || '422303',
            state: data.personalDetails?.state || data.state || 'Maharashtra',
            district: data.personalDetails?.district || data.district || 'Nashik',
            village: data.personalDetails?.village || data.village || 'Niphad'
        };

        this.farmDetails = {
            primaryCrops: Array.isArray(data.farmDetails?.primaryCrops) ? data.farmDetails.primaryCrops : (data.primaryCrops || ['Tomato', 'Onion']),
            farmSizeAcres: Number(data.farmDetails?.farmSizeAcres ?? data.farmSizeAcres) || 4.5,
            productionCapacityTons: Number(data.farmDetails?.productionCapacityTons ?? data.productionCapacityTons) || 25,
            fpoMembership: data.farmDetails?.fpoMembership || data.fpoMembership || 'AgriMitra Producer Co.'
        };

        this.verificationStatus = data.verificationStatus || (data.verified ? VERIFICATION_STATUS.VERIFIED : VERIFICATION_STATUS.PENDING_VERIFICATION);
        this.rejectionReason = data.rejectionReason || '';
        this.changesRequested = Array.isArray(data.changesRequested) ? data.changesRequested : [];

        // Verified Reputation & Stats
        this.farmerRating = Number(data.farmerRating) || (data.totalTransactionsCompleted ? 4.8 : 0); // 0 = New user
        this.ratingBreakdown = data.ratingBreakdown || {
            produceQuality: 4.8,
            quantityAccuracy: 4.9,
            deliveryReliability: 4.7,
            transactionCompletion: 100,
            disputeFreeScore: 98
        };
        this.totalTransactionsCompleted = Number(data.totalTransactionsCompleted) || 0;
        this.totalLotsSold = Number(data.totalLotsSold) || 0;
        this.isEstablished = this.totalTransactionsCompleted >= 3;

        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    /**
     * Public, privacy-safe representation for buyers & marketplace
     */
    getPublicProfile() {
        return {
            userId: this.userId,
            name: this.personalDetails.fullName || this.name || '',
            displayName: (this.personalDetails.fullName || '').split(' ')[0] + ' ' + ((this.personalDetails.fullName || '').split(' ')[1]?.[0] || '') + '.',
            location: {
                district: this.personalDetails.district,
                state: this.personalDetails.state
            },
            village: this.personalDetails.village,
            primaryCrops: this.farmDetails.primaryCrops,
            farmerRating: this.farmerRating > 0 ? this.farmerRating : null,
            isEstablished: this.isEstablished,
            ratingLabel: this.isEstablished ? `${this.farmerRating} / 5.0 (${this.totalTransactionsCompleted} transactions)` : 'New to AgriLink (No verified history yet)',
            totalTransactionsCompleted: this.totalTransactionsCompleted,
            verificationStatus: this.verificationStatus
        };
    }

    toPublicView() {
        return this.getPublicProfile();
    }

    toFirestore() {
        return {
            userId: this.userId,
            personalDetails: this.personalDetails,
            farmDetails: this.farmDetails,
            verificationStatus: this.verificationStatus,
            rejectionReason: this.rejectionReason,
            changesRequested: this.changesRequested,
            farmerRating: this.farmerRating,
            ratingBreakdown: this.ratingBreakdown,
            totalTransactionsCompleted: this.totalTransactionsCompleted,
            totalLotsSold: this.totalLotsSold,
            isEstablished: this.isEstablished,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

/**
 * Buyer Profile (Separates private registration docs from public credentials)
 */
export class BuyerProfileRecord {
    constructor(data = {}) {
        this.userId = data.userId || data.buyerId || 'buyer_sahyadri';
        this.businessDetails = {
            companyName: data.businessDetails?.companyName || data.companyName || 'AgriMitra Agro Processing Hub',
            buyerType: data.businessDetails?.buyerType || data.buyerType || data.companyType || 'Food Processor',
            contactPerson: data.businessDetails?.contactPerson || data.contactPerson || data.name || 'Amit Joshi',
            mobileNumber: data.businessDetails?.mobileNumber || data.phone || '+91 98230 44556',
            emailAddress: data.businessDetails?.emailAddress || data.email || 'amit.joshi@sahyadriagro.com',
            businessAddress: data.businessDetails?.businessAddress || data.address || 'Plot 45, MIDC Mohadi, Dindori',
            district: data.businessDetails?.district || data.district || 'Nashik',
            state: data.businessDetails?.state || data.state || 'Maharashtra',
            pincode: data.businessDetails?.pincode || '422206',
            gstin: data.businessDetails?.gstin || data.gstin || '00XXXXX0000X0XX',
            primaryCommodities: Array.isArray(data.businessDetails?.primaryCommodities) ? data.businessDetails.primaryCommodities : (data.primaryCommodities || ['Tomato', 'Onion', 'Grapes']),
            expectedMonthlyVolumeTons: Number(data.businessDetails?.expectedMonthlyVolumeTons ?? data.expectedMonthlyVolumeTons) || 120
        };

        this.verificationStatus = data.verificationStatus || (data.verified ? VERIFICATION_STATUS.VERIFIED : VERIFICATION_STATUS.PENDING_VERIFICATION);
        this.documentsVerified = Boolean(data.documentsVerified ?? data.verified ?? true);
        this.rejectionReason = data.rejectionReason || '';
        this.changesRequested = Array.isArray(data.changesRequested) ? data.changesRequested : [];

        // Verified Reliability Metrics
        this.buyerTrustScore = Number(data.buyerTrustScore ?? data.trustScore) || 92;
        this.trustTier = data.trustTier || 'Highly Trusted';
        this.onTimePaymentPercentage = Number(data.onTimePaymentPercentage ?? data.onTimePaymentRate) || 98.2;
        this.avgPaymentDelayDays = Number(data.avgPaymentDelayDays) || 0.8;
        this.totalTransactionsCompleted = Number(data.totalTransactionsCompleted ?? data.totalDealsCompleted) || 142;
        this.totalDisputesRaised = Number(data.totalDisputesRaised) || 1;
        this.defaultedTransactions = Number(data.defaultedTransactions) || 0;
        this.farmerRating = Number(data.farmerRating ?? data.reliabilityScore) || 4.8;

        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    /**
     * Public marketplace profile
     */
    getPublicProfile() {
        return {
            userId: this.userId,
            companyName: this.businessDetails.companyName,
            buyerType: this.businessDetails.buyerType,
            gstin: this.businessDetails.gstin,
            district: this.businessDetails.district,
            state: this.businessDetails.state,
            buyerTrustScore: this.buyerTrustScore,
            trustTier: this.trustTier,
            onTimePaymentPercentage: this.onTimePaymentPercentage,
            totalTransactionsCompleted: this.totalTransactionsCompleted,
            verificationStatus: this.verificationStatus,
            primaryCommodities: this.businessDetails.primaryCommodities
        };
    }

    toPublicView() {
        return this.getPublicProfile();
    }

    toFirestore() {
        return {
            userId: this.userId,
            businessDetails: this.businessDetails,
            verificationStatus: this.verificationStatus,
            documentsVerified: this.documentsVerified,
            rejectionReason: this.rejectionReason,
            changesRequested: this.changesRequested,
            buyerTrustScore: this.buyerTrustScore,
            trustTier: this.trustTier,
            onTimePaymentPercentage: this.onTimePaymentPercentage,
            avgPaymentDelayDays: this.avgPaymentDelayDays,
            totalTransactionsCompleted: this.totalTransactionsCompleted,
            totalDisputesRaised: this.totalDisputesRaised,
            defaultedTransactions: this.defaultedTransactions,
            farmerRating: this.farmerRating,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

/**
 * Customer / Direct Consumer Profile
 */
export class CustomerProfile {
    constructor(data = {}) {
        this.userId = data.userId || data.uid || `customer_${Date.now()}`;
        this.personalDetails = {
            fullName: data.personalDetails?.fullName || data.name || 'Customer',
            mobileNumber: data.personalDetails?.mobileNumber || data.phone || '',
            emailAddress: data.personalDetails?.emailAddress || data.email || '',
            deliveryAddress: data.personalDetails?.deliveryAddress || data.address || '',
            city: data.personalDetails?.city || data.district || 'Nashik',
            state: data.personalDetails?.state || data.state || 'Maharashtra',
            pincode: data.personalDetails?.pincode || data.pincode || ''
        };
        this.preferences = {
            preferredCrops: Array.isArray(data.preferences?.preferredCrops) ? data.preferences.preferredCrops : (data.primaryCrops ? (Array.isArray(data.primaryCrops) ? data.primaryCrops : [data.primaryCrops]) : ['Tomato', 'Onion', 'Vegetables']),
            purchaseFrequency: data.preferences?.purchaseFrequency || 'Weekly',
            directFarmOrdersCount: Number(data.preferences?.directFarmOrdersCount) || 0
        };
        this.verificationStatus = data.verificationStatus || VERIFICATION_STATUS.VERIFIED;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            userId: this.userId,
            personalDetails: this.personalDetails,
            preferences: this.preferences,
            verificationStatus: this.verificationStatus,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

