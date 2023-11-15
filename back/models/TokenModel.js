import jwt from 'jsonwebtoken'
import {MongoClient, ObjectId} from "mongodb"
import 'dotenv/config'

const client = new MongoClient(process.env.CONECCION_DB)
const db = client.db(process.env.NAME_DB)
const tokenColleccion = db.collection(process.env.TOKEN_COLLECTION_DB)

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

    static async deleteToken({token})
    {
        try {
            await tokenColleccion.deleteOne({token : token})
        } catch (error) {
            throw new Error(`Error las cerrar session: ${error.message}`)
        }
    }
}