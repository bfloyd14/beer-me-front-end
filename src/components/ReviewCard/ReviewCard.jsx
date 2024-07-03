import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({reviews, user, beerId}) => {
  return ( 
    <>
      <h2>
      
      {reviews.comment}
      {reviews.rating}
      {user.name}
      </h2>
    </>
  )
}

export default ReviewCard