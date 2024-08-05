import axios from 'axios'


const apiExterna = async (req, res) => {

    try {

        const nombre = req.params.nombre

        if (nombre === undefined) {

            res.status(400).json({ message: 'No se ingreso ningun nombre' })

        } else {

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
            const pokemon = response.data

            if (pokemon.types.length === 0) {

                res.status(404).json({ message: 'No se encontro ningun pokemon con ese nombre' })

            } else {

                const tipos = pokemon.types.map(tipo => tipo.type.name)

                res.status(200).json({ nombre: pokemon.name, id: pokemon.id, tipos: tipos })

            }
        }

    } catch (error) {

        res.status(500).json({ message: error.message })
        
    }
}

export default apiExterna

// Path: routes\apiExterna.js
