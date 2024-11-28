import express, { Request, Response } from 'express';
import formidable, { File } from 'formidable';
import path from 'path';
import fs from 'fs';

const app = express();

// Configurar la carpeta donde se subirán los archivos
const uploadDir = path.join(__dirname, '../uploads');

// Verificar si la carpeta existe, sino crearla
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Endpoint para subir archivos
app.post('/upload', (req: Request, res: Response) => {
  const form = new formidable.IncomingForm({
    uploadDir: uploadDir, // Directorio donde se guardarán los archivos
    keepExtensions: true, // Mantener la extensión del archivo
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error al subir el archivo:', err);
      res.status(500).json({ error: 'Error al procesar la solicitud' });
      return;
    }

    // Obtener el archivo subido
    const imageFile = files.image as File;
    const documentFile = files.file as File;

    if (!imageFile || !documentFile) {
      res.status(400).json({ error: 'Debe proporcionar ambos archivos (imagen y archivo)' });
      return;
    }

    // Obtener rutas relativas para guardar en la base de datos
    const imageUrl = `/uploads/${imageFile.newFilename}`;
    const fileUrl = `/uploads/${documentFile.newFilename}`;
    const nombreReceta = fields.nombre as string;

    // Aquí se guardaría en la base de datos usando Prisma, ejemplo:
    console.log({
      nombre: nombreReceta,
      imagen: imageUrl,
      archivo: fileUrl,
    });

    // Responder al cliente
    res.status(200).json({
      message: 'Receta subida exitosamente',
      data: {
        nombre: nombreReceta,
        imagen: imageUrl,
        archivo: fileUrl,
      },
    });
  });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
