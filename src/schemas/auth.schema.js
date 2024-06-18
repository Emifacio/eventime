import { z } from 'zod';

export const signupSchema = z.object({    
    name: z.string({required_error: "El nombre es requerido",
    invalid_type_error: "El nombre debe ser un texto"}).min(1).max(255),
    email: z.string({ required_error: "El correo es requerido",
    invalid_type_error: "El correo no es valido"}).email({message: "El correo no es valido"}),
    password: z.string({ required_error: 'El password es requerido', invalid_type_error: 'El password debe ser un texto' }).min(6, { message: 'el password debe ser al menos de 6 caracteres'}).max(255),
});

export const signinSchema = z.object({
     email: z.string({ required_error: "El correo es requerido",
    invalid_type_error: "El correo no es valido"}).email({message: "El correo no es valido"}),
    password: z.string({ required_error: 'El password es requerido', invalid_type_error: 'El password debe ser un texto' }).min(6, {message: 'el password debe ser de al menos 6 caracteres'}).max(255, {message: 'el password debe ser de menos de 255 caracteres'}),
});