import React, { Component } from 'react';
import logo from './BlindDogYarns-logo2.png';
import './App.css';
import Router from './Router'


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
        <div className="App-content">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
