import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Audit from '../containers/Audit'
import Settings from '../containers/Settings'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/audit' component={Audit}/>
      <Route path='/settings' component={Settings}/>
      <Route component={Home}/>
    </Switch>
  </main>
)

export default Main
