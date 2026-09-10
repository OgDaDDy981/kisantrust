/**
 * KisanTrust - Stage 5 Automated Verification Suite
 * Transaction Lifecycle, Logistics Decision Support, Storage Feasibility, and Digital Certificates
 */

import { TransactionRecord, TRANSACTION_STAGES } from '../src/models/Transaction.js';
import { TransactionService } from '../src/services/transactionService.js';
import { LogisticsService } from '../src/services/logisticsService.js';
import { StorageService } from '../src/services/storageService.js';

console.log('🌱 Starting KisanTrust Stage 5 Automated Verification Suite...\n');

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ PASS: ${message}`);
        passedTests++;
    } else {
        console.error(`  ❌ FAIL: ${message}`);
        failedTests++;
    }
}

// ==========================================
// 1. Transaction Domain Model & Controlled Lifecycle
// ==========================================
console.log('1. Testing TransactionRecord Domain Model & Stages:');
assert(TRANSACTION_STAGES.length === 9, 'Defined 9 controlled transaction lifecycle stages');
assert(TRANSACTION_STAGES[0] === 'LOT_CREATED', 'First stage is LOT_CREATED');
assert(TRANSACTION_STAGES[8] === 'PAYMENT_COMPLETED', 'Final stage is PAYMENT_COMPLETED');

const txn = new TransactionRecord({
    lotId: 'LOT-MH-2026-001',
    farmerId: 'farmer_mh_001',
    buyerId: 'buyer_sahyadri',
    cropType: 'Tomato',
    quantityKg: 1000,
    agreedPricePerKg: 37.5,
    currentStage: 'OFFER_ACCEPTED'
});

assert(txn.totalTransactionValue === 37500, 'Total transaction value computed accurately (1,000kg * ₹37.5 = ₹37,500)');
assert(txn.logisticsInfo.vehicleNumber === 'MH-15-EG-4281', 'Logistics vehicle number tracked');
assert(txn.statusHistory.length >= 1, 'Status history initialized with creation record');

// ==========================================
// 2. Transaction Service & State Transition Validation
// ==========================================
console.log('\n2. Testing TransactionService Controlled State Transitions:');
const recorded = await TransactionService.recordTransaction(txn);
assert(recorded.transactionId.startsWith('TXN-'), 'Recorded persistent transaction with TXN prefix');

// Forward transition: OFFER_ACCEPTED -> PICKUP_SCHEDULED
const stage1 = await TransactionService.transitionStage(recorded.transactionId, 'PICKUP_SCHEDULED', 'LOGISTICS_PARTNER', 'Driver Kailash assigned to pickup.');
assert(stage1.currentStage === 'PICKUP_SCHEDULED', 'Successfully transitioned to PICKUP_SCHEDULED');
assert(stage1.deliveryStatus === 'SCHEDULED_FOR_PICKUP', 'Delivery status updated to SCHEDULED_FOR_PICKUP');

// Forward transition: PICKUP_SCHEDULED -> IN_TRANSIT
const stage2 = await TransactionService.transitionStage(recorded.transactionId, 'IN_TRANSIT', 'DRIVER', 'Produce picked up from Niphad hub.');
assert(stage2.currentStage === 'IN_TRANSIT', 'Successfully transitioned to IN_TRANSIT');
assert(stage2.deliveryStatus === 'IN_TRANSIT', 'Delivery status updated to IN_TRANSIT');

// Forward transition: IN_TRANSIT -> DELIVERY_CONFIRMED
const stage3 = await TransactionService.transitionStage(recorded.transactionId, 'DELIVERY_CONFIRMED', 'BUYER_QC', 'Produce arrived at Sahyadri hub. Quality verified Grade A.');
assert(stage3.currentStage === 'DELIVERY_CONFIRMED', 'Successfully transitioned to DELIVERY_CONFIRMED');
assert(stage3.paymentMilestone === 'PENDING_QC', 'Payment milestone set to PENDING_QC');

// Forward transition: DELIVERY_CONFIRMED -> PAYMENT_COMPLETED
const stage4 = await TransactionService.transitionStage(recorded.transactionId, 'PAYMENT_COMPLETED', 'BANK_GATEWAY', 'Direct NEFT settlement of ₹37,500 released to farmer account.');
assert(stage4.currentStage === 'PAYMENT_COMPLETED', 'Successfully transitioned to PAYMENT_COMPLETED');
assert(stage4.paymentMilestone === 'SETTLED', 'Payment milestone set to SETTLED');
assert(stage4.statusHistory.length === 5, 'Status history tracks complete 5-step audit trail');

// Test Illegal Backward Transition (PAYMENT_COMPLETED -> OFFER_ACCEPTED)
let illegalBlocked = false;
try {
    await TransactionService.transitionStage(recorded.transactionId, 'OFFER_ACCEPTED', 'ATTACKER', 'Attempt unauthorized rewind.');
} catch (e) {
    illegalBlocked = true;
}
assert(illegalBlocked, 'Controlled transition engine strictly rejects illegal backward status jumps');

// ==========================================
// 3. Logistics Decision Support & Freight Estimator
// ==========================================
console.log('\n3. Testing LogisticsService (Fleet Options & Pooled Freight Comparison):');
const fleetOptions = LogisticsService.getAvailableLogisticsOptions({ distanceKm: 42, quantityKg: 1000, cropType: 'Tomato' });
assert(fleetOptions.length === 4, 'Provides 4 evaluated logistics fleet options');
assert(fleetOptions.some(f => f.typeId === 'PICKUP_1T'), 'Includes 1-Ton Mini Pickup option');
assert(fleetOptions.some(f => f.typeId === 'REEFER_COLD_3T'), 'Includes Temperature-Controlled Reefer option');
assert(fleetOptions.some(f => f.typeId === 'FTL_10T'), 'Includes 10-Ton Heavy FTL option');

const reefer = fleetOptions.find(f => f.typeId === 'REEFER_COLD_3T');
assert(reefer.temperatureControlled === true, 'Cold chain reefer flagged as temperature controlled');

const comp = LogisticsService.compareIndividualVsPooledLogistics(185, 1000);
assert(comp.savingsPercent >= 50, `Pooled logistics delivers ${comp.savingsPercent}% savings vs individual transport`);
assert(comp.savingsRupees > 0, `Farmer saves ₹${comp.savingsRupees} on 1,000kg transport`);
assert(comp.formulaExplanation.includes('Net Savings'), 'Includes transparent formula explanation');

// ==========================================
// 4. Storage Feasibility & Guidance Service
// ==========================================
console.log('\n4. Testing StorageService (Feasibility & Cost Benchmarks):');

// A. Perishable Tomato with low shelf-life -> Immediate Sale
const tomatoStorage = StorageService.evaluateStorageFeasibility({
    cropType: 'Tomato',
    freshnessScore: 70,
    harvestDate: new Date(Date.now() - 5 * 86400000).toISOString().split('T')[0]
});
assert(tomatoStorage.recommendationType === 'IMMEDIATE_SALE_PREFERRED', 'Aged tomato lot recommends immediate sale');

// B. High quality Onion -> Ventilated Kanda Chawl
const onionStorage = StorageService.evaluateStorageFeasibility({
    cropType: 'Onion',
    freshnessScore: 92,
    harvestDate: new Date().toISOString().split('T')[0]
});
assert(onionStorage.recommendationType === 'VENTILATED_FARM_STORAGE_BENEFICIAL', 'Fresh onion lot recommends ventilated farm storage (Kanda Chawl)');
assert(onionStorage.recommendedFacility.typeId === 'FARM_VENTILATED', 'Recommends on-farm ventilated structure');
assert(onionStorage.estimatedHoldingCostPerKg > 0, 'Estimates realistic monthly holding cost');

// C. Potato with expected rising market price gain -> Commercial Cold Storage
const potatoStorage = StorageService.evaluateStorageFeasibility({
    cropType: 'Potato',
    freshnessScore: 95,
    harvestDate: new Date().toISOString().split('T')[0],
    expectedPriceGainPerKg: 4.5
});
assert(potatoStorage.recommendationType === 'COMMERCIAL_COLD_STORAGE_RECOMMENDED', 'Potato with high expected price gain recommends commercial cold storage');

console.log(`\n==========================================`);
console.log(`Suite Completed: ${passedTests} passed, ${failedTests} failed.`);
if (failedTests === 0) {
    console.log(`🎉 ALL STAGE 5 VERIFICATION TESTS PASSED SUCCESSFULLY!`);
} else {
    process.exit(1);
}
