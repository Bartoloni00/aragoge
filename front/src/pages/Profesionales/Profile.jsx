import { useNavigate } from "react-router-dom";
import { usePerfil } from "../../context/SessionContext.jsx";
import { createNewProfessional } from "../../services/auth.service.js";
import { useState, useCallback } from "react";
const Profile = () => {
  const perfil = usePerfil();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [especialiti, setEspecialiti] = useState("terapeuta");
  const [banner, setBanner] = useState({
    src: "https://picsum.photos/1536/864",
  });
  const [error, setError] = useState("");

  const onChangeDescription = useCallback(
    (e) => {
      if (e.target.value.trim() !== "") {
        setError("");
      } else {
        setError("La descripción no puede estar vacía");
      }
      setDescription(e.target.value);
    },
    [setDescription, setError]
  );

  const onChangeSynopsis = useCallback(
    (e) => {
      if (e.target.value.trim() !== "") {
        setError("");
      } else {
        setError("El resumen no puede estar vacío");
      }
      setSynopsis(e.target.value);
    },
    [setSynopsis, setError]
  );

  const onChangeEspecialiti = (e) => {
    setEspecialiti(e.target.value);
  };

  const onChangeBanner = (e) => {
    setBanner(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    createNewProfessional({
      description: description,
      synopsis: synopsis,
      banner: banner.src,
      alt: `Banner del ${especialiti}: ${perfil.name} ${perfil.lastname}`,
      subscribers: 1,
      user: perfil._id,
      especialiti: especialiti,
    })
      .then((res) => {
        console.log(res);
        navigate("/profesionales", { replace: true });
      })
      .catch((err) => setError(err.error));
  };

  return (
    <>
      <section>
        <div className="px-5 py-4 rounded-lg bg-[#f2f2f2] mx-auto max-w-[600px]">
          <h1 className="text-center font-Cardo text-3xl font-normal py-5">
            Crea tu perfil como profesional
          </h1>

          <form
            className="mx-auto flex flex-col items-center px-5"
            onSubmit={onSubmit}
            encType="multipart/form-data"
          >
            {/* Descripción del profesional */}
            <div className="flex flex-col my-5 w-full">
              <label htmlFor="description" className="font-Roboto text-sm">
                Descripción:
              </label>
              <div className="flex flex-row items-center">
                <span className="bg-white p-2 rounded-s-lg shadow-md">
                  <i className="fa-solid fa-font fa-lg"></i>
                </span>
                <input
                  type="text"
                  name="description"
                  id="description"
                  onChange={onChangeDescription}
                  value={description}
                  className="bg-white p-2 mx-[2px] shadow-md w-full"
                  required
                />
              </div>
            </div>

            {/* Synopsis del profesional */}
            <div className="flex flex-col my-5 w-full">
              <label htmlFor="synopsis" className="font-Roboto text-sm">
                Synopsis:
              </label>
              <div className="flex flex-row items-center">
                <span className="bg-white p-2 rounded-s-lg shadow-md">
                  <i className="fa-solid fa-font fa-lg"></i>
                </span>
                <input
                  type="text"
                  name="synopsis"
                  id="synopsis"
                  onChange={onChangeSynopsis}
                  value={synopsis}
                  className="bg-white p-2 mx-[2px] shadow-md w-full"
                  required
                />
              </div>
            </div>

            {/* Especialidad del profesional */}
            <div className="flex flex-col my-5 w-full">
              <label htmlFor="especialiti" className="font-Roboto text-sm">
                Especialidad:
              </label>
              <div className="flex flex-row items-center">
                <span className="bg-white p-2 rounded-s-lg shadow-md">
                  <i className="fa-solid fa-id-card fa-lg"></i>
                </span>
                <select
                  name="especialiti"
                  id="especialiti"
                  onChange={onChangeEspecialiti}
                  value={especialiti}
                  className="bg-white p-2 mx-[2px] shadow-md w-full"
                >
                  <option value="terapeuta">Terapeuta</option>
                  <option value="entrenador">Entrenador</option>
                  <option value="nutricionista">Nutricionista</option>
                </select>
              </div>
            </div>

            {/* Banner del profesional */}
            <div className="flex flex-col my-5 w-full">
              <label htmlFor="banner" className="text-sm font-Roboto">
                Banner publico:
              </label>
              <div className="flex flex-col items-center mt-2">
                <img
                  src={
                    banner.src
                      ? banner.src
                      : "../../public/background/banner-entrenador.png"
                  }
                  alt={`Foto de Perfil del Usuario: ${perfil.name} ${perfil.lastname}`}
                  className="w-[600px] h-[338px] object-cover"
                />
                <input
                  type="file"
                  name="banner"
                  id="banner"
                  onChange={onChangeBanner}
                  className="bg-white mt-2 p-[7px] mx-[2px] shadow-md w-full file:bg-white file:cursor-pointer file:border-none file text-transparent cursor-pointer"
                />
              </div>
            </div>

            {/* Mensaje de error*/}
            <span className="my-2 text-[#DA1641] text-center block">
              {error}
            </span>

            <div className="p-2 w-full mx-auto text-center">
              <button
                type="submit"
                className="flex mx-auto mt-6 px-10 py-3 text-xl font-Roboto text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
              >
                Crear mi perfil
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
