//fichero controllers\festivals.js

//Importar el modelo de festivals
import { festivalModel } from '../models/index.js'

/**
 * Método para obtener todos los festivales
 */
const getFestivals = async (req, res) => {
  //usamos el modelo para realizar la operación en BD, a través de la conexión realizada en el index.js y vinculada a los modelos a través de Mongoose
  const data = await festivalModel.find({})
  res.send({ data })
}

/**
 * Método para obtener un festival
 */
const getFestivalByCity = async (req, res) => {
  const data = await festivalModel.find({ubicacion: req.params.city})
  res.send({data})  
}

const createFestival = async (req, res) =>{
  const { body }=req;
  const data = await festivalModel.create(body);
}

/**
 * Método para borrar un festival
 */
const deleteFestivalById = async (req, res) => { 
  const data = await festivalModel.deleteOne({id: req.params.id})
  res.send('Eliminado Correctamente el festival con id: ', req.params.id)
} 

//exportar los métodos
export { getFestivals, getFestivalByCity, deleteFestivalById, createFestival }