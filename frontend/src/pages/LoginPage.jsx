import { Card, Input, Button, Label, Container } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { PiSignIn } from "react-icons/pi";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) navigate("/events");
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex justify-center items-center">
      <Card>
        {loginErrors &&
          loginErrors.map((err) => (
            <p className="bg-red-500 text-white p-2 text-center">{err}</p>
          ))}
        <h1 className="text-4xl font-bold my-2 text-center flex">
          <PiSignIn className="text-white flex mr-6" />
          Sign in
        </h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Enter your email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className="bg-red-500 text-white p-2 text-center">
              Email is required
            </p>
          )}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className="bg-red-500 text-white p-2 text-center">
              Password is required
            </p>
          )}

          <Button>Sign in</Button>
          <div className="flex justify-between my-4">
            <p className="mr-3">Don't have an account?</p>
            <Link to="/register" className="font-bold">
              Register
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default LoginPage;
