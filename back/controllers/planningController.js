import {PlanningModel} from '../models/planningModel.js'

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
        PlanningModel.create({datos: req.body})
            .then(createdPlanning => {
                res.status(201).send(createdPlanning)
            })
            .catch(err => {
                res.status(500).json({'message': 'Error al intentar crear la planificacion', err})
            })
    }

    static async update(req, res)
    {
        PlanningModel.update({id: req.params.id, datos: req.body})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({'message': `Error al intentar editar la planificacion`, err})
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