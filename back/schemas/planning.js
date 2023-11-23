import z from 'zod'

const PlanningSchema = z.object({
    title: z.string({
        invalid_type_error:'Title must be a string',
        required_error: 'Title is required'
    }),
    description: z.string({
        invalid_type_error:'Description must be a string',
        required_error: 'Description is required'
    }),
    subscribers: z.number().int(),
    //Se romovio la función positive() ya que generaba un fallo al crear una nueva planificación con 0 subscribers
    price: z.number().positive(),
    image: z.string().url().default('https://picsum.photos/400/225'),
    alt: z.string({
        invalid_type_error:'Alt for image must be a string',
        required_error: 'Alt for image is required'
    }).default('descripcion de la imagen'),
    category: z.string(),
    // profesional: z.object({
    //   id: z.string(),
    //   name: z.string({
    //     invalid_type_error:'User name must be a string',
    //     required_error: 'User name is required'
    // }),
    //   lastname: z.string({
    //     invalid_type_error:'User lastname must be a string',
    //     required_error: 'User lastname is required'
    // }),
    //   especialiti: z.string({
    //     required_error: 'Especialiti is required'
    // }).default('entrenador')
    // })
})

export function validatePlanning(object) {
    return PlanningSchema.required().safeParse(object)
}

export function validatePartialPlanning(object) {
    return PlanningSchema.partial().safeParse(object)
}