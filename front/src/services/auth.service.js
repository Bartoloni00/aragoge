import { call } from "./http.service";

export function login({email, password}) {
    return call({uri: "auth/login", method: "POST", body: {email, password}})
}

export function logout() {
    return call({uri: "auth", method: "DELETE"})
}

export default {
    login,
    logout,
}