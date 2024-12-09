document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', calculateImpact);
});

const countryData = {
    GBP: { symbol: '£', stats: { visual: 0.02, hearing: 0.05, mobility: 0.08, cognitive: 0.10 }, improvementFactor: 1.15 },
    USD: { symbol: '$', stats: { visual: 0.02, hearing: 0.05, mobility: 0.07, cognitive: 0.10 }, improvementFactor: 1.15 },
    EUR: { symbol: '€', stats: { visual: 0.02, hearing: 0.05, mobility: 0.07, cognitive: 0.10 }, improvementFactor: 1.15 },
    AUD: { symbol: 'A$', stats: { visual: 0.02, hearing: 0.05, mobility: 0.08, cognitive: 0.09 }, improvementFactor: 1.15 },
    CAD: { symbol: 'C$', stats: { visual: 0.02, hearing: 0.05, mobility: 0.07, cognitive: 0.10 }, improvementFactor: 1.15 }
};

function formatNumber(num) {
    return num.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

function calculateImpact() {
    const currency = document.getElementById('currency').value;
    const visitors = parseFloat(document.getElementById('visitors').value) || 0;
    const orderValue = parseFloat(document.getElementById('orderValue').value) || 0;
    const conversion = parseFloat(document.getElementById('conversion').value) || 0;

    const countryStats = countryData[currency].stats;
    const improvementFactor = countryData[currency].improvementFactor;
    const currencySymbol = countryData[currency].symbol;

    let totalMonthlyRevenue = 0;
    let totalPotentialTraffic = 0;

    // Calculate total monthly revenue and potential traffic
    Object.values(countryStats).forEach(percentage => {
        const typeVisitors = visitors * percentage;
        totalPotentialTraffic += typeVisitors;

        const currentRevenue = typeVisitors * (conversion / 100) * orderValue;
        const improvedRevenue = typeVisitors * ((conversion * improvementFactor) / 100) * orderValue;
        totalMonthlyRevenue += improvedRevenue - currentRevenue;
    });

    // Update the results in the UI
    document.getElementById('monthlyTraffic').textContent = `${formatNumber(totalPotentialTraffic)} visitors`;
    document.getElementById('yearlyTraffic').textContent = `${formatNumber(totalPotentialTraffic * 12)} visitors`;
    document.getElementById('monthlyRevenue').textContent = `${currencySymbol}${formatNumber(totalMonthlyRevenue)}`;
    document.getElementById('yearlyRevenue').textContent = `${currencySymbol}${formatNumber(totalMonthlyRevenue * 12)}`;

    Object.entries(countryData[currency].stats).forEach(([type, percentage]) => {
        const typeVisitors = visitors * percentage;
        const currentRevenue = typeVisitors * (conversion / 100) * orderValue;
        const improvedRevenue = typeVisitors * ((conversion * improvementFactor) / 100) * orderValue;
        const revenueIncrease = improvedRevenue - currentRevenue;

        const impactItem = document.createElement('div');
        impactItem.className = 'impact-item';
        impactItem.innerHTML = `
            <h3>${type.charAt(0).toUpperCase() + type.slice(1)} Impairments</h3>
            <dl>
                <dt>Potential Users:</dt>
                <dd>${formatNumber(typeVisitors)}</dd>
                <dt>Potential Revenue Increase:</dt>
                <dd>${countryData[currency].symbol}${formatNumber(revenueIncrease)}</dd>
            </dl>
        `;
        breakdownContainer.appendChild(impactItem);
    });
}