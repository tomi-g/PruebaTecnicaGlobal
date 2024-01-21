## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Ejecución](#ejecución)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Rutas de la API](#rutas-de-la-api)
5. [Documentación Adicional](#documentación-adicional)

## Instalación
1. **Instalar dependencias**
    npm install

## Ejecución
1. **Iniciar el servidor**
    npm run dev

## Estructura-del-proyecto
El proyecto sigue la siguiente estructura
**routes/**: Directorio que contiene las rutas de la API.
**middleware/**: Directorio que contiene middlewares utilizados.
**tests/**: Contiene las pruebas unitarias realizadas.

## Rutas-de-la-api
**/api/articulos**: Utilizada para obtener todos los articulos.
**/api/articulos/:id**: Utilizada para obtener un articulo en especial por su Id.
**/api/articulos/:id**: Utilizada para Modificar un articulo (método PUT).

## Documentación-adicional
**Pruebas unitarias**: Se incluyen pruebas unitarias en tests/articulos.test.ts. 
Puedes ejecutarlas con el siguiente comando -> ´jest´

**Registro de solicitudes**: Todas las solicitudes realizadas al servidor quedan registradas y se muestran en la consola.