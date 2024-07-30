//npm modules
import { NavLink } from "react-router-dom"

//components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({review, user, beerId}) => {

  return ( 
    <>
    <AuthorInfo content={review} />
    {/* {review.author._id === user.profile &&
  } */}
      <>
        <NavLink 
          to={`/beers/${beerId}/reviews/edit`}
          state={review}
          >
          Edit
        </NavLink>
        {/* <button onClick={() => handleDeleteComment(blogId, comment._id)}>
          Delete
        </button> */}
      </>
    </>
  )
}

export default ReviewCard