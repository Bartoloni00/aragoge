import express from 'express'
import {UserController} from '../../controllers/usersController.js'
import ProfesionalRoutes from './professionalsRouters.js'
import PlanningRoutes from './planningsRouters.js'
import TipesRoutes from './TipesRouters.js'
import AuthRoutes from './AuthRoutes.js'
import UserMiddleware from '../../middlewares/UserMiddleware.js'
import TokenMiddleware from '../../middlewares/TokenMiddleware.js'

const ApiuserRoutes = express.Router()

ApiuserRoutes.get('/users/', UserController.listAll)

ApiuserRoutes.get('/users/:id', UserController.getByID)

ApiuserRoutes.post('/users/', [UserMiddleware.validate] , UserController.create)

ApiuserRoutes.delete('/users/:id',[TokenMiddleware.validateToken], UserController.delete)

ApiuserRoutes.patch('/users/:id', [UserMiddleware.partialValidate, TokenMiddleware.validateToken] , UserController.update)

ApiuserRoutes.use(ProfesionalRoutes)
ApiuserRoutes.use(PlanningRoutes)
ApiuserRoutes.use(TipesRoutes)
ApiuserRoutes.use(AuthRoutes)

export default ApiuserRoutes