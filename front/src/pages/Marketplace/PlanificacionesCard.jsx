import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const PlanificacionesCard = ({ planificaciones }) => {
  // Desestructura el objeto que se paso por las props
  const { _id, category, title, profesional, image, alt, subscribers, price } =
    planificaciones;
  const { id, name, lastname, especialiti } = profesional;
  return (
    <>
      <Link to={`${_id}`} id={_id}>
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
                  <span>+{subscribers}</span> Subscriptores
                </p>
              </div>
              <div>
                <p className="font-Roboto font-normal text-sm">
                  <span>${price}</span> / Mes
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PlanificacionesCard;
