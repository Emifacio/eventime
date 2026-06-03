import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
export const isAuth = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "No autorizado" });
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err || !decoded || typeof decoded === 'string') {
            return res.status(401).json({ message: "No autorizado" });
        }
        req.user = decoded;
        req.userId = decoded.id;
        console.log(decoded);
        next();
    });
};
