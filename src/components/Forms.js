import React, { useState } from 'react'
import axios from 'axios'
import '../assets/css/Forms.css'

function Forms(props) {
  const [login, setLogin] = useState({ email: '', password: '' })
  const [register, setRegister] = useState({ name: '', surname: '', email: '', telephone: '', password: '' })
  const [alert, setAlert] = useState('')

  if (props.type == 'login') {
    return (
      <div className='form'>
        <div className='login-page-alert'>{alert}</div>
        <div className='form-input'>
          <label>
            E-mail:
            <input
              type='email'
              autoComplete='on'
              onChange={e => {
                setLogin({ ...login, email: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-input'>
          <label>
            Hasło:
            <input
              type='password'
              onChange={e => {
                setLogin({ ...login, password: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-submit'>
          <button
            onClick={() => {
              const newLogin = new URLSearchParams()
              newLogin.append('email', login.email)
              newLogin.append('password', login.password)
              axios({
                method: 'post',
                url: 'https://stargard.festiwalczacki.pl/backend/login.php',
                data: newLogin,
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
              })
                .then(res => {
                  console.log(res)
                  if (res.data == 2) setAlert('Podano niewłaściwy E-mail, spróbuj ponownie')
                  if (res.data == 1) setAlert('Podano niewłaściwe hasło, spróbuj ponownie')
                })
                .catch(err => {})
            }}
            disabled={!(login.email && login.password)}
          >
            Zatwierdź
          </button>
        </div>
      </div>
    )
  } else if (props.type == 'register') {
    return (
      <div className='form'>
        <div className='form-input'>
          <label>
            Imię:
            <input
              type='text'
              autoComplete='on'
              onChange={e => {
                setRegister({ ...register, name: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-input'>
          <label>
            Nazwisko:
            <input
              type='text'
              autoComplete='on'
              onChange={e => {
                setRegister({ ...register, surname: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-input'>
          <label>
            E-mail:
            <input
              type='email'
              autoComplete='on'
              onChange={e => {
                setRegister({ ...register, email: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-input'>
          <label>
            Numer telefonu:
            <input
              type='text'
              autoComplete='on'
              onChange={e => {
                setRegister({ ...register, telephone: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-input'>
          <label>
            Hasło:
            <input
              type='password'
              minLength='8'
              required='1'
              onChange={e => {
                setRegister({ ...register, password: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-submit'>
          <button
            onClick={() => {
              const newRegister = new URLSearchParams()
              newRegister.append('name', register.name)
              newRegister.append('surname', register.surname)
              newRegister.append('email', register.email)
              newRegister.append('telephone', register.telephone)
              newRegister.append('password', register.password)

              axios
                .post('https://stargard.festiwalczacki.pl/backend/register.php', newRegister, {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  },
                })
                .then(res => {
                  console.log(res)
                })
                .catch(err => {})
            }}
            disabled={!(register.name && register.surname && register.email && register.telephone && register.password)}
          >
            Zatwierdź
          </button>
        </div>
      </div>
    )
  }
}

export default Forms
