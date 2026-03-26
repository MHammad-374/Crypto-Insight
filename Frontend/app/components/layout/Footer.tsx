export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Crypto Insight. All rights reserved.</p>
        <p className="text-sm mt-2 text-gray-400">
          Cryptocurrency investments are subject to market risks. Please read disclaimers carefully.
        </p>
      </div>
    </footer>
  );
}
