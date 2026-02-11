/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#667eea',
          50: '#f0f1fe',
          100: '#dee0fc',
          200: '#c4c9fa',
          300: '#9ca6f5',
          400: '#667eea',
          500: '#4f63e2',
          600: '#3b45d6',
          700: '#3237c3',
          800: '#2d2f9f',
          900: '#292d7e',
        },
        accent: '#764ba2',
      },
      boxShadow: {
        card: '0 2px 12px rgba(102, 126, 234, 0.08)',
        'card-hover': '0 8px 24px rgba(102, 126, 234, 0.15)',
        sidebar: '2px 0 16px rgba(102, 126, 234, 0.08)',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '14px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
