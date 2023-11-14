export const Perfil = () => {
    return (
    <>
        <section className="border mx-auto my-8">
            <h2 className="text-center text-lg py-5">Mi Perfil</h2>

            <div className="border max-w-[1600px] mx-auto">
                <div className="my-4 p-3">
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" name="name" className="py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="name" />
                    <button type="submit">Modificar</button>
                </div>

                <div className="my-4 p-3">
                    <label htmlFor="lastname">Apellido: </label>
                    <input type="text" name="lastname" className="py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="lastname" />
                    <button type="submit">Modificar</button>
                </div>

                <div className="my-4 p-3">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" className="py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="flowfugaz@gmail.com" />
                    <button type="submit">Modificar</button>
                </div>

                <div className="my-4 p-3">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" className="py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="*********" />
                    <button type="submit">Modificar</button>
                </div>

                <div className="my-4 p-3">
                    <label htmlFor="image" className="flex items-center px-3 py-3 mx-auto text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>

                            <h2 className="mx-3 text-gray-400">Foto de Perfil</h2>

                            <input id="image" type="file" name="image" className="hidden" />
                    </label>
                    <button type="submit">Modificar</button>
                </div>
                <div className="my-4 p-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="rol">
                        Rol:
                    </label>
                    <div className="relative">
                        <select className="appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="rol" id="rol">
                            <optgroup label="Usuario">
                                <option value="atleta">Atleta</option>
                            </optgroup>
                            <optgroup label="profesionales">
                                <option value="Entrenador">Entrenador</option>
                                <option value="Nutricionista">Nutricionista</option>
                                <option value="Terapeuta">Terapeuta</option>
                            </optgroup>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}