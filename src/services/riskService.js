/**
 * KisanTrust - Fraud & Risk Flag Management Service
 * Detects suspicious activity, manages internal risk flags, and supports admin resolution.
 */

import { firebaseService } from './firebaseService.js';
import { RiskFlagRecord, RISK_FLAG_TYPES } from '../models/RiskFlag.js';
import { AuditService } from './auditService.js';
import { AUDIT_ACTIONS } from '../models/AuditLog.js';

export class RiskService {
    /**
     * Create an internal risk flag
     * @param {Object} params
     * @returns {Promise<RiskFlagRecord>}
     */
    static async createRiskFlag({
        entityType = 'LOT',
        entityId,
        entityTitle = '',
        flagType = 'DUPLICATE_IMAGES',
        details = {}
    }) {
        await firebaseService.initializeData();
        const typeConfig = RISK_FLAG_TYPES[flagType] || { label: 'Suspicious Activity', severity: 'MEDIUM' };

        const flag = new RiskFlagRecord({
            entityType,
            entityId,
            entityTitle,
            flagType,
            severity: typeConfig.severity,
            label: typeConfig.label,
            details,
            resolved: false
        });

        await (await firebaseService.db.collection('riskFlags')).doc(flag.flagId).set(flag.toFirestore());

        await AuditService.logAction({
            action: AUDIT_ACTIONS.RISK_FLAG_CREATED,
            targetType: entityType,
            targetId: entityId,
            targetTitle: entityTitle,
            details: { flagId: flag.flagId, flagType, severity: flag.severity },
            reason: typeConfig.label
        });

        return flag;
    }

    /**
     * Retrieve all risk flags
     * @param {boolean} [unresolvedOnly=false]
     * @returns {Promise<Array<RiskFlagRecord>>}
     */
    static async getRiskFlags(unresolvedOnly = false) {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('riskFlags')).get();
        let list = snap.docs.map(d => new RiskFlagRecord(d.data()));

        if (unresolvedOnly) {
            list = list.filter(f => !f.resolved);
        }

        return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    static async getActiveRiskFlags() {
        return this.getRiskFlags(true);
    }

    static async flagDuplicateImages({ lotId, farmerId, duplicateLotId = '', confidenceScore = 0.95 }) {
        return this.createRiskFlag({
            entityType: 'LOT',
            entityId: lotId,
            entityTitle: `Lot ${lotId} (Farmer ${farmerId})`,
            flagType: 'DUPLICATE_IMAGES',
            details: { farmerId, duplicateLotId, confidenceScore }
        });
    }

    /**
     * Resolve a risk flag
     * @param {string} flagId
     * @param {string} adminId
     * @param {string} resolutionNotes
     * @returns {Promise<RiskFlagRecord>}
     */
    static async resolveRiskFlag(flagId, adminId = 'admin_mh_001', resolutionNotes = '') {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('riskFlags')).doc(flagId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Risk flag ${flagId} not found.`);
        }

        const now = new Date().toISOString();
        await docRef.update({
            resolved: true,
            resolvedBy: adminId,
            resolutionNotes: resolutionNotes || 'Risk reviewed and resolved by administrator.',
            resolvedAt: now,
            updatedAt: now
        });

        const updatedData = {
            ...doc.data(),
            resolved: true,
            resolvedBy: adminId,
            resolutionNotes: resolutionNotes || 'Risk reviewed and resolved by administrator.',
            resolvedAt: now
        };

        await AuditService.logAction({
            adminId,
            action: AUDIT_ACTIONS.RISK_FLAG_RESOLVED,
            targetType: updatedData.entityType,
            targetId: updatedData.entityId,
            targetTitle: updatedData.entityTitle,
            details: { flagId, resolutionNotes },
            reason: 'Flag resolved by administrator'
        });

        return new RiskFlagRecord(updatedData);
    }

    /**
     * Automated Duplicate Detection for Lots
     * Checks if the same farmer submitted duplicate images, identical crop/quantity in a short window.
     * @param {Object} lotData DigitalAgriculturalLot
     * @param {Array<Object>} existingLots
     * @returns {Array<string>} Detected risk flag codes
     */
    static checkLotDuplicateRisk(lotData, existingLots = []) {
        const flags = [];
        if (!existingLots || existingLots.length === 0) return flags;

        // Check for duplicate images or near-identical recent submission (within 24 hours)
        const dayAgo = Date.now() - (24 * 60 * 60 * 1000);
        const farmerRecentLots = existingLots.filter(l => 
            l.farmerId === lotData.farmerId && 
            l.lotId !== lotData.lotId &&
            new Date(l.createdAt).getTime() > dayAgo
        );

        for (const existing of farmerRecentLots) {
            // Check image overlaps
            if (lotData.imageReferences?.length && existing.imageReferences?.length) {
                const overlap = lotData.imageReferences.some(img => existing.imageReferences.includes(img));
                if (overlap) {
                    flags.push('DUPLICATE_IMAGES');
                    break;
                }
            }

            // Check exact identical crop & quantity submitted in short window
            if (existing.cropType === lotData.cropType && 
                Number(existing.quantity) === Number(lotData.quantity) &&
                existing.variety === lotData.variety) {
                flags.push('UNUSUAL_LISTING_FREQUENCY');
                break;
            }
        }

        return [...new Set(flags)];
    }
}
