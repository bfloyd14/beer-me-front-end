// services 
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/beers`

async function create(beerFormData){
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(beerFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  create,
}