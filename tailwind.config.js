/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Path to components
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFFFF", // Lightest shade of primary
          200: "#FDFDFD",
          300: "#FAFAFA",
          400: "#F7F7F7",
          500: "#F5F5F5", // Base primary color
          600: "#E2E2E2",
          700: "#CFCFCF",
          800: "#BFBFBF", // Darkest shade of primary
        },
        secondary: {
          100: "#313630", // Lightest shade of secondary
          200: "#2B2F29",
          300: "#252923",
          400: "#1F231D",
          500: "#181C14", // Base secondary color
          600: "#141815",
          700: "#101211",
          800: "#0C0E0D", // Darkest shade of secondary
        },
      },
    },
  },
  plugins: [],
};
