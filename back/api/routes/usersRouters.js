import express from 'express'
import {UserController} from '../../controllers/usersController.js'
import ProfesionalRoutes from './professionalsRouters.js'
import PlanningRoutes from './planningsRouters.js'
import TipesRoutes from './TipesRouters.js'
import AuthRoutes from './AuthRoutes.js'
import UserMiddleware from '../../middlewares/UserMiddleware.js'
import TokenMiddleware from '../../middlewares/TokenMiddleware.js'

import multer from 'multer' // permite cargar archivos en nodejs
import ImageMiddleware from "../../middlewares/imageMiddlware.js"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/users')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage })

const ApiuserRoutes = express.Router()

ApiuserRoutes.get('/users/', UserController.listAll)

ApiuserRoutes.get('/users/:id', UserController.getByID)

ApiuserRoutes.post('/users/', [
    upload.single('image'), 
    ImageMiddleware.resizeUserImage, 
    UserMiddleware.validate
] , UserController.create)

ApiuserRoutes.delete('/users/:id',[TokenMiddleware.validateToken], UserController.delete)

ApiuserRoutes.patch('/users/:id', [
  TokenMiddleware.validateToken,
  upload.single('image'), 
  ImageMiddleware.resizeUserImage, 
  UserMiddleware.partialValidate, 
] , UserController.update)

ApiuserRoutes.use(ProfesionalRoutes)
ApiuserRoutes.use(PlanningRoutes)
ApiuserRoutes.use(TipesRoutes)
ApiuserRoutes.use(AuthRoutes)

export default ApiuserRoutes