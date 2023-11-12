import express from 'express'
import { profesionalController } from '../../controllers/professionalsController.js'
import ProfesionalMiddleware from '../../middlewares/ProfesionalMiddleware.js'

const ProfesionalRoutes = express.Router()

ProfesionalRoutes.get('/profesional/', profesionalController.listAll)

ProfesionalRoutes.get('/profesional/:id', profesionalController.getByID)

ProfesionalRoutes.post('/profesional/',[ProfesionalMiddleware.validate], profesionalController.create)

ProfesionalRoutes.delete('/profesional/:id', profesionalController.delete)

ProfesionalRoutes.patch('/profesional/:id',[ProfesionalMiddleware.partialValidate], profesionalController.update)

export default ProfesionalRoutes