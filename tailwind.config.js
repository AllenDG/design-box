/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Path to your components
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FCFBF9",
          200: "#F9F8F7",
          300: "#F4F2F0",
          400: "#F0EDEA",
          500: "#EDE8E5",
          600: "#F8F6F4",
          700: "#D9D4D1",
          800: "#B7B3B1",
        },
        secondary: {
          100: "#EBF7F7",
          200: "#D7EFEF",
          300: "#C4E7E7",
          400: "#B0DFDF",
          500: "#9BD7D7",
          600: "#C4DFDF",
          700: "#82CFCF",
          800: "#69B7B7",
        },
        black: {
          DEFAULT: "#41444B",
          100: "#5C5F66",
          200: "#55585F",
          300: "#4F5259",
          400: "#494C54",
          500: "#44474F",
          600: "#41444B",
          700: "#3A3D43",
          800: "#33373C",
        },
        white: {
          DEFAULT: "#FFFFFF", // Default White
          100: "#F9FAFB", // Lightest Shade
          200: "#F5F5F5",
          300: "#F2F2F2",
          400: "#ECECEC",
          500: "#E6E6E6",
          600: "#E0E0E0", // Slightly darker
          700: "#D9D9D9",
          800: "#D3D3D3", // Darkest "white" shade
        },
      },
    },
  },
  plugins: [],
};
