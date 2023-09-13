const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-grey-background": "#343435",
        "custom-orange-background": "#83411C",
        "custom-orange-hover": "#a35427"
      },

    },
  },
  plugins: [],
}