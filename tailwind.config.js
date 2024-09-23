/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#3490dc", // Blue
      secondary: "#ffed4a", // Yellow
      success: "#38c172", // Green
      danger: "#e3342f", // Red
      warning: "#f6993f", // Orange
      info: "#6cb2eb", // Light Blue
      light: "#f8f9fa", // Light Gray
      dark: "#343a40", // Dark Gray
      custom: "#009688",
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
