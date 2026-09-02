/**
 * KisanTrust - In-App Notification Domain Model
 * Manages multi-role in-app alerts and status updates for Farmers, Buyers, and Admins.
 */

export const NOTIFICATION_TYPES = {
    PROFILE_VERIFIED: 'PROFILE_VERIFIED',
    PROFILE_CHANGES_REQUESTED: 'PROFILE_CHANGES_REQUESTED',
    LOT_SUBMITTED: 'LOT_SUBMITTED',
    LOT_APPROVED: 'LOT_APPROVED',
    LOT_REJECTED: 'LOT_REJECTED',
    LOT_CHANGES_REQUESTED: 'LOT_CHANGES_REQUESTED',
    DEMAND_APPROVED: 'DEMAND_APPROVED',
    DEMAND_MATCH: 'DEMAND_MATCH',
    OFFER_RECEIVED: 'OFFER_RECEIVED',
    COUNTEROFFER_RECEIVED: 'COUNTEROFFER_RECEIVED',
    OFFER_ACCEPTED: 'OFFER_ACCEPTED',
    PICKUP_SCHEDULED: 'PICKUP_SCHEDULED',
    DELIVERY_CONFIRMED: 'DELIVERY_CONFIRMED',
    PAYMENT_UPDATE: 'PAYMENT_UPDATE',
    DISPUTE_UPDATE: 'DISPUTE_UPDATE',
    RATING_UPDATED: 'RATING_UPDATED',
    ADMIN_ALERT: 'ADMIN_ALERT',
    VERIFICATION_UPDATE: 'PROFILE_VERIFIED'
};

export class NotificationRecord {
    constructor(data = {}) {
        this.notificationId = data.notificationId || `NOTIF-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.userId = data.userId || 'farmer_mh_001';
        this.type = data.type || NOTIFICATION_TYPES.LOT_APPROVED;
        this.title = data.title || 'Notification';
        this.message = data.message || '';
        this.relatedEntityType = data.relatedEntityType || 'LOT'; // 'LOT' | 'TRANSACTION' | 'DISPUTE' | 'DEMAND' | 'PROFILE'
        this.relatedEntityId = data.relatedEntityId || '';
        this.isRead = Boolean(data.isRead ?? data.read ?? false);
        this.read = this.isRead;
        this.priority = data.priority || 'NORMAL'; // 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT'
        this.actionUrl = data.actionUrl || '';
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            notificationId: this.notificationId,
            userId: this.userId,
            type: this.type,
            title: this.title,
            message: this.message,
            relatedEntityType: this.relatedEntityType,
            relatedEntityId: this.relatedEntityId,
            isRead: this.isRead,
            priority: this.priority,
            actionUrl: this.actionUrl,
            createdAt: this.createdAt
        };
    }
}
