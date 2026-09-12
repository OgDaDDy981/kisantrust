/**
 * AgriLink - Authentication, Customer Registration & Multilingual Verification Test Suite
 */

import { AuthService, DEMO_ACCOUNTS } from '../src/services/authService.js';
import { USER_ROLES, CustomerProfile, FarmerProfile, BuyerProfileRecord } from '../src/models/User.js';
import { I18N_DICTIONARY, applyDOMTranslations } from '../src/utils/i18n.js';

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
    console.log('\n======================================================');
    console.log('🧪 TEST SUITE: AUTHENTICATION, REGISTRATION & MULTILINGUAL');
    console.log('======================================================\n');

    // 1. Check USER_ROLES
    console.log('🔹 1. USER_ROLES & Profile Models:');
    assert(USER_ROLES.CUSTOMER === 'customer', 'USER_ROLES contains CUSTOMER');
    assert(USER_ROLES.FARMER === 'farmer', 'USER_ROLES contains FARMER');
    assert(USER_ROLES.BUYER === 'buyer', 'USER_ROLES contains BUYER');
    assert(typeof CustomerProfile === 'function', 'CustomerProfile class is defined');

    // 2. Customer Profile Serialization
    console.log('\n🔹 2. CustomerProfile Serialization:');
    const cust = new CustomerProfile({
        userId: 'cust_test_1',
        name: 'Sunita Joshi',
        phone: '9822112233',
        email: 'sunita@gmail.com',
        district: 'Nashik',
        primaryCrops: ['Fresh Tomatoes', 'Organic Spinach']
    });
    const custDoc = cust.toFirestore();
    assert(custDoc.userId === 'cust_test_1', 'CustomerProfile userId matches');
    assert(custDoc.personalDetails.fullName === 'Sunita Joshi', 'CustomerProfile name serialized');
    assert(custDoc.preferences.preferredCrops.includes('Fresh Tomatoes'), 'Customer produce preferences serialized');

    // 3. Demo Customer Login
    console.log('\n🔹 3. Demo Customer Login:');
    const demoCust = await AuthService.loginAsDemoCustomer();
    assert(demoCust.role === USER_ROLES.CUSTOMER, 'Demo Customer role is customer');
    assert(demoCust.displayName.includes('Snehal') || demoCust.displayName.includes('Consumer'), 'Demo customer name matches');
    assert(AuthService.getCurrentUser().role === USER_ROLES.CUSTOMER, 'AuthService.getCurrentUser() is customer');

    // 4. Customer Registration
    console.log('\n🔹 4. Customer Account Registration:');
    const newCust = await AuthService.register({
        name: 'Kavita Rao',
        phone: '9823998877',
        email: 'kavita@gmail.com',
        role: 'customer',
        state: 'Maharashtra',
        district: 'Pune',
        primaryCrops: ['Tomato', 'Onion'],
        address: 'A-201, Shanti Park, Pune'
    });
    assert(newCust.displayName === 'Kavita Rao', 'Registered customer name matches');
    assert(newCust.role === USER_ROLES.CUSTOMER, 'Registered customer role matches');
    assert(AuthService.getCurrentUser().uid === newCust.uid, 'Registered user becomes active current user');

    // 5. Farmer Registration
    console.log('\n🔹 5. Farmer Account Registration:');
    const newFarmer = await AuthService.register({
        name: 'Baban Shinde',
        phone: '9822456789',
        email: 'baban@gmail.com',
        role: 'farmer',
        state: 'Maharashtra',
        district: 'Nashik',
        primaryCrops: ['Tomato'],
        farmSizeAcres: 4.0
    });
    assert(newFarmer.displayName === 'Baban Shinde', 'Registered farmer name matches');
    assert(newFarmer.role === USER_ROLES.FARMER, 'Registered farmer role matches');

    // 6. Buyer Registration
    console.log('\n🔹 6. Buyer Account Registration:');
    const newBuyer = await AuthService.register({
        name: 'Vikas Agarwal',
        phone: '9823011223',
        email: 'vikas@freshagro.com',
        role: 'buyer',
        state: 'Maharashtra',
        district: 'Mumbai',
        companyName: 'Fresh Agro Foods',
        buyerType: 'Food Processor',
        gstin: '27AABCS1429B1Z'
    });
    assert(newBuyer.displayName === 'Vikas Agarwal', 'Registered buyer name matches');
    assert(newBuyer.role === USER_ROLES.BUYER, 'Registered buyer role matches');

    // 7. General Login and Alias Methods
    console.log('\n🔹 7. General Login & Aliases:');
    const loginUser = await AuthService.login('super.admin@agrilink.org', 'anypass');
    assert(loginUser.role === USER_ROLES.SUPER_ADMIN, 'Login resolves super admin');
    assert(typeof AuthService.setCurrentUser === 'function', 'AuthService.setCurrentUser alias exists');

    // 8. Multilingual Dictionary Checks
    console.log('\n🔹 8. Multilingual Dictionary Completeness:');
    Object.keys(I18N_DICTIONARY).forEach(lang => {
        const dict = I18N_DICTIONARY[lang];
        assert(Boolean(dict.auth), `Dictionary for [${lang}] contains auth namespace`);
        assert(Boolean(dict.auth.roleCustomer), `[${lang}] contains roleCustomer`);
        assert(Boolean(dict.auth.btnDemoCustomer), `[${lang}] contains btnDemoCustomer`);
        assert(Boolean(dict.auth.lblConfirmPassword), `[${lang}] contains lblConfirmPassword`);
        assert(Boolean(dict.auth.lblCustNeeds), `[${lang}] contains lblCustNeeds`);
        assert(Boolean(dict.auth.placeholderName), `[${lang}] contains placeholderName`);
        assert(Boolean(dict.auth.placeholderPhone), `[${lang}] contains placeholderPhone`);
        assert(Boolean(dict.auth.placeholderCreatePass), `[${lang}] contains placeholderCreatePass`);
        assert(Boolean(dict.auth.placeholderConfirmPass), `[${lang}] contains placeholderConfirmPass`);
    });

    console.log('\n======================================================');
    console.log(`📊 SUMMARY: ${passed} PASSED | ${failed} FAILED`);
    console.log('======================================================\n');

    if (failed > 0) process.exit(1);
}

runTests().catch(err => {
    console.error('Unhandled test error:', err);
    process.exit(1);
});
