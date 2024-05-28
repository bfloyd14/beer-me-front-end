//css 
import styles from './BeerCard.module.css'

//npm modules
import { NavLink } from 'react-router-dom'

const BeerCard = ({beer}) => {
console.log(beer)
console.log(beer.name)
  return ( 
    <article className={styles.container}>
      <header>
        <span>
        <h1>{beer.name}</h1>
        </span>
      </header>
      <p>{beer.name}</p>

    </article>
    
  )
}

export default BeerCard