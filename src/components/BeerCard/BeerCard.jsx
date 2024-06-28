//css 
import styles from './BeerCard.module.css'

//npm modules
import { NavLink } from 'react-router-dom'

const BeerCard = ({beer}) => {
  return ( 
    <NavLink to={`/beers/${beer._id}`}>
      <div className={styles.container}>
        <header>
          <span>
          <h1>{beer.name}</h1>
          </span>
          {beer.author.name}
        </header>
        <p>{beer.brewery}</p>
      </div>
    </NavLink>
    
  )
}

export default BeerCard