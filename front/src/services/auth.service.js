import { call } from "./http.service";

export function login({email, password}) {
    return call({uri: "api/auth/login", method: "POST", body: {email, password}})
}

export function logout() {
    return fetch(`http://localhost:3333/api/auth`, {
           headers: {
               "Auth-Token": localStorage.getItem("token"),
               "Content-Type": "application/json"
           },
           method: 'DELETE'
           })
           .then((response) => {
             console.log('Respuesta de la solicitud de logout:', response);
             if (!response.ok || response.status === 422) {
               return response.json().then(error => Promise.reject(error));
             }
             return response.json();
           })
           .then(data => {
             console.log('Datos de la respuesta de logout:', data);
             localStorage.removeItem("token");
             localStorage.removeItem("id");
           })
           .catch(error => {
             console.error('Error en la solicitud de logout:', error);
           });
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