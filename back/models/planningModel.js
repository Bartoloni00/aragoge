import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient('mongodb+srv://bartoloni:bartoloni@cluster0.hrfhf4t.mongodb.net/')
const db = client.db('aragoge')

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
        return db.collection('plannings').find(filtrosArmados).toArray()
    }

    static async getByID({id})
    {
        try {
            return db.collection('plannings').findOne({_id: new ObjectId(id)})
        } catch (error) {
            throw new Error(`La planificacion con el id: ${id} no pudo ser encontrada`)
        }
    }

    static async create({datos})
    {
        const newPlanning = {
            "title": datos.title,
            "description": datos.description,
            "subscribers": datos.subscribers,
            "price": datos.price,
            "image":datos.image ?? "https://picsum.photos/400/225",
            "alt": datos.alt ?? "descripcion de la imagen",
            "category": datos.category, 
            "profesional": {
                "id": new ObjectId(datos.profesional.id),
                "name": datos.profesional.name,
                "lastname": datos.profesional.lastname,
                "especialiti": datos.profesional.especialiti
            }
        }
    
        try {
            const planning = await db.collection('plannings').insertOne(newPlanning)
            newPlanning._id = planning.insertedId
            return newPlanning
        } catch (error) {
            throw Error(`La planificacion no pudo ser creada: ${error}`)
        }
    }

    static async update({id, datos})
    {
        const editPlanning = {
            "title": datos.title,
            "description": datos.description,
            "subscribers": datos.subscribers,
            "price": datos.price,
            "image":datos.image ?? "https://picsum.photos/400/225",
            "alt": datos.alt ?? "descripcion de la imagen",
            "category": datos.category, 
            "profesional": {
                "id": new ObjectId(datos.profesional.id),
                "name": datos.profesional.name,
                "lastname": datos.profesional.lastname,
                "especialiti": datos.profesional.especialiti
            }
        }
        try {
            await db.collection('plannings').updateOne({_id: new ObjectId(id)}, {$set: editPlanning})
            return editPlanning
        } catch (error) {
            throw new Error(`ocurrio un error al editar los datos de la planificacion: ${error}`)
        }
    }

    static async delete({id})
    {
        try {
            await db.collection('plannings').deleteOne({ _id: new ObjectId(id) })
            return {'message': `La planificacion con el id: ${id} fue eliminada exitosamente`}
        } catch (error) {
            throw new Error(`La planificacion con el id: ${id} no pudo ser eliminada`)
        }
    }
}