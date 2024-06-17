import { Router } from 'express';
import { getAllEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.controller.js';

const router = Router();

router.get('/events', getAllEvents);

router.get('/events/:id', getEvent);

router.post('/events', createEvent);

router.put('/events/:id', updateEvent);

router.delete('/events/:id', deleteEvent);


export default router;