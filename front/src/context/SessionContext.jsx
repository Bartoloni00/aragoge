import { createContext, useCallback, useContext, useMemo } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, getPerfilByID } from "../services/auth.service";
const SessionContext = createContext();

function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('[useSession] Debe estar dentro del proveedor SessionContext!')
  }
  return context;
}

/**
    * @returns {Object} Tipo: Objeto
    *   - _id: identificador único del usuario
    *   - name: nombre del usuario
    *   - lastname: apellido del usuario
    *   - email: dirección de correo electrónico del usuario
    *   - rol: rol o función del usuario
    *   - image: URL de la imagen de perfil
    *   - alt: texto alternativo para la imagen de perfil
*/
function usePerfil() {
  const { perfil } = useSession();
  return perfil;
}

function SessionProvider({ children }) {
  const navigate = useNavigate();
  const onLogout = useCallback(() => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  }, [navigate])

  const [perfil, setPerfil] = useState({});
  console.log(perfil)
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      getPerfilByID(id).then(perfil => setPerfil(perfil));
    } else {
      console.log("El usuario no tiene cuenta o no está logueado");
    }
  }, []);

  const value = useMemo(() => {
    return { perfil, onLogout }
  }, [perfil, onLogout])

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, useSession, usePerfil, SessionProvider };