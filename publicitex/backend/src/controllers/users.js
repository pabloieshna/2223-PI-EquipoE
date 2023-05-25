//fichero controllers\users.js

//Importar el modelo de usuarios
import { userModel } from '../models/index.js'

/**
 * Método para obtener todos los usuarios
 */
const getUsers = async (req, res) => {
  const data = await userModel.find({})
  res.send({ data })
}

/**
 * Método para crear un item
 */
const createUser = async (req, res) => {
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
const updateUser = (req, res) => { } //Pendiente

/**
 * Método para actualizar un item
 */
const deleteUser = (req, res) => { } //Pendiente

//exportar los métodos
export { getUsers, createUser, updateUser, deleteUser }