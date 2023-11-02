import {PlanningModel} from '../models/planningModel.js'
import { validatePlanning, validatePartialPlanning } from "../schemas/planning.js"

export class PlanningController
{
    static async listAll(req, res)
    {
        const planificacion = await PlanningModel.getAll()
        if(planificacion) return res.json(planificacion)
        res.status(404).json({message: 'Planning not found'})
    }

    static async getByID(req, res)
    {
        const id = req.params.id

        PlanningModel.getByID({id: id})
            .then(data => {
                res.send(data)
            })
            .catch(err=>res.status(500).json({"message": `Ocurrio un erro al obtener la planificacion: ${err}`}))
    }

    static async create(req, res)
    {
        const newPlanning = validatePlanning(req.body)
        if (newPlanning.error) {
            return res.status(422).json({error: JSON.parse(result.error).message})
        }
        PlanningModel.create({datos: newPlanning.data})
            .then(createdPlanning => {
                res.status(201).send(createdPlanning)
            })
            .catch(err => {
                res.status(500).json({'message': 'Error al intentar crear la planificacion', err})
            })
    }

    static async update(req, res)
    {
        const editPlanning = validatePartialPlanning(req.body)
        if (!editPlanning.success) {
            return res.status(400).json({error: JSON.parse(editPlanning.error.message)})
        }
        PlanningModel.update({id: req.params.id, datos: editPlanning.data})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({'message': `Error al intentar editar la planificacion, ${err}`})
        })
    }

    static async delete(req, res)
    {
        PlanningModel.delete({id: req.params.id})
        .then(data => {
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({'message': `Error al intentar eliminar la planificacion: ${req.params.id}`, err})
        })
    }
}