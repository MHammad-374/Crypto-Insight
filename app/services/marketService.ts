const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export interface MarketData {
  totalMarketCap: number;
  volume24h: number;
  btcDominance: number;
  lastUpdated: string;
}

export const marketService = {
  async getMarketData(): Promise<MarketData> {
    try {
      const response = await fetch(`${API_BASE_URL}/market/overview`);
      if (!response.ok) {
        throw new Error('Failed to fetch market data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching market data:', error);
      throw error;
    }
  },

  async getTopCoins(limit: number = 100) {
    try {
      const response = await fetch(`${API_BASE_URL}/coins/top?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch top coins');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching top coins:', error);
      throw error;
    }
  },

  async getVolatilityData() {
    try {
      const response = await fetch(`${API_BASE_URL}/market/volatility`);
      if (!response.ok) {
        throw new Error('Failed to fetch volatility data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching volatility data:', error);
      throw error;
    }
  },
};
