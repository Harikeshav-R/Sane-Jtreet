import { Search, TrendingUp, ChevronDown } from 'lucide-react'

interface HeroProps {
  selectedStock: string
  onStockChange: (stock: string) => void
}

export function Hero({ selectedStock, onStockChange }: HeroProps) {
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f0f0f',
        position: 'relative',
        fontFamily: "'Inter', system-ui, sans-serif"
      }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float"
          style={{
            background: 'rgba(138, 43, 226, 0.15)',
            width: '16rem',
            height: '16rem',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float" 
          style={{ 
            background: 'rgba(99, 102, 241, 0.1)',
            width: '24rem',
            height: '24rem',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '2s' 
          }} 
        />
        <div 
          className="absolute top-1/2 left-3/4 w-48 h-48 rounded-full blur-3xl animate-float" 
          style={{ 
            background: 'rgba(168, 85, 247, 0.1)',
            width: '12rem',
            height: '12rem',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '4s' 
          }} 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-16 max-w-7xl mx-auto">
        {/* Title */}
        <div className="space-y-12 animate-fade-in">
          <h1 className="text-9xl md:text-[14rem] lg:text-[18rem] xl:text-[20rem] font-black tracking-tight leading-none">
            <span className="block text-white" style={{ color: '#ffffff' }}>STOCK</span>
            <span 
              className="block gradient-text"
              style={{
                background: 'linear-gradient(to right, #a855f7, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              RESEARCH
            </span>
          </h1>
          <p 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-300 max-w-6xl mx-auto leading-relaxed font-light"
            style={{ color: '#d1d5db', fontWeight: '300' }}
          >
            Professional-grade analysis for any public company
          </p>
        </div>

        {/* Stock Search */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <StockSearch value={selectedStock} onChange={onStockChange} />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" style={{ color: '#a855f7' }} />
        </div>
      </div>
    </div>
  )
}

function StockSearch({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div 
        className="glass rounded-3xl p-4 glow-hover transition-all duration-300"
        style={{
          background: 'rgba(17, 17, 19, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          borderRadius: '32px',
          padding: '16px',
          boxShadow: '0 0 40px rgba(138, 43, 226, 0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)'
          e.currentTarget.style.boxShadow = '0 0 60px rgba(138, 43, 226, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 0 40px rgba(138, 43, 226, 0.2)'
        }}
      >
        <div className="flex items-center">
          <Search className="w-12 h-12 text-gray-400 ml-8" style={{ color: '#9ca3af' }} />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value.toUpperCase())}
            placeholder="Enter stock symbol (AAPL, TSLA, NVDA...)"
            className="flex-1 bg-transparent text-white placeholder-gray-400 text-3xl font-medium px-8 py-8 focus:outline-none"
            style={{ 
              background: 'transparent',
              color: '#ffffff',
              fontSize: '32px',
              fontWeight: '500',
              padding: '32px',
              outline: 'none',
              border: 'none'
            }}
          />
          <div className="mr-8">
            <TrendingUp className="w-12 h-12 text-purple-400" style={{ color: '#8a2be2' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
