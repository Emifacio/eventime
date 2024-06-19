import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import { Container } from './components/ui';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EventFormPage from './pages/EventFormPage'
import EventsPage from './pages/EventsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import NotFound from './pages/NotFound'





function App() {
  
  const { isAuth } = useAuth()
  console.log(isAuth)

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route element={ <ProtectedRoute isAllowed={!isAuth} redirectTo={"/events"}/>}>
             <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
          </Route>
   
          <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo={"/login"}/>}>
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/new" element={<EventFormPage />} />
      <Route path="/profile" element={<ProfilePage />} />
          </Route> 
          
      <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
     
  </>
 
     
  )
}

export default App
