import { Link } from "react-router-dom";

const PlanificacionesCard = ({ planificaciones }) => {
  const { _id, category, title, profesional, image, alt, subscribers, price } =
    planificaciones;
  const { id, name, lastname, especialiti } = profesional;
  return (
    <>
      <div className="flex flex-col bg-white border rounded-lg overflow-hidden shadow-md min-h-[400px]">
        <div className="w-full">
          <img src={image} alt={alt} width={400} height={225} />
        </div>
        <div className="p-3">
          <div className="flex flex-row items-center justify-between my-4">
            <div>
              <span className="text-sm font-Roboto text-white font-normal bg-[#DA1641] px-2 py-1 rounded-full">
                {category}
              </span>
            </div>
            <div className="text-[#DA1641]">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
          </div>
          <div>
            <h3 className="font-Cardo font-normal text-xl capitalize mt-3">
              {title}
            </h3>
            <h4 className="font-Cardo font-normal text-base capitalize">
              {name} {lastname}
            </h4>
          </div>
          <div className="flex flex-row items-center justify-between mt-5">
            <div>
              <p className="font-Roboto font-normal text-sm">
                <i className="fa fa-users" aria-hidden="true"></i>{" "}
                <span>+{subscribers}</span> subscribers
              </p>
            </div>
            <div>
              <p className="font-Roboto font-normal text-sm">
                <span>${price}</span> / Mes
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-5 w-full">
          <Link
            to={`/profesionales/edit/${_id}`}
            className="mt-6 px-6 py-2 w-[250px] text-xl font-Roboto text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
          >
            Editar Planificación
          </Link>
          <Link
            to={`/profesionales/delete/${_id}`}
            className="mt-6 px-6 py-2 w-[250px] text-xl font-Roboto text-center tracking-wide text-[#DA1641] capitalize transition-colors duration-300 transform border border-[#DA1641] rounded-lg"
          >
            Borrar Planificación
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlanificacionesCard;
