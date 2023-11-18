import { Navigate } from "react-router-dom"

export default function PrivateRoute({children}){

    if( !localStorage.getItem("token") ){
        return <Navigate to="/login"/>
    }
    // TODO: hacer que se valide el token y rol de usuario por cada tipo de vista

//   const userRole = localStorage.getItem("rol");

//   if (!userRole || (userRole !== "entrenador" && userRole !== "admin")) {
//     return <Navigate to="/login" />;
//   }

    return children
}