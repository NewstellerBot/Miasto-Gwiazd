import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { removeFromCart } from '../helpers/cart'

export default function CartElement(props) {
  return (
    <div className='search-result'>
      <div className='result-image'>
        <img src={`https://stargard.festiwalczacki.pl/assets/uploads/img/${props.image}`} alt='' />
      </div>
      <div className='result-data'>
        <div className='result-name'>
          {`${props.name} x${props.quantity}`}
          <span className='add-cart' onClick={() => removeFromCart}>
            <FontAwesomeIcon icon='trash' />
          </span>
        </div>
        <div className='result-price'>{`${(props.price / 100).toFixed(2)} zł`}</div>
        <div className='result-company'>{props.company}</div>
      </div>
    </div>
  )
}
