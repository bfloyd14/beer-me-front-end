//css
import styles from './BeerDetails.module.css'

//components
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

  return ( 
    <div className={styles.container}>
      <div className={styles.details}>
      {beers.name}
      {/* {props.user === beers.user.profile &&  */}
      <>
      <div className={styles.button}>
        <NavLink to='/blogs/edit' state={beers}>
          <button>Edit</button>
        </NavLink>
        <button>Delete
        </button>
      </div>
      </>
      {/* } */}
      </div>
    </div>
  )
}

export default BeerDetails