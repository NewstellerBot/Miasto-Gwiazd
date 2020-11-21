import React from 'react'
import '../assets/css/Tile.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Tile(props) {
  return (
    <Link to={props.link}>
      <div className='tile'>
        <div className='tile__title'>{props.title}</div>
        <div className='tile__text'>{props.text}</div>
      </div>
    </Link>
  )
}

Tile.protoTypes = { title: PropTypes.string, text: PropTypes.string, link: PropTypes.string }
