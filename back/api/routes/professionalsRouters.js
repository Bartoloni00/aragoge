import express from 'express'
import { profesionalController } from '../../controllers/professionalsController.js'
import ProfesionalMiddleware from '../../middlewares/ProfesionalMiddleware.js'
import TokenMiddleware from '../../middlewares/TokenMiddleware.js'

import multer from 'multer' // permite cargar archivos en nodejs
import ImageMiddleware from "../../middlewares/imageMiddlware.js"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/banners')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage })

const ProfesionalRoutes = express.Router()

ProfesionalRoutes.get('/profesional/', profesionalController.listAll)

ProfesionalRoutes.get('/profesional/:id', profesionalController.getByID)

ProfesionalRoutes.post('/profesional/',[
    upload.single('banner'), 
    ImageMiddleware.resizeBanner, 
    ProfesionalMiddleware.validate, 
    TokenMiddleware.validateToken
], profesionalController.create)

ProfesionalRoutes.delete('/profesional/:id',[TokenMiddleware.validateToken], profesionalController.delete)

ProfesionalRoutes.patch('/profesional/:id',[ProfesionalMiddleware.partialValidate , TokenMiddleware.validateToken], profesionalController.update)

export default ProfesionalRoutes