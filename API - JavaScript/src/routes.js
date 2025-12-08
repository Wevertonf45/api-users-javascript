import express from 'express'
import { createUser } from './controllers/createUsersController.js'

const router = express.Router()

router.post('/cadastro', createUser)

export default router