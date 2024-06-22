import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { set, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useEvents } from "../context/EventContext";

function EventFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const {
    createEvent,
    updateEvent,
    loadEvent,
    errors: eventsErrors,
  } = useEvents();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let event;

    if (!params.id) {
      event = await createEvent(data);
    } else {
      event = await updateEvent(params.id, data);
    }

    if (event) {
      navigate("/events");
    }
  });

  useEffect(() => {
    if (params.id) {
      loadEvent(params.id).then((event) => {
        if (event) {
          setValue("name", event.name);
          setValue("description", event.description);
          setValue("date", event.date);
          setValue("time", event.time);
          setValue("location", event.location);
        } else {
          navigate("/not-found"); // O redirige a otra página de tu elección
        }
      });
    }
  }, [params.id, loadEvent, setValue, navigate]);

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {eventsErrors &&
          eventsErrors.map((error, i) => (
            <p className="text-red-500" key={i}>
              {error}
            </p>
          ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Edit Event" : "Create Event"}
        </h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            placeholder="Name"
            autoFocus
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}

          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Description"
            rows={3}
            {...register("description")}
          ></Textarea>
          <Label htmlFor="date">date</Label>
          <Input
            type="date"
            {...register("date", {
              required: true,
            })}
          />
          <Label htmlFor="time">time</Label>
          <Input
            type="time"
            {...register("time", {
              required: true,
            })}
          />
          <Label htmlFor="location">Location</Label>
          <Input
            type="location"
            placeholder="location"
            autoFocus
            {...register("location", {
              required: true,
            })}
          />

          <Button type="submit">
            {params.id ? "Edit Event" : "Create Event"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default EventFormPage;
