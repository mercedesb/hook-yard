import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {

  render () {
    return (
      <div className={`Header ${this.props.className}`}>
         {this.props.children}
      </div>
    )
  }
}

