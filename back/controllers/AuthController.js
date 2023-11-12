import {AuthModel} from '../models/AuthModel.js'
import bcrypt from "bcrypt"

export class AuthController
{
    static async login(req, res)
    {
        return AuthModel.login({cuenta : req.body})
            .then(cuenta => {
                res.status(200).json({message: `Cuenta encontrada`, cuenta})
            })
            .catch(err => {
                res.status(404).json({error: `${err}`})
            })
    }

    static async logout(req,res)
    {
        
    }
}