/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        textPrimary: {
          100: "#E0E0E0",
          200: "#8A8686",
          300: "#646F75",
          600: "#4A3D3F",
          700: "#384449",
          800: "#2E1619",
        },
        textGreen: {
          100: "#82AB0D",
          200: "#03922B",
        },
        textWhite: "#D1D5DB",
        hotPink: "#FF7594",
        orangePeach: "#FF7C65",
        babyPeach: {
          100: "#FFF5F5",
          200: "#FDDAD6",
        },
        bg_dark: "#150A09",
      },
      screens: {
        sm: "700px",
        md: "815px",
        lg: "1366px",
      },
    },
  },
  plugins: [],
};
