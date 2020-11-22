import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

import { App, Login, Search } from './views'
import reportWebVitals from './reportWebVitals'

import './assets/css/main.css'
import './assets/css/reset.css'

library.add(faChevronRight, faUser, faShoppingCart, faHeart)
console.log(library)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route path='/search/:query'>
          <Search />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// todo axios
reportWebVitals(console.log)
