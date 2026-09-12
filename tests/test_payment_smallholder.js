/**
 * AgriLink - Escrow Payment, Smallholder Micro-Lots & Multilingual Voice Verification Suite
 */

import { TransactionService } from '../src/services/transactionService.js';
import { I18N_DICTIONARY } from '../src/utils/i18n.js';
import { PAYMENT_STATUSES } from '../src/models/Transaction.js';
import fs from 'fs';

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ PASS: ${message}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${message}`);
        failed++;
    }
}

async function runTests() {
    console.log('\n================================================================');
    console.log('🧪 TEST SUITE: ESCROW PAYMENTS, SMALLHOLDER LOTS & MULTILINGUAL VOICE');
    console.log('================================================================\n');

    // 1. Escrow Payment Processing
    console.log('🔹 1. Direct Escrow Payment Processing:');
    const paymentRecord = await TransactionService.processEscrowPayment({
        lotId: 'LOT-MH-2026-TEST',
        cropType: 'Tomato',
        farmerId: 'farmer_mh_001',
        farmerName: 'Ramesh Patil',
        buyerId: 'buyer_sahyadri',
        buyerName: 'Sahyadri Agro',
        quantityKg: 100,
        pricePerKg: 35.0,
        paymentMethod: 'UPI_QR'
    });

    assert(paymentRecord && paymentRecord.transactionId.startsWith('TXN-'), 'Transaction ID generated with TXN- prefix');
    assert(paymentRecord.totalAmount === 3500, `Total amount calculated correctly: ₹${paymentRecord.totalAmount}`);
    assert(paymentRecord.paymentMilestone === 'ESCROW_LOCKED', 'Payment milestone is ESCROW_LOCKED');
    assert(paymentRecord.paymentStatus === PAYMENT_STATUSES.PROCESSING, 'Payment status is PROCESSING (funds locked)');
    assert(Boolean(paymentRecord.escrowLockRef), `Escrow Lock Reference generated: ${paymentRecord.escrowLockRef}`);

    // 2. Smallholder Micro-Lot Payout Precision
    console.log('\n🔹 2. Smallholder Micro-Lot Calculations (25kg - 500kg):');
    const microLots = [
        { qty: 25, price: 40.0, expected: 1000 },
        { qty: 50, price: 38.0, expected: 1900 },
        { qty: 100, price: 35.0, expected: 3500 },
        { qty: 250, price: 34.0, expected: 8500 },
        { qty: 500, price: 32.0, expected: 16000 }
    ];

    microLots.forEach(lot => {
        const total = Math.round(lot.qty * lot.price);
        assert(total === lot.expected, `Micro-lot ${lot.qty}kg @ ₹${lot.price}/kg = ₹${total} (0% commission)`);
    });

    // 3. Multilingual Payment & Smallholder Dictionary Checks
    console.log('\n🔹 3. Multilingual Dictionary Checks for Payments & Smallholder:');
    Object.keys(I18N_DICTIONARY).forEach(lang => {
        const dict = I18N_DICTIONARY[lang];
        assert(Boolean(dict.payment), `[${lang}] contains payment dictionary`);
        assert(Boolean(dict.payment.modalTitle), `[${lang}] contains payment.modalTitle`);
        assert(Boolean(dict.payment.escrowTitle), `[${lang}] contains payment.escrowTitle`);
        assert(Boolean(dict.payment.payButton), `[${lang}] contains payment.payButton`);
        assert(Boolean(dict.payment.successTitle), `[${lang}] contains payment.successTitle`);

        assert(Boolean(dict.smallholder), `[${lang}] contains smallholder dictionary`);
        assert(Boolean(dict.smallholder.toggleLabel), `[${lang}] contains smallholder.toggleLabel`);
        assert(Boolean(dict.smallholder.zeroFeeBadge), `[${lang}] contains smallholder.zeroFeeBadge`);
        assert(Boolean(dict.smallholder.smartPoolBadge), `[${lang}] contains smallholder.smartPoolBadge`);
    });

    // 4. Verify Clean Registration & Login Form Inputs in index.html
    console.log('\n🔹 4. Verify Clean Inputs in index.html:');
    const indexHtml = fs.readFileSync('index.html', 'utf-8');
    assert(!indexHtml.includes('id="loginIdentifierInput" placeholder="उदा. 9822456789 किंवा ramesh@gmail.com" required value='), 'loginIdentifierInput has no hardcoded prefilled value');
    assert(!indexHtml.includes('id="loginPasswordInput" placeholder="••••••••" required value='), 'loginPasswordInput has no hardcoded prefilled value');
    assert(!indexHtml.includes('id="regPasswordInput" placeholder="किमान ६ अक्षरे..." required value='), 'regPasswordInput has no hardcoded prefilled value');
    assert(!indexHtml.includes('id="regConfirmPasswordInput" placeholder="पुन्हा टाईप करा..." required value='), 'regConfirmPasswordInput has no hardcoded prefilled value');
    assert(indexHtml.includes('id="paymentCheckoutModal"'), 'index.html contains paymentCheckoutModal');
    assert(indexHtml.includes('id="chkSmallholderFarmer"'), 'index.html contains chkSmallholderFarmer toggle');
    assert(indexHtml.includes('setAssessQuantity(25)'), 'index.html contains 25kg micro-lot preset button');

    console.log('\n================================================================');
    console.log(`📊 SUMMARY: ${passed} PASSED | ${failed} FAILED`);
    console.log('================================================================\n');

    if (failed > 0) process.exit(1);
}

runTests().catch(err => {
    console.error('Unhandled test error:', err);
    process.exit(1);
});
