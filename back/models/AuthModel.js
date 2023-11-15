import {MongoClient, ObjectId} from "mongodb"
import bcrypt from 'bcrypt'
import 'dotenv/config'

const client = new MongoClient(process.env.CONECCION_DB)
const db = client.db(process.env.NAME_DB)

export class AuthModel
{
    static async login({cuenta})
    {
        const cuentaExistente = await db.collection('users').findOne({email : cuenta.email})

        if (!cuentaExistente) {
            throw new Error(`No se pudo loguear`)
        }

        const isMatch = await bcrypt.compare(cuenta.password, cuentaExistente.password)

        if (!isMatch) {
            throw new Error(`No se pudo loguear`)
        }
        // puede que tenga que validar el rol del usuario aca
        return {_id: cuentaExistente._id, email: cuentaExistente.email , password: undefined}
    }
}