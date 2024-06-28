//components
import BeerCard from '../../components/BeerCard/BeerCard'

//css
import styles from './BeerList.module.css'

const BeerList = (props) => {
  console.log(props)
  console.log(props.beers)
  return ( 
    <div className={styles.container}>
      {props.beers.map(beer => 
        <BeerCard key={beer._id} beer={beer}/> 
      )}
      {props.beer}
      

    </div>
  )
}

export default BeerList