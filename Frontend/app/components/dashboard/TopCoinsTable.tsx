export default function TopCoinsTable() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Top Cryptocurrencies</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Rank</th>
              <th className="text-left p-2">Name</th>
              <th className="text-right p-2">Price</th>
              <th className="text-right p-2">24h Change</th>
              <th className="text-right p-2">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2" colSpan={5}>Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
