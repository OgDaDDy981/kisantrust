/**
 * KisanTrust - Multi-Pathway Opportunity Comparison Service (Stage 5 / Phase 9)
 * Enables farmers to evaluate and compare 4 selling routes side-by-side:
 * - Option A: Local Mandi
 * - Option B: Distant Major APMC
 * - Option C: Verified Buyer (Direct Deal)
 * - Option D: Smart Pooled Logistics Route
 */

import { MarketComparisonService } from './marketComparisonService.js';
import { BuyerService } from './buyerService.js';
import { TransportCostService } from './transportCostService.js';
import { PriceCalculationService } from './priceCalculationService.js';

export class OpportunityComparisonService {
    /**
     * Compares all 4 selling pathways side-by-side for any given lot
     * @param {Object} params
     * @param {string} [params.cropType="Tomato"]
     * @param {number} [params.quantityKg=500]
     * @param {string} [params.qualityGrade="Grade A"]
     * @param {number} [params.freshnessScore=90]
     * @param {string} [params.farmerDistrict="Nashik"]
     * @returns {Promise<Object>} Side-by-side 4-way comparison matrix
     */
    static async compareSellingPathways({
        cropType = 'Tomato',
        quantityKg = 500,
        qualityGrade = 'Grade A',
        freshnessScore = 90,
        farmerDistrict = 'Nashik'
    } = {}) {
        // 1. Fetch APMC comparisons & buyers
        const mandiComparison = await MarketComparisonService.compareMarketsForLot({
            cropType,
            qualityGrade,
            freshnessScore,
            quantityKg,
            farmerDistrict
        });

        const rankedMandis = mandiComparison.rankedMandis || [];
        const localMandi = rankedMandis.find(m => m.distanceKm <= 35) || rankedMandis[0] || {
            marketName: 'Pimpalgaon Baswant APMC',
            distanceKm: 28,
            modalPricePerKg: 34.0,
            rawModalPricePerKg: 34.0,
            transportCostPerKg: 0.80,
            estimatedNetRealizationPerKg: 32.80
        };

        const distantMandi = rankedMandis.find(m => m.distanceKm > 50) || rankedMandis[rankedMandis.length - 1] || {
            marketName: 'Vashi APMC (Navi Mumbai)',
            distanceKm: 165,
            modalPricePerKg: 38.0,
            rawModalPricePerKg: 38.0,
            transportCostPerKg: 2.80,
            estimatedNetRealizationPerKg: 34.70
        };

        const matchedBuyers = await BuyerService.matchBuyersForLot({
            cropType,
            quantityKg,
            overallQualityGrade: qualityGrade,
            freshnessScore
        }, farmerDistrict);

        const topBuyer = (matchedBuyers && matchedBuyers.length > 0) ? matchedBuyers[0] : {
            buyerName: 'KisanMitra Agro Processing Hub',
            offeredPricePerKg: 37.50,
            pickupProvided: true,
            estimatedNetRealization: 37.20,
            matchScore: 96,
            paymentTerms: 'Direct Bank Settlement on Delivery QC'
        };

        // 2. Option A: Local Mandi
        const localGrossPerKg = localMandi.modalPricePerKg || localMandi.rawModalPricePerKg || 34.0;
        const localTransport = TransportCostService.calculateFreight({ distanceKm: localMandi.distanceKm, quantityKg, isPooled: false }).costPerKg;
        const localHandling = 0.40;
        const localNetPerKg = Number(Math.max(1.0, localGrossPerKg - localTransport - localHandling).toFixed(2));
        const localTotalPayout = Number((localNetPerKg * quantityKg).toFixed(2));

        const optionA = {
            id: 'OPTION_LOCAL_MANDI',
            title: `स्थानिक मंडई (${localMandi.marketName})`,
            titleEn: `Local Mandi (${localMandi.marketName})`,
            routeType: 'LOCAL_APMC',
            marketOrBuyerName: localMandi.marketName,
            distanceKm: localMandi.distanceKm,
            grossPricePerKg: localGrossPerKg,
            grossPricePerQtl: Number((localGrossPerKg * 100).toFixed(0)),
            transportCostPerKg: localTransport,
            handlingCessPerKg: localHandling,
            storageHoldingCostPerKg: 0.00,
            netRealizationPerKg: localNetPerKg,
            totalLotPayout: localTotalPayout,
            paymentTimeline: 'Same-day APMC Cash / Slip',
            paymentTimelineMr: 'त्याच दिवशी रोख / APMC पावती',
            riskLevel: 'MEDIUM',
            riskLevelMr: 'मध्यम (लिलाव भाव चढ-उतार)',
            settlementMethod: 'APMC Commission Agent',
            features: [
                'स्थानिक जवळची बाजारपेठ (कमी अंतर)',
                'दलाली व हमाली शुल्क लागू',
                'बाजारातील गर्दीनुसार भाव अनिश्चितता'
            ]
        };

        // 3. Option B: Distant Major APMC (Solo Single Trip)
        const distantGrossPerKg = distantMandi.modalPricePerKg || distantMandi.rawModalPricePerKg || 38.0;
        const distantSoloTransport = TransportCostService.calculateFreight({ distanceKm: distantMandi.distanceKm, quantityKg, isPooled: false }).costPerKg;
        const distantHandling = 0.50;
        const distantNetPerKg = Number(Math.max(1.0, distantGrossPerKg - distantSoloTransport - distantHandling).toFixed(2));
        const distantTotalPayout = Number((distantNetPerKg * quantityKg).toFixed(2));

        const optionB = {
            id: 'OPTION_DISTANT_MANDI',
            title: `दूरचा प्रमुख बाजार (${distantMandi.marketName})`,
            titleEn: `Distant Major APMC (${distantMandi.marketName})`,
            routeType: 'DISTANT_APMC_SOLO',
            marketOrBuyerName: distantMandi.marketName,
            distanceKm: distantMandi.distanceKm,
            grossPricePerKg: distantGrossPerKg,
            grossPricePerQtl: Number((distantGrossPerKg * 100).toFixed(0)),
            transportCostPerKg: distantSoloTransport,
            handlingCessPerKg: distantHandling,
            storageHoldingCostPerKg: 0.00,
            netRealizationPerKg: distantNetPerKg,
            totalLotPayout: distantTotalPayout,
            paymentTimeline: '24 to 48 Hours',
            paymentTimelineMr: '२४ ते ४८ तास',
            riskLevel: 'MEDIUM_HIGH',
            riskLevelMr: 'मध्यम-जास्त (प्रवासातील नासाडी व वाहतूक खर्च)',
            settlementMethod: 'Outstation APMC Trader Transfer',
            features: [
                'उच्च प्राथमिक भाव दर',
                'एका लॉटसाठी जास्त वाहतूक खर्च',
                'लांबच्या प्रवासामुळे वजनात घट संभव'
            ]
        };

        // 4. Option C: Verified Buyer (Direct Contract / Escrow)
        const buyerGrossPerKg = Number(topBuyer.offeredPricePerKg) || 37.50;
        const buyerTransport = topBuyer.pickupProvided ? 0.00 : TransportCostService.calculateFreight({ distanceKm: 25, quantityKg, isPooled: false }).costPerKg;
        const buyerHandling = 0.00; // Zero Mandi Cess on Farmgate
        const buyerNetPerKg = Number(Math.max(1.0, buyerGrossPerKg - buyerTransport - buyerHandling).toFixed(2));
        const buyerTotalPayout = Number((buyerNetPerKg * quantityKg).toFixed(2));

        const optionC = {
            id: 'OPTION_VERIFIED_BUYER',
            title: `सत्यापित खरेदीदार (${topBuyer.buyerName ? topBuyer.buyerName.split(' ')[0] : 'Buyer'})`,
            titleEn: `Verified Buyer (${topBuyer.buyerName || 'Verified Buyer'})`,
            routeType: 'DIRECT_BUYER',
            marketOrBuyerName: topBuyer.buyerName || 'Verified Direct Buyer',
            distanceKm: topBuyer.pickupProvided ? 0 : 25,
            grossPricePerKg: buyerGrossPerKg,
            grossPricePerQtl: Number((buyerGrossPerKg * 100).toFixed(0)),
            transportCostPerKg: buyerTransport,
            handlingCessPerKg: buyerHandling,
            storageHoldingCostPerKg: 0.00,
            netRealizationPerKg: buyerNetPerKg,
            totalLotPayout: buyerTotalPayout,
            paymentTimeline: '12 Hours (KisanTrust Escrow)',
            paymentTimelineMr: '१२ तास (किसानट्रस्ट बँक एस्क्रो)',
            riskLevel: 'LOW',
            riskLevelMr: 'कमी (निश्चित करार दर व बँक सुरक्षा)',
            settlementMethod: 'KisanTrust Direct Escrow Settlement',
            features: [
                'शेतावर थेट पिकअप (शून्य वाहतूक खर्च)',
                'कोणतीही मंडी सेस किंवा दलाली नाही',
                '१००% हमीभाव व डिजिटल पावती'
            ]
        };

        // 5. Option D: Smart Pooled Logistics Route (10-Ton Shared Freight)
        const pooledTransport = TransportCostService.calculateFreight({ distanceKm: distantMandi.distanceKm, quantityKg, isPooled: true }).costPerKg;
        const pooledHandling = 0.40;
        const pooledNetPerKg = Number(Math.max(1.0, distantGrossPerKg - pooledTransport - pooledHandling).toFixed(2));
        const pooledTotalPayout = Number((pooledNetPerKg * quantityKg).toFixed(2));

        const optionD = {
            id: 'OPTION_SMART_POOLING',
            title: `स्मार्ट वाहतूक पूलिंग (${distantMandi.marketName})`,
            titleEn: `Smart Pooled Logistics (${distantMandi.marketName})`,
            routeType: 'SMART_POOLING',
            marketOrBuyerName: `${distantMandi.marketName} (१०-टन शेअर्ड)`,
            distanceKm: distantMandi.distanceKm,
            grossPricePerKg: distantGrossPerKg,
            grossPricePerQtl: Number((distantGrossPerKg * 100).toFixed(0)),
            transportCostPerKg: pooledTransport,
            handlingCessPerKg: pooledHandling,
            storageHoldingCostPerKg: 0.00,
            netRealizationPerKg: pooledNetPerKg,
            totalLotPayout: pooledTotalPayout,
            paymentTimeline: '24 Hours',
            paymentTimelineMr: '२४ तास',
            riskLevel: 'LOW_MEDIUM',
            riskLevelMr: 'कमी-मध्यम (एफपीओ समूह सुरक्षा)',
            settlementMethod: 'FPO / Cluster Pooled Settlement',
            features: [
                '१०-टन शेअर्ड ट्रकमधून ६०-७०% वाहतूक बचत',
                'दूरच्या मोठ्या बाजारातील उच्च दर मिळवणे शक्य',
                'गावातील इतर शेतकऱ्यांसोबत एकत्र वाहतूक'
            ]
        };

        const allOptions = [optionA, optionB, optionC, optionD];
        const rankedOptions = [...allOptions].sort((a, b) => b.netRealizationPerKg - a.netRealizationPerKg);
        const bestOption = rankedOptions[0];
        const baselineNet = optionA.netRealizationPerKg;
        const maxGainPerKg = Number((bestOption.netRealizationPerKg - baselineNet).toFixed(2));
        const maxGainTotal = Number((maxGainPerKg * quantityKg).toFixed(2));

        return {
            cropType,
            quantityKg,
            qualityGrade,
            farmerDistrict,
            options: {
                localMandi: optionA,
                distantMandi: optionB,
                verifiedBuyer: optionC,
                smartPooling: optionD
            },
            rankedOptions,
            bestOption,
            comparisonSummary: {
                baselineRoute: optionA.title,
                baselineNetPerKg: baselineNet,
                bestRoute: bestOption.title,
                bestNetPerKg: bestOption.netRealizationPerKg,
                netGainPerKg: maxGainPerKg > 0 ? maxGainPerKg : 0,
                totalLotNetGain: maxGainTotal > 0 ? maxGainTotal : 0,
                highlightBadge: maxGainPerKg > 0 ? `⭐ +₹${maxGainPerKg}/kg अतिरिक्त नफा (+₹${maxGainTotal.toLocaleString('en-IN')})` : '⭐ सर्वोत्तम चालू भाव'
            }
        };
    }
}
