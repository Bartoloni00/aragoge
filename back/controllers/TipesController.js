import {TipesModel} from '../models/TipesModel.js'

export class TipesController
{
    static async listCategories(req, res)
    {
        const categories = await TipesModel.getAllCategories()
        if (categories) return res.json(categories)
        res.status(404).json({"Error": 'Categories Not Found'})
    }

    static async listRoles(req, res)
    {
        const roles = await TipesModel.getAllRoles()
        if (roles) return res.json(roles)
        res.status(404).json({"Error": 'Roles Not Found'})
    }

    static async listSpecialities(req, res)
    {
        const specialities = await TipesModel.getAllSpecialities()
        if(specialities) return res.json(specialities)
        res.status(404).json({"Error": 'Specialities Not Found'})
    }
}