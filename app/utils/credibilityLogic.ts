/**
 * Calculate credibility score for a cryptocurrency
 * Factors: market cap, volume, age, volatility, community
 */

interface CredibilityFactors {
  marketCap: number;
  volume24h: number;
  ageInDays: number;
  volatility: number;
  communityScore?: number;
}

export function calculateCredibilityScore(factors: CredibilityFactors): number {
  let score = 0;

  // Market Cap Score (0-30 points)
  if (factors.marketCap > 10e9) score += 30;
  else if (factors.marketCap > 1e9) score += 25;
  else if (factors.marketCap > 100e6) score += 20;
  else if (factors.marketCap > 10e6) score += 10;
  else score += 5;

  // Volume Score (0-25 points)
  const volumeToMarketCapRatio = factors.volume24h / factors.marketCap;
  if (volumeToMarketCapRatio > 0.5) score += 25;
  else if (volumeToMarketCapRatio > 0.3) score += 20;
  else if (volumeToMarketCapRatio > 0.1) score += 15;
  else if (volumeToMarketCapRatio > 0.05) score += 10;
  else score += 5;

  // Age Score (0-20 points)
  if (factors.ageInDays > 1825) score += 20; // 5+ years
  else if (factors.ageInDays > 1095) score += 15; // 3+ years
  else if (factors.ageInDays > 365) score += 10; // 1+ year
  else if (factors.ageInDays > 180) score += 5; // 6+ months
  else score += 2;

  // Volatility Score (0-15 points) - lower volatility is better
  if (factors.volatility < 5) score += 15;
  else if (factors.volatility < 10) score += 12;
  else if (factors.volatility < 20) score += 8;
  else if (factors.volatility < 30) score += 5;
  else score += 2;

  // Community Score (0-10 points)
  if (factors.communityScore) {
    score += Math.min(10, factors.communityScore / 10);
  }

  return Math.min(100, Math.round(score));
}

export function getCredibilityLabel(score: number): string {
  if (score >= 80) return 'Highly Credible';
  if (score >= 60) return 'Credible';
  if (score >= 40) return 'Moderate';
  if (score >= 20) return 'Low Credibility';
  return 'Very Low Credibility';
}

export function getCredibilityColor(score: number): string {
  if (score >= 70) return 'green';
  if (score >= 40) return 'yellow';
  return 'red';
}
