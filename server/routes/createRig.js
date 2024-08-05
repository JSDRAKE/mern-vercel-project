import express from 'express'
import createRigController from '../controllers/createRigController.js'
import checks from '../middlewares/checks.js'
import validateCheks from '../middlewares/validateChecks.js'

const router = express.Router()


router.post('/',checks, validateCheks,  createRigController.createRig)

export default router