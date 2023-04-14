/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto-light'],
        light: ['roboto-light'],
        black: ['roboto-black'],
        medium: ['roboto-medium'],
        thin: ['roboto-thin'],
      },
      colors: {
        // TODO: add custom colors here
        primary: {
          // primary "samtgrün" color defined for viecpro
          100: '#3c5a50',
          200: '#345148',
          300: '#2c4940',
          400: '#244138',
          500: '#1c3930',
          600: '#143128',
          700: '#0c2921',
          800: '#04221a',
          900: '#001b12',
        },
        secondary: {
          // secondary blue color
          100: '#159199',
          200: '#00838b',
          300: '#00757d',
          400: '#00676f',
          500: '#005961',
          600: '#004c54',
          700: '#003f47',
          800: '#00333b',
          900: '#00272f',
        },
        template: {
          // empty template for defining additional gradient colors
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
        },
        highlight: {
          100: '#fcff00',
          200: '#dee300',
          300: '#c0c800',
          400: '#a3ae00',
          500: '#879400',
          600: '#6c7b00',
          700: '#536300',
          800: '#3f4c00',
          900: '#323500',
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;

// TODO: resolve module not found error above
