import express from 'express'
import getRigsController from '../controllers/getRigsController.js'
const router = express.Router()
// const { validateId } = require('../middlewares/validateId')

router.get('/:id', getRigsController.getRigbyId)

export default router