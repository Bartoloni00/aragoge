import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { logout, getProfileByID } from "../services/auth.service.js";

const SessionContext = createContext();

function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error(
      "[useSession] Debe estar dentro del proveedor SessionContext!"
    );
  }
  return context;
}

/**
 *   @returns {Object} Objeto que representa el perfil del usuario.
 *   - Objetivo: Hook personalizado para obtener el perfil del usuario.
 *   - No recibe parámetros
 */
function usePerfil() {
  const { perfil } = useSession();
  return perfil;
}

/**
 *   @returns {Object} Objeto que representa el perfil del usuario.
 *   @param {Object} children - Componentes secundarios que se verán afectados por el proveedor de sesión.
 *   @returns {JSX.Element} Componente de React que provee la sesión del usuario a sus componentes secundarios.
 *   - Objetivo: Proveedor de sesión para manejar la lógica relacionada con la sesión del usuario.
 *   - Recibe por parámetros componentes que se verán afectados por el proveedor de sesión.
 */
function SessionProvider({ children }) {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const onLogout = useCallback(() => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  }, [navigate]);

  // Estado local para almacenar el perfil del usuario
  const [perfil, setPerfil] = useState({});

  // Efecto para obtener y almacenar el perfil del usuario
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      getProfileByID(id).then((perfil) => setPerfil(perfil));
    } else {
      console.log("El usuario no tiene cuenta o no está logueado");
    }
  }, []);

  // Valor de la sesión creado con useMemo
  const value = useMemo(() => {
    return { perfil, onLogout };
  }, [perfil, onLogout]);

  // Proveedor de contexto de sesión
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export { SessionContext, useSession, usePerfil, SessionProvider };
