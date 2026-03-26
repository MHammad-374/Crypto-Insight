interface CredibilityIndicatorProps {
  score?: number;
}

export default function CredibilityIndicator({ score = 50 }: CredibilityIndicatorProps) {
  const getColor = (score: number) => {
    if (score >= 70) return 'bg-green-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Credibility Score</h2>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className={`${getColor(score)} h-4 rounded-full transition-all`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
        <div className="text-2xl font-bold">{score}/100</div>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Based on market analysis, trading volume, and historical performance
      </p>
    </div>
  );
}
