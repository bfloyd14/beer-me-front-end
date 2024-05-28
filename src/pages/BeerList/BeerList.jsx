//components
import BeerCard from '../../components/BeerCard/BeerCard'

//css
import styles from './BeerList.module.css'

const BeerList = (props) => {
  console.log(props)
  console.log(props.beers)
  return ( 
    <main className={styles.container}>
      {props.beers.map(beer => 
        <BeerCard key={beer._id} beer={beer}/> 
        
      )}
      {props.beer}
      

    </main>
  )
}

export default BeerList