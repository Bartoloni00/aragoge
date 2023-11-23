import React, { useState, useEffect } from "react";
import { usePerfil } from "../../context/SessionContext";
import { getPlanificacionesByProfesionalID } from "../../services/planificaciones.service";
import Loader from "../../components/Loader";
import Planificaciones from "./Planificaciones";

const HomePro = () => {
  const [planificaciones, setPlanificaciones] = useState([]);
  const perfil = usePerfil();
  const [profesionalId, setProfesionalId] = useState(null);

  // Execute perfil.id to obtain the professional's ID
  useEffect(() => {
    if (perfil) {
      setProfesionalId(perfil._id);
    }
  }, [perfil]);

  // Fetch planificaciones based on the professional's ID
  useEffect(() => {
    if (profesionalId) {
      getPlanificacionesByProfesionalID(profesionalId)
        .then((datos) => setPlanificaciones(datos))
        .catch((error) => {
          console.error("Error fetching planificaciones:", error);
          setPlanificaciones([]); // Reset planificaciones to an empty array in case of error
        });
    }
  }, [profesionalId]);

  return planificaciones.length !== 0 ? (
    <Planificaciones planificaciones={planificaciones} />
  ) : (
    <Loader />
  );
};

export default HomePro;