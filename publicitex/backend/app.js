//fichero app.js
import express from 'express' 
import cors from 'cors'
import dotenv from 'dotenv'
import { eventRoute, userRoute, festivalRoute } from './routes/index.js'
import dbConnect from './src/config/mongodb.js'


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
