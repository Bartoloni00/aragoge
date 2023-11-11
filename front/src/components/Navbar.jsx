import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 w-[100%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-neutral-600 dark:text-neutral-200">Mi Sitio Web</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/"
                className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <Link to="/contact"
                className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
              <Link to="/login"
                className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
              >
                Login
              </Link>
              <Link to="/register"
                className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen ? (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/home"
                className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <Link to="/contact"
                className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
              <Link to="/login"
                className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
              >
                Login
              </Link>
              <Link to="/register"
                className="text-neutral-600 dark:text-neutral-200 px-3 py-2 rounded-md"
              >
                Register
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar