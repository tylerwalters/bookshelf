import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      lavender: {
        50: '#faf6fe',
        100: '#f2eafd',
        200: '#e8d9fb',
        300: '#d6bbf7',
        400: '#be92f1',
        500: '#a364e8',
        600: '#8d44d9',
        700: '#7832be',
        800: '#662e9b',
        900: '#54267d',
        950: '#37105b',
      },
      slate: colors.slate,
    },
    extend: {},
  },
  plugins: [],
};
