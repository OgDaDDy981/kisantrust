import { MarketTrendService } from './marketTrendService.js';

export class PricePredictionService {
    /**
     * Determines seasonal supply stage for a commodity
     */
    static getSeasonalityIndicator(cropType = "Tomato", month = new Date().getMonth()) {
        const crop = cropType.toLowerCase();
        // Month index: 0 = Jan, 7 = Aug, 8 = Sep, etc.
        if (crop.includes('tomato')) {
            if (month >= 6 && month <= 9) { // Jul - Oct (Kharif peak)
                return {
                    stage: 'PEAK_HARVEST',
                    stageMr: 'खरीप काढणीचा मुख्य हंगाम (Peak Harvest)',
                    seasonalIndex: 0.95,
                    description: 'खरीप हंगामातील वाढती स्थानिक आवक; बाजारात पुरवठा मुबलक असल्याने भाव मध्यम राहण्याचा कल.'
                };
            } else if (month >= 10 || month <= 1) { // Nov - Feb (Late Kharif / Rabi)
                return {
                    stage: 'MID_SEASON',
                    stageMr: 'मध्यम हंगाम (Regular Supply)',
                    seasonalIndex: 1.05,
                    description: 'स्थिर आवक व नियमित मागणीचा समतोल.'
                };
            } else { // Mar - Jun (Summer lean)
                return {
                    stage: 'OFF_SEASON_LEAN',
                    stageMr: 'उन्हाळी टंचाई हंगाम (Lean Supply)',
                    seasonalIndex: 1.20,
                    description: 'उन्हाळी हंगामात आवक घटल्याने भावात तेजीची शक्यता.'
                };
            }
        } else if (crop.includes('onion')) {
            if (month >= 2 && month <= 4) { // Mar - May (Rabi harvest peak)
                return {
                    stage: 'PEAK_HARVEST',
                    stageMr: 'रब्बी कांदा काढणी हंगाम (Peak Rabi)',
                    seasonalIndex: 0.90,
                    description: 'रब्बी कांद्याची प्रचंड आवक; साठवणुकीसाठी (चाळ) उत्तम वेळ.'
                };
            } else if (month >= 8 && month <= 11) { // Sep - Dec (Kharif / Post-monsoon shortage)
                return {
                    stage: 'OFF_SEASON_LEAN',
                    stageMr: 'टंचाई काळ (Pre-Kharif Shortage)',
                    seasonalIndex: 1.25,
                    description: 'चाळीतील जुना कांदा संपत आल्याने व नवीन कांदा येईपर्यंत भावात मोठी तेजी.'
                };
            } else {
                return {
                    stage: 'MID_SEASON',
                    stageMr: 'मध्यम हंगाम',
                    seasonalIndex: 1.0,
                    description: 'नियमित बाजार आवक.'
                };
            }
        }

        return {
            stage: 'MID_SEASON',
            stageMr: 'सामान्य हंगाम',
            seasonalIndex: 1.0,
            description: 'नियमित हंगामी आवक व स्थिर मागणी.'
        };
    }

    /**
     * Evaluates daily arrival pressure impact on spot prices
     */
    static evaluateArrivalPressure(arrivalVolumeTons = 120, baselineTons = 100) {
        const ratio = arrivalVolumeTons / (baselineTons || 100);
        if (ratio >= 1.6) {
            return {
                volumeTons: arrivalVolumeTons,
                pressureLevel: 'HIGH_SUPPLY_PRESSURE',
                pressureLevelMr: 'उच्च आवक दबाव (High Supply)',
                priceImpactPerKg: -1.20,
                label: 'बाजारात प्रचंड आवक (भावावर मंदीचा दबाव)'
            };
        } else if (ratio <= 0.65) {
            return {
                volumeTons: arrivalVolumeTons,
                pressureLevel: 'TIGHT_SUPPLY_SUPPORT',
                pressureLevelMr: 'कमी आवक आधार (Tight Supply)',
                priceImpactPerKg: +0.80,
                label: 'बाजारात कमी आवक (भावाला तेजीचा आधार)'
            };
        }

        return {
            volumeTons: arrivalVolumeTons,
            pressureLevel: 'BALANCED_SUPPLY',
            pressureLevelMr: 'संतुलित आवक (Balanced Supply)',
            priceImpactPerKg: 0.00,
            label: 'संतुलित आवक व मागणी'
        };
    }

    /**
     * Forecasts expected price opportunity range over a 3 to 7 day horizon (Phase 10)
     * @param {Object} params
     * @param {string} params.cropType
     * @param {string} [params.marketName="Pune APMC"]
     * @param {number} [params.currentPrice=34.0]
     * @param {number} [params.arrivalVolumeTons=120]
     * @param {number} [params.horizonDays=5]
     * @returns {Promise<Object>} Grounded explainable prediction record
     */
    static async forecastPriceRange({
        cropType = 'Tomato',
        marketName = 'Pune APMC (Gultekdi)',
        currentPrice = 34.0,
        arrivalVolumeTons = 120,
        horizonDays = 5
    } = {}) {
        const trendData = await MarketTrendService.getCropPriceTrends(cropType, marketName, currentPrice);
        const series = trendData.sevenDaySeries || [];

        // 1. Moving Averages
        const series7 = (trendData.sevenDaySeries || []).map(s => s.modalPrice);
        const series30 = (trendData.thirtyDaySeries || []).map(s => s.modalPrice);
        const sevenDayMovingAvg = Number((series7.reduce((a, b) => a + b, 0) / (series7.length || 1)).toFixed(2));
        const thirtyDayMovingAvg = Number((series30.reduce((a, b) => a + b, 0) / (series30.length || 1)).toFixed(2));

        // 2. Daily Velocity (₹ change per day)
        let dailyVelocity = 0.0;
        if (series.length >= 2) {
            const first = series[0].modalPrice;
            const last = series[series.length - 1].modalPrice;
            dailyVelocity = (last - first) / (series.length - 1);
        }

        // 3. Arrival Pressure & Seasonality
        const arrivalPressure = this.evaluateArrivalPressure(arrivalVolumeTons, 100);
        const seasonality = this.getSeasonalityIndicator(cropType);

        // 4. Dampened Velocity + Volume Impact
        const dampeningFactor = 0.70;
        const velocityChange = dailyVelocity * horizonDays * dampeningFactor;
        const netProjectedChange = velocityChange + (arrivalPressure.priceImpactPerKg * 0.5);
        const centerExpectedPrice = Number(Math.max(5.0, (currentPrice + netProjectedChange) * seasonality.seasonalIndex).toFixed(2));

        // 5. Dynamic Uncertainty Interval based on historical volatility
        const mean = series7.reduce((a, b) => a + b, 0) / (series7.length || 1);
        const variance = series7.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (series7.length || 1);
        const stdDev = Math.sqrt(variance);

        const uncertaintyMargin = Number(Math.max(1.5, stdDev * 1.5 + (horizonDays * 0.20)).toFixed(2));
        const minPredicted = Number(Math.max(1.0, centerExpectedPrice - uncertaintyMargin).toFixed(2));
        const maxPredicted = Number((centerExpectedPrice + uncertaintyMargin).toFixed(2));

        // Confidence calculation (declines gracefully with forecast horizon length)
        const confidencePercent = Math.max(65, Math.min(92, Math.round(90 - (horizonDays * 3.5) - (stdDev * 2))));
        const confidenceLevel = confidencePercent >= 85 ? 'High (उच्च)' : (confidencePercent >= 75 ? 'Medium-High (मध्यम-उच्च)' : 'Moderate (मध्यम)');

        const forecastStartDate = new Date().toISOString().split('T')[0];
        const forecastEndDate = new Date(Date.now() + horizonDays * 86400000).toISOString().split('T')[0];

        let scenarioDirection = 'STABLE';
        if (dailyVelocity > 0.3) scenarioDirection = 'RISING_MOMENTUM';
        else if (dailyVelocity < -0.3) scenarioDirection = 'FALLING_MOMENTUM';

        return {
            predictionStatus: "Estimated",
            isGrounded: true,
            forecastHorizonDays: horizonDays,
            forecastStartDate,
            forecastEndDate,
            currentPrice: Number(currentPrice.toFixed(2)),
            sevenDayMovingAvg,
            thirtyDayMovingAvg,
            centerExpectedPrice,
            expectedOpportunityRange: {
                min: minPredicted,
                max: maxPredicted,
                formatted: `₹ ${minPredicted.toFixed(2)} – ₹ ${maxPredicted.toFixed(2)} / kg`
            },
            uncertaintyBandPerKg: uncertaintyMargin,
            confidencePercent,
            confidenceLevel,
            dailyVelocityPerKg: Number(dailyVelocity.toFixed(2)),
            scenarioDirection,
            arrivalPressure,
            seasonality,
            explanation: `गेल्या ७ दिवसांतील ${dailyVelocity >= 0 ? '+' : ''}${dailyVelocity.toFixed(2)} ₹/दिवस कल आणि ${arrivalPressure.label} नुसार पुढील ${horizonDays} दिवसांत अंदाजे भाव ₹${minPredicted} ते ₹${maxPredicted}/kg दरम्यान राहण्याची शक्यता आहे (${confidenceLevel} विश्वासार्हता).`,
            historicalDataLimitations: [
                "अंदाज मागील ३० दिवसांच्या अधिकृत APMC आवक आणि भावाच्या सांख्यिकी मॉडेलवर आधारित आहे.",
                "अचानक येणारा मुसळधार पाऊस किंवा इतर राज्यांतून होणारी अवकाळी आवक यामुळे दरात बदल संभवतो.",
                "हा कोणताही निश्चित किंवा हमीभाव नसून शेतकऱ्यांनी शेतमाल साठवणूक की विक्री या निर्णयाच्या तुलनात्मक अभ्यासासाठी आहे."
            ]
        };
    }
}
