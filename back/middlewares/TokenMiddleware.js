import TokenModel from "../models/TokenModel.js"

export default  class TokenMiddleware
{
    static async validateToken(req, res, next) {
        const token = req.header('Auth-Token')
    
        if (!token) {
            return res.status(401).json({ error: { message: `No se envió el token` } })
        }
        
        try {
            const cuenta = await TokenModel.validate({ token:token })
    
            if (!cuenta) {
                return res.status(401).json({ error: { message: `Token inválido` } })
            }
    
            req.cuenta = cuenta
            console.log(cuenta, 'token middleware');
            next()
        } catch (error) {
            return res.status(401).json({ error: { message: `El token no es válido` } })
        }
    }    
}