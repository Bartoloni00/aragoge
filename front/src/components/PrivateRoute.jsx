import { Navigate } from "react-router-dom";
import { usePerfil } from "../context/SessionContext";

export default function PrivateRoute({ children, allowedRoles }) {
  const perfil = usePerfil()
  const userRol = perfil.rol;

  if (localStorage.getItem("token")) {
    if (allowedRoles.includes(userRol)) {
      return children; // Renderizar el componente si el rol del usuario está permitido
    } else {
      return <Navigate to={"/"} />; // Redirigir a "/" si el rol del usuario no está permitido
    }
  } else {
    return <Navigate to={"/login"} />; // Redirigir al inicio de sesión si no hay token en el almacenamiento local
  }
}
