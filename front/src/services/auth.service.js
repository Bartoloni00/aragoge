import { call } from "./http.service";

export function login({email, password}) {
    return call({uri: "api/auth/login", method: "POST", body: {email, password}})
}

export function logout() {
    return call({uri: "auth", method: "POST"})
}

export function getPerfil() {
    return call({uri: "api/users/", method: "GET"})
}

export function getPerfilByID(id) {
    return call({uri: `api/users/${id}`, method: "GET"})
}

export function createNewUser({ name, lastname, email, password, image, alt, rol }) {
    return call({uri: `api/users/`, method: "POST", body: { name, lastname, email, password, image, alt, rol }})
}

export default {
    login,
    logout,
    getPerfil,
    getPerfilByID,
    createNewUser
}