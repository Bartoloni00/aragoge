import Router from 'express'
import {AuthController} from '../controllers/AuthController.js'

const AuthRouter = Router()

// El registro de usuarios se encuentra en usersRouters.js
Router.post('/auth',[],AuthController.login)

export default ApiuserRoutes
