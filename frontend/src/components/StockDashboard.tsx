import { LivePrice } from './sections/LivePrice'
import { KeyMetrics } from './sections/KeyMetrics'
import { TechnicalAnalysis } from './sections/TechnicalAnalysis'
import { AnalystConsensus } from './sections/AnalystConsensus'
import { InvestmentThesis } from './sections/InvestmentThesis'

interface StockDashboardProps {
  stock: string
}

export function StockDashboard({ stock }: StockDashboardProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 space-y-24">
      <LivePrice stock={stock} />
      <KeyMetrics stock={stock} />
      <TechnicalAnalysis stock={stock} />
      <AnalystConsensus stock={stock} />
      <InvestmentThesis stock={stock} />
    </div>
  )
}
