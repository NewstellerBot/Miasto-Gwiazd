import React from 'react'
import { useHistory } from 'react-router-dom'

import { Searchbar, Tile } from '../components/'

import '../assets/css/App.css'

function App() {
  let history = useHistory()

  function handleRegister() {
    history.push('/register')
  }

  return (
    <>
      <div className='splash'>
        <div className='splash-image'>
          <button className='login-btn' onClick={handleRegister}>
            Jesteś przedsiębiorcą?
          </button>
        </div>
        <Searchbar className='splash-search' />
        <div className='splash-slope-up' />
        <div className='splash-text'>
          <h1>Czego potrzebujesz?</h1>
          <h2>Łatwo i szyko znajdź produkt lub sklep</h2>
        </div>
        <div className='splash-slope-down' />
      </div>
      <div className='container'>
        <Tile link='/kowal' text='Hej jestem fryzjerem. Kowal robi dzyń dzyń' title='Fryzjer' />
        <Tile link='/fryzjer' text='Hej jestem kowalem' title='Kowal' />
        <Tile link='/fryzjer' text='Hej jestem kowalem' title='Kowal' />
      </div>
      <footer>
        <p className='footer-text'>Lorem Ipsum</p>
      </footer>
    </>
  )
}

export default App
