import Link from 'next/link';
import { BarChart3, Shield, Brain, TrendingUp, AlertTriangle, MessageCircle, Book } from 'lucide-react';
import Navbar from './components/navbar/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Navbar */}
      {/* <nav className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold">
                Crypto<span className="text-cyan-400">Insight</span>
              </span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="/dashboard" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <TrendingUp className="w-4 h-4" />
                Dashboard
              </Link>
              <Link href="/chatbot" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
                AI Assistant
              </Link>
              <Link href="/education" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Book className="w-4 h-4" />
                Learn
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav> */}

    

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-600/30 bg-yellow-900/10 text-yellow-500 text-sm mb-8">
          <AlertTriangle className="w-4 h-4" />
          Educational Platform Only
        </div>
        
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Understand Crypto{' '}
          <span className="relative inline-block">
            Markets
            <div className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 -z-10"></div>
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          CryptoInsight is an educational platform that helps you learn about cryptocurrency markets through historical analysis, risk awareness, and AI-powered explanations.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link 
            href="/dashboard"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all"
          >
            <BarChart3 className="w-5 h-5" />
            Explore Market Insights →
          </Link>
          <Link 
            href="/education"
            className="flex items-center gap-2 px-8 py-4 border-2 border-gray-700 hover:border-gray-600 text-white font-semibold rounded-lg transition-all"
          >
            <Book className="w-5 h-5" />
            Start Learning
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Learn, Don't Speculate</h2>
          <p className="text-xl text-gray-400">
            Our platform focuses on education and understanding, not predictions or trading signals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#151922] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Market Analysis</h3>
            <p className="text-gray-400">
              Explore historical market data and understand price movements in context.
            </p>
          </div>

          <div className="bg-[#151922] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Risk Awareness</h3>
            <p className="text-gray-400">
              Learn about volatility, credibility factors, and what makes assets risky.
            </p>
          </div>

          <div className="bg-[#151922] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Powered Learning</h3>
            <p className="text-gray-400">
              Get educational explanations about crypto concepts from our AI assistant.
            </p>
          </div>

          <div className="bg-[#151922] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Historical Patterns</h3>
            <p className="text-gray-400">
              See how past events correlated with market movements for educational insight.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-[#151922] border border-red-900/30 rounded-xl p-12">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-500 mb-4">Important Disclaimer</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  This platform is for educational purposes only. It does not provide financial, investment, or trading advice. Cryptocurrency markets are highly volatile and risky. Always do your own research and consult with qualified professionals before making any investment decisions.
                </p>
                <p>
                  Cryptocurrency investments carry significant risks including total loss of capital. Past performance does not guarantee future results. Never invest more than you can afford to lose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <MessageCircle className="w-10 h-10 text-cyan-400" />
        </div>
        <h2 className="text-4xl font-bold mb-6">Have Questions? Ask Our AI Assistant</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Get educational explanations about cryptocurrency concepts, market terminology, and how different technologies work.
        </p>
        <Link 
          href="/chatbot"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          Start a Conversation
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#0a0e1a] mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold">
                  Crypto<span className="text-cyan-400">Insight</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-4">
                An educational platform for understanding cryptocurrency markets through historical analysis and AI-powered insights. Learn about market patterns without the hype.
              </p>
              <div className="inline-block px-3 py-1 rounded border border-yellow-600/30 bg-yellow-900/10 text-yellow-500 text-sm">
                Educational purposes only. Not financial advice.
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/chatbot" className="text-gray-400 hover:text-white transition-colors">AI Assistant</Link></li>
                <li><Link href="/education" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/about#methodology" className="text-gray-400 hover:text-white transition-colors">Methodology</Link></li>
                <li><Link href="/about#sources" className="text-gray-400 hover:text-white transition-colors">Data Sources</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2026 CryptoInsight. Educational project.</p>
            <a 
              href="https://www.coingecko.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 mt-4 md:mt-0"
            >
              Data by CoinGecko ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
