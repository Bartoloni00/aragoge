export async function call({uri, method = "GET", body = undefined}) {
    console.log({body})
    return fetch(`http://localhost:3333/${uri}`, {
        headers: {
            "auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(body)
    })
    .then( async (response) => {
        if (!response.ok || response.status === 422) {
        localStorage.removeItem("token");
        throw await response.json()
        }
        return response.json();
    });
    }
    
export default {
    call
}