import mongoose from "mongoose" 

const eventoSchema = mongoose.Schema({
  festival: {
    festival_id: Number,
    festival_nombre: String,
    url: String
  },
  nombre: String,
  ciudad: String,
  fecha: String,
  hora: String,
  artista: String,
  genero: String,
  descripcion: String,
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
