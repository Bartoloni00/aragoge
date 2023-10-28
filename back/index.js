import express from "express"
import ProfesionalRoutes from './routes/professionalsRouters.js'

const app = new express()
const port = 3333

app.use(express.urlencoded({extended: true}))
app.use('/',express.static('public'))
app.use(express.json()) // esto es estrictamente necesario para que nuestra api pueda recibir JSONs

app.use(ProfesionalRoutes)

app.listen(port,() => {
    console.log(`App listening on port http://localhost:${port}`);
})