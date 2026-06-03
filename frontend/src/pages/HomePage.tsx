import { useAuth } from "../context/AuthContext"
import { Card } from "../components/ui"

export function HomePage() {

  
  const data = useAuth()
  console.log(data)
  return (
    <div className='h-[calc(100vh-64px)] flex justify-center items-center flex-col'>
      <Card>
        <h1 className='text-4xl font-bold my-4'>Welcome to the HomePage</h1>
        <p className="my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus in delectus minima nisi quidem consequatur laboriosam repellat exercitationem, eaque odio tempora tenetur placeat nulla ipsam et accusantium. Iste nemo distinctio, animi tempora excepturi quisquam voluptatem, autem eius fugit, nesciunt veniam.</p>
      </Card>
    </div>
  )
}

export default HomePage;
