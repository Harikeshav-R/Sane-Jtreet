import { TrendingUp, TrendingDown, Shield, Clock } from 'lucide-react'

interface InvestmentThesisProps {
  stock: string
}

export function InvestmentThesis({ stock }: InvestmentThesisProps) {
  return (
    <section className="animate-slide-up" style={{ animation: 'slideUp 0.8s ease-out' }}>
      <div 
        className="glass rounded-3xl p-8 md:p-12"
        style={{
          background: 'rgba(26, 26, 26, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(75, 85, 99, 0.3)',
          borderRadius: '24px',
          padding: '3rem',
          fontFamily: "'Inter', system-ui, sans-serif"
        }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
          >
            Investment Thesis
          </h2>
          <p 
            className="text-lg text-gray-400"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Comprehensive analysis and recommendation
          </p>
        </div>

        <div className="text-center py-16">
          <div 
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"
            style={{ borderColor: '#8a2be2', borderTopColor: 'transparent' }}
          />
          <h3 
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
          >
            Analyzing Investment Opportunities
          </h3>
          <p 
            className="text-gray-400 max-w-md mx-auto"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Evaluating bull and bear cases, risk factors, and generating investment recommendations...
          </p>
        </div>
      </div>
    </section>
  )
}