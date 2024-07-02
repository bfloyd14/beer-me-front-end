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

async function index(){
  try {
    const res = await fetch(BASE_URL, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function show(beerId){
  try {
    const res = await fetch(`${BASE_URL}/${beerId}`, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteBeer(beerId){
  try {
    const res = await fetch(`${BASE_URL}/${beerId}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function update(beerFormData){
  try {
    const res = await fetch(`${BASE_URL}/${beerFormData._id}`, {
      method: 'PUT',
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
  index,
  show,
  deleteBeer as delete,
  update,
}