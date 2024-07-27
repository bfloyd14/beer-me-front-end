//css
import styles from './EditProfile.module.css'

//npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const EditProfile = (props) => {
  const {state} = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateProfile(formData)
  }
  return ( 
    <>
    <div className={styles.container}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
      <h1>Edit Profile</h1>
        <label className={styles.label}>
          Username:
          <input
            required
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Email:
          <input
            required
            type="text"
            name="email"
            id="email-input"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Profile Photo:
          <input
            required
            type="text"
            name="photo"
            value={profile.photo}
            id="photo-input"
            onChange={handleChange}
          /> <br/>
          <img src={formData.photo} alt="" />
        </label>
      <div className={styles.edit}>
      <div className={styles.button}>
        <button>Save</button>
      </div>
      </div>
      </form>
    </div>
    </>
  )
}

export default EditProfile