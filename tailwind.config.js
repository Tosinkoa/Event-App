module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "my-font": ["Nunito", "sans-serif"],
      "logo-font": ["Ultra", "serif"],
    },
    extend: {
      animation: {
        bounce: "bounce 2s infinite",
      },
      width: {
        "1/100": "1%",
      },
      screens: {
        sm: "1px",
      },
    },
  },

  plugins: [],
};
