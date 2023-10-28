import express from "express"
import userRoutes from "./routes/usersRouters.js"

const app = new express()
const port = 3333

app.use(express.urlencoded({extended: true}))
app.use('/',express.static('public'))
app.use(express.json()) // esto es estrictamente necesario para que nuestra api pueda recibir JSONs

app.use(userRoutes)

app.listen(port,() => {
    console.log(`App listening on port http://localhost:${port}`);
})