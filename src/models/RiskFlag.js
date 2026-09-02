/**
 * KisanTrust - Fraud & Risk Flag Domain Model
 * Tracks internal risk flags created by automated pre-checks or admin reviews.
 */

export const RISK_FLAG_TYPES = {
    DUPLICATE_IMAGES: {
        code: 'DUPLICATE_IMAGES',
        label: 'Duplicate Produce Images Detected',
        severity: 'HIGH',
        description: 'Exact matching or previously submitted images detected across lots.'
    },
    UNUSUAL_LISTING_FREQUENCY: {
        code: 'UNUSUAL_LISTING_FREQUENCY',
        label: 'Unusual Listing Frequency',
        severity: 'MEDIUM',
        description: 'Farmer submitted unusually high number of lots within a short time window.'
    },
    MULTIPLE_DISPUTES: {
        code: 'MULTIPLE_DISPUTES',
        label: 'Elevated Dispute Frequency',
        severity: 'HIGH',
        description: 'Account has 2 or more unresolved disputes within 30 days.'
    },
    PAYMENT_DELAY_PATTERN: {
        code: 'PAYMENT_DELAY_PATTERN',
        label: 'Payment Delay Pattern',
        severity: 'HIGH',
        description: 'Buyer average payment settlement exceeds platform grace threshold (>3 days).'
    },
    REPEATED_QUANTITY_MISMATCH: {
        code: 'REPEATED_QUANTITY_MISMATCH',
        label: 'Repeated Quantity Mismatch',
        severity: 'MEDIUM',
        description: 'Unloaded delivery weight diverged >10% from declared lot weight multiple times.'
    },
    SUSPICIOUS_ACCOUNT_ACTIVITY: {
        code: 'SUSPICIOUS_ACCOUNT_ACTIVITY',
        label: 'Suspicious Account Activity',
        severity: 'HIGH',
        description: 'Unusual price manipulation or unverified company credentials.'
    }
};

export class RiskFlagRecord {
    constructor(data = {}) {
        this.flagId = data.flagId || `RISK-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.entityType = data.entityType || 'LOT'; // 'LOT' | 'USER' | 'BUYER' | 'TRANSACTION'
        this.entityId = data.entityId || '';
        this.entityTitle = data.entityTitle || '';
        this.flagType = data.flagType || 'DUPLICATE_IMAGES';
        this.severity = data.severity || (RISK_FLAG_TYPES[this.flagType]?.severity || 'MEDIUM');
        this.label = data.label || (RISK_FLAG_TYPES[this.flagType]?.label || 'Risk Flag');
        this.details = data.details || {};
        this.resolved = Boolean(data.resolved ?? false);
        this.resolvedBy = data.resolvedBy || null;
        this.resolutionNotes = data.resolutionNotes || '';
        this.resolvedAt = data.resolvedAt || null;
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            flagId: this.flagId,
            entityType: this.entityType,
            entityId: this.entityId,
            entityTitle: this.entityTitle,
            flagType: this.flagType,
            severity: this.severity,
            label: this.label,
            details: this.details,
            resolved: this.resolved,
            resolvedBy: this.resolvedBy,
            resolutionNotes: this.resolutionNotes,
            resolvedAt: this.resolvedAt,
            createdAt: this.createdAt
        };
    }
}
