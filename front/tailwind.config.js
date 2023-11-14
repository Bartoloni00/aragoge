/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '',
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Cardo: ["Cardo", "serif"],
      },
    },
  },
  plugins: [],
}