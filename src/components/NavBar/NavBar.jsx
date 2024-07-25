// npm modules
import { NavLink } from 'react-router-dom'

//css
import styles from './NavBar.module.css'


const NavBar = ({ user, handleLogout, profile }) => {

  const publicLinks =(
    <ul>
      <li><NavLink to="/auth/login">Log In</NavLink></li>
      <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <NavLink to='/profiles/:profileId'><img className={styles.image} src={profile.photo} alt="beer-me logo" /></NavLink>
      <li><NavLink to='/new'>New Beer</NavLink></li>
      <li><NavLink to='/beers'>Beers</NavLink></li>
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="" onClick={handleLogout}>Logout</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
