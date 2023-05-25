import express from "express"
import { getFestivals, getFestivalByType, deleteFestival} from '../src/controllers/festivals.js' 
const festivalRouter = express.Router();
 
//página principal del admin, panel de administración/dashboard (http://localhost:1337/admin)
festivalRouter.get('/festivals',  getFestivals);
 
//users page (http://localhost:1337/admin/users)
festivalRouter.get('/festival/:type', getFestivalByType);
 


export default festivalRouter