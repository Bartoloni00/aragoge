import { Card } from "./Card"

export const Content = () => {
  return (
    <section className="w-[100%] p-2 my-8">
        <div className="max-w-[1536px] mx-auto border dark:border-gray-700 p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
  )
}