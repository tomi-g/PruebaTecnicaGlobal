import express, { Request, Response, NextFunction } from "express";
import bodyParser from 'body-parser';
import articulosRouter from "./routes/articulos";
import { requestLoggerMiddleware } from './middleware/middleware';

// Crear servidor
const app = express();

// Configurar middleware para manejar JSON y CORS
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

// Controlar ruta principal
app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenido al backend de mi prueba en global!");
});

// Rutas de middleware
app.use(requestLoggerMiddleware);

// Rutas de artículos
app.use(articulosRouter, cors());

// Middleware para manejar errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Levantar servidor
if (!module.parent) {
  const port = process.env.PORT || 4000;
  app.locals.fechaInicio = new Date();
  app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
  });
}

export default app;
