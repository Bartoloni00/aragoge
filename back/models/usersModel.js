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
        const newUser = {
            "name": datos.name,
            "lastname":datos.lastname,
            "email": datos.email,
            "password":datos.password,
            "image":datos.image ?? "https://picsum.photos/400/225",
            "alt":datos.alt ?? "descripcion de la imagen",
            "rol": datos.rol ?? "atleta"
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
        const editUser = {
            "name": datos.name,
            "lastname":datos.lastname,
            "email": datos.email,
            "password":datos.password,
            "image":datos.image ?? "https://picsum.photos/400/225",
            "alt":datos.alt ?? "descripcion de la imagen",
            "rol": datos.rol ?? "atleta"
        }

        try {
            await db.collection('users').updateOne({_id: new ObjectId(id)}, {$set: editUser})
            return editUser
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