
'use client';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">Crypto Insight</h1>
        <p className="text-xl mb-8">
          Turn complex crypto data into clear insights with AI-powered analysis
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Smart Analysis</h3>
            <p>AI-driven insights for better decisions</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Real-Time Data</h3>
            <p>Live market trends and updates</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Beginner Friendly</h3>
            <p>Easy to understand explanations</p>
          </div>
        </div>
      </div>
    </main>
  );
}