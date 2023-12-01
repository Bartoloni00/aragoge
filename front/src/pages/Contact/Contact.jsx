export default function Contact(){
  return (
    <section>
      <div className="px-5 py-24 bg-[#f2f2f2] mx-auto max-w-[800px]">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="font-Cardo text-3xl font-normal mb-4 text-gray-900">Contáctanos</h1>
          <p className=" mx-auto text-2xl font-Roboto font-normal">Si tienes alguna pregunta o inquietud, no dudes en contactarnos.</p>
          <p className=" mx-auto text-2xl font-Roboto font-normal">Estamos aquí para ayudarte.</p>
        </div>
        <div className="">
          <form action="#" method="POST" encType="multipart/form-data">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 font-Roboto text-xl font-normal">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 font-Roboto text-xl font-normal">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 font-Roboto text-xl font-normal">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full mx-auto text-center">
                <button
                  type="submit"
                  className="flex mx-auto mt-6 px-10 py-3 text-xl font-Roboto text-white capitalize transition-colors duration-300 transform bg-[#DA1641] rounded-lg"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
