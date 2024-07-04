// css
import styles from './Landing.module.css'

//assets
import beerLogo from '../../assets/images/beerme-logo.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <section>
        <img className={styles.image}src={beerLogo} alt="beer-me logo" />
      </section>
      <section className={styles.about}>
        <header>
          <h2>About Us </h2>
        </header>
        <article>
          <p>
            There are so many beers to choose from when you are starring at beer cooler.  It is the worst to buy a beer from the store and it tastes terrible, you not only wasted your hard earned money but you are stuck with at least 5 more beers that you do not enjoy.  This is a site designed to help you make an informed decision on what each beer to purchase based upon your individual taste buds.
          </p>
        </article>

      </section>
    
    </main>
  )
}

export default Landing
