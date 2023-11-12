import express from 'express'
import {UserController} from '../controllers/usersController.js'
import ProfesionalRoutes from './professionalsRouters.js'
import PlanningRoutes from './planningsRouters.js'
import TipesRoutes from './TipesRouters.js'
import UserMiddleware from '../middlewares/UserMiddleware.js'
import AuthRouter from './AuthRoutes.js'

const userRoutes = express.Router()

userRoutes.get('/users/', UserController.listAll)

userRoutes.get('/users/:id', UserController.getByID)

userRoutes.post('/users/create',[UserMiddleware.validate], UserController.create)

userRoutes.post('/users/delete/:id', UserController.delete)

userRoutes.post('/users/update/:id',[UserMiddleware.partialValidate], UserController.update)

userRoutes.use(ProfesionalRoutes)
userRoutes.use(PlanningRoutes)
userRoutes.use(TipesRoutes)
userRoutes.use(AuthRouter)

export default userRoutes