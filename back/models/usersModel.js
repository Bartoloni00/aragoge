import { MongoClient, ObjectId } from "mongodb"
import { deleteFile } from "../services/fs.js"
import bcrypt from "bcrypt"
import 'dotenv/config'

const client = new MongoClient(process.env.CONECCION_DB)
const db = client.db(process.env.NAME_DB)
const userDB = db.collection(process.env.USERS_COLLECTION_DB)
const profesionalDB = db.collection(process.env.PROFESSIONALS_COLLECTION_DB)

export class UserModel 
{
    static async getAll()
    {
        return userDB.find().toArray()
    }

    static async getByID({id})
    {
       try {
            return userDB.findOne({_id: new ObjectId(id)})
       } catch (error) {
            throw new Error(`El usuario con el id: ${id} no pudo ser encontrado`)
       }
    }

    static async create ({datos})
    {
        const newUser = {...datos}
        const existe = await userDB.findOne({email : newUser.email})

        if (existe) {
            throw new Error(`El email: ${newUser.email} ya esta asignado a un usuario.`)
        }
        
        try {
            newUser.password = await bcrypt.hash(newUser.password, 10)
        } catch (error) {
            throw new Error(`Ocurrio un error al hashear la contraseña`)
        }
        try {
            const user = await userDB.insertOne(newUser)
            newUser._id = user.insertedId 
            return newUser
        } catch (error) {
            throw new Error(`El usuario no pudo ser creado: ${error}`)
        }
    }

    static async update ({id, datos})
    {
        try {
            await userDB.updateOne({_id: new ObjectId(id)}, {$set: datos})
            return datos
        } catch (error) {
            throw new Error(`ocurrio un error al editar los datos del usuarios: ${error}`)
        }
    }

    static async delete ({id})
    {
        const usuarioAeliminar = await this.getByID({id: id})
        const profesional = await profesionalDB.findOne({user: usuarioAeliminar._id})

        if (usuarioAeliminar.image.startsWith('uploads\\users\\')) {
            deleteFile(usuarioAeliminar.image)
        }

        try {
            if (profesional) {
                await profesionalDB.deleteOne({user: usuarioAeliminar._id})
                .catch(err => {
                    throw new Error(err.message)
                })

                if (profesional.banner.startsWith('uploads\\banners\\')) {
                    deleteFile(profesional.banner)
                }
            }
            await userDB.deleteOne({_id: new ObjectId(id)})
            return {'message':  `El usuario con el id: ${id} fue eliminado exitosamente`}
        } catch (error) {
            throw new Error(`El usuario con el id: ${id} no pudo ser eliminado`)
        }
       
    }
}