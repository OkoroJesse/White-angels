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
        hotel: {
          bg: '#0B0B0A',
          surface: '#11110F',
          card: '#161614',
          border: 'rgba(247, 244, 238, 0.08)',
          'border-gold': 'rgba(212, 175, 55, 0.25)',
          gold: {
            DEFAULT: '#D4AF37',
            light: '#DFBE52',
            dark: '#9A7D20',
            subtle: 'rgba(212, 175, 55, 0.12)'
          },
          muted: '#A8A49B',
          text: '#F7F4EE'
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #DFBE52 0%, #D4AF37 50%, #B89228 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
