/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mojo: {
          bg: '#08090E',
          surface: '#0F111A',
          'surface-elevated': '#161926',
          card: '#121420',
          border: '#1F2436',
          'border-bright': '#2E354F',
          text: '#F3F4F6',
          muted: '#9CA3AF',
          dim: '#6B7280',
          violet: {
            DEFAULT: '#8B5CF6',
            light: '#A78BFA',
            dark: '#6D28D9',
            glow: 'rgba(139, 92, 246, 0.35)',
          },
          cyan: {
            DEFAULT: '#06B6D4',
            light: '#38BDF8',
            dark: '#0284C7',
          },
          emerald: {
            DEFAULT: '#10B981',
            light: '#34D399',
          },
          amber: {
            DEFAULT: '#F59E0B',
            light: '#FBBF24',
          },
          rose: {
            DEFAULT: '#F43F5E',
          }
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.4)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.4)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px 0 rgba(139, 92, 246, 0.1)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'gradient-brand': 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)',
        'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
