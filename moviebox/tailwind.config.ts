import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'slideup': 'slideup .9s ease-in-out',
        'slidedown': 'slidedown .7s ease-in-out',
        'slideleft': 'slideleft 1s ease-in-out',
        'slideright': 'slideright 1s ease-in-out',
        'wave': 'wave 1.2s linear infinite'
      },
      keyframes: {
        slowfade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideup: {
          from: { opacity: '0', transform: 'translateY(15%)' },
          to: { opacity: '1', transform: 'none' },
        },
        slidedown: {
          from: { opacity: '0', transform: 'translateY(-15%)' },
          to: { opacity: '1', transform: 'none' },
        },
        slideleft: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0', display: "none" }
        }
      }
    },
  },
  plugins: [],
}
export default config
