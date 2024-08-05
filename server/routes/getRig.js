import express from 'express'
import getRigsController from '../controllers/getRigsController.js'
const router = express.Router()



router.get('/', getRigsController.getRigs)

export default router