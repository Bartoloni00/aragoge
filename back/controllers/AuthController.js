import {AuthModel} from '../models/AuthModel.js'
import TokenModel from '../models/TokenModel.js'

export class AuthController
{
    static async login(req, res)
    {
        return AuthModel.login({cuenta : req.body})
            .then( async (user) => {
                return {token: await TokenModel.crearToken({cuenta: user}), user}
            })
            .then(auth => {
                res.status(200).json(auth)
            })
            .catch(err => {
                res.status(404).json({error: `${err}`})
            })
    }

    static async logout( req , res)
    {
        const token = req.header('Auth-Token')
        return TokenModel.deleteToken({token: token})
                .then(()=>{
                    res.status(200).json({Message: `Session cerrada exitosamente`})
                })
                .catch((err)=>{
                    res.status(400).json({Error: err.message})
                })
    }
}