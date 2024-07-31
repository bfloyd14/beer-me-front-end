// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NewBeer from './pages/NewBeer/NewBeer'
import BeerList from './pages/BeerList/BeerList'
import EditBeer from './pages/EditBeer/EditBeer'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import EditProfile from './pages/EditProfile/EditProfile'
import EditReview from './pages/EditReview/EditReview'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as beerService from './services/beerService'
import * as profileService from './services/profileService'


// styles
import './App.css'
import BeerDetails from './pages/BeerDetails/BeerDetails'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [beers, setBeers] = useState([])
  const [profile, setProfile] = useState([])
  const navigate = useNavigate()
  const {profileId} = useParams()

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

  useEffect(() => {
    const fetchProfileData = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
    }
    fetchProfileData()
  }, [profileId])

  const handleAddBeer = async beerFormData => {
    const newBeer = await beerService.create(beerFormData)
    setBeers([newBeer, ...beers])
    navigate('/beers')
  }

  const handleDeleteBeer = async beerId => {
    const deletedBeer = await beerService.delete(beerId)
    setBeers(beers.filter(beer => beer._id !== deletedBeer._id))
    navigate('/beers')
  }

  const handleUpdateBeer = async beerFormData => {
    const updatedBeer = await beerService.update(beerFormData)
    setBeers(beers.map(beer => updatedBeer._id === beer._id ? updatedBeer : beer))
    navigate('/beers')
  }

  const handleUpdateProfile = async profileFormData => {
    const updatedProfile = await profileService.update(profileFormData)
    setProfile(profile.map(profile => updatedProfile._id === profile._id ? updatedProfile : profile))
    navigate('/profiles/:profileId')
  }

  return (
    <>
      <NavBar profile={profile} user={user} handleLogout={handleLogout} />
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
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails profile={profile} user={user} />
            </ProtectedRoute>
          }
        />
          <Route 
          path='/profiles/:profileId/edit'
          element={
            <ProtectedRoute user={user}>
              <EditProfile user={user} profile={profile} beers={beers} handleUpdateProfile = {handleUpdateProfile}/>
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
        <Route 
        path='/beers/:beerId'
        element={
          <ProtectedRoute user={user}>
            <BeerDetails user={user} handleDeleteBeer={handleDeleteBeer}/>
          </ProtectedRoute>
        }
        />
        <Route 
        path='/beers/edit'
        element={
          <ProtectedRoute user={user}>
            <EditBeer user={user} beers={beers} handleUpdateBeer = {handleUpdateBeer}/>
          </ProtectedRoute>
        }
        />
        <Route 
        path='/beers/:beerId/reviews/edit'
        element={
          <ProtectedRoute user={user}>
            <EditReview user={user} />
          </ProtectedRoute>
        }
        />
      </Routes>
    </>
  )
}

export default App
