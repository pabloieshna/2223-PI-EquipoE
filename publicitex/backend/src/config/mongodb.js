//Importamos la libreria que hemos creado
import mongoose from 'mongoose'

//variable con la URL de conexión a MongoDB. Este valor se obtiene de las variables de entorno
//En fichero .env, colocar este valor DB_URLMONGO=mongodb://localhost:27017/{nombre-bd}
const MONGODB_URI = process.env.DB_URLMONGO || 'mongodb://localhost:27017/{nombre-bd}'

//mongoose.connect(MONGODB_URI)

// Creamos la función. Como la conexión es asincrona necesitamos esperar a este proceso
const dbConnect = async () => {
    await mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
}

//exportamos la función
export default dbConnect