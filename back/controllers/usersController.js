import {UserModel} from '../models/usersModel.js'
import { validateUser, validatePartialUser } from '../schemas/user.js'

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
        const createUser = validateUser(req.body)
        console.log(req.body);
        if (createUser.error) {
            return res.status(422).json({error: JSON.parse(createUser.error).message})
        }
        UserModel.create({datos: createUser.data})
            .then(user => {
                res.status(201).send(user)
            })
            .catch(err => {
                res.status(400).json({"Error": err.message})
            })
    }
    
    static async update(req, res)
    {
        const editUser = validatePartialUser(req.body)
        if (editUser.error) {
            return res.status(422).json({error: JSON.parse(editUser.error).message})
        }
        UserModel.update({id: req.params.id, datos: editUser.data})
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