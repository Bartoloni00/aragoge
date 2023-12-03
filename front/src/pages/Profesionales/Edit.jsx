import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlanificationsByID } from "../../services/planificaciones.service.js";
import { editPlanification } from "../../services/planificaciones.service.js";
const Edit = () => {
  const navigate = useNavigate();
  const [planning, setPlanning] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPlanificationsByID(id).then((data) => setPlanning(data));
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState({ src: "https://picsum.photos/150/150" });
  const [category, setCategory] = useState();
  const [error, setError] = useState("");

  const onChangeTitle = useCallback(
    (e) => {
      if (e.target.value.trim() !== "") {
        setError("");
      } else {
        setError("El campo no puede estar vacío");
      }
      setTitle(e.target.value);
    },
    [setTitle, setError]
  );

  const onChangeDescription = useCallback(
    (e) => {
      if (e.target.value.trim() !== "") {
        setError("");
      } else {
        setError("El campo no puede estar vacío");
      }
      setDescription(e.target.value);
    },
    [setDescription, setError]
  );

  const onChangePrice = useCallback(
    (e) => {
      if (e.target.value.trim() !== "") {
        setError("");
      } else {
        setError("El campo no puede estar vacío");
      }
      setPrice(e.target.value);
    },
    [setPrice, setError]
  );

  const onChangeImage = (e) => {
    setImage({ src: "https://picsum.photos/150/150" });
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    const updatedPlanificacion = {
      _id: planning._id,
      title: title !== "" ? title : planning.title,
      description: description !== "" ? description : planning.description,
      price: price !== 0 ? parseInt(price) : planning.price,
      subscribers: planning.subscribers,
      image:
        image.src !== "https://picsum.photos/150/150"
          ? image.src
          : planning.image,
      alt:
        title !== ""
          ? `Publicación modificada: ${title}`
          : `Publicación existente: ${planning.title}`,
      category: category !== "" ? category : planning.category,
    };

    editPlanification(updatedPlanificacion)
      .then((res) => {
        console.log(res);
        navigate("/profesionales", { replace: true });
      })
      .catch(
        (err) => {
          setError(err.error);
          console.log(err);
        },
        [title, description, price, setError]
      );
  });

  return (
    <section>
      <div className="px-5 py-4 rounded-lg bg-[#f2f2f2] mx-auto max-w-[600px]">
        <h1 className="text-center font-Cardo text-3xl font-normal py-5">
          Editar Planificación
        </h1>

        <form
          className="mx-auto flex flex-col items-center px-5"
          onSubmit={onSubmit}
          encType="multipart/form-data"
        >
          {/* Titulo de la Planificación */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="title" className="font-Roboto text-sm">
              Titulo:
            </label>
            <div className="flex flex-row items-center">
              <span className="bg-white p-2 rounded-s-lg shadow-md">
                <i className="fa-solid fa-user fa-lg"></i>
              </span>
              <input
                type="text"
                name="title"
                id="title"
                onChange={onChangeTitle}
                defaultValue={planning.title}
                className="bg-white p-2 mx-[2px] shadow-md w-full"
              />
            </div>
          </div>

          {/* Descripción de la planificación */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="description" className="font-Roboto text-sm">
              Descripción:
            </label>
            <div className="flex flex-row items-center">
              <span className="bg-white p-2 rounded-s-lg shadow-md">
                <i className="fa-solid fa-user fa-lg"></i>
              </span>
              <input
                type="text"
                name="description"
                id="description"
                onChange={onChangeDescription}
                defaultValue={planning.description}
                className="bg-white p-2 mx-[2px] shadow-md w-full"
              />
            </div>
          </div>

          {/* Precio de la planificación */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="price" className="font-Roboto text-sm">
              Precio:
            </label>
            <div className="flex flex-row items-center">
              <span className="bg-white p-2 rounded-s-lg shadow-md">
                <i className="fa-solid fa-dollar-sign fa-lg"></i>
              </span>
              <input
                type="number"
                name="price"
                id="price"
                onChange={onChangePrice}
                defaultValue={planning.price}
                className="bg-white p-2 mx-[2px] shadow-md w-full"
              />
            </div>
          </div>

          {/* Categoria de la planificación */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="category" className="font-Roboto text-sm">
              Categoria:
            </label>
            <div className="flex flex-row items-center">
              <span className="bg-white p-2 rounded-s-lg shadow-md">
                <i className="fa-solid fa-id-card fa-lg"></i>
              </span>
              <select
                name="category"
                id="category"
                onChange={onChangeCategory}
                defaultValue={planning.category}
                className="bg-white p-2 mx-[2px] shadow-md w-full"
              >
                <option value="crossfit">Crossfit</option>
                <option value="running">Running</option>
                <option value="halterofilia">Halterofilia</option>
                <option value="bodybuilding">BodyBuilding</option>
                <option value="powerlifting">PowerLifting</option>
              </select>
            </div>
          </div>

          {/* Imagen de la planificación */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="image" className="font-Roboto text-sm">
              Imagen de la planificación:
            </label>
            <div className="flex flex-row items-center mt-2">
              <img
                src={image.src ? image.src : "../../public/img/default.webp"}
                alt={`Publicación creada: ${title}`}
                className="h-16 w-16 object-cover rounded-full"
              />
              <input
                type="file"
                name="image"
                id="image"
                onChange={onChangeImage}
                className="bg-white p-[7px] mx-[2px] shadow-md w-full file:bg-white file:cursor-pointer file:border-none file text-transparent cursor-pointer"
              />
            </div>
          </div>

          {/* Mensaje de error*/}
          <span className="my-2 text-red-600 text-center block">{error}</span>

          <div className="p-2 w-full mx-auto text-center">
            <button
              type="submit"
              className="flex mx-auto mt-6 px-10 py-3 text-xl font-Roboto text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Edit;
