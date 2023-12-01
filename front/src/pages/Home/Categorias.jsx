const Categorias = () => {
  return (
    <section className="container mx-auto mt-4">
        <h2 className="font-Cardo uppercase text-2xl text-center my-6">Categorias Populares</h2>
        <div className="mx-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            <div className="flex justify-center font-Roboto text-lg cursor-pointer transition-colors duration-300 hover:bg-[#A6A6A6] hover:border-[#595959] bg-[#f2f2f2] rounded-xl p-6 border border-[#A6A6A6] shadow-md">
                <p>PowerLifting</p>
            </div>
            <div className="flex justify-center font-Roboto text-lg cursor-pointer transition-colors duration-300 hover:bg-[#A6A6A6] hover:border-[#595959] bg-[#f2f2f2] rounded-xl p-6 border border-[#A6A6A6] shadow-md">
                <p>Halterofilia</p>
            </div>
            <div className="flex justify-center font-Roboto text-lg cursor-pointer transition-colors duration-300 hover:bg-[#A6A6A6] hover:border-[#595959] bg-[#f2f2f2] rounded-xl p-6 border border-[#A6A6A6] shadow-md">
                <p>Running</p>
            </div>
            <div className="flex justify-center font-Roboto text-lg cursor-pointer transition-colors duration-300 hover:bg-[#A6A6A6] hover:border-[#595959] bg-[#f2f2f2] rounded-xl p-6 border border-[#A6A6A6] shadow-md">
                <p>BodyBuilding</p>
            </div>
            <div className="flex justify-center font-Roboto text-lg cursor-pointer transition-colors duration-300 hover:bg-[#A6A6A6] hover:border-[#595959] bg-[#f2f2f2] rounded-xl p-6 border border-[#A6A6A6] shadow-md">
                <p>CrossFit</p>
            </div>
            <div className="flex justify-center font-Roboto text-lg cursor-pointer transition-colors duration-300 hover:bg-[#A6A6A6] hover:border-[#595959] bg-[#f2f2f2] rounded-xl p-6 border border-[#A6A6A6] shadow-md">
                <p>Boxeo</p>
            </div>
            <div className="flex justify-center font-Roboto text-lg cursor-pointer transition-colors duration-300 hover:bg-[#A6A6A6] hover:border-[#595959] bg-[#f2f2f2] rounded-xl p-6 border border-[#A6A6A6] shadow-md">
                <p>Rugby</p>
            </div>
            <div className="flex justify-center font-Roboto text-lg cursor-pointer transition-colors duration-300 hover:bg-[#A6A6A6] hover:border-[#595959] bg-[#f2f2f2] rounded-xl p-6 border border-[#A6A6A6] shadow-md">
                <p>Voleibol</p>
            </div>
        </div>
    </section>
  )
}

export default Categorias