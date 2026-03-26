export default function VolatilitySection() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Volatility Analysis</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-semibold">High Volatility</h3>
          <p className="text-sm text-gray-600">Coins with significant price fluctuations</p>
        </div>
        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="font-semibold">Medium Volatility</h3>
          <p className="text-sm text-gray-600">Moderate price movements</p>
        </div>
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold">Low Volatility</h3>
          <p className="text-sm text-gray-600">Stable price action</p>
        </div>
      </div>
    </div>
  );
}
