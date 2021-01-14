module.exports = {
  // to fill in with all components to treeshake
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      black: {
        DEFAULT: "#222023",
      },
      brown: {
        DEFAULT: "#824E1B",
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
