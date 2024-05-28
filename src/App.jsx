// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NewBeer from './pages/NewBeer/NewBeer'
import BeerList from './pages/BeerList/BeerList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as beerService from './services/beerService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [beers, setBeers] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  
  useEffect(() =>{
    const fetchAllBeers = async () => {
      const beersData = await beerService.index()
      setBeers(beersData)
    }
    if (user) fetchAllBeers()
  }, [user])



  const handleAddBeer = async beerFormData => {
    const newBeer = await beerService.create(beerFormData)
    setBeers([newBeer, ...beers])
    navigate('/beers')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/new'
          element={
            <ProtectedRoute user={user}>
              <NewBeer handleAddBeer={handleAddBeer}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/beers' 
          element={
            <ProtectedRoute user={user}>
              <BeerList beers={beers} />
            </ProtectedRoute>
        }
        />
      </Routes>
    </>
  )
}

export default App
