import React, { useState, useEffect } from "react";
import { usePerfil } from "../../context/SessionContext.jsx";
import { getPlanificationsByProfessionalID } from "../../services/planificaciones.service.js";
import Planificaciones from "./Planificaciones.jsx";
import Loader from "../../components/Loader.jsx";
import { Link } from "react-router-dom";

const HomePro = () => {
  const [planificaciones, setPlanificaciones] = useState([]);
  const [profesionalId, setProfesionalId] = useState(null);
  const perfil = usePerfil();
  useEffect(() => {
    if (perfil) {
      setProfesionalId(perfil._id);
    }
  }, [perfil]);

  useEffect(() => {
    if (profesionalId) {
      getPlanificationsByProfessionalID(profesionalId)
        .then((datos) => setPlanificaciones(datos))
        .catch((error) => {
          setPlanificaciones([]);
        });
    }
  }, [profesionalId]);

  return (
    <section className="container mx-auto mt-4">
      <h1 className="font-Cardo uppercase text-3xl text-center my-6">
        Mis Planificaciones
      </h1>
      <div className="flex flex-row justify-around items-center">
        <Link
          to={`/profesionales/profile`}
          className="ml-2 px-6 py-2 w-[250px] text-xl font-Roboto text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
        >
          Crear Perfil Publico
        </Link>
        <Link
          to={`/profesionales/profile/${perfil._id}`}
          className="ml-2 px-6 py-2 w-[250px] text-xl font-Roboto text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
        >
          Ver Perfil Publico
        </Link>
        <Link
          to={"/profesionales/create"}
          className="ml-2 px-6 py-2 w-[250px] text-xl font-Roboto text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
        >
          Crear Planificación
        </Link>
      </div>

      {planificaciones.length !== 0 ? (
        <div className="max-w-[1536px] mx-auto dark:border-gray-700 p-2 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            <Planificaciones planificaciones={planificaciones} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default HomePro;
