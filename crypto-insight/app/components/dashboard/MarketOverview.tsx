export default function MarketOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded">
          <p className="text-sm text-gray-600">Total Market Cap</p>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-green-50 rounded">
          <p className="text-sm text-gray-600">24h Volume</p>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-4 bg-purple-50 rounded">
          <p className="text-sm text-gray-600">BTC Dominance</p>
          <p className="text-2xl font-bold">0%</p>
        </div>
      </div>
    </div>
  );
}
