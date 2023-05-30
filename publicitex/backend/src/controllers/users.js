//fichero controllers\users.js

//Importar el modelo de usuarios
import { userModel } from '../models/index.js'

/**
 * Método para obtener todos los usuarios
 */
const getMessage = async (req, res) => {
  const data = await userModel.find({})
  res.send({ data })
}

/**
 * Método para crear un item
 */
const postMessage = async (req, res, next) => {
  //Obtiene el body de la request, utilizando desestructuración. const body = req.body
  const { body } = req
  //Persistir los datos a BD, creando un documento
  const data = await usersModel.create(body)
  
  //Retornamos los datos persistidos. Express necesita retornar algo sino se queda esperando 
  res.send({ data })
}

/**
 * Método para actualizar un item
 */
const updateMessage = async (req, res) => {
  await userModel.findOneAndUpdate({
  user: req.body.usuario,
  mensaje: req.body.message
  })
  res.send(true)
 }

/**
 * Método para actualizar un item
 */
const deleteMessage = async (req, res) => {
  await userModel.findOneAndDelete({user: req.params.id})
  res.send(true)
}

//exportar los métodos
export { getMessage, postMessage, updateMessage, deleteMessage }