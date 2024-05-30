//css 
import styles from './BeerCard.module.css'

//npm modules
import { NavLink } from 'react-router-dom'

const BeerCard = ({beer}) => {
console.log(beer)
console.log(beer.name)
  return ( 
    <NavLink to={`/beers/${beer._id}`}>
      <article className={styles.container}>
        <header>
          <span>
          <h1>{beer.name}</h1>
          </span>
          {beer.author.name}
        </header>
        <p>{beer.brewery}</p>
      </article>
    </NavLink>
    
  )
}

export default BeerCard