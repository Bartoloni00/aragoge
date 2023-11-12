import Router from 'express'
import {AuthController} from '../controllers/AuthController.js'

const AuthRouter = Router()

// El registro de usuarios se encuentra en usersRouters.js
AuthRouter.post('/auth', [] ,AuthController.login)

export default AuthRouter
