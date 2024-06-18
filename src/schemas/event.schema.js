import { z } from 'zod';

export const createEventSchema = z.object({
    name: z.string({required_error: "El nombre para el Evento es requerido",
    invalid_type_error: "El nombre del evento debe ser un texto"}).min(1).max(255),
    description: z.string().min(1).max(255).optional(),
    date: z.string().regex(/^\d{2}-\d{2}-\d{4}$/).optional(),
    location: z.string().min(1).max(255).optional(),

});

export const updateEventSchema = z.object({
    name: z.string({required_error: "El nombre para el Evento es requerido",
    invalid_type_error: "El nombre del evento debe ser un texto"}).min(1).max(255),
    description: z.string().min(1).max(255).optional(),
    date: z.string().regex(/^\d{2}-\d{2}-\d{4}$/).optional(),
    location: z.string().min(1).max(255).optional(),

});
