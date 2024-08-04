import React from 'react'

const EliminarEquipo = () => {

    return (

        <div>

            <div>

                <h2>Eliminar Equipo</h2>

                <form id='buscar-equipo'>

                    <label htmlFor='nombre'>Modelo:</label>

                    <input type='text' id='nombre' name='nombre' />

                    <button type='submit'>Eliminar</button>

                </form>

            </div>

        </div>
    )
}

export default EliminarEquipo