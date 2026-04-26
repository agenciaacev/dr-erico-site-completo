/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2239',
          'navy-dark': '#071A2E',
          'navy-deep': '#1E3A3A',
          gold: '#C9A961',
          'gold-dark': '#B8983F',
          green: '#9DC74A',
          'green-dark': '#7FB539',
          beige: '#EFE8D8',
          'beige-light': '#F4F1EA',
          cream: '#F8F4EA',
          text: '#2B2B2B',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1280px',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(11, 34, 57, 0.15)',
        card: '0 4px 20px -4px rgba(11, 34, 57, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
