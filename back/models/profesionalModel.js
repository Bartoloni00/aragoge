import { MongoClient, ObjectId } from "mongodb"
import { deleteFile } from "../services/fs.js"
import 'dotenv/config'

const client = new MongoClient(process.env.CONECCION_DB)
const db = client.db(process.env.NAME_DB)
const profesionalDB = db.collection(process.env.PROFESSIONALS_COLLECTION_DB)

export class profesionalModel 
{
    static async getAll()//({filtros})
    {
        // TODO: filtrar por speciality
        return profesionalDB.find().toArray()
    }

    static async getByID({id})
    {
        try {
            return profesionalDB.findOne({_id: new ObjectId(id)})
        } catch (error) {
            throw new Error(`El profesional con el id: ${id} no pudo ser encontrado`)
        }
    }
    
    static async getByUserID({userID})
    {
        try {
            return profesionalDB.findOne({user: new ObjectId(userID)})
        } catch (error) {
            throw new Error(`El profesional con el id: ${id} no pudo ser encontrado`)
        }
    }

    static async create({profesional})
    {
        const newProfesional = profesional
        const userExist = await db.collection(process.env.USERS_COLLECTION_DB).findOne({_id: new ObjectId(newProfesional.user)})
        if (!userExist) {
            throw new Error(`El usuario que quiere ser asignado a este profesional no existe`)
        }

        if (!(userExist.rol == 'profesional')){
            throw new Error(`El usuario: ${userExist.name} ${userExist.lastname} no posee el rol de profesional`)
        }

        const existe = await profesionalDB.findOne({user: newProfesional._id})
        
        if (existe) {
            throw new Error(`El usuario: ${userExist.name} ${userExist.lastname} ya tiene creado su perfil de profesional.`)
        }
        try {
            const profesional = await profesionalDB.insertOne({...newProfesional, user: new ObjectId(newProfesional.user)})
            newProfesional._id = profesional.insertedId 
            return {userExist,newProfesional}
        } catch (error) {
            throw new Error(`No se ha podido agregar al profesional en la base de datos ${error}`)
        }
    }

    static async delete ({id})
    {
        const professional = await this.getByID({id})
        if (professional.banner.startsWith('uploads\\banners\\')) {
            deleteFile(professional.banner)
        }
        try {
            await profesionalDB.deleteOne({ _id: new ObjectId(id) })
            return {'message': `El profesional con el id: ${id} fue eliminado exitosamente`}
        } catch (error) {
            throw new Error(`El profesional con el id: ${id} no pudo ser eliminado`)
        }
    }

    static async update({id, datos})
    {
        if (datos.banner) {
            const profesional = await this.getByID({id})
            if (profesional.banner.startsWith('uploads\\banners\\')) {
                deleteFile(profesional.banner)
            }
        }
        try {
            await profesionalDB.updateOne({ _id: new ObjectId(id) }, { $set: datos });
            return datos;
        } catch (error) {
            throw new Error(`ocurrio un error al editar al profesional: ${error}`)
        }
    }
}