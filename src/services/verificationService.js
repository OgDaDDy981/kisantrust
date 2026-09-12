/**
 * AgriLink - User Verification & Account Moderation Service
 * Manages administrative verification queues, approval workflows, suspensions,
 * and internal administrative notes with full audit trail logging.
 */

import { firebaseService } from './firebaseService.js';
import { FarmerProfile, BuyerProfileRecord, VERIFICATION_STATUS, ACCOUNT_STATUS } from '../models/User.js';
import { AuditService } from './auditService.js';
import { AUDIT_ACTIONS } from '../models/AuditLog.js';
import { NotificationService } from './notificationService.js';
import { NOTIFICATION_TYPES } from '../models/Notification.js';

export class VerificationService {
    // ==================== FARMER VERIFICATION ====================

    /**
     * Submit farmer profile for verification
     * @param {Object} farmerData
     * @returns {Promise<FarmerProfile>}
     */
    static async submitFarmerProfile(farmerData) {
        await firebaseService.initializeData();
        const profile = new FarmerProfile({
            ...farmerData,
            verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION
        });

        await (await firebaseService.db.collection('farmerProfiles')).doc(profile.userId).set(profile.toFirestore());

        // Update user base record
        try {
            await (await firebaseService.db.collection('users')).doc(profile.userId).update({
                verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION,
                updatedAt: new Date().toISOString()
            });
        } catch (e) {}

        // Notify admins of new pending farmer
        await NotificationService.notifyAdmins({
            type: NOTIFICATION_TYPES.ADMIN_ALERT,
            title: 'नवीन शेतकरी पडताळणी प्रलंबित',
            message: `${profile.personalDetails.fullName} (${profile.personalDetails.district}) यांनी शेतकरी प्रोफाइल पडताळणीसाठी सादर केली आहे.`,
            relatedEntityType: 'FARMER',
            relatedEntityId: profile.userId
        });

        return profile;
    }

    /**
     * Get list of pending farmer verification requests
     * @returns {Promise<Array<FarmerProfile>>}
     */
    static async getPendingFarmers() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('farmerProfiles')).get();
        return snap.docs
            .map(d => new FarmerProfile(d.data()))
            .filter(f => f.verificationStatus === VERIFICATION_STATUS.PENDING_VERIFICATION || f.verificationStatus === VERIFICATION_STATUS.PROFILE_SUBMITTED)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Approve Farmer Account
     * @param {string} userId
     * @param {string} adminId
     * @param {string} [notes=""]
     * @returns {Promise<FarmerProfile>}
     */
    static async approveFarmer(userId, adminId = 'admin_mh_001', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('farmerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Farmer profile ${userId} not found.`);
        }

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            rejectionReason: '',
            changesRequested: [],
            updatedAt: now
        });

        await (await firebaseService.db.collection('users')).doc(userId).update({
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            updatedAt: now
        });

        const farmerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.FARMER_VERIFIED,
            targetType: 'FARMER',
            targetId: userId,
            targetTitle: farmerData.personalDetails?.fullName || userId,
            previousStatus: farmerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.VERIFIED,
            details: { notes },
            reason: notes || 'All identity and farm details verified successfully'
        });

        await NotificationService.sendNotification({
            userId,
            type: NOTIFICATION_TYPES.PROFILE_VERIFIED,
            title: '🎉 आपले शेतकरी खाते प्रमाणित झाले आहे!',
            message: 'अभिनंदन! आपले अ‍ॅग्रीलिंक शेतकरी खाते यशस्वीरीत्या सत्यापित झाले आहे. आता आपण डिजिटल लॉट तयार करून बाजारात थेट विक्री करू शकता.',
            relatedEntityType: 'PROFILE',
            relatedEntityId: userId
        });

        return new FarmerProfile({ ...farmerData, verificationStatus: VERIFICATION_STATUS.VERIFIED });
    }

    /**
     * Request Changes on Farmer Account
     * @param {string} userId
     * @param {Array<string>} changesList
     * @param {string} adminId
     * @returns {Promise<FarmerProfile>}
     */
    static async requestFarmerChanges(userId, changesList = [], adminId = 'admin_mh_001') {
        const list = Array.isArray(changesList) ? changesList : [changesList];
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('farmerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Farmer profile ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.CHANGES_REQUIRED,
            changesRequested: list,
            updatedAt: now
        });

        await (await firebaseService.db.collection('users')).doc(userId).update({
            verificationStatus: VERIFICATION_STATUS.CHANGES_REQUIRED,
            updatedAt: now
        });

        const farmerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.FARMER_CHANGES_REQUESTED,
            targetType: 'FARMER',
            targetId: userId,
            targetTitle: farmerData.personalDetails?.fullName || userId,
            previousStatus: farmerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.CHANGES_REQUIRED,
            details: { changesList: list },
            reason: list.join('; ')
        });

        await NotificationService.sendNotification({
            userId,
            type: NOTIFICATION_TYPES.PROFILE_CHANGES_REQUESTED,
            title: '⚠️ प्रोफाइलमध्ये बदल आवश्यक आहेत',
            message: `कृपया पुढील दुरुस्ती करा: ${list.join(', ')}`,
            relatedEntityType: 'PROFILE',
            relatedEntityId: userId
        });

        return new FarmerProfile({ ...farmerData, verificationStatus: VERIFICATION_STATUS.CHANGES_REQUIRED, changesRequested: list });
    }

    /**
     * Reject Farmer Account
     * @param {string} userId
     * @param {string} rejectionReason
     * @param {string} adminId
     * @returns {Promise<FarmerProfile>}
     */
    static async rejectFarmer(userId, rejectionReason, adminId = 'admin_mh_001') {
        if (!rejectionReason) throw new Error('Rejection reason is mandatory.');

        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('farmerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Farmer profile ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.UNDER_REVIEW,
            rejectionReason,
            updatedAt: now
        });

        const farmerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.FARMER_REJECTED,
            targetType: 'FARMER',
            targetId: userId,
            targetTitle: farmerData.personalDetails?.fullName || userId,
            previousStatus: farmerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.UNDER_REVIEW,
            details: { rejectionReason },
            reason: rejectionReason
        });

        return new FarmerProfile({ ...farmerData, verificationStatus: VERIFICATION_STATUS.UNDER_REVIEW, rejectionReason });
    }

    // ==================== BUYER VERIFICATION ====================

    /**
     * Submit buyer profile for verification
     * @param {Object} buyerData
     * @returns {Promise<BuyerProfileRecord>}
     */
    static async submitBuyerProfile(buyerData) {
        await firebaseService.initializeData();
        const profile = new BuyerProfileRecord({
            ...buyerData,
            verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION
        });

        await (await firebaseService.db.collection('buyerProfiles')).doc(profile.userId).set(profile.toFirestore());

        await (await firebaseService.db.collection('users')).doc(profile.userId).update({
            verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION,
            updatedAt: new Date().toISOString()
        });

        await NotificationService.notifyAdmins({
            type: NOTIFICATION_TYPES.ADMIN_ALERT,
            title: 'नवीन खरेदीदार पडताळणी प्रलंबित',
            message: `${profile.businessDetails.companyName} (${profile.businessDetails.buyerType}) यांनी व्यवसाय पडताळणीसाठी कागदपत्रे सादर केली आहेत.`,
            relatedEntityType: 'BUYER',
            relatedEntityId: profile.userId
        });

        return profile;
    }

    /**
     * Get list of pending buyer verification requests
     * @returns {Promise<Array<BuyerProfileRecord>>}
     */
    static async getPendingBuyers() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('buyerProfiles')).get();
        return snap.docs
            .map(d => new BuyerProfileRecord(d.data()))
            .filter(b => b.verificationStatus === VERIFICATION_STATUS.PENDING_VERIFICATION || b.verificationStatus === VERIFICATION_STATUS.PROFILE_SUBMITTED)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Approve Buyer Account
     * @param {string} userId
     * @param {string} adminId
     * @param {string} [notes=""]
     * @returns {Promise<BuyerProfileRecord>}
     */
    static async approveBuyer(userId, adminId = 'admin_mh_001', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('buyerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Buyer profile ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            documentsVerified: true,
            rejectionReason: '',
            changesRequested: [],
            updatedAt: now
        });

        await (await firebaseService.db.collection('users')).doc(userId).update({
            verificationStatus: VERIFICATION_STATUS.VERIFIED,
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            updatedAt: now
        });

        const buyerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.BUYER_VERIFIED,
            targetType: 'BUYER',
            targetId: userId,
            targetTitle: buyerData.businessDetails?.companyName || userId,
            previousStatus: buyerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.VERIFIED,
            details: { notes },
            reason: notes || 'GSTIN and company credentials verified'
        });

        await NotificationService.sendNotification({
            userId,
            type: NOTIFICATION_TYPES.PROFILE_VERIFIED,
            title: '🎉 खरेदीदार व्यवसाय खाते प्रमाणित!',
            message: `${buyerData.businessDetails?.companyName} खाते यशस्वीरीत्या प्रमाणित करण्यात आले आहे. आपण आता थेट खरेदी मागण्या नोंदवू शकता.`,
            relatedEntityType: 'PROFILE',
            relatedEntityId: userId
        });

        return new BuyerProfileRecord({ ...buyerData, verificationStatus: VERIFICATION_STATUS.VERIFIED, documentsVerified: true });
    }

    /**
     * Reject Buyer Account
     * @param {string} userId
     * @param {string} rejectionReason
     * @param {string} adminId
     */
    static async rejectBuyer(userId, rejectionReason, adminId = 'admin_mh_001') {
        if (!rejectionReason) throw new Error('Rejection reason is mandatory.');

        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('buyerProfiles')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Buyer profile ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            verificationStatus: VERIFICATION_STATUS.UNDER_REVIEW,
            rejectionReason,
            updatedAt: now
        });

        const buyerData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.BUYER_REJECTED,
            targetType: 'BUYER',
            targetId: userId,
            targetTitle: buyerData.businessDetails?.companyName || userId,
            previousStatus: buyerData.verificationStatus,
            newStatus: VERIFICATION_STATUS.UNDER_REVIEW,
            details: { rejectionReason },
            reason: rejectionReason
        });

        return new BuyerProfileRecord({ ...buyerData, verificationStatus: VERIFICATION_STATUS.UNDER_REVIEW, rejectionReason });
    }

    // ==================== USER MANAGEMENT & SUSPENSIONS ====================

    /**
     * Suspend user account
     * @param {string} userId
     * @param {string} reason
     * @param {string} adminId
     */
    static async suspendUser(userId, reason, adminId = 'admin_mh_001') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('users')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`User ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            accountStatus: ACCOUNT_STATUS.SUSPENDED,
            updatedAt: now
        });

        const userData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.USER_SUSPENDED,
            targetType: 'USER',
            targetId: userId,
            targetTitle: userData.displayName || userId,
            previousStatus: userData.accountStatus,
            newStatus: ACCOUNT_STATUS.SUSPENDED,
            details: { reason },
            reason
        });

        return true;
    }

    /**
     * Reactivate suspended user account
     * @param {string} userId
     * @param {string} adminId
     */
    static async reactivateUser(userId, adminId = 'admin_mh_001') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('users')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`User ${userId} not found.`);

        const now = new Date().toISOString();
        await docRef.update({
            accountStatus: ACCOUNT_STATUS.ACTIVE,
            updatedAt: now
        });

        const userData = doc.data();
        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.USER_REACTIVATED,
            targetType: 'USER',
            targetId: userId,
            targetTitle: userData.displayName || userId,
            previousStatus: userData.accountStatus,
            newStatus: ACCOUNT_STATUS.ACTIVE,
            details: {},
            reason: 'Account reactivated by administrator'
        });

        return true;
    }

    /**
     * Add Internal Admin Note
     * @param {string} userId
     * @param {string} noteText
     * @param {string} adminId
     */
    static async addAdminNote(userId, noteText, adminId = 'admin_mh_001') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('users')).doc(userId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`User ${userId} not found.`);

        const userData = doc.data();
        const notes = userData.adminNotes || [];
        const newNote = {
            noteId: `NOTE-${Date.now()}`,
            adminId,
            text: noteText,
            timestamp: new Date().toISOString()
        };

        await docRef.update({
            adminNotes: [...notes, newNote],
            updatedAt: new Date().toISOString()
        });

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.ADMIN_NOTE_ADDED,
            targetType: 'USER',
            targetId: userId,
            targetTitle: userData.displayName || userId,
            details: { noteText },
            reason: 'Internal administrative note added'
        });

        return newNote;
    }

    /**
     * Aliases and Query Helpers
     */
    static async getFarmerVerificationQueue() {
        return this.getPendingFarmers();
    }

    static async getBuyerVerificationQueue() {
        return this.getPendingBuyers();
    }

    static async getUserById(userId) {
        await firebaseService.initializeData();
        const userDoc = await (await firebaseService.db.collection('users')).doc(userId).get();
        if (userDoc.exists) {
            return userDoc.data();
        }

        const farmerDoc = await (await firebaseService.db.collection('farmerProfiles')).doc(userId).get();
        if (farmerDoc.exists) {
            return farmerDoc.data();
        }

        const buyerDoc = await (await firebaseService.db.collection('buyerProfiles')).doc(userId).get();
        if (buyerDoc.exists) {
            return buyerDoc.data();
        }

        return null;
    }

    static async getAllUsers() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('users')).get();
        return snap.docs.map(d => d.data());
    }
}
