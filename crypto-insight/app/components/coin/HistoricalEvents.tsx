export default function HistoricalEvents() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Historical Events</h2>
      <div className="space-y-3">
        <div className="border-l-4 border-blue-500 pl-4 py-2">
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium">Event description</p>
        </div>
      </div>
    </div>
  );
}
