// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        waterFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "300% 50%" },
        },
      },
      animation: {
      waterFlow: "waterFlow 20s ease-in-out infinite",

      },
    },
  },
  plugins: [],
};
