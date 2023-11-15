import express from 'express'
import { profesionalController } from '../../controllers/professionalsController.js'
import ProfesionalMiddleware from '../../middlewares/ProfesionalMiddleware.js'
import TokenMiddleware from '../../middlewares/TokenMiddleware.js'

const ProfesionalRoutes = express.Router()

ProfesionalRoutes.get('/profesional/', profesionalController.listAll)

ProfesionalRoutes.get('/profesional/:id', profesionalController.getByID)

ProfesionalRoutes.post('/profesional/',[ProfesionalMiddleware.validate, TokenMiddleware.validateToken], profesionalController.create)

ProfesionalRoutes.delete('/profesional/:id',[TokenMiddleware.validateToken], profesionalController.delete)

ProfesionalRoutes.patch('/profesional/:id',[ProfesionalMiddleware.partialValidate , TokenMiddleware.validateToken], profesionalController.update)

export default ProfesionalRoutes