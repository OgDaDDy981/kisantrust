/**
 * KisanTrust - In-App Notification Service
 * Manages notification dispatch, retrieval, unread counts, and status updates for all roles.
 */

import { firebaseService } from './firebaseService.js';
import { NotificationRecord, NOTIFICATION_TYPES } from '../models/Notification.js';

export class NotificationService {
    /**
     * Send a notification to a specific user
     * @param {Object} params
     * @returns {Promise<NotificationRecord>}
     */
    static async sendNotification({ userId, type, title, message, relatedEntityType = 'LOT', relatedEntityId = '', priority = 'NORMAL', actionUrl = '' }) {
        await firebaseService.initializeData();
        const notification = new NotificationRecord({
            userId,
            type,
            title,
            message,
            relatedEntityType,
            relatedEntityId,
            priority,
            actionUrl
        });

        await (await firebaseService.db.collection('notifications')).doc(notification.notificationId).set(notification.toFirestore());
        return notification;
    }

    /**
     * Broadcast notification to all active administrators
     * @param {Object} params
     */
    static async notifyAdmins({ type = NOTIFICATION_TYPES.ADMIN_ALERT, title, message, relatedEntityType, relatedEntityId, priority = 'HIGH' }) {
        await firebaseService.initializeData();
        // Send to standard admin IDs
        const adminIds = ['admin_mh_001', 'admin_super'];
        for (const adminId of adminIds) {
            await this.sendNotification({
                userId: adminId,
                type,
                title: `🛡️ [Admin Alert] ${title}`,
                message,
                relatedEntityType,
                relatedEntityId,
                priority
            });
        }
    }

    /**
     * Get all notifications for a user
     * @param {string} userId
     * @returns {Promise<Array<NotificationRecord>>}
     */
    static async getUserNotifications(userId) {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('notifications')).get();
        return snap.docs
            .map(d => new NotificationRecord(d.data()))
            .filter(n => !userId || n.userId === userId)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Get unread notification count
     * @param {string} userId
     * @returns {Promise<number>}
     */
    static async getUnreadCount(userId) {
        const list = await this.getUserNotifications(userId);
        return list.filter(n => !n.isRead).length;
    }

    /**
     * Mark a single notification as read
     * @param {string} notificationId
     * @returns {Promise<boolean>}
     */
    static async markAsRead(notificationId) {
        await firebaseService.initializeData();
        await (await firebaseService.db.collection('notifications')).doc(notificationId).update({
            isRead: true,
            updatedAt: new Date().toISOString()
        });
        return true;
    }

    /**
     * Mark all notifications as read for a user
     * @param {string} userId
     */
    static async markAllAsRead(userId) {
        const list = await this.getUserNotifications(userId);
        for (const n of list) {
            if (!n.isRead) {
                await this.markAsRead(n.notificationId);
            }
        }
        return true;
    }
}
