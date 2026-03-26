import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="block hover:bg-gray-800 p-2 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/chatbot" className="block hover:bg-gray-800 p-2 rounded">
              Chatbot
            </Link>
          </li>
          <li>
            <Link href="/education" className="block hover:bg-gray-800 p-2 rounded">
              Education
            </Link>
          </li>
          <li>
            <Link href="/about" className="block hover:bg-gray-800 p-2 rounded">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
