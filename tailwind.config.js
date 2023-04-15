/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const { createThemes } = require('tw-colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 0px 10px var(--tw-shadow-color)',
        lg: '0 0px 16px var(--tw-shadow-color)',
      },
    }
  },
  plugins: [createThemes({
    default:{
      background:'#1A202C',
      primary:'#2D3748',
      secondary:'#202837',
      highlight:'#ffffff',
      text:'#FFFFFF',
      textMuted:'#909090',
      content:'#000000',
      contentBorder:'#7B7B7B',
      numbers:{
        correct:'#00FFC4',
        incorrect:'#F56565',
      },
      graphs:{
        line:'#ECC94B'
      }
    },
    green:{
      background: '#0f2419',
      primary: '#284035',
      secondary: '#1e3628',
      highlight: '#37fc00',
      text: '#FFFFFF',
      textMuted: '#B2B2B2',
      content: '#040806',
      contentBorder: '#4A5568',
      numbers: {
        correct: '#dbfc00',
        incorrect: '#fc4300',
      },
      graphs: {
        line: '#2ECC71',
      },
    }
  }),plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),],
}
