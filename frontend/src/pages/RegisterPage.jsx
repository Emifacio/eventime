import { Input, Button, Card } from "../components/ui"
import { useForm } from "react-hook-form"



function RegisterPage() {
  
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
      <h3 className='text-2xl font-bold'>Register</h3>
      <form onSubmit={onSubmit}>
          <Input placeholder="Enter your full name" {...register('name', {
            required: true,
          })} />
          
          <Input type="email" placeholder="Enter your email" {...register('email', {
          required: true})} />
          
          <Input type="password" placeholder="Enter your password"  {...register('password', {
            required: true
          })} />
         
          <Button>Register</Button>
        
      </form>
      </Card>
      
    </div>
  )
}

export default RegisterPage
