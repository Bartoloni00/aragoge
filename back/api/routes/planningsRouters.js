import express from 'express'
import {PlanningController} from '../../controllers/planningController.js'
import PlanningMiddleware from '../../middlewares/PlanningMiddleware.js'
import TokenMiddleware from '../../middlewares/TokenMiddleware.js'
import AuthMiddleware from '../../middlewares/AuthMiddlware.js'

const PlanningRoutes = express.Router()

PlanningRoutes.get('/planning/', PlanningController.listAll)

PlanningRoutes.get('/planning/:id', PlanningController.getByID)

PlanningRoutes.post('/planning/',[
    PlanningMiddleware.validate, 
    TokenMiddleware.validateToken,
    AuthMiddleware.UserAuthProfessional
], PlanningController.create)

PlanningRoutes.delete('/planning/:id',[
    TokenMiddleware.validateToken,
    AuthMiddleware.UserAuthProfessional
], PlanningController.delete)

PlanningRoutes.patch('/planning/:id',[
    PlanningMiddleware.partialValidate,
    TokenMiddleware.validateToken,
    AuthMiddleware.UserAuthProfessional
], PlanningController.update)

export default PlanningRoutes
