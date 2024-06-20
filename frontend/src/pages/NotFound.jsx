import { Link } from 'react-router-dom'
import { Card } from '../components/ui'


function NotFound() {
  return (
      <div className='h-[calc(100vh-64px)] flex justify-center items-center flex-col'>
          <Card>
          <h1 className='text-4xl font-bold my-2'>Page Not Found</h1>
          <h3 className='text-2xl my-2'>Sorry, this page is not available.</h3>
          <h3 className='text-2xl m-2'>404 Error</h3>
          <Link to="/">Go back to the main page</Link>
            </Card>
    </div>
  )
}

export default NotFound
