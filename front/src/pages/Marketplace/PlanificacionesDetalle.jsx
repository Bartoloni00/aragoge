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
        <div>Detalle de la planificación</div>
        <p>ID: {planning._id}</p>
        <p>Categoria: {planning.category}</p>
        <p>Titulo: {planning.title}</p>
        <p>Imagen:</p> <img src={planning.image} alt={planning.alt} />
        <p>Subscribidos: {planning.subscribers}</p>
        <p>Precio: ${planning.price}</p>
    </>
  ) : (
    <>
        <Loader />
    </>
  )
}

export default PlanificacionesDetalle;