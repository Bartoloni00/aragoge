const Destacados = () => {
  return (
    <section className="container mx-auto mt-4">
      <h2 className="font-Cardo uppercase text-2xl text-center my-6">
        Profesionales Destacados
      </h2>
      <div className="gap-[40px] mx-auto flex flex-col items-center md:flex-row px-4 md:px-2 text-center">
        <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
          <div className="flex flex-col justify-center items-center rounded-lg">
            <img
              src="../../../public/img/heny-rambod.webp"
              alt="Imagen del Profesional destacado Hany Rambod"
              width={480}
              height={270}
              loading="lazy"
              className="rounded-t-lg"
            />
          </div>
          <div className="mt-6">
            <p className="font-Roboto text-lg">Hany Rambod</p>
          </div>
          <div className="py-4">
            <h3 className="font-Cardo uppercase text-xl py-4">Entrenadores</h3>
          </div>
        </div>
        <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
          <div className="flex flex-col justify-center items-center">
            <img
              src="../../../public/img/terapeuta.webp"
              alt="Imagen del Profesional destacado Himiko Ling"
              width={480}
              height={270}
              loading="lazy"
              className="rounded-t-lg"
            />
          </div>
          <div className="mt-6">
            <p className="font-Roboto text-lg">Himiko Ling</p>
          </div>
          <div className="py-4">
            <h3 className="font-Cardo uppercase text-xl py-4">Terapeutas</h3>
          </div>
        </div>
        <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
          <div className="flex flex-col justify-center items-center">
            <img
              src="../../../public/img/mateo-calvo.webp"
              alt="Imagen de la Profesional destacada Mateo Calvo"
              width={480}
              height={270}
              loading="lazy"
              className="rounded-t-lg"
            />
          </div>
          <div className="mt-6">
            <p className="font-Roboto text-lg">Mateo Calvo</p>
          </div>
          <div className="py-4">
            <h3 className="font-Cardo uppercase text-xl py-4">
              Nutricionistas
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destacados;
