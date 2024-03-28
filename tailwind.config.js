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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        body: {
          DEFAULT: colors.gray["100"],
          dark: '#212536fa'
        },
        box: {
          DEFAULT: '#fff',
          dark: '#3b435cc2'
        }
      },
    },
  },
  plugins: [],
}

