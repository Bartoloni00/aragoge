import { profesionalModel } from "../models/profesionalModel.js"

export class profesionalController 
{
    /**
     * Obtiene todas las cervezas o las cervezas de un tipo específico.
     * @param {object} req - Objeto de solicitud HTTP.
     * @param {object} res - Objeto de respuesta HTTP.
     * @returns {Promise<void>} - No devuelve un valor directamente, pero envía una respuesta JSON al cliente.
     */
    static async listAll(req, res)
    {
        const profesional = await profesionalModel.getAll()
        if(profesional) return res.json(profesional)
        res.status(404).json({message: 'Profesional not found'})
    }

    /**
     * Obtiene todas las cervezas o las cervezas de un tipo específico.
     * @param {object} req - Objeto de solicitud HTTP.
     * @param {object} res - Objeto de respuesta HTTP.
     * @returns {Promise<void>} - No devuelve un valor directamente, pero envía una respuesta JSON al cliente.
     */
    static async getByID(req, res)
    {
        const id = req.params.id
        res.send(await profesionalModel.getByID({id: id}))
    }

    /**
     * Obtiene todas las cervezas o las cervezas de un tipo específico.
     * @param {object} req - Objeto de solicitud HTTP.
     * @param {object} res - Objeto de respuesta HTTP.
     * @returns {Promise<void>} - No devuelve un valor directamente, pero envía una respuesta JSON al cliente.
     */
    static async create(req, res)
    {
        profesionalModel.create({profesional: req.body})
        .then(createdProfessional => {
            res.status(201).send(createdProfessional)
        })
        .catch(err => {
            res.status(500).json({"message": "Error al intentar agregar al profesional", err})
        })
    }

    /**
     * Obtiene todas las cervezas o las cervezas de un tipo específico.
     * @param {object} req - Objeto de solicitud HTTP.
     * @param {object} res - Objeto de respuesta HTTP.
     * @returns {Promise<void>} - No devuelve un valor directamente, pero envía una respuesta JSON al cliente.
     */
    static async delete(req, res)
    {
        const id = req.params.id
        profesionalModel.delete({id:id})
            .then(json => {
                res.status(200).json({"message": json})
            })
            .catch(err => {
                res.status(500).json({"message": `Ocurrio un error al eliminar al profesional: ${err}`})
            })
    }

    /**
     * Obtiene todas las cervezas o las cervezas de un tipo específico.
     * @param {object} req - Objeto de solicitud HTTP.
     * @param {object} res - Objeto de respuesta HTTP.
     * @returns {Promise<void>} - No devuelve un valor directamente, pero envía una respuesta JSON al cliente.
     */
    static async update(req, res)
    {
        const id = req.params.id
        profesionalModel.update({id: id, datos: req.body})
            .then(updateProfesional => {
                res.status(200).json({"message": `Profesional editado exitosamente: ${id}`, updateProfesional})
            })
            .catch(err => {
                res.status(500).json({"message": `ocurrio un error al editar al profesional`, err})
            })
    }
}