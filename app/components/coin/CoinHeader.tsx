interface CoinHeaderProps {
  coinId: string;
}

export default function CoinHeader({ coinId }: CoinHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{coinId}</h1>
          <p className="text-gray-600">Cryptocurrency</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">$0.00</p>
          <p className="text-green-600">+0.00%</p>
        </div>
      </div>
    </div>
  );
}
