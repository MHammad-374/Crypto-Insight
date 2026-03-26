/**
 * Calculate risk level based on various factors
 */

export type RiskLevel = 'low' | 'medium' | 'high' | 'very-high';

interface RiskFactors {
  volatility: number;
  marketCap: number;
  volume24h: number;
  priceChange24h: number;
}

export function calculateRiskLevel(factors: RiskFactors): RiskLevel {
  let riskScore = 0;

  // Volatility risk (0-40 points)
  if (factors.volatility > 50) riskScore += 40;
  else if (factors.volatility > 30) riskScore += 30;
  else if (factors.volatility > 15) riskScore += 20;
  else if (factors.volatility > 5) riskScore += 10;

  // Market cap risk (0-25 points)
  if (factors.marketCap < 10e6) riskScore += 25;
  else if (factors.marketCap < 100e6) riskScore += 20;
  else if (factors.marketCap < 1e9) riskScore += 10;
  else if (factors.marketCap < 10e9) riskScore += 5;

  // Liquidity risk (0-20 points)
  const liquidityRatio = factors.volume24h / factors.marketCap;
  if (liquidityRatio < 0.01) riskScore += 20;
  else if (liquidityRatio < 0.05) riskScore += 15;
  else if (liquidityRatio < 0.1) riskScore += 10;
  else if (liquidityRatio < 0.2) riskScore += 5;

  // Price volatility risk (0-15 points)
  const absChange = Math.abs(factors.priceChange24h);
  if (absChange > 50) riskScore += 15;
  else if (absChange > 30) riskScore += 12;
  else if (absChange > 15) riskScore += 8;
  else if (absChange > 5) riskScore += 4;

  // Determine risk level
  if (riskScore >= 70) return 'very-high';
  if (riskScore >= 45) return 'high';
  if (riskScore >= 25) return 'medium';
  return 'low';
}

export function getRiskColor(level: RiskLevel): string {
  const colors = {
    'low': 'green',
    'medium': 'yellow',
    'high': 'orange',
    'very-high': 'red',
  };
  return colors[level];
}

export function getRiskLabel(level: RiskLevel): string {
  const labels = {
    'low': 'Low Risk',
    'medium': 'Medium Risk',
    'high': 'High Risk',
    'very-high': 'Very High Risk',
  };
  return labels[level];
}

export function getRiskDescription(level: RiskLevel): string {
  const descriptions = {
    'low': 'This cryptocurrency has stable characteristics and lower risk factors.',
    'medium': 'This cryptocurrency shows moderate volatility and should be approached with caution.',
    'high': 'This cryptocurrency has significant risk factors. Only invest what you can afford to lose.',
    'very-high': 'This cryptocurrency is highly volatile and speculative. Extreme caution advised.',
  };
  return descriptions[level];
}
