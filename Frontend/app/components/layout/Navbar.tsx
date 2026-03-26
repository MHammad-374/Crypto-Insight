import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Crypto Insight
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
          <li><Link href="/chatbot" className="hover:text-blue-400">Chatbot</Link></li>
          <li><Link href="/education" className="hover:text-blue-400">Education</Link></li>
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
