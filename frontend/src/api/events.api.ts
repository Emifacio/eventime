import axios from "./axios";

export interface EventData {
  id?: string | number;
  name: string;
  description?: string;
  date?: string;
  time?: string;
  location?: string;
}

export const getAllEventsRequest = () => axios.get("/events");

export const createEventRequest = (event: EventData) => axios.post("/events", event);

export const deleteEventRequest = (id: string | number) => axios.delete(`/events/${id}`);

export const getEventRequest = (id: string | number) => axios.get(`/events/${id}`);

export const updateEventRequest = (id: string | number, event: EventData) => axios.put(`/events/${id}`, event);