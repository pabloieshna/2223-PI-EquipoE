import mongoose from "mongoose" 

const festivalSchema = mongoose.Schema({
    id:{
        type: Number,
        unique: true
    },
    nombre: String,
    ubicacion: String,
    descripcion: String,
    eventos: [
      {
        nombre: String,
        fecha: String,
        hora: String,
        artista: String,
        genero: String,
        descripcion: String
      }
    ],
    fecha_inicio: {
      fecha_dia: Number,
      fecha_mes: Number,
      fecha_año: Number 
    },
    fecha_fin: {
      fecha_dia: Number,
      fecha_mes: Number,
      fecha_año: Number 
    }
  })

export default mongoose.model("festival", festivalSchema)
