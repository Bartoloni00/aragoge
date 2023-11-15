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
        const newProfesional = profesional
        const userExist = await db.collection('users').findOne({_id: new ObjectId(newProfesional.user)})
        if (!userExist) {
            throw new Error(`El usuario que quiere ser asignado a este profesional no existe`)
        }

        if (!(userExist.rol == 'profesional')){
            throw new Error(`El usuario: ${userExist.name} ${userExist.lastname} no posee el rol de profesional`)
        }

        const existe = await db.collection('professionals').findOne({user: newProfesional.user})
        
        if (existe) {
            throw new Error(`El usuario: ${userExist.name} ${userExist.lastname} ya tiene creado su perfil de profesional.`)
        }
        try {
            const profesional = await db.collection('professionals').insertOne({...newProfesional, user: new ObjectId(newProfesional.user)})
            newProfesional._id = profesional.insertedId 
            return {userExist,newProfesional}
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
        try {
            await db.collection('professionals').updateOne({ _id: new ObjectId(id) }, { $set: datos });
            return datos;
        } catch (error) {
            throw new Error(`ocurrio un error al editar al profesional: ${error}`)
        }
    }
}