import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">{/*<Home />*/}</Route>
          <Route path="/login">{/*<Login />*/}</Route>
          <Route path="/favourite">{/*<Favourite />*/}</Route>
          <Route path="/check-out">{/*<Cart />*/}</Route>
        </Switch>
      </Router>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
