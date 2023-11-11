import express from 'express'
import { profesionalController } from '../../controllers/professionalsController.js'

const ProfesionalRoutes = express.Router()

ProfesionalRoutes.get('/profesional/', profesionalController.listAll)

ProfesionalRoutes.get('/profesional/:id', profesionalController.getByID)

ProfesionalRoutes.post('/profesional/', profesionalController.create)

ProfesionalRoutes.delete('/profesional/:id', profesionalController.delete)

ProfesionalRoutes.patch('/profesional/:id', profesionalController.update)

export default ProfesionalRoutes