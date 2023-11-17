import { useState } from "react";

export default function Precio(){
    const [preciominimo, setPrecioMinimo] = useState();
    const [preciomaximo, setPrecioMaximo] = useState();

    const PrecioMinimo = (e) => {
        setPrecioMinimo(e.target.value)
    }
    const PrecioMaximo = (e) => {
        setPrecioMaximo(e.target.value)
    }
  return (
    <div className="w-[300px] px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide m-2 pt-3 text-gray-500 text-xs font-bold mb-2" htmlFor="preciomin">
            Precio Minimo ({preciominimo})
        </label>
        <div>
            <input type="number" name="preciomin" id="preciomin" min={0} max={preciomaximo} onChange={PrecioMinimo} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>

        <label className="block uppercase tracking-wide m-2 pt-3 text-gray-500 text-xs font-bold mb-2" htmlFor="preciomax">
            Precio Maximo ({preciomaximo})
        </label>
        <div>
            <input type="number" name="preciomax" id="preciomax" min={preciominimo} max={50000} onChange={PrecioMaximo} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
    </div>
  )
}
