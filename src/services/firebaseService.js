/**
 * KisanTrust - Centralized Firebase Service
 * Manages Firestore collections, storage adapters, and seed datasets for the connected ecosystem.
 */

import { localDb, localAuth, localStorageService } from '../config/firebaseConfig.js';
import { initialMockLots } from '../data/mockLots.js';
import { mockMandiBenchmarks, mockBuyerDemands, mockPoolingClusters } from '../data/mockMandis.js';
import { mockBuyerProfiles } from '../data/mockBuyers.js';
import { initialMockTransactions } from '../data/mockTransactions.js';
import { initialMockDisputes } from '../data/mockDisputes.js';
import { initialPendingFarmers, initialPendingBuyers, initialRiskFlags, initialAuditLogs, initialNotifications } from '../data/mockAdminData.js';
import { FarmerProfile, BuyerProfileRecord, VERIFICATION_STATUS } from '../models/User.js';

class FirebaseService {
    constructor() {
        this.db = localDb;
        this.auth = localAuth;
        this.storage = localStorageService;
        this._initialized = false;
    }

    /**
     * Initializes all standard collections if empty
     */
    async initializeData() {
        if (this._initialized) return;

        // 1. Seed Lots if empty
        const lotsSnap = await (await this.db.collection('lots')).get();
        if (lotsSnap.empty) {
            for (const lot of initialMockLots) {
                const lotData = {
                    ...lot,
                    moderationStatus: lot.moderationStatus || 'APPROVED',
                    status: lot.status || 'PUBLISHED'
                };
                await (await this.db.collection('lots')).doc(lot.lotId).set(lotData);
            }
        }

        // 2. Seed Mandis if empty
        const mandisSnap = await (await this.db.collection('mandiBenchmarks')).get();
        if (mandisSnap.empty) {
            for (const mandi of mockMandiBenchmarks) {
                await (await this.db.collection('mandiBenchmarks')).doc(mandi.mandiId).set(mandi);
            }
        }

        // 3. Seed Buyer Demands if empty
        const buyersSnap = await (await this.db.collection('buyerDemands')).get();
        if (buyersSnap.empty) {
            for (const demand of mockBuyerDemands) {
                const demandData = {
                    ...demand,
                    moderationStatus: demand.moderationStatus || 'APPROVED',
                    status: demand.status || 'ACTIVE'
                };
                await (await this.db.collection('buyerDemands')).doc(demand.demandId).set(demandData);
            }
        }

        // 4. Seed Buyer Profiles
        const buyerProfSnap = await (await this.db.collection('buyerProfiles')).get();
        if (buyerProfSnap.empty) {
            for (const profile of mockBuyerProfiles) {
                const record = new BuyerProfileRecord({
                    ...profile,
                    userId: profile.buyerId,
                    verificationStatus: VERIFICATION_STATUS.VERIFIED
                });
                await (await this.db.collection('buyerProfiles')).doc(profile.buyerId).set(record.toFirestore());
            }
        }

        // 5. Seed Farmer Profiles
        const farmerProfSnap = await (await this.db.collection('farmerProfiles')).get();
        if (farmerProfSnap.empty) {
            const defaultFarmer = new FarmerProfile({
                userId: 'farmer_mh_001',
                personalDetails: {
                    fullName: 'रमेश मारुती पाटील (Ramesh Patil)',
                    mobileNumber: '+91 98224 56789',
                    emailAddress: 'ramesh.patil@kisantrust.org',
                    fullAddress: 'Gat No. 142, At Post Niphad',
                    pincode: '422303',
                    state: 'Maharashtra',
                    district: 'Nashik',
                    village: 'Niphad'
                },
                farmDetails: {
                    primaryCrops: ['Tomato', 'Onion'],
                    farmSizeAcres: 4.5,
                    productionCapacityTons: 25,
                    fpoMembership: 'KisanMitra Producer Co.'
                },
                verificationStatus: VERIFICATION_STATUS.VERIFIED,
                farmerRating: 4.8,
                totalTransactionsCompleted: 14
            });
            await (await this.db.collection('farmerProfiles')).doc('farmer_mh_001').set(defaultFarmer.toFirestore());

            // Add an unverified applicant farmer for demoing verification queue
            const applicantFarmer = new FarmerProfile({
                userId: 'farmer_mh_applicant_002',
                personalDetails: {
                    fullName: 'ज्ञानेश्वर तुकाराम गायकवाड (Dnyaneshwar Gaikwad)',
                    mobileNumber: '+91 98231 12345',
                    emailAddress: 'dnyaneshwar.g@gmail.com',
                    fullAddress: 'Plot 12, Pimplegaon Baswant',
                    pincode: '422209',
                    state: 'Maharashtra',
                    district: 'Nashik',
                    village: 'Pimplegaon'
                },
                farmDetails: {
                    primaryCrops: ['Tomato', 'Grapes', 'Onion'],
                    farmSizeAcres: 6.0,
                    productionCapacityTons: 35,
                    fpoMembership: 'Godavari FPO'
                },
                verificationStatus: VERIFICATION_STATUS.PENDING_VERIFICATION,
                farmerRating: 0,
                totalTransactionsCompleted: 0
            });
            await (await this.db.collection('farmerProfiles')).doc('farmer_mh_applicant_002').set(applicantFarmer.toFirestore());
        }

        // 6. Seed Pooling Clusters if empty
        const poolSnap = await (await this.db.collection('poolingClusters')).get();
        if (poolSnap.empty) {
            for (const cluster of mockPoolingClusters) {
                await (await this.db.collection('poolingClusters')).doc(cluster.clusterId).set(cluster);
            }
        }

        // 7. Seed Initial Risk Flags if empty
        const riskSnap = await (await this.db.collection('riskFlags')).get();
        if (riskSnap.empty) {
            const initialFlag = {
                flagId: 'RISK-DEMO-001',
                entityType: 'LOT',
                entityId: 'LOT-2026-990112',
                entityTitle: 'Onion (5000kg) - Ramesh Patil',
                flagType: 'UNUSUAL_LISTING_FREQUENCY',
                severity: 'MEDIUM',
                label: 'Unusual Listing Frequency',
                details: { note: 'Multiple lots registered in short time window for demo' },
                resolved: false,
                createdAt: new Date().toISOString()
            };
            await (await this.db.collection('riskFlags')).doc(initialFlag.flagId).set(initialFlag);
        }

        // 8. Seed Transactions
        const txSnap = await (await this.db.collection('transactions')).get();
        if (txSnap.empty) {
            for (const tx of initialMockTransactions) {
                await (await this.db.collection('transactions')).doc(tx.transactionId).set(tx);
            }
        }

        // 9. Seed Disputes
        const disputesSnap = await (await this.db.collection('disputes')).get();
        if (disputesSnap.empty) {
            for (const d of initialMockDisputes) {
                await (await this.db.collection('disputes')).doc(d.disputeId).set(d);
            }
        }

        // 10. Seed Notifications
        const notificationsSnap = await (await this.db.collection('notifications')).get();
        if (notificationsSnap.empty) {
            for (const n of initialNotifications) {
                await (await this.db.collection('notifications')).doc(n.notificationId).set(n);
            }
        }

        // 11. Seed Audit Logs
        const auditLogsSnap = await (await this.db.collection('auditLogs')).get();
        if (auditLogsSnap.empty) {
            for (const log of initialAuditLogs) {
                await (await this.db.collection('auditLogs')).doc(log.logId).set(log);
            }
        }

        // 12. Merge Pending Farmers
        for (const farmer of initialPendingFarmers) {
            const doc = await (await this.db.collection('farmerProfiles')).doc(farmer.farmerId).get();
            if (!doc.exists) {
                await (await this.db.collection('farmerProfiles')).doc(farmer.farmerId).set(farmer);
            }
        }

        // 13. Merge Pending Buyers
        for (const buyer of initialPendingBuyers) {
            const doc = await (await this.db.collection('buyerProfiles')).doc(buyer.buyerId).get();
            if (!doc.exists) {
                await (await this.db.collection('buyerProfiles')).doc(buyer.buyerId).set(buyer);
            }
        }

        // 14. Merge Additional Risk Flags
        for (const flag of initialRiskFlags) {
            const doc = await (await this.db.collection('riskFlags')).doc(flag.flagId).get();
            if (!doc.exists) {
                await (await this.db.collection('riskFlags')).doc(flag.flagId).set(flag);
            }
        }

        this._initialized = true;
    }

    // ==================== LOTS ====================

    async createLot(lotData) {
        await this.initializeData();
        const lotRef = (await this.db.collection('lots')).doc(lotData.lotId);
        await lotRef.set(lotData);
        return lotData;
    }

    async saveLot(lotData) {
        return this.createLot(lotData);
    }

    async getLots() {
        return this.getLotsByFarmer();
    }

    async getLotsByFarmer(farmerId) {
        await this.initializeData();
        const snap = await (await this.db.collection('lots')).get();
        return snap.docs
            .map(d => d.data())
            .filter(lot => !farmerId || lot.farmerId === farmerId)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    async getLotById(lotId) {
        await this.initializeData();
        const doc = await (await this.db.collection('lots')).doc(lotId).get();
        return doc.exists ? doc.data() : null;
    }

    async updateLot(lotId, updates) {
        await this.initializeData();
        await (await this.db.collection('lots')).doc(lotId).update(updates);
        return this.getLotById(lotId);
    }

    // ==================== STORAGE ====================

    async uploadLotPhoto(fileOrDataUrl, lotId, photoType = 'exterior', userId = 'farmer_mh_001') {
        const path = `lot-images/${userId}/${lotId}/${photoType}_${Date.now()}.jpg`;
        return this.storage.uploadImage(fileOrDataUrl, path);
    }

    async uploadVerificationDocument(fileOrDataUrl, userId, docType = 'aadhaar_or_gstin') {
        const path = `verification-documents/${userId}/${docType}_${Date.now()}.pdf`;
        return this.storage.uploadImage(fileOrDataUrl, path);
    }

    async uploadDisputeEvidence(fileOrDataUrl, transactionId) {
        const path = `dispute-evidence/${transactionId}/evidence_${Date.now()}.jpg`;
        return this.storage.uploadImage(fileOrDataUrl, path);
    }

    // ==================== AUTH & USER ====================

    getCurrentUser() {
        return this.auth.getUser();
    }

    setCurrentRole(role) {
        const user = this.auth.getUser();
        user.role = role;
        this.auth.setUser(user);
        return user;
    }
}

export const firebaseService = new FirebaseService();
