/**
 * AgriLink - Admin Audit Trail Service
 * Records and queries immutable logs of administrative actions for transparency and governance.
 */

import { firebaseService } from './firebaseService.js';
import { AuditLogRecord, AUDIT_ACTIONS } from '../models/AuditLog.js';

export class AuditService {
    /**
     * Records a new administrative action in the audit log
     * @param {Object} params
     * @returns {Promise<AuditLogRecord>}
     */
    static async logAction(params = {}) {
        await firebaseService.initializeData();
        const log = new AuditLogRecord(params);
        await (await firebaseService.db.collection('auditLogs')).doc(log.logId).set(log.toFirestore());
        return log;
    }

    /**
     * Retrieve audit logs with optional filters
     * @param {Object|number} filters
     * @returns {Promise<Array<AuditLogRecord>>}
     */
    static async getAuditLogs(filters = {}) {
        await firebaseService.initializeData();
        const limit = typeof filters === 'number' ? filters : (filters.limit || 100);
        const snap = await (await firebaseService.db.collection('auditLogs')).get();
        let list = snap.docs.map(d => new AuditLogRecord(d.data()));

        if (typeof filters === 'object') {
            if (filters.targetType || filters.targetEntityType) {
                const tt = filters.targetType || filters.targetEntityType;
                list = list.filter(l => l.targetType === tt || l.targetEntityType === tt);
            }
            if (filters.targetId || filters.targetEntityId) {
                const tid = filters.targetId || filters.targetEntityId;
                list = list.filter(l => l.targetId === tid || l.targetEntityId === tid);
            }
            if (filters.action) {
                list = list.filter(l => l.action === filters.action);
            }
            if (filters.adminId || filters.performedBy) {
                const adm = filters.adminId || filters.performedBy;
                list = list.filter(l => l.adminId === adm || l.performedBy === adm);
            }
        }

        return list.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, limit);
    }
}
