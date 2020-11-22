import React from 'react'
import CartElement from '../components/ShoppingCartElement'
import { useState } from 'react'
import { useEffect } from 'react'
import '../assets/css/ShoppingCart.css'

export default function CartFromOneSeller(props) {
  const [cartListDyn, setCartList] = useState()
  const [companyName, setCompanyName] = useState()
  const [total, setTotal] = useState()

  let cartList = props.data

  useEffect(() => {
    setCompanyName(cartList[0].company_name)
    let maxMoney = cartList[0].total
    cartList.forEach((e, i) => {
      console.log(e.total)
      if (parseInt(e.total) > maxMoney) maxMoney = parseInt(e.total)
    })
    setTotal(maxMoney)
    // axios.get(`/getCart?u_id=${userID}`)
    // getShoppingCart()

    let cartElements = cartList.map((e, i) => (
      <div className='cart element' key={i}>
        <CartElement data={e} />
      </div>
    ))

    setCartList(cartElements)
  }, [])

  return (
    <div>
      <h1 className='cart companyName'>{companyName}</h1>
      <div className='cart itemsWrapper'>{cartListDyn}</div>
      <div className='cart total'>
        <h2 style={{ color: 'black' }}>Suma:</h2>
        <h2 style={{ color: 'black' }}>{total} zł</h2>
      </div>
      <div className='cart payment'>
        <select name='shipment'>
          <option value='0'>Wybierz sposób dostawy...</option>
          <option value='kurier'>Kurier</option>
          <option value='osobisty'>Odbiór osobisty</option>
          <option value='paczkomat'>Paczkomat</option>
        </select>
        <a href='http://stargard.festiwalczacki.pl/payment.php' className='cart buyButton'>
          Kup teraz
        </a>
      </div>
    </div>
  )
}
