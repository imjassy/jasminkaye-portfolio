import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070808',
          panel: '#0f1113',
          line: '#1e2225',
          white: '#FFFFFF',
          blue: '#2E0AC2',
          'blue-light': '#8B7CF6',
          muted: '#9aa3a8',
        },
      },
      fontFamily: {
        head: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
