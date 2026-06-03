import bcrypt from 'bcryptjs';
import { prisma } from '../db.js';
import { createAccessToken } from '../libs/jwt.js';
import md5 from 'md5';
export const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        return res.status(400).json({
            message: "El correo no esta registrado",
        });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({
            message: "La contraseña es incorrecta",
        });
    }
    const token = await createAccessToken({ id: user.id });
    res.cookie("token", token, {
        // httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    return res.json(user);
};
export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const gravatar = `https://www.gravatar.com/avatar/${md5(email)}`;
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                gravatar,
            },
        });
        const token = await createAccessToken({ id: user.id });
        res.cookie("token", token, {
            // httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        return res.json(user);
    }
    catch (error) {
        // Prisma unique constraint violation
        if (error.code === "P2002") {
            return res.status(400).json({
                message: "El correo ya esta registrado",
            });
        }
        next(error);
    }
};
export const signout = (req, res) => {
    res.clearCookie('token');
    res.sendStatus(200);
};
export const profile = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: Number(req.userId) },
    });
    return res.json(user);
};
