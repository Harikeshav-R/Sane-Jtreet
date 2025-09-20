import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface TechnicalAnalysisProps {
  stock: string
}

export function TechnicalAnalysis({ stock }: TechnicalAnalysisProps) {
  // Empty data for demo
  const emptyData = []

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
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
            >
              Technical Analysis
            </h2>
            <p 
              className="text-lg text-gray-400"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Price action and momentum indicators
            </p>
          </div>
          
          <div className="flex justify-center gap-6">
            <TechnicalIndicator 
              label="RSI" 
              value="--" 
              status="loading"
              statusColor="text-gray-400"
            />
            <TechnicalIndicator 
              label="MACD" 
              value="--" 
              status="loading"
              statusColor="text-gray-400"
            />
          </div>
        </div>

        {/* Price Chart Placeholder */}
        <div 
          className="h-96 lg:h-[500px] rounded-2xl p-6 flex items-center justify-center"
          style={{
            background: 'rgba(42, 42, 42, 0.4)',
            borderRadius: '16px'
          }}
        >
          <div className="text-center">
            <div 
              className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
              style={{ borderColor: '#8a2be2', borderTopColor: 'transparent' }}
            />
            <p 
              className="text-gray-400 text-lg"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              Chart data loading...
            </p>
          </div>
        </div>

        {/* Technical Summary */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 p-8 rounded-2xl"
          style={{
            background: 'rgba(42, 42, 42, 0.4)',
            borderRadius: '16px'
          }}
        >
          <div className="text-center">
            <p 
              className="text-sm text-gray-400 uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', fontWeight: '500' }}
            >
              Current RSI
            </p>
            <p 
              className="text-3xl font-bold text-gray-400"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
            >
              --
            </p>
          </div>
          <div className="text-center">
            <p 
              className="text-sm text-gray-400 uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', fontWeight: '500' }}
            >
              MACD
            </p>
            <p 
              className="text-3xl font-bold text-gray-400"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
            >
              --
            </p>
          </div>
          <div className="text-center">
            <p 
              className="text-sm text-gray-400 uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', fontWeight: '500' }}
            >
              50-Day SMA
            </p>
            <p 
              className="text-3xl font-bold text-gray-400"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
            >
              --
            </p>
          </div>
          <div className="text-center">
            <p 
              className="text-sm text-gray-400 uppercase tracking-wider mb-4"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '12px', fontWeight: '500' }}
            >
              200-Day SMA
            </p>
            <p 
              className="text-3xl font-bold text-gray-400"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
            >
              --
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TechnicalIndicatorProps {
  label: string
  value: string
  status: string
  statusColor: string
}

function TechnicalIndicator({ label, value, status, statusColor }: TechnicalIndicatorProps) {
  return (
    <div 
      className="rounded-xl px-4 py-3 border"
      style={{
        background: 'rgba(42, 42, 42, 0.6)',
        border: '1px solid rgba(75, 85, 99, 0.5)',
        borderRadius: '12px',
        padding: '12px 16px',
        fontFamily: "'Inter', system-ui, sans-serif"
      }}
    >
      <div 
        className="text-xs text-gray-400 uppercase tracking-wider mb-1"
        style={{ fontSize: '11px', fontWeight: '500' }}
      >
        {label}
      </div>
      <div 
        className={`text-lg font-bold ${statusColor}`}
        style={{ fontSize: '18px', fontWeight: '700' }}
      >
        {value}
      </div>
      <div 
        className={`text-xs capitalize ${statusColor}`}
        style={{ fontSize: '12px' }}
      >
        {status}
      </div>
    </div>
  )
}
