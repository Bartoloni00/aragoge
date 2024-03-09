const Aragoge = () => {
  return (
    <>
      <section className="bg-[#f2f2f2] max-w-[1536px] mx-auto">
        <div className="flex flex-col items-center md:flex-row w-full">
          <div className="p-2 text-left w-full">
            <h1 className="font-Cardo text-3xl uppercase text-left mb-3">
              ARAGOGE
            </h1>
            <p className="font-Roboto text-base text-left">
              Descubre al entrenador ideal para elevar tu juego al máximo nivel.
            </p>
            <p className="font-Roboto text-base text-left">
              Encuentra aquí y haz que tus sueños deportivos se hagan realidad.
            </p>
            <button className="p-2.5 text-sm text-center text-white rounded-[10px] bg-[#da1641] mt-3 px-4">
              DESCUBRIR
            </button>
          </div>
          <div className="md:w-full flex flex-col items-center justify-center aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3">
            <img
              src="../../../public/img/levantando-pesas.webp"
              alt="Hombre levantando pesas"
              width={800}
              height={450}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aragoge;
