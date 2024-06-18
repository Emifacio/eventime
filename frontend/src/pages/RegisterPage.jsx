import { Input, Button, Card,Label } from "../components/ui"
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";




function RegisterPage() {  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const {signup} = useAuth()
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async (data) => {
    await signup(data) 
    navigate('/profile ')
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
      <h3 className='text-2xl font-bold'>Register</h3>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input placeholder="Enter your full name" {...register('name', {
            required: true,
          })} />
          {errors.name && <span className="text-red-500">Name is required</span>}
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Enter your email" {...register('email', {
          required: true})} />
          {errors.email && <span className="text-red-500">Email is required</span>}
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="Enter your password"  {...register('password', {
            required: true
          })} />
          {errors.password && <span className="text-red-500">Password is required</span>}
          <Button>Register</Button>
          <div className='flex justify-between my-4'>
            <p>Already have an account?</p>
            <Link to="/login" className="font-bold">
              login
            </Link>
          </div>
      </form>
      </Card>
      
    </div>
  )
}

export default RegisterPage
