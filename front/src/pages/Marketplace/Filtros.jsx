import FiltroPrecio from "./filtros/FiltroPrecio.jsx";
import FiltroCategoria from "./filtros/FiltroCategoria.jsx";
const Filtros = () => {
  return (
    <>
      <section className="w-[100%] p-2 my-8">
        <div className="max-w-[1536px] p-2 container px-5 py-10 mx-auto border dark:border-gray-500 my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            <FiltroPrecio />
            <FiltroCategoria />
          </div>
        </div>
      </section>
    </>
  );
};

export default Filtros;
