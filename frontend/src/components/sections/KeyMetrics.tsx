import { DollarSign, Activity, BarChart3, Target } from 'lucide-react'

interface KeyMetricsProps {
  stock: string
}

export function KeyMetrics({ stock }: KeyMetricsProps) {
  return (
    <section className="animate-slide-up">
      <div className="text-center mb-12">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
        >
          Key Metrics
        </h2>
        <p 
          className="text-xl text-gray-400 max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Financial and technical performance indicators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <MetricCard
          icon={DollarSign}
          iconColor="text-purple-400"
          category="Valuation"
          title="--"
          subtitle="Loading..."
          subtitleColor="text-gray-400"
        />
        
        <MetricCard
          icon={Activity}
          iconColor="text-green-400"
          category="Growth"
          title="--"
          subtitle="Loading..."
          subtitleColor="text-gray-400"
        />
        
        <MetricCard
          icon={BarChart3}
          iconColor="text-blue-400"
          category="Technical"
          title="--"
          subtitle="Loading..."
          subtitleColor="text-gray-400"
        />
        
        <MetricCard
          icon={Target}
          iconColor="text-yellow-400"
          category="Target"
          title="--"
          subtitle="Loading..."
          subtitleColor="text-gray-400"
        />
      </div>
    </section>
  )
}

interface MetricCardProps {
  icon: React.ComponentType<{ className?: string }>
  iconColor: string
  category: string
  title: string
  subtitle: string
  subtitleColor: string
}

function MetricCard({ 
  icon: Icon, 
  iconColor, 
  category, 
  title, 
  subtitle, 
  subtitleColor 
}: MetricCardProps) {
  return (
    <div 
      className="glass rounded-2xl p-8 glow-hover transition-all duration-500 group"
      style={{
        background: 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(75, 85, 99, 0.4)',
        borderRadius: '20px',
        padding: '36px',
        transition: 'all 0.5s ease',
        fontFamily: "'Inter', system-ui, sans-serif",
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
        e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.6)'
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(138, 43, 226, 0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.4)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className="flex items-center justify-between mb-8">
        <Icon className={`w-10 h-10 ${iconColor}`} />
        <span 
          className="text-xs text-gray-400 uppercase tracking-wider font-medium"
          style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '11px', fontWeight: '500' }}
        >
          {category}
        </span>
      </div>
      
      <div className="space-y-4">
        <h3 
          className="text-3xl lg:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors"
          style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: '700' }}
        >
          {title}
        </h3>
        <p 
          className={`text-base font-medium ${subtitleColor}`}
          style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '16px', fontWeight: '500' }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}
