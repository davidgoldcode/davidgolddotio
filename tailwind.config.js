module.exports = {
  // to fill in with all components to treeshake
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: {
        DEFAULT: "#222023",
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
