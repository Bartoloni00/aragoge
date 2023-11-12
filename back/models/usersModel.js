import { MongoClient, ObjectId } from "mongodb"
import bcrypt, { hash } from "bcrypt"

const client = new MongoClient('mongodb+srv://bartoloni:bartoloni@cluster0.hrfhf4t.mongodb.net/')
const db = client.db('aragoge')

export class UserModel 
{
    static async getAll()
    {
        return db.collection('users').find().toArray()
    }

    static async getByID({id})
    {
       try {
            return db.collection('users').findOne({_id: new ObjectId(id)})
       } catch (error) {
            throw new Error(`El usuario con el id: ${id} no pudo ser encontrado`)
       }
    }

    static async create ({datos})
    {
        const newUser = {...datos}
        const existe = await db.collection('users').findOne({email : newUser.email})

        if (existe) {
            throw new Error(`El email: ${newUser.email} ya esta asignado a un usuario.`)
        }
        
        try {
            newUser.password = await bcrypt.hash(newUser.password, 10)
        } catch (error) {
            throw new Error(`Ocurrio un error al hashear la contraseña`)
        }
        try {
            const user = await db.collection('users').insertOne(newUser)
            newUser._id = user.insertedId 
            return newUser
        } catch (error) {
            throw new Error(`El usuario no pudo ser creado: ${error}`)
        }
    }

    static async update ({id, datos})
    {
        try {
            await db.collection('users').updateOne({_id: new ObjectId(id)}, {$set: datos})
            return datos
        } catch (error) {
            throw new Error(`ocurrio un error al editar los datos del usuarios: ${error}`)
        }
    }

    static async delete ({id})
    {
        try {
            await db.collection('users').deleteOne({_id: new ObjectId(id)})
            return {'message':  `El usuario con el id: ${id} fue eliminado exitosamente`}
        } catch (error) {
            throw new Error(`El usuario con el id: ${id} no pudo ser eliminado`)
        }
       
    }
}