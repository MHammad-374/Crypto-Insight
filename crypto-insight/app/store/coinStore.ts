import { create } from 'zustand';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
}

interface CoinStore {
  coins: Coin[];
  selectedCoin: Coin | null;
  isLoading: boolean;
  error: string | null;
  fetchCoins: () => Promise<void>;
  fetchCoinById: (coinId: string) => Promise<void>;
  setSelectedCoin: (coin: Coin | null) => void;
}

export const useCoinStore = create<CoinStore>((set) => ({
  coins: [],
  selectedCoin: null,
  isLoading: false,
  error: null,
  fetchCoins: async () => {
    set({ isLoading: true, error: null });
    try {
      // API call would go here
      // const coins = await coinService.getCoins();
      // set({ coins, isLoading: false });
      set({ isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch coins', isLoading: false });
    }
  },
  fetchCoinById: async (coinId: string) => {
    set({ isLoading: true, error: null });
    try {
      // API call would go here
      // const coin = await coinService.getCoinById(coinId);
      // set({ selectedCoin: coin, isLoading: false });
      set({ isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch coin', isLoading: false });
    }
  },
  setSelectedCoin: (coin) => set({ selectedCoin: coin }),
}));
