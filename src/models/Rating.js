/**
 * AgriLink - Transaction Rating & Review Domain Models
 * Implements transaction-specific rating records to prevent manipulation,
 * self-rating, and arbitrary external reviews.
 */

export class FarmerRatingRecord {
    /**
     * Rating submitted by Buyer for a Farmer after transaction completion
     * @param {Object} data
     */
    constructor(data = {}) {
        this.ratingId = data.ratingId || `RATE-F-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.transactionId = data.transactionId || '';
        this.farmerId = data.farmerId || '';
        this.buyerId = data.buyerId || '';
        this.buyerName = data.buyerName || '';
        
        // 5-Star Multi-Factor Breakdown (1 to 5)
        this.produceQualityScore = Math.max(1, Math.min(5, Number(data.produceQualityScore) || 5));
        this.quantityAccuracyScore = Math.max(1, Math.min(5, Number(data.quantityAccuracyScore) || 5));
        this.packagingConditionScore = Math.max(1, Math.min(5, Number(data.packagingConditionScore) || 5));
        this.deliveryReliabilityScore = Math.max(1, Math.min(5, Number(data.deliveryReliabilityScore) || 5));
        this.overallExperienceScore = Math.max(1, Math.min(5, Number(data.overallExperienceScore) || 5));

        // Calculated composite rating for this transaction
        this.compositeRating = Number((
            (this.produceQualityScore * 0.40) +
            (this.quantityAccuracyScore * 0.20) +
            (this.packagingConditionScore * 0.10) +
            (this.deliveryReliabilityScore * 0.15) +
            (this.overallExperienceScore * 0.15)
        ).toFixed(2));

        this.reviewComments = data.reviewComments || '';
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    calculateWeightedScore() {
        return this.compositeRating;
    }

    toFirestore() {
        return {
            ratingId: this.ratingId,
            transactionId: this.transactionId,
            farmerId: this.farmerId,
            buyerId: this.buyerId,
            buyerName: this.buyerName,
            produceQualityScore: this.produceQualityScore,
            quantityAccuracyScore: this.quantityAccuracyScore,
            packagingConditionScore: this.packagingConditionScore,
            deliveryReliabilityScore: this.deliveryReliabilityScore,
            overallExperienceScore: this.overallExperienceScore,
            compositeRating: this.compositeRating,
            reviewComments: this.reviewComments,
            createdAt: this.createdAt
        };
    }
}

export class BuyerRatingRecord {
    /**
     * Rating submitted by Farmer for a Buyer after transaction completion
     * @param {Object} data
     */
    constructor(data = {}) {
        this.ratingId = data.ratingId || `RATE-B-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
        this.transactionId = data.transactionId || '';
        this.buyerId = data.buyerId || '';
        this.farmerId = data.farmerId || '';
        this.farmerName = data.farmerName || '';

        // 5-Star Multi-Factor Breakdown (1 to 5)
        this.paymentTimelinessScore = Math.max(1, Math.min(5, Number(data.paymentTimelinessScore) || 5));
        this.communicationScore = Math.max(1, Math.min(5, Number(data.communicationScore) || 5));
        this.transactionReliabilityScore = Math.max(1, Math.min(5, Number(data.transactionReliabilityScore) || 5));
        this.overallExperienceScore = Math.max(1, Math.min(5, Number(data.overallExperienceScore) || 5));

        this.compositeRating = Number((
            (this.paymentTimelinessScore * 0.40) +
            (this.communicationScore * 0.20) +
            (this.transactionReliabilityScore * 0.25) +
            (this.overallExperienceScore * 0.15)
        ).toFixed(2));

        this.reviewComments = data.reviewComments || '';
        this.createdAt = data.createdAt || new Date().toISOString();
    }

    calculateWeightedScore() {
        return Math.round(this.compositeRating * 20);
    }

    toFirestore() {
        return {
            ratingId: this.ratingId,
            transactionId: this.transactionId,
            buyerId: this.buyerId,
            farmerId: this.farmerId,
            farmerName: this.farmerName,
            paymentTimelinessScore: this.paymentTimelinessScore,
            communicationScore: this.communicationScore,
            transactionReliabilityScore: this.transactionReliabilityScore,
            overallExperienceScore: this.overallExperienceScore,
            compositeRating: this.compositeRating,
            reviewComments: this.reviewComments,
            createdAt: this.createdAt
        };
    }
}
