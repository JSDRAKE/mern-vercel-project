import Rig from '../models/rig.model.js'

const deleteRigContoller = {

    async deleteRig(req, res) {

        try {

            const rig = await Rig.findByIdAndDelete(req.params.id)

            return res.status(200).json({ rig })

        } catch (error) {

            return res.status(400).json({ error })

        }

    }

}

export default deleteRigContoller