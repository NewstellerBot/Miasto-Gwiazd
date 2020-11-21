import React, { useState } from 'react'
import '../assets/css/LoginForm.css'
import LineIcon from 'react-lineicons'
import { Link, useHistory } from 'react-router-dom'

function LoginForm() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='login-form'>
      <div onClick={() => history.goBack()} className='login-form-close'>
        <LineIcon name='close' />
      </div>
      <form
        onSubmit={() => {
          localStorage.setItem('email', email)
          localStorage.setItem('password', password)
        }}
      >
        <div className='login-form-email'>
          <label>
            E-mail:
            <input type='email' autoComplete='on' required='1' onChange={setEmail} />
          </label>
        </div>
        <div className='login-form-password'>
          <label>
            Hasło:
            <input type='password' minLength='8' required='1' onChange={setPassword} />
          </label>
        </div>
        <div className='login-form-submit'>
          <input type='submit' value='Zatwierdź' />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
