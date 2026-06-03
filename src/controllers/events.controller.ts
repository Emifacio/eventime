import { Response, NextFunction } from 'express';
import { prisma } from '../db.js';
import { CustomRequest } from '../middlewares/auth.middleware.js';

export const getAllEvents = async (req: CustomRequest, res: Response): Promise<Response> => {
  const events = await prisma.event.findMany({
    where: { userId: Number(req.userId) },
  });
  return res.json(events);
}

export const getEvent = async (req: CustomRequest, res: Response): Promise<Response> => {
  const event = await prisma.event.findUnique({
    where: { id: Number(req.params.id) },
  });
  if (!event) {
    return res.status(404).json({ message: "No existe un evento con ese ID" });
  }
  return res.json(event);
}

export const createEvent = async (req: CustomRequest, res: Response, next: NextFunction): Promise<Response | void> => {
  const { name, description, date, time, location } = req.body;

  try {
    const event = await prisma.event.create({
      data: {
        name,
        description: description || '',
        date: date ? new Date(date) : null,
        time: time ? new Date(`1970-01-01T${time}`) : null,
        location: location || '',
        userId: Number(req.userId),
      },
    });

    return res.json(event);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ message: "El evento ya existe" });
    }
    next(error);
  }
};

export const updateEvent = async (req: CustomRequest, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  const { name, description, date, time, location } = req.body;

  try {
    const event = await prisma.event.update({
      where: { id },
      data: {
        name,
        description,
        date: date ? new Date(date) : null,
        time: time ? new Date(`1970-01-01T${time}`) : null,
        location,
      },
    });

    return res.json(event);
  } catch (error: any) {
    // Prisma P2025: record not found
    if (error.code === 'P2025') {
      return res.status(404).json({ message: "No existe un evento con ese ID" });
    }
    throw error;
  }
}

export const deleteEvent = async (req: CustomRequest, res: Response): Promise<Response> => {
  try {
    await prisma.event.delete({
      where: { id: Number(req.params.id) },
    });
    return res.sendStatus(204);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: "No existe un evento con ese ID" });
    }
    throw error;
  }
}
