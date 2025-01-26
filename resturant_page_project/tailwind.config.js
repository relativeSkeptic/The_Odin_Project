/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      cowboy: ["Rye", "sans-serif"],
    },
    backgroundImage: {
      cowboy: "url(../images/cowboy.jpg)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
