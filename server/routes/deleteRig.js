import express from 'express'
import deleteRigContoller from '../controllers/deleteRigContoller.js'
import validateId from '../middlewares/validateId.js'

const router = express.Router()

router.delete('/:id', validateId, deleteRigContoller.deleteRig)

export default router