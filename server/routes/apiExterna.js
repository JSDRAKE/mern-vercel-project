import express from 'express'
import apiExterna from '../controllers/apiExternaController.js'
const router = express.Router()

router.get('/pokemon/:nombre', apiExterna)

export default router
