import React, { useState } from 'react'
import '../assets/css/LoginPage.css'
import Forms from './Forms'

function LoginPage() {
  const [selectedType, setSelectedType] = useState('login')

  return (
    <div className='login-page-container'>
      <div className='login-page'>
        <div className='login-page-buttons'>
          <button className='login-page-login' autoFocus onClick={() => setSelectedType('login')}>
            Logowanie
          </button>
          <button className='login-page-register' onClick={() => setSelectedType('register')}>
            Rejestracja
          </button>
        </div>
        <Forms type={selectedType} />
      </div>
    </div>
  )
}

export default LoginPage
