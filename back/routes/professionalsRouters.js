import express from 'express'
import { profesionalController } from '../controllers/professionalsController.js'
import ProfesionalMiddleware from '../middlewares/ProfesionalMiddleware.js'
import TokenMiddleware from '../middlewares/TokenMiddleware.js'

const ProfesionalRoutes = express.Router()

ProfesionalRoutes.get('/profesional/', profesionalController.listAll)

ProfesionalRoutes.get('/profesional/:id', profesionalController.getByID)

ProfesionalRoutes.post('/profesional/create/',[ProfesionalMiddleware.validate, TokenMiddleware.validateToken], profesionalController.create)

ProfesionalRoutes.post('/profesional/delete/:id',[TokenMiddleware.validateToken], profesionalController.delete)

ProfesionalRoutes.post('/profesional/update/:id',[ProfesionalMiddleware.partialValidate, TokenMiddleware.validateToken], profesionalController.update)

export default ProfesionalRoutes