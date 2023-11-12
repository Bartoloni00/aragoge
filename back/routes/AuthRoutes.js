import Router from 'express'
import {AuthController} from '../controllers/AuthController.js'
import UserMiddleware from '../middlewares/UserMiddleware.js'

const AuthRouter = Router()

// El registro de usuarios se encuentra en usersRouters.js
AuthRouter.post('/auth/login', [UserMiddleware.partialValidate] ,AuthController.login)

export default AuthRouter
