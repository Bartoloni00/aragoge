const Camino = () => {
  return (
    <section className="container mx-auto mt-4">
        <h2 className="font-Cardo uppercase text-2xl text-center my-6">Nuestro Camino...</h2>
        <div className="gap-[40px] mx-auto flex flex-col items-center md:flex-row px-4 md:px-2 text-center">
            <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
                <div className="min-h-[150px] flex flex-col justify-center items-center">
                    <img src="../../../public/icon/personas.webp" alt="Icono de Usuarios" width={60} height={60}/>
                </div>
                <div className="p-2">
                    <p className="font-Roboto text-2xl">2.7K</p>
                </div>
                <div className="text-center">
                    <h3 className="font-Cardo uppercase text-lg py-4">Usuarios</h3>
                </div>
            </div>
            <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
                <div className="min-h-[150px] flex flex-col justify-center items-center">
                    <img src="../../../public/icon/carrito.webp" alt="Icono de Usuarios" width={60} height={60}/>
                </div>
                <div className="p-2">
                    <p className="font-Roboto text-2xl">1.8K</p>
                </div>
                <div className="text-center">
                    <h3 className="font-Cardo uppercase text-lg py-4">Compras</h3>
                </div>
            </div>
            <div className="bg-[#f2f2f2] rounded-lg border shadow-md w-full">
                <div className="min-h-[150px] flex flex-col justify-center items-center">
                    <img src="../../../public/icon/download.webp" alt="Icono de Usuarios" width={60} height={60}/>
                </div>
                <div className="p-2">
                    <p className="font-Roboto text-2xl">35</p>
                </div>
                <div className="text-center">
                    <h3 className="font-Cardo uppercase text-lg py-4">Descargas</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Camino