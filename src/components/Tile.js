import React from 'react'

import '../assets/css/Tile.css'
import { useHistory } from 'react-router-dom'

export default function Tile(props) {
  let history = useHistory()
  function handleClick() {
    history.push(props.link)
  }
  return (
    <div className='tile' onClick={handleClick}>
      <div className='tile__title'>{props.title}</div>
      <div className='tile__text'>{props.text}</div>
    </div>
  )
}
