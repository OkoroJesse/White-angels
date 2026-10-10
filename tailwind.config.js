/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          bg: 'var(--hotel-bg)',
          surface: 'var(--hotel-surface)',
          card: 'var(--hotel-card)',
          'card-hover': 'var(--hotel-card-hover)',
          border: 'var(--hotel-border)',
          'border-strong': 'var(--hotel-border-strong)',
          'border-gold': 'var(--hotel-border-gold)',
          gold: {
            DEFAULT: 'var(--hotel-gold)',
            light: 'var(--hotel-gold-light)',
            dark: 'var(--hotel-gold-dark)',
            subtle: 'var(--hotel-gold-subtle)'
          },
          muted: 'var(--hotel-muted)',
          text: 'var(--hotel-text)',
          secondary: 'var(--hotel-text-secondary)',
          'tag-bg': 'var(--hotel-tag-bg)',
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
