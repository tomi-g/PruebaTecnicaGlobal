import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../index';

const articuloModificacion = {
  IdArticulo: 1,
  Nombre: "Articulo " + (() => (Math.random() + 1).toString(36).substring(2))(),
  Precio: 10.5,
  Stock: 11,
  FechaAlta: new Date().toISOString(),
  Activo: true,
};

// Prueba para la ruta /api/articulos GET
describe("GET /api/articulos", () => {
  it("Debería devolver todos los artículos", async () => {
    const res = await request(app).get("/api/articulos");
    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          IdArticulo: expect.any(Number),
          Nombre: expect.any(String),
          Precio: expect.any(Number),
          Stock: expect.any(Number),
          FechaAlta: expect.any(String),
          Activo: expect.any(Boolean)
        }),
      ])
    );
  });
});

// Prueba para la ruta /api/articulos/:id GET
describe("GET /api/articulos", () => {
  it("Debería devolver un articulo especifico", async () => {
    const res = await request(app).get("/api/articulos/1");
    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual(
      expect.objectContaining({
        IdArticulo: expect.any(Number),
        Nombre: expect.any(String),
        Precio: expect.any(Number),
        Stock: expect.any(Number),
        FechaAlta: expect.any(String),
        Activo: expect.any(Boolean)
      })
    );
  });
  it("Debería devolver error de articulo no encontrado", async () => {
    const res = await request(app).get("/api/articulos/11");
    expect(res.statusCode).toEqual(404);
  });
});

// test route/articulos/:id PUT
describe("PUT /api/articulos/:id", () => {
  it("Debería devolver el artículo con el id 1 modificado", async () => {
    const res = await request(app)
      .put("/api/articulos/1")
      .send(articuloModificacion);
    expect(res.statusCode).toEqual(200);
  });

  it("Debería devolver error de que el artículo con el id 11 no existe", async () => {
    const res = await request(app)
      .put("/api/articulos/11")
      .send(articuloModificacion);
    expect(res.statusCode).toEqual(404);
  });
});
