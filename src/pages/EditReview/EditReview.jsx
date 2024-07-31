//npm modules
import { useState } from "react"
import { useNavigate, useLocation, useParams } from "react-router-dom"

//services
import * as beerService from '../../services/beerService'

//css
import styles from './EditReview.module.css'

const EditReview = () => {
  const navigate = useNavigate()
  const {state} = useLocation()
  const [formData, setFormData] = useState(state)
  const {beerId} = useParams()

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    beerService.updateReview(beerId, formData)
    navigate(`/beers/${beerId}`)
  }

  return ( 
    <>
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Edit Review</h2>
      <label className={styles.label}>
        Review
        <textarea 
          required
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
      Rating (1-5): &nbsp;
      <input 
      type="Number"
      name="rating"
      value={formData.rating}
      min="0"
      max="5"
      onChange={handleChange} 
      />
      </label>
        <div className={styles.button}>
        <button type="submit">Save</button>
        </div>
      </form>   
    </div>
    </>
  )
}

export default EditReview