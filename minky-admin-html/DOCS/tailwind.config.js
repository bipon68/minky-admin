/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.css"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        "custom-teal": "#009688",
      },
      zIndex: {
        1030: "1030",
      },
      fontFamily: {
        niconne: ["Niconne", "cursive"],
      },
      fontSize: {
        "26px": "26px",
      },
      lineHeight: {
        "50px": "50px",
      },
    },
  },
  plugins: [],
};
