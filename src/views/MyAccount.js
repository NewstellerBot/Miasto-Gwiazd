import React from 'react'
import '../assets/css/MyAccount.css'
import { Navbar } from '../components'
import Forms from '../components/Forms'

function MyAccount() {
  return (
    <>
      <Navbar />
      <div className='login-page-container'>
        <div className='login-page'>
          <Forms type='registerCompany' />
        </div>
      </div>
    </>
  )
}
export default MyAccount
