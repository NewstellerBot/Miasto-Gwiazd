import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import '../assets/css/ShoppingCart.css'
import CartFromOneSeller from '../components/ShoppingCartFromOneSeller'

export default function ShoppingCart() {
  const [fullCart, setFullCart] = useState()

  var cartLists = [
    [
      {
        product_id: '1',
        product_name: 'Piwo',
        quantity: '5',
        product_price: '10',
        total: '50',
        product_img: 'wibrator.png',
        company_name: 'zipaa',
      },
      {
        product_id: '2',
        product_name: 'Ferarri',
        quantity: '3',
        product_price: '69',
        total: '207',
        product_img: 'jetson.jpg',
        company_name: 'Samochodzy',
      },
    ],
    [
      {
        product_id: '1',
        product_name: 'Piwo',
        quantity: '5',
        product_price: '10',
        total: '50',
        product_img: 'wibrator.png',
        company_name: 'zipaa',
      },
      {
        product_id: '2',
        product_name: 'Ferarri',
        quantity: '3',
        product_price: '69',
        total: '207',
        product_img: 'jetson.jpg',
        company_name: 'Samochodzy',
      },
    ],
  ]

  useEffect(() => {
    let cartElements = cartLists.map((e, i) => <CartFromOneSeller key={i} data={e} />)
    setFullCart(cartElements)
  }, [])

  return (
    <div className='cart'>
      <br />
      <br />
      <div className='cart lane'></div>
      <h1 className='cart header'>Twój Koszyk</h1>
      <div className='cart sellerWrapper'>{fullCart}</div>
      <div className='cart lane' style={{ marginTop: '50px' }}></div>
      <h1 className='cart header'>Historia</h1>
    </div>
  )
}
