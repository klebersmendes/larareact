import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import First from './First'
import Dashboard from './Dashboard'
import Home from './Home'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          {/* <Header /> */}
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/first' component={First} />
            <Route path='/home' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))