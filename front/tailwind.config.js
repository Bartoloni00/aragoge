/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rojo': '#DA1641',
        'blanco': '#F2F2F2',
        'gris': '#A6A6A6',
        'gris-oscuro': '#595959',
        'negro': '#131211',
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Cardo: ["Cardo", "serif"],
      },
      fontSize: {
        'titulo': '0.8rem',
        'subtitulo':'',
        'ena': '3.052rem',
        'parrafo': '3.052rem',
        'parrafo': '3.052rem',
      },
      borderRadius: {
        'container': '15px',
        'content':'12px'
      }
    },
  },
  plugins: [],
}