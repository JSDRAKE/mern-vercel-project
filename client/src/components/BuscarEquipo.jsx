import React, { useState } from 'react';
import "../styles/BuscarEquipo.css";;

const BuscarEquipo = () => {

    const [nombre, setNombre] = useState('');
    const [equipo, setEquipo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiUrl = import.meta.env.VITE_API_BASE_URL

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError(null);

        try {

            const response = await fetch(`${apiUrl}/getRigByModel/${nombre}`);

            if (!response.ok) {

                throw new Error('Error al buscar el equipo');

            }

            const data = await response.json();

            console.log('Datos recibidos:', data);

            if (data && data.model) {

                setEquipo(data.model);

            } else {

                setEquipo(null);

                setError('No se encontró el equipo.');
            }

        } catch (error) {

            setError(error.message);

            setEquipo(null);

        } finally {

            setLoading(false);

        }

    };

    const [resultado, setResultado] = useState(false);

    function handleResultado() {

        if (!resultado) {

            setResultado(true)

        }

    }





    return (

        <div>

            <h2>Buscar Equipo</h2>

            <form id='buscar-equipo' onSubmit={handleSubmit}>

                <label htmlFor='nombre'>Modelo:</label>

                <input
                    type='text'
                    id='nombre'
                    name='nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <button type='submit' onClick={handleResultado}>Buscar</button>

            </form>

            {resultado && (

                <div>

                    {loading && <p>Cargando...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {equipo && (

                        <div className='card-container'>

                            <div className='card-equipo'>

                            <h3>Resultado de Búsqueda:</h3>
                            <img src={equipo.img} alt={equipo.model} />
                            <h4>{equipo.brand} {equipo.model}</h4>
                            <p>Tipo: {equipo.type}</p>
                            <p>Rango de Frecuencia: {equipo.frecuencyRange}</p>
                            <p>Modo: {equipo.mode}</p>
                            <p>Alimentación: {equipo.powerSupply}</p>
                            <p>Fabricado: {equipo.manufactured}</p>

                            </div>

                        </div>
                    )}

                    {!loading && !equipo && !error && (

                        <p>No se encontraron resultados. Intenta otro modelo.</p>

                    )}


                </div>


            )}

        </div>
    );
};

export default BuscarEquipo;
