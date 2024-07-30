//css
import styles from './BeerDetails.module.css'

//components
import NewReview from '../../components/NewReview/NewReview'
import Reviews from '../../components/Reviews/Reviews'

//npm modules
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

//services
import * as beerService from '../../services/beerService'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

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

  // const handleDeleteReview = async beerId => {
  //   const deletedBeer = await beerService.delete(beerId)
  //   setBeers(beers.filter(beer => beer._id !== deletedBeer._id))
  //   navigate('/beers')
  // }

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
            Review: {beers.feedback}
          </div>
          <div className={styles.feedback}>
            Rating: {beers.stars}
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
        // handleDeleteReview={handleDeleteReview}
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