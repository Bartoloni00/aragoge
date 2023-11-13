import {MongoClient, ObjectId} from "mongodb"
import bcrypt from 'bcrypt'

const client = new MongoClient('mongodb+srv://bartoloni:bartoloni@cluster0.hrfhf4t.mongodb.net/')
const db = client.db('aragoge')

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