module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "my-font": ["Nunito", "sans-serif"],
      "logo-font": ["Ultra", "serif"],
    },
    extend: {
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        bounce: "bounce 1.5s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(1.2) rotate(-4deg)" },
          "50%": { transform: " scale(1) rotate(0deg)" },
        },
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
