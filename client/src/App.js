import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { gql, graphql, ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/',
  })
});

const graphQLQuery = gql`
  {
    patterns {
      title
    }
  }
`

const getGraphQLEnhancedComponent = graphql(graphQLQuery);

const DataViewer = ({ data: {loading, error, patterns }}) => {
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <ul>{ patterns.map( a => <li key={a.title}>{a.title}</li>) }</ul>
    </div>
  )
};

const DataViewerWithData = getGraphQLEnhancedComponent(DataViewer);

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
              <h1 className="App-title">{this.state.response}</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.

              <DataViewerWithData/>
            </p>
          </div>
        </ApolloProvider>

    );
  }
}

export default App;
