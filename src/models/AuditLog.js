/**
 * AgriLink - Admin Audit Log Domain Model
 * Records immutable, tamper-evident logs of critical administrative actions
 * such as verification decisions, lot approvals/rejections, suspensions, and score adjustments.
 */

export const AUDIT_ACTIONS = {
    FARMER_VERIFIED: 'FARMER_VERIFIED',
    FARMER_REJECTED: 'FARMER_REJECTED',
    FARMER_CHANGES_REQUESTED: 'FARMER_CHANGES_REQUESTED',
    BUYER_VERIFIED: 'BUYER_VERIFIED',
    BUYER_REJECTED: 'BUYER_REJECTED',
    BUYER_CHANGES_REQUESTED: 'BUYER_CHANGES_REQUESTED',
    LOT_APPROVED: 'LOT_APPROVED',
    LOT_REJECTED: 'LOT_REJECTED',
    LOT_CHANGES_REQUESTED: 'LOT_CHANGES_REQUESTED',
    LOT_PUBLISHED: 'LOT_PUBLISHED',
    DEMAND_APPROVED: 'DEMAND_APPROVED',
    DEMAND_REJECTED: 'DEMAND_REJECTED',
    DEMAND_CHANGES_REQUESTED: 'DEMAND_CHANGES_REQUESTED',
    USER_SUSPENDED: 'USER_SUSPENDED',
    USER_REACTIVATED: 'USER_REACTIVATED',
    DISPUTE_RESOLVED: 'DISPUTE_RESOLVED',
    DISPUTE_STATUS_CHANGED: 'DISPUTE_STATUS_CHANGED',
    RISK_FLAG_CREATED: 'RISK_FLAG_CREATED',
    RISK_FLAG_RESOLVED: 'RISK_FLAG_RESOLVED',
    ADMIN_NOTE_ADDED: 'ADMIN_NOTE_ADDED',
    SCORE_RECALCULATED: 'SCORE_RECALCULATED',
    APPROVE_LOT: 'LOT_APPROVED',
    REJECT_LOT: 'LOT_REJECTED',
    VERIFY_FARMER: 'FARMER_VERIFIED',
    VERIFY_BUYER: 'BUYER_VERIFIED'
};

export class AuditLogRecord {
    constructor(data = {}) {
        this.logId = data.logId || `AUDIT-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.adminId = data.adminId || data.performedBy || 'admin_super';
        this.adminName = data.adminName || data.performedByName || 'Admin User';
        this.performedBy = this.adminId;
        this.performedByName = this.adminName;
        this.action = data.action || AUDIT_ACTIONS.LOT_APPROVED;
        this.targetType = data.targetType || data.targetEntityType || 'LOT'; // 'FARMER' | 'BUYER' | 'LOT' | 'DEMAND' | 'DISPUTE' | 'USER' | 'RISK_FLAG'
        this.targetEntityType = this.targetType;
        this.targetId = data.targetId || data.targetEntityId || '';
        this.targetEntityId = this.targetId;
        this.targetTitle = data.targetTitle || '';
        this.previousStatus = data.previousStatus || '';
        this.newStatus = data.newStatus || '';
        this.details = data.details || {};
        this.reason = data.reason || '';
        this.ipAddress = data.ipAddress || '127.0.0.1';
        this.timestamp = data.timestamp || new Date().toISOString();
    }

    toFirestore() {
        return {
            logId: this.logId,
            adminId: this.adminId,
            adminName: this.adminName,
            performedBy: this.performedBy,
            performedByName: this.performedByName,
            action: this.action,
            targetType: this.targetType,
            targetEntityType: this.targetEntityType,
            targetId: this.targetId,
            targetEntityId: this.targetEntityId,
            targetTitle: this.targetTitle,
            previousStatus: this.previousStatus,
            newStatus: this.newStatus,
            details: this.details,
            reason: this.reason,
            ipAddress: this.ipAddress,
            timestamp: this.timestamp
        };
    }
}
