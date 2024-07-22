//npm modules
import { useState, useEffect } from 'react'
import { useParams,NavLink } from 'react-router-dom'

//css
import styles from './ProfileDetails.module.css'

//service
import * as profileService from '../../services/profileService'


const ProfileDetails = (props) => {
  const [profile, setProfile] = useState({})
  const {profileId} = useParams()
  const [formData, setFormData] = useState(profileId)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    const fetchProfileData = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
    }
    fetchProfileData()
  }, [profileId])
  return ( 
    <>
    <div className={styles.container}>
      <form autoComplete="off" className={styles.form}>
      <h1>My Profile</h1>
        <label className={styles.label}>
          Username:
          <input
            required
            type="text"
            name="name"
            id="name-input"
            value={profile.name}
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
            value={props.user.email}
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
          <img src={profile.photo} alt="" />
        </label>
      <div className={styles.edit}>

      <div className={styles.password}>
        <NavLink to="/auth/change-password">Change Password
        </NavLink>
      </div>
      <div className={styles.button}>
        <button>Edit</button>
      </div>
      </div>
      </form>
    </div>
    </>
  )
}

export default ProfileDetails