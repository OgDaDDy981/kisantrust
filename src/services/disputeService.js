/**
 * AgriLink - Evidence-Assisted Dispute Support Service
 * Enables farmers and buyers to log transparent disputes referencing certified
 * Digital Agricultural Lot quality scans and timestamps, with full administrative resolution workflows.
 */

import { firebaseService } from './firebaseService.js';
import { DisputeRecord, DISPUTE_STATUSES } from '../models/Dispute.js';
import { AuditService } from './auditService.js';
import { AUDIT_ACTIONS } from '../models/AuditLog.js';
import { NotificationService } from './notificationService.js';
import { NOTIFICATION_TYPES } from '../models/Notification.js';

export class DisputeService {
    /**
     * Raise a new evidence-backed dispute for a transaction
     * @param {Object} params
     * @returns {Promise<DisputeRecord>}
     */
    static async raiseDispute({ transaction, lot = null, category, description, supportingEvidenceUrls = [], raisedBy = 'FARMER' }) {
        await firebaseService.initializeData();

        // Extract certified lot evidence if available
        const lotEvidence = {
            lotId: transaction.lotId || lot?.lotId || 'LOT-RECORD-001',
            cropType: transaction.cropType || lot?.cropType || 'Tomato',
            certifiedGrade: transaction.qualityGrade || lot?.overallQualityGrade || 'Grade A',
            freshnessScore: transaction.freshnessScore || lot?.freshnessScore || 92,
            shelfLifeDays: lot?.estimatedShelfLifeDays || 8,
            cutVerificationVerified: lot?.internalQualityAnalysis ? true : false,
            assessmentTimestamp: lot?.createdAt || transaction.createdAt || new Date().toISOString(),
            originalImageUrls: lot?.imageReferences || []
        };

        const dispute = new DisputeRecord({
            transactionId: transaction.transactionId,
            raisedBy,
            claimantName: raisedBy === 'FARMER' ? transaction.farmerName : transaction.buyerName,
            respondentName: raisedBy === 'FARMER' ? transaction.buyerName : transaction.farmerName,
            category,
            description,
            supportingEvidenceUrls,
            originalLotQualityEvidence: lotEvidence,
            status: DISPUTE_STATUSES.OPEN
        });

        // Store in Firestore
        await (await firebaseService.db.collection('disputes')).doc(dispute.disputeId).set(dispute.toFirestore());

        // Update transaction dispute flag
        try {
            await (await firebaseService.db.collection('transactions')).doc(transaction.transactionId).update({
                disputeStatus: 'RAISED',
                updatedAt: new Date().toISOString()
            });
        } catch (e) {
            console.warn('Could not update transaction dispute status:', e.message);
        }

        // Notify Admins
        await NotificationService.notifyAdmins({
            type: NOTIFICATION_TYPES.ADMIN_ALERT,
            title: '⚠️ नवीन वाद / तक्रार दाखल झाली!',
            message: `${dispute.claimantName} यांनी व्यवहार ${transaction.transactionId} वर तक्रार (${dispute.categoryLabel}) नोंदवली आहे.`,
            relatedEntityType: 'DISPUTE',
            relatedEntityId: dispute.disputeId,
            priority: 'HIGH'
        });

        return dispute;
    }

    /**
     * Retrieve all disputes
     * @returns {Promise<Array<DisputeRecord>>}
     */
    static async getAllDisputes() {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('disputes')).get();
        return snap.docs
            .map(d => new DisputeRecord(d.data()))
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Retrieve disputes for a specific transaction
     * @param {string} transactionId
     * @returns {Promise<Array<DisputeRecord>>}
     */
    static async getDisputesForTransaction(transactionId) {
        const all = await this.getAllDisputes();
        return all.filter(d => d.transactionId === transactionId);
    }

    /**
     * Update dispute status (Admin workflow)
     * @param {string} disputeId
     * @param {string} nextStatus One of DISPUTE_STATUSES
     * @param {string} adminId
     * @param {string} adminNotes
     * @returns {Promise<DisputeRecord>}
     */
    static async updateDisputeStatus(disputeId, nextStatus, adminId = 'admin_mh_001', adminNotes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('disputes')).doc(disputeId);
        const doc = await docRef.get();

        if (!doc.exists) throw new Error(`Dispute ${disputeId} not found.`);

        const data = doc.data();
        const now = new Date().toISOString();
        await docRef.update({
            status: nextStatus,
            adminNotes,
            updatedAt: now
        });

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.DISPUTE_STATUS_CHANGED,
            targetType: 'DISPUTE',
            targetId: disputeId,
            targetTitle: `${data.categoryLabel} - ${data.claimantName}`,
            previousStatus: data.status,
            newStatus: nextStatus,
            details: { adminNotes },
            reason: adminNotes || `Status updated to ${nextStatus}`
        });

        return new DisputeRecord({ ...data, status: nextStatus, adminNotes });
    }

    /**
     * Resolve or close an existing dispute with official resolution notes
     * @param {string} disputeId
     * @param {string} resolutionNotes
     * @param {string} adminId
     * @returns {Promise<DisputeRecord>}
     */
    static async resolveDispute(disputeId, resolutionNotes = '', adminId = 'admin_mh_001') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('disputes')).doc(disputeId);
        const doc = await docRef.get();
        
        if (!doc.exists) {
            throw new Error(`Dispute ${disputeId} not found.`);
        }

        const data = doc.data();
        const now = new Date().toISOString();
        await docRef.update({
            status: DISPUTE_STATUSES.RESOLVED,
            resolutionNotes: resolutionNotes || 'Resolved through evidence-assisted mutual agreement.',
            resolvedBy: adminId,
            resolvedAt: now,
            updatedAt: now
        });

        // Update transaction dispute status
        try {
            await (await firebaseService.db.collection('transactions')).doc(data.transactionId).update({
                disputeStatus: 'RESOLVED',
                updatedAt: now
            });
        } catch (e) {}

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.DISPUTE_RESOLVED,
            targetType: 'DISPUTE',
            targetId: disputeId,
            targetTitle: `${data.categoryLabel} - ${data.claimantName}`,
            previousStatus: data.status,
            newStatus: DISPUTE_STATUSES.RESOLVED,
            details: { resolutionNotes },
            reason: resolutionNotes || 'Resolved based on certified lot quality baseline and transaction records'
        });

        return new DisputeRecord({
            ...data,
            status: DISPUTE_STATUSES.RESOLVED,
            resolutionNotes: resolutionNotes || 'Resolved through evidence-assisted mutual agreement.',
            resolvedBy: adminId,
            resolvedAt: now
        });
    }
}
