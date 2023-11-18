import {useEffect, useState} from "react";
import PlanificacionesCard from "./PlanificacionesCard.jsx";
//Planificaciones === ProductList
//PlanificacionesCardItem === ProductListItem

const Planificaciones = ({planificaciones}) => {
  
  const [Planificaciones, setPlanificaciones] = useState(planificaciones)

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

  useEffect( () => {
    setPlanificaciones(planificaciones)
  },[planificaciones])

  return (
    //Las etiquetas vacias se llaman react fragment
    <>
    <form onSubmit={(e) => (e.preventDefault())}>
      <label htmlFor="preciomin">Precio Mínimo ({preciominimo})</label>
      <input type="number" name="preciomin" id="preciomin" value={preciominimo} min={0} max={preciomaximo} onChange={PrecioMinimo} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />

      <label htmlFor="preciomax">Precio Máximo ({preciomaximo})</label>
      <input type="number" name="preciomax" id="preciomax" value={preciomaximo} min={preciominimo} onChange={PrecioMaximo} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />

      <button onClick={FiltradoPrecio} className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Filtrar</button>
    </form>

      {/* Pasar desde componente padre a un componente hijo datos */}
      <section className="w-[100%] p-2 my-8">
          <div className="max-w-[1536px] mx-auto dark:border-gray-700 p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {
                  Planificaciones.map(planificaciones => <PlanificacionesCard key={planificaciones._id} planificaciones={planificaciones} />)
                }
              </div>
          </div>
      </section>
    </>
  )
}

export default Planificaciones;
