export function getPlannings(){
    return fetch("http://localhost:3333/planning/", {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export function getPlanningsByTitle(title){
    return fetch(`http://localhost:3333/planning?title=${title}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}


export function getPlanningsByPrice(pricemin, pricemax){
    return fetch(`http://localhost:3333/planning?pricemin=${pricemin}&pricemax=${pricemax}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export function getPlanningsByCategory(category){
    return fetch(`http://localhost:3333/planning?category=${category}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export function getPlanningsBySubscribers(subsmin, subsmax){
    return fetch(`http://localhost:3333/planning?subscribersmin=${subsmin}&subscribersmax=${subsmax}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export function getPlanningsByEspectiality(especialiti){
    return fetch(`http://localhost:3333/planning?especialiti=${especialiti}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export function getPlanningsByID(id){
    return fetch(`http://localhost:3333/planning/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        return res.json()
    })
}

export default{
    getPlannings,
    getPlanningsByTitle,
    getPlanningsByPrice,
    getPlanningsByCategory,
    getPlanningsBySubscribers,
    getPlanningsByEspectiality,
    getPlanningsByID,
}