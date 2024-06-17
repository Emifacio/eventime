import bcrypt from 'bcrypt';
import { pool } from '../db.js';
import { createAccessToken } from '../libs/jwt.js';

export const signin = (req, res) => res.send({ message: "Iniciando sesión" });

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        
        const hashedPassword = await bcrypt.hash(password, 10)
      

        const result = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, hashedPassword]
        );
        
        const token = await createAccessToken({ id: result.rows[0].id });
        
        res.cookie('token', token, {
            httpOnly: true,
            //secure: true,
            sameSite: 'none',
            maxAge: 1000 * 60 * 60 * 24 // 1 day
        });
        
      return res.json(result.rows[0]);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({ message: "El usuario ya esta registrado" });
        }
    }
    
}

export const signout = (req, res) => res.send({ message: "Cerrando sesión" });

export const profile = (req, res) => res.send({ message: "Perfil del usuario" });