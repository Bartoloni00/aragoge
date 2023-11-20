import { call } from "./http.service"

export function getPlanificaciones() {
    return call({uri: `planning`})
}

export function getPlanificacionesByID(id) {
    return call({uri: `planning/${id}`})
}

export function getPlanificacionesByCategoria(categoria) {
    return call({uri: `planning?${categoria}`})
}

export default{
    getPlanificaciones,
    getPlanificacionesByID,
    getPlanificacionesByCategoria,
}