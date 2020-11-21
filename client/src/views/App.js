import React from 'react'
import { useHistory } from 'react-router-dom'
import '../assets/css/App.css'
import Tile from '../components/Tile.js'

function App() {
  let history = useHistory()

  function handleRegister() {
    history.push('/register')
  }

  return (
    <>
      <div className='m-header'>
        <div className='m-header__image'>
          <div className='m-header__image__navbar'>
            <div className='m-header__image__navbar__register'>
              <button className='btn' onClick={handleRegister}>
                Jesteś przedsiębiorcą?
              </button>
            </div>
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
