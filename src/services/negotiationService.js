/**
 * AgriLink - Negotiation & Direct Deal Service (Stage 3)
 * Manages multi-round price negotiations between Farmers and Verified Buyers.
 * Automatically transitions to an official TransactionRecord upon Deal Acceptance.
 */

import { firebaseService } from './firebaseService.js';
import { NegotiationRecord } from '../models/Buyer.js';
import { TransactionService } from './transactionService.js';

export class NegotiationService {
    /**
     * Initiates a new negotiation between farmer and buyer
     * @param {Object} params
     * @param {Object} params.lot DigitalAgriculturalLot
     * @param {Object} params.demand BuyerDemand
     * @param {number} [params.proposedPrice] Proposed rate per kg
     * @param {string} [params.notes]
     * @returns {Promise<NegotiationRecord>}
     */
    static async initiateNegotiation({ lot, demand, proposedPrice, notes = "" }) {
        await firebaseService.initializeData();

        const initialPrice = Number(proposedPrice || demand.offeredPricePerKg || 36.0);

        const record = new NegotiationRecord({
            lotId: lot.lotId,
            demandId: demand.demandId,
            farmerId: lot.farmerId || 'farmer_mh_001',
            farmerName: lot.farmerName || 'Ramesh Patil',
            buyerId: demand.buyerId,
            buyerName: demand.buyerName,
            cropType: lot.cropType,
            quantityKg: lot.quantity,
            qualityGrade: lot.overallQualityGrade,
            initialBuyerOfferPrice: demand.offeredPricePerKg,
            currentAgreedPrice: initialPrice,
            history: [
                {
                    sender: 'FARMER',
                    pricePerKg: initialPrice,
                    notes: notes || `Farmer initiated deal proposal based on Grade ${lot.overallQualityGrade} quality certification.`,
                    timestamp: new Date().toISOString()
                }
            ],
            status: 'FARMER_COUNTEROFFER'
        });

        await (await firebaseService.db.collection('negotiations')).doc(record.negotiationId).set(record.toFirestore());
        return record;
    }

    /**
     * Submit a counter-offer in an active negotiation
     * @param {string} negotiationId
     * @param {'FARMER'|'BUYER'} senderRole
     * @param {number} newPricePerKg
     * @param {string} [notes]
     * @returns {Promise<NegotiationRecord>}
     */
    static async submitCounterOffer(negotiationId, senderRole, newPricePerKg, notes = "") {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('negotiations')).doc(negotiationId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Negotiation ${negotiationId} not found.`);
        }

        const data = doc.data();
        const price = Number(newPricePerKg);
        const nextStatus = senderRole === 'FARMER' ? 'FARMER_COUNTEROFFER' : 'BUYER_REVISION';

        const historyEntry = {
            sender: senderRole,
            pricePerKg: price,
            notes: notes || `${senderRole} proposed revised price of ₹${price}/kg.`,
            timestamp: new Date().toISOString()
        };

        const updatedHistory = [...(data.history || []), historyEntry];

        await docRef.update({
            currentAgreedPrice: price,
            status: nextStatus,
            history: updatedHistory,
            updatedAt: new Date().toISOString()
        });

        return new NegotiationRecord({
            ...data,
            currentAgreedPrice: price,
            status: nextStatus,
            history: updatedHistory
        });
    }

    /**
     * Accepts offer, seals negotiation, and creates official TransactionRecord
     * @param {string} negotiationId
     * @param {string} [acceptedByRole="FARMER"]
     * @returns {Promise<{ negotiation: NegotiationRecord, transaction: Object }>}
     */
    static async acceptOffer(negotiationId, acceptedByRole = "FARMER") {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('negotiations')).doc(negotiationId);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error(`Negotiation ${negotiationId} not found.`);
        }

        const data = doc.data();
        const finalPrice = data.currentAgreedPrice;
        const totalAmount = Number((finalPrice * data.quantityKg).toFixed(2));

        const updatedHistory = [
            ...(data.history || []),
            {
                sender: acceptedByRole,
                pricePerKg: finalPrice,
                notes: `Deal accepted by ${acceptedByRole} at ₹${finalPrice}/kg. Digital contract locked.`,
                timestamp: new Date().toISOString()
            }
        ];

        // 1. Update Negotiation state to ACCEPTED
        await docRef.update({
            status: 'ACCEPTED',
            history: updatedHistory,
            updatedAt: new Date().toISOString()
        });

        // 2. Automatically generate and persist official TransactionRecord
        const transaction = await TransactionService.recordTransaction({
            lotId: data.lotId,
            farmerId: data.farmerId,
            farmerName: data.farmerName,
            buyerId: data.buyerId,
            buyerName: data.buyerName,
            cropType: data.cropType,
            quantityKg: data.quantityKg,
            agreedPricePerKg: finalPrice,
            totalAmount: totalAmount,
            qualityGrade: data.qualityGrade,
            paymentMilestone: 'ESCROW_LOCKED'
        });

        // 3. Update Lot status to MATCHED
        await firebaseService.updateLot(data.lotId, { status: 'MATCHED' });

        return {
            negotiation: new NegotiationRecord({ ...data, status: 'ACCEPTED', history: updatedHistory }),
            transaction
        };
    }

    /**
     * Rejects or cancels negotiation
     * @param {string} negotiationId
     * @param {string} [reason="Price expectation mismatch"]
     */
    static async rejectOffer(negotiationId, reason = "Price expectation mismatch") {
        await firebaseService.initializeData();
        const docRef = (await firebaseService.db.collection('negotiations')).doc(negotiationId);
        await docRef.update({
            status: 'REJECTED',
            rejectionReason: reason,
            updatedAt: new Date().toISOString()
        });
    }

    /**
     * Get active negotiations for a farmer
     * @param {string} [farmerId="farmer_mh_001"]
     * @returns {Promise<Array<NegotiationRecord>>}
     */
    static async getNegotiationsByFarmer(farmerId = "farmer_mh_001") {
        await firebaseService.initializeData();
        const snap = await (await firebaseService.db.collection('negotiations')).get();
        return snap.docs
            .map(d => new NegotiationRecord(d.data()))
            .filter(n => !farmerId || n.farmerId === farmerId)
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }
}
