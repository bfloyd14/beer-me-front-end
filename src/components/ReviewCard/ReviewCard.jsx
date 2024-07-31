//npm modules
import { NavLink } from "react-router-dom"

//components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

//css
import styles from './ReviewCard.module.css'

const ReviewCard = ({review, user, beerId, handleDeleteReview}) => {

  return ( 
    <>
    <div className={styles.card}>
      <div className={styles.comment}>
        {review.comment}
      </div>
      <div className={styles.rating}>
        {review.rating} stars
      </div>
      <div className={styles.author}>
        <AuthorInfo content={review} />
      </div>
    {review.author._id === user.profile &&
      <>
      <div className={styles.button}>
        <NavLink 
          to={`/beers/${beerId}/reviews/edit`}
          state={review}
          >
          <button>Edit</button>
        </NavLink>
        <button onClick={() => handleDeleteReview(beerId, review._id)}>
          Delete
          </button>
      </div>
      </>
    }
    </div>
    </>
  )
}

export default ReviewCard