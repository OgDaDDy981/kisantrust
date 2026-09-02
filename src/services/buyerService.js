/**
 * KisanTrust - Buyer Service & Demand Management
 * Manages buyer profiles, purchase requirement postings, and lot-to-buyer matching.
 */

import { firebaseService } from './firebaseService.js';
import { BuyerDemand, BuyerProfile } from '../models/Buyer.js';
import { initialBuyerDemands, mockBuyerProfiles } from '../data/mockBuyers.js';
import { MatchingService } from './matchingService.js';
import { NotificationService } from './notificationService.js';
import { NOTIFICATION_TYPES } from '../models/Notification.js';

export class BuyerService {
    /**
     * Seed initial buyer profiles and demands in Firestore
     */
    static async initializeBuyerData() {
        await firebaseService.initializeData();

        // Seed buyer profiles if empty
        const profilesSnap = await (await firebaseService.db.collection('buyerProfiles')).get();
        if (profilesSnap.empty) {
            for (const profile of mockBuyerProfiles) {
                await (await firebaseService.db.collection('buyerProfiles')).doc(profile.buyerId).set(profile);
            }
        }

        // Seed buyer demands if empty
        const demandsSnap = await (await firebaseService.db.collection('buyerDemands')).get();
        if (demandsSnap.empty) {
            for (const demand of initialBuyerDemands) {
                const data = {
                    ...demand,
                    moderationStatus: 'APPROVED',
                    status: 'ACTIVE'
                };
                await (await firebaseService.db.collection('buyerDemands')).doc(demand.demandId).set(data);
            }
        }
    }

    /**
     * Create a new Buyer Demand (Purchase Requirement)
     * Submits to admin review queue for approval before public marketplace matching
     * @param {Object} demandData
     * @returns {Promise<BuyerDemand>}
     */
    static async createBuyerDemand(demandData) {
        await this.initializeBuyerData();
        const modStatus = demandData.moderationStatus || (demandData.status === 'PENDING_ADMIN_REVIEW' ? 'PENDING_ADMIN_REVIEW' : 'APPROVED');
        const st = demandData.status || (modStatus === 'PENDING_ADMIN_REVIEW' ? 'PENDING_ADMIN_REVIEW' : 'ACTIVE');
        
        const demand = new BuyerDemand({
            ...demandData,
            status: st,
            moderationStatus: modStatus
        });

        await (await firebaseService.db.collection('buyerDemands')).doc(demand.demandId).set(demand.toFirestore());

        // Notify admins of new pending demand if not already approved
        if (modStatus !== 'APPROVED') {
            await NotificationService.notifyAdmins({
                type: NOTIFICATION_TYPES.ADMIN_ALERT,
                title: 'नवीन खरेदी मागणी पुनरावलोकन प्रलंबित',
                message: `${demand.buyerName} यांनी ${demand.requiredQuantityKg}kg ${demand.cropType} साठी खरेदी मागणी मंजुरीसाठी नोंदवली आहे.`,
                relatedEntityType: 'DEMAND',
                relatedEntityId: demand.demandId
            });
        }

        return demand;
    }

    /**
     * Get active and approved buyer demands, optionally filtered by crop
     * @param {string} [cropType]
     * @returns {Promise<Array<BuyerDemand>>}
     */
    static async getActiveDemands(cropType = null) {
        await this.initializeBuyerData();
        const snap = await (await firebaseService.db.collection('buyerDemands')).get();
        let list = snap.docs
            .map(d => new BuyerDemand(d.data()))
            .filter(d => (d.status === "ACTIVE" || d.status === "PUBLISHED") && (d.moderationStatus === "APPROVED" || !d.moderationStatus));

        if (cropType && cropType.toLowerCase() !== "all") {
            const cLower = cropType.toLowerCase();
            list = list.filter(d => d.cropType.toLowerCase() === cLower || d.cropType.toLowerCase().includes(cLower));
        }

        return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /**
     * Matches active approved buyer demands for a specific farmer lot
     * @param {Object} lot DigitalAgriculturalLot
     * @param {string} [farmerDistrict="Nashik"]
     * @returns {Promise<Array<Object>>} Ranked list of matches
     */
    static async matchBuyersForLot(lot, farmerDistrict = "Nashik") {
        await this.initializeBuyerData();
        const allDemands = await this.getActiveDemands(lot.cropType);
        return MatchingService.rankBuyersForLot(lot, allDemands, farmerDistrict);
    }

    /**
     * Get buyer profile by ID
     * @param {string} buyerId
     * @returns {Promise<BuyerProfile>}
     */
    static async getBuyerProfile(buyerId) {
        await this.initializeBuyerData();
        const doc = await (await firebaseService.db.collection('buyerProfiles')).doc(buyerId).get();
        return doc.exists ? new BuyerProfile(doc.data()) : null;
    }
}
