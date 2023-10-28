import {UserModel} from '../models/usersModel.js'

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
        UserModel.create({datos: req.body})
            .then(user => {
                res.status(200).send(user)
            })
            .catch(err => {
                res.status(500).json({"message": "Error al intentar agregar al usuario", err})
            })
    }
    
    static async update(req, res)
    {
        UserModel.update({id: req.params.id, datos: req.body})
            .then(data => {
                console.log('controller');
                res.json(data)
            })
            .catch(err => {
                res.status(500).json({'message': `Error al intentar editar al usuario`})
            })
    }
    static async delete(req, res)
    {
        UserModel.delete({id: req.params.id})
            .then(data => {
                console.log('controller');
                res.json(data)
            })
            .catch(err=>{
                res.status(500).json({'message': `Error al intentar eliminar al usuario`, err})
            })
    }
}