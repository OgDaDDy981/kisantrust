/**
 * AgriLink - Domain Models for Users, Market Benchmarks, Buyers, Pooling, and Transactions
 */

export class UserProfile {
    constructor(data = {}) {
        this.uid = data.uid || 'user_default';
        this.name = data.name || 'Farmer';
        this.phone = data.phone || '';
        this.role = data.role || 'farmer'; // 'farmer' | 'buyer' | 'fpo_coordinator' | 'admin'
        this.district = data.district || '';
        this.state = data.state || 'Maharashtra';
        this.fpoMembership = data.fpoMembership || null;
        this.verified = Boolean(data.verified);
        this.createdAt = data.createdAt || new Date().toISOString();
    }
}

export class MandiBenchmark {
    constructor(data = {}) {
        this.mandiId = data.mandiId || 'mandi_pune';
        this.mandiName = data.mandiName || 'Pune APMC (Market Yard)';
        this.district = data.district || 'Pune';
        this.state = data.state || 'Maharashtra';
        this.cropType = data.cropType || 'Tomato';
        this.variety = data.variety || 'Local / Hybrid';
        this.modalPricePerKg = Number(data.modalPricePerKg) || 32.0;
        this.minPricePerKg = Number(data.minPricePerKg) || 26.0;
        this.maxPricePerKg = Number(data.maxPricePerKg) || 36.0;
        this.arrivalVolumeTons = Number(data.arrivalVolumeTons) || 120;
        this.priceTrend = data.priceTrend || 'RISING'; // 'RISING' | 'STABLE' | 'FALLING'
        this.distanceFromFarmerKm = Number(data.distanceFromFarmerKm) || 140;
        this.estimatedLogisticsCostPerKg = Number(data.estimatedLogisticsCostPerKg) || 2.2;
        this.lastUpdated = data.lastUpdated || new Date().toISOString();
    }
}
