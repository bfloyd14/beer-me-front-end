//css 
import styles from './BeerCard.module.css'

//npm modules
import { NavLink } from 'react-router-dom'

//components
import AuthorInfo from '../AuthorInfo/AuthorInfo'

const BeerCard = ({beer}) => {
  return ( 
    <NavLink to={`/beers/${beer._id}`}>
      <div className={styles.container}>
        <div className={styles.card}>
        <div className={styles.title}>
          <h1>{beer.brewery}</h1>
          <h2>{beer.name}</h2>
            {/* <h4>Avg. Rating: {beer.reviews.rating > 0 ? {props.beer.stars + beer.reviews.rating.reduce(a,b => a + b, 0)/beer.reviews.rating.length + 1}  : {beer.stars}}</h4> */}
        </div>
        <div className={styles.author}>
          <AuthorInfo beer={beer}/>
        </div>
        </div>
      </div>
    </NavLink>
    
  )
}

export default BeerCard