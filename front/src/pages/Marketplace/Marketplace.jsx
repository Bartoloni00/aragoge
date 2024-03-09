import { useEffect, useState } from "react";
import { getPlanifications } from "../../services/planificaciones.service.js";
import Planificaciones from "./Planificaciones.jsx";
import Loader from "../../components/Loader.jsx";
import Filtros from "./Filtros.jsx";

const Marketplace = () => {
  const [planificaciones, setPlanificaciones] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    console.log("Filters:", filters);
    getPlanifications(filters).then((data) => setPlanificaciones(data));
  }, [filters]);

  return planificaciones.length !== 0 ? (
    <>
      <Filtros setFilters={setFilters} />
      <Planificaciones planificaciones={planificaciones} />
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};

export default Marketplace;
