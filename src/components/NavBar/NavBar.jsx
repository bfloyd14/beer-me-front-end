// npm modules
import { NavLink } from 'react-router-dom'

//css
import styles from './NavBar.module.css'

//assets
import beerLogo from '../../assets/images/beer-logo.jpg'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks =(
    <ul>
      <li><NavLink to="/auth/login">Log In</NavLink></li>
      <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      {/* <li>{profile.name}'s Profile</li> */}
      <li><NavLink to='/new'>New Beer</NavLink></li>
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
      <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to='/'><img className={styles.image} src={beerLogo} alt="beer-me logo" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
