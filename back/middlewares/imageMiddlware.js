import sharp from 'sharp' // editar imagenes
import { deleteFile } from '../services/fs.js'

export default class ImageMiddleware
{
    static async #resizeGeneric({ruta,filePath, width,heigh, filename, name})
    {
        return sharp(filePath)
        .resize(width,heigh,{
            kernel: sharp.kernel.nearest,
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0.5 }
        })
        .webp(80)
        .toFile(`uploads/${ruta}/` + filename + name)
    }

    static async resizePlanningImage(req, res, next)
    {
        if(!req.file) return next()
        try {
            const rutaOriginal = req.file.path

            await ImageMiddleware.#resizeGeneric({
                ruta: 'plannings',
                filePath: req.file.path,
                width: 300,
                heigh:150,
                filename: req.file.filename,
                name: 'planning.webp'
            })

            await deleteFile(rutaOriginal)

            req.file.path = req.file.path + 'planning.webp'
            next()
        } catch (error) {
            res.status(500).json({ 'Error': error });
        }
    }

    static async resizeBanner(req, res, next){
        if(!req.file) return next()
        try {
            const rutaOriginal = req.file.path

            await ImageMiddleware.#resizeGeneric({
                ruta: 'banners',
                filePath: req.file.path,
                width: 900,
                heigh:300,
                filename: req.file.filename,
                name: 'banner.webp'
            })
            
            await deleteFile(rutaOriginal)
    
            req.file.path = rutaOriginal + 'banner.webp'
            next()
        } catch (error) {
            console.log(error);
            res.status(500).json({ 'Error': error, messge:  'Error de resizer' })
        }
    }

    static async resizeUserImage(req, res, next) {
        if(!req.file) return next()
        try {
            const rutaOriginal = req.file.path;
    
            await ImageMiddleware.#resizeGeneric({
                ruta: 'users',
                filePath: rutaOriginal,
                width: 150,
                height: 150,
                filename: req.file.filename,
                name: 'user.webp'
            });
    
            await deleteFile(rutaOriginal)
    
            req.file.path = rutaOriginal + 'user.webp'
    
            next();
        } catch (error) {
            res.status(500).json({ 'Error': error , message: 'no existe imagen'})
        }
    }
    
}