const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'logo-dark': "url('/assets/images/logo.svg')",
        'logo-white': "url('/assets/images/logo-white.svg')",
      }),
      boxShadow: (theme) => ({
        'box-header-shadow': '-7px 7px 0 5pt'
      }),
      fontFamily: {
        'playfair': ['Playfir', 'serif'],
        'tenor': ['TenorSans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-semi-bold': ['PoppinsSemiBold', 'sans-serif'],
        'roboto-thin': ['RobotoThin', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-medium': ['RobotoMedium', 'sans-serif']
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'body-index': {
          DEFAULT: colors.gray["100"],
          dark: '#212536'
        },
        'box-index': {
          DEFAULT: '#fff',
          dark: '#3b435cc2'
        },
        body: {
          DEFAULT: '#fff',
          dark: 'rgb(44,47,68)'
        },
        box: {
          DEFAULT: colors.gray["100"],
          dark: '#212536'
        },
        shadow: {
          DEFAULT: '#fff',
          dark: '#363d54'
        }
      },
    },
  },
  plugins: [],
}

