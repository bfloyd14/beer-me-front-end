//npm components
import { useState } from 'react'

//css
import styles from './NewReview.module.css'


const NewReview = () => {
  const [formData, setFormData] = useState({
    text: ''
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
      <h1>New Review</h1>
      <textarea 
        required
        name="text"
        value={formData.text}
        placeholder='Add a Review'
        onChange={handleChange}
      />
      <div className={styles.button}>
      <button type="submit">Create</button>
      </div>
    </form>  
  )
}

export default NewReview