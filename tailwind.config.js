/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,jsx,ts,tsx}",

  ],

  theme: {

    extend: {

      colors: {

        primary: "#00ff99",

        secondary: "#00d9ff",

        dark: "#071018",

        card: "#112233",

      },

    },

  },

  plugins: [],
};