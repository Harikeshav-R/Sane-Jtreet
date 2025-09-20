/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0b',
        foreground: '#ffffff',
        primary: {
          DEFAULT: '#8a2be2',
          50: '#f3e8ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#8a2be2',
          600: '#6a1b9a',
          700: '#4a148c',
          800: '#3b0764',
          900: '#2e0249',
          foreground: '#ffffff'
        },
        card: '#111113',
        'card-elevated': '#1a1a1d',
        border: '#27272a',
        input: '#18181b',
        success: '#22c55e',
        warning: '#eab308',
        destructive: '#ef4444',
        muted: '#18181b',
        'muted-foreground': '#71717a'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(138, 43, 226, 0.3)',
        'glow-lg': '0 0 40px rgba(138, 43, 226, 0.2)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0a0b 0%, #1a1a1d 100%)',
        'gradient-card': 'linear-gradient(135deg, #111113 0%, #1a1a1d 100%)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
