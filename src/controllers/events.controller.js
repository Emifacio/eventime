export const getAllEvents = (req, res) => res.send({ message: "Obteniendo eventos" });

export const getEvent = (req, res) => res.send({ message: "Obteniendo evento único" });

export const createEvent = (req, res) => res.send({ message: "Creando evento" });

export const updateEvent = (req, res) => res.send({ message: "Actualizando evento" });

export const deleteEvent = (req, res) => res.send({ message: "Eliminando evento" });