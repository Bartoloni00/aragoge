import { Link } from "react-router-dom";

export default function Nosotros(){
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-5 py-10 mx-auto border my-8">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Aragoge</h1>
                        
                        <p className="mt-3 pb-4 text-gray-600 dark:text-gray-400">Descubre al entrenador ideal para elevar tu juego al máximo nivel. Encuéntralo aquí y haz que tus sueños deportivos se hagan realidad.</p>
                        
                        <Link className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500" to={"/marketplace"}>Descubrir</Link>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-3xl" src="https://placehold.co/800x800" alt="El pana miguel :v" />
                </div>
            </div>
        </div>
    </section>
  )
}
