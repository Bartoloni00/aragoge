import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb+srv://bartoloni:bartoloni@cluster0.hrfhf4t.mongodb.net/')
const db = client.db('aragoge')

export class profesionalModel 
{
    static async getAll()//({filtros})
    {
        // TODO: filtrar por speciality
        return db.collection('professionals').find().toArray()
    }

    static async getByID({id})
    {
        try {
            return db.collection('professionals').findOne({_id: new ObjectId(id)})
        } catch (error) {
            throw new Error(`El profesional con el id: ${id} no pudo ser encontrado`)
        }
    }

    static async create({profesional})
    {
        const newProfesional = {
            "description": profesional.description,
            "synopsis": profesional.synopsis,
            "banner": profesional.banner ?? "https://picsum.photos/400/225",
            "alt": profesional.alt ?? "Banner de entrenador",
            "subscribers": profesional.subscribers ?? 0,
            "user": "653ab688b767888b31dfea42", // esto tendra que ser una conexion de 1 a 1 por lo que no lo tocare hasta tener los usuarios
            "especialiti": profesional.especialiti // esto tambien tiene una relacion con la coleccion specialities
        } 
        try {
            const profesional = await db.collection('professionals').insertOne(newProfesional)
            newProfesional._id = profesional.insertedId 
            return newProfesional
        } catch (error) {
            throw new Error(`No se ha podido agregar al profesional en la base de datos ${error}`)
        }
    }

    static async delete ({id})
    {
        try {
            await db.collection('professionals').deleteOne({ _id: new ObjectId(id) })
            return {'message': `El profesional con el id: ${id} fue eliminado exitosamente`}
        } catch (error) {
            throw new Error(`El profesional con el id: ${id} no pudo ser eliminado`)
        }
    }

    static async update({id, datos})
    {
        const updateProfesional = {
            "description": datos.description,
            "synopsis": datos.synopsis,
            "banner": datos.banner ?? "https://picsum.photos/400/225",
            "alt": datos.alt ?? "Banner de entrenador",
            "subscribers": datos.subscribers ?? 0,
            "especialiti": datos.especialiti // esto tambien tiene una relacion con la coleccion specialities
        } 
        try {
            await db.collection('professionals').updateOne({ _id: new ObjectId(id) }, { $set: updateProfesional });
            return updateProfesional;
        } catch (error) {
            throw new Error(`ocurrio un error al editar al profesional: ${error}`)
        }
    }
}