//fichero controllers\events.js

//Importar el modelo de events

import { eventModel } from '../models/index.js'

/**
 * Método para obtener todos los items
 */
const getEvents = async (req, res) => {
//usamos el modelo para realizar la operación en BD, a través de la conexión realizada en el index.js y vinculada a los modelos a través de Mongoose
  const data = await eventModel.find({})
  res.send({ data })
}

/**
 * Método para obtener un item
 */
const getEventsByMonth = async (req, res) => {
  res.send('¡Soy el panel de administración!');
 }
1
/**
 * Método para crear un item
 */
const createEvent = async (req, res) => {
  //Obtiene el body de la request, utilizando desestructuración. const body = req.body
  const { body } = req
  //Persistir los datos a BD, creando un documento
  const data = await eventModel.create(body)
  
  //Retornamos los datos persistidos. Express necesita retornar algo sino se queda esperando 
  res.send({ data })
}

/**
 * Método para actualizar un item
 */
const updateEvent = (req, res) => { } //Pendiente

/**
 * Método para actualizar un item
 */
const deleteEvent = (req, res) => { } //Pendiente

//exportar los métodos
export { getEvents, getEventsByMonth, createEvent, updateEvent, deleteEvent}