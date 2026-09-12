/**
 * AgriLink - Transport Estimation Service
 * Provides realistic road freight estimation based on distance, lot weight, and vehicle capacity.
 * Abstraction layer designed for zero client-side API key exposure.
 */

export class TransportEstimationService {
    // Standard distance matrix from core agricultural hubs in Maharashtra (in km)
    static KNOWN_DISTANCES = {
        "Nashik": {
            "Lasalgaon APMC": 28,
            "Pimpalgaon Baswant APMC": 18,
            "Pune APMC (Gultekdi)": 165,
            "Vashi APMC (Navi Mumbai)": 185,
            "Azadpur Mandi (Delhi)": 1280,
            "Surat APMC": 230
        },
        "Pune": {
            "Pune APMC (Gultekdi)": 12,
            "Vashi APMC (Navi Mumbai)": 145,
            "Lasalgaon APMC": 190,
            "Kolhapur APMC": 235
        }
    };

    /**
     * Estimates road distance between farmer district and destination market
     * @param {string} originDistrict e.g. "Nashik"
     * @param {string} destinationMarket e.g. "Vashi APMC (Navi Mumbai)"
     * @returns {number} Estimated road distance in km
     */
    static getEstimatedDistanceKm(originDistrict = "Nashik", destinationMarket = "Vashi APMC (Navi Mumbai)") {
        const districtDistances = this.KNOWN_DISTANCES[originDistrict] || this.KNOWN_DISTANCES["Nashik"];
        
        // Exact match
        if (districtDistances[destinationMarket]) {
            return districtDistances[destinationMarket];
        }

        // Fuzzy search
        const destLower = destinationMarket.toLowerCase();
        for (const [market, dist] of Object.entries(districtDistances)) {
            if (destLower.includes(market.toLowerCase().split(' ')[0])) {
                return dist;
            }
        }

        // Default regional fallback
        if (destLower.includes('mumbai') || destLower.includes('vashi')) return 185;
        if (destLower.includes('pune')) return 165;
        if (destLower.includes('lasalgaon')) return 28;
        if (destLower.includes('pimpalgaon')) return 18;
        if (destLower.includes('delhi') || destLower.includes('azadpur')) return 1280;

        return 50; // Local district average
    }

    /**
     * Calculates transparent transport cost breakdown
     * @param {Object} params
     * @param {number} params.distanceKm Distance in km
     * @param {number} params.quantityKg Lot weight in kg
     * @param {string} [params.vehicleType] 'Auto/Pickup' | 'Mini Truck (4T)' | 'Truck (10T)'
     * @returns {Object} Transport estimation breakdown
     */
    static calculateTransportCost({ distanceKm, quantityKg = 500, vehicleType = 'auto' }) {
        const dist = Math.max(5, Number(distanceKm) || 30);
        const weight = Math.max(10, Number(quantityKg) || 500);

        // Determine most suitable vehicle by weight if 'auto'
        let selectedVehicle = '1-Ton Pickup (पिकअप)';
        let baseRatePerKm = 14.0; // ₹/km
        let payloadCapacityKg = 1200;

        if (weight > 4000) {
            selectedVehicle = '10-Ton Truck (१० टन ट्रक)';
            baseRatePerKm = 42.0;
            payloadCapacityKg = 10000;
        } else if (weight > 1200) {
            selectedVehicle = '4-Ton Eicher (४ टन आयशर)';
            baseRatePerKm = 26.0;
            payloadCapacityKg = 4000;
        }

        // Total trip freight estimate
        const totalTripFreight = Number((dist * baseRatePerKm).toFixed(2));

        // Farmer's share of transport per kg
        // Smallholder partial load vs full truckload sharing
        let costPerKg = 0.0;
        if (weight >= payloadCapacityKg * 0.8) {
            // Full truckload
            costPerKg = Number((totalTripFreight / weight).toFixed(2));
        } else {
            // Partial / LTL load with standard regional freight index
            // ~₹0.012 per km per kg with minimum base handling
            costPerKg = Number(Math.max(0.40, (dist * 0.012) + 0.30).toFixed(2));
        }

        const totalLotTransportCost = Number((costPerKg * weight).toFixed(2));

        return {
            distanceKm: dist,
            quantityKg: weight,
            vehicleType: selectedVehicle,
            costPerKg: costPerKg,
            totalLotTransportCost: totalLotTransportCost,
            calculationBasis: `${dist} km distance @ standard regional commercial freight (approx ₹${costPerKg}/kg)`,
            isEstimated: true
        };
    }
}
