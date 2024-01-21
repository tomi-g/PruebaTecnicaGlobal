import React from "react";
import { useForm } from "react-hook-form";
import { Articulo } from "../../types/articulo";

interface ArticulosEditarProps {
    Accion: string;
    Item: Articulo | undefined;
    Grabar: (item: Articulo) => void;
    Volver: () => void;
}

export default function ArticulosEditar({
    Accion,
    Item,
    Grabar,
    Volver,
}: ArticulosEditarProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isValid, isSubmitted },
    } = useForm({ defaultValues: Item });

    const onSubmit = (data: Articulo) => {
        Grabar(data);
    };

    if (!Item) return null;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container-fluid">
                <fieldset disabled={Accion === "C"}>
                    {/* campo nombre */}
                    <div className="row">
                        <div className="col-sm-4 col-md-3 offset-md-1">
                            <label className="col-form-label" htmlFor="Nombre">
                                Nombre<span className="text-danger">*</span>:
                            </label>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <input
                                type="text"
                                {...register("Nombre", {
                                    required: { value: true, message: "Nombre es requerido" },
                                    minLength: {
                                        value: 4,
                                        message: "Nombre debe tener al menos 4 caracteres",
                                    },
                                    maxLength: {
                                        value: 55,
                                        message: "Nombre debe tener como máximo 55 caracteres",
                                    },
                                })}
                                autoFocus
                                className={
                                    "form-control " + (errors?.Nombre ? "is-invalid" : "")
                                }
                            />
                            {errors?.Nombre && touchedFields.Nombre && (
                                <div className="invalid-feedback">
                                    {errors?.Nombre?.message}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* campo Precio */}
                    <div className="row">
                        <div className="col-sm-4 col-md-3 offset-md-1">
                            <label className="col-form-label" htmlFor="Precio">
                                Precio<span className="text-danger">*</span>:
                            </label>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <input
                                type="number"
                                step=".01"
                                {...register("Precio", {
                                    required: { value: true, message: "Precio es requerido" },
                                    min: {
                                        value: 0.01,
                                        message: "Precio debe ser mayor a 0",
                                    },
                                    max: {
                                        value: 99999.99,
                                        message: "Precio debe ser menor o igual a 99999.99",
                                    },
                                })}
                                className={
                                    "form-control " + (errors?.Precio ? "is-invalid" : "")
                                }
                            />
                            <div className="invalid-feedback">{errors?.Precio?.message}</div>
                        </div>
                    </div>

                    {/* campo Stock */}
                    <div className="row">
                        <div className="col-sm-4 col-md-3 offset-md-1">
                            <label className="col-form-label" htmlFor="Stock">
                                Stock<span className="text-danger">*</span>:
                            </label>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <input
                                type="number"
                                {...register("Stock", {
                                    required: { value: true, message: "Stock es requerido" },
                                    min: {
                                        value: 0,
                                        message: "Stock debe ser mayor a 0",
                                    },
                                    max: {
                                        value: 99999,
                                        message: "Stock debe ser menor o igual a 999999",
                                    },
                                })}
                                className={
                                    "form-control " + (errors?.Stock ? "is-invalid" : "")
                                }
                            />
                            <div className="invalid-feedback">{errors?.Stock?.message}</div>

                        </div>
                    </div>

                    {/* campo FechaAlta */}
                    <div className="row">
                        <div className="col-sm-4 col-md-3 offset-md-1">
                            <label className="col-form-label" htmlFor="FechaAlta">
                                Fecha Alta<span className="text-danger">*</span>:
                            </label>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <input
                                type="date"
                                {...register("FechaAlta", {
                                    required: { value: true, message: "Fecha Alta es requerido" }
                                })}
                                className={
                                    "form-control " + (errors?.FechaAlta ? "is-invalid" : "")
                                }
                            />
                            <div className="invalid-feedback">
                                {errors?.FechaAlta?.message}
                            </div>
                        </div>
                    </div>
                </fieldset>
                {/* Botones Grabar, Cancelar/Volver' */}
                <hr />
                <div className="row justify-content-center">
                    <div className="col text-center botones">
                        {Accion !== "C" && (
                            <button type="submit" className="btn btn-primary">
                                <i className="fa fa-check"></i> Grabar
                            </button>
                        )}
                        <button type="button" className="btn btn-warning" onClick={() => Volver()}>
                            <i className="fa fa-undo"></i>
                            {Accion === "C" ? " Volver" : " Cancelar"}
                        </button>
                    </div>
                </div>

                {/* texto: Revisar los datos ingresados... */}
                {!isValid && isSubmitted && (
                    <div className="row alert alert-danger mensajesAlert">
                        <i className="fa fa-exclamation-sign"></i>
                        Revisar los datos ingresados...
                    </div>
                )}
            </div>
        </form>
    );
}
