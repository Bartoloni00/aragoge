const Destacados = () => {
  return (
    <section className="container mx-auto mt-4">
        <h2 className="font-Cardo uppercase text-2xl text-center my-6">Profesionales Destacados</h2>
        <div className="gap-[40px] mx-auto flex flex-col items-center md:flex-row px-4 md:px-2 text-center">
            <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
                <div className="flex flex-col justify-center items-center">
                    <img src="../../../public/img/destacado-1.webp" alt="Imagen del Profesional destacado William Jame" width={480} height={270} loading="lazy"/>
                </div>
                <div className="mt-6">
                    <p className="font-Roboto text-lg">William James</p>
                </div>
                <div className="py-4">
                    <h3 className="font-Cardo uppercase text-xl py-4">Entrenadores</h3>
                </div>
            </div>
            <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
                <div className="flex flex-col justify-center items-center">
                    <img src="../../../public/img/destacado-2.webp" alt="Imagen del Profesional destacado Barry Jay" width={480} height={270} loading="lazy"/>
                </div>
                <div className="mt-6">
                    <p className="font-Roboto text-lg">Barry Jay</p>
                </div>
                <div className="py-4">
                    <h3 className="font-Cardo uppercase text-xl py-4">Terapeutas</h3>
                </div>
            </div>
            <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
                <div className="flex flex-col justify-center items-center">
                    <img src="../../../public/img/destacado-1.webp" alt="Imagen de la Profesional destacada Viviana Lacher" width={480} height={270} loading="lazy"/>
                </div>
                <div className="mt-6">
                    <p className="font-Roboto text-lg">Viviana Lacher</p>
                </div>
                <div className="py-4">
                    <h3 className="font-Cardo uppercase text-xl py-4">Nutricionistas</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Destacados