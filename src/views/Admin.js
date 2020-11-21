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
        <NavLink
          className='navbar-text animation'
          to='/admin-orders'
          activeStyle={{ backgroundColor: '#000', padding: '4%', color: '#fff' }}
        >
          <div className='orders'>Zamówienia</div>
        </NavLink>
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
