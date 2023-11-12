import {MongoClient, ObjectId} from "mongodb"

const client = new MongoClient('mongodb+srv://bartoloni:bartoloni@cluster0.hrfhf4t.mongodb.net/')
const db = client.db('aragoge')

export class AuthModel
{
    static async login({})
    {
        
    }
}