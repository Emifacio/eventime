import Router from 'express-promise-router';
import { getAllEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.controller.js';

import { isAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/events', isAuth, getAllEvents);

router.get('/events/:id', isAuth, getEvent);

router.post('/events', isAuth, createEvent);

router.put('/events/:id', isAuth, updateEvent);

router.delete('/events/:id', isAuth, deleteEvent);


export default router;