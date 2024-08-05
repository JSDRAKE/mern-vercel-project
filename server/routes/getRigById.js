import express from 'express'
import getRigsController from '../controllers/getRigsController.js'
import validateId from '../middlewares/validateId.js'

const router = express.Router()


router.get('/:id', validateId, getRigsController.getRigbyId)

export default router