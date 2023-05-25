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
const getFestivalByType = async (req, res) => {
  res.send('Soy un festival de teatro')
  }
/**
 * Método para borrar un festival
 */
const deleteFestival = (req, res) => { } //Pendiente

//exportar los métodos
export { getFestivals, getFestivalByType, deleteFestival }