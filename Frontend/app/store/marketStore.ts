import { create } from 'zustand';

interface MarketData {
  totalMarketCap: number;
  volume24h: number;
  btcDominance: number;
}

interface MarketStore {
  marketData: MarketData | null;
  isLoading: boolean;
  error: string | null;
  fetchMarketData: () => Promise<void>;
  setMarketData: (data: MarketData) => void;
}

export const useMarketStore = create<MarketStore>((set) => ({
  marketData: null,
  isLoading: false,
  error: null,
  fetchMarketData: async () => {
    set({ isLoading: true, error: null });
    try {
      // API call would go here
      // const data = await marketService.getMarketData();
      // set({ marketData: data, isLoading: false });
      set({ isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch market data', isLoading: false });
    }
  },
  setMarketData: (data) => set({ marketData: data }),
}));
