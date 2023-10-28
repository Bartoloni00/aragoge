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
            return {"message": 'Ocurrio un error al intentar obtener el documento', error}
        }
    }
}