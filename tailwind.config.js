/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
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
    },
   colors:{
    background:'#1A202C',
    primary:'#2D3748',
    secondary:'#202837',
    highlight:'#2680EB',
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
   }
  },
  plugins: [plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  })],
}
