import express from 'express'
import getRigsController from '../controllers/getRigsController.js'
const router = express.Router()
// const { validateModel } = require('../middlewares/validateModel')

router.get('/:model', getRigsController.getRigByModel)

export default router