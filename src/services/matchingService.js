/**
 * AgriLink - Deterministic Farmer-to-Buyer Matching Engine (Stage 3)
 * Computes an explainable Opportunity Compatibility Score (0 - 100%)
 * Evaluates Crop, Quality Grade, Distance, Volume, Price Net Realization, Deadline, and Buyer Reliability.
 */

import { TransportEstimationService } from './transportEstimationService.js';

export class MatchingService {
    /**
     * Calculates deterministic match score and net realization between an agricultural lot and a buyer demand
     * @param {Object} lot DigitalAgriculturalLot instance or plain object
     * @param {Object} demand BuyerDemand instance or plain object
     * @param {string} [farmerDistrict="Nashik"]
     * @returns {Object} Deterministic match evaluation result
     */
    static evaluateMatch(lot, demand, farmerDistrict = "Nashik") {
        const lotCrop = (lot.cropType || "").trim().toLowerCase();
        const demandCrop = (demand.cropType || "").trim().toLowerCase();

        // 1. HARD GATE: Crop Type Compatibility
        if (lotCrop !== demandCrop && !lotCrop.includes(demandCrop) && !demandCrop.includes(lotCrop)) {
            return {
                matchScore: 0,
                isCompatible: false,
                reasons: [],
                warnings: ["पिकाचा प्रकार जुळत नाही (Incompatible Crop Type)"],
                estimatedNetRealization: 0,
                totalLotNetValue: 0,
                factorBreakdown: { crop: 0, quality: 0, distance: 0, volume: 0, price: 0, reliability: 0, deadline: 0 }
            };
        }

        const reasons = [];
        const warnings = [];

        // 2. QUALITY COMPATIBILITY (Weight: 25%)
        let qualityScore = 100;
        const lotGrade = lot.overallQualityGrade || "Grade A";
        const minGrade = demand.minQualityGrade || "Grade A";

        if (lotGrade === "Grade A") {
            qualityScore = 100;
            reasons.push(`लॉटचा दर्जा (${lotGrade}) खरेदीदाराच्या किमान निकषापेक्षा (${minGrade}) उत्कृष्ट आहे.`);
        } else if (lotGrade === "Grade B") {
            if (minGrade === "Grade A") {
                qualityScore = 50;
                warnings.push(`खरेदीदाराला Grade A आवश्यक आहे, परंतु लॉट Grade B आहे (दर कपात होऊ शकते).`);
            } else {
                qualityScore = 100;
                reasons.push(`लॉट Grade B खरेदीदाराच्या आवश्यकतेशी अचूक जुळतो.`);
            }
        } else { // Grade C
            if (minGrade === "Grade A") {
                qualityScore = 20;
                warnings.push(`लॉट Grade C आहे; खरेदीदाराच्या Grade A मानकांशी गंभीर विसंगती.`);
            } else if (minGrade === "Grade B") {
                qualityScore = 50;
                warnings.push(`लॉट Grade C आहे; प्रतवारी तपासणीत कपात संभवते.`);
            } else {
                qualityScore = 90;
            }
        }

        // 3. DISTANCE & LOGISTICS COMPATIBILITY (Weight: 20%)
        const buyerLocation = demand.preferredLocation || "Nashik";
        const distanceKm = TransportEstimationService.getEstimatedDistanceKm(farmerDistrict, buyerLocation);
        const maxDist = demand.maxSourcingDistanceKm || 150;
        
        let distanceScore = 100;
        if (distanceKm > maxDist) {
            const excess = distanceKm - maxDist;
            distanceScore = Math.max(10, 100 - (excess * 1.5));
            warnings.push(`खरेदीदाराच्या कमाल अंतर मर्यादेपेक्षा (${maxDist} km) हे अंतर (${distanceKm} km) जास्त आहे.`);
        } else {
            distanceScore = Number(Math.max(70, 100 - (distanceKm * 0.25)).toFixed(1));
            reasons.push(`खरेदीदार अंतर कक्षेत उपलब्ध आहे (${distanceKm} km < ${maxDist} km).`);
        }

        // 4. TRANSPORT & NET REALIZATION (Weight: 25%)
        let transportCostPerKg = 0.0;
        if (demand.pickupProvided) {
            transportCostPerKg = 0.0;
            reasons.push(`खरेदीदार शेतावर थेट पिकअप (Farm-gate Pickup) पुरवतो - शून्य वाहतूक खर्च!`);
        } else {
            const transportData = TransportEstimationService.calculateTransportCost({
                distanceKm,
                quantityKg: lot.quantity || 500
            });
            transportCostPerKg = transportData.costPerKg;
        }

        const offeredPrice = Number(demand.offeredPricePerKg) || 30.0;
        const handlingCost = 0.30;
        const estimatedNetRealization = Number(
            Math.max(1.0, offeredPrice - transportCostPerKg - handlingCost).toFixed(2)
        );
        const totalLotNetValue = Number((estimatedNetRealization * (lot.quantity || 500)).toFixed(2));

        // Price Score compared to base ₹30 benchmark
        let priceScore = Number(Math.min(100, Math.max(40, (estimatedNetRealization / 32.0) * 85)).toFixed(1));
        if (offeredPrice >= 36.0) {
            reasons.push(`आकर्षक खरेदी दर: ₹${offeredPrice}/kg (थेट निव्वळ प्राप्ती: ₹${estimatedNetRealization}/kg).`);
        }

        // 5. QUANTITY / VOLUME COMPATIBILITY (Weight: 15%)
        const lotQty = Number(lot.quantity) || 500;
        const demandQty = Number(demand.requiredQuantityKg) || 5000;
        const remainingDemand = Math.max(0, demandQty - (demand.fulfilledQuantityKg || 0));

        let volumeScore = 90;
        if (lotQty <= remainingDemand) {
            volumeScore = 100;
            reasons.push(`आपला संपूर्ण लॉट (${lotQty} kg) खरेदीदाराच्या शिल्लक मागणीत (${remainingDemand} kg) सामावला जाऊ शकतो.`);
        } else {
            const oversupplyRatio = lotQty / remainingDemand;
            volumeScore = Number(Math.max(50, 100 - ((oversupplyRatio - 1) * 40)).toFixed(1));
            warnings.push(`लॉटचे वजन (${lotQty} kg) खरेदीदाराच्या शिल्लक मागणीपेक्षा (${remainingDemand} kg) जास्त आहे.`);
        }

        // 6. BUYER RELIABILITY SCORE (Weight: 10%)
        const relRating = Number(demand.reliabilityScore) || 4.5;
        const reliabilityScore = Number(((relRating / 5.0) * 100).toFixed(1));
        if (relRating >= 4.8) {
            reasons.push(`उच्च विश्वासार्हता रेटिंग (⭐ ${relRating}/5.0 • ९८%+ वेळेवर पेमेंट नोंद).`);
        }

        // 7. DEADLINE ALIGNMENT (Bonus / Check)
        let deadlineScore = 95;
        if (lot.expectedSellingDate && demand.requiredDeliveryDate) {
            const sellDate = new Date(lot.expectedSellingDate);
            const reqDate = new Date(demand.requiredDeliveryDate);
            if (sellDate > reqDate) {
                deadlineScore = 40;
                warnings.push(`खरेदीदाराची आवश्यक तारीख (${demand.requiredDeliveryDate}) आपल्या काढणी तारखेनंतरची आहे.`);
            } else {
                deadlineScore = 100;
            }
        }

        // COMPOSITE DETERMINISTIC WEIGHTED MATCH SCORE
        const compositeScore = Number((
            (qualityScore * 0.25) +
            (distanceScore * 0.15) +
            (priceScore * 0.25) +
            (volumeScore * 0.15) +
            (reliabilityScore * 0.10) +
            (deadlineScore * 0.10)
        ).toFixed(1));

        const qualityFit = {
            score: qualityScore,
            status: lotGrade === minGrade ? 'EXACT_MATCH' : (lotGrade === 'Grade A' ? 'EXCEEDS' : 'BELOW_TARGET'),
            explanation: lotGrade === 'Grade A' 
                ? `लॉटचा प्रमाणित दर्जा ${lotGrade} खरेदीदाराच्या निकषापेक्षा (${minGrade}) उत्कृष्ट आहे.` 
                : (lotGrade === minGrade ? `लॉट दर्जा ${lotGrade} खरेदीदाराच्या आवश्यकतेशी अचूक जुळतो.` : `खरेदीदाराला ${minGrade} आवश्यक असून लॉट ${lotGrade} आहे.`)
        };

        const quantityFit = {
            score: volumeScore,
            status: lotQty <= remainingDemand ? 'FULL_LOT_COVERED' : 'PARTIAL_LOT_COVERED',
            explanation: lotQty <= remainingDemand 
                ? `आपला संपूर्ण लॉट (${lotQty} kg) खरेदीदाराच्या मागणीत (${remainingDemand} kg) १००% सामावला जातो.` 
                : `लॉटचे वजन (${lotQty} kg) शिल्लक मागणीपेक्षा (${remainingDemand} kg) जास्त आहे.`
        };

        const logisticsFit = {
            score: distanceScore,
            status: demand.pickupProvided ? 'FARM_GATE_PICKUP' : (distanceKm <= maxDist ? 'IN_RANGE' : 'OUT_OF_RANGE'),
            distanceKm,
            transportCostPerKg,
            explanation: demand.pickupProvided 
                ? `शेतावर थेट पिकअप (वाहतूक खर्च ₹०.००).` 
                : `अंतर: ${distanceKm} km (कमाल मर्यादा: ${maxDist} km), वाहतूक खर्च: ₹${transportCostPerKg}/kg.`
        };

        const priceFit = {
            score: priceScore,
            offeredPricePerKg: offeredPrice,
            estimatedNetRealization,
            totalLotNetValue,
            explanation: `ऑफर दर ₹${offeredPrice}/kg वरून निव्वळ प्राप्ती ₹${estimatedNetRealization}/kg (एकूण लॉट: ₹${totalLotNetValue.toLocaleString('en-IN')}).`
        };

        return {
            matchScore: Math.min(99, Math.max(15, compositeScore)),
            isCompatible: compositeScore >= 40,
            demandId: demand.demandId,
            buyerId: demand.buyerId,
            buyerName: demand.buyerName,
            companyType: demand.companyType,
            offeredPricePerKg: offeredPrice,
            transportCostPerKg,
            estimatedNetRealization,
            totalLotNetValue,
            pickupProvided: demand.pickupProvided,
            distanceKm,
            paymentTerms: demand.paymentTerms,
            reliabilityScore: relRating,
            reasons,
            warnings,
            factorBreakdown: {
                quality: qualityScore,
                distance: distanceScore,
                price: priceScore,
                volume: volumeScore,
                reliability: reliabilityScore,
                deadline: deadlineScore
            },
            matchDetails: {
                qualityFit,
                quantityFit,
                logisticsFit,
                priceFit
            }
        };
    }

    /**
     * Matches and ranks all active buyer demands for a specific lot
     * @param {Object} lot DigitalAgriculturalLot
     * @param {Array<Object>} demands Array of BuyerDemands
     * @param {string} [farmerDistrict="Nashik"]
     * @returns {Array<Object>} Ranked matches with score breakdown
     */
    static rankBuyersForLot(lot, demands, farmerDistrict = "Nashik") {
        const matches = demands
            .filter(d => d.status === "ACTIVE")
            .map(demand => {
                const evalResult = this.evaluateMatch(lot, demand, farmerDistrict);
                return {
                    ...evalResult,
                    demand
                };
            })
            .filter(m => m.isCompatible);

        // Rank by composite score (Net realization + compatibility)
        return matches.sort((a, b) => b.matchScore - a.matchScore);
    }
}
