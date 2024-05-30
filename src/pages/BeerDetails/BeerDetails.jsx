//css
import styles from './BeerDetails.module.css'

//npm modules
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

//services
import * as beerService from '../../services/beerService'

const BeerDetails = (props) => {

  
  const [beers, setBeers] = useState(null)
  const { beerId } = useParams()
  
useEffect(() =>{
  const fetchBeer = async() => {
    const beerData = await beerService.show(beerId)
    setBeers(beerData)
    console.log(beerData)
  }
  fetchBeer()
}, [beerId])

  return ( 
    <main className={styles.container}>
    <article>
      <header>
        {/* <h3>{props.beer.category.toUpperCase()}</h3>
        <h1>{props.beer.name}</h1> */}
        <span>
          {/* <AuthorInfo content={beer} /> */}
          {/* {beers.author._id === props.user.profile && */}
            <>
              <NavLink to='/blogs/edit' state={beers}>
                <button>Edit</button>
              </NavLink>
              <button>Delete
              </button>
            </>
          {/* } */}
        </span>
      </header>
      {/* <p>{beers.style}</p> */}
    </article>
    
  </main>

  )
}

export default BeerDetails