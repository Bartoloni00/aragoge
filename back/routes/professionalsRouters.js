import express from 'express'
import { profesionalController } from '../controllers/professionalsController.js'

const ProfesionalRoutes = express.Router()

ProfesionalRoutes.get('/profesional/', profesionalController.listAll)

ProfesionalRoutes.get('/profesional/:id', profesionalController.getByID)

ProfesionalRoutes.post('/profesional/create/', profesionalController.create)

ProfesionalRoutes.post('/profesional/delete/:id', profesionalController.delete)

ProfesionalRoutes.post('/profesional/update/:id', profesionalController.update)

export default ProfesionalRoutes