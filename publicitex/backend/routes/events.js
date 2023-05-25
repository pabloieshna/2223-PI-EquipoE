import express from "express"
import { getEvents, getEventsByMonth, createEvent, updateEvent, deleteEvent} from '../src/controllers/events.js' 
const eventRouter = express.Router();
 
//página principal del admin, panel de administración/dashboard (http://localhost:1337/admin)
eventRouter.get('/events',  getEvents);
 
//users page (http://localhost:1337/admin/users)
eventRouter.get('/events/:month', getEventsByMonth);
 


export default eventRouter