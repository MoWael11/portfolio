import type { Config } from 'tailwindcss'

const config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1100px',
        xxl: '1300px',
      },
    },
    extend: {
      transitionDelay: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1100': '1100ms',
        '1200': '1200ms',
        '1300': '1300ms',
        '1400': '1400ms',
        '1500': '1500ms',
        '1600': '1600ms',
        '1700': '1700ms',
        '1800': '1800ms',
        '1900': '1900ms',
        '2000': '2000ms',
        '2100': '2100ms',
        '2200': '2200ms',
        '2300': '2300ms',
        '2400': '2400ms',
        '2500': '2500ms',
        '2600': '2600ms',
        '2700': '2700ms',
        '2800': '2800ms',
        '2900': '2900ms',
        '3000': '3000ms',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '920px',
        xl: '1200px',
        xxl: '1400px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        text: {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
        'first-dot': {
          '0%': {
            transform: 'translate(58px, -8px)',
            'box-shadow': '0px 0px 2px 1px rgb(252,255,197)',
            width: '2px',
            height: '2px',
          },
          '20%': {
            transform: 'translate(88px, -10px)',
            'box-shadow': '0px 0px 10px 6px rgb(252,255,197)',
            width: '2px',
            height: '2px',
          },
          '100%': {
            'background-color': '#f8ffb2',
            transform: 'translate(168px, -10px)',
            'box-shadow': '0px 0px 0px 0px rgb(252,255,197)',
            width: '0px',
            height: '0px',
          },
        },
        'second-dot': {
          '0%': {
            transform: 'translate(20px, -10px)',
            'box-shadow': '0px 0px 2px 1px rgb(252,255,197)',
            width: '2px',
            height: '2px',
          },
          '40%': {
            transform: 'translate(48px, -40px)',
            'box-shadow': '0px 0px 10px 6px rgb(252,255,197)',
            width: '3px',
            height: '3px',
          },
          '100%': {
            'background-color': '#f8ffb2',
            transform: 'translate(90px, -85px)',
            'box-shadow': '0px 0px 0px 0px rgb(252,255,197)',
            width: '0px',
            height: '0px',
          },
        },
        'third-dot': {
          '0%': {
            transform: 'translate(24px, 36px)',
            'box-shadow': '0px 0px 3px 2px rgb(252,255,197)',
            width: '1px',
            height: '1px',
          },
          '40%': {
            transform: 'translate(56px, 48px)',
            'box-shadow': '0px 0px 20px 8px rgb(252,255,197)',
            width: '2px',
            height: '2px',
          },
          '75%': {
            transform: 'translate(90px, 58px)',
            'box-shadow': '0px 0px 4px 4px rgb(252,255,197)',
            width: '2px',
            height: '2px',
          },
          '100%': {
            'background-color': '#f8ffb2',
            transform: 'translate(110px, 68px)',
            'box-shadow': '0px 0px 0px 0px rgb(252,255,197)',
            width: '0px',
            height: '0px',
          },
        },
        'fourth-dot': {
          '0%': {
            transform: 'translate(4px, -10px)',
            'box-shadow': '0px 0px 10px 6px rgb(252,255,197)',
            width: '1px',
            height: '1px',
          },
          '100%': {
            'background-color': '#f8ffb2',
            transform: 'translate(40px, -92px)',
            'box-shadow': '0px 0px 0px 0px rgb(252,255,197)',
            width: '0px',
            height: '0px',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'first-dot': 'first-dot 10s linear infinite',
        'second-dot': 'second-dot 8s 3s linear infinite',
        'third-dot': 'third-dot 6s 1s linear infinite',
        'fourth-dot': 'fourth-dot 12s 1s linear infinite',
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fill, minmax(450px, 1fr))',
        'projects-sm': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
