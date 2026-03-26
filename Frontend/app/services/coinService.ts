const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  rank: number;
}

export interface CoinDetails extends Coin {
  description: string;
  website: string;
  priceHistory: PricePoint[];
  events: CoinEvent[];
  credibilityScore: number;
}

export interface PricePoint {
  timestamp: string;
  price: number;
}

export interface CoinEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
}

export const coinService = {
  async getCoinById(coinId: string): Promise<CoinDetails> {
    try {
      const response = await fetch(`${API_BASE_URL}/coins/${coinId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch coin: ${coinId}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching coin ${coinId}:`, error);
      throw error;
    }
  },

  async getPriceHistory(coinId: string, timeframe: string = '24h') {
    try {
      const response = await fetch(`${API_BASE_URL}/coins/${coinId}/history?timeframe=${timeframe}`);
      if (!response.ok) {
        throw new Error('Failed to fetch price history');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching price history:', error);
      throw error;
    }
  },

  async getEvents(coinId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/coins/${coinId}/events`);
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },
};
