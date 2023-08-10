/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'red-550': '#FF0000',
        'green-550': '#00A202',
        'body-bg': '#303030',
        'footer-bg': '#1F2023'
      }
    },
  },
  plugins: [],
}
