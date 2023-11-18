import { call } from "./http.service"

export function getPlanificaciones() {
    return call({uri: `planning`})
}

export function getPlanificacionesByID(id) {
    return call({uri: `planning/${id}`})
}

export default{
    getPlanificaciones,
    getPlanificacionesByID
}