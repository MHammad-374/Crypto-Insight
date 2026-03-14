'use client';

import { useState } from "react";
import { ExternalLink, Search, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";

// Mock Data Structure
const newsData = [
  {
    id: 1,
    present: { 
      title: "Bitcoin Consolidates Near $94k After Record Inflows", 
      content: "BTC is showing low volatility after a 15% weekly gain. Institutional demand via Spot ETFs remains the primary driver as retail participation begins to spike.", 
      time: "5m ago" 
    },
    past: { 
      title: "2020 Post-Halving Breakout", 
      content: "Similar accumulation patterns were observed in late 2020 following the halving. Low volatility at local highs often preceded the massive rally to $64k.", 
      date: "Dec 2020" 
    }
  },
  {
    id: 2,
    present: { 
      title: "Major Exchange Reports 'Database Sync' Withdrawal Delay", 
      content: "Users are reporting 2-hour delays in ERC-20 withdrawals. The exchange claims it is a routine maintenance issue, but social sentiment is turning fearful.", 
      time: "45m ago" 
    },
    past: { 
      title: "FTX 'Liquidity Crunch' Onset", 
      content: "The November 2022 collapse began with similar 'technical' excuses for withdrawal delays before the full balance sheet hole was revealed.", 
      date: "Nov 2022" 
    }
  },
  {
    id: 3,
    present: { 
      title: "Solana (SOL) Flips Key Resistance at $210", 
      content: "SOL has outperformed the top 10 assets today, driven by a surge in decentralized exchange (DEX) volume and new memecoin launches on Pump.fun.", 
      time: "2h ago" 
    },
    past: { 
      title: "Ethereum's 2021 DeFi Summer", 
      content: "Solana's current ecosystem growth mirrors the 2021 ETH surge, where high network utility and dapp activity drove a 300% price increase in one quarter.", 
      date: "May 2021" 
    }
  },
  {
    id: 4,
    present: { 
      title: "Global Regulatory Body Proposes Unified Crypto Framework", 
      content: "New documents suggest a move toward standardizing KYC for all non-custodial wallets. Markets are reacting with slight selling pressure.", 
      time: "5h ago" 
    },
    past: null // Demonstrates the UI handling "No Match Found"
  },
  {
    id: 5,
    present: { 
      title: "XRP Gains 12% on Favorable Legal Rumors", 
      content: "Unconfirmed reports suggest a final settlement in the long-standing SEC case. Trading volume has spiked by 200% on major Asian exchanges.", 
      time: "8h ago" 
    },
    past: { 
      title: "XRP 2017 Bull Run Catalyst", 
      content: "XRP historically reacts violently to partnership news and legal clarity. The 2017 surge was preceded by similar rapid volume spikes near resistance levels.", 
      date: "Dec 2017" 
    }
  },
  {
    id: 6,
    present: { 
      title: "20 Millionth Bitcoin Mined: The Scarcity Era Intensifies", 
      content: "As of March 12, 2026, the Bitcoin network successfully reached block 940,000. This milestone means 20,000,000 BTC are now in circulation, leaving only 1 million coins to be mined over the next 114 years.", 
      time: "2h ago" 
    },
    past: { 
      title: "2012 First Halving: The 50% Supply Mark", 
      content: "When the first halving occurred in 2012, 50% of the total supply had already been issued. Back then, miners received 50 BTC per block, compared to the current 3.125 BTC, highlighting the massive drop in issuance.", 
      date: "Nov 2012" 
    }
  },
  {
    id: 7,
    present: { 
      title: "Bitcoin Miners Pivot to AI as Halving Margins Hit Record Lows", 
      content: "A new report from Wintermute reveals that top mining firms are now allocating up to 30% of their power capacity to AI data centers. The 3.125 BTC block reward is no longer profitable for less efficient hardware at current energy costs.", 
      time: "5h ago" 
    },
    past: { 
      title: "2020 'Miner Capitulation' and Difficulty Adjustment", 
      content: "Similar to today, the 2020 post-halving period saw a massive exit of inefficient miners. However, the subsequent 'Difficulty Adjustment' made the network profitable again for those who stayed, leading to the 2021 bull run.", 
      date: "May 2020" 
    }
  }
];



export default function DashboardPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* 1. STICKY TOP NAV BAR */}
      <nav className="sticky top-15 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-t border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button className="p-2 hover:bg-white/5 rounded-lg border border-white/10 flex items-center gap-2 text-sm">
            <SlidersHorizontal size={18} />
            <span className="hidden sm:inline">Filters</span>
          </button>
          
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by coin (BTC, ETH...)" 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>
          
        {/* IN CASE OF AUTHORIZATION AND FOR LOGIN SETUP */}
          <div className="" />
        </div>
      </nav>



  {/* NEWS SECTION PRESENT & PAST */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-4 mt-14">
        {newsData.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-[#111625] border border-white/5 hover:border-blue-500/30 rounded-xl overflow-hidden transition-all shadow-xl"
          >
            {/* 2. THE NEWS GRID */}
            <div className={`grid grid-cols-1 ${item.past ? 'md:grid-cols-[1fr_1px_1fr]' : 'md:grid-cols-1'} items-stretch`}>
              
              {/* LEFT: PRESENT NEWS */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Present News</span>
                  <span className="text-xs text-slate-500">{item.present.time}</span>
                </div>
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {item.present.title} <ExternalLink size={14} className="opacity-50" />
                </h2>
                <p className={`mt-3 text-slate-400 text-sm leading-relaxed ${expandedId === item.id ? '' : 'line-clamp-2'}`}>
                  {item.present.content}
                </p>
                <button 
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="mt-4 text-blue-500 text-xs font-bold hover:underline flex items-center gap-1"
                >
                  {expandedId === item.id ? <><ChevronUp size={14} /> See Less</> : <><ChevronDown size={14} /> See More</>}
                </button>
              </div>

              {/* CENTER DIVIDER LINE */}
              {item.past && <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />}

              {/* RIGHT: PAST NEWS */}
              {item.past && (
                <div className="p-6 bg-white/[0.02]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Historical Parallel</span>
                    <span className="text-xs text-slate-500">{item.past.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-300 italic">
                    {item.past.title}
                  </h2>
                  <p className={`mt-3 text-slate-500 text-sm leading-relaxed ${expandedId === item.id ? '' : 'line-clamp-2'}`}>
                    {item.past.content}
                  </p>
                </div>
              )}
            </div>
            
            {/* INLINE EXPANSION AREA */}
            {expandedId === item.id && (
              <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-blue-500/5 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="p-4 rounded-lg bg-[#0a0e1a] border border-blue-500/20">
                  <h4 className="text-xs font-bold text-blue-400 mb-2 uppercase">Deep AI Analysis</h4>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    This event shows a 85% correlation with {item.past?.date || "previous cycles"}. 
                    The primary driver is whale accumulation and negative funding rates, suggesting 
                    potential short-term volatility before a continued uptrend.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}