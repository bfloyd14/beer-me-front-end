//css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({beer}) => {
  return ( 
    <>
    <div className={styles.container}>
      Author: {beer.author.name} 
      <img src={beer.author.photo} alt="" /><br/>
      Date: {(new Date(beer.author.createdAt).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: '2-digit'}))}
    </div>
    </>
  )
}

export default AuthorInfo