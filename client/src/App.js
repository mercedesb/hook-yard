import React, { Component } from 'react';
import logo from './BlindDogYarns-logo2.png';
import './App.css';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { PatternList } from './PatternList'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/',
  })
});

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
        <ApolloProvider client={client}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-container">
              <div className="App-content">
                <PatternList />
              </div>
            </div>
          </div>
        </ApolloProvider>

    );
  }
}

export default App;
