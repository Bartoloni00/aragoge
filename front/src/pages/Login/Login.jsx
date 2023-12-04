import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service.js";
import Logo from "../../assets/favicon/apple-icon-120x120.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      login({ email, password })
        .then((usuario) => {
          localStorage.setItem("id", usuario.user._id);
          localStorage.setItem("token", usuario.token);
          navigate("/", { replace: true });
        })
        .catch((err) => setError(err.error));
    },
    [email, password, navigate, setError]
  );

  return (
    <>
      <section>
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <div className="w-full max-w-md bg-[#f2f2f2] p-6 rounded-lg">
            <div className="flex justify-center mx-auto">
              <img
                className="w-auto"
                src={Logo}
                alt="Logo de Aragoge"
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-center mt-6">
              <Link
                to="/login"
                className="w-1/3 pb-4 font-Roboto text-center text-base text-gray-800 capitalize border-b-2 border-[#DA1641]"
              >
                Iniciar Sesión
              </Link>

              <Link
                to="/Register"
                className="w-1/3 pb-4 font-Roboto text-center text-base text-gray-500 capitalize border-b dark:border-gray-400"
              >
                Registrarse
              </Link>
            </div>

            <form className="my-6 mx-auto" onSubmit={onSubmit}>
              {/* Email del Usuario */}
              <div className="flex flex-col my-5">
                <label htmlFor="email" className="text-sm font-Roboto">
                  Email:
                </label>
                <div className="flex flex-row items-center">
                  <span className="bg-white p-2 rounded-s-lg shadow-md">
                    <i className="fa-solid fa-envelope fa-lg"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChangeEmail}
                    value={email}
                    className="bg-white p-2 mx-[2px] shadow-md w-full"
                    required
                  />
                </div>
              </div>

              {/* Contraseña del Usuario */}
              <div className="flex flex-col my-5">
                <label htmlFor="password" className="text-sm font-Roboto">
                  Password:
                </label>
                <div className="flex flex-row items-center">
                  <span className="bg-white p-2 rounded-s-lg shadow-md">
                    <i className="fa-solid fa-lock fa-lg"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChangePassword}
                    value={password}
                    className="bg-white p-2 mx-[2px] shadow-md w-full"
                    required
                  />
                </div>
              </div>

              {/* Mensaje de error*/}
              <span className="my-2 text-[#DA1641] text-center block">
                {error}
              </span>

              {/* Botón de acción*/}
              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 text-xl font-Roboto text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/register"
                className="text-lg font-Roboto text-[#DA1641] hover:underline"
              >
                No tienes cuenta?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
