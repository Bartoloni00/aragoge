import { call } from "./http.service"

export function getPlanificaciones() {
    return call({uri: `api/planning`})
}

export function getPlanificacionesByProfesionalID(id) {
    console.log(`ID: ${id}`)
    return call({uri: `api/planning?profesional=${id}`})
}

export function getPlanificacionesByID(id) {
    return call({uri: `api/planning/${id}`})
}

export function getPlanificacionesByCategoria(categoria) {
    return call({uri: `api/planning?${categoria}`})
}

export function createNewPlanificacion({ title, description, subscribers, price, image, alt, category }) {
    return call({ uri: `api/planning/`, method: "POST", body: { title, description, subscribers, price, image, alt, category }});
}

export function editPlanificacion({_id , title, description, subscribers, price, image, alt, category }) {
    return call({uri: `api/planning/${_id}`, method: "PATCH", body: {title, description, subscribers, price, image, alt, category}})
}

export function deletePlanificacion(_id) {
    return call({uri: `api/planning/${_id}`, method: "DELETE"});
}

export default{
    getPlanificaciones,
    getPlanificacionesByID,
    getPlanificacionesByCategoria,
}