import express from 'express'
import {PlanningController} from '../controllers/planningController.js'
import PlanningMiddleware from '../middlewares/PlanningMiddleware.js'
import TokenMiddleware from '../middlewares/TokenMiddleware.js'

const PlanningRoutes = express.Router()

PlanningRoutes.get('/planning/', PlanningController.listAll)

PlanningRoutes.get('/planning/:id', PlanningController.getByID)

PlanningRoutes.post('/planning/create',[PlanningMiddleware.validate, TokenMiddleware.validateToken], PlanningController.create)

PlanningRoutes.post('/planning/delete/:id',[TokenMiddleware.validateToken], PlanningController.delete)

PlanningRoutes.post('/planning/update/:id',[PlanningMiddleware.partialValidate,TokenMiddleware.validateToken], PlanningController.update)

export default PlanningRoutes
