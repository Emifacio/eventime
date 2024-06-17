import express from 'express';
import morgan from 'morgan';

import eventRoutes from './routes/events.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();


//Middlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => res.json({ message: "Welcome to my API" }));
app.use(eventRoutes);
app.use(authRoutes);




app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
        });
}); 


export default app;