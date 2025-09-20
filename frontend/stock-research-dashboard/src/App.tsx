import { useState } from 'react'
import { Hero } from './components/Hero'
import { StockDashboard } from './components/StockDashboard'

function App() {
  const [selectedStock, setSelectedStock] = useState('AAPL')

  return (
    <div 
      className="min-h-screen text-white"
      style={{
        backgroundColor: '#0f0f0f',
        color: '#ffffff',
        minHeight: '100vh',
        fontFamily: "'Inter', system-ui, sans-serif"
      }}
    >
      <div 
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)
          `
        }}
      >
        <Hero 
          selectedStock={selectedStock}
          onStockChange={setSelectedStock}
        />
        <StockDashboard stock={selectedStock} />
      </div>
    </div>
  )
}

export default App