export function getProfessionals(){
    return fetch("http://localhost:3333/profesional/", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export function getProfessionalsByID(id){
    return fetch(`http://localhost:3333/profesional/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export default{
    getProfessionals,
    getProfessionalsByID
}