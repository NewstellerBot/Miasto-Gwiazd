import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { App, Search } from './views'

import reportWebVitals from './reportWebVitals'

import './assets/css/main.css'
import './assets/css/reset.css'

import ShoppingCart from './views/shoppingCart'

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCart />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// todo axios
//reportWebVitals(console.log)
