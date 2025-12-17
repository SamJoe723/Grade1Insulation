/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#d1d1d1',
          300: '#b5b5b5',
          400: '#8f8f8f',
          500: '#6a6a6a',
          600: '#4a4a4a',
          700: '#2f2f2f',
          800: '#1f1f1f',
          900: '#0f0f0f',
        },
        accent: {
          red: '#7a2e2e',
          blue: '#2f3e4e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'serif'],
        alt: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
