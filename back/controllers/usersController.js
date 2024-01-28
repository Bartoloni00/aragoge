import {UserModel} from '../models/usersModel.js'

export class UserController {
    static async listAll(req, res)
    {
        const user = await UserModel.getAll()
        if(user) return res.json(user)
        res.status(404).json({'Error': 'User not found'})
    }
    static async getByID(req, res)
    {
        const id = req.params.id
        UserModel.getByID({id: id})
            .then(user => {
                res.status(200).send(user)
            })
            .catch(err => {
                res.status(404).json({'Error': err.message})
            })
    }
    static async create(req, res)
    {
        const datos = {
            ...req.body,
            image: req.file.path
        }
        UserModel.create({datos})
            .then(user => {
                res.status(201).send(user)
            })
            .catch(err => {
                res.status(400).json({"Error": err.message})
            })
    }
    
    static async update(req, res)
    {
        UserModel.update({id: req.params.id, datos: req.body})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(400).json({'Error': err.message})
            })
    }
    static async delete(req, res)
    {
        UserModel.delete({id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err=>{
                res.status(400).json({'Error': err.message})
            })
    }
}