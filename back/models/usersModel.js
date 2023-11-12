import { MongoClient, ObjectId } from "mongodb"

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
        try {
            const user = await db.collection('users').insertOne(datos)
            datos._id = user.insertedId 
            return datos
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