import {PlanningModel} from '../models/planningModel.js'
import { validatePlanning, validatePartialPlanning } from "../schemas/planning.js"

export class PlanningController
{
    static async listAll(req, res)
    {
        let filtros = req.query
        const planificacion = await PlanningModel.getAll({filtros: filtros})
        if (planificacion && planificacion.length >= 1) {
            return res.json(planificacion);
        } else {
            return res.status(404).json({ 'Error': 'Planning not found' });
        }
    }

    static async getByID(req, res)
    {
        const id = req.params.id

        PlanningModel.getByID({id: id})
            .then(data => {
                res.send(data)
            })
            .catch(err=>{
                res.status(404).json({"Error": err.message})
            })
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
                res.status(400).json({'Error': err.message})
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
            res.status(400).json({'Error': err.message})
        })
    }

    static async delete(req, res)
    {
        PlanningModel.delete({id: req.params.id})
        .then(data => {
            res.json(data)
        })
        .catch(err=>{
            res.status(400).json({'Error': err.message})
        })
    }
}