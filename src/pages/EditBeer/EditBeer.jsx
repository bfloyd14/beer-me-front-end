//npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from './EditBeer.module.css'

const EditBeer = (props) => {
  const {state} = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateBeer(formData)
  }

  return ( 
    <>
    <div className={styles.container}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
      <h1>Edit {props.beers.name}</h1>
        <label className={styles.label}>
          Name
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
          Category
          <select
            required
            name="category"
            id="catgory-input"
            value={formData.category}
            onChange={handleChange}
            >
            <option value="Domestic">Domestic</option>
            <option value="Import">Import</option>
            <option value="Craft">Craft</option>
            <option value="FMB">Flavored Malt-Beverage</option>
            <option value="Hard Seltzer">Hard Seltzer</option>
          </select>
        </label>
        <label className={styles.label}>
          Beer Style
          <select
            required
            type="text"
            name="style"
            id="style-input"
            value={formData.style}
            onChange={handleChange}
            >
            <option value="Ale">Ale</option>
            <option value="Lager">Lager</option>
            <option value="IPA">IPA</option>
            <option value="Pale Ale">Pale Ale</option>
            <option value="Pilsner">Pilsner</option>
            <option value="Amber Ale">Amber Ale</option>
            <option value="Porter">Porter</option>
            <option value="Witbier">Witbier</option>
            <option value="Brown Ale">Brown Ale</option>
            <option value="American Pale Ale">American Pale Ale</option>
            <option value="Kolsch">Kolsch</option>
            <option value="Helles">Helles</option>
            <option value="Saison">Saison</option>
            <option value="Gose">Gose</option>
            <option value="Tripel">Tripel</option>
            <option value="Red Ale">Red Ale</option>
            <option value="Hefeweizen">Hefeweizen</option>
            <option value="Marzen">Marzen</option>
            <option value="Lambic">Lambic</option>
            <option value="Scotch Ale">Scotch Ale</option>
            <option value="Doppelbock">Doppelbock</option>
            <option value="Vienna Lager">Vienna Lager</option>
            <option value="Scharzbier">Scharzbier</option>
            <option value="Weizenbock">Weizenbock</option>
            <option value="Helles Bock">Helles Bock</option>
            <option value="Dunkel">Dunkel</option>
            <option value="American Wheat Beer">American Wheat Beer</option>
            <option value="Hard Seltzer">Hard Seltzer</option>
            <option value="Cider">Cider</option>
            <option value="FMB">Flavored Malt-Beverage</option>
            <option value="Barrel Aged">Barrel Aged</option>
          </select>
        </label>
        <label className={styles.label}>
          Brewery
          <input
            required
            type="text"
            name="brewery"
            id="brewery-input"
            value={formData.brewery}
            onChange={handleChange}
            />
        </label>
        <label className={styles.label}>
          Alcohol 
          <br/>By Volume
          <input
            required
            type="Number"
            name="abv"
            id="abv-input"
            value={formData.abv}
            onChange={handleChange}
            /> %
        </label>
        <div className={styles.button}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default EditBeer