import React from 'react'
import axios from 'axios'

import { CartElement, Navbar, Searchbar } from '../components'

import '../assets/css/ShoppingCart.css'

export default function ShoppingCart() {
  let cartLists = []

  let cartContents = JSON.parse(sessionStorage.getItem('cart'))

  console.log(cartContents)

  for (const id in cartContents) {
    if (cartContents.hasOwnProperty(id)) {
      axios.get(`https://stargard.festiwalczacki.pl/backend/search_results.php?id=${id}`).then(res => {
        cartLists = [...cartLists, { ...res.data[0], quantity: cartContents[id] }]
        console.log(res.data, cartLists)
      })
    }
  }

  return (
    <>
      <Navbar />
      <div className='cart'>
        {cartLists ? (
          <div className='results'>
            <div className='center-text'>
              <h1>Twój Koszyk:</h1>
            </div>
            {console.log(cartLists)}
          </div>
        ) : (
          <div className='no-results'>
            <h1>Nie masz nic w koszyku.</h1>
            <p>Dodaj coś!</p>
            <Searchbar className='splash-search search-green' />
          </div>
        )}
      </div>
    </>
  )
}

//TODO query to get products
