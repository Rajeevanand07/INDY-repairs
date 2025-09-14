/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        red: 'var(--color-red)',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        white2: 'var(--color-white-2)',
        gray: {
          100: 'var(--color-gray-100)',
        },
      },
      backgroundImage: {
        'red-gradient': 'var(--red-gradient)',
      },
    },
  },
  plugins: [
    require('tailwindcss-font-inter')(),
  ],
}
