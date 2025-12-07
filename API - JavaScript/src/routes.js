import express from 'express'
import { createUser } from './controllers/usersController.js'

const router = express.Router()

router.post('/cadastro', createUser)

export default router