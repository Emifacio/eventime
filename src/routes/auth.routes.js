import { Router } from "express";

const router = Router();

router.post('/signin', (req, res) => res.send({ message: "Ingresando al sistema" }));

router.post('/signup', (req, res) => res.send({ message: "Registrando usuario" }));

router.post('/signout', (req, res) => res.send({ message: "Cerrando sesion" }));

router.get('/profile', (req, res) => res.send({ message: "Perfil del Usuario" }));

export default router;