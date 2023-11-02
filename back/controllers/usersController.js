import {UserModel} from '../models/usersModel.js'
import { validateUser, validatePartialUser } from '../schemas/user.js'

export class UserController {
    static async listAll(req, res)
    {
        const user = await UserModel.getAll()
        if(user) return res.json(user)
        res.status(404).json({message: 'User not found'})
    }
    static async getByID(req, res)
    {
        const id = req.params.id
        UserModel.getByID({id: id})
            .then(user => {
                res.status(200).send(user)
            })
            .catch(err => {
                res.status(500).json({'Error': `Ocurrio un error al buscar al usuario: ${id}`, err})
            })
    }
    static async create(req, res)
    {
        const createUser = validateUser(req.body)
        if (createUser.error) {
            return res.status(422).json({error: JSON.parse(result.error).message})
        }
        UserModel.create({datos: createUser.data})
            .then(user => {
                res.status(200).send(user)
            })
            .catch(err => {
                res.status(500).json({"message": "Error al intentar agregar al usuario", err})
            })
    }
    
    static async update(req, res)
    {
        const editUser = validatePartialUser(req.body)
        if (editUser.error) {
            return res.status(422).json({error: JSON.parse(result.error).message})
        }
        UserModel.update({id: req.params.id, datos: editUser.data})
            .then(data => {
                console.log('controller');
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({'message': `Error al intentar editar al usuario`, err})
            })
    }
    static async delete(req, res)
    {
        UserModel.delete({id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err=>{
                res.status(500).json({'message': `Error al intentar eliminar al usuario`, err})
            })
    }
}