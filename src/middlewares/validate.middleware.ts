import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validateSchema = (schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            console.log(error.errors);
            return res.status(400).json(error.errors.map((err) => err.message));
        }
        const err = error as any;
        return res.status(400).json(err.message || "Error de validación");
    }
};
