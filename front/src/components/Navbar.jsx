import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth.service.js";
import { usePerfil } from "../context/SessionContext.jsx";

const Navbar = () => {
  const perfil = usePerfil();
  const NavigationLink = ({ item, closeMenu }) => (
    <Link
      to={item.ruta}
      className=" hover:bg-negro hover:text-white block rounded-md px-3 py-2 font-Roboto font-normal text-base"
      aria-current={item.current ? "page" : undefined}
      onClick={closeMenu}
    >
      {item.name}
    </Link>
  );

  const navigation = [
    { name: "Inicio", ruta: "/" },
    { name: "Tienda", ruta: "/marketplace" },
    { name: "Contacto", ruta: "/contact" },
    { name: "Mis Planificaciones", ruta: "/profesionales" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); // Agregamos esto para cerrar el dropdown al cerrar el menú
  };

  const closeMenuAndDropdown = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="text-center text-neutral-400 bg-negro max-w-[1536px] mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-600 px-3 py-2 rounded-md"
            >
              <svg
                className="h-8 w-8 mt-2 text-center"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                    fill="#F2F2F2"
                  />
                ) : (
                  <path
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    fill="#F2F2F2"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <NavigationLink
                  key={item.name}
                  item={item}
                  isMenuOpen={isMenuOpen}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          </div>

          {/* Nuevo elemento en el menú - Dropdown con imagen redonda para escritorio */}
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="text-neutral-600 dark:text-neutral-200 rounded-md flex items-center focus:outline-none"
            >
              <img
                className="h-[50px] w-[50px] rounded-full"
                src="../../public/icon/default-user.webp"
                alt={perfil.alt ? perfil.alt : "Usuario no Logueado"}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                {perfil.rol !== undefined ? (
                  <div>
                    <Link
                      to={"/perfil"}
                      className="px-4 py-2 w-full block font-Roboto font-normal text-base bg-white text-black hover:text-white transition-colors hover:bg-negro"
                      onClick={closeMenuAndDropdown}
                    >
                      Mi Perfil
                    </Link>
                    <Link
                      to={"/login"}
                      className="px-4 py-2 w-full block font-Roboto font-normal text-base bg-white text-black hover:text-white transition-colors hover:bg-negro"
                      onClick={logout}
                    >
                      Cerrar Sesión
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link
                      to={"/login"}
                      className="px-4 py-2 w-full block font-Roboto font-normal text-base bg-white text-black hover:text-white transition-colors hover:bg-negro"
                      onClick={closeMenuAndDropdown}
                    >
                      Iniciar Sesión
                    </Link>
                    <Link
                      to={"/register"}
                      className="px-4 py-2 w-full block font-Roboto font-normal text-base bg-white text-black hover:text-white transition-colors hover:bg-negro"
                      onClick={closeMenuAndDropdown}
                    >
                      Registrarme
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <NavigationLink
                  key={item.name}
                  item={item}
                  isMenuOpen={isMenuOpen}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
