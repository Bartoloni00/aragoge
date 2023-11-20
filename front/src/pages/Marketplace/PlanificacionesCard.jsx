import { Link } from "react-router-dom";
import {PropTypes} from "prop-types";
//Planificaciones === ProductList
//PlanificacionesDetalle === ProductListItem

const PlanificacionesCard = ({planificaciones}) => {
  // Desestructura el objeto que se paso por las props
  const {_id, category, title, profesional, image, alt, subscribers, price} = planificaciones;
  const {id, name, lastname, especialiti} = profesional;
  return (
      <>
        <Link to={`${_id}`} id={_id}>
            <div className='flex flex-col bg-white border rounded-lg overflow-hidden shadow-md min-h-[450px]'>
                <div className='w-full min-h-[225px] h-auto bg-red-50 '>
                    <img src={image} alt={alt} width={400} height={225} />
                </div>
                <div className='p-3'>
                    <div>
                        <span className='text-xs bg-red-300 px-2 py-1 rounded-full'>{category}</span>
                        <h3 className='text-xl mt-3'>{title}</h3>
                        <h4 className='text-base'>{name} {lastname}</h4>
                    </div>
                    <div className='my-2'>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <p><i className="fa fa-users" aria-hidden="true"></i> <span>+{subscribers}</span> subscribers</p>
                        </div>
                        <div>
                            <p><span>${price}</span> / Mes</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
      </>
  )
}

export default PlanificacionesCard;