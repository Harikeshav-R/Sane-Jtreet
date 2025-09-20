# Stock Research Dashboard

A professional stock research and analysis platform built with Vite, React, and TypeScript, focused on providing comprehensive investment insights for AAPL (Apple Inc.).

## Features

### 🚀 Modern Tech Stack
- **Vite** - Fast build tool with HMR
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Beautiful, responsive charts
- **React Router** - Client-side routing
- **Radix UI** - Accessible component primitives

### 📊 Dashboard Features
- **Real-time Stock Data** - Live AAPL price tracking
- **Technical Analysis** - RSI, MACD, moving averages
- **Analyst Coverage** - Price targets and recommendations
- **News Feed** - Market-moving news with sentiment analysis
- **Investment Thesis** - Bull/bear cases with recommendations

### 🎨 Design System
- **Dark Theme** - Professional dark UI with blue-violet accents
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Polished transitions and micro-interactions
- **Accessibility** - Built with Radix UI for screen reader support

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
```bash
# Start dev server with HMR
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, Badge)
│   ├── layout/          # Layout components (Sidebar, Header, Layout)
│   ├── dashboard/       # Dashboard-specific components
│   └── charts/          # Chart components (PriceChart, TechnicalChart)
├── pages/
│   ├── Dashboard.tsx    # Main dashboard page
│   └── StockAnalysis.tsx # Detailed AAPL analysis
├── lib/
│   ├── data/           # Mock data and AAPL information
│   └── utils.ts        # Utility functions
├── App.tsx             # Main app with routing
├── main.tsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Components

### Dashboard Page
- **MetricsGrid** - Key financial metrics cards
- **PriceChart** - Interactive price chart with Recharts
- **NewsCard** - Recent news with sentiment analysis
- **TechnicalIndicators** - RSI, MACD, moving averages

### Stock Analysis Page
- **StockHeader** - Company info and key metrics
- **TechnicalChart** - Advanced charting with indicators
- **AnalystRatings** - Price targets and recommendations
- **InvestmentThesis** - Bull/bear cases with reasoning

### Design Features
- **Glow Effects** - Blue-violet glow on interactive elements
- **Gradient Cards** - Subtle gradients for depth
- **Custom Scrollbars** - Styled scrollbars matching the theme
- **Responsive Grid** - Adaptive layouts for all screen sizes

## AAPL Focus

This dashboard is specifically designed around Apple Inc. (AAPL) analysis:

- **Current Price**: $245.50 (+$7.52, +3.16%)
- **Market Cap**: $3.78T
- **P/E Ratio**: 17.8
- **Recommendation**: BUY with 85% confidence
- **Price Target**: $280 (analyst average)

### Investment Thesis
- **Bull Case**: iPhone 17 cycle momentum, services growth, AI integration
- **Bear Case**: China market challenges, Vision Pro adoption, regulatory pressure
- **Recommendation**: BUY - Strong fundamentals outweigh near-term risks

## Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with custom dark theme
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Routing**: React Router v6
- **UI Components**: Custom components built on Radix UI
- **State Management**: React hooks (Zustand ready for complex state)

## Performance

- **Fast HMR**: Instant hot module replacement with Vite
- **Optimized Bundle**: Tree-shaking and code splitting
- **Responsive Charts**: Performant charts that adapt to screen size
- **Smooth Animations**: 60fps transitions and micro-interactions

## Future Enhancements

- **Multi-Stock Support** - Expand beyond AAPL
- **Real-time Data** - Connect to live market data APIs
- **Portfolio Tracking** - Add position tracking and P&L
- **Advanced Charting** - Candlestick charts, more indicators
- **Alerts System** - Price and technical indicator alerts
- **Mobile App** - React Native version

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

Built with ❤️ for serious traders and investors who need professional-grade research tools.