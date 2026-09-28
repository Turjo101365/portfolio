/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        paper: '#F5F4EF',
        ink: {
          DEFAULT: '#121212',
          2: '#4A4A48',
          3: '#767672',
        },
        rule: {
          DEFAULT: '#E5E4DE',
          strong: '#CFCFCA',
        },
        accent: {
          DEFAULT: '#BE123C',
          hover: '#9F1239',
        },
        crimson: {
          DEFAULT: '#BE123C',
          wash: '#FFF1F2',
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
