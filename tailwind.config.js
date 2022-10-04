/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}" ,
  ],
  theme: {
    extend: {
      colors: {
        mine: '#FF1212',
        light: '#6C6C6C'
      },
      fontFamily: {
        fam: 'Montserrat'
      }
    },
  },
  plugins: [],
}
