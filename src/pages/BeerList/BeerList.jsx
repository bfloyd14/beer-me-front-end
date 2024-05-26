//pages
import BeerCard from '../../components/BeerCard/BeerCard'

//css
import styles from './BeerList.module.css'

const BeerList = (props) => {
  console.log(props.beers.name)
  return ( 
    <main className={styles.container}>
      {/* {props.beers.map(beer => {
        <BeerCard key={beer.id} beer={beer}/> */}
      {/* })} */}
      
      {props.beers.map(beer =>{
        {beer.name}
      })}
      

    </main>
  )
}

export default BeerList