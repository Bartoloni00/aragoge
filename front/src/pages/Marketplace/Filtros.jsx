import { useState } from "react";
import FiltroPrecio from "./filtros/FiltroPrecio";
import FiltroCategoria from "./filtros/FiltroCategoria";

const Filtros = ({ setFilters }) => {
  const [filtroPrecio, setFiltroPrecio] = useState({ pricemin: 0, pricemax: 100000 });
  const [filtroCategoria, setFiltroCategoria] = useState({ category: "" });

  const handleFiltrado = () => {
    // Aplicar todos los filtros aquí
    setFilters({
      ...filtroPrecio,
      ...filtroCategoria,
    });
  };

  return (
    <>
      <section className="w-[100%] p-2 my-8">
        <div className="max-w-[1536px] p-2 container px-5 py-10 mx-auto border dark:border-gray-500 my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            <form onSubmit={(e) => e.preventDefault()} className="max-w-[320px] px-3 mb-6 md:mb-0">
              <FiltroPrecio setFiltro={setFiltroPrecio} />
              <FiltroCategoria setFiltro={setFiltroCategoria} />
            </form>
          </div>
          <button
            onClick={handleFiltrado}
            className="w-full px-5 py-2 mt- text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            Filtrar
          </button>
        </div>
      </section>
    </>
  );
};

export default Filtros;
