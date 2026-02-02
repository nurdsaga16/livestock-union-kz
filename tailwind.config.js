/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4429',
        secondary: '#f59e0b',
        'background-light': '#ffffff',
        'background-dark': '#111827',
        'accent-light': '#f0fdf4',
        'accent-dark': '#064e3b',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        dash: 'dash 3s linear forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
