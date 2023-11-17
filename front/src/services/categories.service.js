export function getCategories(){
    return fetch("http://localhost:3333/categories/", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export default{
    getCategories,
}