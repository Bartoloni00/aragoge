import { profesionalModel } from "../models/profesionalModel.js"

export class profesionalController {
    static async listAll(req, res)
    {
        const profesional = await profesionalModel.getAll()
        if(profesional) return res.json(profesional)
        res.status(404).json({message: 'Profesional not found'})
    }
    static async getByID(req, res)
    {
        const id = req.params.id
        res.send(await profesionalModel.getByID({id: id}))
    }
    static async create(req, res)
    {

    }
    static async delete(req, res)
    {

    }
    static async update(req, res)
    {

    }
}