/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAF7',
        paper: '#F1F5EF',
        ink: {
          DEFAULT: '#141E13',
          2: '#334232',
          3: '#60735E',
        },
        rule: {
          DEFAULT: '#DBE6D6',
          strong: '#BCCFB5',
        },
        accent: {
          DEFAULT: '#2E5D26',
          hover: '#1C3C18',
        },
        forest: {
          50: '#f4f8f3',
          100: '#e5efe2',
          200: '#cce0c6',
          300: '#9fc193',
          400: '#73a466',
          500: '#4e8740',
          600: '#386c2c',
          700: '#2e5d26',
          800: '#23491f',
          900: '#1c3c18',
          950: '#0e200c',
          wash: '#EEF6ED',
        },
        crimson: {
          DEFAULT: '#2E5D26',
          wash: '#EEF6ED',
        },
        indigo: {
          DEFAULT: '#4F46E5',
          wash: '#EEF2FF',
        },
        teal: {
          DEFAULT: '#0F766E',
          wash: '#F0FDFA',
        },
        amber: {
          DEFAULT: '#B45309',
          wash: '#FFFBEB',
        },
        purple: {
          DEFAULT: '#7E22CE',
          wash: '#FAF5FF',
        },
        cyan: {
          DEFAULT: '#0E7490',
          wash: '#ECFEFF',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
