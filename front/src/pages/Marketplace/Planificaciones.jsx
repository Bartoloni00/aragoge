import {useEffect, useState} from "react";
import PlanificacionesCard from "./PlanificacionesCard.jsx";
import Filtros from "./Filtros.jsx";
//Planificaciones === ProductList
//PlanificacionesCardItem === ProductListItem

const Planificaciones = ({planificaciones}) => {
  const [Planificaciones, setPlanificaciones] = useState(planificaciones);

  useEffect( () => {
    setPlanificaciones(planificaciones)
  },[planificaciones])
  
  return (
    //Las etiquetas vacias se llaman react fragment
    <>
      <Filtros />

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
