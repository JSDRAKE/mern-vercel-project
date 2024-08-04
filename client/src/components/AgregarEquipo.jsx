import React from 'react'
import '../styles/AgregarEquipo.css'

const AgregarEquipo = () => {

    return (

        <div>

            <h2>Agregar Equipo</h2>

            <form id='formulario-agregar' action="">

                <div className="form-group">

                    <label htmlFor="brand">Marca: </label>

                    <input type="text" name="marca" id="marca" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor="model">Modelo: </label>

                    <input type="text" name="modelo" id="modelo" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor='type'>Tipo: </label>

                    <input type="text" name="tipo" id="tipo" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor='frecuency-range'>Rango de Frecuencia: </label>

                    <input type="text" name="rangoFrecuencia" id="rangoFrecuencia" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor='model'>Modos: </label>

                    <input type="text" name="modos" id="modos" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor='power-supply'>Alimentación: </label>

                    <input type="text" name="alimentacion" id="alimentacion" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor='manufactured-year'>Año de Fabricación: </label>

                    <input type="text" name="anioFabricacion" id="anioFabricacion" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor='img'>Imagen: </label>

                    <input type="text" name="imagen" id="imagen" className="form-control" />

                </div>

                <button type="submit" className="btn btn-primary">Agregar Equipo</button>


            </form>

        </div>
    )
}

export default AgregarEquipo