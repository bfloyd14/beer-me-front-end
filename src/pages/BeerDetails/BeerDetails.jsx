//css
import styles from './BeerDetails.module.css'

//components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import NewReview from '../../components/NewReview/NewReview'
import Reviews from '../../components/Reviews/Reviews'

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
        <div className={styles.info}>
          <div className={styles.brewery}>
            Brewery: {beers.brewery}  
          </div>
          <div className={styles.beer}>
            Name: {beers.name}
          </div>
          <div className={styles.category}>
            Category: {beers.category}
          </div>
          <div className={styles.style}>
            Style: {beers.style}
          </div>
          <div className={styles.alcohol}>
            Alcohol By Volume: {beers.abv}%
          </div>
          <div className={styles.feedback}>
            Review by {beers.author.name}: {beers.feedback}
          </div>
          <div className={styles.feedback}>
            Rating: {beers.stars}
          </div>
        </div>
      <>
      <div className={styles.button}>
        <NavLink to='/beers/edit' state={beers}>
          <button>Edit</button>
        </NavLink>
        <button onClick={() => props.handleDeleteBeer(beers._id)}>Delete
        </button>
      </div>
      </>
      <div className={styles.reviews}>
        <h1>Reviews</h1>
        <Reviews 
        comments={beers.reviews.comment}
        user={props.user}
        beerId={beerId}
        />
      </div>
      <div className={styles.newReview}>
        <NewReview /> 
        </div>  
      </div>
    </div>
  )
}

export default BeerDetails