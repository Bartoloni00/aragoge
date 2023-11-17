import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CardDetail() {
    const [ planning, setPlanning ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3333/planning/${id}`)
        .then((res) => res.json())
        .then((data) => setPlanning(data))
    }, [])
    
  return (
    <>
        <div>Detalle de la planificación</div>
        <p>ID: {planning._id}</p>
        <p>Categoria: {planning.category}</p>
        <p>Titulo: {planning.title}</p>
        <p>Imagen:</p> <img src={planning.image} alt={planning.alt} />
        <p>Subscribidos: {planning.subscribers}</p>
        <p>Precio: ${planning.price}</p>
    </>
  )
}
