import { useEffect, useState } from "react";
import Content from "./Content"
import Filters from "./Filters"

export default function Marketplace(){
  const [planning, setPlanning] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3333/planning/')
    .then( async (data) => {
      const datos = await data.json();
      setPlanning(datos);
    });
  }, []);

  useEffect(() => {}, [planning])

  return (
    <>
      <Filters />
      <Content planificaciones={planning}/>
    </>
  )
}
