import { AuthModel } from "../models/AuthModel.js"

export default class AuthMiddleware
{
    static async UserAuthProfessional(req, res, next)
    {
        const token = req.header('Auth-Token')
        const usuario = await AuthModel.getUserAuth({token: token})
                            .catch(err=>{
                                return res.status(401).json({ error: { message: err.message } })
                            })

        if(usuario.rol == 'profesional' || usuario.rol == 'admin'){
            next()
        }else{
        return res.status(401).json({ error: { message: `El Usuario no posee los permisos necesarios para realizar esta accion` } })
        }
    }
}
