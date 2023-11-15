import Router from 'express'
import {AuthController} from '../controllers/AuthController.js'
import UserMiddleware from '../middlewares/UserMiddleware.js'
import TokenMiddleware from '../middlewares/TokenMiddleware.js'

const AuthRouter = Router()

// El registro de usuarios se encuentra en usersRouters.js
AuthRouter.post('/auth/login', [UserMiddleware.partialValidate] ,AuthController.login)
AuthRouter.post('/auth',[TokenMiddleware.validateToken],AuthController.logout)


export default AuthRouter
