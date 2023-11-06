import { Link } from "react-router-dom";
import Logo from "../assets/favicon/apple-icon-60x60.png";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ARAGOGE</h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-400 hover:text-white">Sobre Nosotros</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Servicios</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Contactanos</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">LEGAL</h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-400 hover:text-white">Condiciones</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Privacidad</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Defensa al consumidor</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Opciones de pago</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SOCIO</h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-400 hover:text-white">Atencion al socio</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Solicitud de Baja</Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white">Arrepentimiento</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={Logo} alt="Logo de Aragoge" loading="lazy" />
            <span className="ml-3 text-xl">Aragoge</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2023 Aragoge —
            <a href="#" className="text-gray-500 ml-1">@Aragoge</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="#" className="text-gray-400">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-400">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-400">
              <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-400">
              <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer