## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Ejecución](#ejecución)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Componentes Principales](#componentes-principales)

## Instalación
1. **Instalar dependencias**
    cd frontend
    npm install

## Ejecución
1. **Iniciar el servidor**
    npm start

## Estructura-del-proyecto
El proyecto sigue la siguiente estructura:
**src/**: Contiene los archivos fuente de la aplicación.
**components/**: Componentes React reutilizables.
**services/**: Servicios para realizar solicitudes al backend.
**types/**: Tipos/Interfaces utilizadas.

## Componentes-principales
**Articulos**
Este componente permite realizar operaciones de Consulta y Edicion en la información de los artículos.

*Estructura*:
Articulos.tsx: Componente principal para la gestión de artículos.
ArticulosListado.tsx: Presentación de la lista de artículos.
ArticulosEditar.tsx: Formulario para editar los detalles de un artículo.

**Servicios**
Articulos Service
Este servicio proporciona métodos para interactuar con la API de artículos en el backend.

*Métodos*:
Buscar(): Obtiene todos los artículos.
BuscarPorId(item): Obtiene un artículo por su ID.
Grabar(item): Guarda o modifica un artículo.