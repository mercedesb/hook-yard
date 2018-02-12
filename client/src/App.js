import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './BlindDogYarns-logo2.png';
import './App.css';
import Router from './Router'
import SideNavigation from './SideNavigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-nav">
          <Link to='/'>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <SideNavigation />
        </div>
        <div className="App-content">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
