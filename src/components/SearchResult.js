import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/SearchResult.css'
import { Link } from 'react-router-dom'

export default function SearchResult(props) {
  return (
    <Link to={`/product/${props.productID}`} className='search-result'>
      <img className='result-image' src={props.image} alt='' onerror="this.src='source.unsplash.com/random';" />
      <div className='result-data'>
        <div className='result-name'>{props.name}</div>
        <div className='result-price'>{props.price / 100}</div>
        <div className='result-vendor'>{props.vendor}</div>
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
