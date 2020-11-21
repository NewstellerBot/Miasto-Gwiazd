import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/App.css'

function App() {
  return (
    <>
      <div className='m-header'>
        <div className='m-header__image'>
          <div className='m-header__image__navbar'>
            <div className='m-header__image__navbar__register'></div>
            <div className='m-header__image__navbar__'></div>
          </div>
        </div>
        <div className='m-header__slope__up'></div>
        <div className='m-header__text'>
          <div className='m-header__text__wrapper'>
            <h1>Czego potrzebujesz?</h1>
            <h2>Juz teraz wyszukaj produkt lub sklep</h2>
          </div>
        </div>
        <div className='m-header__slope__down'></div>
        <div className='m-header__complement'></div>
      </div>
      <footer>Test</footer>
    </>
  )
}

export default App
