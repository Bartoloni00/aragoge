import z from 'zod'

const ProfesionalSchema = z.object({
    description: z.string({
        invalid_type_error:'Description for profesional must be a string',
        required_error: 'Description for profesional is required'
    }),
    synopsis: z.string({
        invalid_type_error:'Synopsis for profesional must be a string',
        required_error: 'Synopsis for profesional is required'
    }),
    banner: z.string().url().default('https://picsum.photos/400/225'),
    alt: z.string({
        invalid_type_error:'Alt for banner must be a string',
        required_error: 'Alt for banner is required'
    }).default('Banner de entrenador'),
    subscribers: z.number().int().positive().default(0),
    user: z.string({
        required_error: 'User is required'
    }),
    especialiti: z.string({
        required_error: 'Especialiti is required'
    }).default('entrenador'),
  })

export function validateProfesional(object) {
    return ProfesionalSchema.required().safeParse(object)
}

export function validatePartialProfesional(object) {
    return ProfesionalSchema.partial().safeParse(object)
}