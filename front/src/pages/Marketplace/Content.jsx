import { useEffect, useState } from "react"
import Card from "./Card.jsx"
// ProductList == Content
// ProductListItem == Card
// App == marketplace
export default function Content({planificaciones}){
  const [planning, setPlanning] = useState(planificaciones);

  useEffect(() => {
    setPlanning(planificaciones);
  }, [planificaciones])

  return (
    <>
      <section className="w-[100%] p-2 my-8">
          <div className="max-w-[1536px] mx-auto dark:border-gray-700 p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {
                  planning.map(planning => <Card key={planning._id} planning={planning}/>)
                }
              </div>
          </div>
      </section>
    </>
  )
}