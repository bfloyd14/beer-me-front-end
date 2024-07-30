//css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({content}) => {
  return ( 
    <>
    <div className={styles.container}>
      Author: {content.author.name} 
      <img src={content.author.photo} alt="" /><br/>
      Date: {(new Date(content.author.createdAt).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: '2-digit'}))}
    </div>
    </>
  )
}

export default AuthorInfo