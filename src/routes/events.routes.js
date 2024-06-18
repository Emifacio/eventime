import Router from 'express-promise-router';
import { getAllEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.controller.js';

import { isAuth } from '../middlewares/auth.middleware.js';
import { validateSchema } from './../middlewares/validate.middleware.js';
import { createEventSchema, updateEventSchema } from './../schemas/event.schema.js'   // Import the schema from the schema file

const router = Router();

router.get('/events', isAuth, getAllEvents);

router.get('/events/:id', isAuth, getEvent);

router.post('/events', isAuth, validateSchema(createEventSchema), createEvent);

router.put('/events/:id', isAuth, validateSchema(updateEventSchema), updateEvent);

router.delete('/events/:id', isAuth, deleteEvent);


export default router;