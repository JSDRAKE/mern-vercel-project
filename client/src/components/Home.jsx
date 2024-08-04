import React from 'react'
import { useState } from 'react'
import BuscarEquipo from './BuscarEquipo'
import AgregarEquipo from './AgregarEquipo'
import EliminarEquipo from './EliminarEquipo'
import ActualizarEquipo from './ActualizarEquipo'

const Home = () => {

    const [mostrarBuscarEquipo, setMostrarBuscarEquipo] = useState(false)

    function handleBuscarEquipo() {

        if (!mostrarBuscarEquipo) {

            setMostrarBuscarEquipo(true)

            setMostrarAgregarEquipo(false)

            setMostrarEliminarEquipo(false)

            setMostrarActualizarEquipo(false)

        }

    }

    const [mostrarAgregarEquipo, setMostrarAgregarEquipo] = useState(false)

    function handleAgregarEquipo() {

        if (!mostrarAgregarEquipo) {

            setMostrarAgregarEquipo(true)

            setMostrarBuscarEquipo(false)

            setMostrarEliminarEquipo(false)

            setMostrarActualizarEquipo(false)

        }

    }

    const [mostrarEliminarEquipo, setMostrarEliminarEquipo] = useState(false)

    function handleEliminarEquipo() {

        if (!mostrarEliminarEquipo) {

            setMostrarEliminarEquipo(true)

            setMostrarBuscarEquipo(false)

            setMostrarAgregarEquipo(false)

            setMostrarActualizarEquipo(false)

        }

    }

    const [mostrarActualizarEquipo, setMostrarActualizarEquipo] = useState(false)

    function handleActualizarEquipo() {

        if (!mostrarActualizarEquipo) {

            setMostrarActualizarEquipo(true)

            setMostrarBuscarEquipo(false)

            setMostrarAgregarEquipo(false)

            setMostrarEliminarEquipo(false)

        }

    }

    return (

        <div>

            <h1>Proyecto MERN -- FullStack</h1>

            <h2>Opciones</h2>

            <div id='botones'>

                <button onClick={handleBuscarEquipo}>

                    Buscar Equipo

                </button>

                <button onClickCapture={handleAgregarEquipo}>

                    Agregar Equipo

                </button>

                <button onClick={handleEliminarEquipo}>

                    Eliminar Equipo

                </button>

                <button onClick={handleActualizarEquipo}>

                    Actualizar Equipo

                </button>

            </div>

            {mostrarBuscarEquipo && (

                <BuscarEquipo />
                
            )}

            {mostrarAgregarEquipo && (
                
                <AgregarEquipo />

            )}

            {mostrarEliminarEquipo && (
                
                <EliminarEquipo />

            )}

            {mostrarActualizarEquipo && (

                <ActualizarEquipo />

            )}


        </div>

    )

}

export default Home