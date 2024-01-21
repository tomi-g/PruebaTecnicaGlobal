import React from "react";
import moment from "moment";
import { Articulo } from "../../types/articulo";

interface ArticulosListadoProps {
    Items: Articulo[];
    Modificar: (item: Articulo) => void;
}

export default function ArticulosListado({
    Items,
    Modificar,
}: ArticulosListadoProps) {
    return (
        <div className="container mt-4">
            <div className="table-responsive">
                <table className="table table-hover table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th className="text-center">Nombre</th>
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Items.map((Item) => (
                            <tr key={Item.IdArticulo}>
                                <td>{Item.Nombre}</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-sm btn-outline-primary"
                                        title="Modificar"
                                        onClick={() => Modificar(Item)}
                                    >
                                        <i className="fa fa-pencil"></i> Modificar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {!Items.length && (
                    <div className="alert alert-info text-center mt-3">
                        No hay artículos para mostrar.
                    </div>
                )}
            </div>
        </div>
    );
}
