import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Pattern } from './Pattern/Pattern'
import Home from './Home/Home'

class NoMatch extends Component {
  render () {
    return <div>The page you are looking for could not be found :(</div>
  }
}

export default class Router extends Component {
  render () {
    return (
      <div className='Router'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/patterns/:id' component={Pattern} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
