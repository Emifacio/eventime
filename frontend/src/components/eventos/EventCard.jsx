import { Card, Button } from "../ui";
import { useEvents } from "../../context/EventContext";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const { deleteEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <Card key={event.id} className="px-7 py-4">
      <div>
        <h1 className="text-2xl font-bold">{event.name}</h1>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <p>{event.time}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/events/${event.id}/edit`)}>Editar</Button>
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar este evento?")) {
              deleteEvent(event.id);
            }
          }}
        >
          Eliminar
        </Button>
      </div>
    </Card>
  );
}

export default EventCard;
