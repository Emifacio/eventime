import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

export const createAccessToken = (payload: string | object | Buffer): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, JWT_SECRET, {
            expiresIn: '1d'
        }, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    });
};