import React from 'react'
import '../assets/css/Admin.css'
import { NavLink, Link } from 'react-router-dom'
import homeLogo from '../images/home-logo.png'

export default function Admin() {
  return (
    <>
      <div className='navbar'>
        <Link to='/'>
          <img src={homeLogo} alt='Logo' />
        </Link>

        <div className='orders navbar-text animation'>Zamówienia</div>

        <NavLink className='navbar-text animation' to='/admin'>
          <div className='general'>Ogólne</div>
        </NavLink>

        <NavLink className='navbar-text animation' to='/admin-adding-items'>
          <div className='adding-items'>Dodaj produkt</div>
        </NavLink>
      </div>
    </>
  )
}
