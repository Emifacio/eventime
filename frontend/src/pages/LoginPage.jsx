import { Link, useNavigate } from 'react-router-dom'
import { Card, Input, Button, Label } from '../components/ui'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'


function LoginPage() {
  
  const { register, handleSubmit } = useForm()
  const { signin } = useAuth()
  const navigate = useNavigate()
  
  const onSubmit = handleSubmit(async (data) => {
    await signin(data)
    navigate('/profile')
  });  

  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">SignIn</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input placeholder="Enter your email" {...register('email', {
          required:true})} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="Enter your password" {...register('password', {
              required: true
            })}/>
          <Button>SignIn</Button>
          <div className='flex justify-between my-4'>
            <p>Don't have an account?</p>
            <Link to="/register" className="font-bold">
              Register
            </Link>
          
          
          
          </div>

      </form>
      </Card>
    </div>
  )
}

export default LoginPage
