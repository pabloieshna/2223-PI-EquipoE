//fichero controllers\festivals.js

//Importar el modelo de festivals
import { usersModel } from '../models/events.js'

/**
 * Método para obtener todos los items
 */
const getItems = async (req, res) => {
  //usamos el modelo para realizar la operación en BD, a través de la conexión realizada en el index.js y vinculada a los modelos a través de Mongoose
  const data = await usersModel.find({})
  res.send({ data })
}

/**
 * Método para obtener un item
 */
const getItem = async (req, res) => {

  }

/**
 * Método para crear un item
 */
const createItem = async (req, res) => {
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
const updateItem = (req, res) => { } //Pendiente

/**
 * Método para actualizar un item
 */
const deleteItem = (req, res) => { } //Pendiente

//exportar los métodos
export { getItems, getItem, createItem, updateItem, deleteItem }