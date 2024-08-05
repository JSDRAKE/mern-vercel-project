import Rig from '../models/rig.model.js'

const createRigController = {

    async createRig (req, res)  {

        try {

            const newRig = new Rig(req.body)

            await newRig.save()

            res.status(201).json({ newRig })

        } catch (error) {

            res.status(400).json({ error })

        }

    }

}

export default createRigController