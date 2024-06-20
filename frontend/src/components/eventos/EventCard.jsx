import { Card, Button } from "../ui";
import { useEvents } from "../../context/EventContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";

function EventCard({ event }) {
  const { deleteEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <Card key={event.id} className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold">{event.name}</h1>
        <p>{event.description}</p>
        <p>{event.date}</p>
        <p>{event.time}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/events/${event.id}/edit`)}>
          <BiPencil className="text-white" />
          Editar
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar este evento?")) {
              deleteEvent(event.id);
            }
          }}
        >
          <PiTrashSimpleLight className="text-white" />
          Eliminar
        </Button>
      </div>
    </Card>
  );
}

export default EventCard;
