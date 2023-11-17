export function getSpecialities(){
    return fetch("http://localhost:3333/specialities/", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export default{
    getSpecialities,
}