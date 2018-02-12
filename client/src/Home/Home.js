import React, { Component } from 'react'
import { PatternList } from './PatternList'

export default class PatternRow extends Component {

  render () {
    return (
      <div className="App-container">
        <div className="App-content">
          <PatternList />
        </div>
      </div>
    )
  }
}

