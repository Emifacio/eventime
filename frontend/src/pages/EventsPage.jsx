import { useEffect } from "react";
import EventCard from "../components/eventos/EventCard";
import { useEvents } from "../context/EventContext";

function EventsPage() {
  const { events, loadEvents } = useEvents();

  useEffect(() => {
    loadEvents();
  }, []);

  if (events.length === 0)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <h1 className="text-3xl font-bold">No Events Found</h1>
      </div>
    );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
}

export default EventsPage;
