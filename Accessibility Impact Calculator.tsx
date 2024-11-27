import React, { useState } from 'react';
import { Calculator, Users, TrendingUp, Award, DollarSign } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ImpactCalculator = () => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2);
  const [averageOrder, setAverageOrder] = useState(50);
  const [currency, setCurrency] = useState('GBP');
  
  const currencies = {
    'GBP': '£',
    'USD': '$',
    'EUR': '€',
    'AUD': 'A$',
    'CAD': 'C$'
  };

  // Calculate impact metrics
  const disabledPopulation = 0.15; // 15% of population has a disability
  const potentialNewVisitors = monthlyVisitors * disabledPopulation;
  const potentialNewCustomers = (potentialNewVisitors * (conversionRate / 100));
  const potentialNewRevenue = potentialNewCustomers * averageOrder;
  const annualImpact = potentialNewRevenue * 12;
  
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-6 h-6" />
              Calculator Inputs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="visitors" className="block font-medium">
                  Monthly Website Visitors
                </label>
                <input
                  type="number"
                  id="visitors"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                  min="0"
                  aria-describedby="visitors-hint"
                />
                <p id="visitors-hint" className="text-sm text-gray-600">
                  Enter your average monthly website visitors
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="conversion" className="block font-medium">
                  Current Conversion Rate (%)
                </label>
                <input
                  type="number"
                  id="conversion"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                  min="0"
                  max="100"
                  step="0.1"
                  aria-describedby="conversion-hint"
                />
                <p id="conversion-hint" className="text-sm text-gray-600">
                  Enter your current website conversion rate
                </p>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="currency" className="block font-medium">
                      Currency
                    </label>
                    <select
                      id="currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full p-2 border rounded"
                      aria-describedby="currency-hint"
                    >
                      {Object.keys(currencies).map((curr) => (
                        <option key={curr} value={curr}>
                          {curr} ({currencies[curr]})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="order" className="block font-medium">
                      Average Order Value
                    </label>
                    <input
                      type="number"
                      id="order"
                      value={averageOrder}
                      onChange={(e) => setAverageOrder(Number(e.target.value))}
                      className="w-full p-2 border rounded"
                      min="0"
                      aria-describedby="order-hint"
                    />
                  </div>
                </div>
                <p id="order-hint" className="text-sm text-gray-600">
                  Select your currency and enter average order value
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Potential Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <h3 className="font-medium">Potential New Monthly Visitors</h3>
                </div>
                <p className="text-2xl font-bold">{Math.round(potentialNewVisitors).toLocaleString()}</p>
              </div>

              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <h3 className="font-medium">Potential New Monthly Customers</h3>
                </div>
                <p className="text-2xl font-bold">{Math.round(potentialNewCustomers).toLocaleString()}</p>
              </div>

              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <h3 className="font-medium">Potential Monthly Revenue</h3>
                </div>
                <p className="text-2xl font-bold">{currencies[currency]}{Math.round(potentialNewRevenue).toLocaleString()}</p>
              </div>

              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <h3 className="font-medium">Potential Annual Impact</h3>
                </div>
                <p className="text-2xl font-bold">{currencies[currency]}{Math.round(annualImpact).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImpactCalculator;
