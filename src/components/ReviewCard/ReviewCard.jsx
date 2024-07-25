
const ReviewCard = (props) => {

  return ( 
    <>
      <h2>
        {props.user.name
        }
      {props.review.comment}
      </h2>
    </>
  )
}

export default ReviewCard