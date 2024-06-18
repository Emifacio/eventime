import { Input, Button, Card } from "../components/ui"
import { useForm } from "react-hook-form";
import axios from "axios";




function RegisterPage() {  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async(data) => {
    const res = await axios.post('http://localhost:3000/api/signup', data, {
      withCredentials: true
    })

    console.log(res)
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
      <h3 className='text-2xl font-bold'>Register</h3>
      <form onSubmit={onSubmit}>
          <Input placeholder="Enter your full name" {...register('name', {
            required: true,
          })} />
          { errors.name && <span className="text-red-500">Name is required</span>}
          <Input type="email" placeholder="Enter your email" {...register('email', {
          required: true})} />
          {errors.email && <span className="text-red-500">Email is required</span>}
          <Input type="password" placeholder="Enter your password"  {...register('password', {
            required: true
          })} />
          {errors.password && <span className="text-red-500">Password is required</span>}
          <Button>Register</Button>
        
      </form>
      </Card>
      
    </div>
  )
}

export default RegisterPage
