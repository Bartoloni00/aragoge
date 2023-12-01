import { usePerfil } from "../../context/SessionContext.jsx";
const Perfil = () => {
    
    const perfil = usePerfil();

    return (
    <section>
        <div className="px-5 py-4 rounded-lg bg-[#f2f2f2] mx-auto max-w-[600px]">
            <h1 className="text-center font-Cardo text-3xl font-normal py-5">Mi Perfil</h1>

            <form className="mx-auto flex flex-col items-center px-5" encType="multipart/form-data">
                {/* Nombre del usuario */}
                <div className="flex flex-col my-5 w-full">
                    <label htmlFor="name" className="font-Roboto text-sm">Nombre:</label>
                    <div className="flex flex-row items-center">
                        <span className="bg-white p-2 rounded-s-lg shadow-md">
                            <i className="fa-solid fa-user fa-lg"></i>
                        </span>
                        <input type="text" name="name" id="name" defaultValue={perfil.name} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                    </div>
                </div>
                
                {/* Apellido del usuario */}
                <div className="flex flex-col my-5 w-full">
                    <label htmlFor="lastname" className="font-Roboto text-sm">Apellido:</label>
                    <div className="flex flex-row items-center">
                        <span className="bg-white p-2 rounded-s-lg shadow-md">
                            <i className="fa-solid fa-user  fa-lg"></i>
                        </span>
                        <input type="text" name="lastname" id="lastname" defaultValue={perfil.lastname} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                    </div>
                </div>

                {/* Email del usuario */}
                <div className="flex flex-col my-5 w-full">
                    <label htmlFor="email" className="font-Roboto text-sm">Email:</label>
                    <div className="flex flex-row items-center">
                        <span className="bg-white p-2 rounded-s-lg shadow-md">
                            <i className="fa-solid fa-envelope fa-lg"></i>
                        </span>
                        <input type="text" name="email" id="email" defaultValue={perfil.email} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                    </div>
                </div>

                {/* Rol del usuario */}
                <div className="flex flex-col my-5 w-full">
                    <label htmlFor="rol" className="font-Roboto text-sm">Rol:</label>
                    <div className="flex flex-row items-center">
                        <span className="bg-white p-2 rounded-s-lg shadow-md">
                            <i className="fa-solid fa-id-card fa-lg"></i>
                        </span>
                        <select name="rol" id="rol" className="bg-white p-2 mx-[2px] shadow-md w-full">
                            <optgroup label="Comprador">
                                <option defaultValue={perfil.rol}>{perfil.rol}</option>
                            </optgroup>
                            <optgroup label="Vendedor">
                                <option defaultValue="Entrenador">Entrenador</option>
                                <option defaultValue="Terapeuta">Terapeuta</option>
                                <option defaultValue="Nutricionista">Nutricionista</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                {/* Imagen del usuario */}
                <div className="flex flex-col my-5 w-full">
                    <label htmlFor="image" className='text-sm font-Roboto'>Imagen:</label>
                    <div className="flex flex-row items-center mt-2">
                    {/* <img
                        src={image.src ? image.src : '../../public/img/default.webp'}
                        alt={`Foto de Perfil del Usuario: ${perfil.name} ${perfil.lastname}`}
                        className="h-16 w-16 object-cover rounded-full"
                        /> */}
                        <input type="file" name="image" id="image" className="bg-white p-[7px] mx-[2px] shadow-md w-full file:bg-white file:cursor-pointer file:border-none file text-transparent cursor-pointer"/>
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
  )
}

export default Perfil;