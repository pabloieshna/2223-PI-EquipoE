import mongoose from "mongoose" 

const eventoSchema = mongoose.Schema({
  id: Number,
  festival: {
    festival_id: Number,
    festival_nombre: String,
    url: String
  },
  nombre: String,
  ciudad: String,
  fecha: {
    fecha_mes: String,
    fecha_dia: String,
    fecha_año: String 
  },
  hora: String,
  artista: String,
  genero: String,
  descripcion: String,
  thumbnail: String,
  entradas: [
    {
      tìpo: String,
      precio: Number,
      cantidad_disponible: Number
    }
  ],
  patrocinadores: [
    {
      nombre: String,
      logo: String,
      nivel: String
    }
  ]
})

eventoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default mongoose.model("events", eventoSchema)
