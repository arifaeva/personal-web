/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "800px",

      tablet: "801px",

      desktop: "1200px",
    },
    extend: {
      fontFamiliy: {
        sans: ["Inter", "sans-serif"],
        display: ["DM Serif Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
