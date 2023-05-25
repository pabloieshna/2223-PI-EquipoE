import express from 'express'
import { getUsers, createUser, updateUser, deleteUser } from '../src/controllers/users.js'

const router = express.Router() // Manejador de la rutas

router.get('/users', getUsers)
router.post('/login',createUser)
router.delete('/delete',deleteUser)

export default router