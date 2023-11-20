import { useState } from "react";
import PlanificacionesCard from "./PlanificacionesCard.jsx";
import { PropTypes } from "prop-types";
//Planificaciones === ProductList
//PlanificacionesCardItem === ProductListItem

const Planificaciones = ({planificaciones}) => {
  const [Planificaciones, setPlanificaciones] = useState(planificaciones);

  return (
    //Las etiquetas vacias se llaman react fragment
    <>
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

Planificaciones.propTypes = {
  planificaciones: PropTypes.array.isRequired,
};

export default Planificaciones;
