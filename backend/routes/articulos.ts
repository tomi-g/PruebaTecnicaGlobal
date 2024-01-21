import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

interface Articulo {
    IdArticulo: number;
    Nombre: string;
    Precio: number;
    Stock: number;
    FechaAlta: string; // Ajusta el tipo según el formato real de la fecha
    Activo: boolean;
}

let arr_ArticulosMock: Articulo[] = [
    {
        IdArticulo: 1,
        Nombre: "Accesorios",
        Precio: 20.0,
        Stock: 100,
        FechaAlta: "2022-01-20",
        Activo: true,
    },
    {
        IdArticulo: 2,
        Nombre: "Audio",
        Precio: 50.0,
        Stock: 80,
        FechaAlta: "2022-01-19",
        Activo: true,
    },
    {
        IdArticulo: 3,
        Nombre: "Celulares",
        Precio: 300.0,
        Stock: 50,
        FechaAlta: "2022-01-18",
        Activo: true,
    },
    {
        IdArticulo: 4,
        Nombre: "Cuidado Personal",
        Precio: 25.0,
        Stock: 120,
        FechaAlta: "2022-01-17",
        Activo: true,
    },
    {
        IdArticulo: 5,
        Nombre: "Dvd",
        Precio: 40.0,
        Stock: 70,
        FechaAlta: "2022-01-16",
        Activo: true,
    },
    {
        IdArticulo: 6,
        Nombre: "Fotografia",
        Precio: 150.0,
        Stock: 30,
        FechaAlta: "2022-01-15",
        Activo: true,
    },
    {
        IdArticulo: 7,
        Nombre: "Frio-Calor",
        Precio: 200.0,
        Stock: 40,
        FechaAlta: "2022-01-14",
        Activo: true,
    },
    {
        IdArticulo: 8,
        Nombre: "Gps",
        Precio: 80.0,
        Stock: 60,
        FechaAlta: "2022-01-13",
        Activo: true,
    },
    {
        IdArticulo: 9,
        Nombre: "Informatica",
        Precio: 120.0,
        Stock: 90,
        FechaAlta: "2022-01-12",
        Activo: true,
    },
    {
        IdArticulo: 10,
        Nombre: "Led - Lcd",
        Precio: 300.0,
        Stock: 50,
        FechaAlta: "2022-01-11",
        Activo: true,
    },
];

// GET para obtener todos los artículos
router.get('/api/articulos', (req: Request, res: Response) => {
    try {
        res.json(arr_ArticulosMock);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// GET para obtener un artículo por su id
router.get('/api/articulos/:id', (req: Request, res: Response) => {
    try {
        const articuloId = parseInt(req.params.id, 10);
        const articulo = arr_ArticulosMock.find(x => x.IdArticulo === articuloId);

        if (articulo) {
            res.json(articulo);
        } else {
            res.status(404).json({ message: 'Artículo no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// PUT para editar un artículo
router.put('/api/articulos/:id', (req: Request, res: Response) => {
    try {
        const articuloId = parseInt(req.params.id, 10);
        const articuloIndex = arr_ArticulosMock.findIndex(x => x.IdArticulo === articuloId);

        if (articuloIndex !== -1) {
            const { Activo, FechaAlta, IdArticulo, Nombre, Precio, Stock } = req.body as Articulo;
            arr_ArticulosMock[articuloIndex] = {
                IdArticulo,
                Nombre,
                Precio,
                Stock,
                FechaAlta: new Date(FechaAlta).toISOString(), // Convierte a formato ISO
                Activo,
            };

            res.json({ message: 'Artículo actualizado' });
        } else {
            res.status(404).json({ message: 'Artículo no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

export default router;
