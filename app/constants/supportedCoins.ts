export interface SupportedCoin {
  id: string;
  name: string;
  symbol: string;
  coingeckoId?: string;
  category: 'major' | 'altcoin' | 'defi' | 'meme' | 'stablecoin';
}

export const SUPPORTED_COINS: SupportedCoin[] = [
  // Major Cryptocurrencies
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', coingeckoId: 'bitcoin', category: 'major' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', coingeckoId: 'ethereum', category: 'major' },
  { id: 'binance-coin', name: 'BNB', symbol: 'BNB', coingeckoId: 'binancecoin', category: 'major' },
  { id: 'ripple', name: 'XRP', symbol: 'XRP', coingeckoId: 'ripple', category: 'major' },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', coingeckoId: 'cardano', category: 'major' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', coingeckoId: 'solana', category: 'major' },
  
  // Altcoins
  { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', coingeckoId: 'polkadot', category: 'altcoin' },
  { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', coingeckoId: 'avalanche-2', category: 'altcoin' },
  { id: 'polygon', name: 'Polygon', symbol: 'MATIC', coingeckoId: 'matic-network', category: 'altcoin' },
  { id: 'chainlink', name: 'Chainlink', symbol: 'LINK', coingeckoId: 'chainlink', category: 'altcoin' },
  
  // DeFi
  { id: 'uniswap', name: 'Uniswap', symbol: 'UNI', coingeckoId: 'uniswap', category: 'defi' },
  { id: 'aave', name: 'Aave', symbol: 'AAVE', coingeckoId: 'aave', category: 'defi' },
  { id: 'compound', name: 'Compound', symbol: 'COMP', coingeckoId: 'compound-governance-token', category: 'defi' },
  
  // Stablecoins
  { id: 'tether', name: 'Tether', symbol: 'USDT', coingeckoId: 'tether', category: 'stablecoin' },
  { id: 'usd-coin', name: 'USD Coin', symbol: 'USDC', coingeckoId: 'usd-coin', category: 'stablecoin' },
  { id: 'dai', name: 'Dai', symbol: 'DAI', coingeckoId: 'dai', category: 'stablecoin' },
  
  // Meme Coins
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', coingeckoId: 'dogecoin', category: 'meme' },
  { id: 'shiba-inu', name: 'Shiba Inu', symbol: 'SHIB', coingeckoId: 'shiba-inu', category: 'meme' },
];

export const COIN_CATEGORIES = [
  { id: 'major', name: 'Major Cryptocurrencies', description: 'Established cryptocurrencies with high market cap' },
  { id: 'altcoin', name: 'Altcoins', description: 'Alternative cryptocurrencies to Bitcoin' },
  { id: 'defi', name: 'DeFi', description: 'Decentralized Finance tokens' },
  { id: 'stablecoin', name: 'Stablecoins', description: 'Price-stable cryptocurrencies' },
  { id: 'meme', name: 'Meme Coins', description: 'Community-driven meme-based tokens' },
];

export function getCoinById(id: string): SupportedCoin | undefined {
  return SUPPORTED_COINS.find(coin => coin.id === id);
}

export function getCoinsByCategory(category: SupportedCoin['category']): SupportedCoin[] {
  return SUPPORTED_COINS.filter(coin => coin.category === category);
}
