import express from 'express'
import {PlanningController} from '../../controllers/planningController.js'
import PlanningMiddleware from '../../middlewares/PlanningMiddleware.js'

const PlanningRoutes = express.Router()

PlanningRoutes.get('/planning/', PlanningController.listAll)

PlanningRoutes.get('/planning/:id', PlanningController.getByID)

PlanningRoutes.post('/planning/',[PlanningMiddleware.validate], PlanningController.create)

PlanningRoutes.delete('/planning/:id', PlanningController.delete)

PlanningRoutes.patch('/planning/:id',[PlanningMiddleware.partialValidate], PlanningController.update)

export default PlanningRoutes
