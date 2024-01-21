// Importaciones necesarias
import React, { useEffect, useState } from 'react';
import ArticulosListado from "./ArticulosListado";
import ArticulosEditar from './ArticulosEditar';
import { articulosService } from "../../services/articulos.service";
import { Articulo } from '../../types/articulo';

type AccionKey = "M" | "L";

const TituloAccion: Record<AccionKey, string> = {
  M: "(Modificar)",
  L: "(Listado)",
};

// Define las interfaces para props y estado
interface ArticulosProps { }

interface ArticulosState {
  Accion: AccionKey;
  Items: Articulo[];
  Item?: Articulo;
}

function Articulos(props: ArticulosProps): JSX.Element {
  const [state, setState] = useState<ArticulosState>({
    Accion: "L",
    Items: [],
  });

  useEffect(() => {
    // Se inicia la pantalla buscando el listado de Articulos.
    BuscarArticulos();
  }, []);

  async function BuscarArticulos() {
    try {
      const data: Articulo[] = await articulosService.Buscar();
      // El array obtenido desde el backend será filtrado para mostrar solo algunos de sus atributos.
      const articulosFiltrados: Articulo[] = filtrarArray(data);
      setState((prevState) => ({ ...prevState, Items: articulosFiltrados }));
    } catch (error) {
      // Manejo de errores
      alert("Error al buscar artículos: " + error);
    }
  }

  function filtrarArray(arr: Articulo[]): Articulo[] {
    // Se utiliza funcion filter para poder filtrar array de Articulos solamente por su Id y Nombre
    return arr.filter(({ IdArticulo, Nombre }) => ({ IdArticulo, Nombre }));
  }

  function Volver() {
    setState((prevState) => ({ ...prevState, Accion: "L" }));
  }

  async function BuscarPorId(item: Articulo) {
    try {
      const data: Articulo = await articulosService.BuscarPorId(item);
      setState((prevState) => ({ ...prevState, Item: data, Accion: "M" }));
    } catch (error) {
      // Manejo de errores
      alert("Error al buscar por ID: " + error);
    }
  }

  function Modificar(item: Articulo) {
    BuscarPorId(item);
  }

  async function Grabar(item: Articulo) {
    try {
      await articulosService.Grabar(item);
      BuscarArticulos(); //Luego de grabar vuelvo a mostrar la lista de articulos actualizada
      Volver();
      setTimeout(() => alert("Registro modificado correctamente."), 0);
    } catch (error: any) {
      // Manejo de errores
      alert(error?.response?.data?.message ?? error.toString());
    }
  }

  return (
    <div>
      <div className="tituloPagina">
        Articulos <small>{TituloAccion[state.Accion]}</small>
      </div>
      <hr></hr>
      {state.Accion === "L" && state.Items.length > 0 && (
        <ArticulosListado Items={state.Items} Modificar={Modificar} />
      )}

      {state.Accion !== "L" && (
        <ArticulosEditar Accion={state.Accion} Item={state.Item} Grabar={Grabar} Volver={Volver} />
      )}
    </div>
  );
}

export default Articulos;
