import Rig from '../models/rig.model.js'

const updateRigController = {

    async updateRig (req, res) {

        try {

            await Rig.findByIdAndUpdate(req.params.id, req.body)

            res.status(200).json({ msg: 'Rig updated' })

        } catch (error) {

            return res.status(400).json(error)

        }

    }

}

export default updateRigController