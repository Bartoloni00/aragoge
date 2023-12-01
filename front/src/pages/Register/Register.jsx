import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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

    const onChangeImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setImage({ src: reader.result });
        }
    
        if (file) {
          reader.readAsDataURL(file);
        }
    }

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
        <section>
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <div className="w-full max-w-md bg-[#f2f2f2] p-6 rounded-lg">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto" src={Logo} alt="Logo de Aragoge" />
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <Link
                            to={"/login"}
                            className="w-1/3 pb-4 font-Roboto text-center text-base text-gray-500 capitalize border-b dark:border-gray-400"
                            >
                            Iniciar Sesión
                        </Link>

                        <Link to={"/Register"} className="w-1/3 pb-4 font-Roboto text-center text-base capitalize border-b-2 border-[#DA1641]">
                            Registrarse
                        </Link>
                    </div>

                    <form className='my-6 mx-auto' onSubmit={onSubmit} encType="multipart/form-data">
                        {/* Nombre del Usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="name" className="text-sm font-Roboto">Nombre:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-user fa-lg"></i>
                                </span>
                                <input type="text" name="name" id="name" onChange={onChangeName} value={name} className="bg-white p-2 mx-[2px] shadow-md w-full" required/>
                            </div>
                        </div>

                        {/* Apellido del Usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="lastname" className="text-sm font-Roboto">Apellido:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-user fa-lg"></i>
                                </span>
                                <input type="text" name="lastname" id="lastname" onChange={onChangeLastname} value={lastname} className="bg-white p-2 mx-[2px] shadow-md w-full" required/>
                            </div>
                        </div>

                        {/* Email del Usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="email" className="text-sm font-Roboto">Email:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-envelope fa-lg"></i>
                                </span>
                                <input type="email" name="email" id="email" onChange={onChangeEmail} value={email} className="bg-white p-2 mx-[2px] shadow-md w-full" required/>
                            </div>
                        </div>

                        {/* Contraseña del Usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="password" className="text-sm font-Roboto">Password:</label>
                            <div className="flex flex-row items-center">
                                <span className="bg-white p-2 rounded-s-lg shadow-md">
                                    <i className="fa-solid fa-lock fa-lg"></i>
                                </span>
                                <input type="password" name="password" id="password" onChange={onChangePassword} value={password} className="bg-white p-2 mx-[2px] shadow-md w-full" required/>
                            </div>
                        </div>

                        {/* Rol del usuario */}
                        <div className="flex flex-col my-5">
                            <label htmlFor="rol" className='text-sm font-Roboto'>Rol:</label>
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
                            <label htmlFor="image" className='text-sm font-Roboto'>Imagen:</label>
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
                        <button type='submit' className="w-full mt-6 px-6 py-3 text-xl font-Roboto text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg">
                            Registrarse
                        </button>
                    </form>


                    <div className="mt-6 text-center">
                        <Link to={"/login"} className="text-lg font-Roboto text-[#DA1641] hover:underline">
                            Tienes cuenta?
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}