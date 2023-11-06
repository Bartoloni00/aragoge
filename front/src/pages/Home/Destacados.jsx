export const Destacados = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-5 py-10 mx-auto border my-8">
            <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Profesionales Destacados</h2>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div className="w-full text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://placehold.co/300x120" alt="avatar" />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                    </div>
                </div>

                <div className="w-full text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://placehold.co/300x120" alt="avatar" />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
                    </div>
                </div>

                <div className="w-full text-center">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://placehold.co/300x120" alt="avatar" />

                    <div className="mt-2">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
