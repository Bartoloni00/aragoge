import { Navigate } from "react-router-dom"
import { usePerfil } from "../context/SessionContext"

export default function PrivateRoute({children}){

    const perfil = usePerfil();

    if( !localStorage.getItem("token") ){
        return <Navigate to="/login"/>
    }

    return children
}