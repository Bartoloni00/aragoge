import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../../services/auth.service';
import Logo from "../../assets/favicon/apple-icon-120x120.png";

const Login = () => {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        console.log(`Email: ${email} | Password: ${password}`)
        login({email, password})
        .then((usuario) => {
            // TODO: Fixear el bug de a@algo (se rompe el codigo)
            // TODO: recibir el rol del usuario para la validación
            // console.log(`Rol del usuario: `, usuario.user.rol)
            localStorage.setItem("id", usuario.user._id)
            localStorage.setItem("token", usuario.token)
            navigate("/",{ replace: true })
        })
        .catch( err => setError(err.error))
    } 

  return (
    <>
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <div className="w-full max-w-md">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto" src={Logo} alt="Logo de Aragoge" loading='lazy' />
                    </div>
                    
                    <div className="flex items-center justify-center mt-6">
                        <Link to="" className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white" >
                            Iniciar Sesión
                        </Link>

                        <Link to="/Register"className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
                            Registrarse
                        </Link>
                    </div>

                    <form className='my-6 mx-auto' onSubmit={onSubmit}>
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

                        {/* Mensaje de error*/}
                        <span className='my-2 text-red-600 text-center block'>
                            {error} 
                        </span>

                        {/* Boton de acción*/}
                        <button type='submit' className="w-full mt-6 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Iniciar Sesión
                        </button>
                    </form>

                    <div className="mt-6">

                        <div className="mt-6 text-center ">
                            <Link to="/register" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                No tienes cuenta?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login;