import { TrendingUp } from 'lucide-react'

interface LivePriceProps {
  stock: string
}

export function LivePrice({ stock }: LivePriceProps) {
  return (
    <section className="animate-slide-up" style={{ animation: 'slideUp 0.8s ease-out' }}>
        <div 
        className="glass rounded-3xl p-8 md:p-12 glow-hover transition-all duration-500"
        style={{
          background: 'rgba(26, 26, 26, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(75, 85, 99, 0.3)',
          borderRadius: '24px',
          padding: '3rem',
          boxShadow: '0 0 50px rgba(138, 43, 226, 0.1)',
          transition: 'all 0.5s ease',
          fontFamily: "'Inter', system-ui, sans-serif"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.01) translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 0 60px rgba(138, 43, 226, 0.2)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)'
          e.currentTarget.style.boxShadow = '0 0 50px rgba(138, 43, 226, 0.1)'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              style={{ color: '#ffffff', fontSize: '3rem', fontWeight: 'bold' }}
            >
              {stock}
            </h2>
            <p 
              className="text-lg text-gray-400"
              style={{ color: '#9ca3af', fontSize: '18px' }}
            >
              Real-time Market Data
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div 
              className="w-3 h-3 bg-green-400 rounded-full pulse-glow"
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)',
                animation: 'pulse-glow 2s ease-in-out infinite'
              }}
            />
            <span 
              className="text-green-400 font-semibold"
              style={{ color: '#22c55e', fontWeight: '600' }}
            >
              LIVE
            </span>
          </div>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PriceCard
            label="Current Price"
            value="--"
            subtitle="Loading..."
            isPrimary={true}
          />
          <PriceCard
            label="Market Cap"
            value="--"
            subtitle="Loading..."
          />
          <PriceCard
            label="Volume"
            value="--"
            subtitle="Loading..."
          />
          <PriceCard
            label="52W Range"
            value="--"
            subtitle="Loading..."
          />
        </div>
      </div>
    </section>
  )
}

interface PriceCardProps {
  label: string
  value: string
  change?: string
  changePercent?: string
  subtitle?: string
  isPositive?: boolean
  isPrimary?: boolean
  subtitleColor?: string
}

function PriceCard({ 
  label, 
  value, 
  change, 
  changePercent, 
  subtitle, 
  isPositive, 
  isPrimary,
  subtitleColor = "text-gray-400"
}: PriceCardProps) {
  const cardStyle = {
    background: isPrimary 
      ? 'rgba(138, 43, 226, 0.1)' 
      : 'rgba(42, 42, 42, 0.6)',
    backdropFilter: 'blur(10px)',
    border: isPrimary 
      ? '1px solid rgba(138, 43, 226, 0.3)' 
      : '1px solid rgba(75, 85, 99, 0.3)',
    borderRadius: '16px',
    padding: '24px',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', system-ui, sans-serif"
  }

  return (
    <div 
      className="group hover:scale-105"
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'
        e.currentTarget.style.borderColor = isPrimary ? 'rgba(138, 43, 226, 0.5)' : 'rgba(75, 85, 99, 0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.borderColor = isPrimary ? 'rgba(138, 43, 226, 0.3)' : 'rgba(75, 85, 99, 0.3)'
      }}
    >
      <p 
        className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3"
        style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '500', letterSpacing: '0.1em' }}
      >
        {label}
      </p>
      
      <div className="space-y-2">
        <p 
          className={`font-bold transition-colors group-hover:text-purple-400 ${
            isPrimary ? 'text-3xl text-white' : 'text-2xl text-white'
          }`}
          style={{ 
            color: '#ffffff',
            fontSize: isPrimary ? '2rem' : '1.5rem',
            fontWeight: 'bold',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#a855f7'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#ffffff'
          }}
        >
          {value}
        </p>
        
        {change && changePercent && (
          <div className="flex items-center space-x-2">
            <TrendingUp 
              className="w-4 h-4" 
              style={{ color: isPositive ? '#22c55e' : '#ef4444', width: '16px', height: '16px' }}
            />
            <span 
              className="text-sm font-medium"
              style={{ 
                color: isPositive ? '#22c55e' : '#ef4444', 
                fontSize: '14px', 
                fontWeight: '500' 
              }}
            >
              {change} ({changePercent})
            </span>
          </div>
        )}
        
        {subtitle && (
          <p 
            className="text-sm"
            style={{ 
              color: subtitleColor.includes('blue') ? '#60a5fa' : 
                     subtitleColor.includes('yellow') ? '#fbbf24' : '#9ca3af',
              fontSize: '14px'
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
