import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../containers/login'
import Index from '../containers/index'
import { hot } from 'react-hot-loader'

const PcHotRoute = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)
export default hot(module)(PcHotRoute)
