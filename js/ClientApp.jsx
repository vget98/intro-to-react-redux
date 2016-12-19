import React from 'react'
import Landing from './landing'
import Search from './Search'
import Layout from './Layout'
import Details from './Details'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { store } from './Store'
import { Provider } from 'react-redux'

const myRoutes = () => (
  <Route path='/' component={Layout} />
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
