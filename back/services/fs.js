import fs from 'fs'

export async function deleteFile(url)
{
    fs.unlink(url, err => {
        if (err) {
            throw new Error(`Error al eliminar la imagen: ${err.message}`);
        }
    });
}