import { Link } from "react-router-dom";
import logo from "../assets/favicon/aragoge.svg";
const Footer = () => {
  return (
    <footer className="text-gray-100 bg-negro body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-Cardo font-medium text-white tracking-widest text-sm mb-3">
              ARAGOGE
            </h2>
            <ul className="list-none mb-10">
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Servicios
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Contáctenos
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-center py-4">
            <h2 className="title-font font-Cardo font-medium text-white tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <ul className="list-none mb-10">
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Condiciones
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Defensa al consumidor
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Opciones de pago
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-center py-4">
            <h2 className="title-font font-Cardo font-medium text-white tracking-widest text-sm mb-3">
              SOCIO
            </h2>
            <ul className="list-none mb-10">
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Atención al socio
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Solicitud de Baja
                </Link>
              </li>
              <li>
                <Link className="text-gray-300 hover:text-white font-Roboto">
                  Arrepentimiento
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-8">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full text-center px-4 flex flex-row items-center justify-center">
            <p className="text-sm text-gray-300 sm:ml-6 sm:mt-0">
              <a
                href="#"
                className="text-gray-400 ml-1 text-center font-Roboto"
                aria-label="Bartoloni Arevalo son los Creadores del Sitio Web"
              >
                Ezequiel Arevalo |
              </a>
              <a
                href="#"
                className="text-gray-400 ml-1 text-center font-Roboto"
                aria-label="Bartoloni Arevalo son los Creadores del Sitio Web"
              >
                Abraham Bartoloni
              </a>
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-8 text-center">
            <div className="flex flex-row items-center justify-center">
              <img src={logo} alt="" />
              <p className="font-Roboto pl-2">© 2023 — Aragoge</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-center">
            <div className="flex flex-row items-center justify-center h-full">
              <a
                href="https://www.facebook.com/"
                className="text-gray-300"
                aria-label="Enlace hacia un sitio web externo (red)"
              >
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/"
                className="ml-3 text-gray-300"
                aria-label="Enlace hacia un sitio web externo (red)"
              >
                <svg
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                className="ml-3 text-gray-300"
                aria-label="Enlace hacia un sitio web externo (red)"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://ar.linkedin.com/"
                className="ml-3 text-gray-300"
                aria-label="Enlace hacia un sitio web externo (red)"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
