import { useState } from "react";
const FiltroPrecio = ({Planificaciones, setPlanificaciones}) => {

    const [preciominimo, setPrecioMinimo] = useState(0);
    const [preciomaximo, setPrecioMaximo] = useState(100000);

    const PrecioMinimo = (e) => {
        setPrecioMinimo(e.target.value);
    }

    const PrecioMaximo = (e) => {
        setPrecioMaximo(e.target.value);
    }

    const FiltradoPrecio = () => {
        const FiltradoPlanificaciones = Planificaciones.filter(Planificaciones => Planificaciones.price >= preciominimo && Planificaciones.price <= preciomaximo);
        setPlanificaciones(FiltradoPlanificaciones)
    }

    return (
        <form onSubmit={(e) => (e.preventDefault())} className="max-w-[300px] mb-5 m-2">
            <label htmlFor="preciomin">Precio Mínimo ({preciominimo})</label>
            <input type="number" name="preciomin" id="preciomin" value={preciominimo} min={0} max={preciomaximo} onChange={PrecioMinimo} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />

            <label htmlFor="preciomax">Precio Máximo ({preciomaximo})</label>
            <input type="number" name="preciomax" id="preciomax" value={preciomaximo} min={preciominimo} onChange={PrecioMaximo} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />

            <button onClick={FiltradoPrecio} className="w-full px-5 py-2 mt- text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Filtrar</button>
        </form>
    )
}

export default FiltroPrecio