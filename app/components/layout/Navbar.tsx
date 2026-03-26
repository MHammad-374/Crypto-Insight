import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white p-4 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Crypto Insight
        </Link>
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm">
            <li><Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link></li>
            <li><Link href="/chatbot" className="hover:text-blue-400 transition">AI Assistant</Link></li>
            <li><Link href="/education" className="hover:text-blue-400 transition">Learn</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
          </ul>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
