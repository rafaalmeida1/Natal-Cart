/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        snow: 'url(/assets/snow.png)',
        bgNatal: 'url(/assets/bgNatal.png)',
      },
      fontFamily: {
        sans: [ 'Mountains of Christmas'],
        roboto: [ 'Roboto'],
      },
      backgroundSize: {
        'snow1': '70em',
        'snow2': '50em'
      },
      keyframes: {
        snowfall: {
          '100%': { transform: 'background-position: 70em 70em'},
        },
        snowfall2: {
          '100%': { transform: 'background-position: 50em 0'},
        }
      }
    },
  },
  plugins: [],
}
