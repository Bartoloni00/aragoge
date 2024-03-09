/**
 *   @returns {Promise} Promesa que representa el resultado del cierre de sesión.
 *   @param {string} uri - URI del endpoint al que se realizará la llamada.
 *   @param {string} method - Método HTTP de la solicitud (por defecto es "GET").
 *   @param {Object} body - Cuerpo de la solicitud (opcional).
 *   @returns {Promise} Promesa que representa el resultado de la llamada a la API.
 *   - Objetivo: Realiza una llamada a la API utilizando fetch.
 *   - Recibe como parámetros la URI del endpoint, el método HTTP y el cuerpo de la solicitud.
 */
export async function call({ uri, method = "GET", body = undefined }) {
  // console.log(`URI: ${uri}`);
  // console.log(`Method: ${method}`);
  // console.log(`Body: ${body}`);
  return fetch(`http://localhost:3333/api/${uri}`, {
    headers: {
      "Auth-Token": localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
  }).then(async (response) => {
    if (!response.ok || response.status === 401) {
      throw await response.json();
    }
    const data = await response.json();
    return data;
  });
}

export default {
  call,
};
