import { Router } from 'express';

const router = Router();

router.get('/events', (req, res) => res.send({ message: "Obteniendo eventos" }));

router.get('/events/:id', (req, res) => res.send({ message: "Obteniendo evento único" }));

router.post('/events', (req, res) => res.send({ message: "Creando evento" }));

router.put('/events/:id', (req, res) => res.send({ message: "Actualizando evento único" }));

router.delete('/events/:id', (req, res) => res.send({ message: "Eliminando evento único" }));


export default router;