/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FDBC33",
        secondary: "#3BB77E",
        accent: "#F53E32",
        neutral: "#2B2B2D",
        neutralLight: "#555555",
        neutralLighter: "#ADADAD",
      },
    },
  },
  content: {
    files: [
      "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/plugins/**/*.{js,ts,mjs}",
      "{srcDir}/composables/**/*.{js,ts,mjs}",
      "{srcDir}/utils/**/*.{js,ts,mjs}",
      "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/app.config.{js,ts,mjs}",
      "{srcDir}/app/spa-loading-template.html",
    ],
  },
  plugins: [],
};
