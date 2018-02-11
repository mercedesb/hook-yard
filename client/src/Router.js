import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Pattern } from './Pattern'
import Home from './Home'

class NoMatch extends Component {
  render () {
    return <div>The page you are looking for could not be found :(</div>
  }
}

export default class Router extends Component {
  render () {
    return (
      <div className='routes-container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/patterns/:id' component={Pattern} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
