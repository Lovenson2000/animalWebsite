/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    screens: {
      'sm1': '320px', //Iphone 8
      'sm2': '375px',
      'sm3': '414px',  //Iphone 8 plus
      'md1': '500px',
      'md': '830px',
      'lg0': '940px',
      'lg1': '1220px',
      'lg': '1440px',
    },
    extend: {
    },
  },
  plugins: [],
}

