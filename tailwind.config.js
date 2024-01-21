/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#0c1f13",
        secondary : "#dfec57",
        tertiary : "#153621"
      }
    },
  },
  plugins: [],
}