import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPlanificacionesByID } from "../../services/planificaciones.service.js";
import { editPlanificacion } from "../../services/planificaciones.service.js";
const Edit = () => {
    const [ planning, setPlanning ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getPlanificacionesByID(id)
        .then((data) => setPlanning(data))
    }, [])

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState({ src: 'https://picsum.photos/150/150' });
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");

    const onChangeTitle = (e) =>{
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }
    
    const onChangeImage = (e) => {
        setImage({ src: 'https://picsum.photos/150/150' });
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
    
        const updatedPlanificacion = {
            _id: planning._id,
            title: title !== "" ? title : planning.title,
            description: description !== "" ? description : planning.description,
            price: price !== 0 ? parseInt(price) : planning.price,
            subscribers: planning.subscribers,
            image: image.src !== 'https://picsum.photos/150/150' ? image.src : planning.image,
            alt: title !== "" ? `Publicación modificada: ${title}` : `Publicación existente: ${planning.title}`,
            category: category !== "" ? category : planning.category
        };
    
        editPlanificacion(updatedPlanificacion)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            setError(err.error);
            console.log(err);
        });
    };
    

return (
    <section className="mx-auto my-8">
        <h2 className="text-center text-lg py-5">Editar Planificación</h2>

        <form className="mx-auto flex flex-col items-center" onSubmit={onSubmit} encType="multipart/form-data">
            {/* Titulo de la Planificación */}
            <div className="flex flex-col my-5 min-w-[400px]">
                <label htmlFor="title" className="text-sm">Titulo:</label>
                <div className="flex flex-row items-center">
                    <span className="bg-white p-2 rounded-s-lg shadow-md">
                        <i className="fa-solid fa-user fa-lg"></i>
                    </span>
                    <input type="text" name="title" id="title" onChange={onChangeTitle} defaultValue={planning.title} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                    <button type="submit" className="bg-white p-2 rounded-r-lg shadow-md">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            
            {/* Descripción de la planificación */}
            <div className="flex flex-col my-5 min-w-[400px]">
                <label htmlFor="description">Descripción:</label>
                <div className="flex flex-row items-center">
                    <span className="bg-white p-2 rounded-s-lg shadow-md">
                        <i className="fa-solid fa-user  fa-lg"></i>
                    </span>
                    <input type="text" name="description" id="description" onChange={onChangeDescription} defaultValue={planning.description} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                    <button type="submit" className="bg-white p-2 rounded-r-lg shadow-md">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            {/* Precio de la planificación */}
            <div className="flex flex-col my-5 min-w-[400px]">
                <label htmlFor="price">Precio:</label>
                <div className="flex flex-row items-center">
                    <span className="bg-white p-2 rounded-s-lg shadow-md">
                        <i className="fa-solid fa-envelope fa-lg"></i>
                    </span>
                    <input type="number" name="price" id="price" onChange={onChangePrice} defaultValue={planning.price} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                    <button type="submit" className="bg-white p-2 rounded-r-lg shadow-md">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            {/* Imagen de la planificación */}
            <div className="flex flex-col my-5">
                <label htmlFor="image">Imagen de la planificación:</label>
                <div className="flex flex-row items-center mt-2">
                <img
                    src={image.src ? image.src : '../../public/img/default.webp'}
                    alt={`Publicación creada: ${title}`}
                    className="h-16 w-16 object-cover rounded-full"
                    />
                    <input type="file" name="image" id="image" onChange={onChangeImage} className="bg-white p-[7px] mx-[2px] shadow-md w-full file:bg-white file:border-none file text-transparent cursor-pointer"/>
                </div>
            </div>

            {/* Categoria de la planificación */}
            <div className="flex flex-col my-5">
                <label htmlFor="category">Categoria:</label>
                <div className="flex flex-row items-center">
                    <span className="bg-white p-2 rounded-s-lg shadow-md">
                        <i className="fa-solid fa-id-card fa-lg"></i>
                    </span>
                    <select name="category" id="category" onChange={onChangeCategory} defaultValue={planning.category} className="bg-white p-2 mx-[2px] shadow-md w-full">
                        <option value="crossfit">Crossfit</option>
                        <option value="running">Running</option>
                        <option value="halterofilia">Halterofilia</option>
                        <option value="bodybuilding">BodyBuilding</option>
                        <option value="powerlifting">PowerLifting</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="px-4 py-2 bg-green-300 rounded-lg">Editar Planificación</button>
        </form>

    </section>
  )
}

export default Edit