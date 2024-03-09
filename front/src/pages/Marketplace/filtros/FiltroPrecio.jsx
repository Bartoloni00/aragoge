import { useState } from "react";

const FiltroPrecio = ({ setFiltro }) => {
  const [preciominimo, setPrecioMinimo] = useState(0);
  const [preciomaximo, setPrecioMaximo] = useState(100000);

  const handleFiltradoPrecio = () => {
    setFiltro({ pricemin: preciominimo, pricemax: preciomaximo });
  };

  return (
    <>
      <label htmlFor="preciomin">Precio Mínimo ({preciominimo})</label>
      <input
        type="number"
        name="preciomin"
        id="preciomin"
        value={preciominimo}
        min={0}
        max={preciomaximo}
        onChange={(e) => setPrecioMinimo(e.target.value)}
        onBlur={handleFiltradoPrecio}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />

      <label htmlFor="preciomax">Precio Máximo ({preciomaximo})</label>
      <input
        type="number"
        name="preciomax"
        id="preciomax"
        value={preciomaximo}
        min={preciominimo}
        onChange={(e) => setPrecioMaximo(e.target.value)}
        onBlur={handleFiltradoPrecio}
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </>
  );
};

export default FiltroPrecio;
