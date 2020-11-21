import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import CartElement from '../components/ShoppingCartElement'
import '../assets/css/ShoppingCart.css'

export default function ShoppingCart() {
  const [cartListDyn, setCartList] = useState()

  var cartList = [
    { name: 'Kaktus', desc: 'opis opis opis opis', price: '10', quantity: '1', img: 'gibi.png' },
    { name: 'Zioła', desc: 'opis opis opis opis', price: '42', quantity: '3', img: 'jetson.jpg' },
  ]

  useEffect(() => {
    // axios.get(`/getCart?u_id=${userID}`)
    // getShoppingCart()
    console.log(cartList)

    let cartElements = cartList.map((e, i) => (
      <div className='cart element' key={i}>
        <CartElement data={e} />
      </div>
    ))

    setCartList(cartElements)
  }, [])

  return (
    <div className='cart'>
      <br />
      <br />
      <div className='cart lane'></div>
      <h1 className='cart header'>Twój Koszyk</h1>
      <div className='cart itemsWrapper'>{cartListDyn}</div>
      <div className='cart payment'>
        <select name='shipment'>
          <option value='0'>Wybierz sposób dostawy...</option>
          <option value='kurier'>Kurier</option>
          <option value='osobisty'>Odbiór osobisty</option>
          <option value='paczkomat'>Paczkomat</option>
        </select>
        <a href='#' className='cart buyButton'>
          Kup teraz
        </a>
      </div>
      <div className='cart lane' style={{ marginTop: '50px' }}></div>
      <h1 className='cart header'>Historia</h1>
    </div>
  )
}
