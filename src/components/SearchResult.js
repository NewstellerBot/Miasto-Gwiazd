import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/SearchResult.css'

export default function SearchResult(props) {
  return (
    <div className='search-result'>
      <img className='result-image' src={props.image} />
      <div className='result-data'>
        <div className='result-name'>{props.name}</div>
        <div className='result-price'>{props.price / 100}</div>
        <div className='result-desc'>{props.desc.length <= 240 ? props.desc : props.desc.substr(0, 237) + '...'}</div>
      </div>
    </div>
  )
}

SearchResult.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
}
