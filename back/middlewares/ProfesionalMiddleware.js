import { validateProfesional, validatePartialProfesional } from '../schemas/profesional.js'

export default class ProfesionalMiddleware
{
    static validate(req, res, next){
        const createProfesional = validateProfesional(req.body)
        if (createProfesional.error) {
            return res.status(422).json({error: JSON.parse(createProfesional.error)})
        }
        req.body = createProfesional.data
        next()
    }
    
    static partialValidate(req, res, next){
        const editProfesional = validatePartialProfesional(req.body)
        if (editProfesional.error) {
            return res.status(422).json({error: JSON.parse(editProfesional.error)})
        }
        req.body = editProfesional.data
        next()
    }
}