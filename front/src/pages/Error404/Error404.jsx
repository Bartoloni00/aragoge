import { Link } from 'react-router-dom';

export default function Error404(){
  return (
    <section>
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center bg-[#f2f2f2] p-6 rounded-lg">
                <img src="../../../public/icon/error-exclamation.webp" alt="Icono de exclamación" width={50} height={50}/>
                <h1 className="mt-3 font-Cardo text-3xl font-bold">Página no encontrada</h1>
                <p className="mt-4 font-Roboto text-2xl">La página a la que intentabas acceder no existe o se ha movido </p>

                <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                    <button className="px-6 py-3 text-xl font-Roboto text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg">
                        <Link to={"/"}>Volver al inicio</Link>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}