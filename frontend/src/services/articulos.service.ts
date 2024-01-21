import axios from "axios";
import { Articulo } from '../types/articulo';
import { apiUrl } from '../constants';

const urlResource = `${apiUrl}/articulos`;

async function Buscar() {
    const resp = await axios.get(urlResource);
    return resp.data;
}

async function BuscarPorId(item: Articulo) {
    const resp = await axios.get(urlResource + "/" + item.IdArticulo);
    return resp.data;
}

async function Grabar(item: Articulo) {
    if (item.IdArticulo === 0) {
        await axios.post(urlResource, item);
    } else {
        axios.defaults.headers.put['Content-Type'] = 'application/json';
        await axios.put(urlResource + "/" + item.IdArticulo, item);
    }
}


export const articulosService = {
    Buscar, BuscarPorId, Grabar
};
