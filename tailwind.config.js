/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    screens: {
      'sm1': '320px', //Iphone 8
      'sm2': '375px',
      'sm3': '414px',  //Iphone 8 plus
      'md1': '400px',
      'md': '750px',
      'lg1': '1020px',
      'lg': '1440px',
    },
    extend: {
    },
  },
  plugins: [],
}

