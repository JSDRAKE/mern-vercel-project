import express from 'express'
import deleteRigContoller from '../controllers/deleteRigContoller.js'
const router = express.Router()
// const { validateId } = require('../middlewares/validateId')

router.delete('/:id', deleteRigContoller.deleteRig)

export default router