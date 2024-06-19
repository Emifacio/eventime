import { createContext, useState, useContext } from "react";
import {
  getAllEventsRequest,
  deleteEventRequest,
  createEventRequest,
  getEventRequest,
  updateEventRequest,
} from "../api/events.api";

const EventContext = createContext();

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvents debe estar dentro del proveedor EventProvider");
  }
  return context;
};

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [errors, setErrors] = useState([]);

  const loadEvents = async () => {
    try {
      const res = await getAllEventsRequest();
      setEvents(res.data);
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to load events"]);
      }
    }
  };

  const loadEvent = async (id) => {
    try {
      const res = await getEventRequest(id);
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to load event"]);
      }
      return null;
    }
  };

  const createEvent = async (event) => {
    try {
      const res = await createEventRequest(event);
      setEvents((prevEvents) => [...prevEvents, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to create event"]);
      }
    }
  };

  const deleteEvent = async (id) => {
    try {
      const res = await deleteEventRequest(id);
      if (res.status === 204) {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
      }
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      } else {
        setErrors(["Failed to delete event"]);
      }
    }
  };

  const updateEvent = async (id, event) => {
    try {
      const res = await updateEventRequest(id, event);
      setEvents((prevEvents) =>
        prevEvents.map((evt) => (evt.id === id ? res.data : evt))
      );
      return res.data;
    } catch (error) {
      if (error.response) {
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





 

  



  // return (
  //   <EventContext.Provider
  //     value={{
  //       events,
  //       loadEvents,
  //       deleteEvents,
  //       createEvent,
  //       loadEvent,
  //       errors,
  //       updateEvent
  //     }}
  //   >
  //     {children}
  //   </EventContext.Provider>
  // );
