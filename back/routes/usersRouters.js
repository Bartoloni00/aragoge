import express from 'express'
import {UserController} from '../controllers/usersController.js'
import ProfesionalRoutes from './professionalsRouters.js'
import PlanningRoutes from './planningsRouters.js'

const userRoutes = express.Router()

userRoutes.get('/users/', UserController.listAll)

userRoutes.get('/users/:id', UserController.getByID)

userRoutes.post('/users/', UserController.create)

userRoutes.delete('/users/:id', UserController.delete)

userRoutes.patch('/users/:id', UserController.update)

userRoutes.use(ProfesionalRoutes)
userRoutes.use(PlanningRoutes)
export default userRoutes