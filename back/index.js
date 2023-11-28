import express from "express"
import userRoutes from "./routes/usersRouters.js"
import ApiuserRoutes from "./api/routes/usersRouters.js"
import cors from 'cors'
import multer from 'multer' // permite cargar archivos en nodejs
import ImageMiddleware from "./middlewares/imageMiddlware.js"

const app = new express()
const port = 3333

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname.trim().replace(/\s/g, "_"))
    }
  })

// const storage = multer.memoryStorage()

app.use(express.urlencoded({extended: true}))
app.use('/',express.static('public'))
app.use(express.json()) // esto es estrictamente necesario para que nuestra api pueda recibir JSONs

app.use(cors())

const upload = multer({ storage })
app.post('/uploads',[ upload.single('uploaded_file'), ImageMiddleware.resizePlanningImage], function (req, res) {// solo se aceptan archivos que vienen en el campo: uploaded_file
    // console.log(req.file, req.body)
    res.send('ok')
 });


app.use('/api',ApiuserRoutes)
app.use(userRoutes)
app.use('/uploads',[], express.static('uploads'))

app.listen(port,() => {
    console.log(`App listening on port http://localhost:${port}`)
})