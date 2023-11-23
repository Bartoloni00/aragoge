import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/auth.service';
import { usePerfil } from '../context/SessionContext';

const Navbar = () => {
  const perfil = usePerfil();
  const NavigationLink = ({ item, closeMenu }) => (
    <Link
      to={item.ruta}
      className=" hover:bg-gray-800 hover:text-white block rounded-md px-3 py-2 text-base font-medium "
      aria-current={item.current ? 'page' : undefined}
      onClick={closeMenu}
    >
      {item.name}
    </Link>
  );
  
  const navigation = [
    { name: 'Home', ruta: '/' },
    { name: 'Marketplace', ruta: '/marketplace' },
    { name: 'Contact', ruta: '/contact' },
    { name: 'Mis Planificaciones', ruta: '/profesionales' },
    { name: 'Crear', ruta: '/profesionales/create' },
    { name: 'Admin', ruta: '/admin' },
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
    <nav className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 w-[100%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                ) : (
                  <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <NavigationLink key={item.name} item={item} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
              ))}
              
            </div>
          </div>

          {/* Nuevo elemento en el menú - Dropdown con imagen redonda para escritorio */}
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md flex items-center focus:outline-none"
            >
              <img
                className="h-8 w-8 rounded-full"
                src={perfil.image ? perfil.image : '../../public/img/default.webp'}
                alt={perfil.alt ? perfil.alt : 'Usuario no Logueado'}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                <Link
                  to={"/perfil"}
                  className="px-4 py-2 w-full block text-sm bg-white hover:bg-slate-200"
                  onClick={closeMenuAndDropdown}
                >
                  Perfil
                </Link>
                <Link
                  to={"/login"}
                  className="px-4 py-2 w-full block text-sm bg-white hover:bg-slate-200"
                  onClick={closeMenuAndDropdown}
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="px-4 py-2 w-full block text-sm bg-white hover:bg-slate-200"
                  onClick={closeMenuAndDropdown}
                >
                  Register
                </Link>
                <Link 
                  to={"/"}
                  className="px-4 py-2 w-full block text-sm bg-white hover:bg-slate-200"
                  onClick={logout}
                  >
                  Cerrar Sesión
                </Link>
              </div>
            )}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <NavigationLink key={item.name} item={item} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;