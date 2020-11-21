import React from 'react'
import { useState } from 'react'
import Dot from '../assets/svg/dot.svg'
import '../assets/css/ShoppingCart.css'
import kuflowe from '../assets/img/kuflowe.jpg'

export default function CartElement(props) {
  console.log(props)
  return (
    <div className='cartElement'>
      <img src={Dot} className='cartElement dot'></img>
      <img className='cartElement img' src={kuflowe}></img>
      <div className='cartElement desc'>
        <h1>{props.data.name}</h1>
        <p>{props.data.desc}</p>
      </div>
      <div className='cartElement quant'>
        <h1>{props.data.quantity} szt.</h1>
        <h1>{props.data.price} zł</h1>
      </div>
    </div>
  )
}
