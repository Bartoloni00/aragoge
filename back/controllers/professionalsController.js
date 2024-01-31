import { profesionalModel } from "../models/profesionalModel.js"

export class profesionalController 
{
    /**
     * Obtiene todos los profesionales.
     * @param {object} req - Objeto de solicitud HTTP.
     * @param {object} res - Objeto de respuesta HTTP.
     * @returns {Promise<void>} - No devuelve un valor directamente, pero envía una respuesta JSON al cliente.
     */
    static async listAll(req, res)
    {
        const profesional = await profesionalModel.getAll()
        if(profesional) return res.json(profesional)
        res.status(404).json({'Error': 'Profesional not found'})
    }

    /**
     * obtiene a un profesional por el id del profesional
     * @param {object} req - Objeto de solicitud HTTP.
     * @param {object} res - Objeto de respuesta HTTP.
     * @returns {Promise<void>} - No devuelve un valor directamente, pero envía una respuesta JSON al cliente.
     */
    static async getByID(req, res)
    {
        const id = req.params.id
        profesionalModel.getByUserID({id: id})
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(404).json({'Error': err.message})
            })
    }

    /**
     * Crea a un nuevo profesional
     * @param {object} req - Objeto de solicitud HTTP.
     * @param {object} res - Objeto de respuesta HTTP.
     * @returns {Promise<void>} - No devuelve un valor directamente, pero envía una respuesta JSON al cliente.
     */
    static async create(req, res)
    {
        let datos
        if (req.file) {
            datos = {
                ...req.body,
                banner: req.file.path
            }
        } else {
            datos = {
                ...req.body,
                banner: 'https://picsum.photos/900/300'
            }
        }
        profesionalModel.create({profesional: datos})
        .then(createdProfessional => {
            res.status(201).send(createdProfessional)
        })
        .catch(err => {
            res.status(400).json({"Error": err.message})
        })
    }

    /**
     * Elimina a un profesional en especifico.
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
                res.status(400).json({"Error": err.message})
            })
    }

    /**
     * Actualiza los datos de un profesional.
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
                res.status(400).json({"Error": err.message})
            })
    }
}