import React, { useState } from "react";
import PlanificacionesCard from "./PlanificacionesCard.jsx";
import { usePerfil } from "../../context/SessionContext.jsx";

const Planificaciones = ({ planificaciones }) => {
  const [planificacionesState, setPlanificacionesState] =
    useState(planificaciones);
  const perfil = usePerfil();

  return (
    <>
      {planificacionesState.map((planificacion) => (
        <PlanificacionesCard
          key={planificacion._id}
          planificaciones={planificacion}
        />
      ))}
    </>
  );
};

export default Planificaciones;
