//css
import styles from './BeerDetails.module.css'

//components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import NewReview from '../../components/NewReview/NewReview'

//npm modules
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

//services
import * as beerService from '../../services/beerService'

const BeerDetails = (props) => {
  const [beers, setBeers] = useState(null)
  const { beerId } = useParams()
  
  useEffect(() =>{
  const fetchBeer = async () => {
    const beerData = await beerService.show(beerId)
    setBeers(beerData)
    console.log(beerData)
  }
  fetchBeer()
  }, [beerId])

  if(!beers) return 'Loading your beer....'

  return ( 
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.brewery}>
          Brewery: {beers.brewery}  
        </div>
        <div className={styles.beer}>
          Name: {beers.name}
        </div>
        <div className={styles.alcohol}>
          Alcohol By Volume: {beers.abv}%
        </div>

      <>
      <div className={styles.button}>
        <NavLink to='/blogs/edit' state={beers}>
          <button>Edit</button>
        </NavLink>
        <button>Delete
        </button>
      </div>
      </>
      <div className={styles.reviews}>
        <h1>Reviews</h1>
        <NewReview /> 
      </div>  
      </div>
    </div>
  )
}

export default BeerDetails