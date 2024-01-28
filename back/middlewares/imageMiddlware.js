import sharp from 'sharp' // editar imagenes
import fs from 'fs'

export default class ImageMiddleware
{
    static async #resizeGeneric({ruta,filePath, width,heigh, filename, name})
    {
        return sharp(filePath)
        .resize(width,heigh)
        .webp(80)
        .toFile(`uploads/${ruta}/` + filename + name)
    }

    static async #deleteOriginalImage(url)
    {
        fs.unlink(url, err => {
            if (err) {
                console.error("Error al eliminar la imagen original:", err);
            } else {
                console.log("Imagen original eliminada exitosamente.");
            }
        });
    }

    static async resizePlanningImage(req, res, next)
    {
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

            await ImageMiddleware.#deleteOriginalImage(rutaOriginal)

            req.file.path = req.file.path + 'planning.web'
            next()
        } catch (error) {
            res.status(500).json({ 'Error': error });
        }
    }

    static async resizeBanner(req, res, next){
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
            
            await ImageMiddleware.#deleteOriginalImage(rutaOriginal)
    
            req.file.path = rutaOriginal + 'banner.webp'
            next()
        } catch (error) {
            console.log(error);
            res.status(500).json({ 'Error': error, messge:  'Error de resizer' })
        }
    }

    static async resizeUserImage(req, res, next) {
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
    
            await ImageMiddleware.#deleteOriginalImage(rutaOriginal)
    
            req.file.path = rutaOriginal + 'user.webp'
    
            next();
        } catch (error) {
            res.status(500).json({ 'Error': error })
        }
    }
    
}