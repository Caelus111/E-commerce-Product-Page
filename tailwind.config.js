const { turquoise, white } = require("color-name");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
        BlackwithlowOpacity: "hsl(0, 0%, 0%, 0.75)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
