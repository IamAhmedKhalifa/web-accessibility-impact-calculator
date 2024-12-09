import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import './ImpactCalculator.css';

const ImpactCalculator = () => {
  const [formData, setFormData] = useState({
    currency: 'GBP',
    revenue: '',
    monthlyTraffic: '',
    conversionRate: '',
    averageOrderValue: ''
  });
  const [result, setResult] = useState(null);

  // Currency data with country-specific disability statistics
  const currencyData = {
    GBP: { symbol: '£', disabledPopulation: 0.22, country: 'UK' },
    EUR: { symbol: '€', disabledPopulation: 0.20, country: 'EU' },
    USD: { symbol: '$', disabledPopulation: 0.26, country: 'USA' },
    CAD: { symbol: '$', disabledPopulation: 0.22, country: 'Canada' },
    AUD: { symbol: '$', disabledPopulation: 0.18, country: 'Australia' },
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const calculateImpact = (e) => {
    e.preventDefault();
    
    const {
      monthlyTraffic,
      conversionRate,
      averageOrderValue,
    } = formData;

    const traffic = parseFloat(monthlyTraffic.replace(/,/g, ''));
    const conversion = parseFloat(conversionRate) / 100;
    const aov = parseFloat(averageOrderValue.replace(/,/g, ''));
    
    if (isNaN(traffic) || isNaN(conversion) || isNaN(aov)) return;

    const data = currencyData[formData.currency];
    
    // Current monthly calculations
    const currentMonthlyOrders = traffic * conversion;
    const currentMonthlyRevenue = currentMonthlyOrders * aov;
    
    // Potential impact calculations
    const potentialDisabledTraffic = traffic * data.disabledPopulation;
    const potentialDisabledOrders = potentialDisabledTraffic * (conversion * 1.2); // Assuming 20% higher conversion
    const potentialAdditionalRevenue = potentialDisabledOrders * aov;
    
    // Improved overall impact (assuming accessibility improves overall UX)
    const improvedOverallConversion = traffic * (conversion * 1.1); // Assuming 10% overall improvement
    const improvedOverallRevenue = improvedOverallConversion * aov;
    
    setResult({
      currentMetrics: {
        monthlyOrders: currentMonthlyOrders.toFixed(0),
        monthlyRevenue: currentMonthlyRevenue.toFixed(2),
      },
      potentialMetrics: {
        additionalTraffic: potentialDisabledTraffic.toFixed(0),
        additionalOrders: potentialDisabledOrders.toFixed(0),
        additionalRevenue: potentialAdditionalRevenue.toFixed(2),
        improvedRevenue: improvedOverallRevenue.toFixed(2),
      },
      symbol: data.symbol,
      country: data.country
    });
  };

  return (
    <div className="impact-calculator">
      <div className="header">
        <Calculator className="icon" />
        <h2>Accessibility Revenue Impact Calculator</h2>
      </div>

      <p className="description">
        Calculate the potential business impact of making your website accessible. This calculator considers your current metrics and estimates potential growth based on disability statistics and improved user experience.
      </p>

      <form onSubmit={calculateImpact}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="currency">
              Select your currency
            </label>
            <select
              id="currency"
              value={formData.currency}
              onChange={handleInputChange}
              aria-label="Currency selector"
            >
              <option value="GBP">British Pound (£)</option>
              <option value="EUR">Euro (€)</option>
              <option value="USD">US Dollar ($)</option>
              <option value="CAD">Canadian Dollar ($)</option>
              <option value="AUD">Australian Dollar ($)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="monthlyTraffic">
              Monthly website traffic
            </label>
            <input
              type="text"
              id="monthlyTraffic"
              value={formData.monthlyTraffic}
              onChange={handleInputChange}
              aria-label="Monthly traffic input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="conversionRate">
              Current conversion rate (%)
            </label>
            <input
              type="text"
              id="conversionRate"
              value={formData.conversionRate}
              onChange={handleInputChange}
              aria-label="Conversion rate input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="averageOrderValue">
              Average order value
            </label>
            <div className="currency-input">
              <span className="currency-symbol">
                {currencyData[formData.currency].symbol}
              </span>
              <input
                type="text"
                id="averageOrderValue"
                value={formData.averageOrderValue}
                onChange={handleInputChange}
                aria-label="Average order value input"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          aria-label="Calculate impact"
        >
          Calculate Business Impact
        </button>
      </form>

      {result && (
        <div className="results" role="region" aria-label="Calculation results">
          <p className="results-intro">
            Based on {result.country} disability statistics and current metrics:
          </p>
          
          <div className="results-grid">
            <div className="results-section">
              <h3>Current Monthly Metrics</h3>
              <p>
                Orders: <span className="bold">{result.currentMetrics.monthlyOrders}</span>
              </p>
              <p>
                Revenue: <span className="bold">{result.symbol}{result.currentMetrics.monthlyRevenue}</span>
              </p>
            </div>

            <div className="results-section">
              <h3>Potential Impact</h3>
              <p>
                Additional monthly traffic: <span className="bold">{result.potentialMetrics.additionalTraffic}</span>
              </p>
              <p>
                Additional monthly orders: <span className="bold">{result.potentialMetrics.additionalOrders}</span>
              </p>
              <p>
                Additional monthly revenue: <span className="bold">{result.symbol}{result.potentialMetrics.additionalRevenue}</span>
              </p>
            </div>
          </div>

          <div className="total-impact">
            <p>
              Total potential monthly revenue with improved accessibility: 
              <span className="bold">{result.symbol}{result.potentialMetrics.improvedRevenue}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactCalculator;