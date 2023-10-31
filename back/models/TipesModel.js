import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb+srv://bartoloni:bartoloni@cluster0.hrfhf4t.mongodb.net/')
const db = client.db('aragoge')

export class TipesModel
{
    static async getAllCategories()
    {
        return db.collection('categories').find().toArray()
    }

    static async getAllRoles()
    {
        return db.collection('roles').find().toArray()
    }

    static async getAllSpecialities()
    {
        return db.collection('specialities').find().toArray()
    }
}