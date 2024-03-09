/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rojo: "#DA1641",
        blanco: "#F2F2F2",
        gris: "#A6A6A6",
        "gris-oscuro": "#595959",
        negro: "#131211",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Cardo: ["Cardo", "serif"],
      },
      fontSize: {
        "title-h1": "1.875rem", //30px
        "title-h2": "1.5rem", //24px
        "title-h3": "1.25rem", //20px
        subtitulo: "1.125rem", //18px
        parrafo: "1rem", //16px
      },
      borderRadius: {
        container: "15px",
        content: "12px",
      },
      backgroundColor: {
        rojo: "#DA1641",
        blanco: "#F2F2F2",
        gris: "#A6A6A6",
        "gris-oscuro": "#595959",
        negro: "#131211",
      },
    },
  },
  plugins: [],
};
