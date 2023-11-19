import React, { useState } from "react";

const FiltroCategoria = ({ Planificaciones, setPlanificaciones }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
    const planificacionesFiltradas = Planificaciones.filter(
      (planificacion) => planificacion.category === event.target.value
    );
    setPlanificaciones(planificacionesFiltradas);
  };

  return (
    <form className="max-w-[320px] px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="categorias">
        Categorías
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="categorias"
          value={categoriaSeleccionada}
          onChange={handleCategoriaChange}
        >
          <option value="">Todas</option>
          <option value="powerlifting">PowerLifting</option>
          <option value="crossfit">Crossfit</option>
          <option value="bodybuilding">Body Building</option>
          <option value="halterofilia">Halterofilia</option>
          <option value="running">Running</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default FiltroCategoria;
