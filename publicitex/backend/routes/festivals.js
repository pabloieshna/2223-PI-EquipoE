import express from "express"
import { getFestivals, getFestivalByCity, deleteFestivalById, createFestival } from '../src/controllers/festivals.js' 
const festivalRouter = express.Router();
 
festivalRouter.get('/festivals',  getFestivals);
 
festivalRouter.get('/festival/:city', getFestivalByCity);
 
festivalRouter.post('/createFestivals', createFestival);

festivalRouter.delete('/deleteFestival/:id', deleteFestivalById);


export default festivalRouter