import { call } from "./http.service.js";

/**
 *   @returns {Object} Objeto con información de las planificaciones.
 *   - Objetivo: Obtener todas las planificaciones.
 *   - No recibe parámetros
 */
export function getPlanifications() {
  return call({ uri: `planning` });
}

/**
 *   @param {string} id - Identificador único del profesional.
 *   - Objetivo: Obtener planificaciones por ID de profesional.
 *   - Recibe por parametros el ID del profesional
 */
export function getPlanificationsByProfessionalID(id) {
  return call({ uri: `planning?profesional=${id}` });
}

/**
 *   @param {string} id - Identificador único del profesional.
 *   @returns {Object} Objeto con información de la planificación.
 *   - Objetivo: Obtener planificaciones por ID.
 *   - Recibe por parámetros el ID de la planificación
 */
export function getPlanificationsByID(id) {
  return call({ uri: `planning/${id}` });
}

/**
 *   @param {string} categoria - Categoría única de la planificación.
 *   @returns {Object} Objeto con información de las planificaciones.
 *   - Objetivo: Obtener planificaciones por categoría.
 *   - Recibe por parámetros una categoria en especifico
 */
export function getPlanificationsByCategory(categoria) {
  return call({ uri: `planning?${categoria}` });
}

/**
 *   @param {Object} data - Datos de la nueva planificación.
 *   @param {string} data.title - Nombre de la planificación.
 *   @param {string} data.description - Descripción de la planificación.
 *   @param {string} data.subscribers - Dirección de correo electrónico.
 *   @param {number} data.price - Precio de la planificación.
 *   @param {string} data.image - URL de la imagen de perfil.
 *   @param {string} data.alt - Texto alternativo para la imagen de perfil.
 *   @param {string} data.category - Rol del usuario.
 *   @returns {Object} Objeto con información de la nueva planificación.
 *   - Objetivo: Crear una nueva planificación.
 *   - Recibe por parámetros todos los datos que requiere una planificación
 */
export function createNewPlanification({
  title,
  description,
  subscribers,
  price,
  image,
  alt,
  category,
}) {
  console.log(`Title: ${title}`);
  console.log(`description: ${description}`);
  console.log(`subscribers: ${subscribers}`);
  console.log(`price: ${price}`);
  console.log(`image: ${image}`);
  console.log(`alt: ${alt}`);
  console.log(`category: ${category}`);
  return call({
    uri: `planning/`,
    method: "POST",
    body: { title, description, subscribers, price, image, alt, category },
  });
}

/**
 *   @param {Object} data - Datos de la planificación a editar.
 *   @param {string} data._id - Identificador único de la planificación.
 *   @param {string} data.title - Nombre de la planificación.
 *   @param {string} data.description - Descripción de la planificación.
 *   @param {string} data.subscribers - Dirección de correo electrónico.
 *   @param {number} data.price - Precio de la planificación.
 *   @param {string} data.image - URL de la imagen de perfil.
 *   @param {string} data.alt - Texto alternativo para la imagen de perfil.
 *   @param {string} data.category - Rol del usuario.
 *   @returns {Object} Objeto con información de la planificación editada.
 *   - Objetivo: Editar una planificación existente.
 *   - Recibe por parámetros todos los datos tienen las planificaciones
 */
export function editPlanification({
  _id,
  title,
  description,
  subscribers,
  price,
  image,
  alt,
  category,
}) {
  return call({
    uri: `planning/${_id}`,
    method: "PATCH",
    body: { title, description, subscribers, price, image, alt, category },
  });
}

/**
 *   @param {Object} data - Datos de la planificación a editar.
 *   @param {string} _id - Identificador único de la planificación a eliminar.
 *   @returns {Object} Objeto con resultado de la eliminación.
 *   - Objetivo: Eliminar una planificación existente.
 *   - Recibe por parámetros el ID de la planificación
 */
export function deletePlanification(_id) {
  return call({ uri: `planning/${_id}`, method: "DELETE" });
}

export default {
  getPlanifications,
  getPlanificationsByProfessionalID,
  getPlanificationsByID,
  getPlanificationsByCategory,
  createNewPlanification,
  editPlanification,
  deletePlanification,
};
