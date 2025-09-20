import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('🚀 main.tsx is loading!')
console.log('🚀 Root element:', document.getElementById('root'))

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('❌ Root element not found!')
} else {
  console.log('✅ Root element found, creating React root...')
  const root = createRoot(rootElement)
  console.log('✅ React root created, rendering App...')
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('✅ App rendered!')
}
