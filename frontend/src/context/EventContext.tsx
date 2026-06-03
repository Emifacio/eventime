import { createContext, useState, useContext, ReactNode } from "react";
import {
  getAllEventsRequest,
  deleteEventRequest,
  createEventRequest,
  getEventRequest,
  updateEventRequest,
  EventData,
} from "../api/events.api";

export interface EventContextType {
  events: EventData[];
  errors: string[];
  loadEvents: () => Promise<void>;
  loadEvent: (id: string | number) => Promise<EventData | null>;
  createEvent: (event: EventData) => Promise<EventData | undefined>;
  deleteEvent: (id: string | number) => Promise<void>;
  updateEvent: (id: string | number, event: EventData) => Promise<EventData | undefined>;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvents debe estar dentro del proveedor EventProvider");
  }
  return context;
};

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const loadEvents = async () => {
    try {
      const res = await getAllEventsRequest();
      setEvents(res.data);
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to load events"]);
      }
    }
  };

  const loadEvent = async (id: string | number): Promise<EventData | null> => {
    try {
      const res = await getEventRequest(id);
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to load event"]);
      }
      return null;
    }
  };

  const createEvent = async (event: EventData): Promise<EventData | undefined> => {
    try {
      const res = await createEventRequest(event);
      setEvents((prevEvents) => [...prevEvents, res.data]);
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to create event"]);
      }
    }
  };

  const deleteEvent = async (id: string | number) => {
    try {
      const res = await deleteEventRequest(id);
      if (res.status === 204 || res.status === 200) {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to delete event"]);
      }
    }
  };

  const updateEvent = async (id: string | number, event: EventData): Promise<EventData | undefined> => {
    try {
      const res = await updateEventRequest(id, event);
      setEvents((prevEvents) =>
        prevEvents.map((evt) => (evt.id === id ? res.data : evt))
      );
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to update event"]);
      }
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        loadEvents,
        deleteEvent,
        createEvent,
        loadEvent,
        errors,
        updateEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
