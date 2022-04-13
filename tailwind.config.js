module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(2deg)" },
          "60%": { transform: "rotate(-1deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
      },
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
