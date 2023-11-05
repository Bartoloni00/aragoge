import { Link } from "react-router-dom";

export const Nosotros = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-5 py-10 mx-auto border my-8">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Aragoge</h1>
                        
                        <p class="mt-3 pb-4 text-gray-600 dark:text-gray-400">Descubre al entrenador ideal para elevar tu juego al máximo nivel. Encuéntralo aquí y haz que tus sueños deportivos se hagan realidad.</p>
                        
                        <Link class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500" to={"/marketplace"}>Descubrir</Link>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img class="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
                </div>
            </div>
        </div>
    </section>
  )
}
