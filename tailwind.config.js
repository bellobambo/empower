/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [ "night", "cmyk"],
  },

  // theme: {
  //   extend: {},
  // },
  plugins: [require("daisyui")],

}

