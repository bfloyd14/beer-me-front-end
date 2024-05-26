// css
import styles from './Landing.module.css'

//assets
import beerLogo from '../../assets/images/beer-logo.jpg'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>{user ? `${user.name} , Welcome to beer-me `: 'Please create or log into your account'}</h1>
      <img src={beerLogo} alt="beer-me logo" />
    </main>
  )
}

export default Landing
