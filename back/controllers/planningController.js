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
        let newPlaning
        if (req.file) {
            newPlaning = {
                ...req.body,
                image: req.file.path
            }
        } else {
            newPlaning = {
                ...req.body,
                image: 'https://picsum.photos/300/150'
            }
        }
        PlanningModel.create({datos: newPlaning, token: req.header})
            .then(createdPlanning => {
                res.status(201).send(createdPlanning)
            })
            .catch(err => {
                res.status(400).json({'Error': err.message})
            })
    }

    static async update(req, res)
    {
        let datos = req.body
        if (req.file) {
            datos = {
                ...req.body,
                image: req.file.path
            }
        }
        PlanningModel.update({id: req.params.id, datos: datos})
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