import React from 'react'
import { render } from 'react-dom'
import Landing from './landing'
import Search from './Search'
import Layout from './Layout'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

const App = function () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Layout} />
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Router>
  )
}

render(<App />, document.getElementById('app'))
