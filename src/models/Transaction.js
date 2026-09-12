/**
 * AgriLink - Extended Transaction Record & Lifecycle State Model (Stage 5 & Centralized System)
 */

export const TRANSACTION_STAGES = [
    'LOT_CREATED',
    'QUALITY_VERIFIED',
    'BUYER_MATCHED',
    'OFFER_ACCEPTED',
    'PICKUP_SCHEDULED',
    'IN_TRANSIT',
    'DELIVERY_CONFIRMED',
    'PAYMENT_PENDING',
    'PAYMENT_COMPLETED'
];

export const PAYMENT_STATUSES = {
    PENDING: 'PENDING',
    INITIATED: 'INITIATED',
    PROCESSING: 'PROCESSING',
    DELAYED: 'DELAYED',
    COMPLETED: 'COMPLETED'
};

export class TransactionRecord {
    /**
     * @param {Object} data
     */
    constructor(data = {}) {
        this.transactionId = data.transactionId || `TXN-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
        this.lotId = data.lotId || '';
        this.demandId = data.demandId || '';
        this.pooledClusterId = data.pooledClusterId || null;
        this.farmerId = data.farmerId || 'farmer_mh_001';
        this.farmerName = data.farmerName || 'Ramesh Patil (रमेश पाटील)';
        this.buyerId = data.buyerId || 'buyer_sahyadri';
        this.buyerName = data.buyerName || 'AgriMitra Agro Processing Hub';
        
        // Commodity details
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || 'Himsona Hybrid';
        this.quantityKg = Number(data.quantityKg) || 1000;
        this.qualityGrade = data.qualityGrade || 'Grade A';
        this.freshnessScore = Number(data.freshnessScore) || 94;

        // Commercials
        this.agreedPricePerKg = Number(data.agreedPricePerKg) || 37.5;
        this.totalTransactionValue = Number((this.agreedPricePerKg * this.quantityKg).toFixed(2));
        this.totalAmount = this.totalTransactionValue; // Backward compatibility alias
        this.amountPaid = Number(data.amountPaid) || 0;
        this.paymentTerms = data.paymentTerms || 'Escrow Settlement upon Delivery QC';
        this.paymentMilestone = data.paymentMilestone || 'ESCROW_LOCKED'; // 'ESCROW_LOCKED' | 'PENDING_QC' | 'SETTLED'
        
        // Extended Payment Tracking
        this.paymentStatus = data.paymentStatus || PAYMENT_STATUSES.PENDING;
        this.paymentDueDate = data.paymentDueDate || new Date(Date.now() + 86400000 * 2).toISOString();
        this.paymentCompletedDate = data.paymentCompletedDate || null;
        this.delayDurationHours = Number(data.delayDurationHours) || 0;

        // Rating flags (1 rating per side per completed transaction)
        this.buyerRated = Boolean(data.buyerRated ?? false);
        this.farmerRated = Boolean(data.farmerRated ?? false);

        // Logistics & Freight Information
        this.logisticsInfo = data.logisticsInfo || {
            transportType: '4-Ton Eicher Mini Truck',
            vehicleNumber: 'MH-15-EG-4281',
            driverName: 'Kailash Sonawane',
            driverPhone: '+91 98224 77889',
            pickupLocation: 'Niphad Village Hub, Nashik',
            deliveryLocation: 'AgriMitra Agro Hub, Dindori',
            estimatedDistanceKm: 42,
            estimatedTravelTimeHours: 1.5,
            freightCostTotal: 1200,
            freightCostPerKg: 1.20,
            pickupScheduledTime: new Date(Date.now() + 86400000).toISOString(),
            isPooledTransport: false
        };

        // Controlled Lifecycle State
        this.currentStage = data.currentStage || 'OFFER_ACCEPTED';
        this.deliveryStatus = data.deliveryStatus || 'SCHEDULED_FOR_PICKUP'; // 'PENDING' | 'SCHEDULED_FOR_PICKUP' | 'IN_TRANSIT' | 'DELIVERED'
        this.disputeStatus = data.disputeStatus || 'NONE'; // 'NONE' | 'RAISED' | 'RESOLVED'
        
        // Audit Trail History
        this.statusHistory = Array.isArray(data.statusHistory) ? data.statusHistory : [
            {
                stage: 'OFFER_ACCEPTED',
                updatedBy: 'FARMER',
                notes: 'Deal confirmed by farmer. Digital contract generated.',
                timestamp: new Date().toISOString()
            }
        ];

        this.receiptNumber = data.receiptNumber || `REC-${Date.now().toString().slice(-8)}`;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    toFirestore() {
        return {
            transactionId: this.transactionId,
            lotId: this.lotId,
            demandId: this.demandId,
            pooledClusterId: this.pooledClusterId,
            farmerId: this.farmerId,
            farmerName: this.farmerName,
            buyerId: this.buyerId,
            buyerName: this.buyerName,
            cropType: this.cropType,
            variety: this.variety,
            quantityKg: this.quantityKg,
            qualityGrade: this.qualityGrade,
            freshnessScore: this.freshnessScore,
            agreedPricePerKg: this.agreedPricePerKg,
            totalTransactionValue: this.totalTransactionValue,
            totalAmount: this.totalAmount,
            amountPaid: this.amountPaid,
            paymentTerms: this.paymentTerms,
            paymentMilestone: this.paymentMilestone,
            paymentStatus: this.paymentStatus,
            paymentDueDate: this.paymentDueDate,
            paymentCompletedDate: this.paymentCompletedDate,
            delayDurationHours: this.delayDurationHours,
            buyerRated: this.buyerRated,
            farmerRated: this.farmerRated,
            logisticsInfo: this.logisticsInfo,
            currentStage: this.currentStage,
            deliveryStatus: this.deliveryStatus,
            disputeStatus: this.disputeStatus,
            statusHistory: this.statusHistory,
            receiptNumber: this.receiptNumber,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
