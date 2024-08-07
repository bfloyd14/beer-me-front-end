//css
import styles from './BeerDetails.module.css'

//components
import NewReview from '../../components/NewReview/NewReview'
import Reviews from '../../components/Reviews/Reviews'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

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

  const handleAddReview = async reviewFormData => {
    const newReview = await beerService.createReview(beerId, reviewFormData)
    setBeers({...beers, reviews: [...beers.reviews, newReview]})
  }

  const handleDeleteReview = async (beerId, reviewId) => {
    await beerService.deleteReview(beerId, reviewId)
    setBeers({
      ...beers,
      reviews: beers.reviews.filter(review => review._id !== reviewId)
  })
  }

  if(!beers) return 'Loading your beer....'

  return ( 
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.brewery}>
            Brewery: <br/>{beers.brewery}  
          </div>
          <div className={styles.beer}>
            Name: <br/> {beers.name}
          </div>
          <div className={styles.category}>
            Category: <br/> {beers.category}
          </div>
          <div className={styles.style}>
            Style: <br/> {beers.style}
          </div>
          <div className={styles.alcohol}>
            Alcohol By Volume: <br/> {beers.abv}%
          </div>
          <div className={styles.feedback}>
            Review: <br/> {beers.feedback}
          </div>
          <div className={styles.feedback}>
            Rating: <br/> {beers.stars}
          </div>
        </div>
      {beers.author._id === props.user.profile &&
      <>
        <div className={styles.button}>
          <NavLink to='/beers/edit' state={beers}>
            <button>Edit</button>
          </NavLink>
          <button onClick={() => props.handleDeleteBeer(beers._id)}>Delete
          </button>
        </div>
      </>
    }
      <h1>Reviews</h1>
      <div className={styles.reviews}>
        <Reviews 
        reviews={beers.reviews}
        user={props.user}
        beerId={beerId}
        handleDeleteReview={handleDeleteReview}
        />
    
      </div>
      <div className={styles.newReview}>
        <NewReview handleAddReview={handleAddReview} /> 
        </div>  
      </div>
    </div>
  )
}

export default BeerDetails