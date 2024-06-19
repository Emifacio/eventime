import { Link, useNavigate } from 'react-router-dom'
import { Card, Input, Button, Label, Container } from '../components/ui'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  
  const { register, handleSubmit } = useForm()
  const { signin, errors } = useAuth()
  const navigate = useNavigate()
  
  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data)
    if (user) {
      navigate('/profile')
    }
  });  

  return (
    <Container className="h-[calc(100vh-10rem)] flex justify-center items-center">
      <Card>
        {errors && (errors.map(err => (
          <p className="text-red-500 text-center">{err}</p>
        )))
        }
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
    </Container>
  )
}

export default LoginPage
