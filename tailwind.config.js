/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode using a .dark class
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
     primary: '#f59e0b',   // amber-500
        secondary: '#ec4899', // pink-500
      },
    },
  },
  plugins: [],
};
