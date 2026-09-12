const fs = require('fs');

const cssAppend = `
/* --- UI Improvements & Animations added --- */

/* 1. Less compact select/input options */
.lot-input-grid {
    gap: var(--s5) !important;
    padding: var(--s6) !important;
    background: linear-gradient(135deg, rgba(241, 248, 233, 0.7), rgba(255, 255, 255, 0.9)) !important;
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.02) !important;
}

.lot-form-field {
    gap: 8px !important;
}

.lot-form-field label {
    font-size: 0.9rem !important;
    color: var(--leaf-deep) !important;
    transition: color 0.3s ease;
}

.lot-form-field:focus-within label {
    color: var(--leaf-bright) !important;
    transform: translateY(-1px);
}

.lot-form-field input,
.lot-form-field select {
    padding: 12px 16px !important;
    font-size: 1rem !important;
    border-radius: var(--r2) !important;
    border: 2px solid rgba(67, 160, 71, 0.15) !important;
    background-color: #FAFAFA !important;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02) !important;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    cursor: pointer;
}

.lot-form-field input:hover,
.lot-form-field select:hover {
    border-color: rgba(67, 160, 71, 0.4) !important;
    background-color: #FFFFFF !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important;
}

.lot-form-field input:focus,
.lot-form-field select:focus {
    border-color: var(--leaf-bright) !important;
    background-color: #FFFFFF !important;
    box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.15), 0 4px 12px rgba(0,0,0,0.08) !important;
    transform: translateY(-2px);
    outline: none !important;
}

/* 2. Cool animations for Buttons */
.btn {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
}

.btn:hover {
    transform: translateY(-4px) scale(1.02) !important;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.btn:active {
    transform: translateY(1px) scale(0.98) !important;
}

/* 3. Smooth transition for progress steps */
.progress-step {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
}
.progress-step:hover {
    transform: translateY(-4px) !important;
    box-shadow: var(--shadow-float) !important;
}

/* 4. Improve top navigation tabs */
.nav-tab-btn {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
.nav-tab-btn:hover {
    background: rgba(255, 255, 255, 0.9) !important;
    transform: translateY(-3px) !important;
    box-shadow: 0 8px 16px rgba(0,0,0,0.06) !important;
}

/* 5. Animated Cards */
.custom-card {
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
.custom-card:hover {
    transform: translateY(-8px) !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1) !important;
}

/* 6. Language selector styling fix */
.language-options .lang-option {
    padding: var(--s4) !important;
    font-size: 1.05rem !important;
}

/* Optional: Staggered fade in for form fields */
.lot-form-field {
    animation: fadeInSlideUp 0.6s ease-out backwards;
}
.lot-form-field:nth-child(1) { animation-delay: 0.1s; }
.lot-form-field:nth-child(2) { animation-delay: 0.2s; }
.lot-form-field:nth-child(3) { animation-delay: 0.3s; }
.lot-form-field:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInSlideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

fs.appendFileSync('app.css', cssAppend);
console.log('Added styling improvements and animations to app.css');
