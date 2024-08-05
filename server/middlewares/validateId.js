import Rig from '../models/rig.model.js'

const validateId = async (req, res, next) => {

    try {

        const search = await Rig.findById(req.params.id)

        if (search !== null) {

            next()

        } else {

            res.status(401).json({ message: 'ID does not exist' })
        }
        
    } catch (error) {

        res.status(401).json(error)
        
    }

}


export default validateId