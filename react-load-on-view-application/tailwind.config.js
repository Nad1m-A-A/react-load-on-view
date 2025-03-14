/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eefcf3",
          100: "#d9f9e3",
          200: "#b2f2c7",
          300: "#8aecab",
          400: "#63e58f",
          500: "#3ddf73",
          600: "#30b85c",
          700: "#238f46",
          800: "#176530",
          900: "#0b3c1a",
        },
        secondary: {
          50: "#f7f7f8",
          100: "#e3e4e6",
          200: "#c7c8cd",
          300: "#abacb4",
          400: "#8f909b",
          500: "#737481",
          600: "#5b5c65",
          700: "#43444a",
          800: "#2c2d30",
          900: "#161618",
        },
        accent: {
          50: "#fdf8eb",
          100: "#fbf1d6",
          200: "#f6e3ad",
          300: "#f2d685",
          400: "#edc85c",
          500: "#e8b833",
          600: "#ba9229",
          700: "#8b6d1f",
          800: "#5d4714",
          900: "#2e230a",
        },
      },
    },
  },
  plugins: [],
};
