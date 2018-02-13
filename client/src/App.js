import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Router from './_shared/Router'
import SideNavigation from './_shared/SideNavigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-nav">
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
