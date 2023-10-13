import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#232323',
        'dark-blue': '#012B31',
        'highlight-red': '#E31C3E',
        'highlight-yellow': '#E7BA18',
        'green-bg': {
          900: '#051A0E'
        },
        'light-text': '#C6CDD1',
        'dark-text': '#232323',
      },
      keyframes: {
        cursor: {
          '50%': { opacity: '0' },
        },
        underlineGrow: {
          '0%': {width: '0'},
          '100%': {width: '40%'},
        }
      },
      animation: {
        cursor: 'cursor 1.1s infinite step-start',
        underlineGrow: 'underlineGrow 0.5s ease-in-out',
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}
export default config
