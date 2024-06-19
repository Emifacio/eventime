// Desc: API requests for events
import axios from "./axios";

export const getAllEventsRequest = () => axios.get("/events");

export const createEventRequest = (event) => axios.post("/events", event);

export const deleteEventRequest = (id) => axios.delete(`/events/${id}`);

export const getEventRequest = (id) => axios.get(`/events/${id}`);

export const updateEventRequest = (id, event) => axios.put(`/events/${id}`, event);