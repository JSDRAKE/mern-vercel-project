import React from 'react'
import "../styles/BuscarEquipo.css"

const BuscarEquipo = () => {

    return (

        <div>

            <h2>Buscar Equipo</h2>

            <form id='buscar-equipo'>
                    
                    <label htmlFor='nombre'>Modelo:</label>
    
                    <input type='text' id='nombre' name='nombre' />
    
                    <button type='submit'>Buscar</button>

            </form>

        </div>
    )
}

export default BuscarEquipo