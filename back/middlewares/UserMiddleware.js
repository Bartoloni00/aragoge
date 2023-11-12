import { validateUser, validatePartialUser } from '../schemas/user.js'

export default class UserMiddleware
{
    static validate(req, res, next){
        const createUser = validateUser(req.body)
        if (createUser.error) {
            return res.status(422).json({error: JSON.parse(createUser.error)})
        }
        req.body = createUser.data
        next()
    }
    
    static partialValidate(req, res, next){
        const editUser = validatePartialUser(req.body)
        if (editUser.error) {
            return res.status(422).json({error: JSON.parse(editUser.error)})
        }
        req.body = editUser.data
        next()
    }
}