export default function PriceHistory() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Price History</h2>
      <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
        <p className="text-gray-500">Chart placeholder</p>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">24H</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">7D</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">30D</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">1Y</button>
      </div>
    </div>
  );
}
