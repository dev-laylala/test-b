/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        1400: "1400px",
        "1400r": { max: "1400px" },
        1200: "1200px",
        "1200r": { max: "1200px" },
        800: "800px",
        "800r": { max: "800px" },
      },
    },
  },
  plugins: [],
};
