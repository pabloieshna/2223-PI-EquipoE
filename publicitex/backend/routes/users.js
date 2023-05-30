import express from 'express'
import { getMessage, postMessage, updateMessage, deleteMessage } from '../src/controllers/users.js'

const router = express.Router() // Manejador de la rutas

router.get('/messages', getMessage)
router.post('/message/post',postMessage)
router.put('/message/update', updateMessage)
router.delete('/message/delete/:user',deleteMessage)

export default router