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
    <section>
      <h1 className="text-center font-Cardo text-3xl font-normal py-5">Detalle de la planificación</h1>
      <div className="mx-auto bg-white border border-[#DA1641] rounded-xl shadow-md shadow-[#DA1641] max-w-[920px] overflow-hidden">
        <div className="flex flex-row items-center justify-around">
          <div className="m-10 overflow-hidden w-1/2">
            <img className="object-cover rounded-lg" src={planning.image} alt={planning.alt} width={400} height={255} />
          </div>
          <div className="px-4 py-4 flex flex-col w-1/2 text-center">
            <h2 className="font-Cardo font-bold text-3xl capitalize">{planning.title}</h2>
            <p className="font-Roboto font-normal text-2xl">Profesional: {planning.profesional.name} {planning.profesional.lastname}</p>
            <p className="mt-2 font-Roboto text-sm font-normal capitalize">Categoria: {planning.category}</p>
            <div className="flex flex-row items-center justify-around my-4">
              <div>
                <p className="font-Roboto font-normal text-sm"><i className="fa fa-users" aria-hidden="true"></i> +{planning.subscribers} Subscribers</p>
              </div>
              <div className="text-[#DA1641]">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="my-4">
              <p className="font-Roboto font-normal text-sm">{planning.description}</p>
            </div>
              <p className="font-Roboto font-normal text-sm">${planning.price} / Mes</p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <>
        <Loader />
    </>
  )
}

export default PlanificacionesDetalle;