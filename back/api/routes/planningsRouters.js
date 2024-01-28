import express from 'express'
import {PlanningController} from '../../controllers/planningController.js'
import PlanningMiddleware from '../../middlewares/PlanningMiddleware.js'
import TokenMiddleware from '../../middlewares/TokenMiddleware.js'
import AuthMiddleware from '../../middlewares/AuthMiddlware.js'

import multer from 'multer' // permite cargar archivos en nodejs
import ImageMiddleware from "../../middlewares/imageMiddlware.js"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/plannings')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage })

const PlanningRoutes = express.Router()

PlanningRoutes.get('/planning/', PlanningController.listAll)

PlanningRoutes.get('/planning/:id', PlanningController.getByID)

PlanningRoutes.post('/planning/',[
    upload.single('image'), 
    ImageMiddleware.resizePlanningImage, 
    PlanningMiddleware.validate, 
    TokenMiddleware.validateToken,
    AuthMiddleware.UserAuthProfessional
], PlanningController.create)

PlanningRoutes.delete('/planning/:id',[
    TokenMiddleware.validateToken,
    AuthMiddleware.UserAuthProfessional
], PlanningController.delete)

PlanningRoutes.patch('/planning/:id',[
    PlanningMiddleware.partialValidate,
    TokenMiddleware.validateToken,
    AuthMiddleware.UserAuthProfessional
], PlanningController.update)

export default PlanningRoutes
