import express from 'express'
import { profesionalController } from '../controllers/professionalsController.js'
import ProfesionalMiddleware from '../middlewares/ProfesionalMiddleware.js'

const ProfesionalRoutes = express.Router()

ProfesionalRoutes.get('/profesional/', profesionalController.listAll)

ProfesionalRoutes.get('/profesional/:id', profesionalController.getByID)

ProfesionalRoutes.post('/profesional/create/',[ProfesionalMiddleware.validate], profesionalController.create)

ProfesionalRoutes.post('/profesional/delete/:id', profesionalController.delete)

ProfesionalRoutes.post('/profesional/update/:id',[ProfesionalMiddleware.partialValidate], profesionalController.update)

export default ProfesionalRoutes