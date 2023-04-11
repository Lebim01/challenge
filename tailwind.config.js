/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
   colors:{
    background:'#1A202C',
    primary:'#2D3748',
    secondary:'#202837',
    highlight:'#2680EB',
    text:'#FFFFFF',
    textmuted:'#909090',
    numbers:{
      correct:'#00FFC4',
      incorrect:'#F56565',
    },
    graphs:{
      line:'#ECC94B'
    }
   }
  },
  plugins: [],
}
