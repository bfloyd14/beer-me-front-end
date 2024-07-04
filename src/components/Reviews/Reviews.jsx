import ReviewCard from "../ReviewCard/ReviewCard"

const Reviews = (props) => {
  
  if (!props.reviews) return <h4>No Reviews</h4>
  return ( 
    <>
    {props.reviews.map(review => 
    <ReviewCard
    key={review._id}
    user={props.user}
    beerId={props.beerId}
    reviews={props.reviews}
    />

    )}

    </>
  )
}

export default Reviews 