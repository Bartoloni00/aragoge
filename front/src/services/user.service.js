export function getUser(){
    return fetch("http://localhost:3333/users/", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export function getUserByID(id){
    return fetch(`http://localhost:3333/users/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export default{
    getUser,
    getUserByID,
}