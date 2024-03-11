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
    'font-serif',
    'font-mono',
    'font-source-serif-pro',
    'font-ibm-plex-mono',
    'font-londrina-shadow',
    'font-rubik-doodle-shadow',
  ],
  theme: {
    colors: {
      whitestone: {
        900: 'var(--whitestone)',
      },
      transparent: {
        100: 'var(--transparent)',
      },
      cerulean: {
        900: 'var(--cerulean-900)',
        800: 'var(--cerulean-800)',
        700: 'var(--cerulean-700)',
        600: 'var(--cerulean-600)',
        '600-nt': 'var(--cerulean-600-nt)',
        500: 'var(--cerulean-500)',
        400: 'var(--cerulean-400)',
        300: 'var(--cerulean-300)',
        200: 'var(--cerulean-200)',
        100: 'var(--cerulean-100)',
        '100-nt': 'var(--cerulean-100-nt)',
        50: 'var(--cerulean-50)',
      },
      bigstone: {
        600: 'var(--bigstone-600)',
        500: 'var(--bigstone-500)',
        400: 'var(--bigstone-400)',
        300: 'var(--bigstone-300)',
        200: 'var(--bigstone-200)',
        100: 'var(--bigstone-100)',
        50: 'var(--bigstone-50)',
        25: 'var(--bigstone-25)',
      },
      heliotrope: {
        900: 'var(--heliotrope-900)',
        800: 'var(--heliotrope-800)',
        700: 'var(--heliotrope-700)',
        600: 'var(--heliotrope-600)',
        500: 'var(--heliotrope-500)',
        400: 'var(--heliotrope-400)',
        300: 'var(--heliotrope-300)',
        200: 'var(--heliotrope-200)',
        100: 'var(--heliotrope-100)',
        50: 'var(--heliotrope-50)',
      },
      hitpink: {
        900: 'var(--hitpink-900)',
        800: 'var(--hitpink-800)',
        700: 'var(--hitpink-700)',
        600: 'var(--hitpink-600)',
        500: 'var(--hitpink-500)',
        400: 'var(--hitpink-400)',
        300: 'var(--hitpink-300)',
        200: 'var(--hitpink-200)',
        100: 'var(--hitpink-100)',
      },
      cornflower: {
        500: 'var(--cornflower-500)',
        100: 'var(--cornflower-100)',
      },
      'viridian-green': {
        900: 'var(--viridian-green-900)',
      },
      'light-silver': {
        900: 'var(--light-silver-900)',
      },
      green: {
        50: 'var(--green-50)',
        500: 'var(--green-500)',
      },
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
      serif: ['var(--font-serif)'],
    },
    fontSize: {
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      '2xl': 'var(--text-2xl)',
      '3xl': 'var(--text-3xl)',
      '4xl': 'var(--text-4xl)',
      '5xl': 'var(--text-5xl)',
      '6xl': 'var(--text-6xl)',
    },
    screens: {
      xs: '314px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
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
      maxWidth: {
        dsk: 'var(--maxwidth-dsk)',
        mb: 'var(--maxwidth-mb)',
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      gridColumnStart: {
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
      },
      gridColumnEnd: {
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
      },
    },
  },
  plugins: [],
};
