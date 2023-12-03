import { useEffect, useState } from "react";
import { getPlanifications } from "../../services/planificaciones.service.js";
import Planificaciones from "./Planificaciones.jsx";
import Loader from "../../components/Loader.jsx";

const Marketplace = () => {
  const [planificaciones, setPlanificaciones] = useState([]);

  useEffect(() => {
    getPlanifications().then((datos) => setPlanificaciones(datos));
  }, []);

  useEffect(() => {}, [planificaciones]);

  return planificaciones.length !== 0 ? (
    <>
      <Planificaciones planificaciones={planificaciones} />
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};

export default Marketplace;
