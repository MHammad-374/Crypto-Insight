import { Book, MessageCircle, TrendingUp } from 'lucide-react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className=" fixed top-0 w-full z-50 bg-[#0a0e1a] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800">
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
      </nav>
        </div>
  )
}

export default Navbar