import { ZodError } from "zod";
export const validateSchema = (schema) => async (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof ZodError) {
            console.log(error.errors);
            return res.status(400).json(error.errors.map((err) => err.message));
        }
        const err = error;
        return res.status(400).json(err.message || "Error de validación");
    }
};
