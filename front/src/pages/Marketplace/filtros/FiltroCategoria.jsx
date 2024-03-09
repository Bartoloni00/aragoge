import { useState } from "react";

const FiltroCategoria = ({ setFiltro }) => {
  const [categoria, setCategoria] = useState("");

  const handleFiltradoCategoria = () => {
    setFiltro({ category: categoria });
  };

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
        htmlFor="categorias"
      >
        Categorías
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="categorias"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          onBlur={handleFiltradoCategoria}
        >
          <option value="">Todas</option>
          <option value="powerlifting">PowerLifting</option>
          <option value="crossfit">Crossfit</option>
          <option value="bodybuilding">Body Building</option>
          <option value="halterofilia">Halterofilia</option>
          <option value="running">Running</option>
        </select>
      </div>
    </>
  );
};

export default FiltroCategoria;
