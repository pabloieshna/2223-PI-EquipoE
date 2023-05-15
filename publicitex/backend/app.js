//fichero app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongodb.js'

dotenv.config()

const app = express();

app.use(cors());

//Utilizamos la variable PORT. En caso de que no esté definida utilizamos el valor 3000.
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

//Conectamos a la BD
try {
    await dbConnect()
    console.log('MongoDB connected')
} catch (error) {
    console.log(`Error connecting to MongoDB: ${error} `)
}