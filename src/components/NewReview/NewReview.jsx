//npm components
import { useState } from 'react'

//css
import styles from './NewReview.module.css'


const NewReview = () => {
  const [formData, setFormData] = useState({
    comment: '',
    rating: '',
  })
  
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    setFormData()
    }

  return ( 
    <form onSubmit={handleSubmit} className={styles.container}>
    <h2>Add Review</h2>
    <label className={styles.label}>
      Review
      <textarea 
        required
        name="comment"
        placeholder='Add a Review'
        onChange={handleChange}
      />
    </label>
    <label className={styles.label}>
    Rating (1-5): &nbsp;
    <input 
    type="Number"
    name="rating"
    min="0"
    max="5"
    onChange={handleChange} 
    />
    </label>
      <div className={styles.button}>
      <button type="submit">Create</button>
      </div>
    </form>  
  )
}

export default NewReview