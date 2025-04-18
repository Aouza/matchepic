/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#4C1D95',
          800: '#5B21B6',
          700: '#6D28D9',
          600: '#7C3AED',
          500: '#8B5CF6',
          400: '#A78BFA',
          300: '#C4B5FD',
          200: '#DDD6FE',
          100: '#EDE9FE',
          50: '#F5F3FF',
        },
      },
      maxWidth: {
        '7xl': '80rem',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
} 