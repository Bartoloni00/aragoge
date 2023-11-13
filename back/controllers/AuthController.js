import {AuthModel} from '../models/AuthModel.js'
import TokenModel from '../models/TokenModel.js'
import bcrypt from "bcrypt"

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

    static async logout(req,res)
    {
        
    }
}