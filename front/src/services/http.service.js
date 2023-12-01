export async function call({uri, method = "GET", body = undefined}) {
    // console.log(uri)
    return fetch(`http://localhost:3333/${uri}`, {
        headers: {
            "Auth-Token": localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(body)
    })
    .then( async (response) => {
        if (!response.ok || response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            throw await response.json()
        }
        const data = await response.json();
        return data;
    });
}

export default {
    call
}