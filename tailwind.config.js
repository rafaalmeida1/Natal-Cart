/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/assets/bgNatal.png)',
        cartNatal: 'url(/assets/bgCartNatal.png)',
      },
      fontFamily: {
        sans: [ 'Mountains of Christmas'],
        roboto: [ 'Roboto'],
      },
    },
  },
  plugins: [],
}
