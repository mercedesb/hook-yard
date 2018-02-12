import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideNavigation.css';

export default class SideNavigation extends Component {

  render () {
    return (
     <nav className='SideNavigation'>
        <Link className='SideNavigation-link' to='/abbreviations'>Abbreviations</Link>
        <Link className='SideNavigation-link'  to=''>...</Link>
        <a className='SideNavigation-link' target='_blank' rel="noopener noreferrer" href='http://blinddogyarns.etsy.com'>Etsy</a>
      </nav>
    )
  }
}

