import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface CustomRequest extends Request {
    userId?: any;
    user?: any;
}

export const isAuth = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "No autorizado" });
    }

    jwt.verify(token, "xyz123", (err: jwt.VerifyErrors | null, decoded: any) => {
        if (err || !decoded || typeof decoded === 'string') {
            return res.status(401).json({ message: "No autorizado" });
        }
        req.user = decoded;
        
        req.userId = decoded.id;

        console.log(decoded);
        next();
    });
};