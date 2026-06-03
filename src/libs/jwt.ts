import jwt from 'jsonwebtoken';

export const createAccessToken = (payload: string | object | Buffer): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, 'xyz123', {
            expiresIn: '1d'
        }, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    });
};