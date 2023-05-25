//Importamos la libreria que hemos creado
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
//variable con la URL de conexión a MongoDB. Este valor se obtiene de las variables de entorno
const MONGODB_URI = process.env.DB_URLMONGO || 'mongodb://localhost:27017/publicitex'

// Creamos la función. Como la conexión es asincrona necesitamos esperar a este proceso
const dbConnect = async () => {
    console.log('Conectando a MongoDB a traves de la URL: ', MONGODB_URI)
    await mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
}

//exportamos la función
export default dbConnect