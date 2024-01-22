/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#2565b5",
        secondary : "#dfec57",
        tertiary : "#ffffff"
      }
    },
  },
  plugins: [],
}
