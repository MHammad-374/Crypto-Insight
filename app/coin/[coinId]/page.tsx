interface CoinPageProps {
  params: {
    coinId: string;
  };
}

export default function CoinPage({ params }: CoinPageProps) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Coin Details: {params.coinId}</h1>
      {/* Add coin detail components here */}
    </div>
  );
}
