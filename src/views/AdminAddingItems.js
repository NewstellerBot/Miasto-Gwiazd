import React from 'react'
import '../assets/css/Admin.css'
import { NavLink, Link } from 'react-router-dom'
import homeLogo from '../images/home-logo.png'
import AddingItemForm from '../components/AddingItemForm'

export default function AdminAddingItems() {
  return (
    <>
      <div className='navbar'>
        <Link to='/'>
          <img src={homeLogo} alt='Logo' />
        </Link>
        <NavLink className='navbar-text animation' to='/admin-orders'>
          <div className='orders'>Zamówienia</div>
        </NavLink>
        <NavLink className='navbar-text animation' to='/admin'>
          <div className='general'>Ogólne</div>
        </NavLink>
        <NavLink
          className='navbar-text animation active'
          to='/admin-adding-items'
          activeStyle={{ backgroundColor: '#000', padding: '4%', color: '#fff' }}
        >
          <div className='adding-items'>Dodaj produkt</div>
        </NavLink>
      </div>
      <div className='form'>
        <AddingItemForm />
      </div>
    </>
  )
}
