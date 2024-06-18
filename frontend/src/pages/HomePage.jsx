import { useAuth } from "../context/AuthContext"

export function HomePage() {

  
  const data = useAuth()
  console.log(data)
  return <><h1>HomePage</h1></>
}

export default HomePage;
