import { MongoClient} from "mongodb"
import 'dotenv/config'

const client = new MongoClient(process.env.CONECCION_DB)
const db = client.db(process.env.NAME_DB)

export class TipesModel
{
    static async getAllCategories()
    {
        return db.collection(process.env.CATEGORIES_COLLECTION_DB).find().toArray()
    }

    static async getAllRoles()
    {
        return db.collection(process.env.ROLES_COLLECTION_DB).find().toArray()
    }

    static async getAllSpecialities()
    {
        return db.collection(process.env.SPECIALITIES_COLLECTION_DB).find().toArray()
    }
}