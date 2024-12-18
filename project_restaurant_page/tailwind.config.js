/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundImage: {
      'cowboy': "url(../img/cowboy.jpg)",
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};