import express from 'express'
import { createUser } from './controllers/createUsersController.js'
import { registerController } from './controllers/registerController.js'
import { loginController } from './controllers/loginController.js'

const router = express.Router()

router.post('/cadastro-users', createUser)
router.post('/cadastro-admin', registerController)
router.post('/login-admin', loginController)

export default router