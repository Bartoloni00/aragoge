import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../services/auth.service"
import Logo from "../../assets/favicon/apple-icon-120x120.png";
export default function Register(){
    const navigate = useNavigate()
  
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("");
    const [image, setImage] = useState({ src: 'https://picsum.photos/150/150' });
    const [error, setError] = useState("");

    const onChangeName = (e) =>{
        setName(e.target.value)
    }

    const onChangeLastname = (e) =>{
        setLastname(e.target.value)
    }

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onChangeRol = (e) =>{
        setRol(e.target.value)
    }

    const onChangeImage = (e) => {
        setImage({ src: 'https://picsum.photos/150/150' });
      };

    const onSubmit = (e) =>{
        e.preventDefault()

        createNewUser({
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            image: image.src,
            alt: `Imagen de perfil de: ${name} ${lastname}`,
            rol: rol
        })
        .then((res) => {
            console.log(res)
            navigate("/login",{ replace: true })
        })
        .catch( err => setError(err.error))
    } 
  
  return (
    <>
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <div className="w-full max-w-md">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto" src={Logo} alt="Logo de Aragoge" />
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <a
                            href="/login"
                            className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
                            >
                            Perfil
                        </a>

                        <a href="/Register" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                            Registrarse
                        </a>
                    </div>

                    <form className='my-6 mx-auto' onSubmit={onSubmit} encType="multipart/form-data">
                        {/* Nombre del Usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="name" className="text-sm">Nombre:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-user fa-lg"></i>
                                </span>
                                <input type="text" name="name" id="name" onChange={onChangeName} value={name} className="bg-white p-2 mx-[2px] shadow-md w-full" required/>
                            </div>
                        </div>

                        {/* Apellido del Usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="lastname" className="text-sm">Apellido:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-user fa-lg"></i>
                                </span>
                                <input type="text" name="lastname" id="lastname" onChange={onChangeLastname} value={lastname} className="bg-white p-2 mx-[2px] shadow-md w-full" required/>
                            </div>
                        </div>

                        {/* Email del Usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="email" className="text-sm">Email:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-envelope fa-lg"></i>
                                </span>
                                <input type="email" name="email" id="email" onChange={onChangeEmail} value={email} className="bg-white p-2 mx-[2px] shadow-md w-full" required/>
                            </div>
                        </div>

                        {/* Contraseña del Usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="password" className="text-sm">Password:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-lock fa-lg"></i>
                                </span>
                                <input type="password" name="password" id="password" onChange={onChangePassword} value={password} className="bg-white p-2 mx-[2px] shadow-md w-full" required/>
                            </div>
                        </div>

                        {/* Rol del usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="rol">Rol:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-id-card fa-lg"></i>
                                </span>
                                <select name="rol" id="rol" onChange={onChangeRol} value={rol} className="bg-white p-2 mx-[2px] shadow-md w-full">
                                    <option value="Atleta" defaultValue>Atleta</option>
                                    <option value="Entrenador">Entrenador</option>
                                    <option value="Terapeuta">Terapeuta</option>
                                    <option value="Nutricionista">Nutricionista</option>
                                </select>
                            </div>
                        </div>

                        {/* Imagen del usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="image">Imagen:</label>
                            <div className="flex flex-row items-center mt-2">
                            <img
                                src={image.src ? image.src : '../../public/img/default.webp'}
                                alt={`Foto de Perfil del Usuario: ${name} ${lastname}`}
                                className="h-16 w-16 object-cover rounded-full"
                                />
                                <input type="file" name="image" id="image" onChange={onChangeImage} className="bg-white p-[7px] mx-[2px] shadow-md w-full file:bg-white file:border-none file text-transparent cursor-pointer"/>
                            </div>
                        </div>


                        {/* Mensaje de error*/}
                        <span className='my-2 text-red-600 text-center block'>
                            {error} 
                        </span>

                        {/* Boton de acción*/}
                        <button type='submit' className="w-full mt-6 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Registrarse
                        </button>
                    </form>

                    <div className="mt-6">

                        <div className="mt-6 text-center ">
                            <a href="/register" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                No tienes cuenta?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
