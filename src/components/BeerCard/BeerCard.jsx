//css 
import styles from './BeerCard.module.css'

//npm modules
import { NavLink } from 'react-router-dom'

const BeerCard = ({beer}) => {
  return ( 
    <NavLink to={`/beers/${beer._id}`}>
      <div className={styles.container}>
        <div className={styles.card}>
        <div className={styles.title}>
          <h1>{beer.brewery}</h1>
          <h2>{beer.name}</h2>
          <h4>{beer.rating}</h4>
        </div>
        <div className={styles.author}>
          <img src={beer.author.photo} alt="" />
          {beer.author.name} <br/>
          {beer.author.createdAt}
        </div>
        </div>
      </div>
    </NavLink>
    
  )
}

export default BeerCard