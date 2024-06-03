import svgToDataUri from 'mini-svg-data-uri'
import type { Config } from 'tailwindcss'
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const config = {
  darkMode: 'selector',
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1200px',
        xxl: '1400px'
      }
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
        '3000': '3000ms'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '920px',
        xl: '1200px',
        xxl: '1400px'
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)'
          }
        },
        'slide-in': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'slide-in': 'slide-in 1s ease forwards',
        shimmer: 'shimmer 2s linear infinite'
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fill, minmax(450px, 1fr))',
        'projects-sm': 'repeat(auto-fill, minmax(280px, 1fr))'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), bgGrid, addVariablesForColors]
} satisfies Config

function bgGrid({ matchUtilities, theme }: any) {
  matchUtilities(
    {
      'bg-grid': (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`
      }),
      'bg-grid-small': (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`
      }),
      'bg-dot': (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`
      })
    },
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
  )
}

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars
  })
}

export default config
