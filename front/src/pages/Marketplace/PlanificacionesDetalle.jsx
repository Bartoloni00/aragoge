import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPlanificacionesByID } from "../../services/planificaciones.service.js";
import Loader from "../../components/Loader.jsx";
const PlanificacionesDetalle = () => {
    const [ planning, setPlanning ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      getPlanificacionesByID(id)
      .then((data) => setPlanning(data))
    }, [])
    
  return planning.title !== undefined ? (
    <>
      <h2 className="text-center p-4 font-Roboto text-2xl">Detalle de la planificación</h2>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={planning.image} alt={planning.alt} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{planning._id}</div>
            <div className="block mt-1 text-lg leading-tight font-medium text-black">{planning.title}</div>
            <p className="mt-2 text-gray-500">{planning.description}</p>
            <div className="mt-4">
              <span className="text-gray-600">{planning.category}</span>
              <span className="ml-2 text-gray-400">|</span>
              <span className="ml-2 text-gray-600">{planning.subscribers}</span>
              <span className="ml-2 text-gray-400">|</span>
              <span className="ml-2 text-gray-600">{planning.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
        <Loader />
    </>
  )
}

export default PlanificacionesDetalle;