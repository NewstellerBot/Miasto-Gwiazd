import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Searchbar } from '.'

import homeLogo from '../assets/img/home-logo.png'

import '../assets/css/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar'>
        <Link to='/' className='navbar-home'>
          <img src={homeLogo} alt='Logo' />
        </Link>

        <Searchbar className='navbar-search' />

        <div className='navbar-navigation'>
          <Link to='/login' className='navbar-item navbar-login'>
            <FontAwesomeIcon icon='user' className='navbar-icon' />
            Zaloguj się
          </Link>
          <Link to='/favourites' className='navbar-item navbar-wishlist'>
            <FontAwesomeIcon icon='heart' className='navbar-icon' />
            Ulubione
          </Link>
          <Link to='/cart' className='navbar-item navbar-cart'>
            <FontAwesomeIcon icon='shopping-cart' className='navbar-icon' />
            Koszyk
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
