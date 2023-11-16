import {MongoClient, ObjectId} from "mongodb"
import bcrypt from 'bcrypt'
import 'dotenv/config'

const client = new MongoClient(process.env.CONECCION_DB)
const db = client.db(process.env.NAME_DB)
const userCollection = db.collection(process.env.USERS_COLLECTION_DB)
const tokenColleccion = db.collection(process.env.TOKEN_COLLECTION_DB)

export class AuthModel
{
    static async login({cuenta})
    {
        const cuentaExistente = await userCollection.findOne({email : cuenta.email})

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

    static async getUserAuth({token})
    {
        const tokenEnDB = await tokenColleccion.findOne({token: token})
        if(!tokenEnDB) throw new Error(`Token inválido`)

        const user = await userCollection.findOne({_id : new ObjectId(tokenEnDB.cuenta_id)})
        if(!user) throw new Error(`Usuario inexistente`)

        return user
        
    }
}