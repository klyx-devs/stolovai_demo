/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF5EC',
        sand: '#F1E7D6',
        clay: '#B4552D',
        clayDark: '#8F421F',
        cocoa: '#3E2A20',
        espresso: '#2A1D16',
        leaf: '#5C7A4E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        steam: {
          '0%, 100%': { opacity: '0.35', transform: 'translateY(0) scaleX(1)' },
          '50%': { opacity: '0.9', transform: 'translateY(-6px) scaleX(1.15)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        steam: 'steam 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
