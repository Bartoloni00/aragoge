import { call } from "./http.service.js";

/**
 *   @returns {Object} Objeto con información de las planificaciones.
 *   @param {Object} data - Datos de inicio de sesión.
 *   @param {string} data.email - Dirección de correo electrónico del usuario.
 *   @param {string} data.password - Contraseña del usuario.
 *   @returns {Object} Objeto con resultado del inicio de sesión.
 *   - Objetivo: Permitir al usuario Iniciar Sesión.
 *   - Recibe por parámetros el email y password del usuario.
 */
export function login({ email, password }) {
  return call({
    uri: "auth/login",
    method: "POST",
    body: { email, password },
  });
}

/**
 *   @returns {Promise} Promesa que representa el resultado del cierre de sesión.
 *   - Objetivo: Permitir al usuario Cerrar Sesión.
 *   - No recibe parámetros
 */
export function logout() {
  return fetch(`http://localhost:3333/api/auth`, {
    headers: {
      "Auth-Token": localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then((response) => {
      console.log("Respuesta de la solicitud de logout:", response);
      if (!response.ok || response.status === 422) {
        return response.json().then((error) => Promise.reject(error));
      }
      return response.json();
    })
    .then((data) => {
      // console.log("Datos de la respuesta de logout:", data);
      localStorage.removeItem("token");
      localStorage.removeItem("id");
    })
    .catch((error) => {
      console.error("Error en la solicitud de logout:", error);
    });
}

/**
 *   @returns {Promise} Promesa que representa el perfil del usuario.
 *   - Objetivo: Obtener perfil de usuario actual.
 *   - No recibe parámetros
 */
export function getProfile() {
  return call({ uri: "users/", method: "GET" });
}

export function editProfile({ id, name, lastname, email, image, alt, rol }) {
  return call({
    uri: `users/${id}`,
    method: "PATCH",
    body: { name, lastname, email, image, alt, rol },
  });
}

/**
 *   @returns {Promise} Promesa que representa el perfil del usuario.
 *   @param {string} id - Identificador único del usuario.
 *   @returns {Promise} Promesa que representa el perfil del usuario.
 *   - Objetivo: Obtener perfil de usuario por ID.
 *   - Recibe por parámetros el ID del usuario
 */
export function getProfileByID(id) {
  return call({ uri: `users/${id}`, method: "GET" });
}

/**
 *   @param {Object} data - Datos del nuevo usuario.
 *   @param {string} data.name - Nombre del usuario.
 *   @param {string} data.lastname - Apellido del usuario.
 *   @param {string} data.email - Dirección de correo electrónico del usuario.
 *   @param {string} data.password - Contraseña del usuario.
 *   @param {string} data.image - URL de la imagen de perfil.
 *   @param {string} data.alt - Texto alternativo para la imagen de perfil.
 *   @param {string} data.rol - Rol del usuario.
 *   @returns {Promise} Promesa que representa el resultado de la creación del usuario.
 *   - Objetivo: Crear un nuevo usuario.
 *   - Recibe por parámetros todos los datos que requiere la creación de un nuevo usuario
 */
export function createNewUser({
  name,
  lastname,
  email,
  password,
  image,
  alt,
  rol,
}) {
  return call({
    uri: `users/`,
    method: "POST",
    body: { name, lastname, email, password, image, alt, rol },
  });
}

/**
 *   @param {Object} data - Datos del nuevo profesional.
 *   @param {string} data.description - Descripción del profesional.
 *   @param {string} data.synopsis - Sinopsis del profesional.
 *   @param {string} data.banner - Banner del profesional.
 *   @param {string} data.alt - Texto alternativo para la imagen de perfil.
 *   @param {string} data.subscribers - Rol o función del profesional.
 *   @param {string} data.user - URL de la imagen de perfil.
 *   @param {string} data.especialiti - Especialidad del profesional.
 *   @returns {Promise} Promesa que representa el resultado de la creación del profesional.
 *   - Objetivo: Crear un nuevo profesional.
 *   - Recibe por parámetros todos los datos que requiere la creación de un nuevo profesional
 */
export function createNewProfessional({
  description,
  synopsis,
  banner,
  alt,
  subscribers,
  user,
  especialiti,
}) {
  return call({
    uri: `profesional/`,
    method: "POST",
    body: {
      description,
      synopsis,
      banner,
      alt,
      subscribers,
      user,
      especialiti,
    },
  });
}

export default {
  login,
  logout,
  getProfile,
  editProfile,
  getProfileByID,
  createNewUser,
  createNewProfessional,
};
