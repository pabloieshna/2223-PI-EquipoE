//fichero app.js
import express from 'express' 
import cors from 'cors'
import dotenv from 'dotenv'
import { eventRoute, userRoute, festivalRoute } from './routes/index.js'
import dbConnect from './src/config/mongodb.js'
import { festivalModel } from './src/models/index.js'


dotenv.config()

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api',userRoute)
app.use('/api',eventRoute)
app.use('/api',festivalRoute)

 //Utilizamos la variable PORT. En caso de que no esté definida utilizamos el valor 3000.
const port = process.env.PORT || 3000;

try {
    await dbConnect()
    console.log("Conecado a MongoDB con éxito")
} catch (error) {
    console.log(error)
}


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

// festivalModel.create({
//     id:4,
//     nombre: 'Maremagnun',
//     ubicacion: 'Malaga',
//     descripcion: 'Festival de música',
//     eventos: [
//       {
//         nombre: 'Marea',
//         fecha: '23/7/2024',
//         hora: '20:30',
//         artista: 'Marea',
//         genero: 'Música',
//         descripcion: 'Concierto interpretado por Marea'
//       }
//     ],
//     fecha_inicio: {
//       fecha_dia: 23,
//       fecha_mes: 7,
//       fecha_año: 2024 
//     },
//     fecha_fin: {
//       fecha_dia: 25,
//       fecha_mes: 8,
//       fecha_año: 2024 
//     }
//   })