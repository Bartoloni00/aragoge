import express from 'express'
import {PlanningController} from '../controllers/planningController.js'

const PlanningRoutes = express.Router()

PlanningRoutes.get('/planning/', PlanningController.listAll)

PlanningRoutes.get('/planning/:id', PlanningController.getByID)

PlanningRoutes.post('/planning/create', PlanningController.create)

PlanningRoutes.post('/planning/delete/:id', PlanningController.delete)

PlanningRoutes.post('/planning/update/:id', PlanningController.update)

export default PlanningRoutes
