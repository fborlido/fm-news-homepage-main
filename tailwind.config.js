/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(35, 77%, 62%)",
        primaryRed: "hsl(5, 85%, 63%)",
        offWhite: "hsl(36, 100%, 99%)",
        lightBlue: "hsl(233, 8%, 79%)",
        blue: "hsl(236, 13%, 42%)",
        darkBlue: "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        sans: "Inter",
      },
    },
  },
  plugins: [],
};
