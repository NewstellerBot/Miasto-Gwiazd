import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/SearchResult.css'
import { Link } from 'react-router-dom'

export default function SearchResult(props) {
  return (
    <Link to={`/product/${props.productId}`} className='search-result'>
      <div className='result-image'>
        <img src={`https://stargard.festiwalczacki.pl/assets/uploads/img/${props.image}`} alt='' />
      </div>
      <div className='result-data'>
        <div className='result-name'>{props.name}</div>
        <div className='result-price'>{`${(props.price / 100).toFixed(2)} zł`}</div>
        <div className='result-company'>{props.company}</div>
        <div className='result-desc'>{props.desc.length <= 240 ? props.desc : props.desc.substr(0, 237) + '...'}</div>
      </div>
    </Link>
  )
}

SearchResult.propTypes = {
  productID: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  vendor: PropTypes.string,
  desc: PropTypes.string,
}
