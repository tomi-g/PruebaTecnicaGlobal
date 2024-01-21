export interface Articulo {
    IdArticulo: number;
    Nombre: string;
    Precio: number;
    Stock: number;
    FechaAlta: string; // Ajusta el tipo según el formato real de la fecha
    Activo: boolean;
}