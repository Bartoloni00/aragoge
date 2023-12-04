import { useCallback, useState } from "react";
import { usePerfil } from "../../context/SessionContext.jsx";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../../services/auth.service.js";
useNavigate;
const Perfil = () => {
  const perfil = usePerfil();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState({ src: "https://picsum.photos/150/150" });
  const [rol, setRol] = useState("");
  const [error, setError] = useState("");

  const onChangeName = useCallback(
    (e) => {
      if (e.target.value.trim() !== "") {
        setError("");
      } else {
        setError("El nombre no puede estar vacío");
      }
      setName(e.target.value);
    },
    [setName, setError]
  );

  const onChangeLastname = useCallback(
    (e) => {
      if (e.target.value.trim() !== "") {
        setError("");
      } else {
        setError("El apellido no puede estar vacío");
      }
      setLastname(e.target.value);
    },
    [setLastname, setError]
  );

  const onChangeEmail = useCallback(
    (e) => {
      if (e.target.value.trim() !== "") {
        setError("");
      } else {
        setError("El email no puede estar vacío");
      }
      setEmail(e.target.value);
    },
    [setEmail, setError]
  );

  const onChangeRol = (e) => {
    setRol(e.target.value);
  };

  const onChangeImage = (e) => {
    setImage({ src: "https://picsum.photos/150/150" });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const updateProfile = {
      id: perfil._id,
      name: name !== "" ? name : perfil.name,
      lastname: lastname !== "" ? lastname : perfil.lastname,
      email: email !== "" ? email : perfil.email,
      image: image.src,
      alt: `Foto de perfil del atleta: ${perfil.name} ${perfil.lastname}`,
      rol: rol !== "" ? rol.toLowerCase() : perfil.rol,
    };

    editProfile(updateProfile)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setError(err.error));
  };

  return (
    <section>
      <div className="px-5 py-4 rounded-lg bg-[#f2f2f2] mx-auto max-w-[600px]">
        <h1 className="text-center font-Cardo text-3xl font-normal py-5">
          Mi Perfil
        </h1>

        <form
          className="mx-auto flex flex-col items-center px-5"
          onSubmit={onSubmit}
          encType="multipart/form-data"
        >
          {/* Nombre del usuario */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="name" className="font-Roboto text-sm">
              Nombre:
            </label>
            <div className="flex flex-row items-center">
              <span className="bg-white p-2 rounded-s-lg shadow-md">
                <i className="fa-solid fa-user fa-lg"></i>
              </span>
              <input
                type="text"
                name="name"
                id="name"
                onChange={onChangeName}
                defaultValue={perfil.name}
                className="bg-white p-2 mx-[2px] shadow-md w-full"
              />
            </div>
          </div>

          {/* Apellido del usuario */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="lastname" className="font-Roboto text-sm">
              Apellido:
            </label>
            <div className="flex flex-row items-center">
              <span className="bg-white p-2 rounded-s-lg shadow-md">
                <i className="fa-solid fa-user  fa-lg"></i>
              </span>
              <input
                type="text"
                name="lastname"
                id="lastname"
                onChange={onChangeLastname}
                defaultValue={perfil.lastname}
                className="bg-white p-2 mx-[2px] shadow-md w-full"
              />
            </div>
          </div>

          {/* Email del usuario */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="email" className="font-Roboto text-sm">
              Email:
            </label>
            <div className="flex flex-row items-center">
              <span className="bg-white p-2 rounded-s-lg shadow-md">
                <i className="fa-solid fa-envelope fa-lg"></i>
              </span>
              <input
                type="text"
                name="email"
                id="email"
                defaultValue={perfil.email}
                onChange={onChangeEmail}
                className="bg-white p-2 mx-[2px] shadow-md w-full"
              />
            </div>
          </div>

          {/* Rol del usuario */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="rol" className="font-Roboto text-sm">
              Rol:
            </label>
            <div className="flex flex-row items-center">
              <span className="bg-white p-2 rounded-s-lg shadow-md">
                <i className="fa-solid fa-id-card fa-lg"></i>
              </span>
              <select
                name="rol"
                id="rol"
                className="bg-white p-2 mx-[2px] shadow-md w-full"
                onChange={onChangeRol}
              >
                <option defaultValue="atleta">Atleta</option>
                <option defaultValue="profesional">Profesional</option>
              </select>
            </div>
          </div>

          {/* Imagen del usuario */}
          <div className="flex flex-col my-5 w-full">
            <label htmlFor="image" className="text-sm font-Roboto">
              Imagen:
            </label>
            <div className="flex flex-row items-center mt-2">
              <img
                src={image.src ? image.src : "../../public/img/default.webp"}
                alt={`Foto de Perfil del Usuario: ${perfil.name} ${perfil.lastname}`}
                className="h-16 w-16 object-cover rounded-full"
              />
              <input
                type="file"
                name="image"
                id="image"
                className="bg-white p-[7px] mx-[2px] shadow-md w-full file:bg-white file:cursor-pointer file:border-none file text-transparent cursor-pointer"
              />
            </div>
          </div>

          <div className="p-2 w-full mx-auto text-center">
            <button
              type="submit"
              className="flex mx-auto mt-6 px-10 py-3 text-xl font-Roboto text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
            >
              Actualizar Datos
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Perfil;
