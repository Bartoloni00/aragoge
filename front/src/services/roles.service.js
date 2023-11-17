export function getRoles(){
    return fetch("http://localhost:3333/roles/", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export default{
    getRoles,
}