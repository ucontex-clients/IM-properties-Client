/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mine: "#FF1212",
        light: "#6C6C6C",
        skyblue: "#27A8F4",
        backblue: "#3DB2FF",
        orange: "#FF9800",
      },
      fontFamily: {
        fam: "Montserrat",
      },
    },
  },
  plugins: [],
};
