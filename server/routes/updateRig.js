import express from 'express'
const router = express.Router()
import updateRigController from '../controllers/updateRigController.js'
// const { validateId } = require('../middlewares/validateId')
// const checks  = require('../middlewares/checks')
// const { validateChecks } = require('../middlewares/validateChecks')

router.put('/:id', updateRigController.updateRig)

export default router
