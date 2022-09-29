/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
        'sans-heading': 'Darker Grotesque',
      },
      colors: {
        primary: '#59F9BE',
        secondary: '#A68BFF',
        tertiary: '#D4FE56',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
