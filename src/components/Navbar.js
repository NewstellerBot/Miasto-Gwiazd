import React, { useState } from 'react'
import '../assets/css/Navbar.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import homeLogo from '../images/home-logo.png'
import LineIcon from 'react-lineicons'

function Navbar() {
  const history = useHistory()
  const [search, doSearch] = useState('aaa')
  const findResults = () => {
    history.push(`${search}`)
  }
  return (
    <div className="navbar">
      <div className="navbar-home">
        <img
          src={homeLogo}
          alt="Logo"
          onClick={() => {
            history.push('/')
          }}
        />
      </div>

      <div className="navbar-search">
        <div className="navbar-search-text">
          <input type="text" placeholder="Search anything..." />
          <div className="navbar-search-lane"></div>
        </div>
        <LineIcon name="search-alt" onClick={findResults()} />
      </div>

      <div className="navbar-navigation">
        <div
          className="navbar-item navbar-login"
          onClick={() => {
            history.push('/login')
          }}
        >
          <LineIcon name="user" />
          <h2>Zaloguj się</h2>
        </div>
        <div
          className="navbar-item navbar-wishlist"
          onClick={() => {
            history.push('/wishlist')
          }}
        >
          <LineIcon name="heart" />
          <h2>Ulubione</h2>
        </div>
        <div
          className="navbar-item navbar-cart"
          onClick={() => {
            history.push('/check-out')
          }}
        >
          <LineIcon name="shopping-basket" />
          <h2>Koszyk</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar
