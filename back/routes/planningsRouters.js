import express from 'express'
import {PlanningController} from '../controllers/planningController.js'

const PlanningRoutes = express.Router()

PlanningRoutes.get('/planning/', PlanningController.listAll)

PlanningRoutes.get('/planning/:id', PlanningController.getByID)

PlanningRoutes.post('/planning/', PlanningController.create)

PlanningRoutes.delete('/planning/:id', PlanningController.delete)

PlanningRoutes.patch('/planning/:id', PlanningController.update)

export default PlanningRoutes
