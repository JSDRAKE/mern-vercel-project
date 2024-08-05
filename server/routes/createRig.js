import express from 'express'
const router = express.Router()
import createRigController from '../controllers/createRigController.js'
// const checks  = require('../middlewares/checks')
// const { validateChecks } = require('../middlewares/validateChecks')


router.post('/',  createRigController.createRig)

export default router