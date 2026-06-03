import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import eventRoutes from './routes/events.routes.js';
import authRoutes from './routes/auth.routes.js';
import { PORT } from './config.js';
import { pool } from './db.js';
import { WHITELIST } from './config.js';

//const { swaggerDocs: V1SwaggerDocs } = require("./swagger.js");
const app = express();

//Middlewares
app.use(cors({
  origin(origin, callback) {
    if (!origin || WHITELIST.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => res.json({ message: 'Welcome to my API' }));
app.get('/api/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  return res.json(result.rows[0]);
});
app.use('/api', eventRoutes);
app.use('/api', authRoutes);

export default app;
