# Web Accessibility Impact Calculator


## Overview
The Web Accessibility Impact Calculator is a tool designed to help businesses understand the potential revenue and traffic they could gain by making their websites accessible. Using country-specific disability statistics and real-world conversion improvement data, it provides insights into the business case for web accessibility.

You can read more about the [business case for web accessibility](https://purplebyte.io/blog/business-case-accessibility/) and why you should always make it part of your business strategy.

## Why This Matters
Many businesses view accessibility as merely a compliance requirement or an additional cost. However, the disability market represents:
- Over £274 billion in spending power in the UK
- $490 billion in disposable income in the US  
- €150 billion in the EU
- A$54 billion in Australia
- C$55 billion in Canada

By not having an accessible website, businesses are potentially excluding up to 20% of their market, depending on their location.

## How It Works

### Input Data
The calculator takes three key metrics:
1. Monthly Website Visitors
2. Average Order Value 
3. Current Conversion Rate

### Calculations
The tool then:
1. Applies country-specific disability statistics to estimate potential disabled visitors
2. Calculates potential revenue based on:
  - Current conversion rates
  - Appoximate Industry-standard accessibility improvement factor (15%)
  - Average order values

### Country-Specific Data
The calculator includes disability statistics for:
- United Kingdom 🇬🇧
- United States 🇺🇸  
- European Union 🇪🇺
- Australia 🇦🇺
- Canada 🇨🇦

## Calculation Methodology
Potential Monthly Traffic = Monthly Visitors × Country-Specific Disability Percentage
Potential Yearly Traffic = Monthly Traffic × 12

### Revenue Calculation
Current Revenue = Monthly Visitors × Current Conversion Rate × Average Order Value
Potential Revenue = Monthly Visitors × (Current Conversion Rate × 1.15) × Average Order Value
Additional Revenue = Potential Revenue - Current Revenue
### Traffic Calculation

### Disability Categories
For each country, we consider people with the following:
- Blindness and low vision
- Deaf and Hard of Hearing
- Mobility 
- Cognitive

## Important Notes

This calculator is a tool to demonstrate potential impact and should be used as part of a broader business case for web accessibility. Real-world results will vary based on multiple factors.

### Data Sources
- UK: Office for National Statistics
- US: CDC and US Census Bureau
- EU: Eurostat
- Australia: Australian Bureau of Statistics
- Canada: Statistics Canada

### Caveats
- Results are estimates based on available data and research
- Actual results may vary based on:
  - Implementation quality
  - Industry sector
  - Current accessibility level
  - User demographics
  - Geographic location

### Improvement Factor
The 15% improvement factor is based on:
- Industry case studies
- Academic research
- Real-world implementation results
- Conservative estimates to ensure realistic projections

## Technical Implementation

### Files
- `index.html`: Main calculator structure
- `styles.css`: Styling and responsive design
- `calculator.js`: Calculation logic and country data

### Accessibility Features
- WCAG 2.2 AA compliant
- Keyboard accessible
- Screen reader friendly
- High contrast ratios
- Clear focus indicators
- Semantic HTML
- ARIA labels where needed

## Contributing
Contributions are welcome! Please read our contributing guidelines and submit pull requests to our GitHub repository.
License

## MIT License
Feel free to use, modify, and distribute as needed.

## Support
For questions, issues, or feature requests, please:
- Open an issue on GitHub
- [Contact us](https://purplebyte.io/contact/)
- [Visit our website](https://purplebyte.io)
