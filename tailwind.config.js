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
        body: {
          DEFAULT: '#fff',
          dark: '#2C2F44FF'
        },
        'login-body': {
          DEFAULT: colors.gray["100"],
          dark: '#212536'
        },
        'login-box': {
          DEFAULT: '#fff',
          dark: '#3b435cc2'
        },
        'left-nav-border': {
          DEFAULT: '#E0E0E0',
          dark: '#212536'
        }
      },
    },
  },
  plugins: [],
}

