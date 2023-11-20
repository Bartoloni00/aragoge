import { useEffect, useState } from "react";
import { getPlanificaciones } from "../../services/planificaciones.service.js";
import Planificaciones from "./Planificaciones.jsx";
import Loader from "../../components/Loader.jsx";
//Planificaciones === ProductList
//PlanificacionesCardItem === ProductListItem
//marketplace === productlistpage

const Marketplace = () => {
    const [planificaciones, setPlanificaciones] = useState([])

    useEffect(() => {
       getPlanificaciones()
      .then((datos) => setPlanificaciones(datos))
    }, []);
  
    useEffect(() => {}, [planificaciones])
  
    return planificaciones.length !== 0 ? (
      <>
        <Planificaciones planificaciones={planificaciones} />
      </>
    ) : (
      <>
        <Loader />
      </>
    )
  }

export default Marketplace