/**
 * KisanTrust - Lot & Buyer Demand Moderation Service
 * Performs automated pre-checks (duplicate detection, image validation, quantity thresholds)
 * and powers the Admin Review Queues to ensure only verified listings enter the marketplace.
 */

import { firebaseService } from './firebaseService.js';
import { DigitalAgriculturalLot, LOT_STATUSES } from '../models/Lot.js';
import { BuyerDemand } from '../models/Buyer.js';
import { RiskService } from './riskService.js';
import { AuditService } from './auditService.js';
import { AUDIT_ACTIONS } from '../models/AuditLog.js';
import { NotificationService } from './notificationService.js';
import { NOTIFICATION_TYPES } from '../models/Notification.js';

export class LotModerationService {
    // ==================== AUTOMATED PRE-CHECKS ====================

    /**
     * Runs deterministic automated validation rules before lot reaches admin review queue
     * @param {Object} lotData
     * @param {Array<Object>} existingLots
     * @returns {Object} { passed: boolean, checks: Array, flags: Array, errors: Array }
     */
    static performAutomatedLotPreCheck(lotData, existingLots = []) {
        const checks = [];
        const flags = [];
        const errors = [];

        // 1. Required Fields Validation
        if (lotData.cropType) {
            checks.push('REQUIRED_FIELDS_PRESENT');
        } else {
            errors.push('Missing cropType.');
        }

        // 2. Quantity Validation
        const qty = Number(lotData.quantity);
        if (!isNaN(qty) && qty > 0) {
            checks.push('QUANTITY_VALID');
        } else {
            errors.push('Quantity must be greater than zero.');
        }

        // 3. Image Usability & Minimum Angle Validation
        const images = (Array.isArray(lotData.imageReferences) && lotData.imageReferences.length > 0) ? lotData.imageReferences : ((Array.isArray(lotData.uploadedFiles) && lotData.uploadedFiles.length > 0) ? lotData.uploadedFiles : (Array.isArray(lotData.exteriorPhotos) ? lotData.exteriorPhotos : []));
        const imageCount = images.length;
        if (imageCount >= 1) {
            checks.push('IMAGES_PRESENT');
        } else {
            errors.push('At least one produce image is required for quality verification.');
        }

        // 4. Quality Grade Assessment Validation
        if (lotData.overallQualityGrade && ['Grade A', 'Grade B', 'Grade C'].includes(lotData.overallQualityGrade)) {
            checks.push('QUALITY_GRADE_VALID');
        } else {
            errors.push('A verified quality grade (Grade A, B, or C) from produce analysis is required before submitting a listing.');
        }

        // 5. Automated Duplicate & Anomaly Detection
        const duplicateFlags = RiskService.checkLotDuplicateRisk(lotData, existingLots);
        if (duplicateFlags.length > 0) {
            flags.push(...duplicateFlags);
        }

        const passed = errors.length === 0;

        return {
            passed,
            score: passed ? 90 : 25,
            checks,
            flags,
            errors,
            checkedAt: new Date().toISOString()
        };
    }

    static async preCheckLot(lotData, existingLots = []) {
        return this.performAutomatedLotPreCheck(lotData, existingLots);
    }

    // ==================== LOT SUBMISSION & REVIEW QUEUE ====================

    /**
     * Submit lot for verification through automated pre-checks
     * @param {Object} lotData
     * @returns {Promise<DigitalAgriculturalLot>}
     */
    static async submitLotForVerification(lotData) {
        await firebaseService.initializeData();
        const allLots = await (await firebaseService.db.collection('lots')).get();
        const existingLots = allLots.docs.map(d => d.data());

        const preCheck = this.performAutomatedLotPreCheck(lotData, existingLots);

        if (!preCheck.passed) {
            throw new Error(`Pre-check validation failed: ${preCheck.errors.join(' ')}`);
        }

        const lot = new DigitalAgriculturalLot({
            ...lotData,
            status: LOT_STATUSES.PENDING_ADMIN_REVIEW,
            moderationStatus: 'PENDING_ADMIN_REVIEW',
            preCheckResults: preCheck,
            riskFlags: preCheck.flags
        });

        // Store lot in Firestore
        await (await firebaseService.db.collection('lots')).doc(lot.lotId).set(lot.toFirestore());

        // Create internal risk flag if detected
        if (preCheck.flags.length > 0) {
            for (const flagType of preCheck.flags) {
                await RiskService.createRiskFlag({
                    entityType: 'LOT',
                    entityId: lot.lotId,
                    entityTitle: `${lot.cropType} (${lot.quantity}kg) - ${lot.farmerName}`,
                    flagType,
                    details: { preCheck }
                });
            }
        }

        // Notify admins
        await NotificationService.notifyAdmins({
            type: NOTIFICATION_TYPES.LOT_SUBMITTED,
            title: 'नवीन शेती लॉट पुनरावलोकन प्रलंबित',
            message: `${lot.farmerName} यांनी ${lot.quantity} kg ${lot.cropType} चा नवीन लॉट (${lot.overallQualityGrade}) मंजुरीसाठी सादर केला आहे.`,
            relatedEntityType: 'LOT',
            relatedEntityId: lot.lotId
        });

        return lot;
    }

    /**
     * Get all lots awaiting admin review
     * @returns {Promise<Array<DigitalAgriculturalLot>>}
     */
    static async getLotsAwaitingReview() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('lots')).get();
        return snap.docs
            .map(d => new DigitalAgriculturalLot(d.data()))
            .filter(l => l.moderationStatus === 'PENDING_ADMIN_REVIEW' || l.status === 'PENDING_ADMIN_REVIEW')
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Approve Lot and Publish to Marketplace
     * @param {string} lotId
     * @param {string} adminId
     * @param {string} [notes=""]
     * @returns {Promise<DigitalAgriculturalLot>}
     */
    static async approveAndPublishLot(lotId, adminId = 'admin_mh_001', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('lots')).doc(lotId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Lot ${lotId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: LOT_STATUSES.PUBLISHED,
            moderationStatus: 'APPROVED',
            adminNotes: notes,
            rejectionReason: '',
            changesRequested: [],
            reviewedBy: adminId,
            reviewedAt: now,
            publishedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const lotData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.LOT_APPROVED,
            targetType: 'LOT',
            targetId: lotId,
            targetTitle: `${lotData.cropType} (${lotData.quantity}kg) - ${lotData.farmerName}`,
            previousStatus: lotData.status,
            newStatus: LOT_STATUSES.PUBLISHED,
            details: { notes },
            reason: notes || 'Verified quality images and farmer authenticity'
        });

        await NotificationService.sendNotification({
            userId: lotData.farmerId,
            type: NOTIFICATION_TYPES.LOT_APPROVED,
            title: '✅ आपला लॉट मंजूर झाला आहे!',
            message: `आपला ${lotData.cropType} चा लॉट (${lotData.lotId}) प्रशासकांकडून मंजूर होऊन खरेदीदार बाजारपेठेत थेट खरेदीदारांसाठी खुला करण्यात आला आहे.`,
            relatedEntityType: 'LOT',
            relatedEntityId: lotId
        });

        return new DigitalAgriculturalLot({ ...lotData, ...updates });
    }

    /**
     * Reject Lot with Mandatory Reason
     * @param {string} lotId
     * @param {string} rejectionReason
     * @param {string} adminId
     */
    static async rejectLot(lotId, rejectionReason, adminId = 'admin_mh_001') {
        if (!rejectionReason) throw new Error('Rejection reason is required.');

        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('lots')).doc(lotId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Lot ${lotId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: LOT_STATUSES.REJECTED,
            moderationStatus: 'REJECTED',
            rejectionReason,
            reviewedBy: adminId,
            reviewedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const lotData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.LOT_REJECTED,
            targetType: 'LOT',
            targetId: lotId,
            targetTitle: `${lotData.cropType} (${lotData.quantity}kg) - ${lotData.farmerName}`,
            previousStatus: lotData.status,
            newStatus: LOT_STATUSES.REJECTED,
            details: { rejectionReason },
            reason: rejectionReason
        });

        const farmerName = lotData.farmerName || 'शेतकरी मित्र';
        const politeMessage = `प्रिय ${farmerName}, आपल्या ${lotData.cropType} (${lotData.quantity}kg) लॉटच्या नोंदणीबाबत प्रशासकीय पुनरावलोकन पूर्ण झाले आहे.\n\n📝 प्रशासकीय शेरा (Admin Remarks): "${rejectionReason}"\n\n💡 आपण आपल्या उत्पादनाचे नवीन/स्पष्ट फोटो किंवा सुधारित माहितीसह पुन्हा नोंदणी करू शकता. किसान ट्रस्ट आपल्या मदतीसाठी सदैव तयार आहे.`;

        const farmerId = lotData.farmerId || 'farmer_mh_001';
        await NotificationService.sendNotification({
            userId: farmerId,
            type: NOTIFICATION_TYPES.LOT_REJECTED,
            title: `📋 लॉट नोंदणी पुनरावलोकन सूचना (${lotData.cropType})`,
            message: politeMessage,
            relatedEntityType: 'LOT',
            relatedEntityId: lotId
        });

        return new DigitalAgriculturalLot({ ...lotData, ...updates });
    }

    /**
     * Request Changes on Lot
     * @param {string} lotId
     * @param {Array<string>} changesList
     * @param {string} adminId
     */
    static async requestLotChanges(lotId, changesList = [], adminId = 'admin_mh_001') {
        const list = Array.isArray(changesList) ? changesList : [changesList];
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('lots')).doc(lotId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Lot ${lotId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: LOT_STATUSES.CHANGES_REQUIRED,
            moderationStatus: 'CHANGES_REQUIRED',
            changesRequested: list,
            reviewedBy: adminId,
            reviewedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const lotData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.LOT_CHANGES_REQUESTED,
            targetType: 'LOT',
            targetId: lotId,
            targetTitle: `${lotData.cropType} (${lotData.quantity}kg) - ${lotData.farmerName}`,
            previousStatus: lotData.status,
            newStatus: LOT_STATUSES.CHANGES_REQUIRED,
            details: { changesList: list },
            reason: list.join('; ')
        });

        await NotificationService.sendNotification({
            userId: lotData.farmerId,
            type: NOTIFICATION_TYPES.LOT_CHANGES_REQUESTED,
            title: '⚠️ लॉट माहितीमध्ये सुधारणा आवश्यक आहे',
            message: `प्रशासकांनी पुढील बदल मागितले आहेत: ${list.join(', ')}`,
            relatedEntityType: 'LOT',
            relatedEntityId: lotId
        });

        return new DigitalAgriculturalLot({ ...lotData, ...updates });
    }

    // ==================== BUYER DEMANDS REVIEW QUEUE ====================

    /**
     * Get buyer demands awaiting admin review
     * @returns {Promise<Array<BuyerDemand>>}
     */
    static async getBuyerDemandsAwaitingReview() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('buyerDemands')).get();
        return snap.docs
            .map(d => new BuyerDemand(d.data()))
            .filter(d => d.moderationStatus === 'PENDING_ADMIN_REVIEW' || d.status === 'PENDING_ADMIN_REVIEW' || d.status === 'SUBMITTED')
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Approve buyer demand and enable matching
     * @param {string} demandId
     * @param {string} adminId
     */
    static async approveBuyerDemand(demandId, adminId = 'admin_mh_001', notes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('buyerDemands')).doc(demandId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Buyer demand ${demandId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: 'ACTIVE',
            moderationStatus: 'APPROVED',
            adminNotes: notes,
            reviewedBy: adminId,
            reviewedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const demandData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.DEMAND_APPROVED,
            targetType: 'DEMAND',
            targetId: demandId,
            targetTitle: `${demandData.cropType} (${demandData.requiredQuantityKg}kg) - ${demandData.buyerName}`,
            previousStatus: demandData.status,
            newStatus: 'ACTIVE',
            details: { notes },
            reason: notes || 'Commercial terms and buyer verification confirmed'
        });

        await NotificationService.sendNotification({
            userId: demandData.buyerId,
            type: NOTIFICATION_TYPES.DEMAND_APPROVED,
            title: '✅ आपली खरेदी मागणी मंजूर झाली आहे!',
            message: `${demandData.cropType} (${demandData.requiredQuantityKg}kg) ची मागणी मंजूर झाली असून शेतकरी लॉट मॅचिंग सुरू झाले आहे.`,
            relatedEntityType: 'DEMAND',
            relatedEntityId: demandId
        });

        return new BuyerDemand({ ...demandData, ...updates });
    }

    /**
     * Reject buyer demand
     * @param {string} demandId
     * @param {string} rejectionReason
     * @param {string} adminId
     */
    static async rejectBuyerDemand(demandId, rejectionReason, adminId = 'admin_mh_001') {
        if (!rejectionReason) throw new Error('Rejection reason is required.');

        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('buyerDemands')).doc(demandId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Buyer demand ${demandId} not found.`);

        const now = new Date().toISOString();
        const updates = {
            status: 'REJECTED',
            moderationStatus: 'REJECTED',
            rejectionReason,
            reviewedBy: adminId,
            reviewedAt: now,
            updatedAt: now
        };

        await docRef.update(updates);
        const demandData = doc.data();

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.DEMAND_REJECTED,
            targetType: 'DEMAND',
            targetId: demandId,
            targetTitle: `${demandData.cropType} (${demandData.requiredQuantityKg}kg) - ${demandData.buyerName}`,
            previousStatus: demandData.status,
            newStatus: 'REJECTED',
            details: { rejectionReason },
            reason: rejectionReason
        });

        return new BuyerDemand({ ...demandData, ...updates });
    }

    /**
     * Aliases & Lot Query Helpers
     */
    static async getLotsForReview() {
        return this.getLotsAwaitingReview();
    }

    static async publishLot(lotId, adminId = 'admin_mh_001', notes = '') {
        return this.approveAndPublishLot(lotId, adminId, notes);
    }

    static async getLotById(lotId) {
        await firebaseService.initializeData();
        const doc = await (await firebaseService.db.collection('lots')).doc(lotId).get();
        if (doc.exists) {
            return new DigitalAgriculturalLot(doc.data());
        }
        return null;
    }

    static async getDemandsForReview() {
        return this.getBuyerDemandsAwaitingReview();
    }

    static async approveDemand(demandId, adminId = 'admin_mh_001', notes = '') {
        return this.approveBuyerDemand(demandId, adminId, notes);
    }

    static async rejectDemand(demandId, rejectionReason, adminId = 'admin_mh_001') {
        return this.rejectBuyerDemand(demandId, rejectionReason, adminId);
    }
}
