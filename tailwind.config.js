/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        mine: "#FF1212",
        light: "#6C6C6C",
        skyblue: "#27A8F4",
        backblue: "#3DB2FF",
        orange: "#FF9800",
        green: '#038566'
      },
      fontFamily: {
        fam: "Montserrat",
      },
    },
  },
  plugins: [],
};
