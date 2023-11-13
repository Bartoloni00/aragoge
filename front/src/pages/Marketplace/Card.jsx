/*
    Example de card para el sitio
    TODO: Cambiar el formato de la card al que se utilizará y traer los datos que requiere la misma
*/
export const Card = () => {
    return (
         <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
         <a href="#">
             <img className="rounded-t-lg" src="https://tickets.teatrosangabriel.com/wp-content/uploads/2023/10/LuisMi1-920x613.jpg" alt="Luis Miguel" />
         </a>
         <div className="p-5">
             <a href="#">
                 <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Luis Miguel</h5>
             </a>
              <ul className="my-2">
                  <li className="text-gray-300">Tipo: -</li>
                  <li className="text-gray-300">Estado: -</li>
                  <li className="text-gray-300">Condición: -</li>
                  <li className="text-gray-300">Ubicación: -</li>
              </ul>
             <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                 Investigar
                 <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
             </a>
         </div>
     </div>
    )
  }
  