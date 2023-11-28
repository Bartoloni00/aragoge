import sharp from 'sharp' // editar imagenes

export default class ImageMiddleware
{
    static async resizeGeneric({filePath, width,heigh, filename, name})
    {
        return sharp(filePath)
        .resize(width,heigh)
        .webp(80)
        .toFile('uploads/' + filename + name)
    }
    static async resizePlanningImage(req, res, next)
    {
        try {
            ImageMiddleware.resizeGeneric({
                filePath: req.file.path,
                width: 300,
                heigh:150,
                filename: req.file.filename,
                name: 'planning.webp'
            })
            next()
        } catch (error) {
            res.status(500).json({ 'Error': error });
        }
    }
    static async resizeBanner(req, res, next){
        try {
            ImageMiddleware.resizeGeneric({
                filePath: req.file.path,
                width: 900,
                heigh:300,
                filename: req.file.filename,
                name: 'banner.webp'
            })
            next()
        } catch (error) {
            res.status(500).json({ 'Error': error });
        }
    }
    static async resizeUserImage(req, res, next)
    {
        try {
            ImageMiddleware.resizeGeneric({
                filePath: req.file.path,
                width: 150,
                heigh:150,
                filename: req.file.filename,
                name: 'user.webp'
            })
            next()
        } catch (error) {
            res.status(500).json({ 'Error': error });
        }
    }
}