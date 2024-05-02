const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        '2xl': {'min': '1535px'},
        'xl': {'min': '1279px'},
        'lg': {'min': '1023px'},
        'md': {'min': '767px'},
        'sm': {'min': '639px'}
      },
      // backgroundImage: (theme) => ({
      //   'logo-dark': "url('/assets/images/logo.svg')",
      //   'logo-white': "url('/assets/images/logo-white.svg')",
      // }),
      boxShadow: (theme) => ({
        'box-header-shadow': '-7px 7px 0 5pt'
      }),
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      margin: {
        11: '3rem'
      },
      inset: {
        '24-1/2': '6.5rem'
      },
      width: {
        98: '25rem',
        100: '26rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'login-body': {
          DEFAULT: colors.gray["100"],
          dark: '#212536'
        },
        'login-box': {
          DEFAULT: '#fff',
          dark: '#3b435cc2'
        },
        body: {
          DEFAULT: '#f3f3f3',
          dark: '#2C2F44FF'
        },
        nav: {
          DEFAULT: '#fff',
          dark: '#343850'
        },
        'nav-border': {
          DEFAULT: '#E0E0E0',
          dark: '#212536'
        },
        box: {
          DEFAULT: '#fff',
          dark: '#363850'
        }
      },
      fontFamily: {
        'tenor': ['TenorSans', 'sans-serif'],
        'poppins-light': ['PoppinsLight', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-medium': ['PoppinsMedium', 'sans-serif'],
        'poppins-semi-bold': ['PoppinsSemiBold', 'sans-serif'],
        'roboto-thin': ['RobotoThin', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-medium': ['RobotoMedium', 'sans-serif']
      },
    },
  },
  plugins: [],
}

