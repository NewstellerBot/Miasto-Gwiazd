import React, { useState } from 'react'
import '../assets/css/NavbarSearch.css'
import axios from 'axios'

function NavbarSearch() {
  const [search, doSearch] = useState('')

  return (
    <div className='search-navi' id='searchbar-navi'>
      <input className='search-navi' type='text' placeholder='Search anything...' />
      <div className='search-navi lane'></div>
    </div>
  )
}

export default NavbarSearch
