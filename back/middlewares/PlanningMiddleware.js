import { validatePlanning, validatePartialPlanning } from "../schemas/planning.js"

export default class PlanningMiddleware
{
    static validate(req, res, next){
        const createPlanning = validatePlanning(req.body)
        if (createPlanning.error) {
            return res.status(422).json({error: JSON.parse(createPlanning.error)})
        }
        req.body = createPlanning.data
        next()
    }
    
    static partialValidate(req, res, next){
        const editPlanning = validatePartialPlanning(req.body)
        if (editPlanning.error) {
            return res.status(422).json({error: JSON.parse(editPlanning.error)})
        }
        req.body = editPlanning.data
        next()
    }
}