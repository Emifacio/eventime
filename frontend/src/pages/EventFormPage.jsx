import { Card, Input, TextArea, Label, Button } from "../components/ui"
import { useForm } from "react-hook-form";


function EventFormPage() {
  
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div>
      <Card>
        <h2>Create Event</h2>
        <form onSubmit={ onSubmit }>
          <Label htmlFor="title">Title</Label>
          <Input type="text" placeholder="title" autoFocus {...register('title', {required: true,})} />
          <Label htmlFor="description">Description</Label>
          <TextArea placeholder="Description" rows={3} {...register('description')} />
          <TextArea/>
          <Label htmlFor="date">Date</Label>
          <Input type="date" {...register('date')} />
          <Label htmlFor="time">Time</Label>
          <Input type="time" {...register('time')} />
        
          <Button>
            Create Event
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default EventFormPage
