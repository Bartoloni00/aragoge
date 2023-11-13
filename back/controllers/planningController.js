import {PlanningModel} from '../models/planningModel.js'

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
        // console.log(req.cuenta);
        PlanningModel.create({datos: req.body})
            .then(createdPlanning => {
                res.status(201).send(createdPlanning)
            })
            .catch(err => {
                res.status(400).json({'Error': err.message})
            })
    }

    static async update(req, res)
    {
        PlanningModel.update({id: req.params.id, datos: req.body})
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