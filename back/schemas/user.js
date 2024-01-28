import z from 'zod'

const userSchema = z.object({
    name: z.string({
        invalid_type_error:'User name must be a string',
        required_error: 'User name is required'
    }),
    lastname: z.string({
        invalid_type_error:'User lastname must be a string',
        required_error: 'User lastname is required'
    }),
    email: z.string({
        invalid_type_error:'User email must be a string',
        required_error: 'User email is required'
    }).email({
        invalid_type_error:'This is not an email'
    }),
    password: z.string(),
    alt: z.string({
        invalid_type_error:'Alt for image must be a string',
        required_error: 'Alt for image is required'
    }).default('descripcion de la imagen'),
    rol: z.string({
        required_error: 'Rol for user is required'
    }).default('atleta'),
  })

export function validateUser(object) {
    
    return userSchema.required().safeParse(object)
}

export function validatePartialUser(object) {
    return userSchema.partial().safeParse(object)
}