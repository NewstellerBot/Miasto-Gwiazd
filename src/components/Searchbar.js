import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../assets/css/Searchbar.css'

export default function SearchBar(props) {
  const [search, setSearch] = useState('')

  const history = useHistory()

  return (
    <div className='searchbar-container'>
      <div className='searchbar'>
        <input
          className='searchbar-input'
          autoFocus
          placeholder='Wyszukaj...'
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              history.push(`/search/${search}`)
            }
          }}
          autoComplete='off'
        />
        <button onClick={() => history.push(`/search/${search}`)}>
          <FontAwesomeIcon icon='chevron-right' />
        </button>
      </div>
    </div>
  )
}
