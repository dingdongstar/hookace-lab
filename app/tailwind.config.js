/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      borderRadius: {
        "2xl": "1rem",
      }
    },
  },
  plugins: [],
};
