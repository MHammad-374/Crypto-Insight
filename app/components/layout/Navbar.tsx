// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { LogIn, UserPlus } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <header className="bg-gray-900 text-white p-4 border-b border-gray-700">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold text-white">
//           Crypto Insight
//         </Link>
//         <nav className="flex items-center gap-8">
//           <ul className="flex items-center gap-8 text-sm">
//             <li><Link href="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link></li>
//             <li><Link href="/chatbot" className="hover:text-blue-400 transition">AI Assistant</Link></li>
//             <li><Link href="/education" className="hover:text-blue-400 transition">Learn</Link></li>
//             <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
//           </ul>
//           <div className="flex items-center gap-3">
//             <Link href="/login">
//               <Button variant="outline">
//                 <LogIn className="mr-2 h-4 w-4" />
//                 Login
//               </Button>
//             </Link>
//             <Link href="/signup">
//               <Button>
//                 <UserPlus className="mr-2 h-4 w-4" />
//                 Sign Up
//               </Button>
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }


import Link from 'next/link';
import { LogIn, UserPlus, TrendingUp, LayoutDashboard, Bot, GraduationCap, Info } from 'lucide-react';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/chatbot', label: 'AI Assistant', icon: Bot },
  { href: '/education', label: 'Learn', icon: GraduationCap },
  { href: '/about', label: 'About', icon: Info },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#020817]/80 backdrop-blur-xl border-b border-white/5">
      {/* Ambient glow line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-shadow duration-300">
            <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-black tracking-tight text-white text-lg">
            Crypto<span className="text-cyan-400">Insight</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Icon className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" strokeWidth={2} />
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/login">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-200">
              <LogIn className="w-3.5 h-3.5" />
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-200">
              <UserPlus className="w-3.5 h-3.5" />
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}