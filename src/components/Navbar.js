import React, { useState } from 'react'
import '../assets/css/Navbar.css'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import homeLogo from '../assets/img/home-logo.png'
import LineIcon from 'react-lineicons'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/home' className='navbar-home'>
        <img src={homeLogo} alt='Logo' />
      </Link>

      <div className='navbar-search'>
        <div className='navbar-search-text'>
          <input type='text' placeholder='Search anything...' />
          <div className='navbar-search-lane'></div>
        </div>
        <LineIcon name='search-alt' />
      </div>

      <div className='navbar-navigation'>
        <Link to='/login' className='navbar-item navbar-login'>
          <LineIcon name='user' />
          Zaloguj się
        </Link>
        <Link to='/favourites' className='navbar-item navbar-wishlist'>
          <LineIcon name='heart' />
          Ulubione
        </Link>
        <Link to='/cart' className='navbar-item navbar-cart'>
          <LineIcon name='shopping-basket' />
          Koszyk
        </Link>
      </div>
    </div>
  )
}

export default Navbar
