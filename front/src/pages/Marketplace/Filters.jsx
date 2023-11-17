import Precio from "./Filters/Precio.jsx";
import Checkbox from "./Filters/Checkbox.jsx";
import Categoria from "./Filters/Categoria.jsx";
import Especialidad from "./Filters/Especialidad.jsx";

export default function Filters(){
  return (
    <section className="w-[100%] p-2 my-8">
        <div className="max-w-[1536px] p-2 container px-5 py-10 mx-auto border dark:border-gray-500 my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                <Precio />
                <Checkbox />
                <Categoria />
                <Especialidad />
            </div>
        </div>
    </section>
  )
}