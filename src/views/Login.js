import React from 'react'
import '../assets/css/Home.css'
import { Navbar, LoginForm } from '../components'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <LoginForm />
    </div>
  )
}
export default Home
