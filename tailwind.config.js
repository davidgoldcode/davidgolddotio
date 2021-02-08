module.exports = {
  // to fill in with all components to treeshake
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      black: {
        light: "#1D1D23",
        DEFAULT: "#222023",
      },
      brown: {
        DEFAULT: "#824E1B",
      },
      yellow: {
        DEFAULT: "rgba(252, 211, 77)",
      },
    },
    extend: {
      display: ["hover"],
    },
    fontFamily: {
      sans: ["Verdana", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
