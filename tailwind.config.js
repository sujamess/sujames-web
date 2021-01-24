const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  darkMode: 'media',
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
      facebook: '#1778F2',
      'facebook-dark': '#1260C2',
      twitter: '#08a0e9',
      'twitter-dark': '#0084b4',
      'instagram-1': '#fec564',
      'instagram-1-dark': '#e4b15a',
      'instagram-2': '#5258cf',
      'instagram-2-dark': '#494fba',
      'instagram-3': '#893dc2',
      'instagram-3-dark': '#7b36ae',
      'instagram-4': '#d9317a',
      'instagram-4-dark': '#c32c6d',
      'instagram-5': '#6559ca',
      'instagram-5-dark': '#5a50b5',
      linkedin: '#0e76a8',
      'linkedin-dark': '#0D6A97',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h2: {
              marginTop: '0',
            },
          },
        },
      },
      fontFamily: {
        header: ['Kanit', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        'black-overlay': 'rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
