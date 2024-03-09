import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader.jsx";
import { getPlanificationsByID } from "../../services/planificaciones.service.js";
import { deletePlanification } from "../../services/planificaciones.service.js";
const Delete = () => {
  const navigate = useNavigate();
  const [planning, setPlanning] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPlanificationsByID(id).then((data) => setPlanning(data));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    deletePlanification(id)
      .then((res) => {
        console.log(res);
        navigate("/profesionales", { replace: true });
      })
      .catch((err) => {
        console.log(err.error);
        console.log(err);
      });
  };
  return planning.profesional !== undefined ? (
    <section>
      <h1 className="text-center font-Cardo text-3xl font-normal py-5">
        Borrar planificación
      </h1>
      <div className="mx-auto bg-white border border-[#DA1641] rounded-xl shadow-md shadow-[#DA1641] max-w-[920px] overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="m-10 overflow-hidden w-full md:w-1/2">
            <img
              className="object-cover rounded-lg w-full"
              src={planning.image}
              alt={planning.alt}
              width={400}
              height={255}
            />
          </div>
          <div className="px-4 py-4 flex flex-col w-full md:w-1/2 text-center">
            <h2 className="font-Cardo font-bold text-3xl capitalize">
              {planning.title}
            </h2>
            <p className="font-Roboto font-normal text-2xl">
              Profesional: {planning.profesional.name}{" "}
              {planning.profesional.lastname}
            </p>
            <p className="mt-2 font-Roboto text-sm font-normal capitalize">
              Categoria: {planning.category}
            </p>
            <div className="flex flex-row items-center justify-around my-4">
              <div>
                <p className="font-Roboto font-normal text-sm">
                  <i className="fa fa-users" aria-hidden="true"></i> +
                  {planning.subscribers} Subscribers
                </p>
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
              <p className="font-Roboto font-normal text-sm">
                {planning.description}
              </p>
            </div>
            <p className="font-Roboto font-normal text-sm">
              ${planning.price} / Mes
            </p>
          </div>
        </div>
      </div>

      <form
        className="mx-auto flex flex-col items-center mt-8"
        onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <button
          type="submit"
          className="mt-6 w-[250px] py-3 text-xl font-Roboto text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
        >
          Borrar
        </button>
      </form>
    </section>
  ) : (
    <>
      <Loader />
    </>
  );
};

export default Delete;
