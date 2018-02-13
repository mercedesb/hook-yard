import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/BlindDogYarns-logo2.png';
import './SideNavigation.css';

export default class SideNavigation extends Component {
  state = {
    isOpen: true
  }

  toggle = (event) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
     <nav className={`SideNavigation ${this.state.isOpen ? 'is-open' : 'is-closed'}`}>
        <Link to='/'>
          <img src={logo} className="SideNavigation-logo" alt="logo" />
        </Link>

        <div className='SideNavigation-toggle' onClick={this.toggle}></div>

        <Link className='SideNavigation-link' to='/posts/ehRKkYA8nK0KwWgkSWS8C'>Abbreviations</Link>
        <Link className='SideNavigation-link'  to=''>...</Link>
        <a className='SideNavigation-link' target='_blank' rel="noopener noreferrer" href='http://blinddogyarns.etsy.com'>Etsy</a>
      </nav>
    )
  }
}

