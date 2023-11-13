import jwt from 'jsonwebtoken'
import {MongoClient, ObjectId} from "mongodb"

const client = new MongoClient('mongodb+srv://bartoloni:bartoloni@cluster0.hrfhf4t.mongodb.net/')
const db = client.db('aragoge')

const tokenColleccion = db.collection('tokens')

export default class TokenModel
{
    static async crearToken({cuenta})
    {
        const token = jwt.sign(cuenta,"clave secreta")

        await tokenColleccion.insertOne({token, cuenta_id : cuenta._id})

        return token
    }

    static async validate({token})
    {
        try {
            const payload = jwt.verify(token, "clave secreta")
            // const payload = jwt.verify(token, env.process.TOKEN)
            const sessionActiva = await tokenColleccion.findOne({token, cuenta_id: new ObjectId(payload._id)})
            if (sessionActiva) return payload

            throw new Error(`Token inválido: La sesión no está activa en la colección`);
        } catch (error) {
            throw new Error(`Error al validar el token: ${error.message}`);
        }
    }
}