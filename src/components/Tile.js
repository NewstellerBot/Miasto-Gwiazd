import React from 'react'
import { useHistory } from 'react-router-dom'

import '../assets/css/Tile.css'

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
