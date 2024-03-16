const { createGlobPatternsForDependencies } = require('qwik-nx/tailwind');
const { join } = require('path');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  safelist: [
    'font-sans',
    'font-source-serif-pro',
  ],
  theme: {
    important: true,
    extend: {
      fontFamily: {
        sans: ['Wix Madefor Text', 'sans-serif'],
        'source-serif-pro': ['Source Serif 4', 'serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // EXTEND-START
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
        alert: {
          DEFAULT: 'hsl(var(--alert))',
          foreground: 'hsl(var(--alert-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        base: 'var(--border-radius)',
        sm: 'calc(var(--border-radius) + 0.125rem)',
        DEFAULT: 'calc(var(--border-radius) + 0.25rem)',
        md: 'calc(var(--border-radius) + 0.375rem)',
        lg: 'calc(var(--border-radius) + 0.5rem)',
        xl: 'calc(var(--border-radius) + 0.75rem)',
        '2xl': 'calc(var(--border-radius) + 1rem)',
        '3xl': 'calc(var(--border-radius) + 1.5rem)',
      },
      maxWidth: {
        dsk: 'var(--maxwidth-dsk)',
        mb: 'var(--maxwidth-mb)',
	  	},
      borderWidth: {
        base: 'var(--border-width)',
        DEFAULT: 'calc(var(--border-width) + 1px)',
        2: 'calc(var(--border-width) + 2px)',
        4: 'calc(var(--border-width) + 4px)',
        8: 'calc(var(--border-width) + 8px)',
      },
      boxShadow: {
        base: 'var(--shadow-base)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
      },
      // EXTEND-END
      animation: {
        'accordion-down': '0.2s ease-out 0s 1 normal forwards accordion-open',
        'accordion-up': '0.2s ease-out 0s 1 normal forwards accordion-close',
      },
      transitionTimingFunction: {
        step: 'cubic-bezier(0.6, 0.6, 0, 1)',
        jumpy: 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
