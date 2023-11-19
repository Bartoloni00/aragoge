import { MongoClient, ObjectId } from "mongodb"
import 'dotenv/config'
import { AuthModel } from "./AuthModel.js"
import { profesionalModel } from "./profesionalModel.js"

const client = new MongoClient(process.env.CONECCION_DB)
const db = client.db(process.env.NAME_DB)
const planningDB = db.collection(process.env.PLANNINGS_COLLECTION_DB)

export class PlanningModel
{
    static async getAll({filtros})
    {
        let filtrosArmados = {}

        // Filtro por titulo
        if( filtros.title ){
            filtrosArmados.$text = { $search: filtros.title }
          }

        // Filtro por categoria
        if(filtros.category){
            filtrosArmados.category = filtros.category
        }

        //Filtro por price
        if (filtros.pricemin && filtros.pricemax) {
            filtrosArmados.price = {$gte: parseInt(filtros.pricemin),$lte: parseInt(filtros.pricemax)}
        }
        else if (filtros.pricemin) {
            filtrosArmados.price = {$gte: parseInt(filtros.pricemin)}
        }
        else if (filtros.pricemax) {
            filtrosArmados.price = {$lte: parseInt(filtros.pricemax)}
        }

        // Filtro por subscribers
        if (filtros.subscribersmin && filtros.subscribersmax) {
            filtrosArmados.subscribers = {$gte: parseInt(filtros.subscribersmin),$lte: parseInt(filtros.subscribersmax)}
        }
        else if (filtros.subscribersmin) {
            filtrosArmados.subscribers = {$gte: parseInt(filtros.subscribersmin)}
        }
        else if (filtros.subscribersmax) {
            filtrosArmados.subscribers = {$lte: parseInt(filtros.subscribersmax)}
        }

        // Filtro por especialidad del entrenador
        if (filtros && filtros.especialiti) {
            filtrosArmados["profesional.especialiti"] = filtros.especialiti;
        }
        // filtrosArmados.profesional.especitiy devolvia esto: { profesional: { especialiti: 'entrenador' } }
        // por eso tuve que armar un array para generar esto: { "profesional.especialiti": 'entrenador' }

        if (filtros && filtros.profesional) {
            filtrosArmados["profesional.id"] = new ObjectId(filtros.profesional);
        }
        return planningDB.find(filtrosArmados).toArray()
    }

    static async getByID({id})
    {
        try {
            return planningDB.findOne({_id: new ObjectId(id)})
        } catch (error) {
            throw new Error(`La planificacion con el id: ${id} no pudo ser encontrada`)
        }
    }

    static async create({datos, token})
    {
        const user = await AuthModel.getUserAuth({token : token})
        if(!user) throw new Error('No pudo encontrase al usuario')

        const profesional = await profesionalModel.getByUserID({userID : user._id})
        if(!profesional) throw new Error('No pudo encontrase al profesional')

        const newPlanning = datos
        newPlanning.profesional = {        
            "id":new ObjectId(user._id),
            "name": user.name,
            "lastname": user.lastname,
            "especialiti": profesional.especialiti
        }
        try {
            const planning = await planningDB.insertOne(newPlanning)
            newPlanning._id = planning.insertedId
            return newPlanning
        } catch (error) {
            throw Error(`La planificacion no pudo ser creada: ${error}`)
        }
    }

    static async update({id, datos})
    {
        try {
            await planningDB.updateOne({_id: new ObjectId(id)}, {$set: datos})
            return datos
        } catch (error) {
            throw new Error(`ocurrio un error al editar los datos de la planificacion: ${error}`)
        }
    }

    static async delete({id})
    {
        try {
            await planningDB.deleteOne({ _id: new ObjectId(id) })
            return {'message': `La planificacion con el id: ${id} fue eliminada exitosamente`}
        } catch (error) {
            throw new Error(`La planificacion con el id: ${id} no pudo ser eliminada`)
        }
    }
}