import {usePerfil} from "../../context/SessionContext"
const Perfil = () => {
    const perfil = usePerfil();
    return (
    <>
        <section className="mx-auto my-8">
            <h2 className="text-center text-lg py-5">{perfil.name} {perfil.lastname}</h2>

            <form className="mx-auto flex flex-col items-center">
                {/* Nombre del usuario */}
                <div className="flex flex-col my-5 min-w-[400px]">
                    <label htmlFor="name" className="text-sm">Nombre:</label>
                    <div className="flex flex-row items-center">
                        <span className="bg-white p-2 rounded-s-lg shadow-md">
                            <i className="fa-solid fa-user fa-lg"></i>
                        </span>
                        <input type="text" name="name" id="name" defaultValue={perfil.name} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                        <button type="submit" className="bg-white p-2 rounded-r-lg shadow-md">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                
                {/* Apellido del usuario */}
                <div className="flex flex-col my-5 min-w-[400px]">
                    <label htmlFor="lastname">Apellido:</label>
                    <div className="flex flex-row items-center">
                        <span className="bg-white p-2 rounded-s-lg shadow-md">
                            <i className="fa-solid fa-user  fa-lg"></i>
                        </span>
                        <input type="text" name="lastname" id="lastname" defaultValue={perfil.lastname} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                        <button type="submit" className="bg-white p-2 rounded-r-lg shadow-md">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                {/* Email del usuario */}
                <div className="flex flex-col my-5 min-w-[400px]">
                    <label htmlFor="email">Email:</label>
                    <div className="flex flex-row items-center">
                        <span className="bg-white p-2 rounded-s-lg shadow-md">
                            <i className="fa-solid fa-envelope fa-lg"></i>
                        </span>
                        <input type="text" name="email" id="email" defaultValue={perfil.email} className="bg-white p-2 mx-[2px] shadow-md w-full"/>
                        <button type="submit" className="bg-white p-2 rounded-r-lg shadow-md">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                {/* Rol del usuario */}
                <div className="flex flex-col my-5 min-w-[400px]">
                    <label htmlFor="rol">Rol:</label>
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
                        <button type="submit" className="bg-white p-2 rounded-r-lg shadow-md">
                            <i className="fa fa-paper-plane fa-lg" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                {/* Imagen del usuario */}
                <div className="flex flex-col my-5 min-w-[400px]">
                    <label htmlFor="image">Imagen:</label>
                    <div className="flex flex-row items-center">
                        <span className="bg-white p-2 rounded-s-lg shadow-md">
                            <i className="fa-solid fa-camera-retro"></i>
                        </span>
                        <input type="file" name="image" id="image" className="bg-white p-[7px] mx-[2px] shadow-md w-full file:bg-white file:border-none file text-transparent cursor-pointer"/>
                        <button type="submit" className="bg-white p-2 rounded-r-lg shadow-md">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                
            </form>

        </section>
    </>
  )
}

export default Perfil;