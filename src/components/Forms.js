import React, { useState } from 'react'
import axios from 'axios'
import '../assets/css/Forms.css'
import { useHistory } from 'react-router-dom'

function Forms(props) {
  const history = useHistory()
  const [login, setLogin] = useState({ email: '', password: '' })
  const [register, setRegister] = useState({ name: '', surname: '', email: '', telephone: '', password: '' })
  const [companyRegister, setCompanyRegister] = useState({
    companyName: '',
    companyStreet: '',
    companyZipCode: '',
    companyEmail: '',
    companyPhone: '',
    companyDesc: '',
  })

  const [loginAlert, setLoginAlert] = useState('')
  const [registerAlert, setRegisterAlert] = useState('')
  const [registerCompanyAlert, setRegisterCompanyAlert] = useState('')

  if (props.type == 'login') {
    return (
      <div className='form'>
        <div className='login-page-alert'>{loginAlert}</div>
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
                  if (res.data[0] == 1) setLoginAlert('Podano niewłaściwe hasło, spróbuj ponownie')
                  else if (res.data[0] == 2) setLoginAlert('Podano niewłaściwy E-mail, spróbuj ponownie')
                  else {
                    history.goBack()
                    sessionStorage.setItem('userId', res.data[0])
                    sessionStorage.setItem('userId', res.data[1])
                  }
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
        <div className='login-page-alert'>{registerAlert}</div>
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
              newRegister.append('reg_user', true)
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

                  if (res.data == 1) setRegisterAlert('Podany E-mail nie istnieje, spróbuj ponownie')
                  else if (res.data == 2) setRegisterAlert('Podany E-mail jest zajęty, spróbuj ponownie')
                  else {
                    sessionStorage.setItem('userId', res.data)
                    sessionStorage.setItem('isCompany', '')
                    history.goBack()
                  }
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
  } else if (props.type == 'registerCompany') {
    return (
      <div className='form'>
        <div className='form-input'>
          <label>
            Nazwa firmy:
            <input
              type='text'
              autoComplete='on'
              onChange={e => {
                setCompanyRegister({ ...companyRegister, companyName: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-input'>
          <label>
            Adres:
            <input
              type='text'
              autoComplete='on'
              onChange={e => {
                setCompanyRegister({ ...companyRegister, name: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-input'>
          <label>
            Kod pocztowy:
            <input
              type='text'
              autoComplete='on'
              onChange={e => {
                setCompanyRegister({ ...companyRegister, companyZipCode: e.target.value })
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
                setCompanyRegister({ ...companyRegister, companyEmail: e.target.value })
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
                setCompanyRegister({ ...companyRegister, tcompanyPhone: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-input'>
          <label>
            Opis:
            <input
              type='text'
              onChange={e => {
                setCompanyRegister({ ...companyRegister, companyDesc: e.target.value })
              }}
            />
          </label>
        </div>
        <div className='form-submit'>
          <button
            onClick={() => {
              const newRegister = new URLSearchParams()
              newRegister.append('reg_company', true)
              newRegister.append('user_id', sessionStorage.getItem('userId'))
              newRegister.append('company_name', register.companyName)
              newRegister.append('company_street', register.companyStreet)
              newRegister.append('company_zipcode', register.companyZipCode)
              newRegister.append('company_email', register.companyEmail)
              newRegister.append('company_phone', register.ccopanyTelephone)
              newRegister.append('company_desc', register.companyDesc)

              axios
                .post('https://stargard.festiwalczacki.pl/backend/registerCompany.php', newRegister, {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  },
                })
                .then(res => {
                  if (res.data == 0) history.goBack()
                  sessionStorage.setItem('companyId', res.data[1])
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
