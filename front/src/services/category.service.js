export function powerlifiting(){
    return(
        fetch('http://localhost:3333/planning?category=powerlifting')
        .then( async (data) => {
            const powerlifting = await data.json();
        })
    )
}

export function running() {
    return(
        fetch('http://localhost:3333/planning?category=running')
        .then( async (data) => {
            const running = await data.json();
        })
    )
}

export function halterofilia() {
    return(
        fetch('http://localhost:3333/planning?category=halterofilia')
        .then( async (data) => {
            const halterofilia = await data.json();
        })
    )
}

export function bodybuilding() {
    return(
        fetch('http://localhost:3333/planning?category=bodybuilding')
        .then( async (data) => {
            const bodybuilding = await data.json();
        })
    )
}

export function crossfit() {
    return(
        fetch('http://localhost:3333/planning?category=crossfit')
        .then( async (data) => {
            const crossfit = await data.json();
        })
    )
}

export default{
    powerlifiting,
    running,
    halterofilia,
    bodybuilding,
    crossfit
}